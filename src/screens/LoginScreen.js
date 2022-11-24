import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const onSubmit = () => {
    setSubmit((prevState) => !prevState);
  };

  useEffect(() => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("가입");
        const user = userCredential.user;
      })
      .catch((e) => {
        console.log(`Error : ${e}`);
      });
  }, [submit]);

  return (
    <>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Button onPress={onSubmit}>버튼</Button>
    </>
  );
};

export default LoginScreen;
