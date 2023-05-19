import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// Components
import Button from "./src/components/commom/Button.tsx";
import Display from "./src/components/Display";
export default function App() {
  const [initialState, setInitialState] = useState({
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  });
  function addDigit(n) {
    if (n === "." && initialState.displayValue.includes(".")) {
      return;
    }
    const cleardisplay =
      initialState.displayValue === "0" || initialState.clearDisplay;
    const currenctValue = cleardisplay ? "" : initialState.displayValue;
    const displayValue = currenctValue + n;
    setInitialState({
      ...initialState,
      clearDisplay: false,
      displayValue: displayValue,
    });
    if (n !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...initialState.values];
      values[initialState.current] = newValue;
      console.log("values", values);
      console.log("newValues", newValue);
      // setInitialState({
      //   ...initialState,
      //   values: values,
      //   displayValue: newValue,
      // });
    }
  }

  function clearMemory() {
    setInitialState({ ...initialState, displayValue: "0" });
  }
  function setOperation() {
    setInitialState({ ...initialState });
    // setDisplayValue('0');
  }
  return (
    <View style={styles.container}>
      {/* <Text>{initialState.displayValue}</Text> */}
      <Display value={initialState.displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onclick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onclick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onclick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onclick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onclick={setOperation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
