import React from 'react';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const darkTheme=createMuiTheme({
    palette:{
        type:"dark",
    },
});

const CustomPagination = ({setPage,numOfPages=10}) => {
    
    const handlePageChange=(p)=>{
        setPage(p);
    }
    // useEffect(() => {
    //     setPage(page);
    //     return () => {
    //         setPage(1);
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
    return (
        <div
        style={{
            width:"100%",
            display:'flex',
            justifyContent:'center',
            marginTop:10,
        }}
        >
            <ThemeProvider theme={darkTheme} >
            <Pagination 
            hideNextButton
            hidePrevButton
            color="primary"
            count={numOfPages} 
            onChange={(e)=>handlePageChange(e.target.textContent)} 
            />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
