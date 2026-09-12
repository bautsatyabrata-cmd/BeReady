export function getChapterProgress(chapter) {
    const progress = localStorage.getItem(
        `chapter-progress-${chapter}`
    );

    if (!progress) {
        return {
            easy: false,
            medium: false,
            hard: false
        };
    }

    return JSON.parse(progress);
}


export function markDifficultyCompleted(
    chapter,
    difficulty
) {
    const progress = getChapterProgress(chapter);

    progress[difficulty] = true;

    localStorage.setItem(
        `chapter-progress-${chapter}`,
        JSON.stringify(progress)
    );
}


export function isMasteryUnlocked(chapter) {
    const progress = getChapterProgress(chapter);

    return (
        progress.easy &&
        progress.medium &&
        progress.hard
    );
}