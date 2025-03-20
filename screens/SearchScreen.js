import { Box, Text, Input, Button, VStack } from "native-base";

export default function SearchScreen() {
  return (
    <Box flex={1} bg="white" safeArea p={4}>
      <Input placeholder="Search for products, brands, and more" mb={4} />
      <VStack space={2}>
        <Text>Suggestions: Laptop Bags, Gaming Laptops</Text>
        <Button>Filter & Sort</Button>
      </VStack>
    </Box>
  );
}