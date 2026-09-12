import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Author() {

    const portfolioUrl =
        "https://satyabrata-dev.vercel.app/";

    return (
        <div className="author-page">

            <Navbar />

            <main className="author-container">

                <section className="author-hero">

                    <div className="author-avatar">
                        SB
                    </div>

                    <span className="section-label">
                        ABOUT THE CREATOR
                    </span>

                    <h1>
                        Satyabrata Baut
                    </h1>

                    <p className="author-role">
                        MCA Student • Full Stack Developer
                    </p>

                    <p className="author-intro">
                        BeReady is a placement preparation platform
                        created to help students practice aptitude
                        questions in a structured and progressive way.
                    </p>

                </section>


                <section className="author-content">

                    <div className="author-card">

                        <span className="author-card-label">
                            ABOUT ME
                        </span>

                        <h2>
                            Building, learning and solving.
                        </h2>

                        <p>
                            I am an MCA student at Siksha 'O' Anusandhan
                            (SOA) University, Bhubaneswar, with an interest
                            in full-stack web development and problem solving.
                        </p>

                        <p>
                            I enjoy building practical applications using
                            modern web technologies and continuously improving
                            my Data Structures and Algorithms skills.
                        </p>

                    </div>


                    <div className="author-card">

                        <span className="author-card-label">
                            EDUCATION
                        </span>

                        <div className="education-item">

                            <strong>
                                Master of Computer Applications
                            </strong>

                            <span>
                                Siksha 'O' Anusandhan (SOA)
                            </span>

                            <small>
                                Bhubaneswar
                            </small>

                        </div>


                        <div className="education-item">

                            <strong>
                                B.Sc. in Physics (Honours)
                            </strong>

                            <span>
                                Sarala Degree (+3) Residential College
                            </span>

                            <small>
                                Srirampur, Puri
                            </small>

                        </div>

                    </div>


                    <div className="author-card">

                        <span className="author-card-label">
                            TECHNOLOGIES
                        </span>

                        <div className="tech-list">

                            <span>React.js</span>
                            <span>JavaScript</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>REST APIs</span>
                            <span>Java</span>
                            <span>Git & GitHub</span>

                        </div>

                    </div>


                    <div className="author-card">

                        <span className="author-card-label">
                            ACHIEVEMENTS
                        </span>

                        <div className="achievement">

                            <strong>
                                130+
                            </strong>

                            <span>
                                LeetCode Problems Solved
                            </span>

                        </div>

                        <div className="achievement">

                            <strong>
                                MERN
                            </strong>

                            <span>
                                Full Stack Web Development
                            </span>

                        </div>

                    </div>

                </section>


                <section className="author-portfolio">

                    <div>

                        <span className="section-label">
                            MY PORTFOLIO
                        </span>

                        <h2>
                            Want to know more about me?
                        </h2>

                        <p>
                            Explore my projects, skills, resume and
                            development work on my personal portfolio.
                        </p>

                    </div>


                    <a
                        href={portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="author-portfolio-button"
                    >
                        Visit My Portfolio →
                    </a>

                </section>


                <div className="author-back">

                    <Link to="/">
                        ← Back to BeReady
                    </Link>

                </div>

            </main>


            <style>{`

                .author-page {
                    min-height: 100vh;
                    background: #f4f6f8;
                    color: #172033;
                }

                .author-container {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 50px 30px 70px;
                }

                .author-hero {
                    text-align: center;
                    margin-bottom: 45px;
                }

                .author-avatar {
                    width: 92px;
                    height: 92px;
                    margin: 0 auto 20px;
                    border-radius: 50%;
                    background: #172033;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 27px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                .author-hero h1 {
                    margin: 8px 0 5px;
                    font-size: 38px;
                }

                .author-role {
                    margin: 0;
                    color: #475467;
                    font-size: 15px;
                    font-weight: 600;
                }

                .author-intro {
                    max-width: 650px;
                    margin: 15px auto 0;
                    color: #667085;
                    font-size: 14px;
                    line-height: 1.7;
                }

                .author-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                }

                .author-card {
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 25px;
                }

                .author-card-label {
                    color: #667085;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                .author-card h2 {
                    margin: 8px 0 12px;
                    font-size: 21px;
                }

                .author-card p {
                    color: #667085;
                    font-size: 13px;
                    line-height: 1.7;
                }

                .education-item {
                    display: flex;
                    flex-direction: column;
                    padding: 15px 0;
                    border-bottom: 1px solid #eaecf0;
                }

                .education-item:last-child {
                    border-bottom: 0;
                }

                .education-item strong {
                    font-size: 14px;
                }

                .education-item span {
                    margin-top: 5px;
                    color: #475467;
                    font-size: 12px;
                }

                .education-item small {
                    margin-top: 3px;
                    color: #98a2b3;
                    font-size: 11px;
                }

                .tech-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 18px;
                }

                .tech-list span {
                    padding: 8px 11px;
                    background: #f2f4f7;
                    border: 1px solid #eaecf0;
                    border-radius: 5px;
                    color: #344054;
                    font-size: 11px;
                    font-weight: 600;
                }

                .achievement {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 15px 0;
                    border-bottom: 1px solid #eaecf0;
                }

                .achievement:last-child {
                    border-bottom: 0;
                }

                .achievement strong {
                    min-width: 75px;
                    font-size: 20px;
                    color: #172033;
                }

                .achievement span {
                    color: #667085;
                    font-size: 12px;
                }

                .author-portfolio {
                    margin-top: 18px;
                    padding: 28px;
                    background: #172033;
                    color: #ffffff;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 25px;
                }

                .author-portfolio h2 {
                    margin: 6px 0;
                    font-size: 22px;
                    color: #ffffff;
                }

                .author-portfolio p {
                    margin: 0;
                    color: #cbd5e1;
                    font-size: 12px;
                }

                .author-portfolio .section-label {
                    color: #98a2b3;
                }

                .author-portfolio-button {
                    flex-shrink: 0;
                    padding: 12px 18px;
                    background: #ffffff;
                    color: #172033;
                    border-radius: 6px;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 700;
                }

                .author-portfolio-button:hover {
                    background: #f2f4f7;
                }

                .author-back {
                    margin-top: 25px;
                    text-align: center;
                }

                .author-back a {
                    color: #475467;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 600;
                }

                @media (max-width: 700px) {

                    .author-container {
                        padding: 35px 15px 50px;
                    }

                    .author-hero h1 {
                        font-size: 30px;
                    }

                    .author-content {
                        grid-template-columns: 1fr;
                    }

                    .author-portfolio {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .author-portfolio-button {
                        width: 100%;
                        text-align: center;
                    }

                }

            `}</style>

        </div>
    );
}

export default Author;