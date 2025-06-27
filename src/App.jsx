import { BrowserRouter as Router } from 'react-router-dom';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import AppRoutes from './Routes';
import ChatWidget from './components/ChatWidget';
import { useApp } from './useApp';
import { AppContext } from './context/appContext';

const App = () => {
  return (
    <AppContext.Provider value={useApp()}>
      <Router basename="/lutra-dashboard">
        <Box
          sx={{
            display: 'flex',
            height: 'calc(100vh - 16px)',
            bgcolor: '#fafafa',
            overflow: 'hidden',
          }}
        >
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100vh - 32px)',
              overflow: 'hidden',
              p: 4,
              bgcolor: '#fafafa',
            }}
          >
            <AppRoutes />
          </Box>
        </Box>
        <ChatWidget />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
