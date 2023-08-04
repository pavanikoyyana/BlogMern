import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">The Modern Diaries</span>
        <span className="headerTitleSm">Blogs</span>
      </div>
      <img className="headerImg" src="https://source.unsplash.com/1600x900" alt="" />
    </div>
  );
}
