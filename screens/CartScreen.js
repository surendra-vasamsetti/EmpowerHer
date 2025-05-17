import { Box, Text, HStack, Button } from "native-base";

export default function CartScreen() {
  const cartItems = [
    { id: "1", name: "iPhone 15", qty: 2, price: 75000 },
    { id: "2", name: "AirPods", qty: 1, price: 18000 },
  ];

  return (
    <Box flex={1} bg="white" safeArea p={4}>
      <Text fontSize="xl" bold mb={4}>
        Your Cart
      </Text>
      {cartItems.map((item) => (
        <HStack key={item.id} justifyContent="space-between" mb={2}>
          <Text>
            {item.name} (x{item.qty})
          </Text>
          <Text>₹{item.price * item.qty}</Text>
        </HStack>
      ))}
      <Button mt={4}>Proceed to Checkout</Button>
    </Box>
  );
}
