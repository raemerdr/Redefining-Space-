import React from 'react';

const Gallery: React.FC = () => {
  const items = [
    {
      title: "Nordic Serenity",
      desc: "Oslo, Norway",
      img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop",
      size: "large"
    },
    {
      title: "Urban Loft",
      desc: "New York, USA",
      img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1587&auto=format&fit=crop",
      size: "small"
    },
    {
      title: "Kyoto Tea House",
      desc: "Kyoto, Japan",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
      size: "small"
    },
    {
      title: "Desert Modernism",
      desc: "Palm Springs, USA",
      img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop",
      size: "large"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
           <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-dark mb-4">Curated Living.</h2>
              <p className="text-xl text-gray-500">A collection of spaces designed for life.</p>
           </div>
           <a href="#" className="hidden md:inline-flex items-center gap-2 text-apple-blue hover:text-apple-blue-hover font-medium mt-6 md:mt-0 transition-colors">
              View Full Portfolio <span aria-hidden="true">&rarr;</span>
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${item.size === 'large' ? 'aspect-[4/3]' : 'aspect-square'}`}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-gray-200 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#" className="inline-flex items-center gap-2 text-apple-blue font-medium">
              View Full Portfolio &rarr;
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
