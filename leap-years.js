const leapYears = year => {
    if (year % 400 === 0) return true;
    return false;
}
export default leapYears;