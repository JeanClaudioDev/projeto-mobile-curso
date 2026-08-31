import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

type Usuario = {
  id: number;
  name: string;
  email: string;
};

export default function ListaScreen() {
  const [dados, setDados] = useState<Usuario[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro na resposta da API');
        }

        return res.json();
      })
      .then((json) => setDados(json))
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) {
    return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  }

  if (erro) {
    return (
      <Text style={{ padding: 16 }}>
        Ocorreu um erro: {erro}
      </Text>
    );
  }

  return (
    <FlatList
      data={dados}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ padding: 12 }}>
          <Text style={{ fontWeight: 'bold' }}>
            {item.name}
          </Text>

          <Text>{item.email}</Text>
        </View>
      )}
    />
  );
}