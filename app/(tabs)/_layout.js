import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useColorScheme, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function TabImage(props) {
  return <Image source={props.source} style={{ width: 28, height: 28, marginBottom: -3 }} />;
}

function CustomHeader({ avatarSource, networth, onMenuPress }) {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.avatarContainer}>
        <Image source={avatarSource} style={headerStyles.avatar} />
      </View>
      <View style={headerStyles.infoContainer}>
        <Text style={headerStyles.networthValue}>{networth}</Text>
        <Text style={headerStyles.networthLabel}>Your networth</Text>
      </View>
      <TouchableOpacity onPress={onMenuPress} style={headerStyles.menuButton}>
        <FontAwesome name="ellipsis-h" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  avatarContainer: {
    marginRight: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  infoContainer: {
    marginRight: 'auto',
  },
  networthValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  networthLabel: {
    fontSize: 12,
    color: '#000',
    opacity: 0.7,
  },
  menuButton: {
    padding: 8,
  },
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#667EEA',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerStyle: {
          backgroundColor: '#E0F7FA',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: 100,
        },
        headerShadowVisible: false,
        headerTitleContainerStyle: {
          left: 0,
          right: 0,
          paddingHorizontal: 16,
          paddingBottom: 10,
          flex: 1,
        },
        headerTitleAlign: 'left',
      }}
      initialRouteName="chat"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <TabImage source={require('../../assets/agent.png')} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <TabBarIcon name="th" color={color} />,
        }}
      />
    </Tabs>
  );
} 