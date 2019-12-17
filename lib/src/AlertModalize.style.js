import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export const _titleStyle = (color, fontFamily) => ({
  color,
  fontFamily,
  width: "90%",
  fontSize: 34,
  textAlign: "center",
  shadowRadius: 2,
  shadowOpacity: 0.15,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3
  }
});

export const _descStyle = (color, fontFamily) => ({
  color,
  fontFamily,
  margin: 16,
  width: 325,
  fontSize: 17,
  textAlign: "center",
  shadowRadius: 2,
  shadowOpacity: 0.1,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3
  }
});

export const _buttonTextStyle = (color, fontFamily) => ({
  color,
  fontFamily,
  fontSize: 18,
  textAlign: "center",
  shadowRadius: 1,
  shadowOpacity: 0.1,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3
  }
});

export default {
  container: {
    padding: 24,
    height: 450,
    alignItems: "center",
    justifyContent: "center"
  },
  modalStyle: {
    backgroundColor: "transparent"
  },
  imageBackgroundStyle: {
    width: "100%",
    height: "100%",
    marginBottom: 16
  },
  containerGlue: {
    alignItems: "center",
    justifyContent: "center"
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginBottom: 24
  },
  buttonStyle: {
    padding: 12,
    marginTop: 16,
    borderWidth: 2,
    borderRadius: 16,
    width: width * 0.7,
    borderColor: "#fdfdfd"
  }
};
