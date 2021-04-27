import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../context/filter_context'
import styled from 'styled-components'


const Sort = () => {
    const { filtered_products: products, sort, updateSort } = useFilterContext()

    return (
        <Wrapper>
            <div className="section">

                <div>
                    <p>{products.length} products found !</p>
                </div>
                <div className="line-break">
                    <hr />

                </div>

                <div>
                    <form>
                        <label htmlFor="sort" className="sort-title">sort by</label>
                        <select
                            name="sort"
                            id="sort"
                            className="sort-input"
                            value={sort}
                            onChange={updateSort}
                        >
                            <option value="price-lowest">price (lowest)</option>
                            <option value="price-highest">price (highest)</option>
                            <option value="name-a">name(a-z)</option>
                            <option value="name-z">name(z-a)</option>

                        </select>
                    </form>
                </div>
                {console.log(sort)}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.section{
    width: 90vw;
    margin: 0 auto;
    margin-top: 2rem;
    display:grid;
    
}

select{
    text-transform: capitalize;
    font-size: 0.9rem;
}

.line-break{
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
.sort-title{
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
    padding-right: 1rem;
}

p{
  text-transform: capitalize;
  font-weight: 600;  
}

@media (min-width:200px){
    .section{
        grid-template-columns: auto 1fr auto;
    }  
}


`

export default Sort
