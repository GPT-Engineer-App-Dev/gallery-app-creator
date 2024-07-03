import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    { src: "https://placehold.co/600x400", title: "Image 1" },
    { src: "https://placehold.co/600x400", title: "Image 2" },
    { src: "https://placehold.co/600x400", title: "Image 3" },
    { src: "https://placehold.co/600x400", title: "Image 4" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden">
          <img src={image.src} alt={image.title} className="w-full h-auto" />
          <CardContent>
            <CardTitle>{image.title}</CardTitle>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;