import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const DemocadsRoadMap = () => {
	return (
		<Timeline position="alternate">
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">1st half of Q1 2022</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot sx={{ backgroundColor: 'primary.main' }} />
					<TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
				</TimelineSeparator>
				<TimelineContent>Website launch</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary"></TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>Smart contracts integration</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">1st half of Q2 2022</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					Ad box container release on <a href="https://www.npmjs.com/">npm</a>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">2nd half of Q2 2022</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>Testing on real websites</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};
export default DemocadsRoadMap;
