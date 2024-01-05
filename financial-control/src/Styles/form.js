import styled, { css } from "styled-components";


const InputDefaultStyles = css`
    font-family: var(--Font-Primary);
    font-weight: 400;

    background-color: var(--color-grey-1);
`

export const StyledInputDescr = styled.input`
    ${InputDefaultStyles};

    width: 100%;
    height: 2.875rem;
 
    padding: 0 1.25rem;
`
export const StyledInputValue = styled.input`
    ${InputDefaultStyles};

    width: 100%;
    height: 2.875rem;
 
    padding: 0 1.25rem;
    
`
export const StyledInputValueType = styled.input`
    ${InputDefaultStyles};  
`


