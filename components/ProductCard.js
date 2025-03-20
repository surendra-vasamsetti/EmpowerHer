import { Box, Text, Image, Button, HStack } from "native-base";

export default function ProductCard({ product, navigation }) {
  return (
    <Box bg="white" borderWidth={1} borderColor="gray.200" p={2} m={2} borderRadius="md">
      <Image
        source={{ uri: product.images[0] }}
        alt={product.title}
        w="100%"
        h={100}
        resizeMode="cover"
      />
      <Text fontSize="md" bold>{product.title}</Text>
      <Text>₹{product.price} ({product.discount} off)</Text>
      <HStack space={2} mt={2}>
        <Button size="sm" onPress={() => navigation.navigate("Product", { product })}>
          View
        </Button>
        <Button size="sm" colorScheme="secondary">
          Add to Cart
        </Button>
      </HStack>
    </Box>
  );
}