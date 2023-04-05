import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetGeographyQuery } from 'state/api';
import Header from 'components/Header';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoData } from 'state/geoData';

const Geography = () => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery();
  return (
    <Box n='1.5rem 2.5rem'>
      <Header title='GEOGRAPHY' subtitle='Find where your users are located.' />
      <Box
        mt='40px'
        height='75vh'
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data ? <></> : <>Loading...</>}
      </Box>
    </Box>
  );
};

export default Geography;
