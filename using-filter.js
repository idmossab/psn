const filterShortStateName = (arr) => arr.filter(str => str.length < 7)
const filterStartVowel = (arr) => {
    const reg = /^[aeiou]/gi
    return arr.filter(str => str.match(reg))
}
const filter5Vowels = (arr) => {
    const reg = /[aeiou]/gi
    return arr.filter(str => {
        let a = str.match(reg)
        //console.log(a)
        if (a != null) a = a.join('')
        //console.log(a)
        return a.length >= 5
    })
}
const filter1DistinctVowel = (arr) => {
    const reg = /[aeiou]/gi
    return arr.filter(str => {
        let a = str.toLowerCase().match(reg)
        if (new Set(a).size == 1) {
            // console.log("aa",a)
            return a
        }
    })
}
const filter1Vowels = (arr) => {
    const reg = /[aeiou]/gi
    return arr.filter(str => {
        let a = str.match(reg)
        //console.log(a)
        if (a != null) a = a.join('')
        //console.log(a)
        return a.length > 1
    })
}
const multiFilter = (arr) => {
    return arr.filter(obj => 
        obj.capital.length >= 8 && filterStartVowel([obj.name]).length==0&& filter1Vowels((obj.tag).split()) && obj.region != "South"
    )
}
console.log(multiFilter([
    { tag: 'CA', name: 'iCalifornia', capital: 'Sacramento', region: 'West' },
    { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    {
        tag: 'MO',
        name: 'Missouri',
        capital: 'Jefferson City',
        region: 'Midwest',
    },
    {
        tag: 'PA',
        name: 'Pennsylvania',
        capital: 'Harrisburg',
        region: 'Northeast',
    },
    {
        tag: 'RI',
        name: 'Rhode Island',
        capital: 'Providence',
        region: 'Northeast',
    },
]))