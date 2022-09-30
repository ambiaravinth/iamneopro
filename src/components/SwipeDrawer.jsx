import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

//components
import HeaderBar from './HeaderBar';
import NavList from './NavList';
const drawerWidth = 200;

//Open Drawer div size
const openedMixin = (theme) => ({
    width: drawerWidth,
    overflowX: 'hidden', //For hiding scroll bar
});
//Closed Drawer div size
const closedMixin = (theme) => ({
    width: `calc(${theme.spacing(7)} + 1px)`,
    overflowX: 'hidden', //For hiding scroll bar
});

//For toolbox in below header.....
const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

//For creating a Drawer...
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function SwipeDrawer() {
    const [open, setOpen] = React.useState(true); //Declaring open & close variables...
    //Toggle function for drawer...
    const handleDrawer = () => {
        setOpen(prevState => !prevState);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {/* For inserting header... */}
            <HeaderBar open={open} handleDrawer={handleDrawer}/>
            {/* For inserting drawer... */}
            <Drawer variant="permanent" open={open}>
                <DrawerHeader></DrawerHeader> {/* For spacing...*/}
                <NavList /> {/* Showing navbar options...*/}
            </Drawer>
        </Box>
    );
}

export default SwipeDrawer;