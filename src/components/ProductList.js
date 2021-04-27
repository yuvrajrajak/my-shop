import React from 'react'
import Product from './Product'
import { useFilterContext } from '../context/filter_context'
import styled from 'styled-components'

const ProductList = () => {
    const { filtered_products: products } = useFilterContext()
    return (
       <Wrapper className="section">
            <div className="products-container">
            {
                products.map((product)=>{
                    
                    return <Product key={product.id} {...product} />
        
                })
            }
        </div>
       </Wrapper>
    )
}

const Wrapper = styled.section`


img{
    height: 175px;
}

.products-container{
    width: 90vw;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: grid;
    gap: 2.5rem 1.5rem;
}

@media (min-width:576px){
    .products-container{
        grid-template-columns: repeat(auto-fit,minmax(360px,1fr));
    }
}

`

export default ProductList
