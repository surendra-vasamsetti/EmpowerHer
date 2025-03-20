import { Box, Text, HStack } from "native-base";

export default function ReviewCard({ review }) {
  return (
    <Box bg="gray.100" p={2} m={2} borderRadius="md">
      <HStack justifyContent="space-between">
        <Text bold>{review.user}</Text>
        <Text>{review.rating} ⭐</Text>
      </HStack>
      <Text>{review.comment}</Text>
      <Text fontSize="sm" color="gray.500">{review.date}</Text>
    </Box>
  );
}