import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useContext, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import Link from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CustomerDataSources from '../components/CustomerDataSources';
import { AppContext } from '../context/appContext';

const platforms = ['All Platforms', 'facebook', 'linkedin', 'instagram'];

const Posts = () => {
  const [date, setDate] = useState(null);
  const { posts, customers } = useContext(AppContext);
  const [platform, setPlatform] = useState('All Platforms');
  const [customer, setCustomer] = useState('All Customers');

  const filteredData = posts.filter(row =>
    (platform === 'All Platforms' || row.channel === platform) &&
    (customer === 'All Customers' || row.customerId === customer) &&
    (!date || dayjs(row.date).isSame(dayjs(date), 'day'))
  );

  const customerOptions = [{ referenceId: 'All Customers', name: 'All Customers' }, ...customers];

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, mb: 3}}>
        <Typography variant="h4">Posts</Typography>
        <Typography variant="description">Daily content performance insights</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 3, backgroundColor: 'white', p: 2, borderRadius: 2, border: '1px solid #eee' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Date"
            value={date}
            onChange={setDate}
            slotProps={{
              textField: {
                size: 'small',
                sx: {
                  minWidth: 140,
                  '& .MuiInputBase-root': {
                    borderRadius: 2,
                    borderColor: '#E94E8A',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E94E8A',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E94E8A',
                  },
                  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E94E8A',
                  },
                  '& label.Mui-focused': {
                    color: '#E94E8A',
                  },
                },
              },
              field: { clearable: true, onClear: () => setDate(null) }
            }}
            format="YYYY-MM-DD"
          />
        </LocalizationProvider>
        <FormControl size="small" sx={{ minWidth: 140, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}>
          <InputLabel sx={{
            '&.Mui-focused': { color: '#E94E8A' }
          }}>Platform</InputLabel>
          <Select
            label="Platform"
            value={platform}
            onChange={e => setPlatform(e.target.value)}
            sx={{
              '& .MuiSelect-icon': {
                color: 'inherit',
                '&.Mui-focused': { color: '#E94E8A' }
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E94E8A',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0,0,0,0.23)',
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  '& .Mui-selected': { bgcolor: '#FDE7EF !important', color: '#E94E8A' },
                  '& .MuiMenuItem-root.Mui-selected': { bgcolor: '#FDE7EF !important', color: '#E94E8A' },
                },
              },
            }}
          >
            {platforms.map(p => (
              <MenuItem key={p} value={p}>{p === 'All Platforms' ? p : p.charAt(0).toUpperCase() + p.slice(1)}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 160, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}>
          <InputLabel sx={{
            '&.Mui-focused': { color: '#E94E8A' }
          }}>Customer</InputLabel>
          <Select
            label="Customer"
            value={customer}
            onChange={e => setCustomer(e.target.value)}
            sx={{
              '& .MuiSelect-icon': {
                color: 'inherit',
                '&.Mui-focused': { color: '#E94E8A' }
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E94E8A',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0,0,0,0.23)',
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  '& .Mui-selected': { bgcolor: '#FDE7EF !important', color: '#E94E8A' },
                  '& .MuiMenuItem-root.Mui-selected': { bgcolor: '#FDE7EF !important', color: '#E94E8A' },
                },
              },
            }}
          >
            {customerOptions.map(c => (
              <MenuItem key={c.referenceId} value={c.referenceId}>{c.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
        <TableContainer component={Paper} sx={{ border: '1px solid #eee', maxWidth: 'calc(100% - 2px)' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgba(233,78,138,0.04)' }}>
                <TableCell align="center">Customer</TableCell>
                <TableCell align="center">Post</TableCell>
                <TableCell align="center">Platform</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Reach</TableCell>
                <TableCell align="center">Clicks</TableCell>
                <TableCell align="center">Likes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row, idx) => {
                const isLink = row.link.includes('http');

                return (
                  <TableRow key={idx}>
                    <TableCell align="center">{row.customerName}</TableCell>
                    <TableCell align="center" sx={{ maxWidth: 320 }}>
                      {isLink ? <Link href={row.link} target="_blank" rel="noopener" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <span style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          display: 'block',
                          flex: 1,
                          minWidth: 0
                        }}>{row.link}</span>
                        <OpenInNewIcon sx={{ fontSize: 16, ml: 0.5, flexShrink: 0 }} />
                      </Link> : <span>{row.link}</span>}
                    </TableCell>
                    <TableCell align="center">
                      <CustomerDataSources platforms={[row.channel]} />
                    </TableCell>
                    <TableCell align="center">{dayjs(row.publicationDate).format('MMM DD, YYYY HH:mm')}</TableCell>
                    <TableCell align="center">{row.impressions.toLocaleString()}</TableCell>
                    <TableCell align="center">{row.clicks}</TableCell>
                    <TableCell align="center">{row.likes}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Posts; 