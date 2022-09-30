import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import {LayersOutlined, Menu, Refresh, Settings} from '@mui/icons-material';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

//Creating Search container...
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  border: '1px solid #e0e0e0',
  borderradius: '8px',
  margin: '8px',
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(15), width: '650px',},
}));

//Creating Search icon...
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: 'gray',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

//Creating search input-textbox...
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

//Creating Header container...
const Header = styled(AppBar)`z-index: 1201; background: #fff; height: 70px; box-shadow: inset 0 -1px 0 0 #dadce0;`

//Creating Heading style...
const Heading = styled(Typography)`color: #5F6368; font-size: 24px; margin-left: 25px;`


//Inserting LOGO...
const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';

const HeaderBar = ({ open, handleDrawer }) => {
  return (
    <Header open={open}>
      <Toolbar style={{width:'100%'}}>

        {/* Drawer icon trible line icon...*/}
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start">
          <Menu />  {/* Internal container design... */}
        </IconButton>

        {/* Inserting LOGO... */}
        <img src={logo} alt="logo" style={{width: 30}} />

        <Heading>Keep</Heading> {/* Heading... */}

        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/> {/* Input text box*/}
        </Search>


          <IconButton style={{marginRight: '20px',marginLeft: '10%' }} edge="start">
            <Refresh />
          </IconButton>
          <IconButton sx={{ marginRight: '20px'}} edge="end">
            <LayersOutlined/>
          </IconButton>
          <IconButton sx={{ marginRight: '20px'}} edge="end">
            <Settings/>
          </IconButton>


      </Toolbar>
    </Header>
  )
}

export default HeaderBar;