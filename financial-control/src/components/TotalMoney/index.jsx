import { TotalMoneyCard } from "./TotalMoneyCard"


export const TotalMoneySection = ({valueList}) => {

    return(
        <section>
            {valueList.length > 0 ? 
                <section>
                    <TotalMoneyCard valueList={valueList}/>
                </section> : null
            }
        </section>
    )
}