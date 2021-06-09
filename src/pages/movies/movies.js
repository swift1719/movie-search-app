import axios from 'axios';
import React,{useState,useEffect} from 'react';
import CustomPagination from '../../components/pagination/CustomPagination';
import SingleContent from '../../components/singleContent/singleContent';
import Genres from '../../components/Genres/Genres';
import useGenres from '../../hooks/useGenres';

const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreForURL=useGenres(selectedGenres);

    const fetchMovies= async ()=>{
        const {data}= await axios.get(`
        https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}
        `);
        // console.log(data);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(()=>{
        fetchMovies();
        window.scroll(0,0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page,selectedGenres]);

    return (
        <div>
            <span className="pageTitle">Movies</span>
            <Genres
            type="movie"
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map(el => 
                        //for movie title = el.title whereas for series title=el.name
                        <SingleContent 
                        key={el.id} 
                        id={el.id} 
                        poster={el.poster_path} 
                        title={el.title || el.name} 
                        date={el.first_air_date || el.release_date}
                        media_type="movie"
                        vote_average={el.vote_average} 
                        />
                    )
                }
            </div>
            {
                numOfPages>1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
                )
            }
        </div>
    )
}

export default Movies
