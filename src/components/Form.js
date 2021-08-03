import styled from "@emotion/styled"
import axios from "axios"
import { useEffect, useState } from "react"
import useCryptoCurrency from "../hooks/useCryptoCurrency"
import useCurrency from "../hooks/useCurrency"
import Error from "./Error"

const Btn = styled.input`
 @media(min-width:992px){
        font-weight: bold;
        padding: 10px;
        letter-spacing: 2px;
        font-size: 20px;
    }
    margin-top:20px;
    font-weight: 500;
    font-size: 15px;
    padding: 5px;
    background-color: #DAA520;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 1px;

    &:hover{      
        background-color: #FFD700;
        cursor: pointer;
    }

`

const Form = ({setCryptoCurrency, setCurrency, setResult}) => {

    const [listCrypto, setListCrypto] = useState([])
    const [error, setError] = useState(false)
    
    const CURRENCY = [
        { code: 'USD', name: 'Dolar de Estados Unidos' },
        { code: 'ARG', name: 'Peso Argentino' },
        { code: 'MXN', name: 'Peso Mexicano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' },
    ]

    const [currency,udpateCurrency,SelectCurrency]  = useCurrency('Elige tu moneda', '', CURRENCY);
    const [cryptoCurrency, updateCryptoCurrency, SelectCryptoCurrency] = useCryptoCurrency('Elegi una cryptomonmeda', '', listCrypto)

    
    useEffect(() => {
        const getApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            setListCrypto(result.data.Data)
        }
        getApi();
    }, [])

    useEffect(() => {
       setResult({})
    }, [currency,cryptoCurrency])


    const quoteCurrency = e => {
        e.preventDefault();
        if(currency === '' || cryptoCurrency === ''){
            setError(true)
            return
        }
        setError(false)
        setCurrency(currency)
        setCryptoCurrency(cryptoCurrency)
    }

    return (
        <form onSubmit={quoteCurrency}>

            <SelectCurrency/>
            <SelectCryptoCurrency/>
            <Btn type='submit' value='COTIZAR'/>            
            { error ? 
            <Error msg='Debe seleccionar algunas de las opciones'/>
            : null}
        </form>
    )
}

export default Form
