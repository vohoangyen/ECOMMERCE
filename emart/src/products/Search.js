import { Col, Form, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import Navbar from '../componnents/Navbar'
import { getListSearch, getProductByKw } from '../redux/slice'

function Search() {
    const search = useSelector(state => state.products.search)
    console.log(search);
  return (
    <>
        {search.length === 0 ?(
            <>
                <div className='container searchh' style={{height: "100%"}}>
                    <h5 style={{textAlign: "center"}}>Không tìm thấy kết quả</h5>
                </div>
            </>
        ):(
            <>
                <div className='container searchh'>
                {/* <div className='search-pro'>
                    <div className='pro-search'>
                        <Form className='form-search'>
                            <input type="search" className="form-control find" placeholder="Nhập tên sản phẩm"/>
                            <button type="submit" className='search-pro'>
                                <i className="fa fa-search"></i>
                            </button>
                        </Form>
                    </div>
                </div>            */}

                <div className='all-mg20'>
                    <div className='container'>
                        {/* <div className='lb-new'>
                            <h5><strong>KẾT QUẢ TÌM KIẾM CHO "{}"</strong></h5>
                        </div> */}
                        <div className='items-new'>               
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                {
                                    search.map((i) => (
                                        <Col className="gutter-row pro-items" span={8}>
                                            <div className='single-ele'>
                                                <div className='img-pro'>
                                                    <NavLink to={`/${i.id}`}>
                                                        <img src={i.img[0]} alt=' new product' /> 
                                                    </NavLink>                                                  
                                                </div>
                                            </div>
                                            <div className='pro-content'>
                                                <h3>
                                                    <NavLink to={`/${i.id}`}>{i.name}</NavLink>
                                                </h3>
                                                <div className='pro-price'>
                                                    <div className='price-box'>
                                                        <span>{i.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }                            
                            </Row>             
                        </div>
                    </div>
                </div>
            </div>
            </>
        )}       
    </>
  )
}

export default Search