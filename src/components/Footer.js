import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (

        <Wrapper>

            <h5>&copy; {new Date().getFullYear()}
                <span> Yuvraj's Store</span>
            </h5>
            <h5>All rights reserved</h5>

        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
// flex-direction: column;

height: 5rem;
background: var(--footer-bg);
h5{
    color: white;
    margin: 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
}
span {
    color: #F95738;
    font-size: 1.2rem;
    font-weight: 400;
}

`


export default Footer
