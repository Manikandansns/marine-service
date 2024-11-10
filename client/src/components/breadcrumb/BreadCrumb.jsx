import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CustomSeparator(props) {
  const {crumb} = props;
  
  const breadcrumbs = [
    <Link underline="" key="1" color="white" href="/" className='crumb-home'>
      Home
    </Link>,
    <Typography key="3" color="white">
      {crumb}
    </Typography>
  ];

  return (
    <Stack spacing={2} fill="white" color="white">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small"/>}
        aria-label="breadcrumb"
        color="white"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
