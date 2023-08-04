import { useContext, useEffect, useState } from "react";
import Header from "../../component/header/Header";
import Posts from "../../component/posts/Posts";
import Sidebar from "../../component/sidebar/Sidebar";
import axios from "axios";
import "./home.css";
import { useLocation } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Home() {
const{BASE_URL}=useContext(Context);
const [posts,setPosts]=useState([]);
const {search}=useLocation();

useEffect(()=>{
   const fetchPosts=async ()=>{
     const res=await axios.get(`${BASE_URL}/api/posts${search}`);
     setPosts(res.data);
   }
   fetchPosts();
},[search]);

  return (<>
      <Header />
    <div className="home">
    <Posts posts={posts}/>
    <Sidebar/>
    </div>
    </>
  );
}
