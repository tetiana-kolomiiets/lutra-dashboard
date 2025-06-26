import { BrowserRouter as Router, Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Sidebar from './components/Sidebar'
import AppRoutes from './Routes'
import ChatWidget from './components/ChatWidget'
// Placeholder for future WebSocket hook
// import useWebSocket from './hooks/useWebSocket'

const App = () => {
  // Example usage for future:
  // const { sendMessage, lastMessage, readyState } = useWebSocket('ws://localhost:YOUR_PORT/ws');
  return (
    <Router>
      <Box sx={{ display: 'flex', height: 'calc(100vh - 16px)', bgcolor: '#fafafa', overflow: 'hidden' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: 'calc(100vh - 32px)', overflow: 'hidden', p: 4, bgcolor: '#fafafa' }}>
          <AppRoutes />
        </Box>
      </Box>
      <ChatWidget />
    </Router>
  )
}

export default App
