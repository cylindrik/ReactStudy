import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import styled from 'styled-components'

const IconHolder = styled.ul`
    display: flex;
    align-items: center;
`

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;r
`

const iconList = [profile, bag]
function HeatherIcons() {
    return (
        <IconHolder>
            {iconList.map((icon) => (
                <Icon><img src={icon} alt=''></img></Icon>
            ))}
        </IconHolder>
    )
}

export default HeatherIcons