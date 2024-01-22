import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
    }
`;

export const Links = styled(Link)`
    text-decoration: none;
    color: black;
`