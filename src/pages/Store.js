import React from 'react'
import { Filters, ProductList, Sort } from '../components'
import styled from 'styled-components'

const Store = () => {
    return (
        <Wrapper>
            {/* <Filters /> */}
            <div className="page">
                <Sort />
                <ProductList />
            </div>

        </Wrapper>
    )
}
const Wrapper = styled.section`



`

export default Store
