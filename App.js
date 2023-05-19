import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// Components
import Button from "./src/components/commom/Button.tsx";
import Display from "./src/components/Display";
export default function App() {
  const [display, setDisplay] = useState("0");
  const [num1, setNum1] = useState([]);
  const [num2, setNum2] = useState([]);
  const [step, setStep] = useState(1);
  const [opera, setOpera] = useState("");
  function addDigit(n) {
    if (step === 1) {
      if (n === "." && num1.includes(".")) {
        return;
      } else {
        setNum1([...num1, n]);
        setDisplay(num1.join(""));
        console.log(num1);
      }
    }
    if (step === 2) {
      if (n === "." && num2.includes(".")) {
        return;
      } else {
        setNum2([...num2, n]);
        setDisplay(num2.join(""));
      }
    }
  }

  function clearMemory() {
    setStep(1);
    setNum1([]);
    setNum2([]);
    setDisplay("0");
  }
  function setOperation(n) {
    setStep(2);
    setOpera(n);
    setDisplay(n);
  }
  function somar() {
    const result1 = Number(num1.join(""));
    const result2 = Number(num2.join(""));
    let response = 0;
    if (opera === "+") {
      response = result1 + result2;
    } else if (opera === "-") {
      response = result1 - result2;
    } else if (opera === "/") {
      response = result1 / result2;
    } else if (opera === "*") {
      response = result1 * result2;
    }
    setDisplay(response);
  }
  return (
    <View style={styles.container}>
      <Display value={display} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={somar} />
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
