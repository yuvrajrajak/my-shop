import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import styled from 'styled-components'

const Stars = ({ stars, reviews }) => {
    return (
        <Wrapper>
            <div className="stars">
                <span>{stars >= 1 ? <BsStarFill /> : stars >= 0.5 ? (<BsStarHalf />) : (<BsStar />)}</span>
                <span>{stars >= 2 ? <BsStarFill /> : stars >= 1.5 ? (<BsStarHalf />) : (<BsStar />)}</span>
                <span>{stars >= 3 ? <BsStarFill /> : stars >= 2.5 ? (<BsStarHalf />) : (<BsStar />)}</span>
                <span>{stars >= 4 ? <BsStarFill /> : stars >= 3.5 ? (<BsStarHalf />) : (<BsStar />)}</span>
                <span>{stars >= 5 ? <BsStarFill /> : stars >= 4.5 ? (<BsStarHalf />) : (<BsStar />)}</span>

            </div>
            <p>{reviews} customer reviews</p>
        </Wrapper>

    )
}
const Wrapper = styled.section`
.stars{
    color: var(--clr-orange);
    padding: 0.5rem;
}
p{
  text-transform: capitalize;
  padding: 0.5rem;
}

`

export default Stars
