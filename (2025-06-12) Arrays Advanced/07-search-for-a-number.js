function searchForANumber (arr, searchingParameters) {
    let filteredArr = arr.slice(0, searchingParameters[0])
    filteredArr.splice(0, searchingParameters[1]);
    filteredArr = filteredArr.filter(x => x === searchingParameters[2]);
    
    console.log(`Number ${searchingParameters[2]} occurs ${filteredArr.length} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],             [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7],             [3, 1, 5]);
searchForANumber([5, 4, 5, 3, 5, 2, 1, 2, 5, 6], [5, 2, 5]);