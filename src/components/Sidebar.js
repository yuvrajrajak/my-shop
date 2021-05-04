import React from 'react'
import styled from 'styled-components'
import logo from '../assets/final_logo.png'
import { FaTimes, FaUserMinus, FaUserPlus, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { useAuth0 } from '@auth0/auth0-react'
import { useCartContext } from '../context/cart_context'

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useProductsContext()
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0()
    const { total_items } = useCartContext()

    const myUser = isAuthenticated && user;
    return (
        <SidebarContainer>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>

                <div className="logo">
                    <img src={logo} alt="Yuvraj's Store" />
                    <button type="button" className="nav-toggle" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <div className="nav-header">

                    <ul
                        onClick={closeSidebar}
                    >
                        <Link to='/' className="nav-links">
                            Home
                         </Link>
                        <Link to='/about' className="nav-links">
                            About
                          </Link>
                        <Link to='/store' className="nav-links">
                            Store
                          </Link>
                    </ul>

                </div>
                <div className="cart-login" onClick={closeSidebar}>
                    <Link to="/cart">
                        <button
                            type="button"
                            className="cart-btn"
                        > Cart
                    <FaShoppingCart />
                            <span className="cart-value">{total_items}</span>
                        </button>
                    </Link>
                    {
                        myUser ? (
                            <button
                                type="button"
                                className="auth-btn"
                                onClick={() => logout({ returnTo: window.location.origin })}
                            > Log Out
                                <FaUserMinus />
                            </button>
                        ) : (<button
                            type="button"
                            className="auth-btn"
                            onClick={loginWithRedirect}
                        >Log In
                            <FaUserPlus />
                        </button>)
                    }



                </div>

            </aside>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.section`
.logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;
    img{
        height: 100px;
    }
}
.nav-toggle{
    background: transparent;
    border-color: transparent;
    color: #9D1107;
    cursor: pointer;
    margin-right: 1rem;
    svg{
        font-size: 2rem;
    }
}
.nav-links{
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    color: #261C15;
    transition: var(--transition);
}
.nav-links:hover{
    background: #B6F6F4;
    padding-left: 2.5rem;
}
.cart-btn{
    position: relative;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    background: transparent;
    border: transparent;
    margin-right: 1rem;
    svg{
        font-size: 1.6rem;
        padding-left: 0.2rem;
        padding-top: 0.5rem;
    }
}
.auth-btn{
    outline:none;
    cursor: pointer;
    font-size:1.5rem;
    background:transparent;
    border: transparent;
    margin-left: 1rem;
    svg{
        padding-left: 0.2rem;
        padding-top: 0.5rem;
    }
}
.cart-login{
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    transform: translate(-100%);
    background: var(--clr-white);
    z-index: 1;
    
}
.show-sidebar {
    transform: translate(0);
    z-index: 1;
}

@media (min-width: 992px){
    .sidebar {
        display: none;
    }
}

.cart-value{
    position: absolute;
    top: -4px;
    left: 60px;
    background: var(--clr-black);
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
    color: var(--clr-white);
    border-radius: 50%;
    padding-top: 0.2rem;
    }

`

export default Sidebar
