import { Text, TextInput, ToastAndroid, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginOne() {
    
    const route = useRoute()
    const navigation = useNavigation()

    const [nome, setName] = useState("");
    const [sNameS, setSNameS] = useState("");

    //FUNÇÃO PARA SALVAR E TRAFEGAR PELO LAYOUT
   async function handleNew() {

            //FUNÇÃO PARA PASSAR PARA PRÓXIMA TELA
        
        const newData = {   
            nome,
            sNameS, 
        }
        navigation.navigate('screenTwo',{sNameS,nome});

        //ASYNC BANCO DE DADOS LOCAL
      await  AsyncStorage.setItem("@savename:names", JSON.stringify(newData));
    ToastAndroid.show('Nome cadastrado com sucesso!', ToastAndroid.SHORT);
    }

    return (

        <View style={styles.main}>

            <View style={styles.containerName}>
                <Text style={styles.name}>Informe seu nome</Text>
                <TextInput onChangeText={setName} value={nome} style={styles.buttonName}></TextInput>
            </View>

            <View style={styles.containerSName}>
                <Text style={styles.sName}>Informe seu Sobrenome</Text>
                <TextInput onChangeText={setSNameS} value={sNameS} style={styles.buttonSName}></TextInput>
            </View>


            <View style={styles.containerButton}>
                <TouchableOpacity onPress={handleNew} style={styles.button}>
                    <Text style={styles.textI}>PRÓXIMO</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default LoginOne;