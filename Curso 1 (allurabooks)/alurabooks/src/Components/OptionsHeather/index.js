import './style.css'
import styled from 'styled-components'

const Options = styled.ul`
    display: flex;
`

const OptionsList = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const textList = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OptionsHeather() {
    return (
        <Options>
                {textList.map((text) => (
                    <OptionsList><p>{text}</p></OptionsList>
                ))}
        </Options>
    )
}

export default OptionsHeather