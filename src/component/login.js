import React from 'react';
import loginImg from '../image/project1.png'
import loginPng2 from '../image/Frame 45 2.png'
import loginPng3 from '../image/Rectangle 3.png'
import '../index.css';
import { TbWorldWww } from 'react-icons/tb';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import {BsFillRecordFill} from 'react-icons/bs';
import Login1 from './login1';



const Login = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center	 container'>
        <div className='hidden sm:block object-cover rounded-lg img-s' style={{ backgroundImage: `url(${loginImg})` }}>
            <img className='exo justify-start' src={loginPng2} alt='exo' />
            <div className='text-d'>
                <h1 className='text-white text-s'> <strong>100% Uptime😎</strong> </h1>
                <h2 className='text-sp'>Zero Infrastructure<br /> Management </h2>
                <img className='max-w-[61px] rect' src={loginPng3} alt='png' /><span className='flex icon-2'><BsFillRecordFill/><BsFillRecordFill/></span>
            </div>
            <div className='icon-1 text-white  flex'>
                <p className='flex items-start aest'><TbWorldWww />aesthisia.com </p>
                <p className='flex item-a'  ><AiFillLinkedin />  <AiFillFacebook /> <AiFillInstagram /></p>

            </div>
            </div>
            <Login1 />
        </div>

    )
}

export default Login;