import { Link, useParams } from "react-router-dom";

import chapters from "../data/chapters";
import DifficultyCard from "../components/DifficultyCard";
import { getChapterProgress } from "../utils/progressUtils";

function Chapter() {

    const { chapter: chapterSlug } = useParams();

    const chapter = chapters.find(
        (item) => item.slug === chapterSlug
    );

    if (!chapter) {
        return (
            <div>
                <h1>Chapter Not Found</h1>

                <Link to="/practice">
                    ← Back to Practice
                </Link>
            </div>
        );
    }

    const progress = getChapterProgress(chapter.slug);

    const masteryUnlocked =
        progress.easy &&
        progress.medium &&
        progress.hard;


    return (
        <div className="chapter-page">

            <main className="chapter-container">

                <Link
                    to="/practice"
                    className="back-link"
                >
                    ← Back to Practice
                </Link>


                <div className="chapter-header">

                    <span className="section-label">
                        CHAPTER {String(chapter.id).padStart(2, "0")}
                    </span>

                    <h1 className="chapter-heading">
                        {chapter.title}
                    </h1>

                    <p className="chapter-description-large">
                        {chapter.description}
                    </p>

                </div>


                <div className="difficulty-grid">

                    <DifficultyCard
                        chapter={chapter.slug}
                        difficulty="Easy"
                        questionCount={100}
                        completed={progress.easy ? 100 : 0}
                    />


                    <DifficultyCard
                        chapter={chapter.slug}
                        difficulty="Medium"
                        questionCount={100}
                        completed={progress.medium ? 100 : 0}
                    />


                    <DifficultyCard
                        chapter={chapter.slug}
                        difficulty="Hard"
                        questionCount={100}
                        completed={progress.hard ? 100 : 0}
                    />


                    <DifficultyCard
                        chapter={chapter.slug}
                        difficulty="Mastery"
                        questionCount={100}
                        completed={0}
                        locked={!masteryUnlocked}
                    />

                </div>


                <div className="chapter-progress">

                    <h2>
                        Your Progress
                    </h2>

                    <div className="progress-items">

                        <div>
                            <span>Easy</span>
                            <strong>
                                {progress.easy ? "Completed ✓" : "Not Completed"}
                            </strong>
                        </div>

                        <div>
                            <span>Medium</span>
                            <strong>
                                {progress.medium ? "Completed ✓" : "Not Completed"}
                            </strong>
                        </div>

                        <div>
                            <span>Hard</span>
                            <strong>
                                {progress.hard ? "Completed ✓" : "Not Completed"}
                            </strong>
                        </div>

                        <div>
                            <span>Mastery</span>
                            <strong>
                                {masteryUnlocked
                                    ? "Unlocked 🔓"
                                    : "Locked 🔒"}
                            </strong>
                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default Chapter;