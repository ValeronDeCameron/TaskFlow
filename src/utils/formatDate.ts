type DateParts = 'year' | 'month' | 'day';

export function formatDate (
    date: Date,
    parts: DateParts[],
    locale: string = 'uk-UA'
) {
    const options: Intl.DateTimeFormatOptions = {}
    if (parts.includes('year')) options.year = 'numeric';
    if (parts.includes('month')) options.month = '2-digit';
    if (parts.includes('day')) options.day = "2-digit"; 

    return new Intl.DateTimeFormat(locale, options).format(date)
}