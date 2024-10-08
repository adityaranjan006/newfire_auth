import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const OtpLogin = () => {
    const [phoneNum, setPhoneNum] = useState("");
    const [otp, setOtp] = useState("");
    const [success, setSuccess] = useState("");
    const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const navigate=useNavigate();

    useEffect(() => {
        const recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {
                size: "invisible",
            }
        )
        setRecaptchaVerifier(recaptchaVerifier);
        return () => {
            recaptchaVerifier.clear();
        }
    }, [auth])

    const reqOtp = async (e) => {
        e.preventDefault();
        try {
            const confirmationResult= await signInWithPhoneNumber(
                auth,
                phoneNum,
                recaptchaVerifier
            )
            setConfirmationResult(confirmationResult);
            setSuccess("OTP sent Successfully");
            console.log(success)
        } catch (error) {
            console.log("Error Something went Wrong",error);
        }
    }

    const verifyOTP= async(e)=>{
        e.preventDefault();
        try {
            const data= await confirmationResult.confirm(otp);
            console.log(data);
            setSuccess("OTP verfied Successfully");
            navigate('/profile')
        } catch (error) {
            console.log("Please check the OTP and try again",error)
        }
    }
    return (
        <div className="h-screen bg-slate-500">
            {!confirmationResult && (
                <div className='flex justify-center justify-items-center'>
                <div className='flex flex-col gap-4 mt-10 w-1/2'>
                    <form onSubmit={reqOtp}>
                        <input type="tel"
                            className='text-black p-6 w-full'
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
                            placeholder='Enter Phone Number with Country code ex:- +91xxxxxxxxxx India'
                        />
                    </form>
                    <div id='recaptcha-container'/>
                    <button className='flex bg-red-400 p-3 justify-center' onClick={reqOtp}>
                        Request OTP
                    </button>
                </div>
            </div>
            )}
            
            {confirmationResult && (
                <div className='flex justify-center justify-items-center'>
                <div className='flex flex-col gap-4 mt-10 w-1/2'>
                    <form onSubmit={verifyOTP}>
                        <input type="text"
                        maxLength={6}
                            className='text-black p-6 w-full'
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder={`Enter OTP sent to:- +91xxxxx${phoneNum.slice(8)} India`}
                        />
                    </form>
                    <div id='recaptcha-container'/>
                    <button className='flex bg-red-400 p-3 justify-center' onClick={verifyOTP}>
                        Enter OTP
                    </button>
                </div>
            </div>
            )}
        </div>
    )
}

export default OtpLogin
