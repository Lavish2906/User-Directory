import { View, Text, StyleSheet, Image } from "react-native"
import Info from "../components/info";
import { useLayoutEffect } from "react";

function UserDetails({ route, navigation }) {

    const userData = route.params.userData
    const userId = route.params.userId;

    useLayoutEffect(()=> {
        const name = userData.name;
        navigation.setOptions({
            title: name
        })
    }, [navigation, userData])

    // console.log(userData, userId);
    // display the name , email , address, comany name, city street and zip for the address

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={{uri:`https://picsum.photos/id/${userId + 20}/200/300` }} />
            </View>
            <View style={styles.infoContainer}> 
                <Info name="person">{userData.name}</Info>
                <Info name="mail">{userData.email}</Info>
                <Info name="business" extraInfo={userData.company.catchPhrase }>{userData.company.name}</Info>
                <Info name="home" extraInfo={userData.address.street +", " + userData.address.zipcode }>{userData.address.city}</Info>
            </View>
        </View>
    )
}
export default UserDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    imageContainer: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 120,
        overflow:"hidden",
        marginBottom: 20,
    },
    imageStyle: {
        width: "100%",
        height: "100%"
    },
    infoContainer: {
        width: "90%"
    }
})