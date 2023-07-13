import { Box, Button, Stack } from '@mui/material';

const Home = () => (
  <Box>
    <h2>Home</h2>
    <Stack spacing={2} direction="column">
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="warning">
        Warning
      </Button>
    </Stack>
  </Box>
);

export default Home;
