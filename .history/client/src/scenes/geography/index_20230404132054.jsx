import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetGeographyQuery } from 'state/api';
import Header from 'components/Header';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoData } from 'state/geoData';
import { getDataGridUtilityClass } from '@mui/x-data-grid';

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
        {data ? <ResponsiveChoropleth
        data={data}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: theme.palette.secondary[200]
                    }
                },
                legend: {
                    text: {
                        fill: '#f7ab0a'
                    }
                },
                ticks: {
                    line: {
                        stroke: theme.palette.secondary[200],
                        strokeWidth: 1,
                    },
                    text: {
                        fill: '#f7ab0a'
                    }
                },
                legends: {
                    text: {
                        fill: '#f7ab0a'
                    }
                },
                // tooltip: {
                //     container: {
                //         color: theme.palette.primary.main,
                //     }
                // }
            }
        }}
        features={geoData.features}
        margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
        domain={[ 0, 10 ]}
        // colors="blues"
        unknownColor={theme.palette.secondary[400]}
        label="properties.name"
        valueFormat=".2s"
        projectionScale={150}
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        graticuleLineColor="#dddddd"
        borderWidth={1.3}
        borderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: true,
                translateX: 0,
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: theme.palette.secondary[200],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: theme.palette.background.alt,
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    /> : <>Loading...</>}
      </Box>
    </Box>
  );
};

export default Geography;