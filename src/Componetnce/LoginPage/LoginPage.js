import React, { useEffect, useState } from 'react'
import './loginCss.css'
import { Button, Card, CardContent, IconButton, Typography } from '@mui/joy'
import { Grid, InputAdornment, TextField, useTheme, useMediaQuery } from '@mui/material'
import loginPage from '../ImageSet/LoginPageImages/loginpageDash.jpg'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { LoginFormValidate } from '../validation/formValidation'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'
import NotificationBar from '../Utility/ServiceNotificationBar'
import ApplicationStore from '../Utility/localStorageUtil'

const LoginPage = () => {
    const [email, setUserEmail] = useState("");
    const [password, setUserPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorObject, setErrorObject] = useState({});
    const [hovringColor, setHovingColor] = useState('black');
    const [loginData, setLoginData] = useState('');
    const navigate = useNavigate();
    const theme = useTheme();
    const ixssScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallScreen = ixssScreen || isSmScreen || isMdScreen;
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });
    const loginCollectionRef = collection(db, 'user');

    const validateFrom = (value, type) => {
        LoginFormValidate(value, type, setErrorObject);
    };

    useEffect(() => {
        const getLoginData = async () => {
            const data = await getDocs(loginCollectionRef);
            setLoginData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getLoginData();
    }, []);

    const clearData = () => {
        setUserEmail('');
        setUserPassword('');
    }

    const onLoginClicked = (e) => {
        e.preventDefault();
        const userData = loginData.find(item => item.emailId === email);
        console.log('userData', userData);
        if (userData?.emailId === email) {
            if (userData?.password === password) {
                setNotification({
                    status: true,
                    type: 'success',
                    message: 'Login Successful',
                });
                setTimeout(() => {
                    clearData();
                    handleCloseNotify();
                    navigate('/');
                    ApplicationStore().setStorage('userDetails', userData);
                }, 3000)

            } else {
                setNotification({
                    status: true,
                    type: 'error',
                    message: 'Entered correct password',
                });
                setTimeout(() => {
                    clearData();
                    handleCloseNotify();
                }, 3000);

            }
        } else {
            setNotification({
                status: true,
                type: 'error',
                message: 'Entered correct E-mail Id',
            });
            setTimeout(() => {
                clearData();
                handleCloseNotify();
            }, 3000);
        }
    }

    const handleCloseNotify = () => {
        setNotification({
            status: false,
            type: '',
            message: '',
        });
    };

    const [isBlinking, setIsBlinking] = useState(true);

    const handleClick = () => {
        navigate('/Register');
    };

    const handleMouseEnter = () => {
        setIsBlinking(true);
    };

    const handleMouseLeave = () => {
        setIsBlinking(false);
    };

    return (
        <div className='login-mainContainer'>
            <Card style={{ width: '80%', borderRadius: '20px' }}>
                <CardContent orientation="horizontal">
                    <form onSubmit={onLoginClicked}>
                        <Grid container spacing={2}>
                            {!isSmallScreen && (
                                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                    <img
                                        src={loginPage}
                                        loading="lazy"
                                        alt=""
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                </Grid>
                            )}
                            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', padding: '20px', alignItems: 'center' }} >
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', }}>
                                        <Typography level="title-lg" fontSize='24px' fontWeight='bold' >Login </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <TextField
                                            fullWidth
                                            id="standard-basic"
                                            label="Email Address"
                                            variant="standard"
                                            value={email}
                                            onChange={(e) => {
                                                setUserEmail(e.target.value)
                                            }}
                                            required
                                            onBlur={() => validateFrom(email, "email")}
                                            autoComplete="off"
                                            error={errorObject?.emailId?.errorStatus}
                                            helperText={errorObject?.emailId?.helperText}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <TextField
                                            fullWidth
                                            id="standard-basic"
                                            label="Password"
                                            variant="standard"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => {
                                                setUserPassword(e.target.value)
                                            }}
                                            required
                                            error={errorObject?.password?.errorStatus}
                                            helperText={errorObject?.password?.helperText}
                                            onBlur={() => {
                                                validateFrom(password, "password");
                                                setShowPassword(false);
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            style={{
                                                                position: "absolute",
                                                                right: "5px",
                                                                top: "0",
                                                                bottom: "1px",
                                                            }}
                                                            aria-label="toggle password visibility"
                                                            onClick={(e) => {
                                                                setShowPassword(!showPassword);
                                                            }}
                                                            onMouseDown={(e) => {
                                                                e.preventDefault();
                                                            }}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Button
                                            variant="solid"
                                            size="md"
                                            fullWidth
                                            aria-label="Explore Bahamas Islands"
                                            style={{ backgroundColor: '#645b94', color: 'white', fontWeight: 'bold', }}
                                            type='submit'
                                        >
                                            Login Now
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', }}>
                                        <Typography
                                            onClick={handleClick}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            sx={{
                                                color: isBlinking ? theme.palette.primary.main : theme.palette.text.primary,
                                                fontWeight: 'bold',
                                                animation: isBlinking ? 'blinkingText 1s infinite' : 'none',
                                                cursor: 'pointer'
                                            }}
                                            variant="body1"
                                        >
                                            Click here to register for the event
                                        </Typography>
                                        <style>
                                            {`
                                                @keyframes blinkingText {
                                                    0% { opacity: 1.0; }
                                                    50% { opacity: 0.5; }
                                                    100% { opacity: 5.0; }
                                                }
                                                `}
                                        </style>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
            <NotificationBar
                handleClose={handleCloseNotify}
                notificationContent={openNotification.message}
                openNotification={openNotification.status}
                type={openNotification.type}
            />
        </div>
    )
}

export default LoginPage
