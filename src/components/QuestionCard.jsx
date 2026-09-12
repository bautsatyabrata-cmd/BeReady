function QuestionCard({
    question,
    questionNumber,
    totalQuestions,
    selectedAnswer,
    onSelectAnswer,
    disabled = false
}) {
    return (
        <div className={`question-card ${disabled ? "question-disabled" : ""}`}>

            <div className="question-top">

                <span className="question-number">
                    Question {questionNumber} of {totalQuestions}
                </span>

                <span className="question-difficulty">
                    {question.difficulty || "Easy"}
                </span>

            </div>

            <div className="question-progress">

                <div
                    className="question-progress-fill"
                    style={{
                        width: `${(questionNumber / totalQuestions) * 100}%`
                    }}
                />

            </div>

            <h2 className="question-text">
                {question.question}
            </h2>

            <div className="options-container">

                {question.options.map((option, index) => (

                    <button
                        key={index}
                        className={`option ${
                            selectedAnswer === index ? "selected" : ""
                        }`}
                        onClick={() => onSelectAnswer(index)}
                        disabled={disabled}
                    >

                        <span className="option-letter">
                            {String.fromCharCode(65 + index)}
                        </span>

                        <span className="option-text">
                            {option}
                        </span>

                    </button>

                ))}

            </div>

        </div>
    );
}

export default QuestionCard;