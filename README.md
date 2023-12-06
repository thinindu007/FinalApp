# Final App

application is about a ToDo App for the users using React-Native and type script

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/thinindu007/FinalApp.git

2. Install dependencies
    cd project
    npm install

3. Run the application
    npm start or npm run android

## Usage

To use the `UserScreen` component in your TypeScript React Native project, follow these steps:

1. **Installation:**
   - Make sure you have the necessary dependencies installed in your project. You can install them using:

     ```bash
     npm install react-native-image-picker react-native-blob-util react-redux react-native-vector-icons
     ```

2. **Redux Setup:**
   - Ensure that you have Redux set up in your project. If not, follow the [official Redux documentation](https://redux.js.org/introduction/getting-started) for guidance.

3. **Import `UserScreen`:**
   - Import the `UserScreen` component in the file where you want to use it:

     ```tsx
     import UserScreen from '../src/screens/user/User.screen.tsx' (path to your userscreen component);
     ```

4. **Integrate `UserScreen` into your Navigation:**

     ```tsx
     import UserScreen from './path-to-your-UserScreen-component';

     const AppNavigator = createStackNavigator({
       // Other screens...
       User: UserScreen,
     });

     export default createAppContainer(AppNavigator);
     ```

5. **Use in Components:**
   - You can now use the `UserScreen` component in your other TypeScript React Native components. For example:

     ```tsx
     import React from 'react';
     import { View } from 'react-native';
     import UserScreen from './path-to-your-UserScreen-component';

     const App: React.FC = () => {
       return (
         <View>
           {/* Other components */}
           <UserScreen />
         </View>
       );
     };

     export default App;
     ```

6. **Customization:**
   - Customize the appearance and behavior of `UserScreen` by adjusting the styles or modifying the component logic in the `UserScreen.tsx` file.

Now, your `UserScreen` component should be working in your type script React-native project

## Folder Structure

- /src
  - /assets
    - /images
  - /redux
    - /reducer
  - /screens
    - /floormap
    - /login
    - /task
    - /user
- ...




