import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-elements';

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

const users = [
  {
    name: 'brynn',
    avatar: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-10-datos-curiosos-sobre-los-gatos.png?itok=88pMyzkl',
  },
  {
    name: 'brynn',
    avatar: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-10-datos-curiosos-sobre-los-gatos.png?itok=88pMyzkl',
  },
  {
    name: 'brynn',
    avatar: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-10-datos-curiosos-sobre-los-gatos.png?itok=88pMyzkl',
  },
  {
    name: 'brynn',
    avatar: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-10-datos-curiosos-sobre-los-gatos.png?itok=88pMyzkl',
  },
  // more users here
];

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 600, height: 240, resizeMode: 'stretch'}}
        source={{
          uri: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-10-datos-curiosos-sobre-los-gatos.png?itok=88pMyzkl',
        }}
      />
      <Text>
        El gato doméstico (Felis silvestris catus), llamado popularmente gato es
        un mamífero carnívoro de la familia Felidae. Es una subespecie
        domesticada por la convivencia con el ser humano. El nombre actual en
        muchas lenguas proviene del latín vulgar catus. Irónicamente, catus
        aludía a los gatos salvajes, mientras que los gatos domésticos, en
        latín, eran llamados felis.
      </Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return(
  <Card>
    <Card.Title>CARD WITH DIVIDER</Card.Title>
    <Card.Divider />
    {users.map((u, i) => {
      return (
        <View key={i}>
          <Image style={{width: 600, height: 240, resizeMode: 'stretch'}} resizeMode="cover" source={{uri: u.avatar}} />
          <Text>{u.name}</Text>
        </View>
      );
    })}
  </Card>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="GATOS"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="DIVERSOS GATOS"
        component={Notifications}
        options={{
          tabBarLabel: 'Gatos',
          tabBarIcon: ({color, size}) => (
            <Icon name="paw" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SOBRE MI"
        component={Profile}
        options={{
          tabBarLabel: 'Acerca',
          tabBarIcon: ({color, size}) => (
            <Icon name="male" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
