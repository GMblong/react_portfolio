import React, { useEffect, useRef, useState, useCallback } from 'react';
import dayjs from 'dayjs';

const Items = () => {
  const getAge = () =>
    (dayjs().diff('1998-12-06', 'milliseconds') / (365.25 * 24 * 60 * 60 * 1000)).toFixed(9);

  const [age, setAge] = useState(getAge());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAge(getAge());
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  const data = [
    {
      title: 'Years',
      link: '',
      value: age,
      icon: ''
    }
  ];

  return (
    <div className="">
      {data.map((item, index) => (
        <a key={index}>
          <h1 className="text-2xl font-bold text-aired">{item.value}</h1>
          <div className="text-slate-400 dark:slate-600 text-xs">{item.title}</div>
        </a>
      ))}
    </div>
  );
};

export default Items;
