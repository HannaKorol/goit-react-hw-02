import s from "./Options.module.css";

export default function Options() {
    return (
      <div className={s.flex}>
        <button className={s.btn}>Good</button>
        <button className={s.btn}>Neutral</button>
        <button className={s.btn}>Bad</button>
        <button className={s.btn}>Reset</button>
      </div>
    );
}