import s from "./Options.module.css";

export default function Options(onLeaveFeedback, onResetFeedback) {
  return (
    <div className={s.flex}>
      <button onClick={() => onLeaveFeedback("good")} className={s.btn}>
        Good
      </button>
      <button onClick={() => onLeaveFeedback("neutral")} className={s.btn}>
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback("bad")} className={s.btn}>
        Bad
      </button>
      <button onClick = {onResetFeedback} className= {s.btn}>
        Reset
      </button>
    </div>
  );
}
