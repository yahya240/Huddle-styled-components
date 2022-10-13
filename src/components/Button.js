import React from 'react'
import styled from 'styled-components'

function Button({children}) {
  return (
    <ButtonStyled>{children}</ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    margin:1rem 1rem;
    padding: 0.7rem 3rem;
    border-radius:1rem;
    border:none;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    cursor:pointer;
    text-transform:capitalize;
    font-weight:700;
    background-color:${({bg})=> bg || '#fff'};
    color:${({color})=> color || '#333'};

    &:hover{
        opacity:0.8;
        transform:scale(0.98)
    }
`

export default Button