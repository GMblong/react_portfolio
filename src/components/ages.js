import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

const Ages = () => {
  const { t } = useTranslation();
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
      title: t('about.age_title') === 'Waktu di Bumi' ? 'TAHUN' : (t('about.age_title') === '地球での時間' ? '年' : (t('about.age_title') === '在地球上的时间' ? '年' : 'YEARS')),
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

export default Ages;
