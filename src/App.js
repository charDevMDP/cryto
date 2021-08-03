import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import axios from 'axios';
import Quote from './components/Quote';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  @media (min-width:992px) {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Result = styled.div`
  
  display: flex;
  justify-content: center;
  max-width: 100%;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
  @media(min-width:992px){
    display: none;
    text-align: end;
    justify-content: flex-end;

    ${({ show }) => show && `
      display: flex
    `
    }
  }
`;
const Heading = styled.h1`
 @media(min-width:992px){
   font-size: 50px;
   font-weight: 700;
 }
  margin-top: 50px;
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 160px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

const Footer = styled.div`
  position: fixed;
  text-align: center;
  color: #fff; 
  bottom: 0; 
  width: 100%;
  background-color: #494C4D;
  font-family: 'Bebas Neue', cursive;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {

  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  // Mostrar spinner o resultado
  const component = (loading) ? <Spinner /> :  <Quote  result={result} />

  useEffect(() => {
    console.log('====================================')
    console.log('Gracias por visitar la app - CHARDEV')
    console.log('====================================')
  }, [])

  useEffect(() => {
    setResult({})
    setLoading(false)
    // evitamos que se ejecute la primera vez
    if(currency === '')  return;
    // llamando a la api
    setLoading(true)
    const quote = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
        const result = await axios.get(url);
        setTimeout(()=> {
          setLoading(false)
          setResult(result.data.DISPLAY[cryptoCurrency][currency])
          
        },1000)
    }

    quote();

  }, [currency,cryptoCurrency])

  return (
    <Contenedor> 
      <div style={{ marginRight:'50px', marginLeft:'50px'}}>
        <Heading>Cotizador de Criptomonedas</Heading>
        
        <Form
          setResult={setResult}
          setCurrency={setCurrency}
          setCryptoCurrency={setCryptoCurrency}
        />
    </div>
    <div>
      <Result show={loading || result.LASTUPDATE}>
         {component}
      </Result>
      
    </div>
   <Footer>
     <p >Chardev</p>
   </Footer>
</Contenedor>
  );
}

export default App;
