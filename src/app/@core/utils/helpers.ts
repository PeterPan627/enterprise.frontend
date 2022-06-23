export function getNullableDataValue(property: any, defaultValue: any = ''): any {
    if (property === null || property === undefined) {
        return defaultValue;
    }
    return property;
}

export function getNullableDateValue(property: any, defaultValue: any = ''): any {
    if (property === null || property === undefined) {
        return defaultValue;
    }
    return new Date(property);
}

export function getNullableBoolValue(property: any, defaultValue: Boolean = false): Boolean {
    if (property === null || property === undefined) {
        return defaultValue;
    }
    if (typeof property === 'boolean') {
        return property;
    }
    if (typeof property === 'string') {
        const str = property as String;
        return str.toLowerCase()[0] === 't';
    }
}

export function getSelectorValue(property: any, options: any[], defaultValue: any): any {
    const initialValue = getNullableDataValue(property, defaultValue);
    for (let i = 0; i < options.length; i++) {
        if (options[i].toLowerCase().trim() === initialValue.toLowerCase().trim()) {
            return options[i];
        }
    }
    return defaultValue;
}
