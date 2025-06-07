import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  bubbleRow: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'flex-start',
  },
  bubbleRowUser: {
    justifyContent: 'flex-end',
  },
  bubbleRowAgent: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  userBubble: {
    backgroundColor: '#667EEA',
    borderTopRightRadius: 2,
  },
  agentBubble: {
    backgroundColor: '#F3F4F6',
    borderTopLeftRadius: 2,
  },
  userBubbleText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  bubbleText: {
    color: '#1F2937',
    fontSize: 16,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 4,
  }
}); 