import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/main_logo.png'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <NavContainer>
            <div className="nav-center">
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt="Yuvraj's Store" />
                    </Link>
                </div>

                <div className="nav-header">


                    <ul>
                        <Link to='/'>
                            Home
                    </Link>
                        <Link to='/about'>
                            About
                    </Link>
                        <Link to='/store'>
                            Store
                    </Link>
                    </ul>

                </div>
            </div>
            <div className="cart-login">
                <div className="cart">
                    Cart
                </div>

                <div className="login">
                    Login
                </div>

            </div>




        </NavContainer>
    )
}

const NavContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 5rem;
width: 100vw;
background: #f06449;

.nav-center{
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-header{
a{
    color: var(--navbar-link);
    tex-transfrom: capitalize;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    font-weight: 600;
    padding: 0.5rem;
    text-decoration: none;
    &:hover{
       border-bottom: 2px solid black;
   }
}
}

.logo {
    img{
        height: 170px;
    }
}

.cart-login {
    margin-right: 50px;
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

`

export default Navbar

