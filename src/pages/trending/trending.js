import React,{useState,useEffect} from 'react';
import axios from 'axios';  
import SingleContent from '../../components/singleContent/singleContent';
import './trending.css';
import CustomPagination from '../../components/pagination/CustomPagination';

const Trending = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending= async ()=>{
        const {data}=await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
            // console.log(data.results);
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending();
    //eslint-disable-next-line
    }, [page]);

    return (
        <div>
            <span className="pageTitle">Trending</span>
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
                        media={el.media_type}
                        vote_average={el.vote_average} 
                        />
                    )
                }
            </div>
            <CustomPagination setPage={setPage} numOfPages={10} />
        </div>
    )
}

export default Trending
