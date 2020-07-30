import React, { useEffect } from 'react';
import Container from '../Container';

function Page(props) {
  React.useEffect(() => {
    document.title = `${props.name}`;
    window.scrollTo(0, 0);
  }, []);
  return <Container wide={props.wide}>
    {props.children}
  </Container>;
}

export default Page;
