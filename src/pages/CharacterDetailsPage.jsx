import React from 'react'
import CharacterDetails from '../components/CharacterDetails'
import { useParams } from 'react-router'

const CharacterDetailsPage = () => {
    const { characterId } = useParams()
    return <CharacterDetails characterId={characterId} />
}

export default CharacterDetailsPage
