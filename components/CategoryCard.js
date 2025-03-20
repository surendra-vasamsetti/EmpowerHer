import { Box, Text, Button } from "native-base";

export default function CategoryCard({ name, icon, onPress }) {
  return (
    <Button
      bg="white"
      borderWidth={1}
      borderColor="gray.200"
      p={2}
      m={1}
      onPress={onPress}
    >
      <Text>{icon} {name}</Text>
    </Button>
  );
}