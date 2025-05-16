import Logo from '../Logo'
import OptionsHeather from '../OptionsHeather'
import HeatherIcons from '../HeatherIcons'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`


function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OptionsHeather/>
            <HeatherIcons/>
        </HeaderContainer>         
    )
}

export default Header