import React from 'react'

const NavBar = () => {
    return (
        <>
            <div className='flex items-center justify-between border-b-2 fixed w-[90vw] h-[10vh] mx-20 z-10 bg-lightBlack'>
                <div className="left flex items-center">
                    <img className='w-[90px] h-[80px] cursor-pointer' src="https://img.freepik.com/premium-vector/online-shopping-logo-design-template_130382-9.jpg" alt="" />
                    <h3 className='font-bold text-xl cursor-pointer'>Online Shop</h3>
                </div>
                <div className="right flex justify-center items-center gap-[22px] text-[18px] font-bold">
                    <p className='cursor-pointer'>Home</p>
                    <p className='cursor-pointer'>About Us</p>
                    <p className='cursor-pointer'>Contact Us</p>
                </div>
            </div>
        </>
    )
}

export default NavBar
