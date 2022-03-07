import { FC } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';

import theme from '../styles/theme';
import NavBar from '../components/NavBar';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>My App</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Head>
			<NavBar />
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MyApp;
