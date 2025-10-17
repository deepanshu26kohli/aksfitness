import gym1 from "../assets/images/gym1.jpg"
import gym2 from "../assets/images/gym2.jpg"
import gym3 from "../assets/images/gym3.jpg"
import gym4 from "../assets/images/gym4.webp"
import gym5 from "../assets/images/logo.jpg"
import akshatimg from "../assets/images/akshatimg.jpg"
export default function Gallery() {

  const images = [
    {
      url: gym1
    },
    {
      url: gym2
    },
    {
      url: gym3
    },
    {
      url: gym4
    },
    {
      url: gym5
    },{
      url: akshatimg
    }
  ];

  return (
    <section id="gallery" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Our <span className="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">Facility</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Take a virtual tour of our premium fitness facility equipped with the latest technology and amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>

              <img
                src={image.url}
                alt={image.url}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              
                <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-2xl transition-colors duration-300 z-20 pointer-events-none"></div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
