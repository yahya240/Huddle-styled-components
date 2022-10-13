import styled from "styled-components";

const StyledCard = styled.div`
    display:flex;
    align-items:center;
    background-color:#fff;
    border-radius:1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    margin: 2rem 0;
    padding:3rem;
    flex-direction:${({layout})=> layout || 'row'};

    img{
        width:80%;
        margin-left:0.5rem;
    }

    & > div{
        flex:1;
    }

    @media (max-width:${({theme})=> theme.mobile}){
        flex-direction:column;
        text-align:center;
    }
`

export default StyledCard;