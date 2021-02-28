import React from 'react';
import Layout from '../../../components/layout/Layout';
import Header from '../../../components/header/Header';
import Typography from '../../../components/typography/Typography';
import Card from '../../../components/card/Card';

const CourseHTML = () => {
  return (
    <>
      <Header>Kurse | HTML</Header>
      <Layout>
        <Typography variant="title" className="mb-8 md:mb-12">
          Kapitel
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Card
            primary="HTML Grundlagen"
            secondary="Der grundlegende Aufbau einer HTML Seite und weitere Features."
            href="/courses/html/basics"
            className="h-full"
          />
          <Card
            primary="Semantisches HTML"
            secondary="Lerne, wie du mithilfe von semantischem HTML die Entwicklung und auch die Zugänglichkeit vereinfachst."
            href="/courses/html/semantic"
            className="h-full"
          />
        </div>
      </Layout>
    </>
  );
};

export default CourseHTML;
