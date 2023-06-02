import React, { useState } from 'react';
import loginPng from '../image/petals 1.png';
import '../index.css';

 

const Login1 = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[allEntry,setallEntry]=useState("");
   
    const submitForm=(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password};
        setallEntry([...allEntry,newEntry]);
        console.log(allEntry);
    }
    return (
        <>
            <div className='flex flex-col justify-center'>
                <form className='max-w-[360px] w-full mx-auto bg-white p-4' action='https://formspree.io/f/mpzenedg' onSubmit={submitForm}>

                    <img className='max-w-[61px]' src={loginPng} alt='png' />
                    <h2 className='text-4xl font-bold text-center py-6'>Welcome <span>Back!</span></h2>
                    <h6 className='text-center text-14px'> Glad to see you, Again!</h6>
                    <div className='flex flex-col py-2'>

                        <input className='border p-2' type="email" name='email' id='email' autoComplete='off' placeholder='Enter your Email'
                          value={email} onChange={(e)=>setEmail(e.target.value)} />
                       
                     

                        <input className='border p-2 mt-4' type="password" placeholder='Enter your password'name='password' id='password' autoComplete='off'  
                          value={password} onChange={(e)=>setPassword(e.target.value)} />

                        <h6 className='text-right text-14px text-xs	'> Forgot Password?</h6>
                        {/* to check the value of email and password, go to inspect and console */}
                        <button  type='submit'   className='border w-full my-5 py-2 text-white sub-f'  >Log In</button> 
                    </div>
                    

                    <p className='text-center mt-16'>Don’t have an account yet?  <span> Sign Up</span> </p>

                </form>
            </div>
        </>
    )
}

export default Login1;