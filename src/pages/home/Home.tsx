import React, { useRef } from 'react';
import Button from '../../components/button/Button';
import MainImage from '../../assets/main-image.png';
import Card from '../../components/card/Card';
import Typography from '../../components/typography/Typography';
import Layout from '../../components/layout/Layout';

const Home: React.FC = () => {
  const coursesRef = useRef<HTMLDivElement>(null);

  const scrollToCourses = () => {
    coursesRef.current &&
      coursesRef.current.scrollIntoView({
        behavior: 'smooth',
      });
  };

  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-2 pb-24 md:py-48">
        <div className="flex flex-col justify-center gap-10 md:gap-14 lg:gap-20  items-start md:w-1/2">
          <Typography variant="heading">Webentwicklung lernen</Typography>
          <Typography variant="body-secondary">
            Die Grundlagen der modernen Webentwicklung einfach und
            anwendungsbasiert erklärt. Entdecke Technolgien, welche als
            Grundbausteine angesagter Websites grossen Einfluss auf eine gesamte
            Industrie haben. Erstelle Webanwendungen mit HTML und CSS und
            speichere Daten in einer NoSQL Datenbank.
          </Typography>
          <Button variant="contained" color="primary" onClick={scrollToCourses}>
            Zu den Kursen
          </Button>
        </div>
        <div className="md:w-1/2 flex items-center">
          <img src={MainImage} alt="Title image" />
        </div>
      </div>
      <div ref={coursesRef}>
        <Typography variant="title" className="mb-8 md:mb-12">
          Kurse
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Card
            primary="Grundlagen der Webentwicklung"
            secondary="Hosting, Domain Names, Entwicklungsumgebungen und vieles mehr."
            href="/courses/basics"
            className="h-full"
          />
          <Card
            primary="HTML"
            secondary="Grundlagen der Auszeichnungssprache und weitere Features wie das Erstellen von Formularen."
            href="/courses/html"
            className="h-full"
          />
          <Card
            primary="CSS"
            secondary="Mit CSS kannst du deine Website gestalten."
            href="/courses/css"
            className="h-full"
          />
          <Card
            primary="JavaScript"
            secondary="Lerne die Grundlagen von JavaScript, der Skriptsprache des Webs."
            href="/courses/javascript"
            className="h-full"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
