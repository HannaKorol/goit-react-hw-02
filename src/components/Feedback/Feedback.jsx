import s from "./Feedback.module.css";

export default function Feedback (feedback) {
    return (
        <div className={s.flex}>
            <ul>
                <li>Good: {feedback.good}</li>
                <li>Neutral: {feedback.neutral}</li>
                <li>Bad:{feedback.bad}</li>
            </ul>
        </div>
    );
}