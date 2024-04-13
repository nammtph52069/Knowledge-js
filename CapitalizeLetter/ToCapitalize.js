export default function ToCapitalize(val) {
  let words = val.split(' ');
  words.forEach((word, index) => {
    words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return words.join(' ');
}