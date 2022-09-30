import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete, EditOutlined as Pencil, NotificationsOutlined as Bell } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavList = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Reminders', icon: <Bell />, route: '/delete' },
        { id: 3, name: 'Edit labels', icon: <Pencil />, route: '/delete' },
        { id: 4, name: 'Archive', icon: <Archive />, route: '/archive' },
        { id: 5, name: 'Trash', icon: <Delete />, route: '/delete' },
    ]
    
    return (
        <List>
        {
            //Get datas from navList for all elements...
            navList.map(list => (
                ////navList by ID...
                <ListItem button key={list.id}>
                    {/* navList elements redirect location... */}
                    <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                        {/* navList elements icons... */}
                        <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        {/* navList elements name... */}
                        <ListItemText primary={list.name} />
                    </Link>
                </ListItem>
            ))
        }
        </List>
    )
}

export default NavList;