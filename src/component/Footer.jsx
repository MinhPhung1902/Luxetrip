import React from 'react'
import { Instagram, Facebook, Twitter } from '@mui/icons-material'

const Footer = () => {
    const footers = {
     content:[
        {id: 1,
             title:'About', 
             child:
             [
                {options:'Why us?'}, 
             {options:'Explore more'}, 
             {options:'Policy'},
              {options:'Feature'}, 
              {options:'Career'},  
              {options:'Investor'}, 
              {options:'Luxtrip'}
            ]
            },
        {id: 2, title:'Community', child:[{options:'Comunity'}, {options:'Forum'}, {options:'Celebrating'}]},
        {id: 3, title:'Hosting', child:[{options:'Hosting'}, {options:'Try Hosting'}, {options:'Hosting Resources'}, {options:'Hosting Policy'}]},
        {id: 4, title:'COVID-19', child:[{options:'Support'}, {options:'Help center'}, {options:'Safety-option'}, {options:'COVID-19'}]},
    ]
}
    return (
        <div className='bg-gray-100 font-poppins'>
        <div className=" grid grid-cols-2 md:grid-cols-4">
            {footers.content.map((footer) => {
                return (
                    <div key={footer.id} className='m-10'>
                    <h1 className='font-bold'>{footer.title}</h1>
                    {footer.child.map((ch1ld) =>{
                        return(
                            <div key={ch1ld.options} className="text-light mt-2">{ch1ld.options}</div>
                        )
                    })}
                   
                </div>
                )
                 } )}
           
        </div>
        <hr className='bg-gray-200 ml-10 mr-10'/>
                 <div className="flex items-center justify-between font-sans">
                     <div className='flex m-5'>
                         <h1 className='text-black text-sm font-light'>&#169; Developed by Kanye Phung, 2022. All rights reserved</h1>
                         <div className="flex">
                         <h1 className='font-light text-sm ml-5 cursor-pointer hover:underline'>&bull; Privacy </h1> 
                         <h1 className='font-light text-sm ml-3 cursor-pointer hover:underline'>&bull; Term </h1> 
                         <h1 className='font-light text-sm ml-3 cursor-pointer hover:underline'>&bull; Sitemap</h1>
                         </div>
                         
                     </div>
                     <div className='flex mr-10'>
                            <a href="https://www.instagram.com/kanye_phung/" className='mr-2 hover:translate-y-1'><Instagram /></a>
                            <a href="facebook.com/nhatminh.phung.192/" className='mr-2 hover:translate-y-1'><Facebook /></a>
                            <a href="https://twitter.com/minhphung192" className='mr-2 hover:translate-y-1'><Twitter /></a>
                     </div>
                 </div>
        </div>
    )
}

export default Footer
