import {Button, View} from 'react-native';
import {useCart} from '../contexts/CartContext';

export default function ProdutoScreen() {
    const {adicionar} = useCart();

    return (
        <View style={{flex: 1, padding: 16}}>
            <Button
            title='Adicionar ao carrinho'
            onPress={() =>
                adicionar({
                    id: '1',
                    nome: 'Produto A',
            })
            }
        />
        </View>
    );
}