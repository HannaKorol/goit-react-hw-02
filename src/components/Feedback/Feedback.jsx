import s from "./Feedback.module.css";

export default function Feedback (feedback) {
    return (
      <div className={s.flex}>
        <ul>
          <li>Good: {feedback.good}</li>
          <li>Neutral: {feedback.neutral}</li>
          <li>Bad:{feedback.bad}</li>
          <li>Total:{feedback.good + feedback.neutral + feedback.bad}</li>
          <li>
            Positive:
            {Math.round(
              (feedback.good /
                (feedback.good + feedback.neutral + feedback.bad)) *
                100
            )}
          </li>
        </ul>
      </div>
    );
}