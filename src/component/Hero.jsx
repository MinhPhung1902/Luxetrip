import React, {useState} from 'react'
import Carousel from "react-elastic-carousel";



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

const Hero = () => {
    //places
    const places = [
        {id:1, name:'Hà Nội', img:'./images/hanoi1.jpeg', distance:'1', count:'811'},
        {id:2, name:'Hồ Chí Minh city', img:'./images/saigon.jpeg', distance:'1,567', count:'922'},
        {id:3, name:'Đà Lạt', img:'./images/dalat.jpeg', distance:'912', count:'741'},
        {id:4, name:'Hội An', img:'./images/hoian.jpeg', distance:'752', count:'811'},
        {id:5, name:'Đà Nẵng', img:'./images/danang.jpeg', distance:'763', count:'522'},
        {id:6, name:'Vũng Tàu', img:'./images/vungtau.jpeg', distance:'932', count:'563'},
        {id:7, name:'Phan Thiết', img:'./images/phanthiet.jpeg', distance:'793', count:'322'},
        {id:8, name:'Phú Quốc', img:'./images/phuquoc.jpeg', distance:'1817', count:'746'},
    ]
    //Carousel
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const addItem = () => {
        const nextItem = Math.max(1, items.length + 1);
        setItems([...items, nextItem]);
      };
    
      const removeItem = () => {
        const endRange = Math.max(0, items.length - 1);
        setItems(items.slice(0, endRange));
      };
      //Recomendations
      const homestays = [
          {id: 1, name: 'Biệt thự cổ Đà Lạt', img:'https://toplist.vn/images/800px/top-10-biet-thu-nghi-duong-dep-nhat-da-lat-16463.jpg', descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem mollitia vero, nam officiis dignissimos quis minima cupiditate illum beatae facere! Dolore voluptate animi mollitia ea quia? Doloremque, sit culpa.', price:'219', rating:'4.5'},
          {id: 2, name: 'Trung tâm Hà Nội', img:'https://gtop.vn/wp-content/uploads/2021/03/1615823015_10-Homestay-pho-co-Ha-Noi-gia-re-dep-cho.jpg', descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem mollitia vero, nam officiis dignissimos quis minima cupiditate illum beatae facere! Dolore voluptate animi mollitia ea quia? Doloremque, sit culpa.', price:'199', rating:'4'},
          {id: 3, name: 'Trung tâm Sài Gòn',img:'https://vietnamhouse.jp/upload/condo/675/image-c6ead8e851-(375x375-crop).jpeg', descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem mollitia vero, nam officiis dignissimos quis minima cupiditate illum beatae facere! Dolore voluptate animi mollitia ea quia? Doloremque, sit culpa.', price:'249', rating:'4.75'},
          {id: 4, name: 'Biệt thự bên bờ biển Phan Thiết', img:'https://sites.google.com/site/thesunnyvilla/_/rsrc/1448267542015/home/tin-tuc/biet-thu-bien-dhang-cap-quoc-te-100-huong-bien-view-tuyet-dhep/BBBB.png', descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem mollitia vero, nam officiis dignissimos quis minima cupiditate illum beatae facere! Dolore voluptate animi mollitia ea quia? Doloremque, sit culpa.', price:'189', rating:'4.2'},
      ]
      

      //setCategories
 return (
        <div className='bg-white font-poppins'>
            <div className='relative flex items-center justify-center ml-5 mr-10'>
            <div class="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center mt-10">
   <h1 class="text-6xl font-bold text-white shadow-inner text-center">Ready to explore the world?</h1>
   <h3 class="text-2xl text-white shadow-inner text-center">Let us be your guide.</h3>
   <div className="flex items-center justify-center mt-5">
       <button className='bg-white text-red-500 p-3 rounded-3xl'>Explore Now</button>
   </div>
            </div>
                <img className='h-screen max-w-screen' src="./images/hanoi.jpeg" alt="" />
            </div>
            <div className="m-20">
                <h1 className="font-bold text-4xl mt-5">Domestic travel</h1>
                <p className="font-sans text-xl">Based on your location</p>
                <div className="mt-5">
                <Carousel breakPoints={breakPoints}>
                    {places.map((place) => {
                        return (
                            <div className='bg-red-400  text-white shadow-inner rounded-2xl my-4 mx-2'>
                             <img src={place.img} alt="" className='w-full h-auto object-cover rounded-t-lg' />
                                <div className="mt-2 m-2">
                                    <h2 className="text-3xl mt-2 ml-3">{place.name}</h2>
                                    <p className='font-light mt-2 ml-3'>{place.distance} kilometers away</p>
                                    <p className='font-light mt-2 ml-3'>{place.count} homestay</p>
                                </div>
                                <button className='bg-transparent uppercase font-bold ml-5 mt-2 mb-2'>Learn More</button>
                            </div>
                        )
                    })}
                </Carousel>
                </div>
             </div>
               <div>
                   <h1 className="font-bold text-4xl ml-20">Our recommedations</h1>
                   <div className="grid grid-cols-1 gap-5 mx-40 my-10">
                   {homestays.map((homestay) => {
                       return (
                        <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">

<div className="h-64 w-auto md:w-1/2">
<img className="inset-0 h-full w-full object-cover object-center" src={homestay.img} />
</div>

<div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
    <div className="flex justify-between">
    <h3 className="font-semibold text-lg leading-tight truncate">{homestay.name}</h3>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 hover:bg-red-500 hover:rounded-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
    </div>
<p className="mt-2">
{homestay.descr}
</p>
<div className="flex items-center justify-between mt-5">
<p className="text-base text-gray-700 tracking-wide font-semibold mt-2">
${homestay.price}<span className='text-red-500'>/night</span>  &bull; {homestay.rating}/5 <span className='text-red-500'>ratings</span>
</p>
<button className='bg-red-500 text-white rounded-sm p-2 hover:bg-red-300'>Book Now</button>
</div>

</div>
</div>
                       )
                   })}
                   </div>
               </div>
               <div> 
                            </div>
        </div>
        )
    }
    
    export default Hero
                           
                            
                           
                           
                               
            
                    
                      
                                    
                                            
                                      
                                                           
                      
                   
              
