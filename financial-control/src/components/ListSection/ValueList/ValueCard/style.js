import styled from "styled-components";


export const StyledValueCard = styled.li`
    display: flex;
    justify-content: space-between;

    background: var(--color-grey-1);
    height: 85px;
    width: 100%;

    border-left: 5px solid ${({typeVal}) => typeVal === "Entrada" ? 'var(--color-color-secondary)' : 'var(--color-grey-2)'};
    border-radius: 5px;

    padding: 0 15px;

    > div {
        display: flex;
        flex-direction: column;

        justify-content: space-around;
    }
`

export const StyledValueButton = styled.button`
    background: var(--color-grey-2);

    padding: 5px;

`