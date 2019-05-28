const logger = (store) => (next) => (action) => {
    console.group(action.type);
    const result = next(action);
    console.groupEnd();
    return result
};

export default logger;
