import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import chapters from "../data/chapters";
import { getChapterProgress } from "../utils/progressUtils";

function Practice() {

    const totalQuestions = chapters.reduce(
        (total, chapter) =>
            total + chapter.totalQuestions,
        0
    );

    return (
        <div className="practice-page">

            <Navbar />

            <main className="practice-container">

                {/* HEADER */}

                <section className="practice-header">

                    <div>

                        <span className="section-label">
                            PLACEMENT PREPARATION
                        </span>

                        <h1 className="practice-title">
                            Choose Your Chapter
                        </h1>

                        <p className="practice-description">
                            Build your aptitude skills chapter by
                            chapter. Start with Easy questions and
                            progress towards Hard and Mastery level.
                        </p>

                    </div>

                    <div className="practice-header-badge">
                        <span>⚡</span>
                        <div>
                            <strong>BeReady</strong>
                            <small>Practice Arena</small>
                        </div>
                    </div>

                </section>


                {/* STATS */}

                <section className="practice-stats">

                    <div className="practice-stat-card">

                        <div className="practice-stat-icon">
                            📚
                        </div>

                        <div>
                            <strong>
                                {chapters.length}
                            </strong>

                            <span>
                                Chapters
                            </span>
                        </div>

                    </div>


                    <div className="practice-stat-card">

                        <div className="practice-stat-icon">
                            📝
                        </div>

                        <div>
                            <strong>
                                {totalQuestions}
                            </strong>

                            <span>
                                Questions
                            </span>
                        </div>

                    </div>


                    <div className="practice-stat-card">

                        <div className="practice-stat-icon">
                            🎯
                        </div>

                        <div>
                            <strong>
                                4
                            </strong>

                            <span>
                                Levels
                            </span>
                        </div>

                    </div>


                    <div className="practice-stat-card">

                        <div className="practice-stat-icon">
                            🚀
                        </div>

                        <div>
                            <strong>
                                100%
                            </strong>

                            <span>
                                Practice
                            </span>
                        </div>

                    </div>

                </section>


                {/* CHAPTER SECTION */}

                <section className="practice-section">

                    <div className="practice-section-heading">

                        <div>

                            <span className="section-label">
                                LEARNING PATH
                            </span>

                            <h2>
                                Aptitude Chapters
                            </h2>

                        </div>

                        <span className="chapter-count">
                            {chapters.length} Chapters
                        </span>

                    </div>


                    <div className="practice-chapter-grid">

                        {chapters.map((chapter) => {

                            const progress =
                                getChapterProgress(
                                    chapter.slug
                                );

                            const completedLevels = [
                                progress.easy,
                                progress.medium,
                                progress.hard
                            ].filter(Boolean).length;

                            const masteryUnlocked =
                                progress.easy &&
                                progress.medium &&
                                progress.hard;

                            const progressPercentage =
                                Math.round(
                                    (completedLevels / 3) * 100
                                );

                            return (

                                <article
                                    className="practice-chapter-card"
                                    key={chapter.id}
                                >

                                    <div className="practice-card-top">

                                        <div className="practice-card-number">
                                            {String(
                                                chapter.id
                                            ).padStart(2, "0")}
                                        </div>

                                        <span className="practice-card-badge">
                                            {chapter.totalQuestions} Q
                                        </span>

                                    </div>


                                    <div className="practice-card-content">

                                        <h3>
                                            {chapter.title}
                                        </h3>

                                        <p>
                                            {chapter.description}
                                        </p>

                                    </div>


                                    {/* LEVELS */}

                                    <div className="practice-difficulty">

                                        <span className="difficulty easy">
                                            <i>✓</i>
                                            Easy
                                        </span>

                                        <span className="difficulty medium">
                                            <i>✓</i>
                                            Medium
                                        </span>

                                        <span className="difficulty hard">
                                            <i>✓</i>
                                            Hard
                                        </span>

                                        <span
                                            className={`difficulty mastery ${
                                                masteryUnlocked
                                                    ? "unlocked"
                                                    : "locked"
                                            }`}
                                        >
                                            <i>
                                                {masteryUnlocked
                                                    ? "✓"
                                                    : "🔒"}
                                            </i>

                                            Mastery
                                        </span>

                                    </div>


                                    {/* PROGRESS */}

                                    <div className="practice-card-progress">

                                        <div className="practice-progress-info">

                                            <span>
                                                Chapter Progress
                                            </span>

                                            <strong>
                                                {progressPercentage}%
                                            </strong>

                                        </div>

                                        <div className="practice-progress-bar">

                                            <div
                                                className="practice-progress-fill"
                                                style={{
                                                    width: `${progressPercentage}%`
                                                }}
                                            />

                                        </div>

                                    </div>


                                    {/* FOOTER */}

                                    <div className="practice-card-footer">

                                        <span>
                                            {completedLevels} / 3 levels completed
                                        </span>

                                        <Link
                                            to={`/practice/${chapter.slug}`}
                                            className="practice-start-button"
                                        >
                                            Practice →
                                        </Link>

                                    </div>

                                </article>
                            );
                        })}

                    </div>

                </section>


                {/* HOW IT WORKS */}

                <section className="practice-how">

                    <div className="practice-how-header">

                        <span className="section-label">
                            HOW IT WORKS
                        </span>

                        <h2>
                            Your Learning Journey
                        </h2>

                        <p>
                            Follow the progression and build
                            confidence before attempting Mastery.
                        </p>

                    </div>


                    <div className="practice-steps">

                        <div className="practice-step">

                            <div className="practice-step-number">
                                01
                            </div>

                            <div className="practice-step-line" />

                            <h3>
                                Start Easy
                            </h3>

                            <p>
                                Learn the fundamentals and
                                understand the basic concepts.
                            </p>

                        </div>


                        <div className="practice-step">

                            <div className="practice-step-number">
                                02
                            </div>

                            <div className="practice-step-line" />

                            <h3>
                                Level Up
                            </h3>

                            <p>
                                Solve Medium and Hard questions
                                to improve your problem-solving skills.
                            </p>

                        </div>


                        <div className="practice-step">

                            <div className="practice-step-number">
                                03
                            </div>

                            <h3>
                                Master It
                            </h3>

                            <p>
                                Complete all three levels to
                                unlock the Mastery challenge.
                            </p>

                        </div>

                    </div>

                </section>


                {/* CTA */}

                <section className="practice-cta">

                    <div>

                        <span className="section-label">
                            READY?
                        </span>

                        <h2>
                            Start building your placement skills.
                        </h2>

                        <p>
                            Pick a chapter and begin your preparation.
                        </p>

                    </div>

                    <Link
                        to="/practice/percentage"
                        className="practice-cta-button"
                    >
                        Start Practice →
                    </Link>

                </section>

            </main>


            {/* PRACTICE PAGE CSS */}

            <style>{`

                .practice-page {
                    min-height: 100vh;
                    background: #f4f6f8;
                    color: #172033;
                }

                .practice-container {
                    max-width: 1380px;
                    margin: 0 auto;
                    padding: 42px 40px 70px;
                }


                /* HEADER */

                .practice-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                    margin-bottom: 30px;
                }

                .practice-title {
                    margin: 8px 0 10px;
                    font-size: 38px;
                    line-height: 1.15;
                    font-weight: 750;
                    color: #172033;
                }

                .practice-description {
                    max-width: 680px;
                    margin: 0;
                    color: #667085;
                    font-size: 15px;
                    line-height: 1.7;
                }

                .practice-header-badge {
                    min-width: 180px;
                    padding: 15px 18px;
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .practice-header-badge > span {
                    width: 42px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    background: #172033;
                    color: white;
                    font-size: 20px;
                }

                .practice-header-badge strong {
                    display: block;
                    font-size: 15px;
                }

                .practice-header-badge small {
                    display: block;
                    margin-top: 3px;
                    color: #667085;
                    font-size: 11px;
                }


                /* STATS */

                .practice-stats {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 14px;
                    margin-bottom: 42px;
                }

                .practice-stat-card {
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    box-shadow: 0 2px 8px rgba(16, 24, 40, .035);
                }

                .practice-stat-icon {
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    background: #f2f4f7;
                    font-size: 20px;
                }

                .practice-stat-card strong {
                    display: block;
                    font-size: 24px;
                    line-height: 1;
                    color: #172033;
                }

                .practice-stat-card span {
                    display: block;
                    margin-top: 5px;
                    font-size: 12px;
                    color: #667085;
                }


                /* SECTION */

                .practice-section {
                    margin-bottom: 55px;
                }

                .practice-section-heading {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }

                .practice-section-heading h2 {
                    margin: 5px 0 0;
                    font-size: 25px;
                    color: #172033;
                }

                .chapter-count {
                    padding: 7px 12px;
                    border: 1px solid #d0d5dd;
                    border-radius: 6px;
                    background: #ffffff;
                    color: #667085;
                    font-size: 12px;
                    font-weight: 600;
                }


                /* CHAPTER CARDS */

                .practice-chapter-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 18px;
                }

                .practice-chapter-card {
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 23px;
                    transition: transform .18s ease,
                                box-shadow .18s ease,
                                border-color .18s ease;
                }

                .practice-chapter-card:hover {
                    transform: translateY(-3px);
                    border-color: #b8c1cc;
                    box-shadow: 0 10px 28px rgba(16, 24, 40, .07);
                }

                .practice-card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .practice-card-number {
                    font-size: 13px;
                    font-weight: 800;
                    color: #98a2b3;
                    letter-spacing: 1px;
                }

                .practice-card-badge {
                    padding: 5px 9px;
                    border-radius: 5px;
                    background: #f2f4f7;
                    color: #475467;
                    font-size: 11px;
                    font-weight: 700;
                }

                .practice-card-content {
                    margin-top: 18px;
                }

                .practice-card-content h3 {
                    margin: 0;
                    font-size: 22px;
                    color: #172033;
                }

                .practice-card-content p {
                    min-height: 45px;
                    margin: 8px 0 0;
                    color: #667085;
                    font-size: 13px;
                    line-height: 1.6;
                }


                /* DIFFICULTY */

                .practice-difficulty {
                    display: flex;
                    gap: 7px;
                    flex-wrap: wrap;
                    margin: 20px 0;
                    padding-bottom: 18px;
                    border-bottom: 1px solid #eaecf0;
                }

                .difficulty {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 6px 9px;
                    border-radius: 5px;
                    font-size: 10px;
                    font-weight: 700;
                }

                .difficulty i {
                    font-style: normal;
                    font-size: 9px;
                }

                .difficulty.easy {
                    background: #ecfdf3;
                    color: #067647;
                }

                .difficulty.medium {
                    background: #fffaeb;
                    color: #b54708;
                }

                .difficulty.hard {
                    background: #fef3f2;
                    color: #b42318;
                }

                .difficulty.mastery {
                    background: #f2f4f7;
                    color: #667085;
                }

                .difficulty.mastery.unlocked {
                    background: #eef4ff;
                    color: #175cd3;
                }


                /* PROGRESS */

                .practice-card-progress {
                    margin-bottom: 20px;
                }

                .practice-progress-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 8px;
                }

                .practice-progress-info span {
                    color: #667085;
                    font-size: 11px;
                }

                .practice-progress-info strong {
                    color: #172033;
                    font-size: 12px;
                }

                .practice-progress-bar {
                    height: 7px;
                    border-radius: 20px;
                    background: #eaecf0;
                    overflow: hidden;
                }

                .practice-progress-fill {
                    height: 100%;
                    border-radius: 20px;
                    background: #172033;
                    transition: width .3s ease;
                }


                /* FOOTER */

                .practice-card-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                }

                .practice-card-footer > span {
                    color: #667085;
                    font-size: 11px;
                }

                .practice-start-button {
                    padding: 10px 14px;
                    border-radius: 6px;
                    background: #172033;
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 700;
                    transition: background .15s ease;
                }

                .practice-start-button:hover {
                    background: #0f172a;
                }


                /* HOW IT WORKS */

                .practice-how {
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 35px;
                    margin-bottom: 35px;
                }

                .practice-how-header {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .practice-how-header h2 {
                    margin: 6px 0;
                    font-size: 25px;
                }

                .practice-how-header p {
                    margin: 0;
                    color: #667085;
                    font-size: 13px;
                }

                .practice-steps {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }

                .practice-step {
                    position: relative;
                    text-align: center;
                }

                .practice-step-number {
                    width: 48px;
                    height: 48px;
                    margin: 0 auto 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #172033;
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 800;
                }

                .practice-step h3 {
                    margin: 0 0 7px;
                    font-size: 16px;
                }

                .practice-step p {
                    margin: 0;
                    color: #667085;
                    font-size: 12px;
                    line-height: 1.6;
                }


                /* CTA */

                .practice-cta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 25px;
                    padding: 30px;
                    background: #172033;
                    border-radius: 10px;
                    color: #ffffff;
                }

                .practice-cta h2 {
                    margin: 5px 0;
                    font-size: 23px;
                    color: #ffffff;
                }

                .practice-cta p {
                    margin: 0;
                    color: #cbd5e1;
                    font-size: 13px;
                }

                .practice-cta .section-label {
                    color: #98a2b3;
                }

                .practice-cta-button {
                    flex-shrink: 0;
                    padding: 12px 18px;
                    border-radius: 6px;
                    background: #ffffff;
                    color: #172033;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 700;
                }

                .practice-cta-button:hover {
                    background: #f2f4f7;
                }


                /* MOBILE */

                @media (max-width: 900px) {

                    .practice-container {
                        padding: 30px 20px 50px;
                    }

                    .practice-header-badge {
                        display: none;
                    }

                    .practice-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .practice-chapter-grid {
                        grid-template-columns: 1fr;
                    }

                }


                @media (max-width: 600px) {

                    .practice-container {
                        padding: 25px 15px 40px;
                    }

                    .practice-title {
                        font-size: 30px;
                    }

                    .practice-description {
                        font-size: 13px;
                    }

                    .practice-stats {
                        grid-template-columns: 1fr 1fr;
                        gap: 9px;
                    }

                    .practice-stat-card {
                        padding: 14px;
                    }

                    .practice-stat-icon {
                        width: 36px;
                        height: 36px;
                        font-size: 16px;
                    }

                    .practice-stat-card strong {
                        font-size: 19px;
                    }

                    .practice-section-heading {
                        align-items: flex-start;
                        gap: 10px;
                    }

                    .practice-section-heading h2 {
                        font-size: 21px;
                    }

                    .practice-chapter-card {
                        padding: 18px;
                    }

                    .practice-card-content h3 {
                        font-size: 20px;
                    }

                    .practice-card-footer {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .practice-start-button {
                        width: 100%;
                        text-align: center;
                    }

                    .practice-how {
                        padding: 25px 18px;
                    }

                    .practice-steps {
                        grid-template-columns: 1fr;
                        gap: 25px;
                    }

                    .practice-cta {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .practice-cta-button {
                        width: 100%;
                        text-align: center;
                    }

                }

            `}</style>

        </div>
    );
}

export default Practice;