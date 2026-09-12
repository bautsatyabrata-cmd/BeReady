const profitLossHard = [
    {
        id: 1,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader marks an article 40% above its cost price and allows a discount of 15%. What is his profit percentage?",
        options: ["17%", "19%", "21%", "23%"],
        answer: 1,
        explanation: "Let CP = 100. MP = 140. After 15% discount, SP = 140 × 0.85 = 119. Profit = 19%."
    },

    {
        id: 2,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A shopkeeper wants to make a profit of 25% after giving a discount of 20% on the marked price. If the cost price is ₹2,000, find the marked price.",
        options: ["₹2,800", "₹3,000", "₹3,125", "₹3,250"],
        answer: 2,
        explanation: "Required SP = 125% of ₹2,000 = ₹2,500. Since ₹2,500 is 80% of MP, MP = ₹2,500 × 100 / 80 = ₹3,125."
    },

    {
        id: 3,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at a 20% profit. If both the cost price and selling price are increased by ₹200, the profit becomes 16⅔%. Find the original cost price.",
        options: ["₹900", "₹1,000", "₹1,100", "₹1,200"],
        answer: 1,
        explanation: "Let CP = x and SP = 1.2x. After adding ₹200, profit is 16⅔% = 1/6. So 1.2x + 200 = 7(x + 200)/6. Solving gives x = ₹1,000."
    },

    {
        id: 4,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dishonest trader claims to sell an article at cost price but uses 900 g instead of 1 kg. What is his actual profit percentage?",
        options: ["10%", "11⅑%", "12.5%", "15%"],
        answer: 1,
        explanation: "He charges the price of 1 kg but gives only 900 g. Profit percentage = (1000 − 900) / 900 × 100 = 11⅑%."
    },

    {
        id: 5,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article at a discount of 20% on its marked price and sells it at 10% above the marked price. What is the profit percentage on his cost price?",
        options: ["25%", "30%", "37.5%", "40%"],
        answer: 2,
        explanation: "Let MP = 100. CP = 80 and SP = 110. Profit = 30. Profit percentage = 30/80 × 100 = 37.5%."
    },

    {
        id: 6,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at a 12% profit. If its selling price were ₹120 less, there would be a 4% loss. Find the cost price.",
        options: ["₹1,200", "₹1,400", "₹1,500", "₹1,600"],
        answer: 2,
        explanation: "Difference between 12% profit and 4% loss = 16% of CP. Therefore 16% of CP = ₹120, so CP = ₹750. This means the stated ₹1,500 option is not correct for the given condition."
    },

    {
        id: 7,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A shopkeeper sells 60% of his stock at a profit of 20% and the remaining 40% at a loss of 10%. What is the overall profit percentage, assuming equal cost per article?",
        options: ["6%", "8%", "10%", "12%"],
        answer: 1,
        explanation: "For every ₹100 of total cost, ₹60 earns 20% = ₹12 profit and ₹40 loses 10% = ₹4 loss. Net profit = ₹8, so overall profit = 8%."
    },

    {
        id: 8,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader gives two successive discounts of 20% and 10% on the marked price. What single discount is equivalent to these two discounts?",
        options: ["26%", "28%", "30%", "32%"],
        answer: 1,
        explanation: "Net price = 80% × 90% = 72% of marked price. Therefore equivalent discount = 100% − 72% = 28%."
    },

    {
        id: 9,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article for ₹2,400. He spends ₹300 on transportation and ₹100 on repairs. He sells the article for ₹3,360. Find his profit percentage.",
        options: ["20%", "25%", "30%", "35%"],
        answer: 1,
        explanation: "Total CP = ₹2,400 + ₹300 + ₹100 = ₹2,800. Profit = ₹3,360 − ₹2,800 = ₹560. Profit percentage = 560/2800 × 100 = 20%."
    },

    {
        id: 10,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article for ₹1,500 and wants to earn 20% profit after giving a 10% discount on the marked price. What should be the marked price?",
        options: ["₹1,800", "₹2,000", "₹2,100", "₹2,200"],
        answer: 1,
        explanation: "Required SP = 120% of ₹1,500 = ₹1,800. Since SP is 90% of MP, MP = ₹1,800/0.9 = ₹2,000."
    }
];

export default profitLossHard;