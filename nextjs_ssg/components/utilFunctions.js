export function dateParser(strapiDate) {
  const date = new Date(strapiDate);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("de-DE", options);
}
