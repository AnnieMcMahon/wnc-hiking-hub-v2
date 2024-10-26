export default function convertDate(origDate) {
  const hikeDate = new Date(origDate);
  const yyyy = hikeDate.getFullYear();
  let d = hikeDate.getDay();
  let dddd = "";
  switch (d) {
    case 0:
      dddd = "Sun";
      break;
    case 1:
      dddd = "Mon";
      break;
    case 2:
      dddd = "Tue";
      break;
    case 3:
      dddd = "Wed";
      break;
    case 4:
      dddd = "Thu";
      break;
    case 5:
      dddd = "Fri";
      break;
    case 6:
      dddd = "Sat";
      break;
  }
  let mm = hikeDate.getMonth() + 1; // Months start at 0!
  let dd = hikeDate.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedDate = dddd + ", " + mm + "/" + dd + "/" + yyyy;
  console.log(formattedDate);
  return formattedDate;
}