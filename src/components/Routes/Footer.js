import styled from "styled-components";
import Button from "@mui/material/Button";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { CancelIconStyled } from "../Home/Comment/DeleteComment";

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background: lightblue;
`;

function Footer() {
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen ? (
        <StyledFooter>
          <Button variant="contained" sx={{ m: 1 }}>
            Conditions d'utilisation
          </Button>
          <Button variant="contained" sx={{ m: 1 }}>
            Nous contacter
          </Button>
          <Button variant="contained" sx={{ m: 1 }}>
            Nos sponsors
          </Button>
          <IconButton
            color="success"
            onClick={handleClose}
            sx={{
              position: "absolute",
              bottom: "40px",
              right: "2%",
              color: "#1a2dba",
              fontSize: 16,
            }}
          >
            <CancelIconStyled color="error" />
          </IconButton>
        </StyledFooter>
      ) : (
        <IconButton
          color="success"
          onClick={handleClose}
          sx={{
            position: "fixed",
            bottom: "10px",
            right: "2%",
            color: "#1a2dba",
            fontSize: 16,
            transform: "rotate(45deg)",
          }}
        >
          <CancelIconStyled color="success" />
        </IconButton>
      )}
    </>
  );
}

export default Footer;
