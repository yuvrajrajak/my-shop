import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helper'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const CartTotals = () => {
    const { total_amount, shipping_fee } = useCartContext()
    const { loginWithRedirect, user, isAuthenticated } = useAuth0()

    const myUser = isAuthenticated && user;

    return (
        <Wrapper>
            <div>
                <article>
                    <h5>
                        subtotal : <span>{formatPrice(total_amount)}</span>
                    </h5>
                    <p>
                        shipping fee : <span>{formatPrice(shipping_fee)}</span>
                    </p>
                    <hr />
                    <h4>
                        order total : {' '}
                        <span>{formatPrice(total_amount + shipping_fee)}
                        </span>
                    </h4>

                    {myUser ? <Link to='/checkout' className='btn'>
                        proceed to checkout
                        </Link> : <button type="button" className="btn" onClick={loginWithRedirect}>
                        login</button>}
                </article>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
margin-top: 3rem;
display: flex;
align-items: center;
article{
    border: 1px solid var(--clr-black);
    border-radius: var(--radius);
    padding: 0.75rem 1.5rem;
}
h5,h4,p{
    display:grid;
    grid-template-columns: 200px 1fr;
}
p{
    text-transform: capitalize;
}
h4{
    margin-top: 2rem;
}
.btn{
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    padding: 0.5rem 1rem;
    text-align-center;

}
@media (min-width: 776px){
    justify-content: flex-end;
}

`

export default CartTotals
