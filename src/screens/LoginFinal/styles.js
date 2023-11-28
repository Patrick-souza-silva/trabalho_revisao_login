import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 10,
        flex: 1,
      },
    containerButtonVoltar:{
        height: "30%",
        width: "100%",
        alignItems: "center",
        flexDirection:"row",
        paddingHorizontal:10,
        justifyContent:"space-between",
        marginTop:100
      },
      buttonVoltar:{
        height: 45,
        width: 150,
        backgroundColor: "#860929",
        borderRadius: 10,
        justifyContent: "center",
      },
      textI: {
        textAlign: "center",
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
      },
      button: {
        height: 45,
        width: 150,
        backgroundColor: "#01633D",
        borderRadius: 10,
        justifyContent: "center",
      },

      containerInfoPessoal:{
        width:'100%',
        height:'10%',
        paddingHorizontal:25,
        marginTop:100
      },
      textIn:{
        fontSize:20,
        fontWeight:"bold",

      },
      containerInfoCPF:{
        width:'100%',
        height:'10%',
        paddingHorizontal:25,
        alignItems:"center",
        marginTop:50

    },
      containerInfoRG:{
        width:'100%',
        height:'10%',
        paddingHorizontal:25,
        alignItems:"center",
        marginTop:50


      },
      cpfrg:{
        fontSize:40,
        fontWeight:"bold"
      },
      resul:{
            fontSize:20,
            fontWeight:"bold",
            color:'#6F6B73'
      }
})