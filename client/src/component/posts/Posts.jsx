import Post from "../post/Post";
import "./posts.css";

export default function Posts({posts}) {
  return (<div className="posts">
    {posts.length>0?
      (posts.map((p,index)=>(<Post post={p} key={index}/>)))
      :(<p>There is no posts for this</p>)
    }
  </div>)
}
