import Header from './Components/Header'
import styled from 'styled-components'
import Search from './Components/Search'
import Releases from './Components/Releases'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002f52 35%, #326589) 
    
`

function App() {
  return (
    <AppContainer>
        <Header />
        <Search />
        <Releases />
    </AppContainer>
  );
}

export default App;
