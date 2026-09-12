import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import chapters from "../data/chapters";

function Home() {

    return (
        <div className="page">

            <Navbar />


            {/* =========================
                HERO
            ========================= */}

            <main>

                <section className="hero">

                    <div className="container">

                        <div className="hero-content">

                            <div className="hero-badge">
                                ⚡ Placement Preparation Platform
                            </div>


                            <h1 className="hero-title">

                                Practice Today.
                                <br />

                                <span>Be Ready Tomorrow.</span>

                            </h1>


                            <p className="hero-description">

                                Build your aptitude skills with
                                structured practice questions,
                                difficulty-based learning and
                                placement-focused tests.

                            </p>


                            <div className="hero-actions">

                                <Link
                                    to="/practice"
                                    className="primary-button"
                                >
                                    Start Practicing →
                                </Link>


                                <Link
                                    to="/progress"
                                    className="secondary-button"
                                >
                                    View Progress
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================
                    STATS
                ========================= */}

                <section>

                    <div className="container">

                        <div className="stats-grid">

                            <div className="stat-card">

                                <span className="stat-value">
                                    {chapters.length}
                                </span>

                                <span className="stat-label">
                                    Chapters
                                </span>

                            </div>


                            <div className="stat-card">

                                <span className="stat-value">
                                    2,000+
                                </span>

                                <span className="stat-label">
                                    Questions
                                </span>

                            </div>


                            <div className="stat-card">

                                <span className="stat-value">
                                    3
                                </span>

                                <span className="stat-label">
                                    Difficulty Levels
                                </span>

                            </div>


                            <div className="stat-card">

                                <span className="stat-value">
                                    ∞
                                </span>

                                <span className="stat-label">
                                    Practice
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================
                    CHAPTERS
                ========================= */}

                <section className="section">

                    <div className="container">

                        <span className="section-label">
                            LEARNING PATH
                        </span>


                        <h2 className="section-title">
                            Choose a chapter
                        </h2>


                        <p className="section-description">

                            Start with the fundamentals and
                            gradually move towards harder
                            placement-level questions.

                        </p>


                        <div className="chapter-grid">

                            {chapters.map((chapter) => (

                                <div
                                    className="chapter-card"
                                    key={chapter.id}
                                >

                                    <div className="chapter-number">
                                        {String(chapter.id).padStart(2, "0")}
                                    </div>


                                    <h3 className="chapter-title">
                                        {chapter.title}
                                    </h3>


                                    <p className="chapter-description">
                                        {chapter.description}
                                    </p>


                                    <div className="chapter-footer">

                                        <span className="chapter-questions">
                                            {chapter.totalQuestions} Questions
                                        </span>


                                        <Link
                                            to={`/practice/${chapter.slug}`}
                                            className="chapter-link"
                                        >
                                            Practice →
                                        </Link>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =========================
                    CTA
                ========================= */}

                <section className="cta">

                    <h2 className="cta-title">
                        Ready to test yourself?
                    </h2>


                    <p className="cta-description">
                        Choose a chapter and start your
                        placement preparation journey.
                    </p>


                    <Link
                        to="/practice"
                        className="primary-button"
                    >
                        Start Practice →
                    </Link>

                </section>

            </main>


            {/* =========================
                FOOTER
            ========================= */}

            <footer className="footer">

                <p>
                    ⚡ BeReady — Practice. Improve. Get Placement Ready.
                </p>

            </footer>

        </div>
    );
}

export default Home;