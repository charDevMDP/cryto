import React, { Fragment, useState } from "react"
import styled from "@emotion/styled";

const Label = styled.label`
 @media(min-width:992px){
        font-weight: bold;
        font-size: 2rem;
        margin-top: 2rem;
    }
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1rem;
    display: block;
`
const SelectComp = styled.select`
 @media(min-width:992px){
        padding: 0.7rem;
        font-size: 1rem;
    }
    width: 100%;
    display: block;
    padding: 0.5rem;
    -webkit-appearance: none;
    border-radius: 5px;
    border: none;
    font-size: 0.8rem;
`

const useCryptoCurrency = (label, stateInitial, options) => {

    // state custom hook
    const [state, updateState] = useState(stateInitial);

    const SelectCrypto = () => (
        <Fragment>
            <Label htmlFor="">{label}</Label>
            <SelectComp
            name="" 
            id="" 
            onChange={e => updateState(e.target.value)}
            value={state}
            >

                <option value=''>- Seleccione una criptomoneda -</option>
                { options.map( op => (
                    <option key={op.CoinInfo.Id} value={op.CoinInfo.Name}>{op.CoinInfo.FullName}</option>
                ))}
            </SelectComp>
        </Fragment>
    )

    // return state, setState, interfez
    return [state, updateState, SelectCrypto];
}

export default useCryptoCurrency;
