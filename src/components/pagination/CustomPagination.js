import { createMuiTheme, ThemeProvider  } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const darkTheme=createMuiTheme({
    palette:{
        type:"dark",
    },
});

const CustomPagination = ({setPage,numOfPages=10}) => {

    const handlePageChange=(page)=>{
        setPage(page);
    }
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
