import React from 'react'

const GridRow = () => {
    return (
        <div>
            {/* grid row */}
            <div className='mx-w-[1320px] mx-auto grid grid-rows-3 grid-flow-col gap-5'>
                <div className='bg-red-500 text-center py-5 '>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, asperiores.</div>
                {/* row-span-2 means first two row merge */}
                <div className='bg-red-500 text-center py-5  row-span-2'>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, asperiores.</div>
                <div className='bg-red-500 text-center py-5'>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, asperiores.</div>
                <div className='bg-red-500 text-center py-5'>4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, asperiores.</div>
                <div className='bg-red-500 text-center py-5'>5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, asperiores.</div>
                {/* 3 rd row la 1 la start houn 4 la end mhnje 3 ghenar */}
                <div className='bg-red-500 text-center py-5 row-start-1 row-end-4'>6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, asperiores.</div>
                <div className='bg-red-500 text-center py-5'>7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, asperiores.</div>
                <div className='bg-red-500 text-center py-5'>8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, asperiores.</div>

            </div>
        </div>
    )
}

export default GridRow
