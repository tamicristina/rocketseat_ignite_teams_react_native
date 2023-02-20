import { TextInputAndroidProps } from "react-native";
import { Container } from "./styles";

export function Input({ ...rest }: TextInputAndroidProps) {
  return <Container {...rest} />;
}
