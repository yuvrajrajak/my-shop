import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
    const { cart, clearCart } = useCartContext()

    return (
        <Wrapper className="section">
            <CartColumns />
            <div>
                {
                    cart.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })

                }
            </div>
            <hr />
            <div className="link-container">
                <Link to='/store' className="link-btn">
                    continue shopping
                </Link>
                <button
                    type="button"
                    className="link-btn clear-btn"
                    onClick={clearCart}
                >
                    clear shopping cart
                </button>
            </div>
            <CartTotals />
        </Wrapper>
    )
}
const Wrapper = styled.section`
width: 90vw;
margin: 0 auto;
margin-top: 2rem;
.link-container{
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 1rem;
}
.link-btn{
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    background: var(--clr-brown);
    font-weight: 400;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    color: var(--clr-white);
    cursor: pointer;
    letter-spacing: 0.1rem;
}
.clear-btn{
    background: var(--clr-black);
}

`
export default CartContent
