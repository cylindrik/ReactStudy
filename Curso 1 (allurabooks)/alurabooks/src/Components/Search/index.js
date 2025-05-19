import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { books } from './DataSearch'


const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%:
`
const Title = styled.h2`
    color: #FFF;
    font-size:36px;
    text-align: center;
    width: 100%;
`
const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Results = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p{
        width: 200px;
    }

    img {
        width: 100px;
    }
    &:hover{
        border: 1px solid white;
    }

`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])

    console.log(searchedBooks);

    return (
        <SearchContainer>
            <Title>Already know where to start?</Title>
            <Subtitle>Find your book!</Subtitle>
            <Input
                placeholder='write here! (case sensitive)'
                onBlur={event => {
                    const typedText = event.target.value
                    const searchResults = books.filter(books => books.name.includes(typedText))
                    setSearchedBooks(searchResults)
                }}
            />
            {searchedBooks.map( books => (
                <Results>
                    <p>{books.name}</p>
                    <img src={books.src} alt=''/>
                </Results>
            ))}
        </SearchContainer>
    )
}

export default Search