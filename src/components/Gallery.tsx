import { Button } from "./ui/button";
import ArtworkCard from "./ArtworkCard";
import { Link } from "react-router-dom";
import { allArtworks } from "@/data/artworks";

const Gallery = () => {
  const previewArtworks = allArtworks.slice(0, 8);

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