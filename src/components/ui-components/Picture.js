import "./Picture.scss";
import Cookies from "universal-cookie";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import Modal from "../ui-components/Modal";
import { useState } from "react";

export default function Picture({ formData, role }) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");
  const cookies = new Cookies();
  const storage = getStorage();

  const handleOpen = (event) => {
    setOpen(true);
    setFile(event.target.files[0]);
  };

  const handleClose = () => setOpen(false);

  let phone_number = "";
  if (role === "tutor") {
    phone_number = formData.phone;
  } else {
    phone_number = formData.phone_number;
  }

  const handleUpload = async () => {
    const randomNumber = Math.random().toString(36).slice(2, 7);
    const imageName = randomNumber + "-" + phone_number;
    const imageRef = ref(storage, `avatar/${imageName}`);
    const metadata = {
      contentType: "image/jpeg",
    };

    await uploadBytes(imageRef, file, metadata)
      .then((snapshot) => {})
      .then(() => {
        getDownloadURL(ref(storage, `avatar/${imageName}`)).then((url) => {
          const photoUrl = {
            link: url,
            phone: phone_number,
            role: role,
          };
          fetch("/api/photo", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "CSRF-Token": cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify(photoUrl),
          })
          .then((response) => response.json())
          .then((data) => {
            if (data.link != "https://firebasestorage.googleapis.com/v0/b/tutorlab-cbc12.appspot.com/o/user_default.png?alt=media&token=e4af10f1-b432-4d3f-a78d-9b09d950b120") {
              const old_image = ref(storage, data.link)
              deleteObject(old_image).then(() =>{
              }).catch((error) => {
                console.log(error)
              })
            }
          })
          const img = document.getElementById("myimg");
          img.setAttribute("src", url);
        });
      });
    handleClose();
  };

  return (
    <div className="picture">
      <Modal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        handleUpload={handleUpload}
        red={false}
        text="Are you sure you want to upload this picture as your profile picture?"
      />

      <form action="/upload" method="POST" encType="multipart/form-data">
        <input type="file" name="file" id="file" onChange={handleOpen} />
        <label htmlFor="file">
          <img id="myimg" src={formData.photoUrl} alt="avatar"></img>
          <p>Upload Profile Picture</p>
        </label>
      </form>
    </div>
  );
}
