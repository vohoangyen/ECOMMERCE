import React, { useEffect, useState } from 'react'
import Navbar from '../componnents/Navbar'

import { Col, Row } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import { AllProductItems } from '../data'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { getListProduct } from '../redux/slice'

function ItemsList({ currentItems }) {
  return(
    <>
      {/* <Navbar /> */}
      <div className='all-mg20'>
        <div className='container'>
          <div className='lb-new'>
            <div className='section-title-pro'>
                <h1>TẤT CẢ SẢN PHẨM</h1>
            </div>
          </div>
          <div className='items-new'>               
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {currentItems && currentItems.map((item) => (
                    <Col className="gutter-row pro-items" span={8}>
                        <div className='single-ele'>
                            <div className='img-pro'>
                                <Link to={`/${item.id}`}>
                                    <img src={item.img[0]} alt=' new product' /> 
                                </Link>                                                  
                            </div>
                        </div>
                        <div className='pro-content'>
                            <h3>
                                <Link to={`/${item.id}`}>{item.name}</Link>
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
        </div>
      </div>
    </>
  )
}

function AllPro({ itemsPerPage }) {
  const product = useSelector(getListProduct)

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;

    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    setCurrentItems(product.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(product.length / itemsPerPage));

  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;

    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );

    setItemOffset(newOffset);
  };

  return (
    <>
      <ItemsList currentItems={currentItems} />
      <ReactPaginate
        
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}



// function AllPro() {

//   const [allProduct, setAllProduct] =  useState([]);
//   const n = useSelector((state) => state.allProducts.AllProductItems)

//   useEffect(() => {
//     setAllProduct(n)
//   },[]);

//   return (
//     <>
//       <Navbar />
//       <div className='all-mg20'>
//         <div className='container'>
//           <div className='lb-new'>
//               <h1>TẤT CẢ SẢN PHẨM</h1>
//           </div>
//           <div className='items-new'>               
//             <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//                 {allProduct.map((item) => (
//                     <Col className="gutter-row pro-items" span={8}>
//                         <div className='single-ele'>
//                             <div className='img-pro'>
//                                 <NavLink to={`/${item.id}`}>
//                                     <img src={item.img} alt=' new product' /> 
//                                 </NavLink>                                                  
//                             </div>
//                         </div>
//                         <div className='pro-content'>
//                             <h3>
//                                 <NavLink to={`/${item.id}`}>{item.name}</NavLink>
//                             </h3>
//                             <div className='pro-price'>
//                                 <div className='price-box'>
//                                     <span>{item.price.toLocaleString("it-IT",{
//                                             style:"currency",
//                                             currency:"VND",
//                                         })}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                 ))} 
//             </Row>             
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default AllPro