import React from 'react'
import { PageHero } from '../components'
import aboutImg from '../assets/about-bcg.jpeg'
import styled from 'styled-components'


const About = () => {
    return (
        <Wrapper>

            <div className="section">
                {/* <PageHero/> */}
                <img src={aboutImg} alt="about-img"  className="main-img"/>

                <article className="content">
                    <div>
                        <h2>Our Story</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam maiores soluta veniam facere necessitatibus quibusdam iure, optio, provident numquam deleniti fugiat, iusto nobis laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam maiores soluta veniam facere necessitatibus quibusdam iure, optio, provident numquam deleniti fugiat, iusto nobis laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam maiores soluta veniam facere necessitatibus quibusdam iure, optio, provident numquam deleniti fugiat, iusto nobis laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, quos.
                    </p>
                </article>
            </div>

        </Wrapper>

    )
}

const Wrapper = styled.section`
width: 90vw;
margin: 0 auto;
margin-top: 4rem;
margin-bottom: 4rem;

.content{
text-align:left;
}

.underline {
    width: 6rem;
    height: 0.25rem;
    background: #49a6e9;
    background: var(--clr-brown);
    margin-left: 0;
    margin-right: auto;
}
.section{
    display:grid;
    gap: 2.5rem;
}
h2{
    
}

p{
    line-height: 2rem;
    font-weight: 600;
    margin-top: 2rem;
}

.main-img{
    border-radius: var(--radius);
}

@media (min-width:992px){
    .section{
        grid-template-columns: 1fr 1fr;
    }
}

`

export default About

