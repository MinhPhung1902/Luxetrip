import React from 'react'

const FlightBody = () => {
    const opens = [
        {id: 1, countries:'USA', img:'./flight-1/NewYork.jpeg', properties:'20 987'},
        {id: 2, countries:'Canada', img:'./flight-1/Can.jpeg', properties:'10 722'},
        {id: 3, countries:'England', img:'./flight-1/London.jpeg' , properties:'11 423'},
        {id: 4, countries:'Germany', img:'./flight-1/German.jpeg', properties:'10 202'},
    ]
    const discounts = [
        {id:1, city: 'Tokyo', img:'./flight-2/Tokyo.jpeg', flight:'HAN-TKO', date:'Sat 22, Jan', airline:'Emirates' ,airline_img:'./airlines/emirates.png'},
        {id:1, city: 'New York', img:'./flight-2/New_York.jpeg', flight:'HAN-NYC', date:'Sat 22, Jan', airline:'Emirates',airline_img:'./airlines/emirates.png'},
        {id:1, city: 'London', img:'./flight-2/london.jpeg', flight:'HAN-LON', date:'Sat 22, Jan', airline:'Etihad', airline_img:'./airlines/etihad.png'},
    ]
    const services = [
        {id:1, title:`We're always support you`, img:'./services/support.png'},
        {id:2, title:`Best Plan for you`, img:'./services/plan.png'},
        {id:3, title:'Easy and simple', img:'./services/chill.png'},
    ]
    return (
        //Form
        <div className='font-poppins pt-30'>
            <div 
                 style={{ 
                      backgroundImage: `url(/Form/form1.jpeg)` ,
                      height: `25%`
                 }}>
            <div class="container h-screen mx-auto flex justify-center items-center p-2 md:p-0">
                <div class="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
                    <div class="flex flex-col md:flex-row">
                        <div class="">
                            <select class="border p-2 rounded">
                                <option>Round-trip</option>
                                <option>Missouri</option>
                                <option>texas</option>
                            </select>
                        </div>
                        <div class="pt-6 md:pt-0 md:pl-6">
                            <select class="border p-2 rounded">
                                <option>4 Passangers</option>
                                <option>3 Passangers</option>
                                <option>2 Passangers</option>
                            </select>
                        </div>
                        <div class="pt-6 md:pt-0 md:pl-6">
                            <select class="border p-2 rounded">
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="grid grid-cols-2 gap-2 border border-gray-100 p-2 rounded">
                            <div class="flex border rounded bg-gray-300 items-center p-2 ">
                                <svg class="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path class="heroicon-ui"
                                          d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/>
                                </svg>
                                <input type="text" placeholder="Enter text here..."
                                       class="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                            </div>
                            <div class="flex border rounded bg-gray-300 items-center p-2 ">
                                <svg  class="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path class="heroicon-ui"
                                          d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"/>
                                </svg>
                                <input type="text" placeholder="Enter text here..."
                                       class="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                            <div class="flex border rounded bg-gray-300 items-center p-2 ">
                                <svg class="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path class="heroicon-ui"
                                          d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"/>
                                </svg>
                                <input type="text" placeholder="Enter text here..."
                                       class="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                            </div>
                            <div class="flex border rounded bg-gray-300 items-center p-2 ">
                                <svg class="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path class="heroicon-ui"
                                          d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"/>
                                </svg>
                                <input type="text" placeholder="Enter text here..."
                                       class="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center"><button class="p-2 border w-1/4 rounded-md bg-red-500 text-white">Search</button></div>
                </div>
            </div>
        </div>
            {/* //COVIDMAP  */}
            <div className='relative bg-slate-300 mx-20 mt-10 mb-10'>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                    <div className="flex flex-col space-y-4 m-10">
                        <h1 className="font-bold text-2xl">
                            Get <span className='text-red-500'>necessary</span> travel information 
                            during COVID-19
                        </h1>
                        <p className="font-light text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Mollitia numquam voluptates magnam itaque inventore 
                            similique quod officiis ipsum repudiandae sequi perferendis ?
                        </p>
                        <button className='bg-red-500 text-white flex flex-row w-[130px]  px-2 py-2 hover:translate-x-3'>
                              Live map 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
                        </button>
                    <div className='text-blue-400 cursor-pointer hover:underline'>Get latest infomation</div>
                    </div>
                    <div className='relative'>
                        <img src="./CovidMap/covid.png"   alt="" />
                        <div className='bg-slate-200 m-10 w-1/4 flex absolute top-12 right-10 flex-col'>
                            <h1 className='ml-8'>Limited level</h1>
                            <div className='flex space-x-2 ml-8'> 
                                <div className="w-3 h-3 rounded-full mt-[6px] bg-green-600"></div>
                                <p className="text-black  text-light">Low</p>
                            </div>
                            <div className='flex space-x-2 ml-8'>
                                <div className="w-3 h-3 rounded-full mt-[6px] bg-orange-400"></div>
                                <p className="text-black text-light">Normal</p>
                            </div>
                            <div className='flex space-x-2 ml-8'>
                                <div className="w-3 h-3 rounded-full mt-[6px] bg-red-600"></div>
                                <p className="text-black text-light">High</p>
                            </div>
                            <div className='flex space-x-2 ml-8'>
                                <div className="w-3 h-3 rounded-full mt-[6px] bg-gray-400"></div>
                                <p className="text-black text-light">Undetected</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* Open travel */}
            <div className="m-20">
                <div className="flex flex-row space-x-5">
                <h1 className="font-bold text-2xl">
                    Countries Open for travel
                </h1>
                <p className="text-blue-300 uppercase cursor:pointer hover:underline mt-2">View All</p>
                </div>
                
                <div className="flex flex-row space-x-3 mx-20 my-10 ">
                    {opens.map((open) =>{
                        return (
                            <div key={open.id} className="rounded-lg mb-6 tracking-wide my-5 hover:translate-y-3 hover:shadow-xl" >
            <div className="md:flex-shrink-0">
                <img src={open.img} alt="mountains" className="w-full h-128 rounded-lg rounded-b-none" />
            </div>
            <div className="px-4 py-2 mt-2">
                <h2 className="font-semibold text-xl text-gray-800 ">{open.countries}</h2>
                <p className='text-base text-gray-400'>{open.properties} Properties</p>
            </div>
        </div>
                        )
                    })}
                    
            </div>
            </div>
            {/* //CheapFlight */}
            <div className="m-20">
            <div className="flex flex-row space-x-5">
                <h1 className="font-bold text-2xl">
                    Cheap flight near you
                </h1>
                <p className="text-blue-300 uppercase cursor:pointer hover:underline mt-2">View All</p>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col  lg:space-x-3 md:space-y-2 xs:space-y-2 sm:space-y-2 mx-20
                ">
                    {discounts.map((discount) =>{
                        return (
                            <div  key={discount.id} className="flex flex-col rounded-2xl shadow-xl" >
                            <img src={discount.img} alt="" className="rounded-2xl m-5  h-1/3 " />
                            <h1 className="font-bold text-2xl mx-5">{discount.city}</h1>
                            <div className="flex flex-col mx-5 mt-3 space-y-5">
                                <div className='space-x-3 flex flex-row'>
                                    <img src={discount.airline_img} className='h-7' alt="" />
                                    <div>
                                        <p className="font-bold text-base">{discount.date}</p>
                                        <p className="font-light text-base">{discount.flight}, {discount.airline}</p>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-3'>
                                    <img src={discount.airline_img} className='h-7' alt="" />
                                    <div>
                                        <p className="font-bold text-base">{discount.date}</p>
                                        <p className="font-light text-base">{discount.airline}, {discount.flight}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mx-3 mt-3">
                                <h1 className='text-light text-black'>Restricted</h1>
                                <h2 className='text-blue-500 cursor-pointer'>From $499</h2>
                            </div>
                    </div>
                        )
                    })}
               
                </div>
            </div>
            <div className="bg-slate-300/80">
                <div className=" m-20  space-x-5">
                    <div className="flex flex-row space-x-5 mx-20 my-5">
                 {services.map((service) =>{
                    return (
                <div key={service.id} className="flex flex-col space-y-2 pb-5">
                    <div>
                   <img src={service.img} className='m-5' alt="" />
                    </div>
                    <h1 className="font-bold text-xl text-center">
                        {service.title}
                    </h1>
                    <p className="text-light text-base text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Architecto tempore quas voluptatibus provident obcaecati 
                    </p>
                </div>
                    )
                } )}
                    </div>
                </div>
            </div>
            {/* //Testimonial */}
            <div class="flex justify-center items-center w-screen h-screen bg-white">
	<div class="container mx-auto mt-10 mb-10 lg:mb-40 lg:px-20">
		<div class="relative w-full my-4 lg:w-9/12 mr-auto rounded-2xl shadow-2xl">
			<img alt="Card" src='./testimonial/customer.jpeg' class="max-w-full rounded-lg shadow-lg"/>
        </div>
		<div class="relative z-10 w-full lg:-mt-96 lg:w-3/6 p-8 ml-auto bg-red-600 rounded-2xl rotate-30">
		    <div class="flex flex-col text-white">
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/></svg>
                </div>
                <p class="text-white my-5 px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam,
                    eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                </p>
                <div class="flex justify-between pl-2">
                    <h3 class="font-bold text-2xl">Customer</h3>
                    <i class="fas fa-quote-right text-2xl" />
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default FlightBody

                    
