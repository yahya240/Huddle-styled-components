import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme})=>theme.colors.header};
    padding: 40px;
`

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:40px;

    @media (max-width:${({theme})=> theme.mobile}){
        flex-direction:column;
    }
`

export const Logo = styled.img`
    @media (max-width:${({theme})=> theme.mobile}){
        margin-bottom:1rem;
    }
`
export const Image = styled.img`
    width:24rem;
    padding:0 1rem;
    margin-left: 3rem;

    @media (max-width:${({theme})=> theme.mobile}){
        margin-top:1rem;
    }
`