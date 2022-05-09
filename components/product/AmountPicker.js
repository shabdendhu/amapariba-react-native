// import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const AmountPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View>
              <TouchableOpacity style={styles.amountCard}>
                <Text>1Kg</Text>
                <Text style={styles.amountCardPriceTxt}>₹30 ₹40</Text>
              </TouchableOpacity>
            </View>
            <Pressable
              style={styles.closeModalBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign style={styles.closeIcon} name="close" />
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>1Kg</Text>
        <AntDesign name="down" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    // width:2
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    // padding: 10,
    elevation: 2,
    width: 130,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonOpen: {
    borderColor: "gray",
    backgroundColor: "white",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  closeModalBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  closeIcon: {
    color: "white",
  },
  checkbox: {
    alignSelf: "center",
  },
  amountCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    backgroundColor: "#dfdfdf",
    marginBottom: 10,
    padding: 6,
    borderRadius: 5,
  },
  amountCardPriceTxt: {
    color: "green",
    fontWeight: "bold",
  },
});

export default AmountPicker;
