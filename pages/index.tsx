import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Stepper from '@mui/material/Stepper';
import { Box, Grid, Icon, Typography } from '@mui/material';
import { PublicTwoTone } from '@mui/icons-material';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<Box height="1000px" px={10} flexDirection="column" justifyContent="center" gap={10} sx={{ display: 'flex' }}>
			<Box position="absolute" top={0} right={0}>
				<img src="/hero.svg" alt="next" width="396px" />
			</Box>
			<Box width="569px" pt={10}>
				<Typography fontWeight="bold" gutterBottom variant="h2">
					<Typography color="primary.main" display="inline" fontWeight="bold" variant="h2">
						Democratize{' '}
					</Typography>{' '}
					your creator's{' '}
					<Typography color="primary.main" display="inline" fontWeight="bold" variant="h2">
						ads
					</Typography>{' '}
					revenue
				</Typography>
				<Typography variant="body1" fontSize="16px" gutterBottom width="400px">
					Democads is a decentralized ads platform to use on your site and reward your content creators fairly by
					conecting them directly to the advertiser with no middleman
				</Typography>
			</Box>

			<Grid container width="100%" justifyContent="center" spacing={10}>
				<Grid item flexDirection="column" justifyContent="center" width="auto">
					<PublicTwoTone sx={{ fontSize: '70px', color: 'primary.main' }} />
					<Typography fontWeight="bold">Nose</Typography>
					<Typography>Lorem ipsum emet</Typography>
				</Grid>
				<Grid item flexDirection="column" justifyContent="center" width="auto">
					<PublicTwoTone sx={{ fontSize: '70px', color: 'primary.main' }} />
					<Typography fontWeight="bold">Nose</Typography>
					<Typography>Lorem ipsum emet</Typography>
				</Grid>
				<Grid item flexDirection="column" justifyContent="center" width="auto">
					<PublicTwoTone sx={{ fontSize: '70px', color: 'primary.main' }} />
					<Typography fontWeight="bold">Nose</Typography>
					<Typography>Lorem ipsum emet</Typography>
				</Grid>
			</Grid>
			<Typography fontWeight="bold" gutterBottom variant="h4" textAlign="center">
				How it works
			</Typography>
			<Stepper></Stepper>
		</Box>
	);
};

export default Home;
