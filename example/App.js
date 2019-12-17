import React from "react";
import { StatusBar, SafeAreaView, Text } from "react-native";
import Ripple from "react-native-material-ripple";
import AlertModalize from "react-native-alert-modalize";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <AlertModalize ref={ref => (alertModal = ref)} />
        <Ripple
          rippleColor="#fdfdfd"
          rippleDuration={1250}
          rippleContainerBorderRadius={16}
          style={{
            height: 60,
            width: 300,
            bottom: "20%",
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f1af01"
          }}
          onPress={() => alertModal.openModal()}
        >
          <Text
            style={{
              color: "#fdfdfd",
              fontSize: 20,
              fontFamily: "BurbankBigCondensed-Black"
            }}
          >
            Open Modal
          </Text>
        </Ripple>
      </SafeAreaView>
    </>
  );
};

export default App;
