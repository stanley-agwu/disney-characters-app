import { useLocation, useNavigate } from 'react-router-dom';

import TagFacesIcon from '@mui/icons-material/TagFaces';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { coreConfig } from 'common/core/config';

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateToPage = (path: string) => {
    if (path === location.pathname) {
      return;
    }
    navigate(path);
  };

  const FONT_COLOR = '#041623';

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#e3e9ef' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TagFacesIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor: 'pointer', fill: FONT_COLOR }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigateToPage(coreConfig.routes.characters.url)}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: FONT_COLOR,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            disney characters
          </Typography>
          <TagFacesIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, cursor: 'pointer', fill: FONT_COLOR }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigateToPage(coreConfig.routes.characters.url)}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: FONT_COLOR,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Disney characters
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Button
              key="home"
              onClick={() => navigateToPage(coreConfig.routes.characters.url)}
              sx={{ my: 2, color: FONT_COLOR, display: 'block', fontFamily: 'Montserrat' }}
            >
              Home
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
