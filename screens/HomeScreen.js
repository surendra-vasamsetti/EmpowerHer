import { Box, ScrollView } from "native-base";
import Header from "../components/Header";
import CarouselBanner from "../components/CarouselBanner";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

export default function HomeScreen({ navigation }) {
  const categories = [
    { id: 1, name: "Electronics", icon: "📱" },
    { id: 2, name: "Fashion", icon: "👗" },
    { id: 3, name: "Home & Kitchen", icon: "🏠" },
  ];
  const products = [
    { id: 1, title: "Samsung Galaxy S23", price: 59999, discount: "10%", images: ["https://via.placeholder.com/100"] },
    { id: 2, title: "iPhone 15", price: 75000, discount: "5%", images: ["https://via.placeholder.com/100"] },
  ];

  return (
    <Box flex={1} bg="white">
      <Header navigation={navigation} cartCount={4} />
      <ScrollView>
        <CarouselBanner />
        <Box p={4}>
          <Text fontSize="lg" bold mb={2}>
            Categories
          </Text>
          <ScrollView horizontal>
            {categories.map((cat) => (
              <CategoryCard key={cat.id} name={cat.name} icon={cat.icon} />
            ))}
          </ScrollView>
          <Text fontSize="lg" bold mt={4} mb={2}>
            Featured Products
          </Text>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} navigation={navigation} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}