export const cutStringLength = (str, maxLength) => {
    let trimmedStr = '';

    if (str.length > maxLength) {
        trimmedStr = str.slice(0, maxLength);
        return `${trimmedStr}...`;
    }

    return str;
};
