import { useState } from "react";
import { Button } from "./ui/button";
import ArtworkCard from "./ArtworkCard";

const allArtworks = [
  {
    title: "Serenity",
    description: "Oil on canvas",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    year: "2023",
  },
  {
    title: "Urban Dreams",
    description: "Mixed media",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
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
  // Additional artworks
  {
    title: "Urban Jungle",
    description: "Mixed media",
    image: "https://images.unsplash.com/photo-1578301978018-3199d0cc2c93",
    year: "2023",
  },
  {
    title: "Midnight Dreams",
    description: "Oil on canvas",
    image: "https://images.unsplash.com/photo-1579783902439-5f98b6df7d89",
    year: "2023",
  },
  {
    title: "Ocean Breeze",
    description: "Watercolor",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d",
    year: "2022",
  },
  {
    title: "City Lights",
    description: "Digital art",
    image: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3",
    year: "2023",
  },
  {
    title: "Mountain Peak",
    description: "Photography",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
    year: "2023",
  },
  {
    title: "Abstract Motion",
    description: "Acrylic on canvas",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8",
    year: "2022",
  },
];

const Gallery = () => {
  const [visibleArtworks, setVisibleArtworks] = useState(6);
  const hasMoreArtworks = visibleArtworks < allArtworks.length;

  const handleViewMore = () => {
    setVisibleArtworks((prev) => Math.min(prev + 6, allArtworks.length));
  };

  return (
    <section id="gallery" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-serif mb-12 text-center">Gallery</h2>
        <div className="masonry-grid">
          {allArtworks.slice(0, visibleArtworks).map((artwork, index) => (
            <div
              key={index}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ArtworkCard {...artwork} />
            </div>
          ))}
        </div>
        {hasMoreArtworks && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-white transition-colors"
              onClick={handleViewMore}
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;