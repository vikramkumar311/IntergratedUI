import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Placeholder images - you can replace these with actual image URLs
  const images = [
    {
      id: 1,
      src: 'https://picsum.photos/400/300?random=1',
      alt: 'Beautiful landscape 1',
      title: 'Nature Scene 1'
    },
    {
      id: 2,
      src: 'https://picsum.photos/400/300?random=2',
      alt: 'Beautiful landscape 2',
      title: 'Nature Scene 2'
    },
    {
      id: 3,
      src: 'https://picsum.photos/400/300?random=3',
      alt: 'Beautiful landscape 3',
      title: 'Nature Scene 3'
    }
  ];

  const goToPrevious = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div className="absolute inset-y-0 left-2 flex items-center">
            <Button
              variant="secondary"
              size="icon"
              onClick={goToPrevious}
              className="h-8 w-8 rounded-full bg-white/80 hover:bg-white/90"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute inset-y-0 right-2 flex items-center">
            <Button
              variant="secondary"
              size="icon"
              onClick={goToNext}
              className="h-8 w-8 rounded-full bg-white/80 hover:bg-white/90"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold">
            {images[currentImageIndex].title}
          </h3>
          <p className="text-sm text-gray-600">
            Image {currentImageIndex + 1} of {images.length}
          </p>
        </div>

        <div className="flex justify-center space-x-2">
          {images.map((_, index) => (
            <Button
              key={index}
              variant={index === currentImageIndex ? "default" : "outline"}
              size="sm"
              onClick={() => goToSlide(index)}
              className="h-8 w-8 p-0"
            >
              {index + 1}
            </Button>
          ))}
        </div>

        <div className="flex justify-between">
          <Button
            onClick={goToPrevious}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          
          <Button
            onClick={goToNext}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageSlideshow;
