const dogYears = (namePlanet, ageDogSeconds) => {
    const planet = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    };
    //ageDog:
    let ageDogYear = planet[namePlanet] * 365.25;
    let ageDogS = (ageDogYear * 31557600) / 365.25;
    return Number((ageDogSeconds / ageDogS * 7).toFixed(2));
};

console.log(dogYears("earth", 1000000000));