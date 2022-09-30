import { useContext } from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';

//Creating container for chat...
const StyledCard = styled(Card)`border: 1px solid #e0e0e0; border-radius: 8px; width: 240px; margin: 8px; box-shadow: none;`

const Archive = ({ archive }) => {
    //Getting all archiveNotes...
    const { archiveNotes, setNotes, setDeleteNotes } = useContext(DataContext);

    //Creating Unarchive function...
    const unArchiveNote = (archive) => {
        archiveNotes.filter(data => data.id !== archive.id);
        setNotes(prevArr => [archive, ...prevArr]);
    }

    //Creating delete function...
    const deleteNote = (archive) => {
        archiveNotes.filter(data => data.id !== archive.id);
        setDeleteNotes(prevArr => [archive, ...prevArr]);
    }

    return (
        <StyledCard>
            {/* Showing Archived notes... */}
            <CardContent>
                <Typography>{archive.heading}</Typography>
                <Typography>{archive.text}</Typography>
            </CardContent>

            {/* Unarchive or Delete function... */}
            <CardActions>
                {/* Unarchive function calling by icon ... */}
                <Unarchive fontSize="small" style={{ marginLeft: 'auto' }} onClick={() => unArchiveNote(archive)}/>

                {/* Delete function calling by icon ... */}
                <Delete fontSize="small" onClick={() => deleteNote(archive)}/>
            </CardActions>
        </StyledCard>
    )
}

export default Archive;