import styled from "styled-components";


export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF
    color: ${props => props.col || '#EB9B00' };
    font-size: ${props => props.SizeFont || '18px'};
    text-align: ${props => props.Aligment || 'center'};
    margin: 0;
`