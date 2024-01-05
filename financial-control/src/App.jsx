import { useState } from 'react'
import { GlobalReset } from './Styles/reset'
import { GlobalStyles } from './Styles/global'
import { StyledContainer } from './Styles/grid';
import { Header } from './components/Header'
import { Form } from './components/Form';
import { StyledFlexBox } from './Styles/pages/app';
import { ListSection } from './components/ListSection';
import { TotalMoneySection } from './components/TotalMoney';

function App() {

  const [valueList, setValueList] = useState([]);

  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />

      <Header />
      <main>
        <StyledContainer>

          <StyledFlexBox>
            <div className='formBox'>
              <div>
                <Form setValueList={setValueList} />
              </div>
                <TotalMoneySection valueList={valueList}/>
            </div>

            <ListSection valueList={valueList} setValueList={setValueList} />
          </StyledFlexBox>


        </StyledContainer>
        
      </main>
    </div>
  )
}

export default App
