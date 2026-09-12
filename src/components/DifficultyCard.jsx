import { Link } from "react-router-dom";

function DifficultyCard({
    chapter,
    difficulty,
    questionCount = 100,
    completed = 0,
    locked = false
}) {
    const difficultyInfo = {
        Easy: {
            icon: "🟢",
            description: "Build your fundamentals"
        },
        Medium: {
            icon: "🟡",
            description: "Strengthen your problem solving"
        },
        Hard: {
            icon: "🔴",
            description: "Challenge yourself"
        },
        Mastery: {
            icon: "🏆",
            description: "Mixed placement-level questions"
        }
    };

    const info = difficultyInfo[difficulty];

    return (
        <div className={`difficulty-card ${difficulty.toLowerCase()}`}>

            <div className="difficulty-icon">
                {info.icon}
            </div>

            <div className="difficulty-content">

                <div className="difficulty-title-row">

                    <h3>
                        {difficulty}
                    </h3>

                    {locked && (
                        <span className="locked-badge">
                            🔒 Locked
                        </span>
                    )}

                </div>

                <p>
                    {info.description}
                </p>

                <div className="difficulty-stats">

                    <span>
                        {questionCount} Questions
                    </span>

                    <span>
                        {completed} / {questionCount}
                    </span>

                </div>

                <div className="difficulty-progress">

                    <div
                        className="difficulty-progress-fill"
                        style={{
                            width: `${Math.min(
                                (completed / questionCount) * 100,
                                100
                            )}%`
                        }}
                    />

                </div>

                {locked ? (

                    <button
                        className="difficulty-button locked-button"
                        disabled
                    >
                        🔒 Complete Previous Levels
                    </button>

                ) : (

                    <Link
                        to={`/quiz/${chapter}/${difficulty.toLowerCase()}`}
                        className="difficulty-button"
                    >
                        Start {difficulty} →
                    </Link>

                )}

            </div>

        </div>
    );
}

export default DifficultyCard;