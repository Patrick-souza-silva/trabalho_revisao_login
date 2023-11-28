import { Text, TextInput, ToastAndroid, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginTwo() {

    const route = useRoute()
    const navigation = useNavigation()

    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();

    const { sNameS} = route.params;
    const { nome} = route.params;

    //FUNÇÃO PARA SALVAR E TRAFEGAR PELO LAYOUT
   async function handleNew() {

            //FUNÇÃO PARA PASSAR PARA PRÓXIMA TELA
        
        const newData = {
            cpf,
            rg,
            sNameS,nome
            
        }
        navigation.navigate('screenLogin', {cpf,rg,sNameS,nome})


        //ASYNC BANCO DE DADOS LOCAL
      await  AsyncStorage.setItem("@saveinfo:INFOS", JSON.stringify(newData));
    ToastAndroid.show('RG e CPF cadastrado com sucesso!', ToastAndroid.SHORT);
    }


    handleBack = () =>{
        navigation.goBack()
    }

    return (

        <View style={styles.main}>

            <View style={styles.containerName}>
                <Text style={styles.name}>Informe seu CPF</Text>
                <TextInput  onChangeText={setCpf} value={cpf} style={styles.buttonName}></TextInput>
            </View>

            <View style={styles.containerSName}>
                <Text style={styles.sName}>Informe seu RG</Text>
                <TextInput onChangeText={setRg} value={rg} style={styles.buttonSName}></TextInput>
            </View>


            <View style={styles.containerButtonVoltar}>

                <TouchableOpacity onPress={handleBack}style={styles.buttonVoltar}>
                    <Text style={styles.textI}>VOLTAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNew} style={styles.button}>
                    <Text style={styles.textI}>PRÓXIMA</Text>
                </TouchableOpacity>


            </View>


        </View>
    )
}
export default LoginTwo;