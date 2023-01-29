import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  flex-align: row;
  align-items: center;
  height: 50px;
  margin: auto;
  text-decoration: none;
  font-size: 18px;
  padding-left: 1.875rem;

  &:hover {
    cursor: pointer;
    background-color: #004c84;
    color: white;
  }
`;
const SidebarLabel = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
`;
const SubMenu = ({ item }) => {
  return (
    <div>
      <SidebarLink to={item.path}>
        <div>
          <SidebarLabel>
            {" "}
            {item.icon} &nbsp;&nbsp; {item.name}
          </SidebarLabel>
        </div>
      </SidebarLink>
    </div>
  );
};
export default SubMenu;
