import React from 'react';
import Card from './shared/Card';

const FeedbackForm = () => {
  return (
    <Card>
      <form action=''>
        <h2>How would you rate your service with us?</h2>

        {/* TODO - rating select component */}
        <div className='input-group'>
          <input type='text' name='' id='' placeholder='Write a review' />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
