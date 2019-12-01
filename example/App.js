import React from "react";
import { StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import { AlertModalize } from "./lib/src/AlertModalize";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AlertModalize ref={ref => (alertModal = ref)} />
        <TouchableOpacity
          style={{ height: 60, width: 300, backgroundColor: "#f1af01" }}
          onPress={() => alertModal.openModal()}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
