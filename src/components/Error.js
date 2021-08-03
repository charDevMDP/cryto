import styled from "@emotion/styled"

const MsgError = styled.p`
    background-color: red;
    padding: 0.7rem;
    color: #FFF;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`

const Error = ({msg}) => {
    return (
        <MsgError>{msg}</MsgError>
    )
}

export default Error
