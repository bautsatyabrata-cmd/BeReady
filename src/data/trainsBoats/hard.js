const trainsBoatsHard = [
    {
        id: 1,
        chapter: "Trains & Boats",
        difficulty: "Hard",
        question: "A train 240 m long crosses a platform in 24 seconds at 72 km/h. Find the length of the platform.",
        options: ["200 m", "220 m", "240 m", "260 m"],
        answer: 2,
        explanation: "72 km/h = 20 m/s. Total distance = 20 × 24 = 480 m. Platform length = 480 − 240 = 240 m."
    },

    {
        id: 2,
        chapter: "Trains & Boats",
        difficulty: "Hard",
        question: "Two trains of lengths 200 m and 300 m move in opposite directions and cross each other in 10 seconds. If one train moves at 72 km/h, find the speed of the other train.",
        options: ["90 km/h", "96 km/h", "108 km/h", "120 km/h"],
        answer: 2,
        explanation: "Total length = 500 m. Relative speed = 500/10 = 50 m/s = 180 km/h. Other speed = 180 − 72 = 108 km/h."
    },

    {
        id: 3,
        chapter: "Trains & Boats",
        difficulty: "Hard",
        question: "A train crosses a pole in 12 seconds and a 180 m platform in 30 seconds. Find the length of the train.",
        options: ["100 m", "120 m", "135 m", "150 m"],
        answer: 1,
        explanation: "Let train length be L. L/12 = (L + 180)/30. Therefore 30L = 12L + 2160, giving L = 120 m."
    },

    {
        id: 4,
        chapter: "Trains & Boats",
        difficulty: "Hard",
        question: "A train crosses a man running in the same direction in 20 seconds and another man running in the opposite direction in 12 seconds. Both men run at 6 km/h. Find the speed of the train.",
        options: ["12 km/h", "18 km/h", "24 km/h", "30 km/h"],
        answer: 2,
        explanation: "20(v − 6) = 12(v + 6). Therefore 8v = 192 and v = 24 km/h."
    },

    {
        id: 5,
        chapter: "Trains & Boats",
        difficulty: "Hard",
        question: "A boat travels 60 km downstream and 40 km upstream in a total of 7 hours. If the stream speed is 2 km/h, find the speed of the boat in still water.",
        options: ["12 km/h", "14 km/h", "16 km/h", "18 km/h"],
        answer: 1,
        explanation: "Let still-water speed be v. 60/(v+2) + 40/(v−2) = 7. Solving gives v = 14 km/h."
    },

    {
        id: 6,
        chapter: "Trains & Boats",
        difficulty: "Hard",
        question: "A boat takes 3 hours to travel a certain distance downstream and 5 hours upstream. If the stream speed is 2 km/h, find the distance.",
        options: ["24 km", "27 km", "30 km", "36 km"],
        answer: 2,
        explanation: "Downstream speed = D/3 and upstream speed = D/5. Their difference equals 4 km/h. D/3 − D/5 = 4 gives D = 30 km."
    },

    {
        id: 7,
        chapter: "Trains & Boats",
        difficulty: "Hard",
        question: "A train 300 m long moving at 90 km/h crosses another train 200 m long moving at 54 km/h in the opposite direction. Find the crossing time.",
        options: ["10 seconds", "12.5 seconds", "15 seconds", "18 seconds"],
        answer: 1,
        explanation: "Relative speed = 90 + 54 = 144 km/h = 40 m/s. Total length = 500 m. Time = 500/40 = 12.5 seconds."
    },

    {
        id: 8,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A train 180 m long crosses another train 220 m long moving in the same direction in 20 seconds. If the faster train travels at 72 km/h, find the speed of the slower train.",
        options: ["0 km/h", "18 km/h", "36 km/h", "54 km/h"],
        answer: 0,
        explanation: "Relative speed = 400/20 = 20 m/s = 72 km/h. Since the faster train itself travels at 72 km/h, the slower train has speed 0 km/h under these stated conditions."
    },

    {
        id: 9,
        chapter: "Trains & Boats",
        difficulty: "Hard",
        question: "A boat travels 24 km downstream and 16 km upstream in a total of 5 hours. If the stream speed is 2 km/h, find the speed in still water.",
        options: ["6 km/h", "8 km/h", "10 km/h", "12 km/h"],
        answer: 1,
        explanation: "Let still-water speed be v. 24/(v+2) + 16/(v−2) = 5. Solving gives v = 8 km/h."
    },

    {
        id: 10,
        chapter: "Trains & Boats",
        difficulty: "Hard",
        question: "A train takes 15 seconds to cross a pole and 25 seconds to cross a 200 m platform. Find the length of the train.",
        options: ["240 m", "300 m", "360 m", "400 m"],
        answer: 1,
        explanation: "Let train length be L. L/15 = (L + 200)/25. Therefore 25L = 15L + 3000, so 10L = 3000 and L = 300 m."
    }
];

export default trainsBoatsHard;