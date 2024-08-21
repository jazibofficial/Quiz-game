import React from 'react';

function Qslist({ question, option, handleranswer, answer }) {
  return (
    <div className='container flex flex-col m-auto text-center mt-40'>
      <h1 className='font-mono font-bold'>
        {question}
      </h1>
      <ul className='p-6'>
        {option.map((value, index) => (
          <li
            key={index}
            className={`${answer === value ? 'bg-red-600' : ''} p-[10px] bg-slate-50 m-[10px] cursor-pointer hover:bg-slate-100`}
            onClick={() => handleranswer(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Qslist;
