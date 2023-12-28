import { DateTime } from 'luxon';

export function calculateDaysDifference(endOfDay: Date, anotherDate: Date): number {
  // Set the time of the second date to 23:59:59 to compare with the end of the day
  const endOfDayTime = new Date(endOfDay);
  endOfDayTime.setHours(23, 59, 59, 999);

  // Calculate the time difference in milliseconds
  const timeDifference = endOfDayTime.getTime() - anotherDate.getTime();

  // Convert milliseconds to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

export function createCustomTimeZoneDate(timeZone: string): DateTime {
  return DateTime.now().setZone(timeZone);
}
