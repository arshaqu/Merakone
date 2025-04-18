import React from 'react';
import Asset1 from '../../Assets/Services/Asset1.png'
import Asset2 from '../../Assets/Services/Asset2.png'
import Asset3 from '../../Assets/Services/Asset3.png'
import Asset4 from '../../Assets/Services/Asset4.png'
import Asset5 from '../../Assets/Services/Asset5.png'
import bg1 from '../../Assets/Services/Bg1.png'
import Bgline from '../../Assets/Services/BgLine.png'



const cards = [
  {
    image: Asset1,
    title: 'LUXURY RETAIL',
    description: 'High-end store interiors that enhance brand experience',
  },
  {
    image: Asset2,
    title: 'FOOD & B VERAGE (F&B)',
    description: 'Customized interiors for cafes, restaurants, and lounges.',
  },
  {
    image: Asset3,
    title: 'COMMERCIAL WORKPLACE',
    description: 'Modern office designs that boost productivity and collaboration.',
  },
  {
    image: Asset4,
    title: 'RETAIL SPACES',
    description: 'Functional and stylish retail fit-outs for seamless customer interaction.',
  },
  {
    image: Asset5,
    title: 'RESIDENTIAL SPACES',
    description: 'Personalized interiors that reflect comfort and elegance.',
  },
];

export default function WhatWeDo() {
  return (
        <div  className='  md:m-12' >
            <div  >
            <h2 style={{color:'#2d3680',}} className="text-4xl md:text-6xl font-bold mb-4 md:ml-60 mt-5 against">What We Do..?</h2>
            <p style={{color:'#2d3680'}} className="text-lg md:text-xl mb-12 md:ml-60 montserrat md:mt-5">
            We transform spaces into stunning, funcitonal enviournments with expertise in;
            </p>
            </div>
            <div
  style={{
    backgroundImage: `url(${bg1})`,
  }}
  className="min-h-screen flex justify-center items-center md:px-12 bg-contain md:mt-12 bg-no-repeat bg-center"
> 
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
            {/* Left column */}
            <div style={{}} className="flex flex-col gap-8">
            {[0, 1].map((i) => (
                <Card key={i} data={cards[i]} height="h-[400px]" />
                ))}
            </div>

            {/* Middle big card */}
            <Card data={cards[2]} height="h-[820px]" />

            {/* Right column */}
            <div className="flex flex-col gap-8">
            {[3, 4].map((i) => (
                <Card key={i} data={cards[i]} height="h-[400px]" />
                ))}
            </div>
        </div>
        </div>
    </div>
  );
}


function Card({ data, height }) {
    return (
        <div className={`relative rounded-xl overflow-hidden  w-full ${height}`}>
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full"
      />
      <div className="absolute"></div>
      <div className="absolute bottom-6 md:left-4 p-5 text-white">
        <h3 className="text-xl font-semibold against ">{data.title}</h3>
        <p className="text-sm mt-2 max-w-xs">{data.description}</p>
      </div>
    </div>
  );
}
