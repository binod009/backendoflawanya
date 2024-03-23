var dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
//this will format the date in this pattern Output: 2024-02-14T06:20:02Z
const dateFormat = (date) => {
  return dayjs(date).utc().format();
};

const timeFormat = (time) => {
  const dateObj = new Date(time);
  // Extract the time components
  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const seconds = dateObj.getSeconds().toString().padStart(2, "0");
  const timestring = `${hours}: ${minutes}: ${seconds}`;
  return timestring;
};

module.exports = {
  dateFormat,
  timeFormat,
};
