import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MouseIcon from '@mui/icons-material/Mouse';
import PercentIcon from '@mui/icons-material/Percent';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useContext, useState } from 'react';
import CustomerDataSources from '../components/CustomerDataSources';
import { AppContext } from '../context/appContext';

const platforms = ['All Platforms', 'facebook', 'instagram', 'linkedin'];

const Campaigns = () => {
  const { campaigns, customers } = useContext(AppContext);
  const [platform, setPlatform] = useState('All Platforms');
  const [customer, setCustomer] = useState('All Customers');

  const filteredData = campaigns.filter(row =>
    (platform === 'All Platforms' || row.channel === platform) &&
    (customer === 'All Customers' || row.customerId === customer)
  );

  const statsTotal = filteredData.reduce((acc, row) => {
    acc.totalSpend += row.spend;
    acc.totalImpressions += row.impressions;
    acc.totalClicks += row.clicks;
    acc.totalCtr += row.ctr;
    return acc;
  }, { totalSpend: 0, totalImpressions: 0, totalClicks: 0, totalCtr: 0 });

  const customerOptions = [{ referenceId: 'All Customers', name: 'All Customers' }, ...customers];

  const stats = [
    {
      label: 'Total Spend',
      value: `$${statsTotal.totalSpend.toLocaleString()}`,
      icon: <AttachMoneyIcon sx={{ color: 'text.secondary', fontSize: 22 }} />, // $ icon
      unit: '$',
    },
    {
      label: 'Total Impressions',
      value: statsTotal.totalImpressions.toLocaleString(),
      icon: <VisibilityIcon sx={{ color: 'text.secondary', fontSize: 22 }} />, // eye icon
      unit: '',
    },
    {
      label: 'Total Clicks',
      value: statsTotal.totalClicks.toLocaleString(),
      icon: <MouseIcon sx={{ color: 'text.secondary', fontSize: 22 }} />, // mouse icon
      unit: '',
    },
    {
      label: 'Average CTR',
      value: statsTotal.totalCtr ? `${statsTotal.totalCtr.toFixed(2)}%` : '-',
      icon: <PercentIcon sx={{ color: 'text.secondary', fontSize: 22 }} />, // percent icon
      unit: '%',
    },
  ];

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, height: '100%'}}>
      <Typography variant="h4" sx={{display: 'flex', alignItems: 'center', gap: 1}}>
        <RadioButtonCheckedIcon sx={{fontSize: 32, color: '#E94E8A'}} />
        Campaigns
      </Typography>
      <Typography variant="description">Monthly paid advertising performance overview</Typography>
      <Box sx={{ display: 'flex', gap: 3, mt: 2, mb: 2 }}>
        {stats.map((stat) => (
          <Paper key={stat.label} elevation={0} sx={{ flex: 1, minWidth: 220, p: 3, borderRadius: 3, boxShadow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 70 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>{stat.label}</Typography>
              {stat.icon}
            </Box>
            <Typography variant="h5" fontWeight={700} color="#111827" sx={{ mt: 1 }}>
              {stat.value}
            </Typography>
          </Paper>
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 3, backgroundColor: 'white', p: 2, borderRadius: 2, border: '1px solid #eee' }}>
        <FormControl size="small" sx={{ minWidth: 140, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}>
          <InputLabel sx={{'&.Mui-focused': { color: '#E94E8A' }}}>Platform</InputLabel>
          <Select
            label="Platform"
            value={platform}
            onChange={e => setPlatform(e.target.value)}
            sx={{
              '& .MuiSelect-icon': { color: 'inherit', '&.Mui-focused': { color: '#E94E8A' } },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#E94E8A' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,0,0,0.23)' },
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
          <InputLabel sx={{'&.Mui-focused': { color: '#E94E8A' }}}>Customer</InputLabel>
          <Select
            label="Customer"
            value={customer}
            onChange={e => setCustomer(e.target.value)}
            sx={{
              '& .MuiSelect-icon': { color: 'inherit', '&.Mui-focused': { color: '#E94E8A' } },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#E94E8A' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,0,0,0.23)' },
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
                <TableCell align="center">Campaign</TableCell>
                <TableCell align="center">Platform</TableCell>
                <TableCell align="center">Dates</TableCell>
                <TableCell align="center">Total Spend</TableCell>
                <TableCell align="center">Impressions</TableCell>
                <TableCell align="center">Clicks</TableCell>
                <TableCell align="center">CTR</TableCell>
                <TableCell align="center">CPC</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell align="center">{row.customerName}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">
                    <CustomerDataSources platforms={[row.channel]} />
                  </TableCell>
                  <TableCell align="center">-</TableCell>
                  <TableCell align="center">${row.spend.toLocaleString()}</TableCell>
                  <TableCell align="center">{row.impressions.toLocaleString()}</TableCell>
                  <TableCell align="center">{row.clicks}</TableCell>
                  <TableCell align="center">{row.ctr}</TableCell>
                  <TableCell align="center">-</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Campaigns; 