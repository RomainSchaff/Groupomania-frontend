import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { UserData } from "../../Routes/AppContext";
import { deleteOneComment, getComments } from "../../../services/axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export const CancelIconStyled = styled(CancelIcon)(`
position: absolute;
top: 0px;
right: 0px;
  &:hover{
    cursor: pointer;
  }
`);

function DeleteComment({ commentData, setComments }) {
  const { userData } = useContext(UserData);

  const submit = (e) => {
    confirmAlert({
      title: "Confirmation",
      message: "Etes-vous sûr de vouloir supprimer ce commentaire ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDeleteComment(e),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleDeleteComment = (e) => {
    e.preventDefault();

    async function deleteComment() {
      deleteOneComment(commentData.comment_id).then(() => {
        getComments(commentData.post_id).then((res) => {
          setComments(res.data);
        });
      });
    }
    deleteComment();
  };

  return (
    <Typography
      key={commentData.comment_id + commentData.date_creation}
      sx={{ fontStyle: "italic", fontSize: 12, textAlign: "right" }}
    >
      {commentData.user_id === userData.user_id || userData.user_id === 1 ? (
        <CancelIconStyled color="error" onClick={submit} />
      ) : null}
    </Typography>
  );
}

export default DeleteComment;
