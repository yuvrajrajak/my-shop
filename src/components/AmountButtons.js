import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ increase, decrease, amount }) => {
    return (
        <Wrapper className="amount-btns">
            <button className="amount-btn" type="button" onClick={decrease}>
                <FaMinus />
            </button>
            <h2>{amount}</h2>
            <button className="amount-btn" type="button" onClick={increase}>
                <FaPlus />
            </button>

        </Wrapper>
    )
}
const Wrapper = styled.section`
display:grid;
width: 140px;
grid-template-columns: repeat(3,1fr);
align-items: center;
h2{
    margin-bottom: 0;
    padding-left: 0.4rem;
}
button{
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        margin-bottom: 0;
    }


}

`
export default AmountButtons
