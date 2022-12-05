export function debounce<T>(callback: (params: T) => void, time: number) {
    let timeout: NodeJS.Timeout;
    return function(params: T) {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(params), time);
    }
};
