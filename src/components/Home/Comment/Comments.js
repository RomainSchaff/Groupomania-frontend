import Typography from "@mui/material/Typography";
import styled from "styled-components";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
import { Triangle } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ProfilePicture from "../Users/ProfilePicture";
import Moment from "react-moment";

const CommentContainer = styled.div`
  margin: 5px 0px;
  padding: 5px 5px 10px 10px;
  background-color: white;
  border: none;
  border: 1px solid lightblue;
  border-radius: 8px;
`;

const HeaderDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

function Comments({ postId, comments, setComments, loading }) {
  return (
    <div>
      <AddComment
        postId={postId}
        comments={comments}
        setComments={setComments}
      />
      {loading === false ? (
        comments.map((comment) => {
          return (
            <CommentContainer key={comment.date_creation + comment.comment_id}>
              <HeaderDiv>
                <ProfilePicture userId={comment.user_id} />
                <Typography
                  key={comment.date_creation}
                  sx={{ fontWeight: "bold" }}
                >
                  {comment.user_firstname} {comment.user_lastname}{" "}
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    fontSize: 12,
                    textAlign: "right",
                    marginLeft: "10px",
                  }}
                >
                  <Moment fromNow>{comment.date_creation}</Moment>
                </Typography>
                <DeleteComment
                  commentData={comment}
                  setComments={setComments}
                />
              </HeaderDiv>
              <Typography
                key={comment.comment_id}
                sx={{ py: 1, px: 2, fontSize: 16 }}
              >
                {comment.comment}
              </Typography>
            </CommentContainer>
          );
        })
      ) : (
        <Triangle height="100" width="100" color="blue" ariaLabel="loading" />
      )}
    </div>
  );
}

export default Comments;
