import {AssistantOutlined} from '@mui/icons-material/';
import { Avatar, Paper, Stack, Typography } from '@mui/material';

const MessageItem = ({ message, isUser }: { message: string; isUser: boolean }) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent={isUser ? 'flex-end' : 'flex-start'}
            sx={{ mb: 2 }}
        >
            {!isUser && (
                <Avatar sx={{ mr: 1 }}>
                    <AssistantOutlined />
                </Avatar>
            )}
            <Paper
                elevation={isUser ? 0 : 1}
                sx={{
                    maxWidth: '70%',
                    p: 1,
                    borderRadius: isUser ? '16px 16px 0px 16px' : '16px 16px 16px 0px',
                    backgroundColor: isUser ? 'primary.main' : 'background.paper',
                    color: isUser ? 'white' : 'text.primary',
                }}
            >
                <Typography variant="body2">{message}</Typography>
            </Paper>
        </Stack>
    );
}

export default MessageItem;