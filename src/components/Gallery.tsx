import ArtworkCard from "./ArtworkCard";

const artworks = [
  {
    title: "Serenity",
    description: "Oil on canvas",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    year: "2023",
  },
  {
    title: "Urban Dreams",
    description: "Mixed media",
    image: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca",
    year: "2023",
  },
  {
    title: "Nature's Whisper",
    description: "Watercolor",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
    year: "2022",
  },
  {
    title: "Abstract Thoughts",
    description: "Acrylic on canvas",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8",
    year: "2022",
  },
  {
    title: "Harmony",
    description: "Digital art",
    image: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3",
    year: "2023",
  },
  {
    title: "Ethereal",
    description: "Photography",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
    year: "2023",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-serif mb-12 text-center">Gallery</h2>
        <div className="masonry-grid">
          {artworks.map((artwork, index) => (
            <div
              key={index}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ArtworkCard {...artwork} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;