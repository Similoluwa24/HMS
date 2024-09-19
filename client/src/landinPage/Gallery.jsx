import React from 'react'
import Header from './Header'
function Gallery() {
  return (
    <div>
        
        <div className="max-w-[75rem] m-auto gallery">
            <Header/>           
            <h1 className='mt-6 text-4xl font-[lora] text-[#007CFF] text-center pb-3'>Photo Gallery</h1>
            <p className='mt-2 lg:text-[1rem] text-[12px] font-[poppins] text-[#007CFF] text-center pb-6'>Our hospital gallery is a showcase of the various departments and facilities within our medical center. 
                Browse through our photo gallery to get a glimpse of our state-of-the-art equipment, modern facilities,
                 and compassionate care. From our emergency department to our patient rooms,
                 we're proud to provide a comfortable and healing environment for our patients and their loved ones.</p>
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-[73rem] m-auto">
                <img src="/image/gallery1.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery2.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery3.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery4.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery5.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery6.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery7.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery8.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery9.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery10.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery11.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery12.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery13.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery14.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery15.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery16.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery17.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery18.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery19.jpg" className='object-fit object-cover h-full' alt="" />
                <img src="/image/gallery20.jpg" className='object-fit object-cover h-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery