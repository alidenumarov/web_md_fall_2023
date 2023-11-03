import "./general.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const { userId, date, desc, photo, comment } = post;
  const currentUser = Users.find((user) => user.id === userId);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={currentUser.profilePicture}
              alt=""
            />
            <span className="postUsername">{currentUser.username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="components/image/like.png"
              onClick={handleLike}
              alt=""
            />
            <img
              className="likeIcon"
              src="components/image/heart.png"
              onClick={handleLike}
              alt=""
            />
            <span className="postLikeCounter">
              {likes} {likes === 1 ? "person" : "people"} like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
