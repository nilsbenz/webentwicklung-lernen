import React, { useState } from 'react';
import Editor from '../../../../components/editor/Editor';
import Header from '../../../../components/header/Header';
import Layout from '../../../../components/layout/Layout';
import LayoutCentered from '../../../../components/layout/LayoutCentered';
import Typography from '../../../../components/typography/Typography';

const HTMLBasics: React.FC = () => {
  const [code, setCode] = useState('<h1>titel</h1>');

  return (
    <>
      <Header>HTML Grundlagen</Header>
      <Layout>
        <LayoutCentered>
          <Typography variant="title" className="mb-8 md:mb-12">
            Was ist HTML?
          </Typography>
        </LayoutCentered>
        <Editor value={code} setValue={setCode} saveManually />
      </Layout>
    </>
  );
};

export default HTMLBasics;
