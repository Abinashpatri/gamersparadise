import React, { useState } from 'react'
import styled from 'styled-components'
import {Footer, Navbar, Products, Slider} from '../components'
import {mobile} from '../responsive'



const ProductList = () => {
    
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
    
  return (
    <Container>
        <Navbar setSearch={setSearch} />
        <FilterContainer>
            <Filter>
                <FilterText>Filter Games: </FilterText>
                <Select name="genre" onChange={handleFilters}>
                    <Option disabled selected>Genre</Option>
                    <Option>action</Option>
                    <Option>adventure</Option>
                    <Option>shooting</Option>
                    <Option>rpg</Option>
                </Select>
                <Select name="category" onChange={handleFilters}>
                    <Option disabled selected>Categories</Option>
                    <Option>top</Option>
                    <Option>new</Option>
                    <Option>upcoming</Option>
                    <Option>vr</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products: </FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option disabled selected>New</Option>
                    <Option value="asc">asc</Option>
                    <Option value="desc">desc</Option>
               </Select>
            </Filter>
        </FilterContainer>
        <Products filters={filters} sort={sort} search={search} />
        <Slider/>
        <Footer/>
    </Container>
  )
}

export default ProductList

/* STYLES */

const Container = styled.div`
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: '0px 20px', display: 'flex', flexDirection: 'column'})}
`
const FilterText = styled.span`  
    font-size: 20px;  
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: '0px'})}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: '10px 0px'})}
`
const Option = styled.option``