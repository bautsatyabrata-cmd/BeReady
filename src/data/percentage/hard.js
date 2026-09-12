const percentageHard = [
    {
        id: 1,
        chapter: "Percentage",
        difficulty: "Hard",
        question: "A number is increased by 30% and then decreased by 30%. What is the net percentage change?",
        options: ["0%", "9% decrease", "9% increase", "6% decrease"],
        answer: 1,
        explanation: "Take 100. After a 30% increase it becomes 130. A 30% decrease on 130 is 39, leaving 91. Net decrease = 9%."
    },

    {
        id: 2,
        chapter: "Percentage",
        difficulty: "Hard",
        question: "The population of a city increases by 10% in the first year and 20% in the second year. If the final population is 26,400, what was the initial population?",
        options: ["20,000", "22,000", "24,000", "25,000"],
        answer: 1,
        explanation: "Final population = Initial × 1.10 × 1.20 = Initial × 1.32. Initial population = 26,400 / 1.32 = 20,000."
    },

    {
        id: 3,
        chapter: "Percentage",
        difficulty: "Hard",
        question: "A person's income increases by 25% while their expenditure increases by 20%. If initially they saved 20% of their income, by what percentage does their saving increase?",
        options: ["35%", "40%", "45%", "50%"],
        answer: 1,
        explanation: "Let income = 100 and expenditure = 80, so saving = 20. New income = 125 and new expenditure = 96. New saving = 29. Increase = 9/20 × 100 = 45%."
    },

    {
        id: 4,
        chapter: "Percentage",
        difficulty: "Hard",
        question: "A number is first decreased by 20% and then increased by 25%. What is the final percentage change?",
        options: ["5% increase", "5% decrease", "0%", "10% increase"],
        answer: 2,
        explanation: "Take 100. After a 20% decrease = 80. Increasing 80 by 25% gives 100. Therefore there is no net change."
    },

    {
        id: 5,
        chapter: "Percentage",
        difficulty: "Hard",
        question: "In an election, 10% of registered voters did not vote. Of the votes cast, 20% were invalid. The winning candidate received 60% of the valid votes and won by 3,600 votes. Find the total number of registered voters.",
        options: ["25,000", "30,000", "35,000", "40,000"],
        answer: 1,
        explanation: "Valid votes = 90% × 80% = 72% of registered voters. Winner's margin = 60% - 40% = 20% of valid votes = 14.4% of registered voters. Therefore total voters = 3,600 / 0.144 = 25,000."
    },

    {
        id: 6,
        chapter: "Percentage",
        difficulty: "Hard",
        question: "A shopkeeper increases the marked price of an article by 40% and then offers a discount of 20%. What is the effective percentage change from the original price?",
        options: ["8% increase", "12% increase", "20% increase", "8% decrease"],
        answer: 0,
        explanation: "Take original price as 100. Marked price becomes 140. After 20% discount, selling price = 112. Effective increase = 12%."
    },

    {
        id: 7,
        chapter: "Percentage",
        difficulty: "Hard",
        question: "The price of a commodity is increased by 25%. By what percentage must consumption be reduced so that total expenditure remains unchanged?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 1,
        explanation: "Take original price = 100 and consumption = 100. New price = 125. Required consumption = 100/1.25 = 80. Reduction = 20%."
    },

    {
        id: 8,
        chapter: "Percentage",
        difficulty: "Hard",
        question: "A student's marks are 30% more than another student's marks. By what percentage are the second student's marks less than the first student's marks?",
        options: ["20%", "23.08%", "25%", "30%"],
        answer: 1,
        explanation: "Take the second student's marks as 100. First student's marks = 130. Difference = 30. Percentage less = 30/130 × 100 = 23.08%."
    },

    {
        id: 9,
        chapter: "Percentage",
        difficulty: "Hard",
        question: "The value of a machine depreciates by 10% every year. If its present value is ₹72,900, what was its value 3 years ago?",
        options: ["₹90,000", "₹95,000", "₹1,00,000", "₹1,10,000"],
        answer: 2,
        explanation: "After 3 years, value = Original × 0.9³. Therefore Original = 72,900 / 0.729 = ₹1,00,000."
    },

    {
        id: 10,
        chapter: "Percentage",
        difficulty: "Hard",
        question: "A number is increased by x% and then decreased by x%. If the final value is 96% of the original value, find x.",
        options: ["10%", "15%", "20%", "25%"],
        answer: 2,
        explanation: "Net multiplier = (1 + x/100)(1 - x/100) = 1 - x²/10000. Since final value is 96%, x²/10000 = 0.04, giving x = 20%."
    }
];

export default percentageHard;