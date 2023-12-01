function debounce(func: Function, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
}

export default debounce;