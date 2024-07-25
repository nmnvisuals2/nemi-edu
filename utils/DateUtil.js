export function formatCreatedAt(created_at) {
    const date = new Date(created_at);
   
    const day = date.getDate();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

export function checkValueExists(a, key) {
  if (a === undefined || !Array.isArray(a)) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i]?.[key] !== undefined && a[i]?.[key] !== null && a[i]?.[key] !== '') {
      return true;
    }
  }

  return false;
}

export function CtoLocal(timestampz) {
  // Convert timestampz to local time in India timezone (IST)
  const options = {
    timeZone: 'Asia/Kolkata', // Set timezone to India Standard Time (IST)
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  // Create a Date object from the timestamp
  let localTime = new Date(timestampz);

  // Convert the Date object to a local time string representation in India timezone
  let localTimeString = localTime.toLocaleString('en-IN', options);

  // Extract date components from the original Date object, not from the string
  let date = localTime.getDate();
  let day = localTime.getDay();
  let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayName = dayNames[day];
  let month = localTime.getMonth() + 1; // Month is 0-based, so add 1
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let monthName = monthNames[localTime.getMonth()];
  let year = localTime.getFullYear();

  // Extract time components from the string representation
  let timeStr = localTimeString.split(', ')[1]; // Extracting the time part from the string

  // Extract hour and minute from the time string
  let [hour, minute] = timeStr.split(':').map(Number);
  
  let amPm = timeStr.split(' ')[1] == "pm" ? 'PM' : 'AM';
  hour = hour % 12 || 12; // Convert to 12-hour format
  timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

  return {
      date: date,
      day: day,
      dayName: dayName,
      month: month,
      monthName: monthName,
      year: year,
      time: timeStr,
      amPm: amPm
  };
}

  export function extractDateInfo(dateString, increment) {
    const dateObj = new Date(dateString);
    const currentDate = new Date();
    // If an increment is provided, add it to the date
    if (increment) {
      dateObj.setDate(dateObj.getDate() + increment);
    }
  
    const date = dateObj.getDate();
    const day = dateObj.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const dayName = getDayName(day);
    const month = dateObj.getMonth() + 1; // Months are zero-based (0 for January)
    const monthName = getMonthName(month);
    const year = dateObj.getFullYear();
  
const isToday =  dateObj.getDate() === currentDate.getDate() &&
dateObj.getMonth() === currentDate.getMonth() &&
dateObj.getFullYear() === currentDate.getFullYear()

    return {
      date,
      day,
      dayName,
      month,
      monthName,
      year,
      isToday
    };
  }

  function getDayName(dayIndex) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayIndex];
  }
  
  function getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex - 1];
  }

  export function ISOto12Hour(isoDateTimeString) {
    // Create a Date object from the ISO string
    const isoDate = new Date(isoDateTimeString);
  
    // Get local time in 12-hour format
    const options = { hour: 'numeric', minute: 'numeric',  hour12: true };
    const localTime12HourFormat = isoDate.toLocaleTimeString(undefined, options);
  
    return localTime12HourFormat;
  }


