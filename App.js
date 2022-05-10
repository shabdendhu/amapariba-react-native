import MainComponent from "./MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import ApolloClientLayout from "./providers/appolo-provider";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// const client = new ApolloClient({
//   uri: "localhost:9000/graphql",
//   cache: new InMemoryCache(),
// });
export default function App() {
  return (
    <NavigationContainer>
      <ApolloClientLayout>
        <MainComponent />
      </ApolloClientLayout>
    </NavigationContainer>
  );
}
