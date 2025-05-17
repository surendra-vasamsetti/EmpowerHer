import { Box, HStack, Text, Icon, Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, cartCount = 0 }) {
  return (
    <Box bg="blue.500" p={4} safeAreaTop>
      <HStack justifyContent="space-between" alignItems="center">
        <Text color="white" fontSize="xl" bold>
          EmpowerMart
        </Text>
        <HStack space={4}>
          <Input
            placeholder="Search for products"
            w="60%"
            bg="white"
            borderRadius="md"
          />
          <Icon
            as={MaterialIcons}
            name="shopping-cart"
            size="md"
            color="white"
            onPress={() => navigation.navigate("Cart")}
          />
          <Text color="white">{cartCount}</Text>
        </HStack>
      </HStack>
    </Box>
  );
}
