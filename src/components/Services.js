import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faEye, faHistory } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Services = () => {
    return (
        <Wrapper>

            <div className="section-center">
                <article className="header">
                    <h3 className="header-title">
                        Custom Furniture<br />Build Only For You
                </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam maiores soluta veniam facere necessitatibus quibusdam iure, optio, provident numquam deleniti fugiat, iusto nobis laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, quos.
                </p>
                </article>
                <div className="service-center">
                    <article className="service">
                        {/* mission */}

                        <span className="icon"><FontAwesomeIcon icon={faLocationArrow} /></span>
                        <h4>Mission</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam maiores soluta veniam facere necessitatibus quibusdam iure, optio, provident numquam deleniti fugiat, iusto nobis
                       </p>

                    </article>

                    <article className="service">
                        {/* vission */}
                        <span className="icon"><FontAwesomeIcon icon={faEye} /></span>
                        <h4>Vission</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam maiores soluta veniam facere necessitatibus quibusdam iure, optio, provident numquam deleniti fugiat, iusto nobis
                       </p>
                    </article>

                    <article className="service">
                        {/* history */}
                        <span className="icon"><FontAwesomeIcon icon={faHistory} /></span>
                        <h4>History</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam maiores soluta veniam facere necessitatibus quibusdam iure, optio, provident numquam deleniti fugiat, iusto nobis
                       </p>
                    </article>

                </div>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
.section-center{

    text-align: center;
    margin: 0 auto;
    background: #FDE8E9;
    margin-top: 4rem;
}

.header{
    display: grid;
    gap: 4rem;
    padding-top: 4rem;
    width:90vw;
    margin-left: 2rem;
    p{
        color: var(--clr-heroText);
    }
    .header-title{
        line-height:3rem;
    }
}

.service-center{
    display:grid;
    gap: 4rem;
    width: 65vw;
    margin: 0 auto;
    margin-top: 4rem;
}

.service{
    background: rgb(250,210,185);
    border-radius: var(--radius);
    padding: 4rem;
    line-height: 1.8rem;
    .icon{
        width: 4rem;
        height: 4rem;
        padding: 2rem;
        border-radius: 50%;
        place-items: center;
        margin-bottom: 2rem;
        background: #FDE8E9;
        svg{
            font-size: 1.8rem;
            transform: translate(5%,20%);
        }
    }
    h4{
        margin-top: 4rem;
    }
    p{
        color: var(--clr-heroText);
    }

}

@media screen and (min-width:992px){
    .header{
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (min-width:576px){
  
    .service-center{
        grid-template-columns: repeat(auto-fit,minmax(360px,1fr));
    }
}
@media screen and (min-width:1280px){
    .service-center{
        transform: translateY(5rem);
    }
}


`

export default Services
