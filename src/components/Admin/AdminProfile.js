import Link from "next/link";
import React from "react";
import styled from "styled-components";

const AdminProfile = () => {
  return (
    <Link href="/djemalsvpdlwl" passHref>
      <a>
        <AdminProfileBlock>Admin</AdminProfileBlock>
      </a>
    </Link>
  );
};

export default AdminProfile;

const AdminProfileBlock = styled.div``;
