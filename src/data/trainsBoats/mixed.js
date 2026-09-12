const trainsBoatsMixed = [
    {
        id: 1,
        chapter: "Trains & Boats",
        difficulty: "Mastery",
        question: "A train 250 m long crosses a pole in 10 seconds. How long will it take to cross a 350 m platform?",
        options: ["20 seconds", "22 seconds", "24 seconds", "25 seconds"],
        answer: 2,
        explanation: "Speed = 250/10 = 25 m/s. Total distance = 250 + 350 = 600 m. Time = 600/25 = 24 seconds."
    },

    {
        id: 2,
        chapter: "Trains & Boats",
        difficulty: "Mastery",
        question: "Two trains of lengths 180 m and 220 m move in opposite directions at 54 km/h and 36 km/h. Find the crossing time.",
        options: ["12 seconds", "14 seconds", "16 seconds", "18 seconds"],
        answer: 2,
        explanation: "Relative speed = 54 + 36 = 90 km/h = 25 m/s. Total length = 400 m. Time = 400/25 = 16 seconds."
    },

    {
        id: 3,
        chapter: "Trains & Boats",
        difficulty: "Mastery",
        question: "A boat travels 30 km downstream in 2 hours and 30 km upstream in 3 hours. Find the speed of the stream.",
        options: ["2 km/h", "2.5 km/h", "3 km/h", "4 km/h"],
        answer: 1,
        explanation: "Downstream speed = 15 km/h and upstream speed = 10 km/h. Stream speed = (15 − 10)/2 = 2.5 km/h."
    },

    {
        id: 4,
        chapter: "Trains & Boats",
        difficulty: "Mastery",
        question: "A boat's speed in still water is 15 km/h and stream speed is 3 km/h. Find the time required to travel 36 km downstream and 24 km upstream.",
        options: ["3.5 hours", "4 hours", "4.5 hours", "5 hours"],
        answer: 1,
        explanation: "Downstream speed = 18 km/h, time = 36/18 = 2 hours. Upstream speed = 12 km/h, time = 24/12 = 2 hours. Total = 4 hours."
    },

    {
        id: 5,
        chapter: "Trains & Boats",
        difficulty: "Mastery",
        question: "A train crosses a pole in 8 seconds and a platform 120 m long in 14 seconds. Find the length of the train.",
        options: ["120 m", "140 m", "160 m", "180 m"],
        answer: 2,
        explanation: "Let train length be L. L/8 = (L + 120)/14. Therefore 14L = 8L + 960, so L = 160 m."
    },

    {
        id: 6,
        chapter: "Trains & Boats",
        difficulty: "Mastery",
        question: "A boat travels 48 km downstream and 32 km upstream in 6 hours. If the stream speed is 2 km/h, find the speed in still water.",
        options: ["10 km/h", "12 km/h", "14 km/h", "16 km/h"],
        answer: 2,
        explanation: "Let still-water speed be v. 48/(v+2) + 32/(v−2) = 6. Solving gives v = 14 km/h."
    },

    {
        id: 7,
        chapter: "Trains & Boats",
        difficulty: "Mastery",
        question: "A train 200 m long moves at 72 km/h. How long will it take to cross a bridge 300 m long?",
        options: ["20 seconds", "25 seconds", "30 seconds", "35 seconds"],
        answer: 1,
        explanation: "72 km/h = 20 m/s. Total distance = 200 + 300 = 500 m. Time = 500/20 = 25 seconds."
    },

    {
        id: 8,
        chapter: "Trains & Boats",
        difficulty: "Mastery",
        question: "Two trains of equal length cross each other in 12 seconds while moving in opposite directions at 54 km/h and 36 km/h. Find the length of each train.",
        options: ["120 m", "135 m", "150 m", "180 m"],
        answer: 2,
        explanation: "Relative speed = 90 km/h = 25 m/s. Total distance = 25 × 12 = 300 m. Since the trains have equal length, each is 150 m."
    },

    {
        id: 9,
        chapter: "Trains & Boats",
        difficulty: "Mastery",
        question: "A train 240 m long crosses a man running in the same direction at 6 km/h in 18 seconds. Find the speed of the train.",
        options: ["48 km/h", "54 km/h", "60 km/h", "66 km/h"],
        answer: 1,
        explanation: "Relative speed = 240/18 = 13⅓ m/s = 48 km/h. Train speed = 48 + 6 = 54 km/h."
    },

    {
        id: 10,
        chapter: "Trains & Boats",
        difficulty: "Mastery",
        question: "A boat travels 40 km downstream and 40 km upstream. Its still-water speed is 12 km/h and stream speed is 4 km/h. Find the total time.",
        options: ["6 hours", "6.5 hours", "7 hours", "7.5 hours"],
        answer: 3,
        explanation: "Downstream speed = 16 km/h, time = 2.5 hours. Upstream speed = 8 km/h, time = 5 hours. Total = 7.5 hours."
    }
];

export default trainsBoatsMixed;