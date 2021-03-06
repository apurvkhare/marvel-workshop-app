import React from 'react'
import styled from 'styled-components'
import { Skeleton } from '@material-ui/lab'
import { fetchCharacterDetails } from '../MarvelApp.service'
import { FETCH_STATE } from '../reducer/DataReducer'
import { useFetchData } from '../customHooks/useFetchData'

const StyledCDP = styled.div`
    display: flex;
    justify-content: center;
    gap: 150px;
    padding: 25px 75px;
    align-items: flex-start;
    background-color: #ed1d24;
`

const StyledImage = styled.img`
    height: 500px;
    width: 300px;
    border-radius: 10px;
`

const StyledCharacterDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    color: white;
    width: 500px;
`

const StyledCharacterName = styled.h3`
    font-size: large;
`

const StyledDescription = styled.p``

const StyledComics = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    border-radius: 5px;
    width: 500px;
    align-self: center;
`


const CharacterDetails = ({characterId}) => {

    const state = useFetchData([], fetchCharacterDetails, characterId)

    const { data: characterDetails, fetching, error } = state

    if (fetching === FETCH_STATE.PENDING)
        return (
            <StyledCDP>
                <StyledCharacterDetails>
                    <Skeleton
                        animation='wave'
                        variant='rect'
                        width={300}
                        height={500}
                    />
                    <Skeleton
                        animation='wave'
                        variant='rect'
                        width={100}
                        height={25}
                    />
                    <Skeleton
                        animation='wave'
                        variant='rect'
                        width={500}
                        height={100}
                    />
                </StyledCharacterDetails>
                <StyledComics>
                    <h3>Featured Comics</h3>
                    <hr style={{ width: '80%' }} />
                    <Skeleton
                        animation='wave'
                        variant='rect'
                        width={400}
                        height={500}
                    />
                </StyledComics>
            </StyledCDP>
        )

    if (fetching === FETCH_STATE.REJECTED)
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{error}</h2>
            </div>
        )

    return (
        <StyledCDP>
            <StyledCharacterDetails>
                <StyledImage
                    alt={characterDetails?.name}
                    src={characterDetails?.imageURL}
                />
                <StyledCharacterName>
                    {characterDetails?.name}
                </StyledCharacterName>
                <StyledDescription>
                    {characterDetails?.description || 'A Marvel Character'}
                </StyledDescription>
            </StyledCharacterDetails>
            <StyledComics>
                <h3>Featured Comics</h3>
                <hr style={{ width: '80%' }} />
                {characterDetails?.comics &&
                characterDetails?.comics.length !== 0 ? (
                    characterDetails?.comics.map(comic => (
                        <p key={0}>{comic.name}</p>
                    ))
                ) : (
                    <p>No comics available</p>
                )}
            </StyledComics>
        </StyledCDP>
    )
}

export default CharacterDetails
