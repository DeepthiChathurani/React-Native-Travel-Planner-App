export const SelectTravelersList = [
    {
    id:1,
    title:'Just me',
    desc:'A sole travels in exploration',
    icon:'✈️️',
    people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travelers in tandem',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'⛺',
        people:'5 to 10 People'
    }
]

export const SelectBudgetOptions = [
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average',
        icon:'💰',

    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸️',
    },
]

export const AI_PROMPT='Generate Travel Plan for location: {location}, for {totalDays} Days and {totalNight} Night ' +
    'for {traveler} with a {budget} budget with a Fight details, Fight price with Booking URL, Hotel option list with Hotel Name, Hotel Address, Price, ' +
    'Hotel image URL, geo coordinates, rating , descriptions and places to visit nearby with Place name, Place Details, ' +
    'Place image URL, Geo coordinates, ticket pricing, ' +
    'Time travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON Format'
