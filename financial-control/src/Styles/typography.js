import styled, {css} from "styled-components";


export const HeadlineStyles = css`
    font-family: var(--Font-Primary);
    font-weight: ${({fontWeight}) => fontWeight === "bold" ? 700 : 400};
`



export const StyledHeadline1 = styled.h1`
    ${HeadlineStyles}; 
`

export const StyledHeadline2 = styled.h2`
    ${HeadlineStyles};
`

export const StyledHeadline3 = styled.h3`
    ${HeadlineStyles};

    margin-bottom: 10px;
`

export const StyledParagraph = styled.p`
    ${HeadlineStyles};
`