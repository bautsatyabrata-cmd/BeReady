function QuestionPalette({
    totalQuestions,
    currentIndex,
    answers,
    onQuestionClick
}) {
    return (
        <div className="question-palette">

            <div className="palette-header">
                <h3>Question Palette</h3>

                <span>
                    {Object.keys(answers).length} / {totalQuestions} Attempted
                </span>
            </div>

            <div className="palette-grid">

                {Array.from(
                    { length: totalQuestions },
                    (_, index) => {

                        const isAnswered =
                            answers[index] !== undefined;

                        const isCurrent =
                            index === currentIndex;

                        return (
                            <button
                                key={index}
                                className={`
                                    palette-button
                                    ${isCurrent ? "current" : ""}
                                    ${isAnswered ? "answered" : ""}
                                `}
                                onClick={() =>
                                    onQuestionClick(index)
                                }
                            >
                                {index + 1}
                            </button>
                        );
                    }
                )}

            </div>

        </div>
    );
}

export default QuestionPalette;