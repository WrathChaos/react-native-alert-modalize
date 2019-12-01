export const _titleStyle = color => ({
  color,
  width: "90%",
  fontSize: 34,
  fontWeight: "bold",
  textAlign: "center",
  fontFamily: "BurbankBigCondensed-Black",
  shadowRadius: 2,
  shadowOpacity: 0.15,
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
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64
  },
  imageBackgroundStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 64,
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
  }
};
