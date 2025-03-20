import { Box, Text, Button, VStack } from "native-base";

export default function ProfileScreen({ navigation }) {
  return (
    <Box flex={1} bg="white" safeArea p={4}>
      <Text fontSize="xl" bold mb={4}>
        Profile
      </Text>
      <VStack space={4}>
        <Text>Email: user@example.com</Text>
        <Text>Phone: +91 9876543210</Text>
        <Button onPress={() => navigation.navigate("SignIn")}>
          Logout
        </Button>
      </VStack>
    </Box>
  );
}