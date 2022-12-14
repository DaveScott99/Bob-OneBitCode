import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function CreateHabit({ habitArea, borderColor }) {

    function handlerCreate(){
        console.log(`Botão da área clicado ${habitArea}`);
    }

    return(

        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, { borderColor: borderColor}]}
            onPress={handlerCreate}
        >
            <Text style={styles.habitTitle}>
                Adicionar meta {habitArea === "Mente" ? "da" : "do"} {habitArea}
            </Text>
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    button: {
        width: 315,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderStyle: "dotted",
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    habitTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
})