import { CopyrightOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footers() {
  return (
    <Footer className='ft-main'>
        <div className='grid-full'>
            <div className='grid-items grid-width66'>
                <div className='footer-left'>
                    <div className='ft-sns'>
                        <div className="ft-button">
                            <div className="ft-icon">
                                <a href="https://www.facebook.com/smtown.vn" aria-hidden="true" target="_blank">
                                    {/* <i className="fa fa-facebook"></i> */}
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </div>
                            <a href="https://www.facebook.com/smtown.vn" target="_blank">
                                <span>Facebook</span>
                            </a>                         
                        </div>

                        <div className="ft-button">
                            <div className="ft-icon">
                                <a href="https://www.instagram.com/smtown/" aria-hidden="true" target="_blank">
                                    {/* <i className="fa fa-instagram"></i> */}
                                    <i className="fa-brands fa-instagram"></i>
                                </a>                          
                            </div>
                            <a href="https://www.instagram.com/smtown/" target="_blank">
                                <span>Instagram</span>
                            </a>                       
                        </div>

                        <div className="ft-button">
                            <div className="ft-icon">
                                <a href="https://www.youtube.com/c/SMTOWN" aria-hidden="true" target="_blank">
                                    {/* <i className="fa fa-youtube-play"></i>                                */}
                                    <i className="fa-brands fa-youtube"></i>
                                </a>                           
                            </div>
                            <a href="https://www.youtube.com/c/SMTOWN" target="_blank">
                                <span>Youtube</span>
                            </a>
                        </div>     
                    </div>
                    
                    <div className='ft-copyright'>
                        <div className='ft-copy'>
                            <h3>Copyright <CopyrightOutlined /> SMCU EXPRESS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default Footers