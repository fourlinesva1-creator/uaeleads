/** Number and money formatting for the calculator. Latin digits in both locales, matching the rest of the site. */

export function numberFormat(locale: string, maxDigits = 0) {
    return new Intl.NumberFormat(locale === 'ar' ? 'ar-AE-u-nu-latn' : 'en-AE', { maximumFractionDigits: maxDigits });
}

export function makeAed(locale: string, maxDigits = 0) {
    const nf = numberFormat(locale, maxDigits);
    return (n: number) => (locale === 'ar' ? `${nf.format(n)} درهم` : `AED ${nf.format(n)}`);
}

export function formatDate(locale: string, iso: string) {
    return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-AE-u-nu-latn' : 'en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(new Date(`${iso}T00:00:00Z`));
}
