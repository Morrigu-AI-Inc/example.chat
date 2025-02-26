import { OutlinedInput, Stack, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import MessageItem from '@/components/MessageItem';

const messages = [
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

const UserInput = () => {
  return (
    <Stack>
      <OutlinedInput placeholder="Ask Anything..." endAdornment={
        <Send
          sx={{
            color: "text.secondary",
            cursor: "pointer",
          }}
        />
      } />
    </Stack>
  );
}

export default function Home() {
  return (
      <Stack flexGrow={1}>
        <Stack pb={2}>
          <Typography variant="h2" component="h1">
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
          <UserInput />
        </Stack>
      </Stack>
  );
}