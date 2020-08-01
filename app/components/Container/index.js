import React, { useEffect } from 'react';

function Container({ children, wide }) {
  return <div className={wide ? 'container py-md-5 ' : 'container  container--narrow py-md-5'}>{children}</div>;
}

export default Container;
