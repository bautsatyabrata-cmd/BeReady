import { Link } from "react-router-dom";

function ChapterCard({ chapter }) {
    return (
        <div className="chapter-card">

            <div className="chapter-number">
                0{chapter.id}
            </div>

            <h3>{chapter.title}</h3>

            <p>{chapter.description}</p>

            <div className="chapter-bottom">

                <span>
                    {chapter.totalQuestions} Questions
                </span>

                <Link to={`/practice/${chapter.slug}`}>
                    Practice →
                </Link>

            </div>

        </div>
    );
}

export default ChapterCard;