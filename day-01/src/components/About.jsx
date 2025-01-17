import React from 'react'

const About = () => {
    return (
        <>
            <h1 className='p-5 text-4xl text-center'>About Section</h1>
            <div className='max-w-[1320px] mx-auto flex p-5 flex-col md:flex-row'>
                <div className='basis-[45%]'>
                    <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt="" />
                </div>
                <div className='basis-[55%] p-5'>
                    <h3 className='text-3xl p-5'>This is a about section page this shows the information of all about this product</h3>
                    <p className='px-5 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quos ullam soluta fugit omnis consequuntur quae neque necessitatibus explicabo natus possimus sapiente cupiditate. Fuga eos perferendis natus minus veritatis nulla.</p>
                    <p className='px-5 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quos ullam soluta fugit omnis consequuntur quae neque necessitatibus explicabo natus possimus sapiente cupiditate. Fuga eos perferendis natus minus veritatis nulla.</p>
                    <p className='px-5 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quos ullam soluta fugit omnis consequuntur quae neque necessitatibus explicabo natus possimus sapiente cupiditate. Fuga eos perferendis natus minus veritatis nulla.</p>
                    <div className='text-center mt-10 md:mt-12 '>
                        <a href="">
                            <button className='p-3 text-white bg-rushi m-5  space-x-4 rounded-md w-[30%] '>About</button></a>
                        <a href="/">
                            <button className='p-3 text-white bg-rushi m-5  space-x-4 rounded-md w-[30%] '>Home</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
