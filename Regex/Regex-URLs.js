export default function Regex_URLs (URLs) {
  const validateURLsRegex = /^(?:(?:https?|fpt):\/\/)?[^\s/$.?#/][^\s]*$/;
  return validateURLsRegex.test(URLs);
}