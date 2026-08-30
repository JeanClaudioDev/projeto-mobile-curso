import {View, Button, FlatList} from "react-native";
import { useRouter } from "expo-router";

const itens = [
  {id: '1', nome: 'Produto A'},
  {id: '2', nome: 'Produto B'}
];

export default function HomeScreen(){
  const router = useRouter();

  return(
    <View style={{flex: 1, padding: 16}}>
      <FlatList
      data={itens}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Button
        title={item.nome}
        onPress={() =>
          router.push({
            pathname: '/detalhe',
            params: {
              id: item.id,
              nome: item.nome,
            },
          })
        }
        />
      )}
      />
    </View>
  );
}