import "./Picture.scss";
import Cookies from "universal-cookie";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Picture({ formData, role }) {

  const cookies = new Cookies();
  const storage = getStorage()

  let phone_number =  ''
  if (role === 'tutor') {
    phone_number = formData.phone
  } else {
    phone_number = formData.phone_number
  }

  const handleChange = (prop) => (event) => {
    const file = event.target.files[0]

    const randomNumber = Math.random().toString(36).slice(2,7)
    const imageName = randomNumber + '-' + phone_number
    const imageRef = ref(storage, `avatar/${imageName}`)
    const metadata = {
      contentType: 'image/jpeg'
    }

    const uploadFinalized = async(req, res) => {
      await uploadBytes(imageRef, file, metadata).then((snapshot) => {
      }).then(() => {
        getDownloadURL(ref(storage, `avatar/${imageName}`))
        .then((url) => {
          const photoUrl = {
            link: url,
            phone: phone_number,
            role: role
          }
          fetch('/api/photo', {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "CSRF-Token": cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify(photoUrl),
          });
          const img = document.getElementById('myimg')
          img.setAttribute('src', url)
        })
      })
    }
    uploadFinalized()
  };

  return (
    <div className="picture">
      <form action="/upload" method="POST" encType="multipart/form-data">
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleChange("photo")}
        />
        <label htmlFor="file">
          <img id='myimg' src={formData.photoUrl} alt="avatar"></img>
          <p>Upload Profile Picture</p>
        </label>
      </form>
    </div>
  );
}