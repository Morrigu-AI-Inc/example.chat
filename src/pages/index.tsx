import { OutlinedInput, Stack, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import MessageItem from '@/components/MessageItem';
import { useState, ChangeEvent } from 'react';

const msgs = [
  {
      id: 1,
      text: 'Hello, how can I assist you today?',
      role: 'assistant',
  },
  {
      id: 2,
      text: 'I need help with my account.',
      role: 'user',
  },
];

type UserInputProps = {
  inputValue: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSend: () => void;
}

const UserInput = ({ inputValue, handleInputChange, handleSend }: UserInputProps) => {

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      if(!inputValue.trim()) {
        return;
      }
      handleSend();
    }
  }

  return (
    <Stack>
      <OutlinedInput 
        multiline
        placeholder="Ask Anything..." 
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown}
        endAdornment={
          <Send
            onClick={handleSend}
            sx={{
              color: "text.secondary",
              cursor: "pointer",
            }}
          />
        } 
      />
    </Stack>
  );
}

export default function Home() {
  const [messages, setMessages] = useState(msgs);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  const handleSend = () => {
    // Handle sending the message
    console.log('Sending message:', inputValue);
    setInputValue('');
    // Add the new message to the messages state
    setMessages(prevMessages => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        text: inputValue,
        role: 'user',
      }
    ]);
  }
  
  return (
      <Stack flexGrow={1}>
        <Stack pb={2}>
          <Typography variant="h5" component="h1">
            Messages
          </Typography>
        </Stack>
        <Stack flexGrow={1}>
          {
            messages.map((message) => (
              <MessageItem
                key={message.id}
                message={message.text}
                isUser={message.role === 'user'}
              />
            ))
          }
        </Stack>
        <Stack>
          <UserInput 
            inputValue={inputValue} 
            handleInputChange={handleInputChange} 
            handleSend={handleSend}
          />
        </Stack>
      </Stack>
  );
}
