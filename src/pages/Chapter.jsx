import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import chapters from "../data/chapters";
import { getChapterProgress } from "../utils/progressUtils";

function Chapter() {

    const { chapter: chapterSlug } = useParams();

    const chapter = chapters.find(
        (item) => item.slug === chapterSlug
    );

    if (!chapter) {
        return (
            <div className="chapter-page">
                <Navbar />

                <main className="chapter-not-found">
                    <h1>Chapter Not Found</h1>

                    <p>
                        The chapter you are looking for does not exist.
                    </p>

                    <Link to="/practice">
                        ← Back to Practice
                    </Link>
                </main>
            </div>
        );
    }


    const progress = getChapterProgress(chapter.slug);

    const easyCompleted = Boolean(progress.easy);
    const mediumCompleted = Boolean(progress.medium);
    const hardCompleted = Boolean(progress.hard);

    const masteryUnlocked =
        easyCompleted &&
        mediumCompleted &&
        hardCompleted;


    const completedLevels = [
        easyCompleted,
        mediumCompleted,
        hardCompleted
    ].filter(Boolean).length;


    const progressPercentage =
        Math.round((completedLevels / 3) * 100);


    const levels = [
        {
            key: "easy",
            number: "01",
            title: "Easy",
            description: "Build your fundamentals",
            icon: "🌱",
            completed: easyCompleted,
            locked: false
        },
        {
            key: "medium",
            number: "02",
            title: "Medium",
            description: "Apply your knowledge",
            icon: "⚡",
            completed: mediumCompleted,
            locked: !easyCompleted
        },
        {
            key: "hard",
            number: "03",
            title: "Hard",
            description: "Challenge yourself",
            icon: "🔥",
            completed: hardCompleted,
            locked: !mediumCompleted
        },
        {
            key: "mixed",
            number: "04",
            title: "Mastery",
            description: "Mixed placement-level questions",
            icon: "🏆",
            completed: false,
            locked: !masteryUnlocked
        }
    ];


    return (
        <div className="chapter-page">

            <Navbar />

            <main className="chapter-container">

                {/* HEADER */}

                <section className="chapter-header">

                    <Link
                        to="/practice"
                        className="back-link"
                    >
                        ← Back to Chapters
                    </Link>

                    <div className="chapter-header-content">

                        <div>

                            <span className="chapter-label">
                                APTITUDE CHAPTER
                            </span>

                            <h1>
                                {chapter.title}
                            </h1>

                            <p>
                                {chapter.description}
                            </p>

                        </div>


                        <div className="chapter-question-count">

                            <strong>
                                {chapter.totalQuestions}
                            </strong>

                            <span>
                                Total Questions
                            </span>

                        </div>

                    </div>

                </section>


                {/* PROGRESS CARD */}

                <section className="chapter-progress-card">

                    <div className="progress-card-header">

                        <div className="progress-heading">

                            <span className="progress-label">
                                YOUR PROGRESS
                            </span>

                            <h2>
                                {completedLevels === 0
                                    ? "Start your journey"
                                    : completedLevels === 3
                                        ? "All levels completed!"
                                        : "Keep going!"
                                }
                            </h2>

                            <p>
                                Complete Easy, Medium and Hard to unlock Mastery.
                            </p>

                        </div>


                        <div className="progress-percentage">

                            <strong>
                                {progressPercentage}%
                            </strong>

                            <span>
                                Complete
                            </span>

                        </div>

                    </div>


                    <div className="main-progress-bar">

                        <div
                            className="main-progress-fill"
                            style={{
                                width: `${progressPercentage}%`
                            }}
                        />

                    </div>


                    <div className="progress-summary">

                        <span>
                            {completedLevels} of 3 levels completed
                        </span>

                        <span
                            className={
                                masteryUnlocked
                                    ? "mastery-unlocked"
                                    : "mastery-locked"
                            }
                        >
                            {masteryUnlocked
                                ? "🏆 Mastery Unlocked"
                                : "🔒 Mastery Locked"
                            }
                        </span>

                    </div>

                </section>


                {/* LEVEL SECTION */}

                <section className="levels-section">

                    <div className="section-heading">

                        <div>

                            <span>
                                LEARNING PATH
                            </span>

                            <h2>
                                Choose Your Level
                            </h2>

                        </div>

                        <p>
                            Complete each level to progress.
                        </p>

                    </div>


                    <div className="levels-grid">

                        {levels.map((level) => {

                            const isMastery =
                                level.key === "mixed";

                            return (
                                <article
                                    key={level.key}
                                    className={`
                                        level-card
                                        ${level.completed ? "completed" : ""}
                                        ${level.locked ? "locked" : ""}
                                        ${isMastery ? "mastery-card" : ""}
                                    `}
                                >

                                    <div className="level-card-top">

                                        <span className="level-number">
                                            {level.number}
                                        </span>

                                        <span className="level-icon">
                                            {level.icon}
                                        </span>

                                    </div>


                                    <div className="level-content">

                                        <h3>
                                            {level.title}
                                        </h3>

                                        <p>
                                            {level.description}
                                        </p>

                                    </div>


                                    <div className="level-question-count">

                                        <strong>
                                            100
                                        </strong>

                                        <span>
                                            Questions
                                        </span>

                                    </div>


                                    {level.locked ? (

                                        <div className="locked-message">

                                            <span>
                                                🔒
                                            </span>

                                            <span>
                                                {isMastery
                                                    ? "Complete previous levels"
                                                    : "Complete previous level"
                                                }
                                            </span>

                                        </div>

                                    ) : (

                                        <Link
                                            to={`/quiz/${chapter.slug}/${level.key}`}
                                            className="level-button"
                                        >

                                            <span>
                                                {level.completed
                                                    ? "Practice Again"
                                                    : `Start ${level.title}`
                                                }
                                            </span>

                                            <span>
                                                →
                                            </span>

                                        </Link>

                                    )}

                                </article>
                            );

                        })}

                    </div>

                </section>


                {/* YOUR PROGRESS */}

                <section className="status-section">

                    <div className="status-header">

                        <div>

                            <span>
                                PROGRESS TRACKER
                            </span>

                            <h2>
                                Your Progress
                            </h2>

                        </div>

                        <span className="status-count">
                            {completedLevels}/3 Completed
                        </span>

                    </div>


                    <div className="status-grid">

                        {/* EASY */}

                        <div
                            className={`status-item ${
                                easyCompleted ? "done" : ""
                            }`}
                        >

                            <div className="status-icon">

                                {easyCompleted
                                    ? "✓"
                                    : "1"
                                }

                            </div>

                            <div className="status-text">

                                <strong>
                                    Easy
                                </strong>

                                <span>
                                    {easyCompleted
                                        ? "Completed"
                                        : "Not Completed"
                                    }
                                </span>

                            </div>

                        </div>


                        {/* MEDIUM */}

                        <div
                            className={`status-item ${
                                mediumCompleted ? "done" : ""
                            }`}
                        >

                            <div className="status-icon">

                                {mediumCompleted
                                    ? "✓"
                                    : "2"
                                }

                            </div>

                            <div className="status-text">

                                <strong>
                                    Medium
                                </strong>

                                <span>
                                    {mediumCompleted
                                        ? "Completed"
                                        : "Not Completed"
                                    }
                                </span>

                            </div>

                        </div>


                        {/* HARD */}

                        <div
                            className={`status-item ${
                                hardCompleted ? "done" : ""
                            }`}
                        >

                            <div className="status-icon">

                                {hardCompleted
                                    ? "✓"
                                    : "3"
                                }

                            </div>

                            <div className="status-text">

                                <strong>
                                    Hard
                                </strong>

                                <span>
                                    {hardCompleted
                                        ? "Completed"
                                        : "Not Completed"
                                    }
                                </span>

                            </div>

                        </div>


                        {/* MASTERY */}

                        <div
                            className={`status-item mastery-status ${
                                masteryUnlocked ? "done" : ""
                            }`}
                        >

                            <div className="status-icon">

                                {masteryUnlocked
                                    ? "✓"
                                    : "🔒"
                                }

                            </div>

                            <div className="status-text">

                                <strong>
                                    Mastery
                                </strong>

                                <span>
                                    {masteryUnlocked
                                        ? "Unlocked"
                                        : "Locked"
                                    }
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* CTA */}

                <section className="chapter-cta">

                    <div>

                        <span>
                            READY TO PRACTICE?
                        </span>

                        <h2>
                            {completedLevels === 0
                                ? "Start with Easy level."
                                : completedLevels === 3
                                    ? "You are ready for Mastery."
                                    : "Continue your preparation."
                            }
                        </h2>

                        <p>
                            Improve your accuracy and build confidence step by step.
                        </p>

                    </div>


                    <Link
                        to={`/quiz/${chapter.slug}/${
                            !easyCompleted
                                ? "easy"
                                : !mediumCompleted
                                    ? "medium"
                                    : !hardCompleted
                                        ? "hard"
                                        : "mixed"
                        }`}
                        className="cta-button"
                    >
                        Continue Practice →
                    </Link>

                </section>

            </main>


            <style>{`

                /* ================================
                   MAIN
                ================================= */

                .chapter-page {
                    min-height: 100vh;

                    background: #080d18;

                    color: #ffffff;
                }


                .chapter-container {
                    max-width: 1380px;

                    margin: 0 auto;

                    padding: 35px 40px 70px;
                }


                /* ================================
                   HEADER
                ================================= */

                .back-link {
                    display: inline-block;

                    margin-bottom: 25px;

                    color: #8ea4c7;

                    text-decoration: none;

                    font-size: 13px;

                    font-weight: 600;
                }


                .back-link:hover {
                    color: #ffffff;
                }


                .chapter-header-content {
                    display: flex;

                    align-items: center;

                    justify-content: space-between;

                    gap: 30px;
                }


                .chapter-label,
                .progress-label,
                .section-heading > div > span,
                .status-header > div > span,
                .chapter-cta > div > span {
                    color: #6f8dbb;

                    font-size: 10px;

                    font-weight: 800;

                    letter-spacing: 1.5px;
                }


                .chapter-header h1 {
                    margin: 8px 0 10px;

                    color: #ffffff;

                    font-size: 38px;

                    line-height: 1.15;
                }


                .chapter-header p {
                    max-width: 700px;

                    margin: 0;

                    color: #91a4c4;

                    font-size: 14px;

                    line-height: 1.7;
                }


                .chapter-question-count {
                    min-width: 150px;

                    padding: 20px;

                    background: #111827;

                    border: 1px solid #1e293b;

                    border-radius: 10px;

                    text-align: center;
                }


                .chapter-question-count strong {
                    display: block;

                    color: #ffffff;

                    font-size: 28px;
                }


                .chapter-question-count span {
                    display: block;

                    margin-top: 4px;

                    color: #7185a5;

                    font-size: 11px;
                }


                /* ================================
                   PROGRESS CARD
                ================================= */

                .chapter-progress-card {
                    margin-top: 35px;

                    padding: 28px;

                    background: #111827;

                    border: 1px solid #1e293b;

                    border-radius: 12px;

                    box-shadow:
                        0 10px 30px rgba(0, 0, 0, .15);
                }


                .progress-card-header {
                    display: flex;

                    align-items: center;

                    justify-content: space-between;

                    gap: 25px;
                }


                .progress-heading h2 {
                    margin: 6px 0 5px;

                    color: #ffffff;

                    font-size: 23px;
                }


                .progress-heading p {
                    margin: 0;

                    color: #8296b7;

                    font-size: 12px;
                }


                .progress-percentage {
                    min-width: 90px;

                    text-align: right;
                }


                .progress-percentage strong {
                    display: block;

                    color: #ffffff;

                    font-size: 30px;

                    line-height: 1;
                }


                .progress-percentage span {
                    display: block;

                    margin-top: 5px;

                    color: #7185a5;

                    font-size: 10px;
                }


                .main-progress-bar {
                    width: 100%;

                    height: 9px;

                    margin-top: 24px;

                    background: #0b1220;

                    border: 1px solid #172236;

                    border-radius: 20px;

                    overflow: hidden;
                }


                .main-progress-fill {
                    height: 100%;

                    background: #3b82f6;

                    border-radius: 20px;

                    transition: width .4s ease;
                }


                .progress-summary {
                    display: flex;

                    align-items: center;

                    justify-content: space-between;

                    gap: 15px;

                    margin-top: 11px;

                    color: #7185a5;

                    font-size: 11px;
                }


                .mastery-unlocked {
                    color: #60a5fa;

                    font-weight: 700;
                }


                .mastery-locked {
                    color: #7185a5;

                    font-weight: 600;
                }


                /* ================================
                   LEVELS
                ================================= */

                .levels-section {
                    margin-top: 48px;
                }


                .section-heading {
                    display: flex;

                    align-items: flex-end;

                    justify-content: space-between;

                    gap: 20px;

                    margin-bottom: 20px;
                }


                .section-heading h2,
                .status-header h2 {
                    margin: 5px 0 0;

                    color: #ffffff;

                    font-size: 25px;
                }


                .section-heading p {
                    margin: 0;

                    color: #7185a5;

                    font-size: 12px;
                }


                .levels-grid {
                    display: grid;

                    grid-template-columns: repeat(4, 1fr);

                    gap: 16px;
                }


                .level-card {
                    min-width: 0;

                    min-height: 300px;

                    padding: 22px;

                    background: #111827;

                    border: 1px solid #1e293b;

                    border-radius: 10px;

                    display: flex;

                    flex-direction: column;

                    transition:
                        transform .2s ease,
                        border-color .2s ease,
                        box-shadow .2s ease;
                }


                .level-card:hover {
                    transform: translateY(-3px);

                    border-color: #30415e;

                    box-shadow:
                        0 12px 30px rgba(0, 0, 0, .18);
                }


                .level-card.completed {
                    border-color: #1d4d7a;
                }


                .level-card.locked {
                    background: #0d1421;

                    opacity: .78;
                }


                .level-card-top {
                    display: flex;

                    align-items: center;

                    justify-content: space-between;
                }


                .level-number {
                    color: #526987;

                    font-size: 11px;

                    font-weight: 800;

                    letter-spacing: 1px;
                }


                .level-icon {
                    font-size: 25px;
                }


                .level-content {
                    margin-top: 20px;
                }


                .level-content h3 {
                    margin: 0;

                    color: #ffffff;

                    font-size: 22px;
                }


                .level-content p {
                    margin: 6px 0 0;

                    color: #8296b7;

                    font-size: 12px;

                    line-height: 1.5;
                }


                .level-question-count {
                    display: flex;

                    align-items: baseline;

                    gap: 5px;

                    margin-top: 22px;
                }


                .level-question-count strong {
                    color: #ffffff;

                    font-size: 18px;
                }


                .level-question-count span {
                    color: #7185a5;

                    font-size: 11px;
                }


                .level-button {
                    display: flex;

                    align-items: center;

                    justify-content: space-between;

                    margin-top: auto;

                    padding: 11px 13px;

                    background: #3b82f6;

                    color: #ffffff;

                    border-radius: 6px;

                    text-decoration: none;

                    font-size: 12px;

                    font-weight: 700;

                    transition:
                        background .2s ease,
                        transform .2s ease;
                }


                .level-button:hover {
                    background: #2563eb;

                    transform: translateY(-1px);
                }


                .level-card.completed .level-button {
                    background: #1e40af;
                }


                .locked-message {
                    display: flex;

                    align-items: center;

                    justify-content: center;

                    gap: 7px;

                    min-height: 43px;

                    margin-top: auto;

                    padding: 9px;

                    background: #0b1220;

                    border: 1px solid #1e293b;

                    border-radius: 7px;

                    color: #647895;

                    font-size: 11px;

                    font-weight: 700;

                    text-align: center;
                }


                /* ================================
                   STATUS / YOUR PROGRESS
                ================================= */

                .status-section {
                    margin-top: 45px;

                    padding: 28px;

                    background: #111827;

                    border: 1px solid #1e293b;

                    border-radius: 10px;
                }


                .status-header {
                    display: flex;

                    align-items: center;

                    justify-content: space-between;

                    gap: 20px;
                }


                .status-count {
                    padding: 7px 11px;

                    background: #0b1220;

                    border: 1px solid #1e293b;

                    border-radius: 6px;

                    color: #8ea4c7;

                    font-size: 10px;

                    font-weight: 700;
                }


                .status-grid {
                    display: grid;

                    grid-template-columns: repeat(4, 1fr);

                    gap: 12px;

                    margin-top: 22px;
                }


                .status-item {
                    min-width: 0;

                    display: flex;

                    align-items: center;

                    gap: 11px;

                    padding: 14px;

                    background: #0d1421;

                    border: 1px solid #1e293b;

                    border-radius: 8px;
                }


                .status-icon {
                    width: 32px;

                    height: 32px;

                    flex-shrink: 0;

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    border-radius: 50%;

                    background: #172236;

                    color: #7185a5;

                    font-size: 11px;

                    font-weight: 800;
                }


                .status-item.done {
                    background: #0d1a29;

                    border-color: #1d4d7a;
                }


                .status-item.done .status-icon {
                    background: #1d4f80;

                    color: #93c5fd;
                }


                .status-text {
                    min-width: 0;
                }


                .status-item strong {
                    display: block;

                    color: #ffffff;

                    font-size: 12px;
                }


                .status-item span {
                    display: block;

                    margin-top: 3px;

                    color: #7185a5;

                    font-size: 10px;
                }


                .mastery-status.done .status-icon {
                    background: #1e40af;

                    color: #bfdbfe;
                }


                /* ================================
                   CTA
                ================================= */

                .chapter-cta {
                    display: flex;

                    align-items: center;

                    justify-content: space-between;

                    gap: 25px;

                    margin-top: 30px;

                    padding: 28px 30px;

                    background: #111827;

                    border: 1px solid #1e293b;

                    border-radius: 10px;
                }


                .chapter-cta h2 {
                    margin: 6px 0 5px;

                    color: #ffffff;

                    font-size: 21px;
                }


                .chapter-cta p {
                    margin: 0;

                    color: #8296b7;

                    font-size: 12px;
                }


                .cta-button {
                    flex-shrink: 0;

                    padding: 12px 17px;

                    background: #3b82f6;

                    color: #ffffff;

                    border-radius: 6px;

                    text-decoration: none;

                    font-size: 12px;

                    font-weight: 700;

                    transition: background .2s ease;
                }


                .cta-button:hover {
                    background: #2563eb;
                }


                /* ================================
                   NOT FOUND
                ================================= */

                .chapter-not-found {
                    max-width: 600px;

                    margin: 100px auto;

                    padding: 30px;

                    text-align: center;
                }


                .chapter-not-found h1 {
                    color: #ffffff;

                    margin-bottom: 10px;
                }


                .chapter-not-found p {
                    color: #8296b7;
                }


                .chapter-not-found a {
                    display: inline-block;

                    margin-top: 15px;

                    color: #60a5fa;

                    font-weight: 700;
                }


                /* ================================
                   TABLET
                ================================= */

                @media (max-width: 1050px) {

                    .levels-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }


                    .status-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                }


                /* ================================
                   MOBILE
                ================================= */

                @media (max-width: 700px) {

                    .chapter-container {
                        padding: 25px 15px 45px;
                    }


                    .chapter-header-content {
                        flex-direction: column;

                        align-items: stretch;
                    }


                    .chapter-header h1 {
                        font-size: 30px;
                    }


                    .chapter-header p {
                        font-size: 13px;
                    }


                    .chapter-question-count {
                        width: 100%;

                        box-sizing: border-box;
                    }


                    /* Progress */

                    .chapter-progress-card {
                        margin-top: 25px;

                        padding: 20px;
                    }


                    .progress-card-header {
                        align-items: flex-start;

                        gap: 15px;
                    }


                    .progress-heading {
                        min-width: 0;
                    }


                    .progress-heading h2 {
                        font-size: 20px;
                    }


                    .progress-heading p {
                        max-width: 220px;

                        line-height: 1.5;
                    }


                    .progress-percentage {
                        min-width: 55px;
                    }


                    .progress-percentage strong {
                        font-size: 23px;
                    }


                    .progress-summary {
                        flex-direction: column;

                        align-items: flex-start;

                        gap: 7px;
                    }


                    /* Levels */

                    .levels-section {
                        margin-top: 35px;
                    }


                    .section-heading {
                        flex-direction: column;

                        align-items: flex-start;

                        gap: 5px;
                    }


                    .section-heading h2,
                    .status-header h2 {
                        font-size: 22px;
                    }


                    .levels-grid {
                        grid-template-columns: 1fr;

                        gap: 12px;
                    }


                    .level-card {
                        min-height: 270px;

                        padding: 20px;
                    }


                    /* Status */

                    .status-section {
                        padding: 20px;
                    }


                    .status-header {
                        align-items: flex-start;

                        flex-direction: column;

                        gap: 10px;
                    }


                    .status-grid {
                        grid-template-columns: 1fr;

                        gap: 9px;
                    }


                    /* CTA */

                    .chapter-cta {
                        flex-direction: column;

                        align-items: flex-start;

                        padding: 23px 20px;
                    }


                    .cta-button {
                        width: 100%;

                        box-sizing: border-box;

                        text-align: center;
                    }

                }


                /* ================================
                   SMALL MOBILE
                ================================= */

                @media (max-width: 400px) {

                    .chapter-container {
                        padding-left: 12px;

                        padding-right: 12px;
                    }


                    .chapter-progress-card {
                        padding: 17px;
                    }


                    .progress-card-header {
                        gap: 10px;
                    }


                    .progress-heading h2 {
                        font-size: 18px;
                    }


                    .progress-heading p {
                        font-size: 11px;
                    }


                    .progress-percentage strong {
                        font-size: 21px;
                    }


                    .level-card {
                        padding: 18px;
                    }


                    .status-section {
                        padding: 17px;
                    }

                }

            `}</style>

        </div>
    );
}

export default Chapter;