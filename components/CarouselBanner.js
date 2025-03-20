import { Box, Image } from "native-base";
import { useState, useEffect } from "react";

export default function CarouselBanner() {
  const banners = [
    "https://via.placeholder.com/300x150?text=Banner1",
    "https://via.placeholder.com/300x150?text=Banner2",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // 5s interval
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Image
        source={{ uri: banners[currentIndex] }}
        alt="Banner"
        w="100%"
        h={150}
        resizeMode="cover"
      />
    </Box>
  );
}