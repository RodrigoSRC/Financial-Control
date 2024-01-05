import { StyledValueCard, StyledValueButton } from "./style"
import { StyledHeadline3, StyledParagraph } from "../../../../Styles/typography"



export const ValueCard = ({val, removeValueFromList}) => {
    return(
        <StyledValueCard typeVal={val.typeValue}>
            <div>
                <StyledHeadline3 fontWeight="bold">
                    {val.descr}
                </StyledHeadline3>

                <StyledParagraph>
                    {val.typeValue}
                </StyledParagraph>

            </div>

            <div>
                <StyledParagraph>
                    {parseInt(val.amount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </StyledParagraph>
                
                <StyledValueButton onClick={() => removeValueFromList(val.id)}>
                    Excluir
                </StyledValueButton>
            </div>

        </StyledValueCard>
    )
}