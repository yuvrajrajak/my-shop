import React, { useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constant'
import { Loading, Error, ProductImages, Stars, AddToCart } from '../components'
import { formatPrice } from '../utils/helper'
import styled from 'styled-components'

const SingleProductPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const { single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct } = useProductsContext()

    useEffect(() => {
        fetchSingleProduct(`${url}${id}`)
    }, [id])

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push('/')
            }, 3000)
        }
    }, [error])

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    const { name, price, description, stock, stars, reviews, id: sku, company, images } = product
    return (
        <Wrapper className="section">
            <Link to="/store" className="btn">
                back to products
            </Link>
            <div className="product-center">
                <ProductImages images={images} />
                <section className='content'>
                    <h2 className="name">{name}</h2>
                    <Stars stars={stars} reviews={reviews} className="stars" />
                    <h5 className="price">{formatPrice(price)}</h5>
                    <p className="desc">{description}</p>
                    <p className="info">
                        <span>Available : </span>
                        {
                            stock > 0 ? 'In Stock' : 'Out Of Stock'
                        }
                    </p>

                    <p className="info">
                        <span>SKU : </span>
                        {sku}
                    </p>

                    <p className="info">
                        <span>Brand : </span>
                        {company}
                    </p>
                    <hr />
                    {stock > 0 && <AddToCart product={product} />}
                </section>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
width: 90vw;
margin: 0 auto;
margin-top: 2rem;
margin-bottom: 2rem;
.name{
    padding-left: 0.5rem;

}
.btn:hover{
    color: var(--clr-black);
}
.product-center{
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
}
.price{
    color: var(--clr-brown);
    padding-left: 0.5rem;
}
.desc{
    padding-left: 0.5rem;
    line-height: 2rem;
    max-width: 45em;
}
.info{
  padding: 1rem;
  padding-left: 0.5rem;
  margin-top: 1rem;
  text-transform: capitalize;
  width: 300px;
  display: grid;
  grid-template-columns: 125px 1fr;
  span{
      font-weight: 700;
  }  
}

@media (min-width: 992px){
    .product-center{
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
    .price {
        font-size: 1.25rem;
    }
}

`
export default SingleProductPage