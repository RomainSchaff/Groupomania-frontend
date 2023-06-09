import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import SendIcon from "@mui/icons-material/Send";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import { UserData } from "../../Routes/AppContext";
import { Button } from "@mui/material";
import styled from "styled-components";
import DeletePost from "./DeletePost";
import { modifyPost } from "../../../services/axios";

const ButtonDiv = styled.div`
  padding: 0px;
  display: flex;
  justify-content: flex-end;
`;

function ModifyPost({ userId, postId, message, setPostsDatas }) {
  const { userData } = useContext(UserData);
  const [showForm, setShowForm] = useState(false);
  const [post, setPost] = useState(message);
  const [link, setLink] = useState("");

  const handlePostUpdate = (e) => {
    e.preventDefault();
    async function updatePost() {
      modifyPost(postId, post).then(() => setShowForm(!showForm));
    }
    updatePost();
  };

  useEffect(() => {
    if (message) {
      const handleLink = () => {
        let findLink = message.split(" ");
        for (let i = 0; i < findLink.length; i++) {
          if (
            findLink[i].includes("https://") ||
            findLink[i].includes("https://www")
          ) {
            let newLink = findLink[i];
            setLink(newLink);
            setPost(findLink.join(" ").replace(newLink, ""));
          }
        }
      };
      handleLink();
    }
  }, [message]);

  return (
    <>
      <CardContent sx={{ p: 0 }}>
        {showForm === false ? (
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              fontSize: 16,
              fontWeight: "bold",
              p: post !== "" ? 2 : 0,
              backgroundColor: "white",
            }}
          >
            {link ? <a href={link}>{link}</a> : null}
            {post}
          </Typography>
        ) : (
          <TextField
            id="filled-multiline-static"
            multiline
            rows={2}
            fullWidth
            background-color="white"
            defaultValue={post}
            onChange={(e) => setPost(e.target.value)}
            variant="filled"
            sx={{
              backgroundColor: "white",
            }}
          />
        )}
      </CardContent>
      {userId === userData.user_id || userData.user_id === 1 ? (
        <ButtonDiv>
          {showForm === false ? (
            <Button
              variant="contained"
              startIcon={<ThreeSixtyIcon />}
              size="small"
              onClick={() => setShowForm(!showForm)}
            >
              Modifier
            </Button>
          ) : (
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              color="success"
              size="small"
              onClick={handlePostUpdate}
            >
              Valider
            </Button>
          )}
          <DeletePost postId={postId} setPostsDatas={setPostsDatas} />
        </ButtonDiv>
      ) : null}
    </>
  );
}

export default ModifyPost;
