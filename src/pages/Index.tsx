import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background pt-16">
        <div className="container text-center">
          <h1 className="text-6xl font-serif mb-6 animate-fadeIn">
            Welcome to My Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "150ms" }}>
            Exploring the boundaries between reality and imagination through contemporary art
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4"
                alt="Artist"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif mb-6">About the Artist</h2>
              <p className="text-muted-foreground mb-4">
                With over a decade of experience in contemporary art, I explore themes
                of nature, urbanization, and human connection through various mediums
                including oil painting, digital art, and mixed media.
              </p>
              <p className="text-muted-foreground">
                My work has been featured in galleries across Europe and North
                America, earning recognition for its innovative approach to
                traditional techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;