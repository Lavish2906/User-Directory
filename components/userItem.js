import { View, Text, Pressable, StyleSheet, Image } from "react-native"
import { color } from "../consts/colors"
import { useNavigation } from "@react-navigation/native"


function UserItem({ data }) {
    const navigation = useNavigation()
    const userId = data.id

    function userPressHandler(){
        navigation.navigate("userDetails", {
            userData : data,
            userId: userId
        })
    }

    return (
        <Pressable style={({pressed})=> [styles.container, pressed ? styles.pressedStyle : null]} onPress={userPressHandler}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={{ uri: `https://picsum.photos/id/${data.id + 20}/200/300` }} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.nameStyle}>{data.name}</Text>
                <Text style={styles.addressStyle}>{data.email}</Text>

            </View>
        </Pressable>
    )
}
export default UserItem

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        borderRadius: 6,
        marginVertical: 12,
        elevation: 4,
        flexDirection: "row",
        overflow: "hidden",
        // padding: 9,
        backgroundColor: color.blue200,
        justifyContent: "center"

    },
    imageStyle: {
        alignSelf: "center",
        borderBottomLeftRadius: 6,
        borderTopLeftRadius: 6,
        height: 100,
        width: 100,

    },
    infoContainer: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    nameStyle: {
        fontWeight: "bold",
        fontSize: 19
    },
    addressStyle: {
        fontWeight: "400"
    },
    imageContainer: {
        backgroundColor: "white",
        alignSelf: "center",
        padding: 2
    },
    pressedStyle: {
        opacity: 0.5
    }

})