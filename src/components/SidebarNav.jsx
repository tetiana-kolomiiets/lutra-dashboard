import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';
import ArticleIcon from '@mui/icons-material/Article';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import BarChartIcon from '@mui/icons-material/BarChart';

const navItems = [
  {
    label: 'Posts',
    icon: <ArticleIcon fontSize="small" />,
    sub: 'Daily content performance',
    path: '/posts',
  },
  {
    label: 'Campaigns',
    icon: <RadioButtonCheckedIcon fontSize="small" />,
    sub: 'Paid advertising insights',
    path: '/campaigns',
  },
  {
    label: 'Customers',
    icon: <FolderIcon fontSize="small" />,
    sub: 'Manage clients & data',
    path: '/customers',
  },
  {
    label: 'Analytics',
    icon: <BarChartIcon fontSize="small" />,
    sub: 'AI-powered insights',
    path: '/analytics',
  },
];

const SidebarNav = () => {
  const location = useLocation();
  return (
    <List sx={{ px: 1 }}>
      {navItems.map((item) => (
        <Box key={item.label}>
          <ListItem
            button
            component={Link}
            to={item.path}
            selected={location.pathname === item.path || (item.path === '/' && location.pathname === '')}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              bgcolor: location.pathname === item.path || (item.path === '/' && location.pathname === '') ? 'rgba(233,78,138,0.08)' : 'transparent',
              '&.Mui-selected': {
                bgcolor: 'rgba(233,78,138,0.16)',
              },
              alignItems: 'flex-start',
              minHeight: 48,
            }}
          >
            <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>{item.icon}</ListItemIcon>
            <Box>
              <ListItemText
                primary={<Typography fontWeight={location.pathname === item.path || (item.path === '/' && location.pathname === '') ? 700 : 500} color={location.pathname === item.path || (item.path === '/' && location.pathname === '') ? '#E94E8A' : 'text.primary'}>{item.label}</Typography>}
                secondary={item.sub && <Typography variant="caption" color="text.secondary">{item.sub}</Typography>}
              />
            </Box>
          </ListItem>
        </Box>
      ))}
    </List>
  );
};

export default SidebarNav; 