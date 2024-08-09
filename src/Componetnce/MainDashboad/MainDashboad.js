import React, { useEffect, useState } from 'react'
import { connect} from 'react-redux';
import { getProductData } from '../../Actions';
import { Button, Card, Grid, Rating, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ApplicationStore from '../Utility/localStorageUtil';
import SellIcon from '@mui/icons-material/Sell';
import { useData } from '../Utility/DataContext';

const MainDashboad = (props) => {
    const [productDataSet, setProductDataset] = useState([]);
    const [isRefresh, setIsRefresh] = useState(false);
    const cartList = ApplicationStore().getStorage('addToCart');
    const { setCartCountList } = useData();

    useEffect(() => {
        props.getProductData();

    }, [isRefresh]);

    useEffect(() => {
        const dataList = props.productListData
        setProductDataset(dataList);
    }, [props]);

    const addToCart = (product) => {
        const currentCartList = ApplicationStore().getStorage('addToCart') || [];
        const productIndex = currentCartList.findIndex(item => item.id === product.id);
        let updatedCartList;
        if (productIndex !== -1) {
            updatedCartList = currentCartList.filter(item => item.id !== product.id);
        } else {
            updatedCartList = [...currentCartList, product];
        }   
        setCartCountList(updatedCartList.length)
        ApplicationStore().setStorage('addToCart', updatedCartList);
        setIsRefresh(oldValue => !oldValue);
    };

    const colorSet = (product) => {
        const cartListArray = Array.isArray(cartList) ? cartList : [];
        const isInCart = cartListArray.some(cartItem => cartItem.id === product.id);
        return isInCart ? '#FAAF00' : 'black';
    };

    return (
        <div style={{ display: 'flex', justifyContent: "center", padding: '20px' }}>
            <div style={{ height: '100%', width: '80%' }}>
                <Grid container spacing={2}>
                    {
                        productDataSet.map((product, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3} >
                                <Card style={{ height: "60vh", width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                    <img
                                        style={{ height: "30vh", width: '60%' }}
                                        src={product.image}
                                        loading="lazy"
                                    />
                                    <Rating
                                        name="simple-controlled"
                                        value={product?.rating?.rate}

                                    />
                                    <Typography style={{ padding: '10px' }}>
                                        {product.title}
                                    </Typography>

                                    <Grid container spacing={2} style={{ display: 'flex' }} >
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button
                                                variant="outlined"
                                                startIcon={<FavoriteBorderIcon />}
                                                sx={{
                                                    color: 'black',
                                                    borderColor: 'black',
                                                    '&:hover': {
                                                        borderColor: 'black',
                                                    },
                                                }}
                                            >
                                                WISHLIST
                                            </Button>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            lg={6}
                                            xl={6}
                                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                            key={index}
                                        >
                                            <Button
                                                variant="outlined"
                                                startIcon={
                                                    <SellIcon
                                                        style={{
                                                            color: colorSet(product)
                                                        }}
                                                    />
                                                }
                                                sx={{
                                                    color: 'black',
                                                    borderColor: 'black',
                                                    '&:hover': {
                                                        borderColor: 'black',
                                                    },
                                                }}
                                                onClick={() => addToCart(product)}
                                            >
                                                ADD TO CART
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid style={{ marginTop: '20px' }}>
                                        <Typography variant='h6' >
                                            ₹{product.price}
                                        </Typography>
                                    </Grid>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div >
    )
}

// export default MainDashboad
const mapStateToProps = ({ config }) => {
    const { productListData } = config;
    return { productListData }
}
export default connect(mapStateToProps, { getProductData })(MainDashboad)