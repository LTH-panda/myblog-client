import Button from "components/Shared/Button";
import useAuthForm from "hooks/useAuthForm";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";

const AuthForm = () => {
  const { username, password, error, onChange, onSubmit } = useAuthForm();
  return (
    <AuthFormBlock onSubmit={onSubmit}>
      <StyledInput
        placeholder="username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <StyledInput
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <ErrorBanner>{error}</ErrorBanner>
      <LogInButton type="submit">로그인</LogInButton>
    </AuthFormBlock>
  );
};

export default AuthForm;

const AuthFormBlock = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 300px;
  padding-top: 12rem;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 0;
  border-radius: 0.3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:focus {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    outline: none;
    transform: scale(1.05);
  }
`;

const LogInButton = styled(Button)`
  background: ${OpenColor.indigo[5]};
  color: #fff;
  width: 100%;
`;
const ErrorBanner = styled.div`
  height: 1rem;
  color: ${OpenColor.red[7]};
`;
