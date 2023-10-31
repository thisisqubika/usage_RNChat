import { format } from 'date-fns';

// Formato: "Tuesday, October 31, 2023"
export const formatFullDate = (date: Date) => {
	return format(date, 'PPPP');
};

// Formato: "10/31/2023"
export const formatShortDate = (date: Date) => {
	return format(date, 'P');
};

// Formato: "October 2023"
export const formatYearAndMonth = (date: Date) => {
	return format(date, 'MMMM yyyy');
};

// Formato: "Tuesday"
export const formatDayOfWeek = (date: Date) => {
	return format(date, 'EEEE');
};
