import './style.css'
import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'

const iconList = [profile, bag]
function HeatherIcons() {
    return (
        <ul className='icons'>
            {iconList.map((icon) => (
                <li className='icon'><img src={icon} alt=''></img></li>
            ))}
        </ul>
    )
}

export default HeatherIcons