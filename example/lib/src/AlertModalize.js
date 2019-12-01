import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Modalize from "react-native-modalize";
import styles, { _titleStyle } from "./AlertModalize.style";

const { width, height } = Dimensions.get("window");

export class AlertModalize extends React.PureComponent {
  modal = React.createRef();

  renderContent = () => {
    const {
      title,
      titleStyle,
      imageSource,
      titleTextColor,
      imageBackgroundSource
    } = this.props;

    return (
      <ImageBackground
        borderTopLeftRadius={64}
        borderTopRightRadius={64}
        resizeMode="stretch"
        style={styles.imageBackgroundStyle}
        source={imageBackgroundSource}
      >
        <View style={styles.container}>
          <View style={styles.containerGlue}>
            <Image
              style={styles.imageStyle}
              source={require("../../assets/forti.png")}
            />
            <Text style={titleStyle || _titleStyle(titleTextColor)}>
              {title}
            </Text>
            <Text
              style={{
                margin: 16,
                width: 325,
                fontSize: 16,
                color: "#f2f2f2",
                fontWeight: "300",
                fontFamily: "BurbankBigCondensed-Black",
                shadowRadius: 2,
                shadowOpacity: 0.1,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3
                }
              }}
            >
              Sorry about that... Uhmm... How about you check the{" "}
              <Text
                style={{
                  fontSize: 26,
                  color: "#ededed"
                }}
              >
                Shop
              </Text>{" "}
              untill we finish{" "}
              <Text
                style={{
                  fontSize: 26,
                  color: "#ededed"
                }}
              >
                Tips & Tricks
              </Text>
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
                  fontSize: 18,
                  color: "#fdfdfd",
                  textAlign: "center",
                  fontFamily: "BurbankBigCondensed-Black",
                  shadowRadius: 1,
                  shadowOpacity: 0.1,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3
                  }
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
        modalStyle={styles.modalStyle}
        {...this.props}
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}

AlertModalize.propTypes = {
  title: PropTypes.string,
  titleTextColor: PropTypes.string
};

AlertModalize.defaultProps = {
  title: "Available Soon :)",
  titleTextColor: "#fdfdfd",
  imageBackgroundSource: {
    uri: "https://i.redd.it/b5d35sruek831.jpg"
  },
  imageSource: {
    uri: "https://image.flaticon.com/icons/png/512/867/867829.png"
  }
};
