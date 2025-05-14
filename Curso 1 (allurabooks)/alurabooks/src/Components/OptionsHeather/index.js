import './style.css'

const textList = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OptionsHeather() {
    return (
            <ul className='options'>
                {textList.map((text) => (
                    <li className='list'><p>{text}</p></li>
                ))}
            </ul>
    )
}

export default OptionsHeather