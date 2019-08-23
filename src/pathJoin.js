export default function pathJoin (...parts) {
  const separator = '/'
  return parts
    .join(separator)
    .replace(new RegExp(separator + '{1,}', 'g'), separator)
}
