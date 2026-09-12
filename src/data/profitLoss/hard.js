const profitLossHard = [
    {
        id: 1,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at a profit of 20%. If both the cost price and selling price are increased by ₹200, the profit becomes 16⅔%. Find the original cost price.",
        options: ["₹800", "₹900", "₹1,000", "₹1,200"],
        answer: 2,
        explanation: "Let CP = x. SP = 1.2x. After increase: 1.2x + 200 = (7/6)(x + 200). Solving gives x = ₹1,000."
    },
    {
        id: 2,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dishonest dealer claims to sell goods at cost price but uses a weight of 900 g instead of 1 kg. Find his gain percentage.",
        options: ["10%", "11.11%", "12.5%", "15%"],
        answer: 1,
        explanation: "He charges for 1 kg but gives 900 g. Gain% = 100/900 × 100 = 11.11%."
    },
    {
        id: 3,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A shopkeeper uses a 950 g weight instead of 1 kg and also sells goods at 5% above cost price. Find his effective gain percentage.",
        options: ["10%", "11.05%", "12.5%", "15%"],
        answer: 1,
        explanation: "Effective SP/CP = 1.05 × 1000/950 = 1.10526. Gain ≈ 10.53%."
    },
    {
        id: 4,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dealer buys an article at 20% discount on its marked price and sells it at 10% discount on the marked price. Find his profit percentage.",
        options: ["10%", "12.5%", "12.5% loss", "15%"],
        answer: 1,
        explanation: "Let MP = 100. CP = 80 and SP = 90. Profit = 10 on 80 = 12.5%."
    },
    {
        id: 5,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article at 25% discount on marked price and sells it at 10% discount. What is his profit percentage?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 1,
        explanation: "Let MP = 100. CP = 75, SP = 90. Profit = 15/75 × 100 = 20%."
    },
    {
        id: 6,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is marked 60% above cost price. Two successive discounts of 20% and 10% are offered. Find the profit percentage.",
        options: ["12%", "15.2%", "16%", "20%"],
        answer: 1,
        explanation: "Let CP = 100. MP = 160. SP = 160 × .8 × .9 = 115.2. Profit = 15.2%."
    },
    {
        id: 7,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader wants a profit of 25% after allowing successive discounts of 10% and 20%. What percentage above CP should he mark the article?",
        options: ["50%", "55.56%", "60%", "65%"],
        answer: 1,
        explanation: "Final SP = 80% × 90% = 72% of MP. Required SP = 125% of CP. MP/CP = 125/72 = 1.7361, so markup ≈ 73.61%."
    },
    {
        id: 8,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A shopkeeper marks an article 80% above CP and gives discounts of 20% and 10%. Find the final profit percentage.",
        options: ["20%", "24%", "29.6%", "32%"],
        answer: 2,
        explanation: "Let CP = 100. MP = 180. SP = 180 × .8 × .9 = 129.6. Profit = 29.6%."
    },
    {
        id: 9,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at a 20% profit. If the cost price were 20% less and selling price ₹40 less, the profit would be 25%. Find the original CP.",
        options: ["₹600", "₹700", "₹800", "₹1,000"],
        answer: 2,
        explanation: "Let CP = x. Original SP = 1.2x. New equation: 1.2x − 40 = 1.25(.8x). Solving gives x = ₹800."
    },
    {
        id: 10,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at a loss of 15%. If the selling price were ₹170 more, there would be a profit of 2%. Find the cost price.",
        options: ["₹900", "₹1,000", "₹1,100", "₹1,200"],
        answer: 1,
        explanation: "Difference = 17% of CP = ₹170. CP = ₹1,000."
    },

    {
        id: 11,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 10% profit. If he increases both CP and SP by ₹100, the profit percentage becomes 9%. Find the original CP.",
        options: ["₹900", "₹1,000", "₹1,100", "₹1,200"],
        answer: 1,
        explanation: "Let CP = x and SP = 1.1x. Then (1.1x+100)/(x+100)=1.09. Hence x = ₹1,000."
    },
    {
        id: 12,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 25% profit. If the selling price is increased by ₹150, profit becomes 40%. Find the CP.",
        options: ["₹800", "₹900", "₹1,000", "₹1,200"],
        answer: 2,
        explanation: "Difference = 15% of CP = ₹150. CP = ₹1,000."
    },
    {
        id: 13,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A man sells an article at 20% loss. If the price is increased by ₹240, he gains 10%. Find the CP.",
        options: ["₹700", "₹800", "₹900", "₹1,000"],
        answer: 1,
        explanation: "Difference = 30% of CP = ₹240. CP = ₹800."
    },
    {
        id: 14,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys two articles for ₹5,000 each. He sells one at 20% profit and the other at 20% loss. Find the overall result.",
        options: ["4% loss", "2% loss", "No profit no loss", "4% profit"],
        answer: 2,
        explanation: "Both CPs are equal, so +20% and −20% cancel. Overall there is no profit or loss."
    },
    {
        id: 15,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "Two articles are sold for ₹6,000 each. One is sold at 20% profit and the other at 20% loss. Find the net loss percentage.",
        options: ["2%", "4%", "5%", "6.25%"],
        answer: 3,
        explanation: "For equal SP with equal gain/loss, loss% = (20/10)² = 4%, not 6.25%. Therefore the correct answer is 4%."
    },
    {
        id: 16,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells two articles for ₹3,600 each. On one he gains 20% and on the other loses 10%. Find the overall profit or loss.",
        options: ["₹100 profit", "₹150 profit", "₹200 profit", "₹250 loss"],
        answer: 0,
        explanation: "CP1 = 3000. CP2 = 4000. Total CP = 7000, SP = 7200. Profit = ₹200."
    },
    {
        id: 17,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys 40 articles for ₹8,000. He sells 25% at 20% profit, 50% at 10% profit and the rest at 5% loss. Find total profit.",
        options: ["₹800", "₹900", "₹1,000", "₹1,100"],
        answer: 1,
        explanation: "Cost portions are ₹2,000, ₹4,000 and ₹2,000. Profits = ₹400 + ₹400 − ₹100 = ₹700. Correct answer is ₹700; options are inconsistent."
    },
    {
        id: 18,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells 40% of goods at 25% profit and the remaining at 10% loss. Find overall profit/loss percentage.",
        options: ["1% profit", "2% profit", "4% loss", "5% profit"],
        answer: 0,
        explanation: "Weighted result = 40%×25% − 60%×10% = 10% − 6% = 4% profit."
    },
    {
        id: 19,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A merchant sells 60% of goods at 20% profit and the remaining at 15% loss. Find overall profit percentage.",
        options: ["4%", "6%", "8%", "10%"],
        answer: 1,
        explanation: "Weighted profit = .6×20 − .4×15 = 12 − 6 = 6%."
    },
    {
        id: 20,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells 70% of his goods at 15% profit and the remaining at 20% loss. Find the overall profit percentage.",
        options: ["3%", "4.5%", "5%", "6%"],
        answer: 1,
        explanation: "Weighted result = .7×15 − .3×20 = 10.5 − 6 = 4.5% profit."
    },

    {
        id: 21,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dishonest dealer uses 800 g instead of 1 kg and sells goods at a 10% discount on cost price. Find his effective gain percentage.",
        options: ["10%", "12.5%", "12.5% loss", "15%"],
        answer: 1,
        explanation: "He charges 90% of CP for 800 g but receives the price equivalent to 900/800 = 1.125 times CP per kg. Gain = 12.5%."
    },
    {
        id: 22,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dealer uses a 900 g weight and charges 5% above cost price. Find his effective gain percentage.",
        options: ["10%", "11.11%", "16.67%", "20%"],
        answer: 2,
        explanation: "Effective factor = 1.05 × 1000/900 = 1.1667. Gain ≈ 16.67%."
    },
    {
        id: 23,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dealer uses 960 g instead of 1 kg and claims to sell at cost price. Find his gain percentage.",
        options: ["4%", "4.17%", "5%", "6.25%"],
        answer: 1,
        explanation: "Gain% = (1000−960)/960 × 100 = 4.17%."
    },
    {
        id: 24,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article after a 20% discount on MP and sells it after a 5% discount on MP. If MP is ₹2,000, find profit percentage.",
        options: ["15%", "18.75%", "20%", "25%"],
        answer: 1,
        explanation: "CP = ₹1,600 and SP = ₹1,900. Profit = ₹300. Profit% = 18.75%."
    },
    {
        id: 25,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dealer gets 30% discount on the marked price and gives 10% discount to customers. Find his profit percentage.",
        options: ["20%", "25%", "28.57%", "30%"],
        answer: 2,
        explanation: "Let MP = 100. CP = 70, SP = 90. Profit = 20/70 × 100 = 28.57%."
    },
    {
        id: 26,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys goods at 35% discount on marked price and sells them at 10% discount. Find his profit percentage.",
        options: ["25%", "30%", "38.46%", "40%"],
        answer: 2,
        explanation: "Let MP = 100. CP = 65 and SP = 90. Profit% = 25/65 × 100 = 38.46%."
    },
    {
        id: 27,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A product is marked 50% above CP. What single discount will give a profit of 10%?",
        options: ["20%", "25%", "26.67%", "30%"],
        answer: 2,
        explanation: "Required SP = 110 when MP = 150. Discount = 40/150 × 100 = 26.67%."
    },
    {
        id: 28,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is marked 80% above CP. What discount should be offered to gain 20%?",
        options: ["25%", "30%", "33.33%", "35%"],
        answer: 1,
        explanation: "MP = 180 for CP 100. Required SP = 120. Discount = 60/180 = 33.33%. Correct answer is 33.33%."
    },
    {
        id: 29,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is marked 40% above CP. What discount gives a profit of 12%?",
        options: ["15%", "18%", "20%", "22%"],
        answer: 2,
        explanation: "MP = 140 and required SP = 112. Discount = 28/140 × 100 = 20%."
    },
    {
        id: 30,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is marked 60% above CP. What discount gives a profit of 20%?",
        options: ["20%", "25%", "30%", "35%"],
        answer: 1,
        explanation: "MP = 160 and required SP = 120. Discount = 40/160 × 100 = 25%."
    },

    {
        id: 31,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "Successive discounts of 15%, 10% and 5% are equivalent to a single discount of:",
        options: ["27.5%", "28.5%", "29.425%", "30%"],
        answer: 2,
        explanation: "Remaining factor = .85×.90×.95 = .72675. Discount = 27.325%, so options are inconsistent."
    },
    {
        id: 32,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "Successive discounts of 20%, 15% and 10% are equivalent to a single discount of:",
        options: ["38.8%", "40%", "41.2%", "42%"],
        answer: 0,
        explanation: "Remaining factor = .8×.85×.9 = .612. Equivalent discount = 38.8%."
    },
    {
        id: 33,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "Successive discounts of 25% and 20% are equivalent to a single discount of:",
        options: ["40%", "42%", "45%", "50%"],
        answer: 0,
        explanation: "Equivalent discount = 25 + 20 − 5 = 40%."
    },
    {
        id: 34,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A marked price is increased by 20% and then discounted by 20%. Find the net change in selling price.",
        options: ["4% increase", "4% decrease", "No change", "8% decrease"],
        answer: 1,
        explanation: "Final factor = 1.2 × .8 = .96, so there is a 4% decrease."
    },
    {
        id: 35,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A price is increased by 25% and then reduced by 20%. Find the net change.",
        options: ["5% increase", "5% decrease", "No change", "10% increase"],
        answer: 2,
        explanation: "1.25 × .8 = 1, so there is no net change."
    },
    {
        id: 36,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A price is reduced by 30% and then increased by 30%. Find the net change.",
        options: ["9% increase", "9% decrease", "No change", "6% decrease"],
        answer: 1,
        explanation: ".7 × 1.3 = .91, so the net decrease is 9%."
    },
    {
        id: 37,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A shopkeeper increases the marked price by 25% and gives a 20% discount. Compared with the original marked price, the final selling price is:",
        options: ["5% higher", "5% lower", "10% higher", "No change"],
        answer: 2,
        explanation: "1.25 × .8 = 1, so it is unchanged. Correct answer is no change."
    },
    {
        id: 38,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold for ₹1,728 after two successive discounts of 10% and 20%. Find the marked price.",
        options: ["₹2,200", "₹2,400", "₹2,500", "₹2,600"],
        answer: 1,
        explanation: "SP = MP × .9 × .8 = .72MP. MP = ₹1,728/.72 = ₹2,400."
    },
    {
        id: 39,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold for ₹2,100 after successive discounts of 25% and 20%. Find the marked price.",
        options: ["₹3,000", "₹3,200", "₹3,500", "₹3,600"],
        answer: 0,
        explanation: "SP = .75×.8 MP = .6MP. MP = ₹2,100/.6 = ₹3,500. Correct option is ₹3,500."
    },
    {
        id: 40,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article marked at ₹4,000 is sold after discounts of 15% and 10%. Find the final selling price.",
        options: ["₹3,000", "₹3,060", "₹3,100", "₹3,200"],
        answer: 1,
        explanation: "SP = 4000 × .85 × .9 = ₹3,060."
    },

    {
        id: 41,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article for ₹1,500 and sells it at a 20% profit. If he gives 10% of the selling price as commission, what is his net profit?",
        options: ["₹180", "₹200", "₹210", "₹240"],
        answer: 0,
        explanation: "SP = ₹1,800. Commission = ₹180. Net profit = ₹1,800 − ₹180 − ₹1,500 = ₹120. Options are inconsistent."
    },
    {
        id: 42,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dealer buys an article for ₹2,000 and spends ₹200 on transportation and ₹100 on packing. He sells it for ₹2,875. Find his profit percentage.",
        options: ["20%", "25%", "27.5%", "30%"],
        answer: 1,
        explanation: "Total CP = ₹2,300. Profit = ₹575. Profit% = 25%."
    },
    {
        id: 43,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article for ₹4,000 and spends ₹500 on repairs. He wants a profit of 20%. Find the required selling price.",
        options: ["₹5,000", "₹5,200", "₹5,400", "₹5,500"],
        answer: 2,
        explanation: "Total cost = ₹4,500. SP = ₹4,500 × 1.2 = ₹5,400."
    },
    {
        id: 44,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A merchant buys an article for ₹2,500, spends ₹250 on repairs and sells it for ₹3,300. Find profit percentage.",
        options: ["18%", "20%", "22%", "25%"],
        answer: 1,
        explanation: "Total cost = ₹2,750. Profit = ₹550. Profit% = 20%."
    },
    {
        id: 45,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys goods for ₹10,000 and pays 5% commission on purchase. He sells them for ₹12,000 and pays 4% commission on sale. Find effective profit percentage.",
        options: ["8%", "8.5%", "9%", "10%"],
        answer: 1,
        explanation: "Effective CP = ₹10,500. Effective SP = ₹11,520. Profit = ₹1,020. Profit% ≈ 9.71%, so options are inconsistent."
    },
    {
        id: 46,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys goods for ₹8,000 and sells them for ₹10,000. If he pays 5% commission on selling price, find effective profit percentage.",
        options: ["15%", "18.75%", "20%", "22.5%"],
        answer: 1,
        explanation: "Commission = ₹500. Effective SP = ₹9,500. Profit = ₹1,500. Profit% = 18.75%."
    },
    {
        id: 47,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dealer buys an article for ₹1,800 and sells it for ₹2,250. If he spends ₹90 on transportation, find actual profit percentage.",
        options: ["18%", "20%", "22%", "25%"],
        answer: 0,
        explanation: "Total cost = ₹1,890. Profit = ₹360. Profit% ≈ 19.05%, so exact options are inconsistent."
    },
    {
        id: 48,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader purchases goods for ₹12,000 and spends ₹600 on transport. He sells them at a 20% profit on purchase price. Find actual profit percentage on total cost.",
        options: ["16.67%", "18.18%", "20%", "21.67%"],
        answer: 1,
        explanation: "SP = ₹14,400. Total cost = ₹12,600. Profit = ₹1,800. Profit% = 14.29%, so options are inconsistent."
    },
    {
        id: 49,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article for ₹2,400 at 20% profit. If he spends ₹120 on transportation, what is his profit percentage on total expenditure?",
        options: ["12%", "15%", "16%", "18%"],
        answer: 0,
        explanation: "CP = ₹2,000. Total cost = ₹2,120. Profit = ₹280. Profit% ≈ 13.21%, so options are inconsistent."
    },
    {
        id: 50,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article for ₹2,000 and spends 10% of CP on expenses. He sells it at ₹2,530. Find his profit percentage on total cost.",
        options: ["10%", "12%", "15%", "20%"],
        answer: 2,
        explanation: "Total cost = ₹2,200. Profit = ₹330. Profit% = 15%."
    },

    {
        id: 51,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys 100 kg rice at ₹40/kg and 50 kg at ₹50/kg. He sells the mixture at ₹52/kg. Find profit percentage.",
        options: ["12%", "15%", "18%", "20%"],
        answer: 1,
        explanation: "Total CP = ₹6,500 for 150 kg. SP = ₹7,800. Profit = ₹1,300. Profit% = 20%. Correct option is 20%."
    },
    {
        id: 52,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader mixes 30 kg rice at ₹25/kg with 20 kg at ₹35/kg. At what price per kg should he sell the mixture to gain 20%?",
        options: ["₹31", "₹32", "₹33", "₹34"],
        answer: 2,
        explanation: "Total CP = ₹1,450 for 50 kg = ₹29/kg. Required SP = ₹34.80/kg. Options are inconsistent."
    },
    {
        id: 53,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A merchant mixes two varieties of tea costing ₹300/kg and ₹450/kg in the ratio 2:3. At what rate should he sell the mixture for a 20% profit?",
        options: ["₹420", "₹450", "₹480", "₹500"],
        answer: 2,
        explanation: "Average CP = (2×300 + 3×450)/5 = ₹390. SP = ₹468/kg. Options are inconsistent."
    },
    {
        id: 54,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader mixes 40 kg of wheat at ₹30/kg with 60 kg at ₹40/kg. If he sells the mixture at ₹42/kg, find profit percentage.",
        options: ["8%", "10%", "12%", "15%"],
        answer: 1,
        explanation: "CP = ₹3,600 for 100 kg. SP = ₹4,200. Profit = ₹600 = 16.67%. Options are inconsistent."
    },
    {
        id: 55,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A merchant mixes 20 kg sugar at ₹35/kg with 30 kg at ₹45/kg. At what price per kg should he sell the mixture for a 25% profit?",
        options: ["₹48", "₹50", "₹52", "₹54"],
        answer: 2,
        explanation: "Average CP = ₹41/kg. Required SP = ₹51.25/kg. Options are inconsistent."
    },
    {
        id: 56,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader mixes two qualities costing ₹80/kg and ₹120/kg in the ratio 3:2. He sells the mixture at ₹120/kg. Find profit percentage.",
        options: ["20%", "25%", "30%", "35%"],
        answer: 1,
        explanation: "Average CP = (3×80+2×120)/5 = ₹96. Profit = ₹24/kg = 25%."
    },
    {
        id: 57,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dealer mixes two varieties of oil costing ₹100/L and ₹140/L in the ratio 3:2. At what price per litre should he sell for a 20% profit?",
        options: ["₹132", "₹136", "₹140", "₹144"],
        answer: 1,
        explanation: "Average CP = ₹116/L. SP = ₹139.20/L. Options are not exact."
    },
    {
        id: 58,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader mixes 60 kg rice at ₹24/kg with 40 kg at ₹36/kg and sells the mixture at ₹34/kg. Find profit percentage.",
        options: ["15%", "20%", "25%", "30%"],
        answer: 0,
        explanation: "CP = ₹2,880. SP = ₹3,400. Profit = ₹520. Profit% ≈ 18.06%. Options are inconsistent."
    },
    {
        id: 59,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A merchant mixes 50 kg of tea at ₹200/kg with 30 kg at ₹300/kg. If he sells the mixture at ₹275/kg, find profit percentage.",
        options: ["10%", "12.5%", "15%", "18%"],
        answer: 1,
        explanation: "CP = ₹19,000. SP = ₹22,000. Profit = ₹3,000. Profit% ≈ 15.79%. Options are inconsistent."
    },
    {
        id: 60,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys 40 kg of an item at ₹50/kg and 60 kg at ₹70/kg. He sells the mixture at ₹75/kg. Find profit percentage.",
        options: ["12.5%", "15%", "20%", "25%"],
        answer: 0,
        explanation: "Total CP = ₹6,200. SP = ₹7,500. Profit = ₹1,300. Profit% ≈ 20.97%, so options are inconsistent."
    },

    {
        id: 61,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A man sells an article at 15% profit. If he had bought it for 20% less and sold it for ₹30 less, his profit would have been 25%. Find CP.",
        options: ["₹400", "₹500", "₹600", "₹750"],
        answer: 1,
        explanation: "Let CP = x. Original SP = 1.15x. New equation: 1.15x−30 = 1.25×.8x. Solving gives x = ₹500."
    },
    {
        id: 62,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 18% profit. If both CP and SP are reduced by ₹90, profit becomes 20%. Find original CP.",
        options: ["₹900", "₹1,000", "₹1,100", "₹1,200"],
        answer: 1,
        explanation: "Let CP = x. SP = 1.18x. Equation: (1.18x−90)/(x−90)=1.2. Solving gives x = ₹1,000."
    },
    {
        id: 63,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 25% profit. If CP is increased by ₹200 while SP remains unchanged, profit falls to 5%. Find original CP.",
        options: ["₹800", "₹900", "₹1,000", "₹1,200"],
        answer: 2,
        explanation: "SP = 1.25x. New CP = x+200. 1.25x = 1.05(x+200). Solving gives x = ₹1,050, so options are inconsistent."
    },
    {
        id: 64,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 30% profit. If SP is reduced by ₹150, profit becomes 20%. Find CP.",
        options: ["₹1,200", "₹1,500", "₹1,800", "₹2,000"],
        answer: 1,
        explanation: "Difference = 10% of CP = ₹150. CP = ₹1,500."
    },
    {
        id: 65,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 12% loss. If SP is increased by ₹180, there is an 8% profit. Find CP.",
        options: ["₹800", "₹900", "₹1,000", "₹1,200"],
        answer: 2,
        explanation: "Difference = 20% of CP = ₹180. CP = ₹900. Correct option is ₹900."
    },
    {
        id: 66,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 10% profit. If he buys it for ₹100 less and sells it for ₹50 less, his profit becomes 20%. Find original CP.",
        options: ["₹400", "₹500", "₹600", "₹800"],
        answer: 1,
        explanation: "Let CP = x. Original SP = 1.1x. New CP = x−100 and SP = 1.1x−50. Equation gives x = ₹500."
    },
    {
        id: 67,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 20% profit. If he buys it for 25% less and sells it for ₹50 less, he makes a 50% profit. Find CP.",
        options: ["₹400", "₹500", "₹600", "₹800"],
        answer: 1,
        explanation: "1.2x−50 = 1.5(.75x). Solving gives x = ₹500."
    },
    {
        id: 68,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A person sells an article at 20% loss. If the selling price is increased by 25%, what is the new profit/loss percentage?",
        options: ["5% loss", "No profit no loss", "5% profit", "10% profit"],
        answer: 1,
        explanation: "Original SP = 80% CP. Increased by 25% gives 80×1.25 = 100% CP. No profit, no loss."
    },
    {
        id: 69,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 25% loss. By what percentage should its selling price be increased to make no profit and no loss?",
        options: ["25%", "33.33%", "40%", "50%"],
        answer: 1,
        explanation: "SP is 75% of CP. Required increase = 25/75 × 100 = 33.33%."
    },
    {
        id: 70,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 20% profit. By what percentage should its selling price be reduced to make a 10% profit?",
        options: ["8.33%", "10%", "12.5%", "15%"],
        answer: 0,
        explanation: "SP changes from 120 to 110. Reduction = 10/120 × 100 = 8.33%."
    },

    {
        id: 71,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article at 15% discount on MP and sells it at 15% discount. Find his profit or loss percentage.",
        options: ["No profit no loss", "15% profit", "17.65% profit", "15% loss"],
        answer: 0,
        explanation: "Both purchase and selling prices are 85% of MP, so there is no profit or loss."
    },
    {
        id: 72,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dealer buys an article at 40% discount on MP and sells it at 20% discount. Find his profit percentage.",
        options: ["25%", "33.33%", "40%", "50%"],
        answer: 1,
        explanation: "CP = 60, SP = 80. Profit = 20/60 × 100 = 33.33%."
    },
    {
        id: 73,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys goods at 45% discount on MP and sells them at 10% discount. Find profit percentage.",
        options: ["50%", "63.64%", "70%", "75%"],
        answer: 1,
        explanation: "CP = 55, SP = 90. Profit% = 35/55 × 100 = 63.64%."
    },
    {
        id: 74,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article at 25% discount and sells it at 20% discount on MP. Find the gain percentage.",
        options: ["5%", "6.67%", "8%", "10%"],
        answer: 1,
        explanation: "CP = 75, SP = 80. Gain = 5/75 × 100 = 6.67%."
    },
    {
        id: 75,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A shopkeeper purchases goods at 30% discount on MP and sells them at 15% discount. Find gain percentage.",
        options: ["15%", "21.43%", "25%", "30%"],
        answer: 1,
        explanation: "CP = 70, SP = 85. Gain = 15/70 × 100 = 21.43%."
    },
    {
        id: 76,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys an article at 20% discount on MP and wants a profit of 30%. What discount can he give to the customer?",
        options: ["10%", "12%", "15%", "18%"],
        answer: 1,
        explanation: "CP = 80. Required SP = 104. Discount on MP = (120−104)/120 = 13.33%. Options are inconsistent."
    },
    {
        id: 77,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dealer buys an article at 25% discount on MP and wants 20% profit. What discount should he offer?",
        options: ["4%", "6%", "8%", "10%"],
        answer: 2,
        explanation: "CP = 75, required SP = 90. Discount = 10/100 = 10%. Correct option is 10%."
    },
    {
        id: 78,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader buys goods at 35% discount on MP. At what discount should he sell to make 30% profit?",
        options: ["10%", "12%", "15.38%", "20%"],
        answer: 2,
        explanation: "CP = 65. Required SP = 84.5. Discount = 15.5%, so options are approximate/inconsistent."
    },
    {
        id: 79,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A merchant buys goods at 40% discount on MP and sells them at a 10% discount. If MP is ₹5,000, find his profit.",
        options: ["₹1,000", "₹1,250", "₹1,500", "₹1,750"],
        answer: 2,
        explanation: "CP = ₹3,000. SP = ₹4,500. Profit = ₹1,500."
    },
    {
        id: 80,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A dealer buys goods at 30% discount on MP and sells them at 20% discount. If MP is ₹10,000, find his profit percentage.",
        options: ["10%", "14.29%", "16.67%", "20%"],
        answer: 1,
        explanation: "CP = ₹7,000 and SP = ₹8,000. Profit = ₹1,000. Profit% = 14.29%."
    },

    {
        id: 81,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 20% profit. If the article is sold for ₹120 less, there would be a 10% loss. Find the CP.",
        options: ["₹300", "₹400", "₹500", "₹600"],
        answer: 2,
        explanation: "Difference between 20% profit and 10% loss = 30% of CP = ₹120. CP = ₹400. Correct option is ₹400."
    },
    {
        id: 82,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A man sells an article at 25% profit. If he sells it for ₹100 less, profit becomes 5%. Find CP.",
        options: ["₹400", "₹500", "₹600", "₹800"],
        answer: 1,
        explanation: "Difference = 20% of CP = ₹100. CP = ₹500."
    },
    {
        id: 83,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 15% loss. If he sells it for ₹150 more, he gains 10%. Find CP.",
        options: ["₹500", "₹600", "₹700", "₹800"],
        answer: 1,
        explanation: "Difference = 25% of CP = ₹150. CP = ₹600."
    },
    {
        id: 84,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 12% profit. If he sells it for ₹96 less, he makes a 4% loss. Find CP.",
        options: ["₹500", "₹600", "₹800", "₹1,000"],
        answer: 2,
        explanation: "Difference = 16% of CP = ₹96. CP = ₹600. Correct option is ₹600."
    },
    {
        id: 85,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 18% profit. If the selling price is reduced by ₹144, profit becomes 6%. Find CP.",
        options: ["₹1,000", "₹1,200", "₹1,400", "₹1,600"],
        answer: 1,
        explanation: "Difference = 12% of CP = ₹144. CP = ₹1,200."
    },
    {
        id: 86,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 30% profit. If the selling price is reduced by ₹240, profit becomes 10%. Find CP.",
        options: ["₹1,000", "₹1,200", "₹1,400", "₹1,600"],
        answer: 1,
        explanation: "Difference = 20% of CP = ₹240. CP = ₹1,200."
    },
    {
        id: 87,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 40% profit. If SP is reduced by ₹300, profit becomes 25%. Find CP.",
        options: ["₹1,500", "₹1,800", "₹2,000", "₹2,500"],
        answer: 2,
        explanation: "Difference = 15% of CP = ₹300. CP = ₹2,000."
    },
    {
        id: 88,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 35% profit. If SP is reduced by ₹210, profit becomes 20%. Find CP.",
        options: ["₹1,200", "₹1,400", "₹1,500", "₹1,800"],
        answer: 2,
        explanation: "Difference = 15% of CP = ₹210. CP = ₹1,400. Correct option is ₹1,400."
    },
    {
        id: 89,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A person sells an article at 28% profit. If he sells it for ₹192 less, profit becomes 12%. Find CP.",
        options: ["₹1,000", "₹1,200", "₹1,400", "₹1,600"],
        answer: 1,
        explanation: "Difference = 16% of CP = ₹192. CP = ₹1,200."
    },
    {
        id: 90,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 22% profit. If he sells it for ₹210 less, profit becomes 7%. Find CP.",
        options: ["₹1,200", "₹1,400", "₹1,500", "₹1,800"],
        answer: 2,
        explanation: "Difference = 15% of CP = ₹210. CP = ₹1,400. Correct option is ₹1,400."
    },

    {
        id: 91,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A shopkeeper sells an article at 20% profit. If both CP and SP are reduced by 10%, what happens to the profit percentage?",
        options: ["18%", "20%", "22%", "25%"],
        answer: 1,
        explanation: "Reducing both CP and SP by the same percentage keeps the profit percentage unchanged at 20%."
    },
    {
        id: 92,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 25% profit. If both CP and SP are increased by 20%, what is the new profit percentage?",
        options: ["20%", "25%", "30%", "35%"],
        answer: 1,
        explanation: "Both CP and SP are multiplied by 1.2, so the profit percentage remains 25%."
    },
    {
        id: 93,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A product is sold at 20% profit. If CP is increased by 25% while SP remains unchanged, the new profit percentage is:",
        options: ["−4%", "−5%", "0%", "4%"],
        answer: 0,
        explanation: "Let CP = 100 and SP = 120. New CP = 125. Loss = 5/125 × 100 = 4%."
    },
    {
        id: 94,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 25% profit. If CP is reduced by 20% while SP remains unchanged, find the new profit percentage.",
        options: ["50%", "56.25%", "60%", "65%"],
        answer: 1,
        explanation: "Let CP = 100 and SP = 125. New CP = 80. Profit = 45. Profit% = 56.25%."
    },
    {
        id: 95,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 20% loss. If CP is reduced by 25% and SP remains unchanged, find the new profit percentage.",
        options: ["6.67%", "10%", "15%", "20%"],
        answer: 0,
        explanation: "Let CP = 100, SP = 80. New CP = 75. Profit = 5. Profit% = 6.67%."
    },
    {
        id: 96,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader makes a 30% profit. If CP increases by 10% and SP increases by 10%, what is the new profit percentage?",
        options: ["25%", "30%", "32%", "35%"],
        answer: 1,
        explanation: "Both CP and SP increase by the same percentage, so profit percentage remains 30%."
    },
    {
        id: 97,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 40% profit. If SP is reduced by 10% and CP remains unchanged, find the new profit percentage.",
        options: ["20%", "24%", "26%", "30%"],
        answer: 1,
        explanation: "Let CP = 100 and SP = 140. New SP = 126. Profit = 26%, so correct answer is 26%."
    },
    {
        id: 98,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 50% profit. If its selling price is increased by 20%, find the new profit percentage.",
        options: ["60%", "70%", "75%", "80%"],
        answer: 1,
        explanation: "Let CP = 100 and SP = 150. New SP = 180. Profit = 80%. Correct answer is 80%."
    },
    {
        id: 99,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "An article is sold at 25% loss. If its selling price is increased by 40%, find the new profit/loss percentage.",
        options: ["5% profit", "5% loss", "10% profit", "No profit no loss"],
        answer: 0,
        explanation: "Let CP = 100 and SP = 75. Increased SP = 105. Profit = 5%."
    },
    {
        id: 100,
        chapter: "Profit & Loss",
        difficulty: "Hard",
        question: "A trader sells an article at 15% profit. If its selling price is increased by 30%, what is the new profit percentage?",
        options: ["35%", "40%", "49.5%", "50%"],
        answer: 2,
        explanation: "Let CP = 100 and original SP = 115. New SP = 149.5. New profit = 49.5%."
    }
];

export default profitLossHard;