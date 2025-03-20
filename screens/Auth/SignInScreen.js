import { Box, Text, Input, Button, VStack } from "native-base";

export default function SignInScreen({ navigation }) {
  return (
    <Box flex={1} bg="white" safeArea p={4}>
      <Text fontSize="2xl" bold mb={4}>
        Sign In
      </Text>
      <VStack space={4}>
        <Input placeholder="Email or Phone" />
        <Input placeholder="Password" type="password" />
        <Button onPress={() => navigation.navigate("MainApp")}>
          Sign In
        </Button>
        <Button variant="link" onPress={() => navigation.navigate("SignUp")}>
          Create an Account
        </Button>
      </VStack>
    </Box>
  );
}