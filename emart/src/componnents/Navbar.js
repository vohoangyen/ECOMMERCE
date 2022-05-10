import { CloseOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Layout, Menu, Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import '../App';
import { addKw, addSearch, getListProduct, getProductByKw } from '../redux/slice';

const { Header, Content, Sider } = Layout;

function Navbar() {
    const dispatch = useDispatch()
    const [kw, setKw] = useState()

    const data = useSelector(getListProduct);
    const {cartTotalQuantity} = useSelector((state) => state.cart)


    const [filterData, setFilterData] = useState([]);

    const [wordEnter, setWordEnter] = useState("");
    
    const handleFilter = (e) => {
        const searchW = e.target.value;
        setKw(searchW)

        setWordEnter(searchW);

        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchW.toLowerCase());
        });

        if(searchW === ""){
            setFilterData([]);
        }else{
            setFilterData(newFilter);
        }       
    }

    const clearInput = () => {
        setFilterData([]);
        setWordEnter("");
    }

    useEffect(() => {
        dispatch(addSearch(kw))
    },)

  return (
    <>
        <Header className='n-container'>
            <div className='nav-container'>
                <div className='nav-left'>
                    <NavLink to="/">
                        <img src='../../images/SMLogo5.png' alt='logo'/>
                    </NavLink>
                </div>
                <div className='nav-center'>
                    <div className='nav-menu'>
                        <Menu
                            mode='horizontal' 
                            // onClick={handleClick}
                            // selectedKeys={[current]}                         
                        >
                            <Menu.Item key="sub1">
                                <NavLink to="/">TRANG CHỦ</NavLink>
                            </Menu.Item>

                            <Menu.SubMenu key="SubMenu2" title="SẢN PHẨM">
                                <Menu.Item key="sub2">
                                    <NavLink to="/allproducts">TẤT CẢ SẢN PHẨM</NavLink>
                                </Menu.Item>

                                <Menu.SubMenu key="SubMenu3" title="ÁO" onTitleClick="">
                                    <Menu.ItemGroup>
                                        <Menu.Item key="sub3">
                                            <NavLink to="/tshirts">T-SHIRTS</NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="sub4">
                                            <NavLink to="/shirts">SHIRTS</NavLink>
                                        </Menu.Item >
                                        <Menu.Item key="sub5">
                                            <NavLink to="/hoodies">HOODIES</NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="sub6">
                                            <NavLink to="/jackets">JACKETS</NavLink>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </Menu.SubMenu>

                                <Menu.SubMenu key="SubMenu4" title="QUẦN" onTitleClick="">
                                    <Menu.ItemGroup>
                                        <Menu.Item key="sub7">
                                            <NavLink to="/pants">PANTS</NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="sub12">
                                            <NavLink to="/shorts">SHORTS</NavLink>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </Menu.SubMenu>

                                <Menu.SubMenu key="SubMenu5" title="PHỤ KIỆN" onTitleClick="">
                                    <Menu.ItemGroup>
                                        <Menu.Item key="sub8">
                                            <NavLink to="/hats">HATS</NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="sub9">
                                            <NavLink to="/wallets">WALLETS</NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="sub10">
                                            <NavLink to="/bags">BAGS</NavLink>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </Menu.SubMenu>
                            </Menu.SubMenu>
                        
                            {/* <Menu.Item key="sub11">
                                <NavLink to="/about-us">VỀ CHÚNG TÔI</NavLink>
                            </Menu.Item> */}
                        </Menu>
                    </div>
                    <div className='ssearch'>
                        <div className='nav-search'>
                            <div className='sssearch'>
                                <Form className="form-search">
                                    <input type="text" className="form-control find" placeholder="Nhập tên sản phẩm"
                                        value={wordEnter} onChange={handleFilter}/>
                                        <Link to="/search" onClick={clearInput}>
                                        <button type="submit" className='search-pro'>                                          
                                            {filterData.length === 0 ? <SearchOutlined /> : <CloseOutlined id='clean-btn' onClick={clearInput}/>}
                                        </button>
                                        </Link>
                                    
                                </Form>
                            </div>
                        </div>
                        { filterData.length != 0 && ( 
                            <div className='search-result'>
                                <div className='show-result'>
                                    {filterData.slice(0,15).map((value) => (
                                        <NavLink to={`/${value.id}`} className='product_title-ss' onClick={clearInput} title={value.name}>
                                            <img src={value.img[0]} />
                                            <p>{value.name}</p> 
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
       
                </div>
                <div className='nav-right'>
                    <div className='nav-cart'>
                        <NavLink to="/cart">
                            <Badge size='small' count={cartTotalQuantity}>
                                <ShoppingCartOutlined />
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Header>
    </>
  )
}

export default Navbar