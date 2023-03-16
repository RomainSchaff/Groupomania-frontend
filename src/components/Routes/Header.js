import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../images/icon.svg";
import { UserData, UserPicture } from "./AppContext";
import { getProfilImg } from "../../services/axios";
import DefaultProfileImg from "../../images/profile.png";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

const NavContainer = styled.nav`
  padding: 5px 10%;
  display: flex;
  min-height: 80px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #1565c0;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
`;

const HomeLogo = styled.img`
  height: 60px;
  border: 1px solid black;
  border-radius: 50%;
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 30px;
  padding: 3px 0px;
  margin-left: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const NavLinkBar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ProfileImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  padding: 10px;
  margin: 0px 10px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  &:hover,
  &:focus {
    box-shadow: 3px 3px 5px black;
  }
  &:active {
    color: blue;
  }
  ${(props) =>
    props.$isFullLink &&
    `
    color: black;
    background-color: white;
    padding: 7px;
    border-radius: 50%;
    :hover{
      color: red;
    }`}
  ${(props) =>
    props.$isProfileLink &&
    `
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;`}
`;

function Header() {
  const { profileImg, setProfileImg } = useContext(UserPicture);
  const { userData, setUserData } = useContext(UserData);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setUserData(null);
  }

  useEffect(() => {
    if (userData) {
      async function fetchProfileImg() {
        getProfilImg(userData.user_id).then((res) => {
          setProfileImg(res.data[0]);
        });
      }
      fetchProfileImg();
    } else {
      setProfileImg(null);
    }
  }, [setProfileImg, userData]);

  return (
    <NavContainer>
      <TitleDiv>
        <HomeLogo src={Icon} alt="GroupomaniaLogo" />
        <StyledTitle>Groupomania</StyledTitle>
      </TitleDiv>
      <NavLinkBar>
        {userData ? (
          <>
            <StyledLink to="Groupomania-frontend/">
              <HomeIcon
                fontSize="large"
                sx={{
                  fontSize: "2.5rem",
                }}
              />
            </StyledLink>
            <StyledLink to="Groupomania-frontend/profile" $isProfileLink>
              {profileImg ? (
                <ProfileImg src={profileImg.image_url} alt="Profile" />
              ) : (
                <ProfileImg src={DefaultProfileImg} alt="Profile" />
              )}
            </StyledLink>
            <StyledLink
              to="Groupomania-frontend/"
              onClick={handleLogout}
              $isFullLink
            >
              <LogoutIcon fontSize="large" />
            </StyledLink>
          </>
        ) : (
          <>
            <StyledLink to="Groupomania-frontend/">Login Page</StyledLink>
          </>
        )}
      </NavLinkBar>
    </NavContainer>
  );
}

export default Header;
