import { FlatList, View, StyleSheet, Text } from "react-native"
import UserItem from "./userItem"

function List({users, onEndReachedProp, ListFooterComponentProp }){

    function handleUsersList({item}){
        return(
            <UserItem data={item}/>
        )
    }
    return(
        <FlatList onEndReached={onEndReachedProp} onEndReachedThreshold={0.0001} style={{margin: 20, width: "85%"}} data={users} renderItem={handleUsersList} keyExtractor={(item)=> item.id} ListFooterComponent={ListFooterComponentProp}/>
    )
}
export default List