import Button from "components/Shared/Button";
import { useRouter } from "next/router";
import OpenColor from "open-color";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchLogout } from "store/user";
import styled from "styled-components";

const LogoutButtonBlock = styled(Button)`
  width: 100%;
  background: ${OpenColor.red[4]};
  color: #fff;
`;

const LogoutButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch(fetchLogout());
    router.replace("/");
  });
  return <LogoutButtonBlock onClick={handleLogout}>로그아웃</LogoutButtonBlock>;
};

export default LogoutButton;
