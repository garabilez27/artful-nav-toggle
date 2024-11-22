import { Button } from "./ui/button";
import ArtworkCard from "./ArtworkCard";
import { Link } from "react-router-dom";
import { allArtworks } from "@/data/artworks";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [artworksToShow, setArtworksToShow] = useState<number>(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1360) { // xl breakpoint
        setArtworksToShow(8);
      } else if (width >= 1024) { // lg breakpoint
        setArtworksToShow(6);
      } else { // md and smaller
        setArtworksToShow(4);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const previewArtworks = allArtworks.slice(0, artworksToShow);

  return (
    <section id="gallery" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-serif mb-12 text-center">Gallery</h2>
        <div className="masonry-grid">
          {previewArtworks.map((artwork, index) => (
            <div
              key={index}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ArtworkCard {...artwork} />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-primary hover:text-white transition-colors"
            asChild
          >
            <Link to="/artworks">View All Artworks</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;