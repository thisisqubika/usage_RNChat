import React from 'react';
import { Text } from 'react-native';
import {
	formatDayOfWeek,
	formatFullDate,
	formatShortDate,
	formatYearAndMonth,
} from 'utils/dates';
import { useTheme } from '@react-navigation/native';

const DateShowCaseComponent = () => {
	const date = new Date();
	const { colors } = useTheme();

	return (
		<>
			<Text style={{ color: colors.text }}>{formatFullDate(date)}</Text>
			<Text style={{ color: colors.text }}>{formatShortDate(date)}</Text>
			<Text style={{ color: colors.text }}>{formatYearAndMonth(date)}</Text>
			<Text style={{ color: colors.text }}>{formatDayOfWeek(date)}</Text>
		</>
	);
};

export default DateShowCaseComponent;
