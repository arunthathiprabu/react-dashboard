import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  max-height: 250px;
   background-color: rgb(46, 41, 41);
   padding: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: ${(props) => props.bgColor || '#FF8C00'};
`;

const MenuText = styled.span`
  flex-grow: 1;
`;

const ArrowIcon = styled.span`
    margin-left: auto;
    font-size: 18px;
    color: #ccc;
    background-color: gray;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    display: flex;
    justify-content: space-evenly;
    margin-right: 15px;
    align-items: center;
`;

const Menu = () => {
  return (
    <SidebarContainer >
      <MenuItem>
        <Icon style={{ fontSize: "25px", marginLeft: "15px" }}>⚙️</Icon>
        <MenuText>Goals</MenuText>
        <ArrowIcon >&gt;</ArrowIcon>
      </MenuItem>
      <MenuItem>
        <Icon style={{ fontSize: "25px", backgroundColor: "rgb(77 81 203)", marginLeft: "15px" }}>🍔</Icon>
        <MenuText>Popular Dishes</MenuText>
        <ArrowIcon>&gt;</ArrowIcon>
      </MenuItem>
      <MenuItem>
        <Icon style={{ fontSize: "25px", backgroundColor: "rgb(77 81 203)", marginLeft: "15px" }}>🍽️</Icon>

        <MenuText>Menus</MenuText>
        <ArrowIcon >&gt;</ArrowIcon>
      </MenuItem>
    </SidebarContainer >
  );
};

export default Menu;
