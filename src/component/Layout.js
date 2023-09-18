import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Selection from './Selection';
import Button from '@mui/material/Button';
import Item from './Item';
import StackItems from './StackItems';
import Stack from '@mui/material/Stack';
import Poster from './Poster';
const inputType = ['header', 'text', 'list', 'text columns', 'image', 'gallery', 'multi type'];

function Layout() {
  const inputRef = React.useRef();
  const posterRef = React.useRef();
  const handleClick = () => {
    inputRef.current.addNewItem();
  };
  const downloadImage = () => {
    posterRef.current.download();
  };
  return (
    <Box sx={{ flexGrow: 1, height: '98vh' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid sx={{ flexGrow: 1, textAlign: 'center', display: 'flex',alignItems: 'center',flexDirection:'column' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              width:'100%',
              marginBottom: '16px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
            }}
          >
            <Button variant="text" onClick={downloadImage}>
              Download Image
            </Button>
          </Box>
          <Poster ref={posterRef} />
        </Grid>
        <Grid sx={{ width: '360px' }}>
          <Item sx={{ height: '100%' }}>
            <Stack spacing={2} direction="column" sx={{ flexGrow: 1 }}>
              <StackItems />
              <Grid sx={{ flexGrow: 1, padding: '0' }}>
                <Selection props={{ data: inputType }} ref={inputRef} />
                <Button variant="contained" onClick={handleClick}>
                  Add asset
                </Button>
              </Grid>

            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
