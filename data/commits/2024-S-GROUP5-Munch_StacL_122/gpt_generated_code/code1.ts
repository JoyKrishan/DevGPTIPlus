function formatDate(date: Date): string {
    const isoString = date.toISOString();
    const formattedDate = isoString.replace('T', ' ').replace('Z', '+00:00');
    return formattedDate;
}

const date = new Date();
console.log(formatDate(date));