import React, { useState } from 'react';
import Card from './shared/Card';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <Card>
      <form action=''>
        <h2>How would you rate your service with us?</h2>

        {/* TODO - rating select component */}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            name=''
            id=''
            placeholder='Write a review'
            value={text}
          />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
