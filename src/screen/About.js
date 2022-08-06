import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Aman Mishra</Text>
      <Text style={styles.paraStyle}>
        {" "}
        I am a Full stack Developer and App developer 👨‍💻
      </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          }}
        />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About me </Text>
        <Text style={styles.paraStyle}>
          content Summarize your professional standing. The first sentence of
          your self-introduction should include your name and job title or
          experience.
        </Text>
      </View>

      <Text style={styles.mainHeader}>Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(" https://www.linkedin.com/in/aman-mishra-450/")
                }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://img.icons8.com/color/344/linkedin-circled--v3.png",
            }}
          />
        </TouchableOpacity>

        {/* 2nd */}

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://github.com/amanmishra7ave")
                }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://img.icons8.com/glyph-neue/344/github.png",
            }}
          />
        </TouchableOpacity>

        {/* 3rd */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/channel/UCldq1bZxhcJbkVm3Tv5ip4")
                }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn.iconscout.com/icon/free/png-64/youtube-268-721990.png ",
            }}
          />
        </TouchableOpacity>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({

    aboutContainer: {
        display: "flex",
        alignItems: "center",
      },
    
      imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
      },
      mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 50,
        marginBottom: 10,
        fontFamily: "JosefinSans_700Bold",
      },
      paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 30,
      },
      aboutLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginVertical: 30,
      },
      aboutSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        fontFamily: "JosefinSans_700Bold",
        alignSelf: "center",
      },
      aboutPara: {
        color: "#fff",
      },
      menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
      },
    
      iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
      },

});

export default About;
