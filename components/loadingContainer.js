import { View, Text, ActivityIndicator, StyleSheet } from "react-native"

function LoadingContainer(){
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#19a6e3" />
            <Text style={styles.textStyle}>Loading users...</Text>
        </View>
    )
}
export default LoadingContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        fontWeight: "500",
        fontSize: 19
    }
})