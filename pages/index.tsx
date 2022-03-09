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
		<Box px={4} flexDirection="column" justifyContent="center" gap={10} maxWidth="100%" sx={{ display: 'flex' }}>
			<Box maxWidth="569px" mt={10}>
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
				<Typography variant="body1" fontSize="16px" gutterBottom maxWidth="400px">
					Democads is a decentralized ads platform for your site to reward your content creators fairly by conecting
					them directly to the advertiser with no middleman
				</Typography>
			</Box>
			<Box position={{ xs: 'relative', md: 'absolute' }} top={0} right={0}>
				<img src="/hero.svg" alt="next" width="396px" />
			</Box>

			<Grid container width="100%" justifyContent="center" gap={10}>
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
