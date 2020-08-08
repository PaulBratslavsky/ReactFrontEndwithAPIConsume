import React from 'react';

function FlashMessage({ messages}) {
  const {message, type } = messages;
  return (
    <div className="floating-alerts">
      {
        message.map((message, index) => <div key={index} className={`alert ${type} text-center floating-alert shadow-sm`}>
          {message}
        </div>)
      }
    </div>
  );
}

export default FlashMessage;
