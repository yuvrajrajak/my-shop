import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg1 from '../assets/hero-bcg1.jpeg'
import heroBcg2 from '../assets/hero-bcg2.jpeg'

const Hero = () => {
    return (
        <Wrapper>
            <div className="section">
                <article className="content">

                    <h1>Design Your <br />
                     Comfort Zone</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint velit, reiciendis modi facilis at, suscipit quaerat exercitationem obcaecati pariatur, debitis necessitatibus. Ab esse neque recusandae quae, quidem eligendi nam quia nesciunt magnam, sunt, maiores repellendus doloribus aspernatur. Velit assumenda veritatis modi saepe iure dolores ea numquam minus fugiat voluptas?
                   </p>
                    <Link to="/store" className="btn hero-btn">shop now</Link>
                </article>
                <article className="img-container">
                    <img src={heroBcg1} alt="main-Image" className="main-img" />
                    <img src={heroBcg2} alt="main-Image" className="accent-img" />

                </article>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.section`

.section{
display:grid;
grid-template-columns: 1fr 1fr;
width:90vw;
padding-top: 5rem;
padding-bottom: 5rem;
margin: 0 auto;
gap: 2.5rem;
}

p{
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-heroText);
}


.hero-btn{
        padding: 0.75rem 1.25rem;
        font-size: 1rem;
        font-weight: bold;
        transition: var(--transition);
    }
 .hero-btn:hover{
     color: var(--clr-black);
 }

.img-container{
    display:none;
}

@media (min-width: 992px){

    .img-container{
        display:block;
        position: relative;
    }

    .main-img{
            width: 100%;
            height: 550px;
            position:relative;
            display:block;
            object-fit:cover;
            border-radius: var(--radius);
    }

    .accent-img{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 250px;
            border-radius: var(--radius);
            transform: translateX(-50%);
        }

         
    .img-container::before{
            content:'';
            position: absolute;
            width: 10%;
            height: 80%;
            background: rgb(250,210,185);
            bottom: 0%;
            left: -8%;
            border-radius: var(--radius);
    
        }

}

    h1{
        margin-bottom: 4rem;
    }
    
`

export default Hero
