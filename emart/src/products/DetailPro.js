import React, { useEffect, useState } from 'react'

import { Col, Row, Form } from 'antd'
import { Link, NavLink, useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import Navbar from '../componnents/Navbar'
import { ArrowRightOutlined, CaretLeftOutlined, LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {selectProductId} from '../redux/productSlice'
import { getProductByCate, getProductById } from '../redux/slice'
import reactStringReplace from 'react-string-replace'
import { addToCart } from '../redux/cartSlice'
import Footers from '../componnents/footer'

function DetailPro() {
    const {productId} = useParams() 
    const dispatch = useDispatch()

    const product = useSelector(state => getProductById(state,productId))
    const product1 = useSelector(state => getProductByCate(state,product.cateId))

    const handleCart = (product) => {
        dispatch(addToCart(product))
    }

    useEffect(() => {
        var thumbnails = document.getElementsByClassName("small-img");
        var actveImg = document.getElementsByClassName("active");

        var buttonLeft = document.getElementById("slideLeft");
        var buttonRight = document.getElementById("slideRight");

        for(var i = 0; i < thumbnails.length; i++){
            thumbnails[i].addEventListener('mouseover', function(){
                if(actveImg.length > 0){
                    actveImg[0].classList.remove('active');
                }
                this.classList.add('active');
                document.getElementById('featured').src = this.src;
            })
        }          
        if(thumbnails.length < 6){
            document.getElementById("slideLeft").style.display = "none";
            document.getElementById("slideRight").style.display = "none";
        }

        buttonLeft.addEventListener('click',() => {
            document.getElementById('slider').scrollLeft -= 190
        })
        
        buttonRight.addEventListener('click',() => {
            document.getElementById('slider').scrollLeft += 190
        })
    })   
    
    console.log(product);

    return (
        <>
            {/* <Navbar /> */}
            <div className='detail-pro'>
                <div className="container">
                    {
                        <Row className="product-content">
                            <Col span={12} className="col-img-20">
                                <div className='pro-img-details'>
                                    <img id="featured" src={product.img[0]} className="productImg" />
                                </div>       
                                <div className='small-img-row' id='slider-wrapper'>
                                    <LeftCircleOutlined id='slideLeft' className='arrow'/>
                                    <div id='slider'>
                                        {
                                            
                                            product.img.map((im) => (
                                                <img src={im} alt='product' className='small-img active'/>
                                            ))
                                        }
                                    </div>
                                    <RightCircleOutlined id='slideRight' className='arrow' />
                                </div>             
                            </Col>
                            <Col span={10} className="col-info-pro">
                                <div className="desc-pro">
                                    <div className="info-pro">
                                        <h1 className="name-pro">{product.name}</h1>
                                    </div>
                                    <div className="p-pro" id="price">
                                        <div className="pri-box clearfix">
                                            <span className="price-pro">{product.price.toLocaleString("it-IT",{
                                        style:"currency",
                                        currency:"VND",
                                    })}</span>
                                        </div>                           
                                    </div>                
                                    <div className="info-detail">
                                        <p>
                                            <strong>Mô tả:</strong>
                                            <br />
                                            {reactStringReplace(`${product.content}`,".", ()=> <br />)}                   
                                            <br />
                                            Size: Oversize
                                        </p>
                                    </div>
                                    <hr />
                                    <div className='frm-addCart'>
                                        <Form id="add-items" className="number-pro clearfix">
                                            <div className='select-action'>
                                                <div className="addcart clearfix">
                                                    <Link to="/cart">
                                                        <input type="button" className="add-cart btn-add" value="THÊM VÀO GIỎ" onClick={() => handleCart(product)}/>
                                                    </Link>
                                                    {/* <Link to="#" class="add-cart btn-add">THÊM VÀO GIỎ</Link> */}
                                                </div>
                                            </div>                               
                                        </Form>
                                    </div>      
                                </div>
                            </Col>
                        </Row> 
                    }
             
                    <div className="relatePro">
                        <div className="re-pro">
                            <div className="tt-re-pr">
                                <div className="section-title-repro">
                                    <h3>
                                        <a href="#">SẢN PHẨM LIÊN QUAN</a>
                                    </h3>
                                </div>
                            </div>
                            <div className='items-new'>               
                                <Row>
                                    {product1.slice(0,4).map((item) => (
                                    <Col className="gutter-row pro-items" span={6} key={item.id}>
                                        <div className='single-ele'>
                                            <div className='img-pro'>
                                                <NavLink to={`/${item.id}`}>
                                                    <img src={item.img[0]} alt='new product' /> 
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
                            <div className='rr-see'>
                                <div className='realed-seemore'>
                                    <NavLink to={`/${product.cateId}`}>                                        
                                        <span>XEM THÊM</span>
                                        <ArrowRightOutlined />
                                    </NavLink>
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPro