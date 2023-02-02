import { Container, Logo, BackButton, BackIcon } from "./styles";

import logoImg from "@assets/logo.png";

export function Header() {
  return (
    <Container>
      <BackButton>
        <BackIcon />
      </BackButton>
      <Logo source={logoImg} />
    </Container>
  );
}
