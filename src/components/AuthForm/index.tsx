import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IconButton, Input, Tabs } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: auto;
  margin-top: 15vh;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 32px 122px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const TabBtn = styled.button<{ active: boolean }>`
  border: none;
  font-size: 18px;
  font-weight: 700;
  padding: 8px 0;
  background-color: #ffffff;
  border-bottom: 1px solid
    ${({ active }) => (active ? "#E95935;" : "transparent")};
`;

const FormBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const TextInput = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid rgba(97, 97, 97, 0.25);
  &:focus {
    outline: 1px solid rgba(8, 4, 4, 0.4);
  }
`;

const ActionBtn = styled.button`
  background-color: #e43003cc;
  color: #ffffff;
  width: 100%;
  height: 45px;
  border: 1px solid rgba(97, 97, 97, 0.25);
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;

const ForgetPassLink = styled.a`
  font-size: 14px;
  color: #84b3ff;
`;

interface loginModel {
  email: string;
  password: string;
}

const AuthForm: FC<{ handleClose: Function; isLogin: boolean }> = ({
  handleClose,
  isLogin,
}) => {
  const { handleSubmit, register, watch, getValues, formState } =
    useForm<loginModel>();
  const [isLoginActive, setIsLoginActive] = useState(isLogin);

  const handleFrom = (data: loginModel) => {
    // alert(JSON.stringify(data));
    console.log("==>", data);
  };
  return (
    <Form>
      <FormHeader onClick={handleSubmit(handleFrom)}>
        <div></div>
        <ActionTab>
          <TabBtn
            active={!isLoginActive}
            onClick={() => setIsLoginActive(false)}
          >
            Register
          </TabBtn>
          <TabBtn active={isLoginActive} onClick={() => setIsLoginActive(true)}>
            Sign in
          </TabBtn>
        </ActionTab>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </FormHeader>
      {isLoginActive && (
        <FormBody>
          <TextInput type="email" placeholder="Email" />
          <TextInput type="password" placeholder="Password" />
          <ActionBtn type="submit">Login</ActionBtn>
          <ForgetPassLink>Forget Password?</ForgetPassLink>
        </FormBody>
      )}
      {!isLoginActive && (
        <FormBody>
          <TextInput type="number" placeholder="Number" />
          <TextInput type="email" placeholder="Email" />
          <TextInput type="password" placeholder="Password" />
          <ActionBtn type="submit">Create account</ActionBtn>
        </FormBody>
      )}
    </Form>
  );
};

export default AuthForm;
