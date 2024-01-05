import styled from "styled-components"

export const StyledFlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3.125rem;

    .formBox{
        display: flex;
        flex-direction: column;
        gap: 3.125rem;

        min-width: clamp(150px, 100%, 350px);
    }

    section{
        min-width: clamp(150px, 100%, 850px);
    }

    section, .formBox{
        flex-grow: 1;
    }
`