import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Product} from '../components'
import {datalist} from '../data'  //static data


const Products = ({filters, sort, search}) => {
  
  const [products, setProducts] = useState(datalist);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters]);

  useEffect(() => {
    setFilteredProducts(products.filter((item) => item.name.toLocaleLowerCase().includes(search)))
  }, [search, products])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.genre - b.genre)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.id - b.id)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.id - a.id)
      );
    }
  }, [sort]);
  
  return (
    <Container>
        {
            filteredProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))
        }
    </Container>
  )
}

export default Products

/* 
///STYLES 
*/

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #121716;
`