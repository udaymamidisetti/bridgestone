import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  flex-align: row;
  align-items: center;
  height: 50px;
  margin:auto;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    background-color:#004C84;
    color:white;
  }
`;
const SidebarLabel = styled.span`
  display:flex;
`;
const SubMenu = ({ item }) => {
  return (
    <div>
      <SidebarLink to={item.path}>
        <div >
          <SidebarLabel> {item.icon} &nbsp;&nbsp; {item.name}</SidebarLabel>
        </div>
      </SidebarLink>
    </div>
  );
};
export default SubMenu;
