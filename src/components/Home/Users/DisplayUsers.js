import { useEffect, useState } from "react";
import { getUsersDatas } from "../../../services/axios";
import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import Moment from "react-moment";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const UsersDiv = styled.div`
  position: absolute;
  right: 10%;
  background: lightblue;
  border-radius: 0px;
  padding: 15px 25px 15px 25px;
  @media (max-width: 1615px) {
    right: 10px;
  }
  @media (max-width: 1315px) {
    display: none;
  }
`;

const StyledDiv = styled.div`
  margin: 15px 5px;
  display: flex;
`;

const StyledDate = styled.div`
  font-size: 12px;
  font-style: oblique;
`;

const StyledTitle = styled.h2`
  font-size: 19px;
  margin-bottom: 20px;
`;

function DisplayUsers() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(3);

  useEffect(() => {
    getUsersDatas().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <UsersDiv>
      <StyledTitle>Vous connaissez peut être :</StyledTitle>
      {users.slice(0, count).map((user) => {
        return (
          <StyledDiv key={user.user_firstname + user.user_id}>
            <ProfilePicture userId={user.user_id} />
            <div>
              {user.user_firstname} {user.user_lastname}
              <StyledDate>
                depuis le <Moment format="DD/MM/YYYY">{user.date}</Moment>
              </StyledDate>
            </div>
          </StyledDiv>
        );
      })}
      <IconButton
        onClick={() => {
          if (count < users.length && count < 17) {
            setCount(count + 3);
          }
        }}
      >
        {" "}
        <ExpandMoreIcon />
      </IconButton>
      {count > 3 ? (
        <IconButton
          onClick={() => {
            setCount(count - 3);
          }}
        >
          {" "}
          <ExpandLessIcon />
        </IconButton>
      ) : null}
    </UsersDiv>
  );
}

export default DisplayUsers;
