import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";



export default function App() {
   const [values, setValues] = useState({
     good: 0,
     neutral: 0,
     bad: 0,
   });
  
  const onLeaveFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1
    });
  };
  
  return (
    <>
      <Description />
      <Options/>
      <Feedback/>
    </>
  );
}