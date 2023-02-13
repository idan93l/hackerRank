function timeConversion(s) {
  const splitStr = s.split(":");
  let hours = splitStr[0];
  let minutes = splitStr[1];
  let seconds = splitStr[2].slice(0, 2);
  let ampm = splitStr[2].slice(2, 4);
  if (ampm === "AM" && hours === "12") {
    hours = "00";
  } else if (ampm === "PM" && hours !== "12") {
    hours = Number(hours) + 12;
  }
  return `${hours}:${minutes}:${seconds}`;
}
