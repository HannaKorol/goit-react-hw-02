import Description from "./Description/Description";
import Options from "./Options/Options";
import { useEffect, useState } from "react";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

export default function App() {
  // Оголошуємо стан і функцію-сеттер (useState - це функція React замість let feedback = 0, "lecture1 34:57-42:02")
  const [feedback, setFeedback] = useState(() => {
    //useState-це хук як і useEffect, useRef, useMemo, useCallback, useContex, useReducer
    //setCounter-це функція для зміни того що ми відображаємо setFeedback(feedback+1) "lecture1 45:49"
    // Отримання даних з lokak storage "lecture2 40:00"
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback) //Використовуємо JSON.parse для перетворення рядка назад в об'єкт під час завантаження сторінки "lecture2 40:00"
      : { good: 0, neutral: 0, bad: 0 };
  });
  
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback)); //Використовуємо JSON.stringify для перетворення об'єкта в рядок перед збереженням. "lecture2 40:00"
  }, [feedback]);

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
  //Обчислення позитивних відгуків (складний код-можна спробувати спростити і правильно додати як props до компонентів)
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);



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
            positive={positiveFeedback}
          />
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
