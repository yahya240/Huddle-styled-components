import React from 'react'
import {Container,Flex} from './styles'
import {StyledHeader, Nav,Logo,Image} from './styles/Header_styled'
import Button from './Button'


function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='logo' />
          <Button>try for free!</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p> Build The Community Your Fans Will Love Build The Community Your Fans Will Love 
              Build The Community Your Fans Will Love</p>
            <Button bg='#ff0099' color='#fff'>Get Started For Free!</Button>
          </div>
          <Image src='./images/illustration-mockups.svg' alt='her-img' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header