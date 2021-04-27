import React from 'react'
import { formatPrice } from '../utils/helper'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper className="section">
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/store/${id}`} className="link"><FaSearch /></Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`

footer{
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container{
position:relative;
background: var(--clr-black);
border-radius: var(--radius);
}

.link{
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  transition: var(--transition);
  cursor: pointer;
  border-radius: 50%;
  background: var(--clr-orange);
  svg{
    font-size: 1.25rem;
    color: var(--clr-white);
  }
  opacity: 0;
}

.container:hover img{
  opacity:0.5;
}
.container:hover .link {
  opacity: 1;
}
footer h5, footer p{
  margin-bottom: 0;
  font-weight: 400;
}
footer p{
  color: var(--clr-brown);
}

img{
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: var(--radius);
  transition: var(--transition);
}
footer p{
  letter-spacing: var(--spacing);
}

`

export default Product
