import { Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";




function LoginFinal() {

    //FUNÇÃO QUE VAI TRAZER AS INFOS SALVAR 
    async function handleFetchData() {
        const response = await AsyncStorage.getItem("@saveinfo:INFOS");
        console.log(response);
    }
    useEffect(() => {
        handleFetchData();
    }, [])

    const route = useRoute()
    const navigation = useNavigation()

    const { rg} = route.params;
    const { cpf} = route.params;
    const { nome} = route.params;
    const { sNameS} = route.params;

    handleHome = () => {
        navigation.navigate('home')
    }

    handleBack = () => {
        navigation.goBack()
    }   

    return (
        <View style={styles.main}>

            <View style={styles.containerInfoPessoal}>
                <Text style={styles.textIn}>Olá, {nome} {sNameS} </Text>
                <Text style={styles.textIn}>Portador do documento</Text>
            </View>
            <View style={styles.containerInfoCPF}>
                <Text style={styles.cpfrg}>CPF</Text>
                <Text  style={styles.resul}>{cpf}</Text>
            </View>
            <View style={styles.containerInfoRG}>
                <Text style={styles.cpfrg}>RG</Text>
                <Text style={styles.resul}>{rg}</Text>
            </View>

            <View style={styles.containerButtonVoltar}>

                <TouchableOpacity onPress={handleBack} style={styles.buttonVoltar}>
                    <Text style={styles.textI}>VOLTAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleHome} style={styles.button}>
                    <Text style={styles.textI}>FINALIZAR</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}
export default LoginFinal;