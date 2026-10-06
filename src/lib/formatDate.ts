const dateFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

export default function formatDate(date: Date) {
  return dateFormatter.format(date);
}
