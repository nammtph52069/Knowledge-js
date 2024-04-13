export default function FormatMoney (money) {
  let formattedMoney = money.toLocaleString('vi-VN');
  return formattedMoney;
}