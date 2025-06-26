import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import CustomerDataSources from '../components/CustomerDataSources';

const mockCustomers = [
  { name: 'TechCorp Solutions', budget: 5000, dataSource: 'facebook' },
  { name: 'Healthy Eats Cafe', budget: 2000, dataSource: 'instagram' },
  { name: 'FitLife Gym', budget: 3500, dataSource: 'instagram' },
  { name: 'Urban Boutique', budget: 1500, dataSource: 'facebook' },
];

function detectPlatform(url) {
  if (!url) return '';
  const lower = url.toLowerCase();
  if (lower.includes('facebook')) return 'facebook';
  if (lower.includes('instagram')) return 'instagram';
  if (lower.includes('linkedin')) return 'linkedin';
  return '';
}

const Customers = () => {
  const [open, setOpen] = useState(false);
  const [customers, setCustomers] = useState(mockCustomers);
  const [form, setForm] = useState({ name: '', sheet: '', budget: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setForm({ name: '', sheet: '', budget: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    const platform = detectPlatform(form.sheet);
    setCustomers([
      ...customers,
      { name: form.name, budget: Number(form.budget), dataSource: platform },
    ]);
    handleClose();
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
          <Typography variant="h4">Customers</Typography>
          <Typography variant="description">Manage your clients and their social media data sources.</Typography>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: '#E94E8A', '&:hover': { bgcolor: '#E94E8A' } }} onClick={handleOpen}>
          Add New Customer
        </Button>
      </Box>
      <Box sx={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
      <TableContainer component={Paper} sx={{ border: '1px solid #eee', maxWidth: 'calc(100% - 2px)' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgba(233,78,138,0.04)' }}>
                <TableCell align="center">Customer Name</TableCell>
                <TableCell align="center">Monthly Budget ($)</TableCell>
                <TableCell align="center">Data Source</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.budget.toLocaleString()}</TableCell>
                  <TableCell align="center">
                    <CustomerDataSources platforms={[row.dataSource]} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Create New Customer</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1, }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, p: 1 }}>
          <TextField
            label="Customer Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            autoFocus
            sx={{
              '& label.Mui-focused': { color: '#E94E8A' },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': { borderColor: '#E94E8A' },
              },
              '& .MuiInputBase-input': { caretColor: '#E94E8A' },
            }}
          />
          <TextField
            label="Google Sheet URL"
            name="sheet"
            value={form.sheet}
            onChange={handleChange}
            fullWidth
            sx={{
              '& label.Mui-focused': { color: '#E94E8A' },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': { borderColor: '#E94E8A' },
              },
              '& .MuiInputBase-input': { caretColor: '#E94E8A' },
            }}
          />
          </Box>
          <Box sx={{p: 1, pt: 0}}>
          <TextField
            label="Monthly Budget ($)"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            type="number"
            fullWidth
            sx={{
              '& label.Mui-focused': { color: '#E94E8A' },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': { borderColor: '#E94E8A' },
              },
              '& .MuiInputBase-input': { caretColor: '#E94E8A' },
            }}
          />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 0 }}>
          <Button onClick={handleClose} color="inherit">Cancel</Button>
          <Button onClick={handleCreate} variant="contained" sx={{ bgcolor: '#E94E8A', '&:hover': { bgcolor: '#E94E8A' } }}>Create Project</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Customers; 