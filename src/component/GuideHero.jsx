import React, {useState} from 'react'

const GuideHero = () => {

    const course = [
        {id:1, content:'Beach', img:'../portait_img/beach.jpeg', descr:'Lorem ipsum dolor sit '},
        {id:2, content:'Moutain',img: '../portait_img/moutain.jpeg', descr:'Lorem ipsum dolor sit '},
        {id:3, content:'Europe', img:'../portait_img/metropolitan.jpeg', descr:'Lorem ipsum dolor sit '},
        {id:4, content:'Asia', img:'../portait_img/hill.jpeg', descr:'Lorem ipsum dolor sit '},
    ]

    const guides = [
        {id:1, title:'Photo Capture', img:'../travel guide/moment.jpeg', descr:'Memorize the best'},
        {id:2, title:'Road trip', img:'../travel guide/road_trip.jpeg', descr:'Lorem ipsum dolor sit'},
        {id:3, title:'South East Asia', img:'../travel guide/SEA.jpeg', descr:'Explore the tropical land'},
        {id:4, title:'Journal', img:'../travel guide/journal.jpeg', descr:'Journal your trip'},
    ]
    const regions = [
        {id:1, title:'Europe', img:'../region/europe.jpeg'},
        {id:2, title:'Asia', img:'../region/japan.jpeg'},
        {id:3, title:'America', img:'../region/america.jpeg'},
        {id:6, title:'Arab', img:'../region/arab.jpeg'},
    ]

    return (
        <div className='font-poppins pt-40'>
            <div className='flex justify-between'>
            <h1 className='font-bold text-3xl mx-10'>Meet Our Guide</h1>
            <div className='flex mx-10'>
            <svg xmlns="http://www.w3.org/2000/svg"  className="h-10 w-10  ml-10" fill="none" viewBox="0 0 24 24" stroke="gray">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg"  className="h-10 w-10  mr-5" fill="none" viewBox="0 0 24 24" stroke="gray">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 mx-5 mt-10 mb-10">
                {course.map((key, index) => {
                    return (
                       
                        <figure  class="relative max-w-xs cursor-pointer">
                       
             <>
             <img class="rounded-lg shadow-xl hover:shadow-2xl" src={key.img} /><div class="absolute text-lg bottom-5 text-white px-4">
                                        <div>
                                            <h1 className='font-boldtext-2xl shadow-inner'>{key.content}</h1>
                                        </div>
                                        <div>
                                            <h1 className=''>{key.descr}</h1>
                                        </div>
                                    </div></>
 
    
  </figure>
                    )
                })}
                          
            </div>
            <div>
            <h1 className='font-bold text-3xl m-10'>How to travel</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 m-10">
  <div className='relative'>
  <figure  class="relative w-full  cursor-pointer mt-5">
                       <img className="rounded-lg shadow-xl hover:shadow-2xl" src='../travel guide/group.jpeg ' />
                       <div className="absolute top-1/2 bottom-1/2 text-center translate-x-1/2 text-white px-4">
                                                 <div  >
                                                      <h1 className='font-script  text-center  text-4xl shadow-inner'>Group travel</h1>
                                                  </div>
                                                  <div>
                                                      <h1 className=' text-center'>How to spend time with your friends</h1>
                                                  </div>
                                              </div>
                                              </figure>
  </div>
  <div className='grid grid-cols-2 gap-3'>
                {guides.map((guide) =>{
                    return(
                        <div>
  <figure  class="relative w-full  cursor-pointer mt-5">
                       <img className="rounded-lg shadow-xl hover:shadow-2xl" src={guide.img} />
                       <div className="absolute text-lg  top-1/2 bottom-1/2 text-center translate-x-1/4 -translate-y-5 text-white px-4">
                                                  <div>
                                                      <h1 className='font-script text-4xl shadow-2xl'>{guide.title}</h1>
                                                  </div>
                                                  <div>
                                                      <h1 className='shadow-2xl'>{guide.descr}</h1>
                                                  </div>
                                              </div>
                                              </figure>
  </div>
                    )
                })}
  </div>
</div>
            </div>
            <div>
            <h1 className='font-bold text-3xl m-10'>Region</h1>
            <div className="grid grid-cols-4 gap-3 m-10">
            {regions.map((region) =>{
                return (
                   
                <div key={region.id} className='relative w-full cursor-pointer'>
                        <img src={region.img} className='relative w-96 rounded-xl' alt="" />
                        <h1 className='absolute top-10 left-10 text-4xl font-bold drop-shadow-xl text-white font-poppins'>{region.title}</h1>
                        <button className="bg-white text-red-500 p-3 absolute bottom-10 left-10 rounded-2xl">Browse</button>
                </div>
           
                )
            })}
             </div>
            </div>
        </div>
    )
}

export default GuideHero
           
              
            
            
