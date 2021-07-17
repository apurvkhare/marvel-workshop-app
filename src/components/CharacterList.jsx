import React from 'react'
import styled from 'styled-components'
import { Skeleton } from '@material-ui/lab'
import { fetchCharacters } from '../MarvelApp.service'
import {
    FETCH_STATE,
} from '../reducer/DataReducer'
import Character from './Character'
import { useFetchData } from '../customHooks/useFetchData'

const StyledCharacterList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
`

const CharacterList = ({searchInput}) => {

    const state = useFetchData([searchInput], fetchCharacters, searchInput)

    const { data: characters, fetching, error } = state

    if (fetching === FETCH_STATE.PENDING) return (
        <StyledCharacterList>
            <Skeleton
                animation='wave'
                variant='rect'
                width={300}
                height={450}
            />
            <Skeleton
                animation='wave'
                variant='rect'
                width={300}
                height={450}
            />
            <Skeleton
                animation='wave'
                variant='rect'
                width={300}
                height={450}
            />
            <Skeleton
                animation='wave'
                variant='rect'
                width={300}
                height={450}
            />
        </StyledCharacterList>
    )

    if (fetching === FETCH_STATE.REJECTED) return <h1>{error}</h1>

    return (
        <StyledCharacterList>
            {characters && characters.length !== 0 ? (
                characters.map(character => (
                    <Character
                        key={character.id}
                        name={character.name}
                        description={character.description}
                        imageURL={character.imageURL}
                        characterId={character.id}
                    />
                ))
            ) : (
                <h1>No Characters found</h1>
            )}
        </StyledCharacterList>
    )
}

export default CharacterList
