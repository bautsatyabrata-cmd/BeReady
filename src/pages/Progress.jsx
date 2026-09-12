import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import chapters from "../data/chapters";
import { getChapterProgress } from "../utils/progressUtils";

function Progress() {

    const chapterProgress = chapters.map((chapter) => {

        const progress =
            getChapterProgress(chapter.slug);

        const completedLevels = [
            progress.easy,
            progress.medium,
            progress.hard
        ].filter(Boolean).length;

        const masteryUnlocked =
            progress.easy &&
            progress.medium &&
            progress.hard;

        const percentage =
            Math.round(
                (completedLevels / 3) * 100
            );

        return {
            ...chapter,
            progress,
            completedLevels,
            masteryUnlocked,
            percentage
        };
    });


    const completedChapters =
        chapterProgress.filter(
            (chapter) =>
                chapter.completedLevels === 3
        ).length;


    const totalCompletedLevels =
        chapterProgress.reduce(
            (total, chapter) =>
                total + chapter.completedLevels,
            0
        );


    const totalLevels =
        chapters.length * 3;


    const overallProgress =
        totalLevels === 0
            ? 0
            : Math.round(
                (totalCompletedLevels /
                    totalLevels) *
                100
            );


    return (

        <div className="progress-page">

            <Navbar />


            <main className="progress-container">


                {/* HEADER */}

                <section className="progress-header">

                    <div>

                        <span className="section-label">
                            PERFORMANCE DASHBOARD
                        </span>

                        <h1>
                            Your Progress
                        </h1>

                        <p>
                            Track your aptitude preparation and
                            see how far you have progressed.
                        </p>

                    </div>


                    <Link
                        to="/practice"
                        className="progress-practice-button"
                    >
                        Continue Practice →
                    </Link>

                </section>


                {/* OVERALL PROGRESS */}

                <section className="overall-progress-card">

                    <div className="overall-progress-left">

                        <div className="overall-circle">

                            <div>

                                <strong>
                                    {overallProgress}%
                                </strong>

                                <span>
                                    Complete
                                </span>

                            </div>

                        </div>


                        <div>

                            <span className="overall-label">
                                OVERALL PREPARATION
                            </span>

                            <h2>
                                Keep pushing forward
                            </h2>

                            <p>
                                Complete all three difficulty levels
                                of a chapter to unlock Mastery.
                            </p>

                        </div>

                    </div>


                    <div className="overall-progress-stats">

                        <div>

                            <strong>
                                {completedChapters}
                            </strong>

                            <span>
                                Chapters Completed
                            </span>

                        </div>


                        <div>

                            <strong>
                                {totalCompletedLevels}
                            </strong>

                            <span>
                                Levels Completed
                            </span>

                        </div>


                        <div>

                            <strong>
                                {chapters.length}
                            </strong>

                            <span>
                                Total Chapters
                            </span>

                        </div>

                    </div>

                </section>


                {/* QUICK STATS */}

                <section className="progress-stats">

                    <div className="progress-stat-card">

                        <span className="progress-stat-icon">
                            📚
                        </span>

                        <div>

                            <span>
                                Chapters
                            </span>

                            <strong>
                                {chapters.length}
                            </strong>

                        </div>

                    </div>


                    <div className="progress-stat-card">

                        <span className="progress-stat-icon">
                            ✓
                        </span>

                        <div>

                            <span>
                                Levels Done
                            </span>

                            <strong>
                                {totalCompletedLevels}
                            </strong>

                        </div>

                    </div>


                    <div className="progress-stat-card">

                        <span className="progress-stat-icon">
                            🔓
                        </span>

                        <div>

                            <span>
                                Mastery Ready
                            </span>

                            <strong>
                                {
                                    chapterProgress.filter(
                                        (chapter) =>
                                            chapter.masteryUnlocked
                                    ).length
                                }
                            </strong>

                        </div>

                    </div>


                    <div className="progress-stat-card">

                        <span className="progress-stat-icon">
                            🎯
                        </span>

                        <div>

                            <span>
                                Completion
                            </span>

                            <strong>
                                {overallProgress}%
                            </strong>

                        </div>

                    </div>

                </section>


                {/* CHAPTER PROGRESS */}

                <section className="chapter-progress-section">

                    <div className="progress-section-title">

                        <div>

                            <span className="section-label">
                                CHAPTER BREAKDOWN
                            </span>

                            <h2>
                                Chapter Progress
                            </h2>

                        </div>

                    </div>


                    <div className="progress-chapter-list">

                        {chapterProgress.map(
                            (chapter) => (

                                <article
                                    className="progress-chapter-card"
                                    key={chapter.id}
                                >

                                    <div className="progress-chapter-number">
                                        {String(
                                            chapter.id
                                        ).padStart(2, "0")}
                                    </div>


                                    <div className="progress-chapter-main">

                                        <div className="progress-chapter-heading">

                                            <div>

                                                <h3>
                                                    {chapter.title}
                                                </h3>

                                                <span>
                                                    {
                                                        chapter.completedLevels
                                                    } / 3 levels completed
                                                </span>

                                            </div>

                                            <strong>
                                                {
                                                    chapter.percentage
                                                }%
                                            </strong>

                                        </div>


                                        <div className="chapter-progress-track">

                                            <div
                                                style={{
                                                    width: `${chapter.percentage}%`
                                                }}
                                            />

                                        </div>


                                        <div className="level-status-row">

                                            <div
                                                className={
                                                    chapter.progress.easy
                                                        ? "level-complete"
                                                        : "level-pending"
                                                }
                                            >

                                                <span>
                                                    {chapter.progress.easy
                                                        ? "✓"
                                                        : "○"}
                                                </span>

                                                Easy

                                            </div>


                                            <div
                                                className={
                                                    chapter.progress.medium
                                                        ? "level-complete"
                                                        : "level-pending"
                                                }
                                            >

                                                <span>
                                                    {chapter.progress.medium
                                                        ? "✓"
                                                        : "○"}
                                                </span>

                                                Medium

                                            </div>


                                            <div
                                                className={
                                                    chapter.progress.hard
                                                        ? "level-complete"
                                                        : "level-pending"
                                                }
                                            >

                                                <span>
                                                    {chapter.progress.hard
                                                        ? "✓"
                                                        : "○"}
                                                </span>

                                                Hard

                                            </div>


                                            <div
                                                className={
                                                    chapter.masteryUnlocked
                                                        ? "mastery-ready"
                                                        : "mastery-locked"
                                                }
                                            >

                                                <span>
                                                    {
                                                        chapter.masteryUnlocked
                                                            ? "🔓"
                                                            : "🔒"
                                                    }
                                                </span>

                                                Mastery

                                            </div>

                                        </div>

                                    </div>


                                    <Link
                                        to={`/practice/${chapter.slug}`}
                                        className="progress-view-button"
                                    >
                                        View →
                                    </Link>

                                </article>

                            )
                        )}

                    </div>

                </section>


                {/* MOTIVATION */}

                <section className="progress-bottom">

                    <div>

                        <span className="section-label">
                            KEEP GOING
                        </span>

                        <h2>
                            Consistency builds confidence.
                        </h2>

                        <p>
                            Complete each level and prepare yourself
                            for placement-level aptitude tests.
                        </p>

                    </div>


                    <Link
                        to="/practice"
                        className="progress-bottom-button"
                    >
                        Practice Now →
                    </Link>

                </section>

            </main>


            {/* PROGRESS CSS */}

            <style>{`

                .progress-page {
                    min-height: 100vh;
                    background: #f4f6f8;
                    color: #172033;
                }

                .progress-container {
                    max-width: 1380px;
                    margin: 0 auto;
                    padding: 42px 40px 70px;
                }


                /* HEADER */

                .progress-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    gap: 30px;
                    margin-bottom: 30px;
                }

                .progress-header h1 {
                    margin: 8px 0 8px;
                    font-size: 38px;
                    line-height: 1.15;
                }

                .progress-header p {
                    margin: 0;
                    color: #667085;
                    font-size: 14px;
                }

                .progress-practice-button {
                    padding: 12px 17px;
                    border-radius: 6px;
                    background: #172033;
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 700;
                }


                /* OVERALL */

                .overall-progress-card {
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 40px;
                    margin-bottom: 18px;
                    box-shadow: 0 2px 8px rgba(16, 24, 40, .035);
                }

                .overall-progress-left {
                    display: flex;
                    align-items: center;
                    gap: 25px;
                }

                .overall-circle {
                    width: 125px;
                    height: 125px;
                    border-radius: 50%;
                    background: conic-gradient(
                        #172033
                        ${overallProgress * 3.6}deg,
                        #eaecf0 ${overallProgress * 3.6}deg
                    );
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .overall-circle > div {
                    width: 94px;
                    height: 94px;
                    border-radius: 50%;
                    background: #ffffff;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .overall-circle strong {
                    font-size: 25px;
                    color: #172033;
                }

                .overall-circle span {
                    margin-top: 2px;
                    color: #667085;
                    font-size: 10px;
                }

                .overall-label {
                    color: #667085;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 1px;
                }

                .overall-progress-left h2 {
                    margin: 7px 0;
                    font-size: 23px;
                }

                .overall-progress-left p {
                    max-width: 450px;
                    margin: 0;
                    color: #667085;
                    font-size: 13px;
                    line-height: 1.6;
                }

                .overall-progress-stats {
                    display: flex;
                    gap: 30px;
                }

                .overall-progress-stats div {
                    min-width: 90px;
                }

                .overall-progress-stats strong {
                    display: block;
                    font-size: 25px;
                }

                .overall-progress-stats span {
                    display: block;
                    margin-top: 4px;
                    color: #667085;
                    font-size: 10px;
                    line-height: 1.4;
                }


                /* STATS */

                .progress-stats {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 14px;
                    margin-bottom: 45px;
                }

                .progress-stat-card {
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 19px;
                    display: flex;
                    align-items: center;
                    gap: 13px;
                }

                .progress-stat-icon {
                    width: 42px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    background: #f2f4f7;
                    font-size: 17px;
                }

                .progress-stat-card span {
                    display: block;
                    color: #667085;
                    font-size: 11px;
                }

                .progress-stat-card strong {
                    display: block;
                    margin-top: 3px;
                    font-size: 21px;
                }


                /* CHAPTER */

                .progress-section-title {
                    margin-bottom: 18px;
                }

                .progress-section-title h2 {
                    margin: 5px 0 0;
                    font-size: 25px;
                }

                .progress-chapter-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .progress-chapter-card {
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 20px;
                    display: grid;
                    grid-template-columns: 50px minmax(0, 1fr) auto;
                    align-items: center;
                    gap: 18px;
                }

                .progress-chapter-number {
                    width: 44px;
                    height: 44px;
                    border-radius: 7px;
                    background: #172033;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: 800;
                }

                .progress-chapter-heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                }

                .progress-chapter-heading h3 {
                    margin: 0;
                    font-size: 16px;
                }

                .progress-chapter-heading span {
                    display: block;
                    margin-top: 4px;
                    color: #667085;
                    font-size: 10px;
                }

                .progress-chapter-heading strong {
                    font-size: 15px;
                }

                .chapter-progress-track {
                    height: 6px;
                    margin-top: 11px;
                    border-radius: 10px;
                    background: #eaecf0;
                    overflow: hidden;
                }

                .chapter-progress-track div {
                    height: 100%;
                    border-radius: 10px;
                    background: #172033;
                    transition: width .3s ease;
                }


                /* LEVEL STATUS */

                .level-status-row {
                    display: flex;
                    gap: 9px;
                    flex-wrap: wrap;
                    margin-top: 12px;
                }

                .level-status-row > div {
                    padding: 5px 8px;
                    border-radius: 4px;
                    font-size: 10px;
                    font-weight: 700;
                }

                .level-status-row span {
                    margin-right: 4px;
                }

                .level-complete {
                    background: #ecfdf3;
                    color: #067647;
                }

                .level-pending {
                    background: #f2f4f7;
                    color: #667085;
                }

                .mastery-ready {
                    background: #eef4ff;
                    color: #175cd3;
                }

                .mastery-locked {
                    background: #f2f4f7;
                    color: #98a2b3;
                }


                /* BUTTON */

                .progress-view-button {
                    padding: 9px 13px;
                    border: 1px solid #d0d5dd;
                    border-radius: 6px;
                    color: #344054;
                    background: #ffffff;
                    text-decoration: none;
                    font-size: 11px;
                    font-weight: 700;
                }

                .progress-view-button:hover {
                    background: #f9fafb;
                    border-color: #172033;
                }


                /* BOTTOM */

                .progress-bottom {
                    margin-top: 45px;
                    padding: 30px;
                    border-radius: 10px;
                    background: #172033;
                    color: #ffffff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 25px;
                }

                .progress-bottom h2 {
                    margin: 6px 0;
                    color: #ffffff;
                    font-size: 22px;
                }

                .progress-bottom p {
                    margin: 0;
                    color: #cbd5e1;
                    font-size: 12px;
                }

                .progress-bottom .section-label {
                    color: #98a2b3;
                }

                .progress-bottom-button {
                    flex-shrink: 0;
                    padding: 12px 17px;
                    border-radius: 6px;
                    background: #ffffff;
                    color: #172033;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 700;
                }


                /* TABLET */

                @media (max-width: 950px) {

                    .progress-container {
                        padding: 30px 20px 50px;
                    }

                    .overall-progress-card {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .overall-progress-stats {
                        width: 100%;
                        justify-content: space-between;
                    }

                    .progress-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                }


                /* MOBILE */

                @media (max-width: 600px) {

                    .progress-container {
                        padding: 25px 15px 40px;
                    }

                    .progress-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .progress-header h1 {
                        font-size: 30px;
                    }

                    .progress-practice-button {
                        width: 100%;
                        text-align: center;
                    }

                    .overall-progress-card {
                        padding: 22px 18px;
                    }

                    .overall-progress-left {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .overall-progress-stats {
                        gap: 15px;
                    }

                    .overall-progress-stats div {
                        min-width: 0;
                    }

                    .overall-progress-stats strong {
                        font-size: 20px;
                    }

                    .progress-stats {
                        grid-template-columns: 1fr 1fr;
                        gap: 9px;
                    }

                    .progress-stat-card {
                        padding: 13px;
                    }

                    .progress-stat-icon {
                        width: 34px;
                        height: 34px;
                    }

                    .progress-chapter-card {
                        grid-template-columns: 42px 1fr;
                        gap: 13px;
                    }

                    .progress-chapter-number {
                        width: 40px;
                        height: 40px;
                    }

                    .progress-view-button {
                        grid-column: 1 / -1;
                        text-align: center;
                    }

                    .progress-bottom {
                        align-items: flex-start;
                        flex-direction: column;
                        padding: 23px 18px;
                    }

                    .progress-bottom-button {
                        width: 100%;
                        text-align: center;
                    }

                }

            `}</style>

        </div>
    );
}

export default Progress;