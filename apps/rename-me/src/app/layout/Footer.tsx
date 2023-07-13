import { Box, Paper, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { useInstance } from 'react-ioc';
import { ThemeDataStore } from '../theme/ThemeDataStore';
import { observer } from 'mobx-react-lite';

const StyledFooter = styled(Box)(({ theme }) => {
  console.log(theme);
  return {
    position: 'sticky',
    bottom: 0,
    zIndex: 1,
  };
});

const Footer = () => {
  const themeDataStore = useInstance(ThemeDataStore);
  return (
    <StyledFooter>
      <Box>
        <footer>Footer</footer>
      </Box>
    </StyledFooter>
  );
};

export default observer(Footer);
