import React from 'react'
import styled from 'styled-components'

const Error = () => {
    return (
        <Wrapper className="section">
            <div className="text">
                there was an error...
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.section{
    width:90vw;
    margin: 0 auto;
}
.text{
    text-align: center;
    text-transform: capitalize;
    padding-top: 2rem;
    font-weight: bold;
    font-size: 2.75rem;
}

`


export default Error
