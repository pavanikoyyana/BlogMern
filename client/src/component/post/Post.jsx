import { useContext } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Post({ post }) {
  const { BASE_URL } = useContext(Context);
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src={BASE_URL + "/images/" + post.photo}
          alt=""
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, index) => (
            <span className="postCat" key={index}>
              {c.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
