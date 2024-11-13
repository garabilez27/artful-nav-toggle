interface ArtworkCardProps {
  title: string;
  description: string;
  image: string;
  year: string;
}

const ArtworkCard = ({ title, description, image, year }: ArtworkCardProps) => {
  return (
    <div className="artwork-card group">
      <img src={image} alt={title} className="aspect-[3/4]" />
      <div className="artwork-info">
        <h3 className="text-xl font-serif mb-1">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
        <p className="text-sm mt-2 opacity-75">{year}</p>
      </div>
    </div>
  );
};

export default ArtworkCard;