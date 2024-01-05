import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  outline: none;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
`;


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 20px;

    height: 430px;

    border: 1px solid rgba(0, 0, 0, 0.2);

    > div > p{
        color: #868E96;
    }

    .buttons{
        display: flex;
        margin-top: 45px;
        flex-direction: column;
        gap: 25px;
    }
`