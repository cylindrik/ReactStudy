import './style.css'
import Logo from '../Logo'
import OptionsHeather from '../OptionsHeather'
import HeatherIcons from '../HeatherIcons'
function Header() {
    return (
        <header className="App-Header">
            <Logo/>
            <OptionsHeather/>
            <HeatherIcons/>
        </header>         
    )
}

export default Header