# User Directory App

## Project Overview

The User Directory App is a mobile application built using React Native. It fetches user data from an external API and displays a list of users. Users can tap on a user to view more detailed information on a separate screen. The app features dynamic navigation, infinite scrolling, sorting, searching, and a collapsible accordion for additional information.

The app is built using **React Navigation** with a stack navigator for seamless navigation between screens. The design is optimized for performance and usability, with features like infinite scroll, dynamic headers, and a loading indicator during API calls.

---

## Features

- **Infinite Scroll**: The app fetches a batch of 5 users at a time, loading more users as you scroll to the end of the list.
- **Dynamic Header**: The header on the user detail screen updates dynamically based on the selected user.
- **Search Functionality**: A search bar allows users to search for a specific user by name.
- **Sorting**: The list of users can be sorted alphabetically by name.
- **User Details**: Tapping on a user opens a detailed screen with additional information, including:
  - Name
  - Address
  - Company
  - A collapsible accordion to show more details
- **Profile Pictures**: Each user has a profile picture fetched from the API.
- **Loading Indicator**: A loading spinner is displayed while user data is being fetched from the API.
  
---

## Folder Structure

- **assets/**: Contains the splash screen icon and app icon.
- **constants/**: Stores constant values such as colors used across different components.
- **screens/**: Contains the main screens of the app:
  - **UserListScreen**: Displays the list of users.
  - **UserDetailScreen**: Displays detailed information for a selected user.
- **components/**: Houses reusable components to improve code readability and maintainability:
  - **CustomButton**: A button component used for sorting the user list.
  - **Info**: Displays the user's name, address, company, and includes the accordion feature for extra data.
  - **UserItem**: A component to display each user's profile and name in the list.
  - **LoadingContainer**: Displays a loading spinner when fetching data.

---

## File Details

- **https.js**: Contains the function to fetch data from the API and pass it to the UserListScreen.
- **UserListScreen.js**: Displays the list of users with infinite scroll, search, and sort functionality.
- **UserDetailScreen.js**: Displays detailed information for a selected user, with a dynamic header and an accordion for extra details.

---


