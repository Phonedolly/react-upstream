import React from 'react';
import PropTypes from 'prop-types';
import {
    BottomNavigation,
    BottomNavigationAction,
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Box,
    useScrollTrigger,
    Slide,
    Typography,
    Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function MainAppBar(props) {
    return (
        <>
            {/* <HideOnScroll {...props}></HideOnScroll> */}
            <AppBar color="transparent" elevation={0}>
                <Toolbar>
                    <IconButton edge="start">
                        <MenuIcon />
                    </IconButton>

                    <Typography>KNUAO</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
