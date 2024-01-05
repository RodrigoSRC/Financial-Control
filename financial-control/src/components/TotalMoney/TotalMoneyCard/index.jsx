import { StyledMoneyCard } from "./style"
import { StyledHeadline3, StyledParagraph } from "../../../Styles/typography"

export const TotalMoneyCard = ({valueList}) => {

    const totalValue = valueList.reduce((accValue, value) => {
        if(value.typeValue === "Entrada") {
            return accValue + parseInt(value.amount); 
        }
        else if (value.typeValue === "Saída") {
            return accValue - parseInt(value.amount);
        }

    }, 0);


    return(
        <StyledMoneyCard>
            <div>
                <StyledHeadline3>
                    Valor Total:
                </StyledHeadline3>

                <StyledParagraph>
                    O valor se refere ao saldo
                </StyledParagraph>
            </div>

            <StyledHeadline3 fontWeight="bold">
                {parseInt(totalValue).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </StyledHeadline3>
        </StyledMoneyCard>
    )
}