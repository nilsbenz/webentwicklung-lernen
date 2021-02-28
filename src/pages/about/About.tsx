import React, { useState } from 'react';
import Editor from '../../components/editor/Editor';

const About = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <h1>About</h1>
      <Editor value={value} setValue={setValue} />
    </>
  );
};

export default About;
