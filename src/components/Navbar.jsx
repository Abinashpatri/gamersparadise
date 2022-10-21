import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import {mobile} from '../responsive'
import { Link } from "react-router-dom";

const Navbar = ({setSearch}) => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>Gamers Paradise</Logo>
        </Left>
        <Center>
            <SearchContainer>
                <Input placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
                <Search style={{color: "gray", fontSize: 16}} />
            </SearchContainer>
        </Center>
        <Right>
          {/* <Link to='register'><MenuItem>REGISTER</MenuItem></Link>
          <Link to='login'><MenuItem>LOGIN</MenuItem></Link> */}
          <MenuItem>
            <Badge color="primary">
              <Link style={{color: 'black'}} to='cart'><ShoppingCartOutlined/></Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

/*
=================================================================================== STYLES
*/

const Container = styled.div`
  height: 60px;
  ${mobile({height: '50px'})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: '10px 0px'})}
`;
// ----------------------------------------------Left
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  ${mobile({width: '50px'})}
`
// ----------------------------------------------Center
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Fasthand&display=swap');
  font-family: 'Fasthand', cursive;
  font-weight: bold;
  ${mobile({fontSize: '24px'})}
`
// ----------------------------------------------Right
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center", flex: 2})}
`;
const MenuItem = styled.div`
  font-size: 14;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: '10px'})}
`
