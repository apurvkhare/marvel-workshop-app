import axios from 'axios'

export const fetchCharacters = async (characterName = '') => {
    try {
        let url;
        if(characterName === '')
            url = `http://gateway.marvel.com/v1/public/characters?ts=1&limit=50&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_MD5_HASH}`
        else
            url = `http://gateway.marvel.com/v1/public/characters?ts=1&limit=50&nameStartsWith=${characterName}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_MD5_HASH}`

        const response = await axios.get(url)
        
        const characters = response?.data?.data?.results.map(character => ({
            id: character.id,
            name: character.name,
            description: character.description,
            imageURL: `${character.thumbnail.path}.jpg`,
        }))
        // console.log("Characters Data: ", response)
        console.log("Characters: ", characters)
        return characters
    } catch (error) {
        console.error('Error fetching characters: ', error)
        return null
    }
}

export const fetchCharacterDetails = async characterId => {
    try {
        const response = await axios.get(
            `http://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_MD5_HASH}`
        )

        const details = response?.data?.data?.results[0]
        const characterDetails = {
            id: details.id,
            name: details.name,
            description: details.description,
            imageURL: `${details.thumbnail.path}.jpg`,
            comics: details.comics.items,
        }

        // console.log('Character details from API: ', details)
        return characterDetails
    } catch (err) {
        console.error('Error fetching Marvel Character Details: ', err)
        return null
    }
}