import { Pressable, Text, StyleSheet } from "react-native";

function CustomButton({onPressProp, children}){
    return(
        <Pressable onPress={onPressProp} style={styles.container}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 3,
        borderColor: "white",
        padding: 5,
        marginRight: 19,

    },
    textStyle: {
        fontWeight: "500",
        color: "white"
    }
})