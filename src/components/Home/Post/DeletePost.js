import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { deleteOnePost, getPosts } from "../../../services/axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function DeletePost({ postId, setPostsDatas }) {
  const handleDelete = (e) => {
    e.preventDefault();

    async function deletePost() {
      deleteOnePost(postId).then(() => {
        getPosts().then((res) => {
          setPostsDatas(res.data.rows);
        });
      });
    }
    deletePost();
  };

  const submit = (e) => {
    confirmAlert({
      title: "Confirmation",
      message: "Etes-vous sûr de vouloir supprimer cette publication ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelete(e),
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <Button
      variant="contained"
      color="error"
      startIcon={<DeleteIcon />}
      size="small"
      onClick={submit}
    >
      SUPPRIMER
    </Button>
  );
}

export default DeletePost;
