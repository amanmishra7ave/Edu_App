import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Course")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-course-computer-science-flaticons-flat-flat-icons.png ",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/material-outlined/344/top-menu.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("UserData")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/external-ddara-lineal-color-ddara/344/external-user-data-managements-ddara-lineal-color-ddara.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/office/344/about-us-male--v2.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3771/3771518.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textStyle: {
    textTransform: "uppercase",
    marginBottom: 50,
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});
