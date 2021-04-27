import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => {
    const [main, setMain] = useState(images[0])
    return (
        <Wrapper>
            <img src={main.url} alt="main-img" className="main" />
            <div className="gallery">
                {
                    images.map((image, index) => {
                        return <img
                            src={image.url}
                            alt={image.filename}
                            key={index}
                            onClick={() => setMain(images[index])}
                            className={`${image.url === main.url ? 'active' : null}`}
                        />
                    })
                }
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
.main{
  height: 600px;  
}

img{
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
}

.gallery{
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    column-gap: 1rem;
    img{
        height:100px;
        cursor: pointer;
    }
}

.active{
    border: 2px solid var(--clr-brown);
}

@media (max-width: 576px){
    .main{
        height: 300px;
    }
    .gallery{
        img{
            height: 50px;
        }
    }
}

@media (min-width: 992px){
    .main{
        height: 500px;
    }
    .gallery{
        img{
            height: 75px
        }
    }
}

`

export default ProductImages
