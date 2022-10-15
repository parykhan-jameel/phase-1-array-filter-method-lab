// Code your solution here
const findMatching = (drivers, str) => {
    const filterArr = drivers.filter((filtered) => {
        return filtered.toUpperCase() === str.toUpperCase();
        // if(filtered.toUpperCase() === str.toUpperCase()) {
        //     console.log('coooool');
        // }
    });
    return filterArr;
}

const fuzzyMatch = (drivers, str) => {
    const filterArr = drivers.filter((filtered) => {
        return filtered[0] === str[0];
    });
    return filterArr;
}

const matchName = (drivers, str) => {
    const filterArr = drivers.filter((filtered) => {
        console.log(filtered.name);
        return filtered.name === str;
    });
    return filterArr;
}