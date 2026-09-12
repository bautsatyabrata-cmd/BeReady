const timeWorkHard = [
    {
        id: 1,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A can complete a work in 20 days and B in 30 days. They work together for 6 days. A then leaves. How many more days will B take to finish the remaining work?",
        options: ["12 days", "15 days", "18 days", "20 days"],
        answer: 1,
        explanation: "Together rate = 1/20 + 1/30 = 1/12. In 6 days they complete 1/2. Remaining = 1/2. B takes 30 × 1/2 = 15 days."
    },

    {
        id: 2,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A and B together can complete a work in 12 days. A alone takes 20 days. If B works alone for 6 days and then A joins, how many total days are required?",
        options: ["14 days", "15.6 days", "16 days", "18 days"],
        answer: 1,
        explanation: "B's rate = 1/12 − 1/20 = 1/30. In 6 days B completes 1/5. Remaining = 4/5. Together they take (4/5) × 12 = 9.6 days. Total = 15.6 days."
    },

    {
        id: 3,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A is 50% more efficient than B. If A and B together complete a work in 12 days, how many days will B alone take?",
        options: ["24 days", "30 days", "36 days", "40 days"],
        answer: 1,
        explanation: "Let B's rate be x. A's rate is 1.5x. Together, 2.5x = 1/12, so x = 1/30. Therefore B takes 30 days."
    },

    {
        id: 4,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A, B and C can complete a work in 10, 15 and 30 days respectively. A and B work together for 3 days, then C joins them. How many more days are needed?",
        options: ["1.5 days", "2 days", "2.5 days", "3 days"],
        answer: 0,
        explanation: "A+B rate = 1/10 + 1/15 = 1/6. In 3 days they complete 1/2. All three rate = 1/10 + 1/15 + 1/30 = 1/3. Remaining half takes 1.5 days."
    },

    {
        id: 5,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A can complete a work in 24 days. B is 20% less efficient than A. How many days will B take to complete the work?",
        options: ["28 days", "30 days", "32 days", "36 days"],
        answer: 1,
        explanation: "B's efficiency is 80% of A's. Time taken is inversely proportional to efficiency. B's time = 24/0.8 = 30 days."
    },

    {
        id: 6,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A and B can complete a work in 18 days, B and C in 24 days, and C and A in 36 days. How many days will A, B and C together take?",
        options: ["12 days", "14 days", "16 days", "18 days"],
        answer: 2,
        explanation: "Adding pair rates gives 2(A+B+C) = 1/18 + 1/24 + 1/36 = 1/8. Therefore A+B+C = 1/16, so they take 16 days."
    },

    {
        id: 7,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A can complete a work in 15 days and B can complete it in 25 days. They work together for 5 days. What percentage of the work remains?",
        options: ["40%", "46⅔%", "50%", "53⅓%"],
        answer: 3,
        explanation: "Combined rate = 1/15 + 1/25 = 8/75. In 5 days they complete 8/15. Remaining = 7/15 = 46⅔%. Therefore the correct option is 46⅔%."
    },

    {
        id: 8,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A can finish a work in 30 days. B is twice as efficient as A and C is three times as efficient as A. How long will all three take together?",
        options: ["4 days", "5 days", "6 days", "7.5 days"],
        answer: 1,
        explanation: "A's rate = 1/30. B's rate = 2/30 and C's rate = 3/30. Total rate = 6/30 = 1/5. Therefore they take 5 days."
    },

    {
        id: 9,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A and B together complete a work in 8 days. A alone takes 12 days. If B works for 3 days alone, what fraction of the work remains?",
        options: ["5/8", "3/4", "7/8", "11/12"],
        answer: 2,
        explanation: "B's rate = 1/8 − 1/12 = 1/24. In 3 days B completes 1/8. Remaining work = 7/8."
    },

    {
        id: 10,
        chapter: "Time & Work",
        difficulty: "Hard",
        question: "A can complete a work in 40 days. B is 25% more efficient than A. If A and B work together, approximately how many days will they take?",
        options: ["16.5 days", "17.78 days", "20 days", "22.5 days"],
        answer: 1,
        explanation: "A's rate = 1/40. B's rate = 1/32. Combined rate = 1/40 + 1/32 = 9/160. Time = 160/9 ≈ 17.78 days."
    }
];

export default timeWorkHard;