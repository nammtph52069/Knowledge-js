export default function FormatDate () {
  const currenDate = new Date();
  let day = currenDate.getDate();
  let month = currenDate.getMonth() + 1;
  let year = currenDate.getFullYear();

  day = day < 10 ? '0' + day : day;
  month = day < 10 ? '0' + month : month;
  year = year < 10 ? '0' + year : year;

  return `${day}/${month}/${year}`
}