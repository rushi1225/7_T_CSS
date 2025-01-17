import React from 'react'

const Cards = () => {
    return (
        <>
            <div className='text-center text-4xl py-5 font-bold mx-width-[1320px] mx-auto'>
                <h1> Feature Products </h1>
            </div>

            <div className='max-w-[1320px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-5'>

                <div className='text-center shadow-lg rounded'>
                    <div className='overflow-hidden'>
                        <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt=""
                            className='hover:scale-125 duration-1000' />
                    </div>
                    <h1 className='pt-2 text-2xl'>shoes</h1>
                    <p className='py-2'>Rs-2500</p>
                </div>

                <div className='text-center shadow-lg rounded'>
                    <div className='overflow-hidden'>
                        <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt=""
                            className='hover:scale-125 duration-1000' />
                    </div>
                    <h1 className='pt-2 text-2xl'>shoes</h1>
                    <p className='py-2'>Rs-2500</p>
                </div>

                <div className='text-center shadow-lg rounded'>
                    <div className='overflow-hidden'>
                        <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt=""
                            className='hover:scale-125 duration-1000' />
                    </div>
                    <h1 className='pt-2 text-2xl'>shoes</h1>
                    <p className='py-2'>Rs-2500</p>
                </div>

                <div className='text-center shadow-lg rounded'>
                    <div className='overflow-hidden'>
                        <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt=""
                            className='hover:scale-125 duration-1000' />
                    </div>
                    <h1 className='pt-2 text-2xl'>shoes</h1>
                    <p className='py-2'>Rs-2500</p>
                </div>
            </div>








            {/*  */}
            <div className='text-center text-4xl py-5 font-bold max-w-[1320px] mx-auto'>
                <h1> Our Services </h1>
            </div>
            <div className='max-w-[1320px] mx-auto gap-5 p-5 grid md:grid-cols-2 lg:grid-cols-4'>
                <div className='my-card'>
                    <i class="fa-solid fa-computer text-4xl p-2 text-black-500 group-hover:text-white duration-800 group-hover:animate-bounce"></i>
                    <h3 className='p-2 text-xl'>Web Design</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eveniet vero corporis, perferendis minima id iste voluptates sed quas debitis?</p>
                </div>
                <div className='my-card'>
                    <i class="fa-solid fa-computer text-4xl p-2 text-black-500 group-hover:text-white duration-800 group-hover:animate-bounce"></i>
                    <h3 className='p-2 text-xl'>Web Design</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eveniet vero corporis, perferendis minima id iste voluptates sed quas debitis?</p>
                </div>
                <div className='my-card'>
                    <i class="fa-solid fa-computer text-4xl p-2 text-black-500 group-hover:text-white duration-800 group-hover:animate-bounce"></i>
                    <h3 className='p-2 text-xl'>Web Design</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eveniet vero corporis, perferendis minima id iste voluptates sed quas debitis?</p>
                </div>
                <div className='my-card'>
                    <i class="fa-solid fa-computer text-4xl p-2 text-black-500 hover:text-white duration-800 group-hover:animate-bounce"></i>
                    <h3 className='p-2 text-xl'>Web Design</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eveniet vero corporis, perferendis minima id iste voluptates sed quas debitis?</p>
                </div>
            </div>























        </>
    )
}

export default Cards
