import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { setDateFormat } from "../../utils/date";
import { UserData } from "../../Routes/AppContext";
import { addComment, getComments } from "../../../services/axios";

function AddComment({ postId, comments, setComments }) {
  const { userData } = useContext(UserData);
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();

    const data = {
      user_id: userData.user_id,
      post_id: postId,
      comment: comment,
      date_creation: setDateFormat(),
    };

    async function uploadComment() {
      addComment(postId, data).then(() => {
        getComments(postId).then((res) => {
          setComments(res.data);
        });
      });
    }
    uploadComment();
    setComment("");
  };

  return (
    <form style={{ position: "relative" }}>
      <TextField
        id="filled-multiline-static"
        multiline
        rows={3}
        fullWidth
        value={comment}
        placeholder={`Donnez votre avis ${userData.user_firstname}`}
        onChange={(e) => setComment(e.target.value)}
        variant="filled"
        sx={{ margin: "15px 0px 30px 0px", backgroundColor: "white" }}
      />
      <Button
        onClick={handleComment}
        startIcon={<SendIcon />}
        variant="contained"
        color="success"
        size="small"
        sx={{
          position: "absolute",
          right: "10px",
          bottom: "0px",
        }}
      >
        Commenter
      </Button>
    </form>
  );
}

export default AddComment;
