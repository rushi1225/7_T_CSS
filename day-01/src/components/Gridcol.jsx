import React from 'react'

const Gridcol = () => {
  return (
    <div>
          {/* grid col*/}
          <div className='container-fluid mx-auto grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
              {/* col-span-2 */}
              <div className='bg-green-500 text-center py-5 col-span-2'>1</div>
              <div className='bg-green-500 text-center py-5'>2</div>
              <div className='bg-green-500 text-center py-5'>3</div>
              <div className='bg-green-500 text-center py-5'>4</div>
              {/* col-start & col-end */}
              <div className='col-start-1 col-end-4 bg-green-500 text-center py-5'>col-start-1 & col-end-4</div>
              <div className='bg-green-500 text-center py-5'>6</div>
              <div className='bg-green-500 text-center py-5'>7</div>
              <div className='bg-green-500 text-center py-5'>8</div>
          </div>

    </div>
  )
}

export default Gridcol
