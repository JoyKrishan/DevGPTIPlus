  const isoString = date.toISOString();
  const formattedDate = isoString.replace('T', ' ').replace('Z', '+00:00');
  return formattedDate;