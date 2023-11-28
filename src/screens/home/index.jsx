import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

function Home() {

    const route = useRoute()
    const navigation = useNavigation()

    handleHome = () => {
        navigation.navigate('screenOne')
    }

    return (

        <View style={styles.main}>
            <View style={styles.containerText}>
                <Text style={styles.title}>UNIPAR</Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={handleHome} style={styles.button}>
                    <Text style={styles.textI}>INICIAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}
export default Home;