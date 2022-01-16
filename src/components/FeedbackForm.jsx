import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
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
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
