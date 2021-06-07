import axios from 'axios'
import React,{useEffect} from 'react'
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
    const handleAdd = (genre)=>{
        setSelectedGenres([...selectedGenres,genre]);
        setGenres(genres.filter((g)=>g.id!==genre.id));
        setPage(1);
    }
    const handleRemove=(genre)=>{
        setSelectedGenres(selectedGenres.filter((g)=>g.id!==genre.id));
        setGenres([...genres,genre]);
        setPage(1);
    }
    useEffect(() => {
        fetchGenres()
        //to unmount the component when url/page changes
        return () => {
            setGenres([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div style={{padding:"6px 0"}}>
            {
                selectedGenres && selectedGenres.map((genre)=>(
                <Chip 
                key={genre.id} 
                size="small" 
                color="primary"
                clickable 
                label={genre.name} 
                style={{margin:2}} 
                onDelete={()=>handleRemove(genre)}
                />
                ))
            }
            {
                genres && genres.map((genre)=>(
                <Chip 
                key={genre.id} 
                size="small" 
                clickable 
                label={genre.name} 
                style={{margin:2}} 
                onClick={()=>handleAdd(genre)}
                />
                ))
            }
        </div>
    )
}

export default Genres
