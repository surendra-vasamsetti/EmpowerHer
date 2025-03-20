import { Box, ScrollView, Image, Text, Button, HStack } from "native-base";
import ReviewCard from "../components/ReviewCard";

export default function ProductScreen({ route }) {
  const { product } = route.params;
  const reviews = [
    { user: "Rajesh", rating: 5, comment: "Excellent product!", date: "2025-03-19" },
  ];

  return (
    <Box flex={1} bg="white" safeArea>
      <ScrollView>
        <Image source={{ uri: product.images[0] }} alt={product.title} w="100%" h={200} />
        <Box p={4}>
          <Text fontSize="xl" bold>{product.title}</Text>
          <Text>₹{product.price} ({product.discount} off)</Text>
          <HStack space={2} mt={2}>
            <Button size="sm">Add to Cart</Button>
            <Button size="sm" colorScheme="yellow">Add to Wishlist</Button>
          </HStack>
          <Text fontSize="lg" bold mt={4}>
            Reviews
          </Text>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}