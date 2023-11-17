import React from 'react';
import data from '@/db.json';

const TestPage = () => {
  console.log(data);

  return (
    <div className='bg-red-500 pt-24'>
      TestPage
      <p>{data.projects[0].id}</p>
      <p>{data.projects[0].description}</p>
    </div>
  );
};

export default TestPage;

