import React from 'react'
import styled from 'styled-components'
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined,} from '@mui/icons-material'
import { Link } from "react-router-dom";

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon><ShoppingCartOutlined /></Icon>
            <Icon><Link to={`/product/${item}`}><SearchOutlined /></Link></Icon>
            <Icon><FavoriteBorderOutlined /></Icon>
        </Info>
    </Container>
  )
}

export default Product

/* 
///STYLES 
*/

const Info = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    top: 0;
    left: 0;

    background-color: rgba(0,0,0,0.2);
    z-index: 3;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: all 0.5s ease;

    cursor: pointer;

`

const Container = styled.div`
    flex: 1;
    margin: 5px;

    min-width: 280px;
    height: 350px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #15272d;

    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;

    background-color: #010101;

    position: absolute;
`
const Image = styled.img`
    height: 90%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 10px;

    transition: all 0.5 ease-in-out;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.3);
    }
`