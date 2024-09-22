import Description from "./Description/Description";
import Options from "./Options/Options";
import { useState } from 'react';
import Feedback from "./Feedback/Feedback";



export default function App() {
  // Оголошуємо стан і функцію-сеттер
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція для оновлення фідбеку
  const onLeaveFeedback = (option) => {
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState [option] + 1,
    }));
  };

  const onResetFeedback = () => {
    setFeedback(
      {
        good: 0,
          neutral: 0,
        bad: 0,
    }
  )
}

  return (
    <div>
      <Description />
      {/* Передаємо функцію для кожної кнопки в Options  */}
      <Options
        onLeaveFeedback={onLeaveFeedback}
        onResetFeedback={onResetFeedback}
      />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </div>
  );
};