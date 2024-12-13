import { View, StyleSheet, ActivityIndicator, Text, TextInput } from "react-native";
import { getUsers } from "../https";
import { useState, useEffect, useLayoutEffect } from "react";
import List from "../components/list";
import LoadingContainer from "../components/loadingContainer";
import { color } from "../consts/colors";
import CustomButton from "../components/customButton";


function UserList({navigation}) {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); // Handles initial loading state
  const [isLoading, setIsLoading] = useState(false); // Prevents multiple requests while loading
  const [hasMore, setHasMore] = useState(true); // Handles whether there are more users to load
  const [page, setPage] = useState(1); // Page state for pagination
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [sort, setSort] = useState(false);

  async function loadUsers() {
    if (isLoading && !hasMore) return; // Prevent multiple simultaneous requests

    setIsLoading(true);
    try {
      const response = await getUsers(page); // Fetch users from API
      const newUsers = response.data;

      // If fewer than 5 users are returned, we assume there are no more users
      if (newUsers.length < 5) {
        setHasMore(false);
      }

      // Append the newly fetched users to the existing list
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);

      

      // Stop showing the loading spinner after fetching data
      setLoading(false);
    } catch (error) {
      console.log("Error loading users:", error);
      setLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  

  useEffect(() => {
    loadUsers(); // Fetch users when the page changes
    navigation.setOptions({
      headerRight: (()=> <CustomButton onPressProp={()=> setSort(!sort)}>Sort</CustomButton>)
    })
  }, [page]);

  useEffect(() => {
    if (sort) {
      setUsers((prevList) => [...prevList].sort((a, b) => a.name.localeCompare(b.name)));
    }
  }, [sort]); 
  

  const handleEndReached = () => {
    if (hasMore && !isLoading) {
      setPage((prevPage) => prevPage + 1); // Increment page number to load next set of users
    }
  };

  // Filter users based on the search query
  //If there’s no search query (empty string), filteredUsers will contain all users, because the filter will match all names
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Footer component to display loading indicator or message when no more data
  const footerComponent = () => {
    return (
      isLoading ? (
        <ActivityIndicator size="large"  color="red"/>
        
      ) : (
        !hasMore && <Text>No more users available</Text>
      )
    );
  };


  return (
    
    <View style={styles.container}>
      {loading ? (
        <LoadingContainer /> // Show a full screen loading indicator before users are loaded
      ) : (
        <>
          {/* Search Box */}
          <TextInput
            style={styles.searchBox}
            placeholder="Search user by name"
            value={searchQuery}
            onChangeText={setSearchQuery} // Update search query as the user types
          />
          <List
            users={filteredUsers} // Show only filtered users
            onEndReachedProp={handleEndReached} // Triggered when end of list is reached
            ListFooterComponentProp={footerComponent} // Show footer component with loading state or no more users
          />
        </>
      )}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.grey200,
  },
  searchBox: {
    width: "90%", // Take most of the screen width
    height: 50,
    borderColor: color.blue200,
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft: 15,
    marginTop: 20,
    fontSize: 16,
    backgroundColor: "#fff", // White background for search input
  },
});

export default UserList;
