import Description from "./Description/Description";
import Options from "./Options/Options";
import { useState } from "react";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

export default function App() {
  // Оголошуємо стан і функцію-сеттер (useState - це функція React замість let feedback = 0, "lecture1 34:57-42:02")
  const [feedback, setFeedback] = useState({
    //useState-це хук як і useEffect, useRef, useMemo, useCallback, useContex, useReducer
    //setCounter-це функція для зміни того що ми відображаємо setFeedback(feedback+1) "lecture1 45:49"
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція для оновлення фідбеку
  const onLeaveFeedback = (option) => {
    //назва onLeaveFeedback з рекомендації ментора з slack замість updateFeedback
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  // Функція для очищення фідбеку
  const onResetFeedback = () => {
    setFeedback({
      // setFeedback (0) "lecture1 47:11"
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  //Загальна кількість фітбуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <Description />
      {/* Передаємо функцію для кожної кнопки в Options  */}
      <Options
        onLeaveFeedback={onLeaveFeedback}
        onResetFeedback={onResetFeedback}
        totalFeedback={totalFeedback}
      />
      {/* Відображаємо компонент Feedback і кнопку Reset лише при наявності відгуків */}
      {totalFeedback > 0 ? (
        <>
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
          />
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
