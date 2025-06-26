import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import SidebarNav from './SidebarNav';
import lutraImg from '../assets/lutra.png';

const drawerWidth = 260;

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
        borderRight: 'none',
        bgcolor: '#fff',
        pt: 2,
      },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', px: 3, mb: 2 }}>
      <Avatar src={lutraImg} sx={{ width: 36, height: 36, mr: 1 }} />
      <Box>
        <Typography variant="subtitle1" fontWeight={700} sx={{ lineHeight: 1 }}>
        Dashboard
        </Typography>
        <Typography variant="caption" color="text.secondary">
        Lutra Digital
        </Typography>
      </Box>
    </Box>
    <Divider sx={{ mb: 1 }} />
    <SidebarNav />
  </Drawer>
);

export default Sidebar; 