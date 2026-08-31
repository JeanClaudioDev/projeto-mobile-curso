import { View, Text} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DatalheScreen() {
    const {id, nome} = useLocalSearchParams();
    return(
        <View style={{flex: 1, padding: 16}}>
            <Text style={{fontSize: 22}}>{nome}</Text>
        </View>
    );
}