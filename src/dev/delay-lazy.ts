// example:
// const LazyComponent = lazy(() => delayLazy(import('./MarkdownPreview.js')));

const delayLazy = (promise: any, timer = 2000) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timer);
    }).then(() => promise);
};

export default delayLazy;
