import React, { useState, useEffect } from 'react';
import { Button, createMuiTheme, Tab, Tabs, TextField, ThemeProvider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import CustomPagination from '../../components/pagination/CustomPagination';
import SingleContent from '../../components/singleContent/singleContent';

const darkTheme = createMuiTheme({
    palette:{
        type:'dark',
        primary:{
            main:"#fff", 
        },
    },
});

const Search = () => {
    
    const [tabNo, setTabNo] = useState(0);
    const [page, setPage] = useState(1);
    const [searchContent, setSearchContent] = useState("");
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
   
    const fetchSearch = async () =>{
        try {
            const {data}= await axios.get(
                `https://api.themoviedb.org/3/search/${tabNo ? "tv" : "movie"}?api_key=${
                process.env.REACT_APP_API_KEY}&language=en-US&query=${searchContent}&page=${page}&include_adult=false`
                );
            setContent(data.results);
            setNumOfPages(data.total_pages);
        } catch (error) {
            // setContent([]);
            // setNumOfPages(0);
            // setTab(0);
            console.error(error);
        }
    };
    
    useEffect(()=>{
        window.scroll(0,0);
        fetchSearch();
    //eslint-disable-next-line
    },[tabNo,page]);

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{display:"flex", margin:"15px 0"}}>
                    <TextField
                    style={{flex:1}}
                    className="searchBox"
                    label="Search"
                    variant="filled"
                    // onSubmit={fetchSearch}
                    onChange={(e)=>setSearchContent(e.target.value)}
                    />
                    <Button 
                    variant="contained" 
                    style={{marginLeft:10}}
                    onClick={fetchSearch}
                    >
                        <SearchIcon fontSize="large" />
                    </Button>
                </div>
                <Tabs 
                value={tabNo} 
                indicatorColor='primary' 
                textColor='primary'
                onChange={(event,newValue)=>{
                    setTabNo(newValue);
                    setPage(1);
                }}
                style={{paddingBottom:5}}
                aria-label="disabled tabs"
                >
                    <Tab  style={{width:"50%"}} label="Search Movies" />
                    <Tab  style={{width:"50%"}} label="Search Webseries" />
                </Tabs>
            </ThemeProvider>
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
                        media_type={tabNo?"TV":"movie"}
                        vote_average={el.vote_average} 
                        />
                    )
                }
                {
                    searchContent!=='' &&
                    content.length===0 &&
                    (tabNo?<h2>No Series Found</h2>:<h2>No Movies Found</h2>)
                }
            </div>
            {
                numOfPages>1 && (
                <CustomPagination
                setPage={setPage} 
                numOfPages={numOfPages} 
                />
                )
            }
        </div>
    )
}

export default Search
