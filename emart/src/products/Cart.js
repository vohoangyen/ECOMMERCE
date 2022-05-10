import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row, Table } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import Footers from '../componnents/footer'
import Navbar from '../componnents/Navbar'
import { addToCart, addUser, clearCart, decreaseCart, getTotals, removeFromCart } from '../redux/cartSlice'
import { addCartItems} from '../redux/orderSlice'
import { ToastContainer, toast } from 'react-toastify';

function Cart() {
    const [name,setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [cartI, setCartI] = useState([])

    const notify = () => toast("Vui lòng nhập thông tin người nhận!");


    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch]);

    const handleRemove = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleDecrease = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

    const handleIncrease = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    const handleSubmit = () => {
        dispatch(addCartItems({
            cartI:cart,
            name:name,
            phone: phone,
            address: address,
        }))

        dispatch(clearCart())
    }

    // const handleCheck = () => {
    //     if(document.getElementById('radio-input').checked == true){
    //         document.getElementById('contents-desc').style.display = 'block';
    //     }
    // }

  return (
    <>
        {cart.cartItems.length === 0 ? (
            <div className='layout-cart' style={{height: "100%"}}>
                <div className='container-fluid'>
                    <div className='cart-inf'>
                        
                        <div className='cart-empty'>
                            <p>Giỏ hàng của bạn đang trống</p>
                            <div className='start-shopping'>
                                <Link to="/">
                                    <ArrowLeftOutlined />
                                    <span>Tiếp tục mua hàng</span>
                                </Link>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
            ) : (
                <>
                <div className='layout-cart' style={{height: "auto"}}>
                    <div className='container-fluid'>
                        <div className='cart-inf'>
                            <Row>
                                <Col span={16} className='col-cart'>
                                    <div className='cart-ele'>
                                        <div className="tt-cartpage">
                                            <h3 className="cart-tt">GIỎ HÀNG</h3>
                                        </div>
                                        <div>
                                            <div className='cart-titles'>
                                                <h3 className='pro-title'>Sản phẩm</h3>
                                                {/* <h3 className='cart-price'>Giá</h3> */}
                                                <h3 className='cart-quantity'>Số lượng</h3>
                                                <h3 className='cart-total'>Thành tiền</h3>
                                                <h3 className='cart-delete'>Xóa</h3>
                                            </div>
                                            <div className='cart-items'>
                                                {cart.cartItems?.map(item => (
                                                    <div className='cart-item' key={item.id}>
                                                        <div className='cart-products'>
                                                            <NavLink to={`/${item.id}`} className="cart-products-img">
                                                                <img src={item.img[0]} alt={item.name}/>
                                                            </NavLink>                                                            
                                                            <div>
                                                                <h3>{item.name}</h3>                                                                      
                                                                <h3>{item.price.toLocaleString("it-IT",{
                                                                    style:"currency",
                                                                    currency:"VND",})}</h3>                                                         
                                                            </div>
                                                        </div>

                                                        {/* <div className='cart-pro-price'>{item.price.toLocaleString("it-IT",{
                                                                    style:"currency",
                                                                    currency:"VND",})}
                                                        </div> */}

                                                        <div className='cart-pro-quantity'>
                                                            <button onClick={() => handleDecrease(item)}>-</button>
                                                            <div className='cart-count'>{item.cartQuantity}</div>
                                                            <button onClick={() => handleIncrease(item)}>+</button>
                                                        </div>
                                                        <div className='cart-pro-total'>{(item.price * item.cartQuantity).toLocaleString("it-IT",{
                                                                        style:"currency",
                                                                        currency:"VND",})}
                                                        </div>

                                                        <div className='cart-pro-delete'>
                                                            <button onClick={() => handleRemove(item)}>
                                                                <DeleteOutlined />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='cart-summary'>
                                                <div className='cart-checked'>                                                                                              
                                                    <div className='continue-shopping'>
                                                        <Link to="/">
                                                            <ArrowLeftOutlined />
                                                            <span>Tiếp tục mua hàng</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='cart-checkout'>
                                                    <div className='cart-subtotal'>
                                                        <span>TỔNG TIỀN: </span>
                                                        <span className='cart-amount'>{cart.cartTotalAmount.toLocaleString("it-IT",{
                                                                        style:"currency",
                                                                        currency:"VND",
                                                                    })}</span>
                                                    </div>
                                                </div>                                            
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8} className='col-info'>
                                    <div className='coll__info'>
                                        <div className='info-ele'>
                                            <div className="tt-info">
                                                <h3 className="cart-tt">THÔNG TIN NHẬN HÀNG</h3>
                                            </div>
                                            <div className='main-info'>
                                                <Form className='section-items' onSubmit={() => handleSubmit()}>
                                                    <div className='field-input'>
                                                        <input type="text" required className='form-control field__input' placeholder='Họ tên' value={name} onChange={(e) => setName(e.target.value)}/>
                                                    </div>
                                                    <div className='field-input'>
                                                        <input type="number" required className='form-control field__input' placeholder='Số điện thoại' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                                    </div>
                                                    <div className='field-input'>
                                                        <textarea rows="3" type="text" required className='field__input' placeholder='Địa chỉ' onChange={(e) => setAddress(e.target.value)}>{address}</textarea>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                        <div className='info-payment'>
                                            <div className='section-pm'>
                                                <div className="tt-info">
                                                    <h3 className="cart-tt">THANH TOÁN</h3>
                                                </div>
                                                <div className='section_contents'>
                                                    <div className='contents-box'>
                                                        <div className='content-box-row'>
                                                            <div className='radio-wrapper'>
                                                                <div className='radio_input'>
                                                                    <input id='radio-input' type="radio" className='input_radio' required checked/>
                                                                    <label className='lb-radio'>Thanh toán khi giao hàng (COD)</label>
                                                                </div>
                                                            </div>
                                                            <div id='contents-desc' className='content-box-desc' style={{display: "block"}}>
                                                                <p>Bạn chỉ phải thanh toán khi nhận được hàng</p>
                                                            </div>                                                   
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                        
                                        <div className='section-checked'>
                                            <div>
                                                {name === "" || phone === "" || address === "" ? 
                                                (
                                                    <button type='submit' className="add-cart btn-add" onClick={notify}>ĐẶT HÀNG</button>
                                                ):(
                                                    <>
                                                            <button type='submit' className="add-cart btn-add" onClick={()=> handleSubmit()}>ĐẶT HÀNG</button>                                                      
                                                    </>
                                                    
                                                )}
                                                
                                            </div>                                            
                                        </div> 

                                    </div>                           
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </>
        )} 
    </>
  )
}

export default Cart