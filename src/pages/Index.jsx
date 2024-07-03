import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">Welcome to the Gallery App</h1>
      <p>Explore the gallery or upload your own images.</p>
      <div className="space-x-4">
        <Button onClick={() => navigate("/gallery")}>Go to Gallery</Button>
        <Button onClick={() => navigate("/upload")}>Upload Image</Button>
      </div>
    </div>
  );
};

export default Index;
