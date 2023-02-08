import { useState } from "react";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { GroupCard } from "../../components/GroupCard";
import { Container } from "./styles";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera da Rocket"]);
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        //estado que eu quero carregar
        data={groups}
        //extrai um valor único para ser utilizado dentro de cada componente na listagem
        keyExtractor={(item) => item}
        //renderiza o componente
        renderItem={({ item }) => <GroupCard title={item} onPress={() => {}} />}
      />
    </Container>
  );
}
