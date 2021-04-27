import React from 'react'
import Error from './Error'
import Loading from './Loading'
import { useProductsContext } from '../context/products_context'
import Product from './Product'
import styled from 'styled-components'

const FeaturedProducts = () => {
    const { products_loading: loading, products_error: error,
        featured_products: featured } = useProductsContext();
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <Wrapper className="section">
            <div className="title">
                <h2>Featured Products</h2>
                <div className="underline"></div>
            </div>
            <div className="section-center featured">
                {
                    featured.map((product) => {
                        return <Product key={product.id} {...product} />
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
background: var(--clr-featuredBackground);

h2{
    text-align: center;
    padding-top: 4rem;
}
.featured{
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img{
        height: 225px;
    }
   padding: 0 5rem;
   padding-bottom: 5rem;
  }

  .underline {
    width: 6rem;
    height: 0.25rem;
    background: #49a6e9;
    background: var(--clr-brown);
    margin-left: auto;
    margin-right: auto;   
}

@media (min-width: 576px){
    .featured{
        grid-template-columns: repeat(auto-fit,minmax(360px, 1fr));
    }
}

`


export default FeaturedProducts
