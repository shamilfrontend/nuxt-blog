export default function (value, type) {
  if (type === 'date') return new Date(value).toLocaleDateString();
  else if (type === 'time') return new Date(value).toLocaleTimeString();
  return new Date(value).toLocaleString();
}
