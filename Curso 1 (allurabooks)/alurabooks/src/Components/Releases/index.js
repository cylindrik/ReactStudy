import { books } from './ReleaseData'
import styled from 'styled-components'
import { Title } from '../Title/index'
import RecomenCard from '../Card/index'
import book2 from '../../images/livro2.png'

const ReleaseContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor; pointer;
`

function Releases() {
    return (
        <ReleaseContainer>
            <Title
                col={"#EB9B00"}
                SizeFont={"36px"}
            > Releases </Title>
            <NewBooksContainer>
                {books.map(books => (
                    <img src={books.src} alt= '' />
                ))}
            </NewBooksContainer>
            <RecomenCard
                title = "maybe you wold like"
                subtitle = "angular 11"
                description = "creating a google app"
                img = {book2}
            ></RecomenCard>
        </ReleaseContainer>  
    )
}

export default Releases