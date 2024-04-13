export default function Regex_UserName (username) {
  const validateUsernameRegex = /^[a-zA-Z0-9]+$/;
  return validateUsernameRegex.test(username);
}