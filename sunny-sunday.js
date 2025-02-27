const sunnySunday = (date) => {
    const dateBase = new Date('0001-01-01')
    const days = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
    }
    const datDif = (date - dateBase) / (1000 * 60 * 60 * 24)
    return days[datDif % 6]
}