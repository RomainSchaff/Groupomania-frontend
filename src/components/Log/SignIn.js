import { useState } from "react";
import { Triangle } from "react-loader-spinner";
import styled from "styled-components";

const FormSignIn = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;

function SignIn() {
  const [loader, setLoader] = useState(false);
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const accountNotActive = document.querySelector(".global.error");

    setLoader(true);
    async function fetchData() {
      const requestsOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_email,
          user_password,
        }),
      };
      try {
        const response = await fetch(
          "https://groupomania-backend-xl2a.onrender.com/api/auth/login",
          requestsOptions
        );
        const data = await response.json();
        setLoader(false);
        let errors;
        if (data.error) {
          errors = { email: "", password: "", accountNotActive: "" };
          if (data.message.includes("passe"))
            errors.password = "Le mot de passe ne correspond pas";
          if (data.message.includes("Email")) errors.email = "Email inconnu";
          if (data.message.includes("compte"))
            errors.accountNotActive = "Ce compte est désactivé";
        }

        if (errors !== undefined) {
          emailError.innerHTML = errors.email;
          passwordError.innerHTML = errors.password;
          accountNotActive.innerHTML = errors.accountNotActive;
        } else {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userData", JSON.stringify(data.user));
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  };

  return (
    <FormSignIn action="" onSubmit={handleSignIn} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="user_email"
        id="user_email"
        onChange={(e) => setEmail(e.target.value)}
        value={user_email}
      />
      <ErrorMessage className="email error"></ErrorMessage>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        name="user_password"
        id="user_password"
        onChange={(e) => setPassword(e.target.value)}
        value={user_password}
      />
      <ErrorMessage className="password error"></ErrorMessage>
      <br />
      <input type="submit" value="Se connecter" />
      <br />
      {loader && (
        <Triangle height="50" width="50" color="blue" ariaLabel="loading" />
      )}
      <br />
      <ErrorMessage className="global error"></ErrorMessage>
    </FormSignIn>
  );
}

export default SignIn;
