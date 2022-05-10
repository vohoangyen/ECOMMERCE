import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { productItems } from '../data'
import { getListProduct } from '../redux/slice';
 
function NewArrivals() {
    // const [newProduct, setNewProduct] =  useState([]);
    const product = useSelector(getListProduct);
    console.log(product);

    // useEffect(() => {
    //     setNewProduct(n)
    // },[]); 

    return (
    <div className='new-mg20'>
        <div className='container'>
            <div className="indoor-plant-area pt-50 xxx-banner">
                <div className='container'>
                    <Row className='banner-row'>
                        <Col id="img" className='col-banner1'>
                            <NavLink to="/shirts">
                                <img src="./images/shirt2.jpg" alt='banner' className='img-banner'/> 
                                <div className="txt">
                                    <h5>SMCU Shirts</h5>
                                </div>
                            </NavLink> 
                        </Col>
                        <Col id="img">
                            <NavLink to="/pants">
                                <img src="./images/Pants1.jpg" alt='banner' className='img-banner'/> 
                                <div className="txt">
                                    <h5>SMCU Pants</h5>
                                </div>
                            </NavLink> 
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='lb-new'>
                <div className='section-title-pro'>
                    <h1>NEW ARRIVALS</h1>
                </div>
            </div>
            <div className='items-new'>               
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {product.slice(0,9).map((item) => (
                        <Col className="gutter-row pro-items" span={8}>
                            <div className='single-ele'>
                                <div className='img-pro'>
                                    <NavLink to={`/${item.id}`} className='varient hover'>
                                        <img src={item.img[0]} alt=' new product' /> 
                                    </NavLink>                                                  
                                </div>
                            </div>
                            <div className='pro-content'>
                                <h3>
                                    <NavLink to={`/${item.id}`}>{item.name}</NavLink>
                                </h3>
                                <div className='pro-price'>
                                    <div className='price-box'>
                                        <span>{item.price.toLocaleString("it-IT",{
                                            style:"currency",
                                            currency:"VND",
                                        })}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))} 
                </Row>             
            </div>

            <div className="view-all-pro">
                <NavLink to="/allproducts" className='btnview'>
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    <span className="btn-content">Xem tất cả</span>
                </NavLink> 
            </div>

            <div className="indoor-plant-area pt-50 xxx-banner">
                <div className='container'>
                    <Row className='banner-row'>
                        <Col id="img" className='col-banner1'>
                            <NavLink to="/t-shirts">
                                <img src="./images/t_shirt.png" alt='banner' className='img-banner'/> 
                                <div className="txt">
                                    <h5>SMCU T-Shirts</h5>
                                </div>
                            </NavLink>                           
                        </Col>
                        <Col id="img">
                            <NavLink to="/shorts">
                                <img src="./images/shorts.png" alt='banner' className='img-banner'/> 
                                <div className="txt">
                                    <h5>SMCU Shorts</h5>
                                </div>
                            </NavLink>                          
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
  )
}


export default NewArrivals