import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Result() {

    const location = useLocation();
    const navigate = useNavigate();

    const result = location.state;


    if (!result) {

        return (
            <div>

                <Navbar />

                <main className="result-container">

                    <h1>No Result Found</h1>

                    <p>
                        Please complete a quiz first.
                    </p>

                    <Link to="/practice">
                        Go to Practice →
                    </Link>

                </main>

            </div>
        );
    }


    const {
        chapter,
        difficulty,
        totalQuestions,
        correct,
        wrong,
        unattempted,
        answers,
        questions
    } = result;


    const attempted = correct + wrong;


    const accuracy =
        attempted === 0
            ? 0
            : Math.round((correct / attempted) * 100);


    const scorePercentage =
        totalQuestions === 0
            ? 0
            : Math.round((correct / totalQuestions) * 100);


    function handleRetry() {

        navigate(
            `/quiz/${chapter}/${difficulty}`
        );
    }


    return (
        <div className="result-page">

            <Navbar />

            <main className="result-container">

                <div className="result-header">

                    <span className="result-badge">
                        QUIZ COMPLETED
                    </span>

                    <h1>
                        Your Result
                    </h1>

                    <p>
                        {chapter} • {difficulty}
                    </p>

                </div>


                <div className="score-card">

                    <div className="score-circle">

                        <span className="score-number">
                            {scorePercentage}%
                        </span>

                        <span className="score-label">
                            Score
                        </span>

                    </div>


                    <div className="score-info">

                        <h2>
                            {correct} / {totalQuestions}
                        </h2>

                        <p>
                            Correct Answers
                        </p>

                    </div>

                </div>


                <div className="result-stats">

                    <div className="result-stat">

                        <span className="result-stat-number">
                            {correct}
                        </span>

                        <span className="result-stat-label">
                            Correct
                        </span>

                    </div>


                    <div className="result-stat">

                        <span className="result-stat-number">
                            {wrong}
                        </span>

                        <span className="result-stat-label">
                            Wrong
                        </span>

                    </div>


                    <div className="result-stat">

                        <span className="result-stat-number">
                            {unattempted}
                        </span>

                        <span className="result-stat-label">
                            Unattempted
                        </span>

                    </div>


                    <div className="result-stat">

                        <span className="result-stat-number">
                            {accuracy}%
                        </span>

                        <span className="result-stat-label">
                            Accuracy
                        </span>

                    </div>

                </div>


                <div className="result-actions">

                    <button
                        className="result-button primary"
                        onClick={handleRetry}
                    >
                        Retry Quiz
                    </button>


                    <Link
                        to="/practice"
                        className="result-button secondary"
                    >
                        Practice More
                    </Link>

                </div>


                <div className="result-summary">

                    <h2>
                        Quiz Summary
                    </h2>

                    <p>
                        You attempted {attempted} out of{" "}
                        {totalQuestions} questions.
                    </p>

                    <p>
                        You answered {correct} correctly and{" "}
                        {wrong} incorrectly.
                    </p>

                </div>


                <div className="result-review">

                    <h2>
                        Review Answers
                    </h2>


                    {questions.map((question, index) => {

                        const userAnswer =
                            answers[index];

                        const isUnattempted =
                            userAnswer === undefined;

                        const isCorrect =
                            userAnswer === question.answer;


                        return (
                            <div
                                className="review-item"
                                key={
                                    question.id || index
                                }
                            >

                                <div className="review-question">

                                    <span>
                                        Question {index + 1}
                                    </span>


                                    {isUnattempted ? (

                                        <span className="review-status unanswered">
                                            Unattempted
                                        </span>

                                    ) : isCorrect ? (

                                        <span className="review-status correct">
                                            Correct
                                        </span>

                                    ) : (

                                        <span className="review-status wrong">
                                            Wrong
                                        </span>

                                    )}

                                </div>


                                <p>
                                    {question.question}
                                </p>


                                <div className="review-answer">

                                    <span>
                                        Your answer:
                                    </span>

                                    <strong>

                                        {isUnattempted
                                            ? "Not answered"
                                            : question.options[userAnswer]
                                        }

                                    </strong>

                                </div>


                                <div className="review-answer">

                                    <span>
                                        Correct answer:
                                    </span>

                                    <strong>
                                        {
                                            question.options[
                                                question.answer
                                            ]
                                        }
                                    </strong>

                                </div>


                                <div className="review-explanation">

                                    <span>
                                        Explanation:
                                    </span>

                                    <p>
                                        {question.explanation}
                                    </p>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </main>

        </div>
    );
}

export default Result;