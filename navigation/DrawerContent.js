import { Box, Text, Button } from "native-base";

export default function DrawerContent({ navigation }) {
  const sections = [
    "Home",
    "Categories",
    "Orders",
    "Wishlist",
    "Offers",
    "AI Assistant",
    "Settings",
    "Help & Support",
    "Logout",
  ];

  return (
    <Box flex={1} p={4} bg="gray.100">
      <Text fontSize="xl" bold mb={4}>
        EmpowerMart
      </Text>
      {sections.map((section, index) => (
        <Button
          key={index}
          variant="ghost"
          justifyContent="flex-start"
          mb={2}
          onPress={() => {
            if (section === "Home") navigation.navigate("Main");
            else if (section === "Offers") navigation.navigate("Offers");
            else if (section === "Logout") navigation.navigate("SignIn");
            else alert(`${section} Coming Soon!`);
          }}
        >
          {section}
        </Button>
      ))}
    </Box>
  );
}