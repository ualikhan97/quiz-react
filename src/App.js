import { useState } from "react";
import "./index.css";

const questions = [
  {
    title: "Что такое React JS?",
    variants: [
      "Библиотека для создания пользовательских интерфейсов на JavaScript",
      "Фреймворк для создания одностраничных приложений на Java",
      "Библиотека для создания серверной части на PHP",
    ],
    correct: 0,
  },
  {
    title: "Какие основные принципы лежат в основе React JS?",
    variants: [
      "Императивное программирование",
      "Декларативное программирование",
      "Функциональное программирование",
    ],
    correct: 1,
  },
  {
    title: "Какие основные преимущества использования React JS?",
    variants: [
      "Высокая скорость работы",
      "Легкость в использовании",
      "Модульность и переиспользование компонентов",
    ],
    correct: 2,
  },
  {
    title: "Что такое JSX??",
    variants: [
      "Язык программирования, используемый в React",
      "Формат данных, используемый для передачи данных между компонентами в React",
      " Синтаксический сахар для JavaScript, используемый в React для создания пользовательского интерфейса",
    ],
    correct: 2,
  },
  {
    title: "Что такое Virtual DOM?",
    variants: [
      "Виртуальное представление DOM-структуры, используемое в React для оптимизации работы с DOM",
      " Физический сервер, на котором запускается React",
      "Класс, используемый в React для создания компонентов",
    ],
    correct: 0,
  },
  {
    title: "Что такое state в React компонентах?",
    variants: [
      "Метод, который вызывается при обновлении компонента",
      "Объект, содержащий данные, используемые для отображения пользовательского интерфейса",
      "Метод, который вызывается при монтировании компонента",
    ],
    correct: 1,
  },
  {
    title: "Что такое props в React компонентах?",
    variants: [
      " Метод, который вызывается при монтировании компонента",
      " Метод, который вызывается при обновлении компонента",
      "Объект, содержащий данные, передаваемые в компонент из родительского компонента",
    ],
    correct: 2,
  },
  {
    title: "Как реализовать условный рендеринг в React?",
    variants: [
      " Использовать метод setState",
      " Использовать условный оператор if/else",
      "Использовать тернарный оператор или логический оператор &&",
    ],
    correct: 2,
  },
  {
    title: "Что такое React Router?",
    variants: [
      " Метод, который вызывается при обновлении компонента",
      " Библиотека для управления маршрутизацией в React-приложении",
      "Метод, который вызывается при монтировании компонента",
    ],
    correct: 1,
  },
  {
    title: "Что такое Redux?",
    variants: [
      " Библиотека для управления маршрутизацией в React",
      " Библиотека для тестирования React-приложений",
      "Библиотека для управления состоянием приложения в React",
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа(ов) из 10</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const percentAge = Math.round((step / questions.length) * 100);
  console.log(percentAge);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentAge}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game onClickVariant={onClickVariant} step={step} question={question} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
