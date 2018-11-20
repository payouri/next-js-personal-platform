export const throttleEvent = (callback, ms) => {
    let timeout;
    const throttledListener = e => {
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(callback, ms);
    }
    return throttledListener;
}