import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, Platform, ImageBackground } from "react-native";
import Modalize from "react-native-modalize";
import Ripple from "react-native-material-ripple";
import styles, {
  _titleStyle,
  _descStyle,
  _buttonTextStyle
} from "./AlertModalize.style";

export default class AlertModalize extends React.PureComponent {
  modal = React.createRef();

  renderContent = () => {
    const {
      title,
      descStyle,
      buttonText,
      titleStyle,
      description,
      imageSource,
      descTextColor,
      titleTextColor,
      descFontFamily,
      buttonTextColor,
      buttonTextStyle,
      titleFontFamily,
      buttonFontFamily,
      imageBackgroundSource
    } = this.props;

    return (
      <ImageBackground
        borderTopLeftRadius={64}
        borderTopRightRadius={64}
        source={imageBackgroundSource}
        style={styles.imageBackgroundStyle}
        resizeMode={Platform.OS === "android" ? "cover" : "stretch"}
      >
        <View style={styles.container}>
          <View style={styles.containerGlue}>
            <Image style={styles.imageStyle} source={imageSource} />
            <Text
              style={titleStyle || _titleStyle(titleTextColor, titleFontFamily)}
            >
              {title}
            </Text>
            <Text
              style={descStyle || _descStyle(descTextColor, descFontFamily)}
            >
              {description}
            </Text>
            <Ripple
              activeOpacity={0.9}
              rippleColor="#fdfdfd"
              rippleDuration={1250}
              rippleContainerBorderRadius={16}
              style={styles.buttonStyle}
              onPress={this.closeModal}
              {...this.props}
            >
              <Text
                style={
                  buttonTextStyle ||
                  _buttonTextStyle(buttonTextColor, buttonFontFamily)
                }
              >
                {buttonText}
              </Text>
            </Ripple>
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
  buttonText: PropTypes.string,
  descTextColor: PropTypes.string,
  titleTextColor: PropTypes.string,
  descFontFamily: PropTypes.string,
  titleFontFamily: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonFontFamily: PropTypes.string
};

AlertModalize.defaultProps = {
  descTextColor: "#f2f2f2",
  titleTextColor: "#fdfdfd",
  buttonTextColor: "#fdfdfd",
  title: "Available Soon :)",
  buttonText: "What's in the shop?",
  imageBackgroundSource: {
    uri: "https://i.redd.it/b5d35sruek831.jpg"
  },
  imageSource: require("../local-assets/razor.png"),
  description:
    "Sorry about that... Uhmm... How about you check the Shop until we finish the Tips & Tricks"
};
