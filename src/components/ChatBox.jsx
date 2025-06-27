import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import { useContext, useState } from 'react';
import { useChat } from '../hooks/useChat';
import Stack from '@mui/material/Stack';
import { EMessageSender } from '../types/chatbot';
import { AppContext } from '../context/appContext';

const ChatBox = () => {
  const [input, setInput] = useState('');
  const { customers } = useContext(AppContext);
  const { messages, handleSendMessage, isLoading, scrollRef } = useChat();

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleSendMessage(input);
    setInput('');
  };

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        width: '100%',  
        mt: 4,
        ml: 0, 
        p: 0, 
        borderRadius: 3, 
        boxShadow: 3, 
        alignSelf: 'flex-start',
        minWidth: 350,
      }}
    >
      <Box sx={{ p: 3, pb: 2, display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box sx={{ width: 24, height: 24, mr: 1, color: 'primary.main' }}>
            <ChatIcon sx={{ color: '#E94E8A' }}/>
          </Box>
          <Typography variant="h6" fontWeight={600} color="text.primary">
            Chat with {customers[0].name} Data
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 6, mt: 1 }}>
          Ask a question about {customers[0].name} data 
        </Typography>
      </Box>
      <Box sx={{ maxHeight: 500, overflow: 'auto' }} ref={scrollRef}>
        <Stack direction="column" spacing={2} padding={2}>
          {messages.map((message, index) => {
            if (message.sender === EMessageSender.USER) {
              return (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-end', backgroundColor: '#F8FAFC', borderRadius: 2, padding: 1 }}>
                  <Typography variant="body2" color="text.secondary" alignSelf="flex-end">
                    {message.message}
                  </Typography>
                </Box>
              )
            }

            return (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-start', backgroundColor: 'rgba(233,78,138,0.08)', borderRadius: 2, padding: 1 }}>
                <Typography variant="body2" color="text.secondary" alignSelf="flex-start">
                  {message.message}
                </Typography>
              </Box>
            )
          })}
          {isLoading && <Box variant="body2" color="text.secondary" align="center" sx={{ mb: 6, mt: 1 }}>
            <CircularProgress size={20} />
          </Box>}
        </Stack>
      </Box>
      <Box component="form" onSubmit={handleSend} sx={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #F1F1F1', px: 2, py: 1.5 }}>
        <TextField
          fullWidth
          placeholder="Ask anything..."
          value={input}
          onChange={e => setInput(e.target.value)}
          size="small"
          variant="standard"
          InputProps={{ disableUnderline: true }}
          sx={{ bgcolor: '#F8FAFC', borderRadius: 2, px: 1, mr: 1 }}
        />
        <IconButton color="primary" type="submit" disabled={!input.trim()} sx={{ bgcolor: '#FDE7EF', borderRadius: 2 }}>
          <SendIcon sx={{ color: '#E94E8A' }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatBox; 