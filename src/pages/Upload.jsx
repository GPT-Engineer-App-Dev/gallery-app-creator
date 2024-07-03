import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload logic here
    console.log("Title:", title);
    console.log("File:", file);
  };

  return (
    <Card className="max-w-lg mx-auto p-4">
      <CardTitle>Upload Image</CardTitle>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Image Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="file">Image File</Label>
            <Input
              id="file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
          <Button type="submit">Upload</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Upload;