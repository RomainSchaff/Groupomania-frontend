import ProfileUpdated from "../components/Profile/ProfileUpdated";
import { UserData } from "../components/Routes/AppContext";
import { useContext } from "react";
import Form from "../components/Log/Form";
import styled from "styled-components";

const ProfilePage = styled.div`
  padding: 20px 0px;
  background-color: white;
  min-height: 100vh;
  margin-bottom: 50px;
`;

function Profile() {
  const { userData } = useContext(UserData);

  return (
    <ProfilePage>
      {userData ? <ProfileUpdated></ProfileUpdated> : <Form />}
    </ProfilePage>
  );
}

export default Profile;
