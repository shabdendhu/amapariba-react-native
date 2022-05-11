import { ScrollView, StyleSheet, Text, View } from "react-native";
import React,{useState,useEffect} from "react";
import Labels from "../templates/Labels";
import VerticalProductCard from "../product/VerticalProductCard";
// import { gql, useQuery } from "@apollo/client";
// const allTopdeals = gql`
//   query {
//     get_allTopDeals {
//       id
//       product_id
//       Products {
//         id
//         name
//         # brand_id
//         image
//         # rating
//         # created_by
//         # updated_by
//         # is_active
//         # category {
//         # id
//         # name
//         # created_by
//         # updated_by
//         # is_active
//         # }
//         # brand {
//         #   id
//         #   name
//         #   company_name
//         #   ratings
//         #   created_by
//         #   updated_by
//         #   is_active
//         # }
//         qntity {
//           id
//           quantity
//           # product_id
//           base_price
//           # unit_id
//           discount
//           # created_by
//           # updated_by
//           # is_active
//           unit {
//             id
//             full_name
//             short_name
//             # created_by
//             # updated_by
//             # is_active
//           }
//         }
//       }
//     }
//   }
// `;

const SeasonsTop = () => {
  // const [showloader, setShowloader] = useState(false);
  // const [products, setProducts] = useState([]);
  // const { networkStatus, called, loading, data } = useQuery(allTopdeals);
  // // useEffect(() => {
  // //   setShowloader(true);
  // //   axios.get(get_top_deals).then((response) => {
  // //     setProducts(response.data.data);
  // //     if (response.data.status) {
  // //       setShowloader(false);
  // //     }
  // //     // console.log(response.data.data);
  // //   });
  // // }, []);
  // useEffect(() => {
  //   setShowloader(true);
  //   if (networkStatus === 7) {
  //     console.log("data.get_allTopDeals", data.get_allTopDeals);
  //     setProducts(data.get_allTopDeals);
  //     setShowloader(false);
  //   }
  // }, [networkStatus]);
  return (
    <View>
      <Labels labels={"SEASONS BEST ITEMS"} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.seasonsBestContaineer}
      >
        <VerticalProductCard />
        <VerticalProductCard />
        <VerticalProductCard />
        <VerticalProductCard />
        <VerticalProductCard />
        <VerticalProductCard />
      </ScrollView>
    </View>
  );
};

export default SeasonsTop;

const styles = StyleSheet.create({
  seasonsBestContaineer: {
    padding: 5,
    backgroundColor: "#cdcdcd",
  },
});
