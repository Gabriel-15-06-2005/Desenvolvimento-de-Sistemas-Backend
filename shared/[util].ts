export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
}

export function generateId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

export function isEmpty(value: any): boolean {
    return value === null || value === undefined || (typeof value === 'string' && value.trim() === '');
}