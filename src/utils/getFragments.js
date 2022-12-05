export function getFragmentValue(name) {
  const fragments = window.location.hash.substring(1);
  const hash = fragments.split("&");
  const indexOfName = hash.findIndex((item) => item.startsWith(name));
  if (indexOfName === -1) return null;
  const value = hash[indexOfName].split("=")[1];
  return value;
}
