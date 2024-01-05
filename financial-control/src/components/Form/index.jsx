import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';
import { StyledHeadline3, StyledParagraph } from "../../Styles/typography";
import { StyledForm, StyledSelect } from "./style";
import { StyledInputDescr, StyledInputValue } from "../../Styles/form";
import { StyledButtonForm } from "../../Styles/button";


export const Form = ({setValueList}) => {
    const [descr, setDescr] = useState("");
    const [amount, setAmount] = useState("");
    const [typeValue, setTypeValue] = useState("Entrada");

    const addValueList = () => {
        const newValue = { id: uuidv4(), descr, amount, typeValue};
        setValueList((valueList) => [...valueList, newValue]) ;
        console.log(newValue)
    };

    const submit = (e) => {
        e.preventDefault();
        addValueList();
        setDescr("");
        setAmount("");
     };

    return(
        <StyledForm onSubmit={submit}>
            <div>
                <StyledHeadline3>Descrição</StyledHeadline3>
                <StyledInputDescr
                    type="text"
                    placeholder="Digite aqui sua descrição"
                    value={descr}
                    onChange={(e) => setDescr(e.target.value)}
                    required
                ></StyledInputDescr>
                <StyledParagraph>
                    Ex: Compra de roupas
                </StyledParagraph>

            </div>

            <div>
            <StyledHeadline3>Valor (R$)</StyledHeadline3>
            <StyledInputValue
                type="number"
                min={0}
                placeholder="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            ></StyledInputValue>
            </div>


            <div className="buttons">
                <StyledSelect value={typeValue} onChange={(e) => setTypeValue(e.target.value)} required>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
                </StyledSelect>


                <StyledButtonForm type="submit">Inserir Valor</StyledButtonForm>

            </div>
        </StyledForm>
    );
};