import React from 'react'
import Navbar from '../component/Navbar'

const WhereToStay = () => {
    const filter = [
        {id:1, title:'AC'},
        {id:2, title:'Refrigator'},
        {id:3, title:'Wifi'},
        {id:4, title:'Kitchen'},
        {id:5, title:'Jacuzzi'},
        {id:9, title:'Washer'},
        {id:10, title:'Dryer'},
        {id:11, title:'Iron'},
        {id:12, title:'More'},
    ]
    const list = [
        {id:1, star:4.97, reviews: 10, title:'Apartment', location:'Cau Giay', title:'Cau Giay Charming Studios', img:'https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png', price:79},
        {id:2, star:3.27, reviews: 5, title:'Mini apartment', location:'Thanh Nhan', title:'Mini apartment', img:'https://cdn.luxstay.com/rooms/17628/large/room_17628_81_1543651603.jpg', price:39},
        {id:3, star:3.11, reviews: 3, title:'sub urban apartment', location:'Thanh Tri', title:'sub urban apartment', img:'https://cdn.luxstay.com/users/134514/kGHwy-ad_2nUf_ix9jicKPGk.jpg', price:39},
        {id:4, star:4.22, reviews: 16, title:'Dong tac', location:'Dong Tac', title:'little apartment', img:'https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png', price:51},
        {id:5, star:4.61, reviews: 10, title:'Hang Bai', location:'Hoan Kiem', title:'Old school apartment', img:'https://cdn.luxstay.com/users/2665/c0BqOihgwYeOiCEnyxODXcfe.JPG', price:69},
        {id:6, star:4.53, reviews: 10, title:'house', location:'Cau Giay', title:'Cau Giay Charming Studios', img:'https://cdn.luxstay.com/users/47608/X2Swqa-wSRPhevvzwSevj1aF.jpg', price:69},
        {id:7, star:4.87, reviews: 10, title:'BBQ & Pool apartment', location:'Cau Gaiy', title:'Luxury apartment', img:'https://cdn.luxstay.com/users/351762/L571EGkJEWJBUqYaVNtZUTuF.JPG', price:379},
        {id:8, star:4.88, reviews: 10, title:'Vinhomes Ocean Park', location:'Long Bien', title:'Luxury home', img:'https://cdn.luxstay.com/users/354826/kV0JTJvfJaj8wTRMvSP9sIfD.jpg', price:332},
        {id:9, star:4.42, reviews: 10, title:'Modern Apartment', location:'Dong Da', title:'Modern style house', img:'https://cdn.luxstay.com/users/346145/xOm1VyBjBeu7XyKKk6VeckgS.jpg', price:78},
        {id:10, star:4.92, reviews: 10, title:'Millenial home', location:'Cau Giay', title:'Millenial style apartment', img:'https://cdn.luxstay.com/rooms/37700/large/IMG_2698.jpg', price:78},
        {id:11, star:4.97, reviews: 10, title:'Large Apartment', location:'Dong Da', title:'2 bedroom apartment', img:'https://cdn.luxstay.com/users/181012/cAR4-3BFtYrAMAyoiYz-fkeI.jpg', price:65},
    ]
    return (
        <><Navbar />
        <div className="font-poppins pt-[96px]">
            <h1 className='ml-10 mt-10 font-light'>
<span className='font-bold text-gray-400'>Check travel restrictions before booking.</span>The health and safety of our communities come first. Please follow government guidelines and travel only if it's essential.</h1>
            <h1 className='ml-10 font-bold text-2xl mt-10'>1,840 homestay in Hanoi</h1>
            <div className="mt-5 mx-10 flex space-x-2">
                {filter.map((filters) => {
                    return (
                        <div className="rounded-3xl bg-transparent border-gray-200 hover:border-black cursor-pointer border-2 px-4 text-base font-light py-1" key={filters.id}>
                            {filters.title}
                        </div>
                    )
                })}
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-cols-4 mt-10 mx-20 gap-3">
                {list.map((lists) => {
                    return (
                        <div className='bg-transparent'>
                            <img src={lists.img} className='w-3/4 object-scale-down' alt="" />
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <h1 className="font-light text-gray mt-3"><span className='text-black'>{lists.star}</span> ({lists.reviews} reviews)</h1>
                            </div>
                            <h1 className='font-light'>{lists.title} &bull; {lists.location}</h1>
                            <h1 className='font-light'>{lists.title}</h1>
                            <h1><span className='font-bold'>${lists.price}</span> / night</h1>
                        </div>
                    )
                })}
            </div>
        </div></>
    )
}

export default WhereToStay

