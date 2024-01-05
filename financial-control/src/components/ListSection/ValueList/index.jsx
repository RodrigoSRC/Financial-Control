import { ValueCard } from "./ValueCard";
import { StyledFinancialList } from "./style";

export const FinancialList = ({valueList, setValueList}) => {


    const removeValueFromList = (valueId) => {
        if(confirm("Deseja mesmo excluir esse valor do Resumo Financeiro?")){
            setValueList((valueList) => valueList.filter(value => value.id !== valueId))
        }
    }


    return (
        <StyledFinancialList>
            {valueList.map((val) => <ValueCard key={val.id} val={val} removeValueFromList={removeValueFromList} />)}
        </StyledFinancialList>
    )
}