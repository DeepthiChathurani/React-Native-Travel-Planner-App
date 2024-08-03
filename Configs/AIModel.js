const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


  export  const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
            {
                role: "user",
                parts: [
                    {text: "Generate Travel Plan for location: New York USA, for 1 Days and 1 Night for Family with a Luxury budget with a Fight details, Fight price with Booking URL, Hotel option list with Hotel Name, Hotel Address, Price, Hotel image URL, geo coordinates, rating , descriptions and places to visit nearby with Place name, Place Details, Place image URL, Geo coordinates, ticket pricing, Time travel each of the location for 1 days and 1 night with each day plan with best time to visit in JSON Format"},
                ],
            },
            {
                role: "model",
                parts: [
                    {text: "```json\n{\"travelPlan\": {\"destination\": \"New York, USA\", \"duration\": \"1 Day and 1 Night\", \"budget\": \"Luxury\", \"familyFriendly\": true, \"flightDetails\": [{\"airline\": \"Delta Airlines\", \"flightNumber\": \"DL1234\", \"departureAirport\": \"SFO\", \"arrivalAirport\": \"JFK\", \"departureDate\": \"2024-03-10\", \"departureTime\": \"10:00 AM\", \"arrivalDate\": \"2024-03-10\", \"arrivalTime\": \"01:00 PM\", \"price\": \"$500\", \"bookingUrl\": \"https://www.delta.com/\"}], \"hotelOptions\": [{\"hotelName\": \"The Peninsula New York\", \"hotelAddress\": \"700 Fifth Ave, New York, NY 10019, United States\", \"price\": \"$1500+\", \"hotelImageURL\": \"https://www.thepeninsula.com/newyork/en/images/hotel-gallery/hero-image-desktop.jpg\", \"geoCoordinates\": {\"latitude\": \"40.7580\", \"longitude\": \"-73.9855\"}, \"rating\": \"5\", \"description\": \"A luxurious hotel located in Midtown Manhattan, known for its elegant rooms, Michelin-starred dining, and exceptional service.\"}, {\"hotelName\": \"The Ritz-Carlton New York, Central Park\", \"hotelAddress\": \"50 Central Park S, New York, NY 10019, United States\", \"price\": \"$1200+\", \"hotelImageURL\": \"https://www.ritzcarlton.com/en/hotels/new-york/central-park/images/hotel/overview-hero-desktop.jpg\", \"geoCoordinates\": {\"latitude\": \"40.7649\", \"longitude\": \"-73.9766\"}, \"rating\": \"4.5\", \"description\": \"A sophisticated hotel with stunning views of Central Park, offering spacious rooms, a renowned spa, and multiple dining options.\"}, {\"hotelName\": \"The St. Regis New York\", \"hotelAddress\": \"2 E 55th St, New York, NY 10022, United States\", \"price\": \"$1000+\", \"hotelImageURL\": \"https://www.marriott.com/static/media/images/hotels/nycsr/hotel-exterior.jpg\", \"geoCoordinates\": {\"latitude\": \"40.7579\", \"longitude\": \"-73.9740\"}, \"rating\": \"4\", \"description\": \"A historic hotel known for its timeless elegance, iconic Bloody Mary, and prime location in Midtown Manhattan.\"}], \"dailyItinerary\": [{\"day\": \"Day 1\", \"time\": \"Morning (10:00 AM - 12:00 PM)\", \"place\": \"Central Park\", \"details\": \"Enjoy a leisurely stroll through Central Park, taking in the stunning scenery, picnicking, or simply relaxing on a bench.\", \"image\": \"https://www.centralparknyc.org/sites/default/files/styles/hero_image/public/media/cp_hero_03.jpg\", \"geoCoordinates\": {\"latitude\": \"40.7829\", \"longitude\": \"-73.9654\"}, \"ticketPricing\": \"Free\", \"timeTravel\": \"2 hours\"}, {\"day\": \"Day 1\", \"time\": \"Afternoon (1:00 PM - 4:00 PM)\", \"place\": \"The Metropolitan Museum of Art\", \"details\": \"Explore one of the world's finest art museums, showcasing masterpieces from various cultures and periods.\", \"image\": \"https://www.metmuseum.org/sites/default/files/styles/hero_image/public/media/images/hero_images/exterior_wide.jpg\", \"geoCoordinates\": {\"latitude\": \"40.7794\", \"longitude\": \"-73.9632\"}, \"ticketPricing\": \"$25\", \"timeTravel\": \"3 hours\"}, {\"day\": \"Day 1\", \"time\": \"Evening (5:00 PM - 8:00 PM)\", \"place\": \"Top of the Rock\", \"details\": \"Ascend to the top of Rockefeller Center for breathtaking panoramic views of the city.\", \"image\": \"https://www.topoftherocknyc.com/sites/default/files/styles/hero_image/public/images/hero/top-of-the-rock-hero-image.jpg\", \"geoCoordinates\": {\"latitude\": \"40.7580\", \"longitude\": \"-73.9789\"}, \"ticketPricing\": \"$39\", \"timeTravel\": \"3 hours\"}, {\"day\": \"Day 2\", \"time\": \"Morning (10:00 AM - 12:00 PM)\", \"place\": \"Times Square\", \"details\": \"Experience the vibrant energy of Times Square, with its dazzling lights, bustling crowds, and iconic billboards.\", \"image\": \"https://www.timessquarenyc.org/sites/default/files/styles/hero_image/public/media/ts_hero_02.jpg\", \"geoCoordinates\": {\"latitude\": \"40.7580\", \"longitude\": \"-73.9855\"}, \"ticketPricing\": \"Free\", \"timeTravel\": \"2 hours\"}, {\"day\": \"Day 2\", \"time\": \"Afternoon (1:00 PM - 4:00 PM)\", \"place\": \"The Empire State Building\", \"details\": \"Visit one of the world's most iconic skyscrapers, offering stunning views from its observation decks.\", \"image\": \"https://www.esbnyc.com/sites/default/files/styles/hero_image/public/media/hero_images/hero-building-exterior.jpg\", \"geoCoordinates\": {\"latitude\": \"40.7484\", \"longitude\": \"-73.9857\"}, \"ticketPricing\": \"$39\", \"timeTravel\": \"3 hours\"}, {\"day\": \"Day 2\", \"time\": \"Evening (5:00 PM - 8:00 PM)\", \"place\": \"Dinner at a Michelin-starred restaurant\", \"details\": \"Indulge in a gourmet dining experience at one of New York's many Michelin-starred restaurants.\", \"image\": \"https://www.thefork.com/images/resto/wide/273599.jpg\", \"geoCoordinates\": {}, \"ticketPricing\": \"Varies by restaurant\", \"timeTravel\": \"3 hours\"}]}}\n\n```"},
                ],
            },
        ],
    });

    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
