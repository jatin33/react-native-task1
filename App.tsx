/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const Section: React.FC<{
//   title: string;
// }> = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const remainingTextLength = 280 - text.length;
  const isOverflownLimit = remainingTextLength < 0;
  const isAboutToOverflowLimit = remainingTextLength < 10;

  const getTextInputWidgetStyles = () => {
    if (isOverflownLimit) {
      return {
        input: {
          ...styles.input,
          borderColor: 'red',
          backgroundColor: '#e9967a',
        },
        infoText: {
          color: 'red',
        },
      };
    } else if (isAboutToOverflowLimit) {
      return {
        input: {
          ...styles.input,
          borderColor: '#FFD700',
          backgroundColor: 'lightyellow',
        },
        infoText: {
          color: '#FFD700',
        },
      };
    }

    return {
      input: styles.input,
      infoText: {
        color: 'gray',
      },
    };
  };

  const onChangeTextInput = (text: string) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={getTextInputWidgetStyles()['input']}
        value={text}
        onChangeText={onChangeTextInput}
        multiline={true}
        numberOfLines={8}
      />
      <View style={styles.actions}>
        <Text style={getTextInputWidgetStyles()['infoText']}>
          {remainingTextLength} characters remaining
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 300,
    margin: 12,
    borderWidth: 4,
    borderRadius: 24,
    padding: 10,
    width: 300,
    borderColor: 'gray',
    backgroundColor: 'lightgray',
  },
  actions: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 24,
    margin: 'auto',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
