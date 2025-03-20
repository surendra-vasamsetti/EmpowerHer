import { Box, Text, VStack } from "native-base";

export default function OffersScreen() {
  const offers = [
    { offerCode: "NEW10", description: "Flat 10% off on your first order" },
  ];

  return (
    <Box flex={1} bg="white" safeArea p={4}>
      <Text fontSize="xl" bold mb={4}>
        Offers & Discounts
      </Text>
      <VStack space={2}>
        {offers.map((offer, index) => (
          <Box key={index} p={2} bg="gray.100" borderRadius="md">
            <Text bold>{offer.offerCode}</Text>
            <Text>{offer.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}