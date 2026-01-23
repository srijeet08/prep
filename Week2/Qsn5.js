// "Flipkart | Machine Coding Round: Robust Debounce Utility
// Question: Implement a debounce utility. The interviewer will likely ask for the ""Immediate/Leading"" flag as a follow-up

// function debounce(func, wait, immediate = false) {
//   let timeout;
//   // TODO: Logic to clear timeout and handle 'this' context
// }

// Usage in UI:
// const onSearch = debounce((e) => console.log(""Searching for:"", e.target.value), 300);
// document.getElementById('search').addEventListener('input', onSearch);"


// Code:

    function debounce(func, wait, immediate = false) {
        let timeout;

        const debounced = function(...args) {
            const context = this;
            const callNow = immediate && !timeout;

            clearTimeout(timeout);

            timeout = setTimeout(() => {
                timeout = null;

                if(!immediate) {
                    func.apply(context, args);
                }
            }, wait);

            if(callNow) {
                func.apply(context, args);
            }
        };

        // Cancel Debounce
        debounced.cancel = function() {
            clearTimeout(timeout);
            timeout = null;
        };

        return debounced;
    }