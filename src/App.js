import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BottomNavigation,
    BottomNavigationAction,
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core';

// const useStyles = makeStyles({
//     root: {
//         width: 500,
//     },
// });
export default function App() {
    // const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </div>
    );
}

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
