import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const platformColors = {
    facebook: { color: '#1976d2', bgcolor: '#e3f0ff' },
    instagram: { color: '#c2185b', bgcolor: '#fde7ef' },
    linkedin: { color: '#8219d2', bgcolor: '#efe3ff' },
  };

const CustomerDataSources = ({ platforms }) => (
  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
    {platforms.map((platform, idx) => (
      <Chip
        key={platform + idx}
        label={platform}
        sx={{
          fontWeight: 500,
          color: platformColors[platform]?.color,
          bgcolor: platformColors[platform]?.bgcolor,
          textTransform: 'lowercase',
          px: 1.5,
          fontSize: 14,
          borderRadius: 2,
        }}
        size="small"
      />
    ))}
  </Box>
);

export default CustomerDataSources; 