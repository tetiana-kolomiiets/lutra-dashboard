import { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import Modal from '@mui/material/Modal';
import ChatBox from './ChatBox';
import Grow from '@mui/material/Grow';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          bgcolor: '#E94E8A',
          color: '#fff',
          zIndex: 1300,
          boxShadow: 3,
          '&:hover': { bgcolor: '#E94E8A' },
        }}
      >
        <ChatIcon />
      </Fab>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ zIndex: 1400, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}
        slotProps={{ backdrop: { sx: { backgroundColor: 'transparent' } } }}
        closeAfterTransition
      >
        <Grow in={open} timeout={350} style={{ transformOrigin: 'bottom right' }}>
          <Box sx={{ outline: 'none', mb: 10, mr: 4 }}>
            <ChatBox />
          </Box>
        </Grow>
      </Modal>
    </>
  );
};

export default ChatWidget; 