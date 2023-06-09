import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useEffect, useState } from "react";
import { UserData } from "../../Routes/AppContext";
import { getLikes, liked, toggleLike } from "../../../services/axios";

function Likes({ postId }) {
  const { userData } = useContext(UserData);
  const [likes, setLikes] = useState();
  const [postLiked, setPostLiked] = useState(false);

  useEffect(() => {
    async function fetchLikes() {
      getLikes(postId).then((res) => {
        setLikes(res.data.rows[0].total);
      });
    }
    async function checkLike() {
      liked(postId, userData.user_id).then((res) => {
        if (res.data.rows.length !== 0) setPostLiked(true);
      });
    }
    checkLike();
    fetchLikes();
  }, []);

  const handleLike = (e) => {
    e.preventDefault();

    async function likeUnlike() {
      toggleLike(postId, userData.user_id).then((res) => {
        console.log(res);
        if (postLiked) {
          setPostLiked(false);
          setLikes(likes - 1);
        } else {
          setPostLiked(true);
          setLikes(parseInt(likes) + 1);
        }
      });
    }
    likeUnlike();
  };

  return (
    <>
      {postLiked ? (
        <Button
          variant="contained"
          endIcon={<FavoriteIcon />}
          onClick={handleLike}
          color="error"
          size="small"
        >
          {likes}
        </Button>
      ) : (
        <Button
          variant="outlined"
          endIcon={<FavoriteIcon />}
          onClick={handleLike}
          size="small"
        >
          {likes}
        </Button>
      )}
    </>
  );
}

export default Likes;
