import React from 'react'
import { useCartContext } from '../context/cart_context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContent } from '../components'


const CartPage = () => {
    const { cart } = useCartContext()

    if (cart.length < 1) {
        return (
            <Wrapper>
                <div>
                    <h2>Your Cart is empty</h2>
                </div>
                <Link to="/store" className="btn">
                    fill it
                </Link>

            </Wrapper>
        )
    }

    return (
        <main>
            <CartContent />
        </main>
    )
}

const Wrapper = styled.section`
.btn{
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    padding: 0.5rem 1rem;
}
.btn:hover{
    color: var(--clr-black);
}

`

export default CartPage
