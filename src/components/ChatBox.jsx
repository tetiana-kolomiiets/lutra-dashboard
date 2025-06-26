import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import { useState } from 'react';

const ChatBox = () => {
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    // Placeholder for sending message
    setInput('');
  };

  return (
    <Paper elevation={2} sx={{ width: '100%',  mt: 4, ml: 0, p: 0, borderRadius: 3, boxShadow: 3, alignSelf: 'flex-start',  }}>
      <Box sx={{ p: 3, pb: 2, display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box sx={{ width: 24, height: 24, mr: 1, color: 'primary.main' }}>
            <ChatIcon sx={{ color: '#E94E8A' }}/>
          </Box>
          <Typography variant="h6" fontWeight={600} color="text.primary">
            Chat with Your Data
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 6, mt: 1 }}>
          Ask a question about your data, e.g., "Which customer had the highest spend last month?"
        </Typography>
      </Box>
      {/* Message area (empty for now) */}
      <Box sx={{ minHeight: 120, px: 3 }} />
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