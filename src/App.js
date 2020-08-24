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
    Box,
} from '@material-ui/core';
import { Gradient } from 'react-gradient';
import { motion } from 'framer-motion';
import NavigationBar from './NavigationBar/NavigationBar';
import Loader from './Loader';
import MainAppBar from './NavigationBar/MainAppBar';

// const useStyles = makeStyles({
//     root: {
//         width: 500,
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
