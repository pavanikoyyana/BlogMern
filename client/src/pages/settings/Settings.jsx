import { useContext, useState } from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import "./settings.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Settings() {
  const { user, dispatch,BASE_URL } = useContext(Context);
  const [username, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [file, setFile] = useState(null);
  const [success,setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password:password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;

      try {
        await axios.post(`${BASE_URL}/api/upload`, data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put(
        `${BASE_URL}/api/users/${user._id}`,
        updatedUser
      );
    dispatch({type:"UPDATE_SUCCESS",payload:res.data})
      setSuccess(true);
 console.log(res);

    } catch (error) {
    dispatch({type:"UPDATE_FAILURE"})
      console.log(error);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file) : `${BASE_URL}/images/${user.profilePicture}`} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="settingsSubmit" type="submit">Update</button>
          {success && <span style={{color:'green', textAlign:'center',marginTop:'20px'}}>Profile has been updated...</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
