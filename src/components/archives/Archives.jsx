import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataContext } from '../../context/DataProvider';

//components
import Archive from './Archive';

//For toolbox space from outer...
const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

//Creating the archive container....
const Archives = () => {
    const { archiveNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        archiveNotes.map(archive => (
                            <Grid item>
                                <Archive archive={archive} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Archives;