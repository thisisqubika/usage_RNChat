import React from 'react';
import {
	formatDayOfWeek,
	formatFullDate,
	formatShortDate,
	formatYearAndMonth,
} from 'services/dates/format';
import { Body } from 'ui/text';

const DateShowCaseComponent = () => {
	const date = new Date();

	return (
		<>
			<Body>{formatFullDate(date)}</Body>
			<Body>{formatShortDate(date)}</Body>
			<Body>{formatYearAndMonth(date)}</Body>
			<Body>{formatDayOfWeek(date)}</Body>
		</>
	);
};

export default DateShowCaseComponent;
