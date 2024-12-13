import { View, Text, StyleSheet, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { color } from "../consts/colors"
import { useState } from "react"

function Info({ name, children, extraInfo }) {
    const [expand, setExpand] = useState(false)

    function expandItemHnadler() {
        setExpand(!expand)
    }

    return (

        <View style={styles.container}>
            <View style={styles.subContainer}>
            <Ionicons size={19} name={name} />
            <Text style={styles.textStyle}>{children}</Text>
            {extraInfo ?
                <View style={styles.arrowStyle}>
                    <Pressable onPress={expandItemHnadler} >
                        <Ionicons name={expand ? "chevron-up" : "chevron-down" } size={25} />
                    </Pressable>
                </View>
                : null}
            </View>
                {expand ? 
                    <View style={styles.extraInfoContainer}>
                        <Text>{extraInfo}</Text> 
                    </View>
                    : null}
            
        </View>
    )
}
export default Info

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: color.blue200,
        padding: 10,
        
        marginVertical: 7,
        borderRadius: 15,

    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 19,
        paddingLeft: 10,
        fontWeight: "500"
    },
    arrowStyle: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        // backgroundColor: "red"
    },
    extraInfoContainer: {
        
        paddingLeft: 40,
        paddingVertical: 7
    }

})