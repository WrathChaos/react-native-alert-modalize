import React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Modalize from "react-native-modalize";
import styles from "./AlertModalize.style";

const { width, height } = Dimensions.get("window");

export class AlertModalize extends React.PureComponent {
  modal = React.createRef();

  renderContent = () => {
    return (
      <ImageBackground
        borderTopLeftRadius={64}
        borderTopRightRadius={64}
        resizeMode="stretch"
        style={{ width: "100%", height: "100%", borderRadius: 64 }}
        source={{ uri: "https://i.redd.it/b5d35sruek831.jpg" }}
      >
        <View style={styles.content}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              style={{ height: 125, width: 125, marginBottom: 32 }}
              source={{
                // uri: "https://image.flaticon.com/icons/png/512/867/867843.png",
                // uri: "https://image.flaticon.com/icons/png/512/867/867869.png"
                uri: "https://image.flaticon.com/icons/png/512/867/867829.png"
              }}
            />
            <Text
              style={{
                width: "90%",
                fontSize: 32,
                color: "#fdfdfd",
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              Available Soon :)
            </Text>
            <Text
              style={{
                color: "#f2f2f2",
                fontSize: 14,
                fontWeight: "300",
                margin: 16
              }}
            >
              Sorry about that... Uhmm...How about you check the{" "}
              <Text style={{ fontWeight: "bold" }}>Shop</Text> untill we finish{" "}
              <Text style={{ fontWeight: "bold" }}>Tips & Tricks</Text>
            </Text>
            <TouchableOpacity
              style={{
                padding: 12,
                marginTop: 16,
                borderWidth: 2,
                borderRadius: 16,
                width: width * 0.7,
                borderColor: "#fdfdfd"
              }}
              activeOpacity={0.9}
              onPress={this.closeModal}
            >
              <Text
                style={{
                  color: "#fdfdfd",
                  fontWeight: "800",
                  textAlign: "center"
                }}
              >
                Let's Play!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  };

  onClosed = () => {
    const { onClosed } = this.props;
    if (onClosed) {
      onClosed();
    }
  };

  openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  };

  closeModal = () => {
    if (this.modal.current) {
      this.modal.current.close();
    }
  };

  render() {
    return (
      <Modalize
        borderRadius={64}
        ref={this.modal}
        withHandle={false}
        adjustToContentHeight
        onClosed={this.onClosed}
        modalStyle={{ borderTopLeftRadius: 64, borderTopRightRadius: 64 }}
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}
