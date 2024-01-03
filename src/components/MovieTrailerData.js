    import React from 'react'

    function MovieTrailerData({title,description}) {
    return (
        <div className=' w-screen aspect-video bg-gradient-to-r from-black px-[3%] pt-[30%] absolute  text-white'>
        <div className='text-4xl font-bold mb-2'>
            {title}
        </div>
        <div className='w-2/5 text-xl '>
        {description}
        </div>
        </div>
    )
    }

    export default MovieTrailerData
