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
    font-weight: 500;
    font-size: 1rem;
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

const useCurrency = (label, stateInitial, options) => {

    // state custom hook
    const [state, updateState] = useState(stateInitial);

    const Select = () => (
        <Fragment>
            <Label htmlFor="">{label}</Label>
            <SelectComp
            name="" 
            id="" 
            onChange={e => updateState(e.target.value)}
            value={state}
            >

                <option value=''>- Seleccione un moneda -</option>
                { options.map( op => (
                    <option key={op.code} value={op.code}>{op.name}</option>
                ))}
            </SelectComp>
        </Fragment>
    )

    // return state, setState, interfez
    return [state, updateState, Select];
}

export default useCurrency;
