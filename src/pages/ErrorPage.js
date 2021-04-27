import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <Wrapper className="section">
            <div>
                <h5>The page you are looking for not found !</h5>
                <h1>Error 404</h1>
                <Link to="/" className="btn">
                  Back To Home
                </Link>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

width: 90vw;
margin: 0 auto;
text-align: center;
margin-top: 4rem;
margin-bottom: 4rem;

h5{
    margin: 4rem;
    font-size: 2rem;
}
.btn:hover{
    color: var(--clr-black);
}
h1{
    margin-bottom: 3rem;
    font-size: 4rem;
}

`
export default ErrorPage
