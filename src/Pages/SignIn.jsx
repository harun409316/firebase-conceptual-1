import React, { useState } from 'react';
import MyContainer from '../Components/MyContainer';
import { Link } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { toast } from 'react-toastify';

const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

    const handleSignIn = (event) => {

      event.preventDefault();
      const email = event.target.email?.value;
      const password = event.target.password?.value;
      console.log('sign up clicked', {email, password});
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log(result.user);
          setUser(result.user);
          toast.success('Sign in successful');

        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
    
    const handleGoogleSignIn = () => {
      console.log('google sign in');
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        toast.success('Google sign in successful');
      })
      .catch((error) => {
        toast.error(error.message);
      });
    }

    const handleSignOut = () => {
      signOut(auth).then(() => {
      toast.success('Sign out successful');
      setUser(null);
      })
      .catch((error) => {
      toast.error(error.message);
      });
    }

    console.log(user);
    return (
          <div className='min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden '>
             {/* Animated floating circles */}
              <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>
      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">             
            <div className='max-w-lg text-center lg:text-left'>
             <h1  className="text-5xl font-extrabold drop-shadow-lg">Create Your Account</h1>
             <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
            </div>

            <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Sign In
            </h2>
          {
            user ? (
              <div className='text-center space-y-3 '>
                <img src={user?.photoURL || 'https://via.placeholder.com/88'} className=' h-20 w-20 rounded-full mx-auto ' alt="" />
                <h2 className='text-xl font-semibold '>{user?.displayName} </h2>
                <p className='text-white/80 '>{user?.email} </p>
                <button className='my-btn' onClick={handleSignOut}>Sign Out</button>

              </div>

            ):(
              <form onSubmit={handleSignIn} className='space-y-4'>
            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"/>

              </div>
              <div className='relative'>
                 <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={show? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                <span onClick={() => setShow(!show)} className='absolute right-3 top-[36px] cursor-pointer z-50 ' >
                                 { show? <FaEye/> : <IoEyeOff/> }
                                </span>

              </div>
             
              <button type="submit" className="my-btn">
                Login
              </button>
             {/* Google Signin */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                 
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

                <p className="text-center text-sm text-white/80 mt-3">
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-pink-300 hover:text-white underline">
                    Sign up
                  </Link>
                </p>

            </form>
            )}
          
            
            </div>

        </div>
      </MyContainer>
        </div>
    );
};

export default SignIn;