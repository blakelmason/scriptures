export default function stringToRoute(string) {
  return string.split(' ').join('-').toLowerCase()
}
