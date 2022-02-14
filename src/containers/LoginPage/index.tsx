import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm";
import { logInUserDataAction } from "../../store/User/actions";
import { getUser } from "../../store/User/selectors";

const StyledLoginPage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LoginPage: React.FC = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  const submithandler = () => {
    if (userName && userPass) {
      dispatch(
        logInUserDataAction({
          name: userName,
          pass: userPass,
        })
      );
      navigate(-1);
    }
  };

  useEffect(() => {
    if (user.name && user.pass) navigate("/");
  }, []);

  return (
    <StyledLoginPage>
      <LoginForm
        user={{
          name: userName,
          setName: setUserName,
          pass: userPass,
          setPass: setUserPass,
        }}
        submit={submithandler}
      />
    </StyledLoginPage>
  );
};

export default LoginPage;
