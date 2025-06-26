import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ChatBox from '../components/ChatBox';

const Analytics = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, height: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                    <Typography variant="h4">AI Analytics</Typography>
                    <Typography variant="description">Get smart insights and recommendations from your social media data.</Typography>
                </Box>
            </Box>
            <ChatBox />
        </Box>
    )
}

export default Analytics; 