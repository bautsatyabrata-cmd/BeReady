const percentageMixed = [
    {
        id: 1,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is increased by 20% and then decreased by 10%. What is the net percentage change?",
        options: ["8% increase", "10% increase", "8% decrease", "12% increase"],
        answer: 0,
        explanation: "Take 100. After 20% increase = 120. After 10% decrease = 108. Net increase = 8%."
    },

    {
        id: 2,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "If 35% of a number is 140, what is 60% of the number?",
        options: ["220", "240", "260", "280"],
        answer: 1,
        explanation: "Number = 140 × 100 / 35 = 400. Therefore 60% of 400 = 240."
    },

    {
        id: 3,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A product's price is reduced by 20%. By what percentage must the reduced price be increased to restore the original price?",
        options: ["20%", "22.5%", "25%", "30%"],
        answer: 2,
        explanation: "Take original price as 100. Reduced price = 80. Required increase = 20/80 × 100 = 25%."
    },

    {
        id: 4,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A student scores 72 marks and fails by 8 marks. If the passing percentage is 40%, what are the maximum marks?",
        options: ["180", "200", "220", "240"],
        answer: 1,
        explanation: "Passing marks = 72 + 8 = 80. Since 80 is 40% of maximum marks, maximum marks = 80 × 100 / 40 = 200."
    },

    {
        id: 5,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The population of a town increases by 10% and then by 15%. If the original population was 20,000, find the final population.",
        options: ["24,000", "25,000", "25,300", "26,000"],
        answer: 2,
        explanation: "After 10% increase = 22,000. After 15% increase = 22,000 × 1.15 = 25,300."
    },

    {
        id: 6,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A person's salary is increased by 20% and then reduced by 10%. If the final salary is ₹21,600, what was the original salary?",
        options: ["₹18,000", "₹19,000", "₹20,000", "₹22,000"],
        answer: 2,
        explanation: "Final salary = Original × 1.20 × 0.90 = Original × 1.08. Original = 21,600 / 1.08 = ₹20,000."
    },

    {
        id: 7,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "In an examination, 30% students failed in Mathematics, 20% failed in English, and 10% failed in both. What percentage passed in both subjects?",
        options: ["50%", "60%", "70%", "80%"],
        answer: 1,
        explanation: "Failed in at least one = 30 + 20 - 10 = 40%. Therefore passed in both = 100 - 40 = 60%."
    },

    {
        id: 8,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A shopkeeper marks an article 50% above its cost price and gives a 20% discount. What is the profit percentage?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 1,
        explanation: "Take CP = 100. MP = 150. SP = 150 × 80/100 = 120. Profit = 20%."
    },

    {
        id: 9,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is decreased by 25%. By what percentage should the resulting number be increased to obtain the original number?",
        options: ["25%", "30%", "33⅓%", "37.5%"],
        answer: 2,
        explanation: "Take original = 100. Reduced = 75. Required increase = 25/75 × 100 = 33⅓%."
    },

    {
        id: 10,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The income of A is 25% more than B's income. B's income is what percentage less than A's income?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 1,
        explanation: "Take B = 100. A = 125. Difference = 25. Percentage less = 25/125 × 100 = 20%."
    },

    {
        id: 11,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A company's revenue increases by 25% while its expenses increase by 10%. If the original revenue was ₹8 lakh and expenses were ₹5 lakh, what is the percentage increase in profit?",
        options: ["40%", "45%", "50%", "55%"],
        answer: 2,
        explanation: "Original profit = 8 - 5 = ₹3 lakh. New revenue = 10 lakh and new expenses = 5.5 lakh. New profit = ₹4.5 lakh. Increase = 1.5/3 × 100 = 50%."
    },

    {
        id: 12,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A student needs 40% marks to pass. He obtains 220 marks and fails by 20 marks. What is the maximum possible marks?",
        options: ["500", "550", "600", "650"],
        answer: 2,
        explanation: "Passing marks = 220 + 20 = 240. Therefore maximum marks = 240/0.40 = 600."
    },

    {
        id: 13,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The price of a commodity is increased by 30%. By what percentage should consumption be reduced so that expenditure increases by only 4%?",
        options: ["18%", "20%", "22%", "24%"],
        answer: 1,
        explanation: "Required consumption factor = 1.04/1.30 = 0.80. Hence consumption must decrease by 20%."
    },

    {
        id: 14,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is first increased by 15%, then increased by 20%, and finally decreased by 25%. What is the overall percentage change?",
        options: ["4.5% increase", "5% decrease", "4.5% decrease", "6% increase"],
        answer: 0,
        explanation: "Net factor = 1.15 × 1.20 × 0.75 = 1.035. Therefore net increase = 3.5%."
    },

    {
        id: 15,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A town has 48,000 people. Its population increases by 12.5% in one year and decreases by 10% the next year. Find the population after two years.",
        options: ["50,400", "51,840", "52,000", "54,000"],
        answer: 1,
        explanation: "After first year = 48,000 × 1.125 = 54,000. After second year = 54,000 × 0.90 = 48,600."
    },

    {
        id: 16,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A shopkeeper gives two successive discounts of 10% and 20%. What single discount is equivalent to these two discounts?",
        options: ["28%", "30%", "32%", "35%"],
        answer: 0,
        explanation: "Equivalent discount = 10 + 20 - (10 × 20)/100 = 28%."
    },

    {
        id: 17,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The numerator of a fraction is increased by 25% and its denominator is decreased by 20%. If the original fraction is 8/15, what is the new fraction?",
        options: ["2/3", "3/4", "4/5", "5/6"],
        answer: 2,
        explanation: "New numerator = 8 × 1.25 = 10. New denominator = 15 × 0.80 = 12. New fraction = 10/12 = 5/6."
    },

    {
        id: 18,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "In an election, 20% of registered voters did not vote. Of the votes cast, 10% were invalid. A candidate received 60% of the valid votes and won by 2,880 votes. Find the number of registered voters.",
        options: ["20,000", "25,000", "30,000", "32,000"],
        answer: 2,
        explanation: "Winner's margin = 20% of valid votes = 2,880, so valid votes = 14,400. Cast votes = 14,400/0.90 = 16,000. Registered voters = 16,000/0.80 = 20,000."
    },

    {
        id: 19,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A machine depreciates by 10% in the first year, 20% in the second year and 25% in the third year. If its original value was ₹80,000, what is its value after three years?",
        options: ["₹42,000", "₹43,200", "₹45,000", "₹48,000"],
        answer: 1,
        explanation: "Value = 80,000 × 0.90 × 0.80 × 0.75 = ₹43,200."
    },

    {
        id: 20,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A person's income increases by 20% and his expenditure increases by 10%. If initially he saved ₹8,000 from an income of ₹40,000, what is his new saving?",
        options: ["₹10,000", "₹11,000", "₹12,000", "₹13,000"],
        answer: 2,
        explanation: "Initial expenditure = 40,000 - 8,000 = 32,000. New income = 48,000. New expenditure = 35,200. New saving = ₹12,800."
    },

    {
        id: 21,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is increased by x% and then decreased by x%. The final value is 96% of the original. Find x.",
        options: ["10%", "15%", "20%", "25%"],
        answer: 2,
        explanation: "(1 + x/100)(1 - x/100) = 0.96. Therefore 1 - x²/10000 = 0.96, so x² = 400 and x = 20%."
    },

    {
        id: 22,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "If 40% of A equals 50% of B and B is 30% of C, then A is what percentage of C?",
        options: ["30%", "37.5%", "40%", "45%"],
        answer: 1,
        explanation: "0.40A = 0.50B, so A = 1.25B. Since B = 0.30C, A = 0.375C = 37.5% of C."
    },

    {
        id: 23,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The price of rice falls by 20%. A family increases its consumption by 15%. What is the percentage change in its expenditure?",
        options: ["2% decrease", "5% decrease", "8% decrease", "10% decrease"],
        answer: 0,
        explanation: "Expenditure factor = 0.80 × 1.15 = 0.92. Hence expenditure decreases by 8%."
    },

    {
        id: 24,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A candidate obtains 48% marks and fails by 24 marks. Another candidate obtains 60% marks and scores 36 marks more than the passing marks. Find the maximum marks.",
        options: ["500", "600", "700", "800"],
        answer: 1,
        explanation: "Difference between scores = 12% of maximum marks = 24 + 36 = 60. Therefore maximum marks = 60/0.12 = 500."
    },

    {
        id: 25,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A product is sold at a 20% profit. If both the cost price and selling price are increased by ₹100, the profit becomes 16⅔%. Find the original cost price.",
        options: ["₹400", "₹500", "₹600", "₹800"],
        answer: 1,
        explanation: "Let CP = x. SP = 1.2x. New profit condition: 1.2x + 100 = (7/6)(x + 100). Solving gives x = ₹500."
    },

    {
        id: 26,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A population increases by 8% annually. If the present population is 58,320, what was it two years ago?",
        options: ["48,000", "50,000", "52,000", "54,000"],
        answer: 1,
        explanation: "Original population = 58,320 / (1.08)² = 50,000."
    },

    {
        id: 27,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A container has 40% water. If 25% of the mixture is removed and replaced with pure water, what is the percentage of water in the new mixture?",
        options: ["50%", "55%", "60%", "65%"],
        answer: 1,
        explanation: "Initial water = 40 units. Removing 25% mixture removes 10 units water. Remaining water = 30. Adding 25 units water gives 55 units in 100. Hence 55%."
    },

    {
        id: 28,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The marked price of an article is 40% above its cost price. After two successive discounts of 10% and 5%, what is the profit percentage?",
        options: ["17.7%", "18%", "19.7%", "20%"],
        answer: 0,
        explanation: "Take CP = 100. MP = 140. SP = 140 × 0.90 × 0.95 = 119.7. Profit = 19.7%."
    },

    {
        id: 29,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A person's salary is 25% higher than another person's salary. The lower salary is what percentage of the higher salary?",
        options: ["75%", "80%", "82.5%", "85%"],
        answer: 1,
        explanation: "Take lower salary = 100. Higher = 125. Lower as percentage of higher = 100/125 × 100 = 80%."
    },

    {
        id: 30,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A student answers 80% of the questions correctly. If 15% of the questions were left unanswered, what percentage of the attempted questions were correct?",
        options: ["88.89%", "90%", "92.5%", "94.12%"],
        answer: 0,
        explanation: "Attempted = 85%. Correct = 80%. Percentage correct among attempted = 80/85 × 100 = 94.12%."
    },

    {
        id: 31,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A company's workforce is reduced by 20%. To restore the original workforce, by what percentage must the reduced workforce increase?",
        options: ["20%", "22.5%", "25%", "30%"],
        answer: 2,
        explanation: "Take original workforce = 100. Reduced = 80. Required increase = 20/80 × 100 = 25%."
    },

    {
        id: 32,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is increased by 50% and then decreased by 40%. What is the net percentage change?",
        options: ["5% increase", "10% decrease", "10% increase", "15% decrease"],
        answer: 0,
        explanation: "Take 100. After increase = 150. After decrease = 90. Net decrease = 10%."
    },

    {
        id: 33,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The population of a city is 2,40,000. If males increase by 10% and females by 20%, the total population becomes 2,67,000. What was the original male population?",
        options: ["90,000", "1,00,000", "1,10,000", "1,20,000"],
        answer: 1,
        explanation: "Let males = M. Females = 240,000 - M. New population = 1.10M + 1.20(240,000 - M) = 267,000. Solving gives M = 90,000."
    },

    {
        id: 34,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "An article is sold at a 10% loss. If its selling price were ₹240 more, there would be a 10% gain. Find the cost price.",
        options: ["₹1,000", "₹1,200", "₹1,400", "₹1,600"],
        answer: 1,
        explanation: "Difference between 10% loss and 10% profit = 20% of CP. Therefore 20% of CP = ₹240, so CP = ₹1,200."
    },

    {
        id: 35,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is first reduced by 30% and then increased by 30%. What is the final percentage change?",
        options: ["9% decrease", "9% increase", "0%", "6% decrease"],
        answer: 0,
        explanation: "Net factor = 0.70 × 1.30 = 0.91. Therefore there is a 9% decrease."
    },

    {
        id: 36,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "In a class, 65% students passed Mathematics, 55% passed Physics, and 15% failed in both. What percentage passed in both subjects?",
        options: ["25%", "30%", "35%", "40%"],
        answer: 2,
        explanation: "Passed at least one = 100 - 15 = 85%. Passed both = 65 + 55 - 85 = 35%."
    },

    {
        id: 37,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A machine's value decreases by 12.5% every year. If its value after two years is ₹38,281.25, what was its original value?",
        options: ["₹48,000", "₹50,000", "₹52,000", "₹55,000"],
        answer: 1,
        explanation: "Value factor each year = 87.5% = 0.875. Original = 38,281.25 / 0.875² = ₹50,000."
    },

    {
        id: 38,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A shopkeeper buys an article for ₹800 and marks it 60% above cost. He gives a discount of 25%. Find his profit percentage.",
        options: ["15%", "20%", "25%", "30%"],
        answer: 1,
        explanation: "MP = 800 × 1.60 = ₹1,280. SP = 1,280 × 0.75 = ₹960. Profit = 160/800 × 100 = 20%."
    },

    {
        id: 39,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The numerator of a fraction is increased by 40% and the denominator by 25%. If the original fraction is 5/8, what is the percentage increase in the fraction?",
        options: ["8%", "12%", "15%", "20%"],
        answer: 1,
        explanation: "New fraction/original fraction = 1.40/1.25 = 1.12. Hence the fraction increases by 12%."
    },

    {
        id: 40,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A family spends 75% of its income. If income rises by 20% and expenditure rises by 10%, by what percentage do savings increase?",
        options: ["40%", "50%", "60%", "70%"],
        answer: 1,
        explanation: "Take income = 100 and expenditure = 75, so saving = 25. New income = 120 and expenditure = 82.5. New saving = 37.5. Increase = 50%."
    },

    {
        id: 41,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A candidate scores 30% in an exam and fails by 12 marks. If he had scored 42%, he would have passed by 12 marks. Find the maximum marks.",
        options: ["150", "180", "200", "240"],
        answer: 1,
        explanation: "Difference = 42% - 30% = 12% of maximum marks. This difference equals 24 marks. Therefore maximum marks = 24/0.12 = 200."
    },

    {
        id: 42,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A price is increased by 25%. By what percentage should the increased price be reduced to return to the original price?",
        options: ["15%", "20%", "22.5%", "25%"],
        answer: 1,
        explanation: "Take original = 100. Increased = 125. Reduction required = 25/125 × 100 = 20%."
    },

    {
        id: 43,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "If 60% of A is equal to 75% of B, then A is what percentage of B?",
        options: ["100%", "115%", "125%", "135%"],
        answer: 2,
        explanation: "0.60A = 0.75B, so A/B = 0.75/0.60 = 1.25. Hence A = 125% of B."
    },

    {
        id: 44,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The price of petrol increases by 20%. A person wants to keep his expenditure unchanged. By what percentage should he reduce consumption?",
        options: ["15%", "16⅔%", "18%", "20%"],
        answer: 1,
        explanation: "Required reduction = 20/120 × 100 = 16⅔%."
    },

    {
        id: 45,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A solution contains 30% acid. How much water should be added to 200 litres of the solution to reduce the acid concentration to 20%?",
        options: ["80 litres", "90 litres", "100 litres", "120 litres"],
        answer: 2,
        explanation: "Acid = 60 litres. For 20% concentration, total solution must be 300 litres. Water added = 100 litres."
    },

    {
        id: 46,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A solution contains 25% alcohol. How much pure alcohol must be added to 300 litres of the solution to make it 40% alcohol?",
        options: ["50 litres", "60 litres", "75 litres", "90 litres"],
        answer: 2,
        explanation: "Initial alcohol = 75 litres. Let x litres alcohol be added. (75+x)/(300+x)=0.40. Solving gives x = 75 litres."
    },

    {
        id: 47,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is increased by 10%, then by 20%, and then by 30%. Find the equivalent single percentage increase.",
        options: ["60.6%", "65.6%", "66%", "70%"],
        answer: 1,
        explanation: "Net factor = 1.10 × 1.20 × 1.30 = 1.716. Therefore increase = 71.6%."
    },

    {
        id: 48,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A company's profit increases from ₹2.5 lakh to ₹3.25 lakh. What is the percentage increase in profit?",
        options: ["25%", "30%", "35%", "40%"],
        answer: 1,
        explanation: "Increase = ₹0.75 lakh. Percentage increase = 0.75/2.5 × 100 = 30%."
    },

    {
        id: 49,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A student's marks increase from 320 to 368. What is the percentage increase?",
        options: ["12.5%", "15%", "17.5%", "20%"],
        answer: 1,
        explanation: "Increase = 48. Percentage increase = 48/320 × 100 = 15%."
    },

    {
        id: 50,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The population of a village decreases by 8% annually. If the present population is 84,640, what was the population two years ago?",
        options: ["95,000", "100,000", "105,000", "110,000"],
        answer: 1,
        explanation: "Original population = 84,640/(0.92²) = 100,000."
    },

    {
        id: 51,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A shopkeeper offers 15% discount on an article marked at ₹2,400. If he still makes a 20% profit, find the cost price.",
        options: ["₹1,500", "₹1,600", "₹1,700", "₹1,800"],
        answer: 1,
        explanation: "SP = 2,400 × 0.85 = ₹2,040. CP = 2,040/1.20 = ₹1,700."
    },

    {
        id: 52,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is 25% less than another number. The second number is what percentage more than the first?",
        options: ["25%", "30%", "33⅓%", "37.5%"],
        answer: 2,
        explanation: "Take second number = 100. First = 75. Increase from 75 to 100 = 25/75 × 100 = 33⅓%."
    },

    {
        id: 53,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "If 20% of x is equal to 30% of y and y is 40% of z, then x is what percentage of z?",
        options: ["50%", "60%", "70%", "80%"],
        answer: 1,
        explanation: "0.20x = 0.30y, so x = 1.5y. Since y = 0.40z, x = 0.60z = 60%."
    },

    {
        id: 54,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A person's expenditure is 80% of his income. If income increases by 25% and expenditure increases by 20%, what is the percentage increase in savings?",
        options: ["35%", "40%", "45%", "50%"],
        answer: 3,
        explanation: "Take income = 100 and expenditure = 80, saving = 20. New income = 125 and expenditure = 96. New saving = 29. Increase = 9/20 × 100 = 45%."
    },

    {
        id: 55,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A company's sales increase by 30%, but the selling price per unit decreases by 10%. What is the percentage change in total revenue?",
        options: ["15% increase", "17% increase", "18% increase", "20% increase"],
        answer: 2,
        explanation: "Revenue factor = 1.30 × 0.90 = 1.17. Therefore revenue increases by 17%."
    },

    {
        id: 56,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The length of a rectangle increases by 25% and its breadth decreases by 20%. What is the percentage change in its area?",
        options: ["5% increase", "5% decrease", "10% increase", "10% decrease"],
        answer: 0,
        explanation: "Area factor = 1.25 × 0.80 = 1.00. Therefore there is no change in area."
    },

    {
        id: 57,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The radius of a circle increases by 20%. By what percentage does its area increase?",
        options: ["40%", "42%", "44%", "48%"],
        answer: 2,
        explanation: "Area is proportional to r². New area factor = 1.20² = 1.44. Increase = 44%."
    },

    {
        id: 58,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The side of a square is increased by 15%. By what percentage does its area increase?",
        options: ["30%", "32.25%", "34.5%", "35%"],
        answer: 1,
        explanation: "Area factor = 1.15² = 1.3225. Therefore area increases by 32.25%."
    },

    {
        id: 59,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The radius of a sphere is increased by 10%. By what percentage does its volume increase?",
        options: ["30%", "31%", "33.1%", "36.1%"],
        answer: 2,
        explanation: "Volume is proportional to r³. New volume factor = 1.10³ = 1.331. Increase = 33.1%."
    },

    {
        id: 60,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A company's employee count increases by 20% and average salary decreases by 10%. What is the percentage change in its total salary bill?",
        options: ["8% increase", "10% increase", "12% increase", "15% increase"],
        answer: 0,
        explanation: "Salary bill factor = 1.20 × 0.90 = 1.08. Therefore total salary bill increases by 8%."
    },

    {
        id: 61,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A man spends 30% of his income on rent and 25% of the remainder on food. If he saves ₹21,000, what is his income?",
        options: ["₹35,000", "₹40,000", "₹45,000", "₹50,000"],
        answer: 1,
        explanation: "After rent, 70% remains. Food = 25% of 70% = 17.5%. Saving = 52.5%. Income = 21,000/0.525 = ₹40,000."
    },

    {
        id: 62,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A person spends 20% of his income on housing, 30% of the remainder on food, and saves ₹28,000. Find his income.",
        options: ["₹40,000", "₹45,000", "₹50,000", "₹56,000"],
        answer: 2,
        explanation: "After housing = 80%. Food = 30% of 80% = 24%. Saving = 56%. Income = 28,000/0.56 = ₹50,000."
    },

    {
        id: 63,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "In an election, candidate A receives 52% of the valid votes and wins by 2,400 votes. If there are only two candidates, how many valid votes were cast?",
        options: ["20,000", "24,000", "30,000", "40,000"],
        answer: 2,
        explanation: "Difference between candidates = 52% - 48% = 4%. Therefore 4% of total votes = 2,400. Total = 60,000."
    },

    {
        id: 64,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A candidate gets 45% of votes and loses by 5,500 votes. If only two candidates contested, find the total votes polled.",
        options: ["40,000", "45,000", "50,000", "55,000"],
        answer: 2,
        explanation: "Winner gets 55%, loser gets 45%. Difference = 10%. Thus 10% of votes = 5,500, so total votes = 55,000."
    },

    {
        id: 65,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is first increased by 25% and then decreased by 20%. If the final number is 750, what was the original number?",
        options: ["700", "750", "800", "850"],
        answer: 2,
        explanation: "Final = Original × 1.25 × 0.80 = Original. Therefore original number = 750."
    },

    {
        id: 66,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A salary is reduced by 20%. By what percentage must the reduced salary be increased to become 12% higher than the original salary?",
        options: ["35%", "40%", "45%", "50%"],
        answer: 1,
        explanation: "Original = 100. Reduced = 80. Target = 112. Required increase = 32/80 × 100 = 40%."
    },

    {
        id: 67,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A price is increased by 40%. By what percentage must the increased price be reduced to make it 16% higher than the original?",
        options: ["14%", "15%", "17.14%", "20%"],
        answer: 2,
        explanation: "Original = 100. Increased = 140. Target = 116. Reduction = 24/140 × 100 = 17.14%."
    },

    {
        id: 68,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A student scores 64% marks and gets 32 marks more than the passing marks. If passing percentage is 48%, find the maximum marks.",
        options: ["160", "180", "200", "240"],
        answer: 2,
        explanation: "Difference = 64% - 48% = 16% of maximum marks. 16% = 32 marks, so maximum marks = 200."
    },

    {
        id: 69,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A candidate obtains 36% marks and fails by 16 marks. Another obtains 44% marks and passes by 24 marks. Find the maximum marks.",
        options: ["400", "450", "500", "600"],
        answer: 2,
        explanation: "Difference between scores = 44% - 36% = 8% of maximum. Difference in marks = 16 + 24 = 40. Therefore maximum = 40/0.08 = 500."
    },

    {
        id: 70,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A shopkeeper sells an article at 25% profit. If he had bought it for 20% less and sold it for ₹60 less, his profit would have been 50%. Find the original cost price.",
        options: ["₹200", "₹240", "₹300", "₹360"],
        answer: 2,
        explanation: "Let CP = x. Original SP = 1.25x. New CP = 0.80x and new SP = 1.25x - 60. For 50% profit, new SP = 1.50 × 0.80x = 1.20x. Thus 1.25x - 60 = 1.20x, giving x = ₹1,200."
    },

    {
        id: 71,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A merchant marks an article 80% above cost price and offers successive discounts of 20% and 10%. What is his profit percentage?",
        options: ["24.8%", "28%", "29.6%", "32%"],
        answer: 2,
        explanation: "Take CP = 100. MP = 180. SP = 180 × 0.80 × 0.90 = 129.6. Profit = 29.6%."
    },

    {
        id: 72,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "An article is sold at a 15% discount on its marked price and still gives a 19% profit. If the cost price is ₹2,000, find the marked price.",
        options: ["₹2,600", "₹2,700", "₹2,800", "₹3,000"],
        answer: 2,
        explanation: "SP = 2,000 × 1.19 = ₹2,380. Since SP = 85% of MP, MP = 2,380/0.85 = ₹2,800."
    },

    {
        id: 73,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A trader gains 20% by selling an article at ₹1,440. What would be his profit percentage if he sold it for ₹1,560?",
        options: ["25%", "28%", "30%", "35%"],
        answer: 2,
        explanation: "CP = 1,440/1.20 = ₹1,200. Profit at ₹1,560 = ₹360. Percentage profit = 30%."
    },

    {
        id: 74,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The price of a commodity is increased by 15%. To keep total expenditure unchanged, consumption is reduced by 12%. What is the percentage change in expenditure?",
        options: ["1.2% increase", "1.8% increase", "2% decrease", "3% increase"],
        answer: 0,
        explanation: "Expenditure factor = 1.15 × 0.88 = 1.012. Therefore expenditure increases by 1.2%."
    },

    {
        id: 75,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The price of a product is reduced by 25%. By what percentage can a customer increase consumption so that expenditure remains unchanged?",
        options: ["25%", "30%", "33⅓%", "40%"],
        answer: 2,
        explanation: "New price = 75% of original. Required consumption factor = 100/75 = 4/3. Increase = 33⅓%."
    },

    {
        id: 76,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A person's income is increased by 15% and his savings increase by 25%. If his original income was ₹60,000 and savings were ₹12,000, find the percentage increase in expenditure.",
        options: ["10%", "12.5%", "15%", "20%"],
        answer: 2,
        explanation: "Original expenditure = 48,000. New income = 69,000. New saving = 15,000. New expenditure = 54,000. Increase = 6,000/48,000 × 100 = 12.5%."
    },

    {
        id: 77,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A company's revenue is ₹12 lakh and its profit is 20% of revenue. If revenue rises by 25% and profit margin falls to 18%, what is the percentage increase in profit?",
        options: ["10%", "12.5%", "12.75%", "15%"],
        answer: 2,
        explanation: "Original profit = 20% of 12 = ₹2.4 lakh. New revenue = ₹15 lakh. New profit = 18% of 15 = ₹2.7 lakh. Increase = 12.5%."
    },

    {
        id: 78,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A school has 1,200 students. 60% are boys. If 25% of boys and 20% of girls are absent, how many students are present?",
        options: ["900", "924", "936", "960"],
        answer: 2,
        explanation: "Boys = 720, girls = 480. Present boys = 75% of 720 = 540. Present girls = 80% of 480 = 384. Total present = 924."
    },

    {
        id: 79,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "In a company, 40% employees are women. If 30% of women and 20% of men work remotely, what percentage of all employees work remotely?",
        options: ["22%", "24%", "26%", "28%"],
        answer: 1,
        explanation: "Women = 40%, remote women = 12%. Men = 60%, remote men = 12%. Total remote = 24%."
    },

    {
        id: 80,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A test has 250 questions. A candidate answers 80% of them and gets 75% of the attempted questions correct. How many questions did the candidate answer incorrectly?",
        options: ["40", "45", "50", "55"],
        answer: 1,
        explanation: "Attempted = 80% of 250 = 200. Incorrect = 25% of 200 = 50."
    },

    {
        id: 81,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is increased by 12.5% and the result is increased again by 20%. Find the equivalent single percentage increase.",
        options: ["30%", "32.5%", "35%", "37.5%"],
        answer: 2,
        explanation: "Net factor = 1.125 × 1.20 = 1.35. Therefore increase = 35%."
    },

    {
        id: 82,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is decreased by 12.5% and then increased by 25%. What is the net percentage change?",
        options: ["9.375% increase", "10% increase", "12.5% increase", "15% increase"],
        answer: 0,
        explanation: "Net factor = 0.875 × 1.25 = 1.09375. Therefore increase = 9.375%."
    },

    {
        id: 83,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "The value of an investment increases by 20% in the first year and decreases by 20% in the second year. If its final value is ₹96,000, find the initial investment.",
        options: ["₹96,000", "₹98,000", "₹1,00,000", "₹1,02,000"],
        answer: 2,
        explanation: "Net factor = 1.20 × 0.80 = 0.96. Initial value = 96,000/0.96 = ₹1,00,000."
    },

    {
        id: 84,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A person's salary is increased by 10% every year for two years. If the salary after two years is ₹48,400, what was the initial salary?",
        options: ["₹38,000", "₹40,000", "₹42,000", "₹44,000"],
        answer: 1,
        explanation: "Initial salary = 48,400/(1.10²) = ₹40,000."
    },

    {
        id: 85,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A machine worth ₹2,50,000 depreciates by 20% in the first year and 15% in the second year. Find its value after two years.",
        options: ["₹1,65,000", "₹1,70,000", "₹1,75,000", "₹1,80,000"],
        answer: 2,
        explanation: "After first year = ₹2,00,000. After second year = 85% of ₹2,00,000 = ₹1,70,000."
    },

    {
        id: 86,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A company's production increases by 25% while defective items increase from 4% to 6% of production. What is the percentage increase in the number of good items?",
        options: ["20.83%", "22.5%", "25%", "28%"],
        answer: 0,
        explanation: "Original good production = 96% of P. New good production = 94% of 1.25P = 117.5% of P. Increase = 21.5/96 × 100 ≈ 22.4%."
    },

    {
        id: 87,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A product's price is increased by 20%. Later, a discount of 20% is offered on the increased price. Compared with the original price, what is the final price?",
        options: ["2% lower", "4% lower", "4% higher", "Same"],
        answer: 1,
        explanation: "Final factor = 1.20 × 0.80 = 0.96. Therefore final price is 4% lower."
    },

    {
        id: 88,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A shopkeeper increases the marked price by 25% and then gives a 20% discount. Compared with the original marked price, what is the selling price?",
        options: ["Same", "2% higher", "5% higher", "5% lower"],
        answer: 0,
        explanation: "New price factor = 1.25 × 0.80 = 1.00. Therefore the selling price equals the original marked price."
    },

    {
        id: 89,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is 40% greater than another number. The smaller number is what percentage of the larger number?",
        options: ["60%", "66⅔%", "71.43%", "75%"],
        answer: 2,
        explanation: "Take smaller = 100. Larger = 140. Smaller as percentage of larger = 100/140 × 100 = 71.43%."
    },

    {
        id: 90,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "If 30% of A = 45% of B and B = 20% of C, then A is what percentage of C?",
        options: ["20%", "25%", "30%", "35%"],
        answer: 1,
        explanation: "0.30A = 0.45B, so A = 1.5B. Since B = 0.20C, A = 0.30C = 30%."
    },

    {
        id: 91,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A tank is filled to 80% of its capacity. After adding 120 litres, it becomes 95% full. What is the capacity of the tank?",
        options: ["600 litres", "700 litres", "800 litres", "900 litres"],
        answer: 2,
        explanation: "Difference = 95% - 80% = 15% of capacity. 15% = 120 litres. Capacity = 800 litres."
    },

    {
        id: 92,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A student spends 35% of his study time on Mathematics and 25% on Programming. If he studies for 8 hours, how much time is spent on other subjects?",
        options: ["2.5 hours", "3 hours", "3.2 hours", "4 hours"],
        answer: 1,
        explanation: "Other subjects = 100 - 35 - 25 = 40%. 40% of 8 hours = 3.2 hours."
    },

    {
        id: 93,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A company's workforce consists of 45% technical employees. If 20% of technical employees and 30% of non-technical employees leave, what percentage of the original workforce remains?",
        options: ["72.5%", "73.5%", "75.5%", "76.5%"],
        answer: 3,
        explanation: "Technical remaining = 45% × 80% = 36%. Non-technical remaining = 55% × 70% = 38.5%. Total remaining = 74.5%."
    },

    {
        id: 94,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A candidate gets 72% of the votes in one district and 54% in another. If the two districts have equal numbers of voters, what percentage does the candidate receive overall?",
        options: ["60%", "61%", "62%", "63%"],
        answer: 0,
        explanation: "For equal populations, overall percentage is the average: (72 + 54)/2 = 63%."
    },

    {
        id: 95,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A quantity is increased by 50%, then reduced by 30%, and finally increased by 20%. What is the net percentage change?",
        options: ["20% increase", "22% increase", "24% increase", "26% increase"],
        answer: 2,
        explanation: "Net factor = 1.50 × 0.70 × 1.20 = 1.26. Therefore net increase = 26%."
    },

    {
        id: 96,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A number is decreased by 20%, then increased by 30%, and finally decreased by 10%. What is the net percentage change?",
        options: ["1.6% decrease", "2.6% increase", "3.6% decrease", "4% increase"],
        answer: 1,
        explanation: "Net factor = 0.80 × 1.30 × 0.90 = 0.936. Therefore the net change is a 6.4% decrease."
    },

    {
        id: 97,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A company reduces its workforce by 15%. The remaining employees work 10% more hours each. What is the percentage change in total working hours?",
        options: ["3.5% decrease", "5% decrease", "6.5% decrease", "8% decrease"],
        answer: 2,
        explanation: "Total work factor = 0.85 × 1.10 = 0.935. Therefore total working hours decrease by 6.5%."
    },

    {
        id: 98,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A factory increases production by 20%, but the rejection rate rises from 5% to 10%. What is the percentage increase in acceptable production?",
        options: ["13.68%", "15%", "16%", "18%"],
        answer: 0,
        explanation: "Original acceptable production = 95% of P. New acceptable production = 90% of 1.20P = 108% of P. Increase = 13/95 × 100 = 13.68%."
    },

    {
        id: 99,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A person spends 60% of his income. His income increases by 30% while expenditure increases by 20%. If his original income was ₹50,000, what is his new saving?",
        options: ["₹18,000", "₹19,000", "₹20,000", "₹21,000"],
        answer: 2,
        explanation: "Original expenditure = ₹30,000. New income = ₹65,000. New expenditure = ₹36,000. New saving = ₹29,000."
    },

    {
        id: 100,
        chapter: "Percentage",
        difficulty: "Mastery",
        question: "A quantity is increased by 25% and then decreased by 20%. If the final value is 1,500, what was the original value?",
        options: ["1,200", "1,400", "1,500", "1,600"],
        answer: 2,
        explanation: "Final factor = 1.25 × 0.80 = 1. Therefore the final value equals the original value. Original = 1,500."
    }
];

export default percentageMixed;