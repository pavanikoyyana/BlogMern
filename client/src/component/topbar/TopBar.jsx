import { Link, NavLink } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch,BASE_URL } = useContext(Context);

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
      <Link to="https://twitter.com/your-twitter-profile" target="_blank">
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        </Link>
        <Link to="https://www.facebook.com/your-facebook-profile" target="_blank">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        </Link>
        <Link to="https://www.pinterest.com/your-pinterest-profile" target="_blank">
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </Link>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink className="link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <Link className=" link" to="/about">
              ABOUT
            </Link>
          </li>
          {/* <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li> */}
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogOut}>
            {" "}
            {user && " LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
          <img
            className="topImg"
            src={`${BASE_URL}/images/${user.profilePicture}`}
            // src="https://source.unsplash.com/300x350"
            alt=""
          />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink className="link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink className="link" to="/register">
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}

        {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
      </div>
    </div>
  );
}
