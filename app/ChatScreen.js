import React, { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, Keyboard, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChatBubble from '../components/ChatBubble';
import InputBar from '../components/InputBar';
import ReportCard from '../components/ReportCard';
import styles from '../styles/ChatScreenStyles';

// Import API_ENDPOINT from environment variables
import { API_ENDPOINT } from '@env';

const dummyMessages = [
  { id: '1', from: 'agent', text: 'How can I assist you?', avatar: require('../assets/agent.png') },
  { id: '2', from: 'user', text: "What's my FIRE progress?", avatar: require('../assets/user.png') },
  { id: '3', from: 'agent', text: 'Sure! Here is your progress so far:', avatar: require('../assets/agent.png') },
  { id: '4', from: 'agent', type: 'report', report: {
    goal: '$2,300,000',
    networth: '$200,000',
    monthly: '$3,600',
    retireYear: '2039 (14 years)',
    growthYear: '2030 (5 years)',
    savingsRate: '11%',
    grade: '2045 (20 years)'
  }, avatar: require('../assets/agent.png') },
  { id: '5', from: 'agent', text: 'Would you like to see more?', avatar: require('../assets/agent.png') },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState('');
  const flatListRef = useRef(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now().toString(), from: 'user', text: input, avatar: require('../assets/user.png') };
    setMessages(prev => [...prev, userMessage]);
    const messageToSend = input;
    setInput('');
    Keyboard.dismiss();

    try {
      console.log('Attempting to fetch from:', API_ENDPOINT);

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`API error: ${response.status} ${response.statusText} - ${errorBody}`);
      }

      const agentResponse = await response.json();

      let newAgentMessages = [];
      if (agentResponse.content) {
        newAgentMessages.push({ id: Date.now().toString() + '_text', from: 'agent', text: agentResponse.content, avatar: require('../assets/agent.png') });
      }
      if (agentResponse.report) {
        newAgentMessages.push({ id: Date.now().toString() + '_report', from: 'agent', type: 'report', report: agentResponse.report, avatar: require('../assets/agent.png') });
      }
      
      if (newAgentMessages.length > 0) {
         setMessages(prev => [...prev, ...newAgentMessages]);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      Alert.alert('Error', 'Failed to get response from agent.');
      setMessages((prev) => [...prev, {
        id: Date.now().toString() + '_err',
        from: 'agent',
        text: `Sorry, something went wrong: ${error.message}`,
      }]);
    }
  };

  const handleMic = () => {
    console.log('Microphone button pressed');
  };

  const renderMessage = ({ item }) => {
    if (item.type === 'report') {
      return <ReportCard report={item.report} />;
    }
    return (
      <ChatBubble
        text={item.text}
        isUser={item.from === 'user'}
        avatarSource={item.avatar}
        initials={item.from === 'user' ? 'U' : 'A'}
      />
    );
  };

  // Calculate header height - this might need to be adjusted based on your actual header height
  const headerHeight = 100; // Approximate height based on previous header adjustments

  return (
    <View style={[styles.container, { flex: 1, backgroundColor: '#fff' }]}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? headerHeight : 0}
      >
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderMessage}
            contentContainerStyle={{ paddingBottom: 12 }}
            style={{ flex: 1 }}
          />

          <InputBar
            value={input}
            onChangeText={setInput}
            onSend={handleSend}
            onMic={handleMic}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
} 