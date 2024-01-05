import { StyledContainer } from "../../Styles/grid"
import { StyledHeadline3, StyledHeadline1 } from "../../Styles/typography"
import { FinancialList } from "./ValueList"


export const ListSection = ({valueList, setValueList}) => {

    return(
        <section>
            <StyledContainer>
                <StyledHeadline3 fontWeight="bold">
                    Resumo Financeiro
                </StyledHeadline3>

                {valueList.length > 0 ? (<FinancialList valueList={valueList} setValueList={setValueList} />) 
                : <StyledHeadline1 fontWeight="bold">
                    Você ainda não possui nenhum lançamento
                </StyledHeadline1>
                }
            </StyledContainer>
        </section>
    )
}