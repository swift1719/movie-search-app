import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Chip from '@material-ui/core/Chip';

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {

    const fetchGenres = async ()=>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US
        `);
        setGenres(data.genres);
    }
    useEffect(() => {
        fetchGenres()
        return () => {
            setGenres([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div style={{padding:"6px 0"}}>
            {genres && genres.map((genre)=>(
                <Chip 
                key={genre.id} 
                size="small" 
                clickable 
                label={genre.name} 
                style={{margin:2}} 
                />
        ))}
        </div>
    )
}

export default Genres
