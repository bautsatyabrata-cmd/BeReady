const timeWorkMixed = [
    {
        id: 1,
        chapter: "Time & Work",
        difficulty: "Mastery",
        question: "A can complete a work in 12 days and B in 18 days. They work together for 3 days. A then leaves. How many more days will B take?",
        options: ["9 days", "10 days", "10.5 days", "12 days"],
        answer: 2,
        explanation: "Together rate = 1/12 + 1/18 = 5/36. In 3 days they complete 5/12. Remaining = 7/12. B takes (7/12) × 18 = 10.5 days."
    },

    {
        id: 2,
        chapter: "Time & Work",
        difficulty: "Mastery",
        question: "A and B together complete a work in 10 days. B alone takes 15 days. A works alone for 4 days and then B joins. How many days are required in total?",
        options: ["11.67 days", "12.67 days", "13.67 days", "14.67 days"],
        answer: 1,
        explanation: "A's rate = 1/10 − 1/15 = 1/30. In 4 days A completes 2/15. Remaining = 13/15. Together they complete 1/10 per day, requiring 26/3 = 8.67 days. Total = 12.67 days."
    },

    {
        id: 3,
        chapter: "Time & Work",
        difficulty: "Mastery",
        question: "A is twice as efficient as B, and B is three times as efficient as C. If C takes 36 days to complete a work, how many days will A take?",
        options: ["6 days", "9 days", "12 days", "18 days"],
        answer: 0,
        explanation: "Let C's efficiency be 1. B's efficiency is 3 and A's efficiency is 6. Therefore A is six times as efficient as C and takes 36/6 = 6 days."
    },

    {
        id: 4,
        chapter: "Time & Work",
        difficulty: "Mastery",
        question: "A, B and C can complete a work in 20, 30 and 60 days respectively. They work together for 5 days. What fraction of the work remains?",
        options: ["1/4", "1/3", "1/2", "2/3"],
        answer: 2,
        explanation: "Combined rate = 1/20 + 1/30 + 1/60 = 1/10. In 5 days they complete 1/2. Therefore 1/2 remains."
    },

    {
        id: 5,
        chapter: "Time & Work",
        difficulty: "Mastery",
        question: "A and B together complete a work in 15 days. A alone takes 24 days. How many days will B alone take?",
        options: ["30 days", "35 days", "40 days", "45 days"],
        answer: 2,
        explanation: "B's rate = 1/15 − 1/24 = 1/40. Therefore B alone takes 40 days."
    },

    {
        id: 6,
        chapter: "Time & Work",
        difficulty: "Mastery",
        question: "A and B together complete a work in 12 days. A alone takes 20 days. How many days will B alone take?",
        options: ["24 days", "30 days", "36 days", "40 days"],
        answer: 1,
        explanation: "B's rate = 1/12 − 1/20 = 1/30. Therefore B alone takes 30 days."
    },

    {
        id: 7,
        chapter: "Time & Work",
        difficulty: "Mastery",
        question: "A is 25% more efficient than B. If B takes 20 days to complete a work, how many days will A take?",
        options: ["14 days", "16 days", "18 days", "20 days"],
        answer: 1,
        explanation: "A's efficiency is 125% of B's. A's time = 20/1.25 = 16 days."
    },

    {
        id: 8,
        chapter: "Time & Work",
        difficulty: "Mastery",
        question: "A and B together complete a work in 6 days. A alone takes 10 days. If B works alone for 3 days, what fraction of the work remains?",
        options: ["3/5", "2/3", "4/5", "5/6"],
        answer: 2,
        explanation: "B's rate = 1/6 − 1/10 = 1/15. In 3 days B completes 1/5. Remaining = 4/5."
    },

    {
        id: 9,
        chapter: "Time & Work",
        difficulty: "Mastery",
        question: "A, B and C together can complete a work in 8 days. A alone takes 24 days and B alone takes 16 days. How many days will C alone take?",
        options: ["24 days", "36 days", "48 days", "60 days"],
        answer: 2,
        explanation: "C's rate = 1/8 − 1/24 − 1/16 = 1/48. Therefore C alone takes 48 days."
    },

    {
        id: 10,
        chapter: "Time & Work",
        difficulty: "Mastery",
        question: "A can complete a work in 25 days. B is 50% more efficient than A. If they work together, how many days will they take?",
        options: ["8 days", "10 days", "12 days", "15 days"],
        answer: 1,
        explanation: "A's rate = 1/25. B's rate = 3/50. Combined rate = 1/25 + 3/50 = 1/10. Therefore they take 10 days."
    }
];

export default timeWorkMixed;