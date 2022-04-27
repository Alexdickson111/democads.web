import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Stepper from '@mui/material/Stepper';
import { Box, Grid, Icon, Typography } from '@mui/material';
import { PriceCheckTwoTone } from '@mui/icons-material';
import { AdminPanelSettingsTwoTone } from '@mui/icons-material';
import { PolicyTwoTone } from '@mui/icons-material';

import RoadMap from '../components/RoadMap';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<Box
			px={{ xs: 6, lg: 15 }}
			flexDirection="column"
			justifyContent="center"
			gap={10}
			maxWidth="100%"
			sx={{ display: 'flex' }}
		>
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
			<Box
				position="absolute"
				sx={{ display: { xs: 'none',md: 'block' } }}
				top={0}
				right={{ md: '48px', lg: '120px' }}
				zIndex={-1}
			>
				<img src="/hero.svg" alt="next" width="396px" />
			</Box>

			<Grid container width="100%" justifyContent="center" gap={10} mt={10}>
				<Grid item flexDirection="column" justifyContent="center" maxWidth="200px" textAlign="center">
					<PriceCheckTwoTone sx={{ fontSize: '70px', color: 'primary.main' }} />
					<Typography fontWeight="bold">Higher income</Typography>
					<Typography>No middlemen to take a part of your creator's income</Typography>
				</Grid>
				<Grid item flexDirection="column" justifyContent="center" maxWidth="200px" textAlign="center">
					<PolicyTwoTone sx={{ fontSize: '70px', color: 'primary.main' }} />
					<Typography fontWeight="bold">Transparency</Typography>
					<Typography>
						Blockchain technology is inherently transparent. So you can see where all the money went
					</Typography>
				</Grid>
				<Grid item flexDirection="column" justifyContent="center" maxWidth="200px" textAlign="center">
					<AdminPanelSettingsTwoTone sx={{ fontSize: '70px', color: 'primary.main' }} />
					<Typography fontWeight="bold">Own your data</Typography>
					<Typography>Data is stored on the blockchain so YOU can do whatever you want with it</Typography>
				</Grid>
			</Grid>
			<Typography fontWeight="bold" gutterBottom variant="h4" textAlign="center">
				How it works
			</Typography>
			{/* <img src="/democadsHeroNoBg.svg" alt="next" /> */}
			<Typography fontWeight="bold" variant="h4" textAlign="center">
				Roadmap
			</Typography>
			<RoadMap />
		</Box>
	);
};

export default Home;
