import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from '@material-ui/core';

import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  nav: {
    position: 'static',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  titleText: {
    flexGrow: 1,
    color: grey[50],
    fontFamily: 'Gilroy',
  },
});

export default function DefaultNavigationBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  const handleAuth = () => {
    setAuth(!auth);
  };

  return (
    <div className={classes.root}>
      {/* <Button className={newTheme.nav}>sdf</Button> */}
      <AppBar className={classes.nav}>
        <Toolbar>
          {/* <Typography variant="h6" className={classes.titleText}>
            KNUAO
          </Typography> */}

          {/* 액션 버튼들 */}
          <Box marginLeft="auto">
            <IconButton onClick={props.handleDarkMode}>
              {!props.isDarkMode ? <Brightness2Icon /> : <Brightness7Icon />}
            </IconButton>
            <Button onClick={handleAuth}>{auth ? `로그인` : `로그아웃`}</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

DefaultNavigationBar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  handleDarkMode: PropTypes.func.isRequired,
};
