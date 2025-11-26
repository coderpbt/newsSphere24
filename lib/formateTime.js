// export function formatLocalTimes(dateString) {
//   const date = new Date(dateString);

//   return {
//     bdTime: date.toLocaleString("en-BD", { timeZone: "Asia/Dhaka" }),
//     india: date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
//     usa_ny: date.toLocaleString("en-US", { timeZone: "America/New_York" }),
//     uk: date.toLocaleString("en-GB", { timeZone: "Europe/London" }),
//   };
// }


export function bdTime(dateString) {
  return new Date(dateString).toLocaleString("en-BD", {
    timeZone: "Asia/Dhaka",
    hour12: true,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

