import {
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Labels from "../templates/Labels";
import { useNavigation } from "@react-navigation/native";
import { gql, useQuery } from "@apollo/client";

const CategoruQuery = gql`
  query {
    get_allCategory {
      id
      name
      image
      is_popular
    }
  }
`;
const CategoryLabel = () => {
  return (
    <View style={[styles.categryContaineer, styles.boxShadow, styles.card]}>
      <Image
        style={styles.categoryLabelImage}
        source={require("../../assets/productcategory_fruits.webp")}
      />
      <Text>Fruits</Text>
    </View>
  );
};
const Category = () => {
  const navigator = useNavigation();
  const [catgory, setCatgory] = useState([]);
  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid
  ) => {
    if (Platform.OS === "ios") {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: { width: xOffset, height: yOffset },
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === "android") {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

  generateBoxShadowStyle(-2, 4, "#171717", 0.2, 3, 5, "#171717");
  // const Query = all === true ? CategoruQuery : PopularCategoruQuery;
  const res = useQuery(CategoruQuery);
  console.log('loading',res.loading,res.data);
  // useEffect(() => {
  //   // setShowLoader(true);
  //   // if (networkStatus === 7) {
  //   //   console.log("eoifuh");
  //   //   console.log(data.get_allCategory);
  //   //   // setProductCategory(
  //   //   //   all === true ? data.get_allCategory : data.get_PopularCategory
  //   //   // );
  //   //   // setShowLoader(false);
  //   // }
  // }, [loading]);
  const axios = require("axios");

  const endpoint = "http://localhost:9000/api";
  const headers = {
    "content-type": "application/json",
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDYsImlhdCI6MTY1MjE1ODkxMX0.l5Jzps98vI_-eiIDyVUDMLs3TxU_XxBOi_HQMwv4N_Y"
  };
  const graphqlQuery = {
      "operationName": "get_allCategory",
      "query": `query {
        get_allCategory {
          id
          name
          image
          is_popular
        }
      }`,
  };
  
  const response = axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery
  });
  
  console.log(response.data); // data
  console.log(response.errors); // errors if any
  return (
    <View>
      <Labels labels={"SHOP BY ITEM CATEGORY"} />
        <Text style={{fontSize:30,color:'red',zIndex:99}}>loading</Text>
      <View style={styles.categoryCardHolder}>
        {/* <FlatList
           data={data}
           renderItem={({item}) => <CategoryLabel />}
           keyExtractor={(item) => item.id.toString()}
         /> */}
        {/* {data.map((e, i) => (
          <CategoryLabel />
        ))} */}

{/* <CategoryLabel />
<CategoryLabel />
<CategoryLabel />
<CategoryLabel /> */}

        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => {
            navigator.push("Category");
          }}
        >
          <Text style={styles.moreText}> View More </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryLabelImage: {
    height: 45,
    width: 45,
    marginRight: 5,
  },
  categryContaineer: {
    flexDirection: "row",
    shadowColor: "black",
    height: 40,
    width: 100,
    borderRadius: 5,
    marginBottom: 8,
    // justifyContent:'space-around',
    alignItems: "center",
    padding: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "45%",
    height: 55,
  },
  categoryCardHolder: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  moreButton: {
    borderRadius: 5,
    backgroundColor: "#551a07",
    width: "70%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  moreText: {
    color: "white",
    fontSize: 17,
  },
});
