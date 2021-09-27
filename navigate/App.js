import * as React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

const users = [
  {
    name: 'Siames',
    avatar:
      'https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/04/siames-scaled.jpg?fit=2560%2C1707&ssl=1',
  },
  {
    name: 'Persa',
    avatar:
      'https://static.affinity-petcare.com/advance/cdn/farfuture/jLkk-vpOyiyXVaGRuPOwI4hNqbhNTXZUaYevX0hUBh8/drupal-cache:qvko3p/sites/default/files/field/image/cuidados_gato_persa.jpg',
  },
  {
    name: 'Angora',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-a-white-turkish-angora-cat-picture-id1140917170?k=20&m=1140917170&s=612x612&w=0&h=czECGOY2vpHjBk2fEz3UAOaolOue0cAjIUgg5qNnq1c=',
  },
  {
    name: 'Esfinge',
    avatar:
      'https://noticiasrealessv.com/wp-content/uploads/2020/04/Gato-Sphynx-o-gato-esfinge-1.jpg',
  },
  // more users here
];

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card style={{height: 500}}>
        <Card.Title>Francisco José Valle Cornejo-VC190544</Card.Title>
        <Card.Divider />
        <Image
          style={{width: 300, height: 300}}
          resizeMode="cover"
          source={{
            uri: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-10-datos-curiosos-sobre-los-gatos.png?itok=88pMyzkl',
          }}
        />
        <Text style={{marginBottom: 10}}>
          El gato doméstico (Felis silvestris catus), llamado popularmente gato
          es un mamífero carnívoro de la familia Felidae. Es una subespecie
          domesticada por la convivencia con el ser humano. El nombre actual en
          muchas lenguas proviene del latín vulgar catus. Irónicamente, catus
          aludía a los gatos salvajes, mientras que los gatos domésticos, en
          latín, eran llamados felis.
        </Text>
      </Card>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card style={{height: 500}}>
        <Card.Title>Francisco José Valle Cornejo-VC190544</Card.Title>
        <Card.Divider />
        <Image
          style={{width: 300, height: 300}}
          resizeMode="cover"
          source={{
            uri: 'https://www.cescovalle.com/img/practice_3_MEJOR-min.jpg',
          }}
        />

        <Text style={{marginBottom: 10}}>
          Estudiante de Ingenieria en Ciencias de la Computación
        </Text>
      </Card>
    </View>
  );
}

function Notifications() {
  return (
    <ScrollView>
      <SafeAreaProvider>
        <Card>
          <Card.Title>Diferentes Razas</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i}>
                <Image
                  style={{width: 300, height: 180}}
                  resizeMode="cover"
                  source={{uri: u.avatar}}
                />
                <Text style={{textAlign: 'center', fontSize: 15}}>
                  {u.name}
                </Text>
              </View>
            );
          })}
        </Card>
      </SafeAreaProvider>
    </ScrollView>
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
