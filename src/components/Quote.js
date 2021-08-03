
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: 'Bebas Neue', cursive;
    margin-bottom: 50px;
`

const Info = styled.p`
 @media(min-width:992px){
        font-size: 25px;
    }
    font-size: 20px;

    span{
        font-weight: bold;
    }
`

const Price = styled.p`
 @media(min-width:992px){
       font-size: 35px;
    }
    padding-top: 50px;
    font-size: 30px;
`

const Quote = ({result}) => {

    if(Object.keys(result).length === 0) return null;

    return ( 
        <ResultDiv>
            <Price>El precio es: <span>{result.PRICE}</span> </Price>
            <Info>Precio más alto del día: <span>{result.HIGHDAY}</span> </Info>
            <Info>Precio más bajo del día: <span>{result.LOWDAY}</span> </Info>
            <Info>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span> </Info>
            <Info>Última Actualización: <span>{result.LASTUPDATE}</span> </Info>
        </ResultDiv>
        );
    
}

export default Quote
