import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Navebar/Navbar';
import '../HomePage/homepage.css'
import { Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { DataProvider } from '../Utility/DataContext';

const Homepages = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/MainDashboad');
    }, [])
    return (
        <div className="homepage-container">
            <DataProvider>
                <div className="navbar-container">
                    <Navbar />
                </div>
                <div className="content-container">
                    <Outlet />
                </div>
            </DataProvider>
            <div className="footer-container">
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={8} lg={8} xl={8}>
                        <Typography>
                            Contact Us:+918722157146
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} lg={4} xl={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <FacebookIcon />
                        <InstagramIcon />
                        <XIcon />
                        <YouTubeIcon />
                        <LinkedInIcon />

                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default Homepages;
