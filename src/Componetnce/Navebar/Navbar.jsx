import React, { useState } from 'react';
import './nav.css';
import MenuIcon from '@mui/icons-material/Menu';
import { BottomNavigation, BottomNavigationAction, Button, ButtonGroup, Grid, InputAdornment, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ApplicationStore from '../Utility/localStorageUtil';
import NotificationBar from '../Utility/ServiceNotificationBar';
import logo from '../../ImageSet/logo2.png'
import logo2 from '../../ImageSet/logo4.png'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DrawerComponent from '../DrawerComponent';
import { useData } from '../Utility/DataContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const currentCartList = ApplicationStore().getStorage('addToCart') || [];
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isMenuVisible2, setMenuVisible2] = useState(false);
    const [isMenuVisible3, setMenuVisible3] = useState(false);
    const [isMenuVisible4, setMenuVisible4] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [onMenue, setMenue] = useState(false);

    const { cartCountList } = useData();
    const cartCount = cartCountList;
    console.log(" cartCountList.length;==>", cartCountList)

    const onclickMenue = () => {
        setMenue(true);
        console.log('hello')

    }

    const handleClick = (event) => {
        setAnchorEl(true);
    };

    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleClose = () => {
        setAnchorEl(null);
        ApplicationStore().clearStorage();
        setNotification({
            status: true,
            type: 'success',
            message: 'Logout Successful',
        });
        setTimeout(() => {
            // navigate('/login');
        }, 3000)
    };

    const handleCloseNotify = () => {
        setNotification({
            status: false,
            type: '',
            message: '',
        });
    };

    const handleMouseEnter = () => {
        setMenuVisible(true);
    };


    const handleMouseLeave = () => {
        setMenuVisible(false);
    };

    const handleMouseEnter2 = () => {
        setMenuVisible2(true);
    };

    const handleMouseLeave2 = () => {
        setMenuVisible2(false);
    };

    const handleMouseEnter3 = () => {
        setMenuVisible3(true);
    };

    const handleMouseLeave3 = () => {
        setMenuVisible4(false);
    };

    const handleMouseEnter4 = () => {
        setMenuVisible4(true);
    };

    const handleMouseLeave4 = () => {
        setMenuVisible3(false);
    };

    return (

        <Grid className='nav-Card' container spacing={2}>
            <Grid className='logo-imge' item xs={0} sm={0} md={3} lg={3} xl={3} style={{
            }}>
                <img src={logo} />
                <img src={logo2} />
            </Grid>
            <Grid className='menue-Items' item md={7} lg={6} xl={6} style={{
            }}>

                <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button
                        className='menu-container'
                        style={{ color: 'black' }}
                        onClick={onclickMenue}
                    >
                        Newly
                    </Button>

                    <div className="menu-container">
                        <Button
                            onMouseEnter={handleMouseEnter}
                            className="menu-button"
                            style={{ color: 'black' }}
                        >
                            Women
                        </Button>
                        {isMenuVisible && (
                            <div
                                className="dropdown-menu"
                                onMouseLeave={handleMouseLeave}
                            >
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Jackets" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton >
                                            <ListItemText primary="Trousers & Shorts" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton >
                                            <ListItemText primary="Top" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </div>
                        )}
                    </div>

                    <div className='menu-container'>
                        <Button
                            onMouseEnter={handleMouseEnter2}
                            className="menu-button"
                            style={{ color: 'black' }}
                        >
                            Men
                        </Button>
                        {isMenuVisible2 && (
                            <div
                                className="dropdown-menu"
                                onMouseLeave={handleMouseLeave2} style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    backgroundColor: 'white',
                                    border: '1px solid #ddd',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 1,
                                    width: '150px',

                                }}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Jackets" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton >
                                            <ListItemText primary="Trousers & Shorts" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton
                                        // component="a" href="#simple-list"
                                        >
                                            <ListItemText primary="Top" />
                                        </ListItemButton>
                                    </ListItem>

                                </List>
                            </div>
                        )}
                    </div>

                    <Button className='menu-container' style={{ color: 'black' }}>Kids</Button>
                    <div className='menu-container'>
                        <Button
                            onMouseEnter={handleMouseEnter3}
                            className="menu-button"
                            style={{ color: 'black' }}
                        >
                            Backpacks
                        </Button>
                        {isMenuVisible3 && (
                            <div
                                className="dropdown-menu"
                                onMouseLeave={handleMouseLeave3} style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    backgroundColor: 'white',
                                    border: '1px solid #ddd',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 1,
                                    width: '150px',

                                }}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Daypacks" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton >
                                            <ListItemText primary="Backpacks" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </div>
                        )}
                    </div>
                </ButtonGroup>
            </Grid>
            <Grid item xs={10} sm={10} md={3} lg={2} xl={2} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>

                <ButtonGroup variant="text" aria-label="Basic button group" style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        size='small'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div className="menu-container">
                        <Button onMouseEnter={handleMouseEnter4} style={{ color: 'black' }}>
                            <IconButton aria-label="cart" style={{ color: 'black' }}>
                                <StyledBadge badgeContent={cartCount} color="success">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Button>

                        {isMenuVisible4 && (
                            <div
                                className="dropdown-menu"
                                onMouseLeave={handleMouseLeave4}
                            >
                                <List>
                                    {
                                        currentCartList.map((item, index) => (
                                            <ListItem key={index} disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary={`${item.title}:₹${item?.price}`} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))
                                    }
                                </List>

                            </div>
                        )}
                    </div>
                </ButtonGroup>
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={1} xl={1} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',

            }}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={() => setOpenDrawer(true)}
                >
                    <MenuIcon style={{ color: '#312670' }} />
                </Button>
            </Grid>

            <NotificationBar
                handleClose={handleCloseNotify}
                notificationContent={openNotification.message}
                openNotification={openNotification.status}
                type={openNotification.type}
            />

            <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

        </Grid>

    );
}

export default Navbar;
