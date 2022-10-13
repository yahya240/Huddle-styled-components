import React from 'react'
import { StyledCard } from './styles'

function Card({id,title,body,image}) {
  return (
    <StyledCard layout={id%2 === 0 && 'row-reverse'}>
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
        <div>
            <img src={`./images/${image}`} alt={title}></img>
        </div>
    </StyledCard>
  )
}


export default Card