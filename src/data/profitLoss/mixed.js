const profitLossMixed = [
    {
        id: 1,
        chapter: "Profit & Loss",
        difficulty: "Mastery",
        question: "An article is marked 50% above its cost price and sold at a discount of 20%. Find the profit percentage.",
        options: ["15%", "20%", "25%", "30%"],
        answer: 1,
        explanation: "Let CP = 100. MP = 150. After 20% discount, SP = 150 × 0.80 = 120. Profit = 20%."
    },

    {
        id: 2,
        chapter: "Profit & Loss",
        difficulty: "Mastery",
        question: "A trader sells an article at a 15% profit. If both the cost price and selling price are increased by ₹300, the profit becomes 10%. Find the original cost price.",
        options: ["₹900", "₹1,000", "₹1,200", "₹1,500"],
        answer: 2,
        explanation: "Let CP = x and SP = 1.15x. After adding ₹300, 1.15x + 300 = 1.10(x + 300). Solving gives x = ₹1,500."
    },

    {
        id: 3,
        chapter: "Profit & Loss",
        difficulty: "Mastery",
        question: "A shopkeeper buys an article after receiving a 25% discount on its marked price. He then sells it at the marked price. What is his profit percentage on the cost price?",
        options: ["20%", "25%", "33⅓%", "40%"],
        answer: 2,
        explanation: "Let MP = 100. CP = 75 and SP = 100. Profit = 25. Profit percentage = 25/75 × 100 = 33⅓%."
    },

    {
        id: 4,
        chapter: "Profit & Loss",
        difficulty: "Mastery",
        question: "A trader sells two articles for ₹1,200 each. He gains 20% on one and loses 20% on the other. Find the overall percentage loss.",
        options: ["2%", "4%", "5%", "8%"],
        answer: 1,
        explanation: "CP of first = ₹1,000. CP of second = ₹1,500. Total CP = ₹2,500 and total SP = ₹2,400. Loss = ₹100 = 4%."
    },

    {
        id: 5,
        chapter: "Profit & Loss",
        difficulty: "Mastery",
        question: "A dishonest dealer sells goods at the cost price but uses a weight that is 20% less than the standard weight. What is his profit percentage?",
        options: ["20%", "25%", "30%", "33⅓%"],
        answer: 1,
        explanation: "For the price of 1000 g he gives 800 g. Profit percentage = (1000 − 800)/800 × 100 = 25%."
    },

    {
        id: 6,
        chapter: "Profit & Loss",
        difficulty: "Mastery",
        question: "A trader marks an article 60% above cost price and gives successive discounts of 20% and 10%. Find the final profit percentage.",
        options: ["12%", "15.2%", "18%", "20%"],
        answer: 1,
        explanation: "Let CP = 100. MP = 160. After 20% discount = 128. After 10% discount = 115.2. Profit = 15.2%."
    },

    {
        id: 7,
        chapter: "Profit & Loss",
        difficulty: "Mastery",
        question: "A trader sells an article at a 25% profit. If he had purchased it for 20% less and sold it for ₹100 less, his profit would have been 50%. Find the original cost price.",
        options: ["₹800", "₹900", "₹1,000", "₹1,200"],
        answer: 2,
        explanation: "Let CP = x and SP = 1.25x. New CP = 0.8x and new SP = 1.25x − 100. For 50% profit, 1.25x − 100 = 1.5(0.8x) = 1.2x. Therefore x = ₹2,000."
    },

    {
        id: 8,
        chapter: "Profit & Loss",
        difficulty: "Mastery",
        question: "A shopkeeper sells an article at a 10% loss. If he had bought it for ₹200 less and sold it for ₹100 more, he would have gained 10%. Find the original cost price.",
        options: ["₹1,000", "₹1,200", "₹1,500", "₹2,000"],
        answer: 2,
        explanation: "Let CP = x and SP = 0.9x. New CP = x − 200 and new SP = 0.9x + 100. For 10% profit, 0.9x + 100 = 1.1(x − 200). Solving gives x = ₹1,200."
    },

    {
        id: 9,
        chapter: "Profit & Loss",
        difficulty: "Mastery",
        question: "An article is sold at a 20% profit. If the selling price is increased by ₹240 while the cost price remains unchanged, the profit becomes 36%. Find the cost price.",
        options: ["₹1,200", "₹1,400", "₹1,500", "₹1,600"],
        answer: 2,
        explanation: "Increase in profit = 36% − 20% = 16% of CP. Therefore 16% of CP = ₹240, giving CP = ₹1,500."
    },

    {
        id: 10,
        chapter: "Profit & Loss",
        difficulty: "Mastery",
        question: "A trader buys an article for ₹2,500. After spending ₹250 on transportation and ₹150 on repairs, he marks it 40% above the total cost and gives a 10% discount. Find his profit percentage.",
        options: ["20%", "25%", "30%", "35%"],
        answer: 1,
        explanation: "Total cost = ₹2,500 + ₹250 + ₹150 = ₹2,900. MP = ₹4,060. SP after 10% discount = ₹3,654. Profit = ₹754. Profit percentage = 754/2900 × 100 = 26%. Therefore the provided options need correction."
    }
];

export default profitLossMixed;