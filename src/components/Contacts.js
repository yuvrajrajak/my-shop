import React from 'react'
import styled from 'styled-components'


const Contacts = () => {
    return (
        <Wrapper>
            <div className="section">
                <h3>Join our newsletter and get 20% off</h3>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam maiores soluta veniam facere necessitatibus quibusdam iure, optio, provident numquam
                </p>
                    <form className='contact-form' action="https://formspree.io/f/xdoprppo" method="POST">
                        <input
                            type='email'
                            className="form-input"
                            placeholder='enter email'
                            name="_replyto"
                        />
                        <button type='submit' className='submit-btn'>subscribe</button>
                    </form>
                </div>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.section`
.section{
    padding: 5rem 0;
    margin-top: 4rem;
    width: 90vw;
    margin: 0 auto;
}

p{
    line-height: 2rem;
    width: 45em;
    color: var(--clr-heroText);
}

.contact-form{
    width:90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
}

.form-input,
.submit-btn {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--clr-black);
}

.submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }

  .submit-btn {
    background: var(--clr-brown);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }

  .submit-btn:hover {
    color: var(--clr-white);
  }

  @media (min-width: 992px){
      .section{
          display:grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 8rem;
          margin-top: 2rem;
      }
      p{
          margin-bottom: 0;
      }
  }

  media (min-width: 1280px){
   .section{ 
    padding: 15rem 0;
   }
  }

`

export default Contacts
