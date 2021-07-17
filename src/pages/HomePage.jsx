import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './HomePage.css'
import CharacterList from '../components/CharacterList'

const HomePage = () => {
    const [searchInput, setSearchInput] = React.useState('')

    return (
        <div className="container">
            <Header searchInput={searchInput} setSearchInput={setSearchInput} />
            <CharacterList searchInput={searchInput}/>
            <Footer />
        </div>
    )
}

export default HomePage
