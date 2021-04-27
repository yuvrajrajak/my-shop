import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/final_logo.png'
import { FaShoppingCart, FaUser, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { FaBars } from 'react-icons/fa'
import { useProductsContext } from '../context/products_context'

const Navbar = () => {
    const { openSidebar } = useProductsContext()

    const { loginWithRedirect, isAuthenticated, user, logout, isLoading } = useAuth0();

    const myUser = isAuthenticated && user;

    return (
        <NavContainer className="section">
            <div className="nav-center">
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt="Yuvraj's Store" />
                    </Link>
                </div>


                <div className="nav-header">


                    <ul>
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


            </div>

            <button type="button" className="nav-toggle" onClick={openSidebar}>
                <FaBars />
            </button>

            <div className="cart-login">
                <Link to="/cart">
                    <button
                        type="button"
                        className="cart-btn"
                    > Cart
                    <FaShoppingCart />
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


        </NavContainer>
    )
}

const NavContainer = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
height: 5rem;
width: auto;
background: var(--primaryColor);

.cart-btn{
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    background: transparent;
    border: transparent;
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
    svg{
        padding-left: 0.2rem;
        padding-top: 0.5rem;
    }
}
.nav-center{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.nav-header{
    display:none;
}

.logo {

    margin-left: 1rem;
    
    img{
        height: 100px;
    }
}
.cart-login {
    display: none;
}
.nav-toggle{
    margin-right: 1rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: var(--clr-black);
    svg{
        font-size: 1.75rem;
    }
}


@media (min-width:992px){
  .nav-header{
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    padding-left: 2rem;
    a{
        color: var(--navbar-link);
        tex-transfrom: capitalize;
        letter-spacing: 0.1rem;
        font-weight: 600;
        padding: 0.5rem;
        text-decoration: none;
        transition: var(--transition);
        &:hover{
           border-bottom: 3px solid var(--clr-white);
       }
    }
    .nav-links{
        font-size: 1.5rem;
        padding: 0 0.75rem;
    }
  }
  .nav-center{
      margin-left: 4rem;
      display: flex;
  }

  .cart-login{
    margin-right: 4rem;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .cart , .login{
     font-size: 1.5rem;
     cursor: pointer;
    //  &:hover{
    //   border-bottom: 2px solid black;
    //  }    
    }
  }
  .nav-toggle{
      display:none;
  }

}

`

export default Navbar

