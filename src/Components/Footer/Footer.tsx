import Link from 'next/link';
import {Typography } from '@mui/material'
// import Logo from '../../assets/icons/logo';

const Footer = () => (
  <footer className="site-footer bg" style={{color:'white',background:'#172029'}}>
    <div className="container bg" style={{color:'white',background:'#172029'}}>
      <div className="site-footer__top bg">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img invert' src='https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.pngF' alt="Teentops-lb Logo" />
            </Link>
          </div>
          <Typography component='h1' sx={{ fontSize: '.9em' }}  className='footer-p white'>
            We are Teen Tops. Best electronics supplier based in Lebanon, we sell various products of any house product you can think of, we deliver to all lebanon.
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
            
            <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li>

            <li><a href="https://www.instagram.com/teen__tops___electronic/" target="_blank" rel="noreferrer" >@teen__tops___electronic</a></li>
            <li><a href={'https://wa.me/76600541'} rel="noreferrer" target='_blank' >{` +961 76600541`}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="site-footer__bottom bg" style={{color:'white',borderTop:"1px solid white"}}>
      <div className="container bg" style={{color:'white'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'white' }} href={`${process.env.NEXT_PUBLIC_US || 'https://www.onbeirut.com'}`}>OnBeirut Web Agency </a></p>
      </div>
    </div>
  </footer>
);


export default Footer
