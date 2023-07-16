export function repeatName(arr, value) {
  return arr.find(
    contact => contact.name.toLowerCase() === value.toLowerCase()
  );
}
