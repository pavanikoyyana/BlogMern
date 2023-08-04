import { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Sidebar() {
  const{BASE_URL}=useContext(Context);
  const [categories,setCategories]=useState([]);
  
  useEffect(()=>{
    const getCats= async()=>{
         const res=await axios.get(`${BASE_URL}/api/categories`);
         setCategories(res.data);
    
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT BLOG</span>
        <img
          className="sidebarImg"
          src="https://source.unsplash.com/350x350"
          alt=""
        />
        <p style={{  fontStyle: "italic",fontWeight:"bold"}}>
        "Blogs are digital canvases where ideas bloom, thoughts take shape, and voices find resonance. They weave stories, share insights, and connect minds across the globe. With each post, a blogger invites readers to embark on a journey of discovery, learning, and inspiration."
        
        "Through words, we discover, we heal, we connect, and we become."

        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {/* {categories.map((category,id)=>(
    <Link to={`/?cat=${category.name}`} className="link" key={id}>
    <li className="sidebarListItem" >{category.name}</li>
    </Link>
        ))} */}
      <p style={{fontSize:"10px"}}>MUSIC,ART,DANCE,ADVENTURE,TRIP,POLITICS,MOVIES,COMEDY ETC...</p>
          
        </ul>
      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <Link to="https://twitter.com/your-twitter-profile" target="_blank">
          <i className="sidebarIcon fa-brands fa-square-twitter" ></i>
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
    </div>

    </div>
  );
}
