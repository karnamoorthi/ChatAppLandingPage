import React from 'react'
import logo from './smile.png'
import image from './image.png'
import vdimage from './woman.png'
import group from './group.png'
import camera from './camera.png'
import watch from './watch.png'
import wifi from './wifi.png'
import bg from './bg.png'
import photo1 from './Photo1.png'
import photo2 from './Photo2.png'

const Home = () => {
    return (
       <>
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex items-center mb-4 md:mb-0">
                <h1 className='text-3xl font-bold text-orange-900'>CHATapp</h1>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a class="text-xl font-medium mr-5 hover:text-gray-900 ">Home</a>
                <a class="text-xl font-medium mr-5 hover:text-gray-900">Story</a>
                <a class="text-xl font-medium mr-5 hover:text-gray-900">Gallery</a>
                <a class="text-xl font-medium mr-5 hover:text-gray-900">Contact Us</a>
            </nav>
            <div className='flex mt-4 md:mt-0'>
                <h1 className='text-xl mt-1 font-medium pr-5'>Login</h1>
                <button className='text-xl h-10 px-6 font-semibold rounded-md bg-orange-500 text-white' type="submit">Get Started</button>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-1 mb-2 justify-evenly'>
            <div className='col-6 p-10 ml-10'>
                <div>
                    <h1 className='text-5xl font-bold pt-10' style={{color: '#D9D9D9'}}>
                        Start chatting with <br /> customers, anytime, <br />
                        anywhere with CHATapp.                    
                    </h1><br />
                    <p className='text-l' style={{color: '#7d7f87'}}>
                        Great software that allows you to chat from any <br />
                        place at any time without any interruption.
                    </p><br />
                    <button className='text-xl h-10 px-6 font-semibold rounded-md bg-orange-500 text-white'>
                        Start Chatting Now 
                    </button>
                </div>
                <div className='flex mt-32'>
                    <div className='flex -space-x-5 rtl:space-x-reverse'>
                        <img src={photo2} alt="logo" class="w-20 h-20 rounded-full border-2 border-black dark:border-gray-800 z-20" />
                        <img src={photo1} alt="logo" class="w-20 h-20 rounded-full border-2 border-black dark:border-gray-800 z-10" />
                        <img src={photo2} alt="logo" class="w-20 h-20 rounded-full border-2 border-black dark:border-gray-800 z-0" />
                    </div>
                    <div class="mb-4 ml-3 flex flex-col items-left">
                        <h2 class="text-2xl font-bold">2,291</h2>
                        <div class="text-gray-700 mb-2">happy customers</div>
                    </div>
                    <div class="bg-gray-200 h-14 border-l-4 ml-2 mr-2 border-black"></div>
                    <div class="mb-4 flex flex-col items-left">
                        <div class="text-2xl font-bold ml-2">4.9/5</div>
                        <div class="star-rating">
                            <div>★★★★★</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6 justify-center'>
                <img src={logo} alt="" />
            </div>
        </div>
        <div className='text-center m-20'>
            <h1 className='text-3xl font-bold mt-8 mb-20'>Features for a better experience</h1>
            <div className='grid grid-cols-3 ml-10'>
                <div className='flex'>
                    <img src={camera} className='w-20 h-20' alt="" />
                    <div className='text-left ml-8'>
                        <h1 className='text-2xl font-bold mb-2'>Video messaging</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur, autem.
                        </p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={watch} className='w-20 h-20' alt="" />
                    <div className='text-left ml-8'>
                        <h1 className='text-2xl font-bold mb-2'>Save your time</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur, autem.
                        </p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={wifi} className='w-20 h-20' alt="" />
                    <div className='text-left ml-8'>
                        <h1 className='text-2xl font-bold mb-2'>Keep safe & private</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur, autem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex m-40'>
            <div>
                <img src={vdimage} className='rounded-lg' alt="" />
            </div>
            <div className='ml-20 mt-10'>
                <h1 className='text-5xl font-bold'>Meet your costomers, <br />
                with live video chat</h1><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='flex m-40'>
            <div className='mt-20'>
                <h1 className='text-5xl font-bold pt-10' style={{color: '#D9D9D9'}}>
                    Start selling directly <br /> inside conversations               
                </h1><br />
                <p className='text-l' style={{color: '#7d7f87'}}>
                    Great software that allows you to chat from any <br />
                    place at any time without any interruption.
                </p><br />
                <button className='text-xl h-10 px-6 font-semibold rounded-md bg-orange-500 text-white'>
                    Start Chatting Now 
                </button>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
        <div className='flex m-40'>
            <div>
                <img src={group} alt="" />
            </div>
            <div className='ml-40 mt-10'>
                <h1 className='text-5xl font-bold'>Get direct orders, <br />
                from your customers</h1><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex m-10'>
                    <h1 className='text-4xl font-bold'>43K+</h1>
                    <p className='text-sm ml-2'>website's <br /> powering</p>
                    <h1 className='text-3xl font-bold ml-2'>7M+</h1>
                    <p className='text-sm ml-2'>Chats in <br /> Last 2022</p>
                </div>
            </div>
        </div>
        <div className='relative'>
            <div 
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1
                }}
            ></div>
            <div className='relative z-10'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold p-20 text-white'>
                        Our blessed clients <br />
                        said about us
                    </h1>
                </div>
                <div className='flex justify-evenly'>
                    <div className='text-center relative'>
                        <div className='bg-white rounded-md p-10 relative z-30'>
                            <h1 className='text-xl font-bold text-orange-500 mb-4'>"Incredible Experience"</h1>
                            <p>Justify items along the container’s main axis such that there is an equal <br />
                            amount of space around each item, but also accounting for the doubling of</p>
                            <div className="w-0 h-0 absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] z-20
                                border-l-[20px] border-l-transparent
                                border-t-[20px] border-t-white
                                border-r-[20px] border-r-transparent">
                            </div>
                        </div>
                        <div className='flex p-5 justify-center'>
                            <img src={photo1} className="w-20 h-20 rounded-full" alt="" />
                            <div className='ml-10 mt-2'>
                                <h1 className='font-bold text-lg text-white'>Wade Warren</h1>
                                <p className='text-sm text-white'>CEO, Google</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center relative'>
                        <div className='bg-white rounded-md p-10 relative z-30'>
                            <h1 className='text-xl font-bold text-orange-500 mb-4'>"Incredible Experience"</h1>
                            <p>Justify items along the container’s main axis such that there is an equal <br />
                            amount of space around each item, but also accounting for the doubling of</p>
                            <div className="w-0 h-0 absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] z-20
                                border-l-[20px] border-l-transparent
                                border-t-[20px] border-t-white
                                border-r-[20px] border-r-transparent">
                            </div>
                        </div>
                        <div className='flex p-5 justify-center'>
                            <img src={photo2} className="w-20 h-20 rounded-full" alt="" />
                            <div className='ml-10 mt-2'>
                                <h1 className='font-bold text-lg text-white'>Eleanor Roosevelt</h1>
                                <p className='text-sm text-white'>CEO, Tesla</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=''>
            <div className='m-20 text-center'>
                <h1 className='text-5xl font-bold pt-10'>
                    Ready to grow your business? <br />
                    Start with us, become faster <br />
                    every day
                </h1><br />
                <button className='text-xl h-10 m-5 px-6 font-semibold rounded-md bg-orange-500 text-white'>
                    Start Chatting Now 
                </button>
            </div>
            <div className='mt-20'>
                <div className='flex justify-between items-center px-20 py-10'>
                    <h1 className='text-xl font-bold text-orange-600'>Chatapp</h1>
                    <div className='flex space-x-8'>
                        <h1 className='cursor-pointer'>About</h1>
                        <h1 className='cursor-pointer'>Features</h1>
                        <h1 className='cursor-pointer'>Blog</h1>
                        <h1 className='cursor-pointer'>FAQ</h1>
                    </div>
                    <div className='flex space-x-4'>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="Twitter" className='w-6 h-6 cursor-pointer' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className='w-6 h-6 cursor-pointer' />
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className='w-6 h-6 cursor-pointer' />
                    </div>
                </div>
                <div className="bg-gray-200 h-0.5 mx-2"></div>
                <div className='flex justify-evenly py-5'>
                    <h1 className='text-center'>© 2022 Chatapp. All rights reserved.</h1>
                    <h1 className='text-center cursor-pointer'>Privacy Policy</h1>
                    <h1 className='text-center cursor-pointer'>Terms & Conditions</h1>
                </div>
            </div>
        </div>
       </>
   )
}

export default Home