export default function Regex_Phone (phone) {
  const validatePhoneRegex = /^(0|\+84)[1-9]\d{8}$/;
  return validatePhoneRegex.test(phone);
}