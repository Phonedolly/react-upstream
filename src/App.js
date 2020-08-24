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
<<<<<<< Updated upstream
    Box,
=======
    createMuiTheme,
>>>>>>> Stashed changes
} from '@material-ui/core';
import { Gradient } from 'react-gradient';
import { motion } from 'framer-motion';
import NavigationBar from './NavigationBar/NavigationBar';
import Loader from './Loader';
import MainAppBar from './NavigationBar/MainAppBar';

// import globalTheme from './globalTheme';

// const useStyles = makeStyles({
//     root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//     },
// });

// export const theme = createMuiTheme({
//     overrides: {
//         MuiCssBaseline: {
//             '@global': {
//                 html: {
//                     WebkitFontSmoothing: 'false',
//                 },
//             },
//         },
//     },
// });

export default function App() {
    // const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const gradients = [
        ['#DC2424', '#4A569D'],
        ['#f2709c', '#ff9472'],
    ];
    return (
        <>
            <Gradient gradients={gradients} property="background" duration={10000}>
                <div>
                    {/* <NavigationBar /> */}
                    <MainAppBar />
                    <Loader />
                </div>
            </Gradient>
        </>
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
