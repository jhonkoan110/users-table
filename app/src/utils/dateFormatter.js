export const formatDate = (date) => {
    const miliseconds = new Date(date).getTime();
    // return miliseconds;

    let dd = new Date(miliseconds).getDate();
    if (dd < 10) {
        dd = `0${dd}`;
    }

    let mm = new Date(miliseconds).getMonth() + 1;
    if (mm < 10) {
        mm = `0${mm}`;
    }

    let yy = new Date(miliseconds).getFullYear() % 100;
    if (yy < 10) {
        yy = `0${yy}`;
    }

    let hh = new Date(miliseconds).getHours();
    if (hh < 10) {
        hh = `0${hh}`;
    }

    let mins = new Date(miliseconds).getMinutes();
    if (mins < 10) {
        mins = `0${mins}`;
    }

    let ss = new Date(miliseconds).getSeconds();
    if (ss < 10) {
        ss = `0${ss}`;
    }

    return `${dd}.${mm}.${yy} ${hh}:${mins}:${ss}`;
};
