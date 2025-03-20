import { Box, Text, Input, Button, VStack } from "native-base";

export default function SignUpScreen({ navigation }) {
  return (
    <Box flex={1} bg="white" safeArea p={4}>
      <Text fontSize="2xl" bold mb={4}>
        Sign Up
      </Text>
      <VStack space={4}>
        <Input placeholder="Email" />
        <Input placeholder="Phone" />
        <Input placeholder="Password" type="password" />
        <Button onPress={() => navigation.navigate("MainApp")}>
          Sign Up
        </Button>
        <Button variant="link" onPress={() => navigation.navigate("SignIn")}>
          Already have an account? Sign In
        </Button>
      </VStack>
    </Box>
  );
}