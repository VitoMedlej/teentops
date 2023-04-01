import Link from 'next/link';
import {Typography } from '@mui/material'
// import Logo from '../../assets/icons/logo';

const Footer = () => (
  <footer className="site-footer bg" style={{color:'white',background:'#232323'}}>
    <div className="container bg" style={{color:'white',background:'#232323'}}>
      <div className="site-footer__top bg">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
              <img className='img' src='https://ucarecdn.com/2d5f1822-0735-4ec9-9024-f68bad6e39db/269840025_452152916535842_4269873123222669231_n.jpg' alt="Powerhouse-lb Logo" />
            </Link>
          </div>
          <Typography component='h1' sx={{ fontSize: '.9em' }}  className='footer-p white'>
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

        <div className="site-footer__links bg">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          <ul className='white ul-white'>
            <li className='link-title'>Shopping online</li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Shipping and Delivery</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Payment options</a></li> 
            <li><a href="#">Contact Us</a></li>
          </ul>
     
          <ul  className='ul-white' style={{color:'white'}}>
            <li className='link-title'>Contact</li>
            <li><a href="#"> Lebanon/Beirut Online</a></li>
            
            <li><a href="https://www.facebook.com/online.european.outlet/" target="_blank" rel="noreferrer" >Facebook</a></li>

            <li><a href="https://www.instagram.com/power_house_european/" target="_blank" rel="noreferrer" >@power_house_european</a></li>
            <li><a href={'https://wa.me/76600541'} rel="noreferrer" target='_blank' >{` +961 76600541`}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="site-footer__bottom bg" style={{color:'white'}}>
      <div className="container bg" style={{color:'white'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'blue' }} href={`${process.env.NEXT_PUBLIC_US || 'https://www.onbeirut.com'}`}>OnBeirut Web Agency </a></p>
      </div>
    </div>
  </footer>
);


export default Footer
