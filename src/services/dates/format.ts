import { format } from 'date-fns';

export const fullDateFormat = 'PPPP';
export const shortDateFormat = 'P';
export const yearAndMonthFormat = 'MMMM yyyy';
export const dayOfWeekFormat = 'EEEE';

// Format: "Tuesday, October 31, 2023"
export const formatFullDate = (date: Date) => {
	return format(date, fullDateFormat);
};

// Format: "10/31/2023"
export const formatShortDate = (date: Date) => {
	return format(date, shortDateFormat);
};

// Format: "October 2023"
export const formatYearAndMonth = (date: Date) => {
	return format(date, yearAndMonthFormat);
};

// Format: "Tuesday"
export const formatDayOfWeek = (date: Date) => {
	return format(date, dayOfWeekFormat);
};
