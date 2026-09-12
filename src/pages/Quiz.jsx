import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Timer from "../components/Timer";

import percentageEasy from "../data/percentage/easy";
import percentageMedium from "../data/percentage/medium";
import percentageHard from "../data/percentage/hard";
import percentageMixed from "../data/percentage/mixed";

import profitLossEasy from "../data/profitLoss/easy";
import profitLossMedium from "../data/profitLoss/medium";
import profitLossHard from "../data/profitLoss/hard";
import profitLossMixed from "../data/profitLoss/mixed";

import timeWorkEasy from "../data/timeWork/easy";
import timeWorkMedium from "../data/timeWork/medium";
import timeWorkHard from "../data/timeWork/hard";
import timeWorkMixed from "../data/timeWork/mixed";

import trainsBoatsEasy from "../data/trainsBoats/easy";
import trainsBoatsMedium from "../data/trainsBoats/medium";
import trainsBoatsHard from "../data/trainsBoats/hard";
import trainsBoatsMixed from "../data/trainsBoats/mixed";

import ratioProportionEasy from "../data/ratioProportion/easy";
import ratioProportionMedium from "../data/ratioProportion/medium";
import ratioProportionHard from "../data/ratioProportion/hard";
import ratioProportionMixed from "../data/ratioProportion/mixed";

import {
    getChapterProgress,
    markDifficultyCompleted
} from "../utils/progressUtils";


function Quiz() {

    const { chapter, difficulty } = useParams();
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [markedQuestions, setMarkedQuestions] = useState({});
    const [paused, setPaused] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60 * 60);

    let questions = [];

    if (chapter === "percentage") {
        if (difficulty === "easy") questions = percentageEasy;
        if (difficulty === "medium") questions = percentageMedium;
        if (difficulty === "hard") questions = percentageHard;
        if (difficulty === "mastery") questions = percentageMixed;
    }

    if (chapter === "profit-loss") {
        if (difficulty === "easy") questions = profitLossEasy;
        if (difficulty === "medium") questions = profitLossMedium;
        if (difficulty === "hard") questions = profitLossHard;
        if (difficulty === "mastery") questions = profitLossMixed;
    }

    if (chapter === "time-work") {
        if (difficulty === "easy") questions = timeWorkEasy;
        if (difficulty === "medium") questions = timeWorkMedium;
        if (difficulty === "hard") questions = timeWorkHard;
        if (difficulty === "mastery") questions = timeWorkMixed;
    }

    if (chapter === "trains-boats") {
        if (difficulty === "easy") questions = trainsBoatsEasy;
        if (difficulty === "medium") questions = trainsBoatsMedium;
        if (difficulty === "hard") questions = trainsBoatsHard;
        if (difficulty === "mastery") questions = trainsBoatsMixed;
    }

    if (chapter === "ratio-proportion") {
        if (difficulty === "easy") questions = ratioProportionEasy;
        if (difficulty === "medium") questions = ratioProportionMedium;
        if (difficulty === "hard") questions = ratioProportionHard;
        if (difficulty === "mastery") questions = ratioProportionMixed;
    }


    if (difficulty === "mastery") {

        const progress = getChapterProgress(chapter);

        const masteryUnlocked =
            progress.easy &&
            progress.medium &&
            progress.hard;

        if (!masteryUnlocked) {

            return (
                <div className="quiz-locked-page">

                    <Navbar />

                    <main className="quiz-locked-container">

                        <div className="locked-icon">
                            🔒
                        </div>

                        <h1>
                            Mastery Locked
                        </h1>

                        <p>
                            Complete Easy, Medium and Hard
                            levels before starting Mastery.
                        </p>

                        <button
                            onClick={() =>
                                navigate(`/practice/${chapter}`)
                            }
                        >
                            ← Back to Chapter
                        </button>

                    </main>

                </div>
            );
        }
    }


    if (questions.length === 0) {

        return (
            <div className="quiz-locked-page">

                <Navbar />

                <main className="quiz-locked-container">

                    <div className="locked-icon">
                        ⚠
                    </div>

                    <h1>
                        Questions Not Available
                    </h1>

                    <p>
                        This quiz is not available yet.
                    </p>

                    <button
                        onClick={() =>
                            navigate("/practice")
                        }
                    >
                        ← Back to Practice
                    </button>

                </main>

            </div>
        );
    }


    const currentQuestion =
        questions[currentIndex];


    function handleSelectAnswer(answerIndex) {

        if (paused) return;

        setAnswers((previousAnswers) => ({
            ...previousAnswers,
            [currentIndex]: answerIndex
        }));
    }


    function handleNext() {

        if (currentIndex < questions.length - 1) {

            setCurrentIndex(
                currentIndex + 1
            );
        }
    }


    function handlePrevious() {

        if (currentIndex > 0) {

            setCurrentIndex(
                currentIndex - 1
            );
        }
    }


    function handleQuestionClick(index) {

        if (!paused) {

            setCurrentIndex(index);
        }
    }


    function clearAnswer() {

        setAnswers((previousAnswers) => {

            const updatedAnswers = {
                ...previousAnswers
            };

            delete updatedAnswers[currentIndex];

            return updatedAnswers;
        });
    }


    function toggleMarkQuestion() {

        setMarkedQuestions(
            (previousMarked) => ({
                ...previousMarked,
                [currentIndex]:
                    !previousMarked[currentIndex]
            })
        );
    }


    function finishQuiz() {

        let correct = 0;

        questions.forEach(
            (question, index) => {

                if (
                    answers[index] ===
                    question.answer
                ) {
                    correct++;
                }
            }
        );

        const attempted =
            Object.keys(answers).length;

        const wrong =
            attempted - correct;

        const unattempted =
            questions.length - attempted;


        markDifficultyCompleted(
            chapter,
            difficulty
        );


        navigate("/result", {

            state: {

                chapter,
                difficulty,

                totalQuestions:
                    questions.length,

                correct,
                wrong,
                unattempted,

                answers,
                questions
            }
        });
    }


    const attempted =
        Object.keys(answers).length;

    const marked =
        Object.values(
            markedQuestions
        ).filter(Boolean).length;


    return (

        <div className="tcs-quiz-page">

            <Navbar />


            <div className="assessment-header">

                <div className="assessment-title">

                    <div className="assessment-logo">
                        ⚡
                    </div>

                    <div>

                        <h1>
                            BeReady Assessment
                        </h1>

                        <span>
                            {currentQuestion.chapter}
                            {" • "}
                            {currentQuestion.difficulty}
                        </span>

                    </div>

                </div>


                <div className="assessment-info">

                    <div className="assessment-stat">

                        <span>
                            Questions
                        </span>

                        <strong>
                            {questions.length}
                        </strong>

                    </div>


                    <div className="assessment-stat">

                        <span>
                            Attempted
                        </span>

                        <strong>
                            {attempted}
                        </strong>

                    </div>


                    <div className="assessment-timer">

                        <span>
                            Time Left
                        </span>

                        <Timer
                            timeLeft={timeLeft}
                            setTimeLeft={setTimeLeft}
                            paused={paused}
                            onTimeUp={finishQuiz}
                        />

                    </div>

                </div>

            </div>


            <main className="assessment-container">


                <section className="question-section">


                    <div className="question-section-header">

                        <div>

                            <span className="question-label">
                                QUESTION
                            </span>

                            <h2>
                                Question {currentIndex + 1}
                                {" "}
                                <span>
                                    / {questions.length}
                                </span>
                            </h2>

                        </div>


                        <button
                            className={`mark-button ${
                                markedQuestions[currentIndex]
                                    ? "marked"
                                    : ""
                            }`}
                            onClick={
                                toggleMarkQuestion
                            }
                        >
                            {markedQuestions[currentIndex]
                                ? "★ Marked"
                                : "☆ Mark for Review"}
                        </button>

                    </div>


                    <div className="question-progress-line">

                        <div
                            style={{
                                width: `${
                                    ((currentIndex + 1) /
                                        questions.length) *
                                    100
                                }%`
                            }}
                        />

                    </div>


                    <div className="question-box">


                        <div className="question-meta">

                            <span>
                                {currentQuestion.difficulty}
                            </span>

                            <span>
                                1 Question
                            </span>

                        </div>


                        <h3 className="main-question">

                            {currentQuestion.question}

                        </h3>


                        <div className="answer-heading">

                            <span>
                                Choose the correct answer
                            </span>

                        </div>


                        <div className="answer-options">

                            {currentQuestion.options.map(
                                (option, index) => {

                                    const selected =
                                        answers[currentIndex] ===
                                        index;

                                    return (

                                        <button
                                            key={index}
                                            className={`answer-option ${
                                                selected
                                                    ? "selected"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleSelectAnswer(
                                                    index
                                                )
                                            }
                                            disabled={paused}
                                        >

                                            <span className="answer-letter">

                                                {String.fromCharCode(
                                                    65 + index
                                                )}

                                            </span>

                                            <span className="answer-text">

                                                {option}

                                            </span>

                                            <span className="answer-check">

                                                {selected
                                                    ? "✓"
                                                    : ""}

                                            </span>

                                        </button>
                                    );
                                }
                            )}

                        </div>


                        <div className="question-tools">

                            <button
                                onClick={
                                    clearAnswer
                                }
                                disabled={
                                    answers[currentIndex] ===
                                        undefined ||
                                    paused
                                }
                            >
                                Clear Answer
                            </button>

                        </div>

                    </div>


                    <div className="question-navigation">

                        <button
                            className="navigation-button previous"
                            onClick={
                                handlePrevious
                            }
                            disabled={
                                currentIndex === 0 ||
                                paused
                            }
                        >
                            ← Previous
                        </button>


                        <button
                            className="pause-button"
                            onClick={() =>
                                setPaused(!paused)
                            }
                        >
                            {paused
                                ? "▶ Resume Test"
                                : "Ⅱ Pause Test"}
                        </button>


                        {currentIndex ===
                        questions.length - 1 ? (

                            <button
                                className="navigation-button submit"
                                onClick={
                                    finishQuiz
                                }
                                disabled={paused}
                            >
                                Submit Test ✓
                            </button>

                        ) : (

                            <button
                                className="navigation-button next"
                                onClick={
                                    handleNext
                                }
                                disabled={paused}
                            >
                                Save & Next →
                            </button>

                        )}

                    </div>

                </section>


                <aside className="assessment-sidebar">


                    <div className="palette-card">


                        <div className="palette-title">

                            <div>

                                <span>
                                    QUESTION PALETTE
                                </span>

                                <h3>
                                    All Questions
                                </h3>

                            </div>

                            <strong>
                                {attempted}/{questions.length}
                            </strong>

                        </div>


                        <div className="palette-progress">

                            <div
                                style={{
                                    width: `${
                                        (attempted /
                                            questions.length) *
                                        100
                                    }%`
                                }}
                            />

                        </div>


                        <div className="palette-grid">

                            {questions.map(
                                (_, index) => {

                                    const isAnswered =
                                        answers[index] !==
                                        undefined;

                                    const isCurrent =
                                        currentIndex ===
                                        index;

                                    const isMarked =
                                        markedQuestions[index];

                                    return (

                                        <button
                                            key={index}
                                            className={`
                                                palette-question
                                                ${
                                                    isCurrent
                                                        ? "current"
                                                        : ""
                                                }
                                                ${
                                                    isAnswered
                                                        ? "answered"
                                                        : ""
                                                }
                                                ${
                                                    isMarked
                                                        ? "marked"
                                                        : ""
                                                }
                                            `}
                                            onClick={() =>
                                                handleQuestionClick(
                                                    index
                                                )
                                            }
                                        >

                                            {index + 1}

                                            {isMarked && (
                                                <span>
                                                    ★
                                                </span>
                                            )}

                                        </button>
                                    );
                                }
                            )}

                        </div>


                        <div className="palette-legend">

                            <div>

                                <span className="legend-box current-box" />

                                <span>
                                    Current
                                </span>

                            </div>


                            <div>

                                <span className="legend-box answered-box" />

                                <span>
                                    Answered
                                </span>

                            </div>


                            <div>

                                <span className="legend-box marked-box" />

                                <span>
                                    Review
                                </span>

                            </div>


                            <div>

                                <span className="legend-box unanswered-box" />

                                <span>
                                    Unanswered
                                </span>

                            </div>

                        </div>

                    </div>


                    <div className="assessment-summary">

                        <div>

                            <span>
                                Attempted
                            </span>

                            <strong>
                                {attempted}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Marked
                            </span>

                            <strong>
                                {marked}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Remaining
                            </span>

                            <strong>
                                {questions.length -
                                    attempted}
                            </strong>

                        </div>

                    </div>


                    <button
                        className="sidebar-submit"
                        onClick={
                            finishQuiz
                        }
                        disabled={paused}
                    >
                        Submit Test
                    </button>

                </aside>

            </main>


            <style>{`

                .tcs-quiz-page {
                    min-height: 100vh;
                    background: #f4f6f8;
                    color: #172033;
                }

                .assessment-header {
                    min-height: 82px;
                    background: #ffffff;
                    border-bottom: 1px solid #dfe4ea;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 42px;
                    gap: 30px;
                }

                .assessment-title {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }

                .assessment-logo {
                    width: 44px;
                    height: 44px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #172033;
                    color: #ffffff;
                    font-size: 22px;
                }

                .assessment-title h1 {
                    margin: 0;
                    font-size: 20px;
                    font-weight: 700;
                    color: #172033;
                }

                .assessment-title span {
                    display: block;
                    margin-top: 4px;
                    color: #667085;
                    font-size: 13px;
                }

                .assessment-info {
                    display: flex;
                    align-items: center;
                    gap: 28px;
                }

                .assessment-stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 65px;
                }

                .assessment-stat span,
                .assessment-timer > span {
                    color: #667085;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: .5px;
                }

                .assessment-stat strong {
                    margin-top: 4px;
                    font-size: 17px;
                    color: #172033;
                }

                .assessment-timer {
                    min-width: 120px;
                    padding: 9px 16px;
                    border-radius: 8px;
                    background: #fff7ed;
                    border: 1px solid #fed7aa;
                }

                .assessment-timer .quiz-timer {
                    margin-top: 2px;
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: #c2410c;
                    font-size: 18px;
                    font-weight: 700;
                    background: transparent;
                    border: 0;
                    padding: 0;
                }

                .assessment-container {
                    max-width: 1380px;
                    margin: 0 auto;
                    padding: 30px 40px 50px;
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 330px;
                    gap: 26px;
                }

                .question-section {
                    min-width: 0;
                }

                .question-section-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 14px;
                }

                .question-label {
                    font-size: 11px;
                    font-weight: 700;
                    color: #667085;
                    letter-spacing: 1px;
                }

                .question-section-header h2 {
                    margin: 5px 0 0;
                    font-size: 24px;
                    color: #172033;
                }

                .question-section-header h2 span {
                    color: #98a2b3;
                    font-weight: 500;
                }

                .mark-button {
                    border: 1px solid #cfd6df;
                    background: #ffffff;
                    color: #475467;
                    padding: 11px 16px;
                    border-radius: 7px;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 600;
                }

                .mark-button:hover {
                    border-color: #172033;
                }

                .mark-button.marked {
                    background: #fff7ed;
                    border-color: #f59e0b;
                    color: #b45309;
                }

                .question-progress-line {
                    height: 4px;
                    background: #e5e7eb;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 20px;
                }

                .question-progress-line div {
                    height: 100%;
                    background: #172033;
                    border-radius: 10px;
                    transition: width .25s ease;
                }

                .question-box {
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 28px 30px;
                    min-height: 440px;
                    box-shadow: 0 2px 8px rgba(16, 24, 40, .04);
                }

                .question-meta {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 22px;
                }

                .question-meta span {
                    padding: 5px 10px;
                    border-radius: 4px;
                    background: #f2f4f7;
                    color: #475467;
                    font-size: 11px;
                    font-weight: 600;
                }

                .main-question {
                    margin: 0;
                    max-width: 950px;
                    font-size: 22px;
                    line-height: 1.55;
                    font-weight: 600;
                    color: #172033;
                }

                .answer-heading {
                    margin-top: 34px;
                    margin-bottom: 13px;
                    color: #667085;
                    font-size: 13px;
                    font-weight: 600;
                }

                .answer-options {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                }

                .answer-option {
                    min-height: 58px;
                    border: 1px solid #d0d5dd;
                    background: #ffffff;
                    border-radius: 7px;
                    padding: 10px 14px;
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    text-align: left;
                    cursor: pointer;
                    transition: all .15s ease;
                    color: #344054;
                }

                .answer-option:hover:not(:disabled) {
                    border-color: #172033;
                    background: #f9fafb;
                }

                .answer-option.selected {
                    border-color: #2563eb;
                    background: #eff6ff;
                    color: #172033;
                }

                .answer-letter {
                    width: 30px;
                    height: 30px;
                    min-width: 30px;
                    border-radius: 5px;
                    border: 1px solid #cfd6df;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    font-weight: 700;
                    background: #f8fafc;
                }

                .answer-option.selected .answer-letter {
                    border-color: #2563eb;
                    background: #2563eb;
                    color: #ffffff;
                }

                .answer-text {
                    font-size: 15px;
                    line-height: 1.4;
                    flex: 1;
                }

                .answer-check {
                    width: 22px;
                    color: #2563eb;
                    font-weight: 700;
                }

                .question-tools {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 20px;
                }

                .question-tools button {
                    border: 0;
                    background: transparent;
                    color: #667085;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 600;
                }

                .question-tools button:hover:not(:disabled) {
                    color: #172033;
                    text-decoration: underline;
                }

                .question-tools button:disabled {
                    opacity: .4;
                    cursor: not-allowed;
                }

                .question-navigation {
                    margin-top: 18px;
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    align-items: center;
                    gap: 12px;
                }

                .navigation-button,
                .pause-button {
                    min-height: 46px;
                    border-radius: 7px;
                    padding: 0 20px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    border: 1px solid #cfd6df;
                }

                .navigation-button.previous {
                    justify-self: start;
                    background: #ffffff;
                    color: #344054;
                }

                .navigation-button.next {
                    justify-self: end;
                    background: #172033;
                    color: #ffffff;
                    border-color: #172033;
                }

                .navigation-button.submit {
                    justify-self: end;
                    background: #b42318;
                    color: #ffffff;
                    border-color: #b42318;
                }

                .pause-button {
                    background: #ffffff;
                    color: #475467;
                }

                .navigation-button:hover:not(:disabled),
                .pause-button:hover:not(:disabled) {
                    opacity: .88;
                }

                .navigation-button:disabled,
                .pause-button:disabled {
                    opacity: .45;
                    cursor: not-allowed;
                }

                .assessment-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .palette-card {
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0 2px 8px rgba(16, 24, 40, .04);
                }

                .palette-title {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 10px;
                }

                .palette-title span {
                    font-size: 10px;
                    color: #667085;
                    letter-spacing: .8px;
                    font-weight: 700;
                }

                .palette-title h3 {
                    margin: 5px 0 0;
                    font-size: 17px;
                    color: #172033;
                }

                .palette-title strong {
                    font-size: 15px;
                    color: #172033;
                }

                .palette-progress {
                    height: 5px;
                    background: #eaecf0;
                    border-radius: 10px;
                    margin: 17px 0 20px;
                    overflow: hidden;
                }

                .palette-progress div {
                    height: 100%;
                    background: #16a34a;
                    border-radius: 10px;
                    transition: width .2s ease;
                }

                .palette-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 8px;
                }

                .palette-question {
                    position: relative;
                    height: 42px;
                    border-radius: 5px;
                    border: 1px solid #d0d5dd;
                    background: #ffffff;
                    color: #475467;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 600;
                }

                .palette-question:hover {
                    border-color: #172033;
                }

                .palette-question.current {
                    border: 2px solid #172033;
                    color: #172033;
                    background: #f8fafc;
                }

                .palette-question.answered {
                    background: #dcfce7;
                    border-color: #86efac;
                    color: #166534;
                }

                .palette-question.current.answered {
                    border: 2px solid #172033;
                }

                .palette-question.marked {
                    box-shadow: inset 0 -3px 0 #f59e0b;
                }

                .palette-question span {
                    position: absolute;
                    right: 3px;
                    top: 1px;
                    font-size: 9px;
                    color: #b45309;
                }

                .palette-legend {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px 8px;
                    margin-top: 22px;
                    padding-top: 18px;
                    border-top: 1px solid #eaecf0;
                }

                .palette-legend div {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: #667085;
                    font-size: 10px;
                }

                .legend-box {
                    width: 12px;
                    height: 12px;
                    border-radius: 3px;
                    border: 1px solid #d0d5dd;
                    background: #ffffff;
                }

                .current-box {
                    border: 2px solid #172033;
                }

                .answered-box {
                    background: #dcfce7;
                    border-color: #86efac;
                }

                .marked-box {
                    background: #ffffff;
                    border-color: #d0d5dd;
                    box-shadow: inset 0 -3px 0 #f59e0b;
                }

                .unanswered-box {
                    background: #ffffff;
                }

                .assessment-summary {
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 17px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 10px;
                }

                .assessment-summary div {
                    text-align: center;
                }

                .assessment-summary span {
                    display: block;
                    font-size: 10px;
                    color: #667085;
                }

                .assessment-summary strong {
                    display: block;
                    margin-top: 4px;
                    font-size: 18px;
                    color: #172033;
                }

                .sidebar-submit {
                    width: 100%;
                    height: 48px;
                    border: 0;
                    border-radius: 7px;
                    background: #b42318;
                    color: #ffffff;
                    font-weight: 700;
                    cursor: pointer;
                }

                .sidebar-submit:hover:not(:disabled) {
                    background: #912018;
                }

                .sidebar-submit:disabled {
                    opacity: .45;
                    cursor: not-allowed;
                }

                .quiz-locked-page {
                    min-height: 100vh;
                    background: #f4f6f8;
                }

                .quiz-locked-container {
                    max-width: 600px;
                    margin: 100px auto;
                    text-align: center;
                    background: #ffffff;
                    border: 1px solid #dfe4ea;
                    border-radius: 10px;
                    padding: 50px 30px;
                }

                .locked-icon {
                    font-size: 40px;
                    margin-bottom: 15px;
                }

                .quiz-locked-container h1 {
                    color: #172033;
                }

                .quiz-locked-container p {
                    color: #667085;
                    margin-bottom: 25px;
                }

                .quiz-locked-container button {
                    border: 0;
                    border-radius: 7px;
                    background: #172033;
                    color: #ffffff;
                    padding: 12px 20px;
                    cursor: pointer;
                    font-weight: 600;
                }

                @media (max-width: 900px) {

                    .assessment-header {
                        padding: 15px 20px;
                        align-items: flex-start;
                    }

                    .assessment-info {
                        gap: 12px;
                    }

                    .assessment-stat {
                        display: none;
                    }

                    .assessment-container {
                        grid-template-columns: 1fr;
                        padding: 22px 20px 40px;
                    }

                    .assessment-sidebar {
                        order: 2;
                    }

                    .question-section {
                        order: 1;
                    }

                }

                @media (max-width: 600px) {

                    .assessment-header {
                        flex-direction: column;
                        gap: 15px;
                    }

                    .assessment-info {
                        width: 100%;
                        justify-content: space-between;
                    }

                    .assessment-timer {
                        margin-left: auto;
                    }

                    .question-section-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .question-box {
                        padding: 20px 16px;
                    }

                    .main-question {
                        font-size: 18px;
                    }

                    .answer-options {
                        grid-template-columns: 1fr;
                    }

                    .question-navigation {
                        grid-template-columns: 1fr;
                    }

                    .navigation-button.previous,
                    .navigation-button.next,
                    .navigation-button.submit {
                        justify-self: stretch;
                        width: 100%;
                    }

                    .pause-button {
                        width: 100%;
                    }

                    .palette-grid {
                        grid-template-columns: repeat(5, 1fr);
                    }

                }

            `}</style>

        </div>
    );
}

export default Quiz;