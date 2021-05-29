import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';

const useStyles = makeStyles({
  root: {
    width: 500,
    position:"fixed",
    bottom:0,
    backgroundColor:"#2d313a",
    zIndex:5,
  },
  navs:{
    color:"#fff"
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.navs}  label="Trending" icon={<WhatshotIcon/>} />
      <BottomNavigationAction className={classes.navs} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction className={classes.navs} label="Web-series" icon={<TvIcon />} />
      <BottomNavigationAction className={classes.navs} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
