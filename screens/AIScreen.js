import { Box, Text, Button, VStack } from "native-base";

export default function AIScreen() {
  return (
    <Box flex={1} bg="white" safeArea p={4}>
      <Text fontSize="xl" bold mb={4}>
        AI Assistant
      </Text>
      <VStack space={4}>
        <Button>Chat with AI</Button>
        <Button>Voice Search</Button>
        <Text>Recommendations Coming Soon!</Text>
      </VStack>
    </Box>
  );
}