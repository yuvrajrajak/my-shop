import React from 'react'
import styled from 'styled-components'

const Loading = () => {
    return (
        <Wrapper className="section">
            <div className="loading">
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`


@keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  
  .loading {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10rem;
    margin-bottom: 4rem;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--clr-brown);
    animation: spinner 0.6s linear infinite;
  }

`

export default Loading
