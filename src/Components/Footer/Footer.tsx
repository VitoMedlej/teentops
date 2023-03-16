import Link from 'next/link';
import {Typography } from '@mui/material'
// import Logo from '../../assets/icons/logo';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="site-footer__top">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
              <img className='img' src='https://ucarecdn.com/9f4b2f35-24a5-4728-8e8b-d4498da54fd8/001.png' alt="Powerhouse-lb Logo" />
            </Link>
          </div>
          <Typography component='h1' sx={{ fontSize: '.9em' }} className='footer-p'>
            We are Powerhouse european electronics supplier based in Lebanon, we sell various products of any house product you can think of, we deliver to all lebanon
          </Typography>
          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
          <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </div>

        <div className="site-footer__links">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          <ul>
            <li className='link-title'>Shopping online</li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Shipping and Delivery</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Payment options</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
     
          <ul>
            <li className='link-title'>Contact</li>
            <li><a href="#"> Lebanon/Beirut Online</a></li>
            <li><a href="https://www.instagram.com/power_house_european/" target="_blank" rel="noreferrer" >@power_house_european</a></li>
            <li><a href={'https://wa.me/96171330473'} rel="noreferrer" target='_blank' >{` +961 71330473`}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="site-footer__bottom">
      <div className="container">
        <p>Website Developed By{' '}
          <a style={{ color: 'blue' }} href={`${process.env.NEXT_PUBLIC_US || 'https://www.onbeirut.com'}`}>OnBeirut Web Agency </a></p>
      </div>
    </div>
  </footer>
);


export default Footer
