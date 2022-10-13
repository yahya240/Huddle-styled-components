import React from 'react'
import { FaTwitter,FaFacebook,FaLinkedin} from 'react-icons/fa'
import {StyledSoical} from './styles'

function SocialIcons() {
  return (
    <StyledSoical>
        <li>
            <a href='https://twitter.com'>
                <FaTwitter />
            </a>
        </li>
        <li>
            <a href='https://facebook.com'>
                <FaFacebook />
            </a>
        </li>
        <li>
            <a href='https://linkedin.com'>
                <FaLinkedin />
            </a>
        </li>  
    </StyledSoical>
  )
}

export default SocialIcons