import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    Culture: [
        {city:'Paris', country:'France'},
        {city:'Madrid', country:'Spain'},
        {city:'London', country:'England'},
        {city:'Venice', country:'Italy'},
        {city:'Milano', country:'Italy'},
        {city:'Basel', country:'Swirtzerland'},
        {city:'Berlin', country:'Germany'},
        {city:'Florence', country:'Italy'},
        {city:'Amsterdam', country:'Netherlands'},
    ],
    Outdoor: [
        {city:'Seattle', country:'USA'},
        {city:'Portland', country:'USA'},
        {city:'Denver', country:'USA'},
        {city:'Boise', country:'USA'},
        {city:'Cambridge',country:'USA'},
        {city:'Basel', country:'USA'},
        {city:'Queenstown', country:'Newz Zealand'},
        {city:'Tofino', country:'Canada'},
    ],
    Beach: [
        {city:'Maldives', country:'Maldives'},
        {city:'Maui', country:'USA'},
        {city:'Bahamas', country:'USA'},
        {city:'ibiza', country:'Spain'},
        {city:'Mykonos',country:'Greece'},
        {city:'Santorini', country:'Greece'},
        {city:'Sardinia', country:'Italy'},
        {city:'Amalfi', country:'Italy'},
    ],
    Moutain: [
        {city:'Innsbruck', country:'Austria'},
    {city:'Zermatt', country:'Swirtzerland'},
    {city:'Zurich', country:'Swirtzerland'},
    {city:'ibiza', country:'Spain'},
    {city:'Reine',country:'Norway'},
    {city:'Park city', country:'USA'},
    ],
    Popular: [
        {city:'Paris', country:'France'},
                    {city:'Rome', country:'Italy'},
                    {city:'London', country:'England'},
                    {city:'Madrid', country:'Spain'},
                    {city:'New York',country:'USA'},
                    {city:'Los Angeles',country:'USA'},
                    {city:'Hawaii',country:'USA'},
                    {city:'Dubai', country:'UAE'},
                    {city:'Istanbul', country:'Turkey'},
                    {city:'Tokyo', country:'Japan'},
                    {city:'Seoul', country:'South Korea'},
                    {city:'Cassablanca', country:'Morroco'},
                    {city:'Cairo', country:'Egypt'},
    ],
    Unique: [
        {city:'Big Sur', country:'USA'},
    {city:'Mount Rainer', country:'USA'},
    {city:'Kenai Fjords National Park', country:'USA'},
    {city:'Moloka', country:'USA'},
    ],
  })

  return (
    <div className='p-1'>
    <h1 className='font-2xl text-3xl text-center font-bold mt-10'>Discover by genre</h1>
    <div className='flex justify-center items-center'>
      <div className="w-full max-w-md py-5 px-2 mr-48  sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-3 bg-transparent text-center text-black">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) => classNames(
                  'w-full text-base p-5 leading-5 font-medium text-black rounded-lg',
                  selected
                    ? 'bg-transparent'
                    : 'text-black hover:bg-white/[0.12] hover:text-red-500'
                )}
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'bg-white rounded-xl p-3'
                )}
              >
                <ul className='grid grid-cols-2 gap-3'>
                  {posts.map((post) => (
                    <li
                      key={post.city}
                      className="relative p-3 rounded-md hover:bg-coolGray-100"
                    >
                      <div>
                        <h3 className="text-sm font-medium leading-5">
                          {post.city}
                        </h3>

                        <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                          <li>{post.country}</li>
                        </ul>
                      </div>
                      <a
                        href="#"
                        className={classNames(
                          'absolute inset-0 rounded-md'
                        )} />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
    </div>
  )
}
