import React, { useState } from 'react';
import Editor from '../../../../components/editor/Editor';
import Header from '../../../../components/header/Header';
import Layout from '../../../../components/layout/Layout';
import LayoutCentered from '../../../../components/layout/LayoutCentered';
import Typography from '../../../../components/typography/Typography';
import HtmlElementImage from '../../../../assets/html-element.svg';
import Code from '../../../../components/typography/Code';

const HTMLBasics: React.FC = () => {
  const [code_name, setCode_Name] = useState('<h1></h1>');
  const solution_name = '<h1>Dein Name</h1>';
  const [code_body, setCode_Body] = useState('<body>\n  \n</body>');
  const solution_body =
    '<body>\n  <h1>Ich bin der Titel</h1>\n  <p>Dieses Textelement ist ein "child element" vom body.</p>\n</body>';
  const [code_div, setCode_Div] = useState(
    '<body>\n  <h1>Mein Blog</h1>\n  <div>\n    \n  </div>\n</body>'
  );
  const solution_div = `<body>
  <h1>Mein Blog</h1>
  <div>
    <h2>Der erste Artikel!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quas ipsa similique, in explicabo laboriosam voluptatum praesentium eius exercitationem.
    </p>
  </div>
  <div>
    <h2>Artikel Nr. 2</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, repellendus illo dolorum hic perferendis quis.
    </p>
  </div>
</body>`;
  const [code_attribute, setCode_Attribute] = useState(`<body>
  <h1>Mein Blog</h1>
  <div>
    <h2>Der erste Artikel!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quas ipsa similique, in explicabo laboriosam voluptatum praesentium eius exercitationem.
    </p>
  </div>
  <div>
    <h2>Artikel Nr. 2</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, repellendus illo dolorum hic perferendis quis.
    </p>
  </div>
</body>`);
  const solution_attribute = `<body>
  <h1 id="titel">Mein Blog</h1>
  <div class="artikel">
    <h2>Der erste Artikel!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quas ipsa similique, in explicabo laboriosam voluptatum praesentium eius exercitationem.
    </p>
  </div>
  <div class="artikel">
    <h2>Artikel Nr. 2</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, repellendus illo dolorum hic perferendis quis.
    </p>
  </div>
</body>`;
  const [code_text, setCode_Text] = useState(`<body>
  <h1>Wichtiger Artikel</h1>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero (quas ipsa) similique, in explicabo laboriosam voluptatum praesentium eius exercitationem.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, repellendus illo dolorum hic perferendis quis.
    </p>
  </div>
</body>`);
  const solution_text = `<body>
  <h1>Wichtiger Artikel</h1>
  <div>
    <p>
      <strong>Lorem ipsum dolor</strong> sit amet consectetur, adipisicing elit. Tenetur vero (<em>quas ipsa</em>) similique, in explicabo laboriosam voluptatum praesentium eius exercitationem.
    </p>
    <p>
      <strong>Lorem ipsum dolor</strong>, sit amet consectetur adipisicing elit. Vitae, repellendus illo dolorum hic perferendis quis.
    </p>
  </div>
</body>`;
  const [code_image, setCode_Image] = useState(`<body>
  <h1>Mein Haus</h1>
  <img src="" alt="" width="" />
</body>`);
  const solution_image = `<body>
  <h1>Mein Haus</h1>
  <img src="/haus.jpg" alt="Ein kleines Haus am See" width="400px" />
</body>`;
  const [code_lists, setCode_Lists] = useState(`<body>
  <div id="avengers">
    <h1>Avengers</h1>
    <ul>
      <li>Iron Man</li>
      <li>Captain America</li>
      <li>Thor</li>
      <li>Hulk</li>
      <li>Hawkeye</li>
      <li>Black Widow</li>
    </ul>
  </div>
  <div id="lieblingsfilme">
    <h1>Meine Lieblingsfilme</h1>
    
  </div>
</body>`);
  const solution_lists = `<body>
  <div id="avengers">
    <h1>Avengers</h1>
    <ul>
      <li>Iron Man</li>
      <li>Captain America</li>
      <li>Thor</li>
      <li>Hulk</li>
      <li>Hawkeye</li>
      <li>Black Widow</li>
    </ul>
  </div>
  <div id="lieblingsfilme">
    <h1>Meine Lieblingsfilme</h1>
    <ol>
      <li>Inception</li>
      <li>Avengers: Endgame</li>
      <li>Interstellar</li>
      <li>Kingsman: The Secret Service</li>
      <li>Iron Man</li>
    </ol>
  </div>
</body>`;

  return (
    <>
      <Header>HTML Grundlagen</Header>
      <Layout>
        <LayoutCentered className="mb-8">
          <Typography variant="title" className="mb-8 md:mb-12">
            Einleitung
          </Typography>
          <Typography className="mb-4 text-justify">
            Willkommen in der Webentwicklung! Hier lernst du die Grundlagen von
            HTML, dem Skelett aller Websites. HTML ist eine
            Auszeichnungssprache, weshalb im Gegensatz zu einer
            Programmiersprache hier nicht 'programmiert', sondern der
            grundlegende Aufbau einer Seite definiert wird.
          </Typography>
          <Typography className="mb-4 text-justify">
            Was also ist HTML? HTML liefert die Struktur und Inhalte einer
            Website wie den Text, Bilder oder Videos. HTML steht für 'HyperText
            Markup Language'. Eine Seite besteht aus vielen einzelnen
            "Elementen", welche mit sogenannten Tags definiert werden.
          </Typography>
          <Typography className="mb-4 text-justify">
            Es gibt verschiedene Tags, jeweils für verschiedene Funktionen. Im
            nachfolgenden Editor siehst du den Tag für einen Titel. Schreibe
            deinen Namen zwischen <Code>&lt;h1&gt;</Code> und{' '}
            <Code>&lt;/h1&gt;</Code>. Anschliessend solltest du im Fenster
            rechts neben dem Editor gross deine Eingabe sehen.
          </Typography>
        </LayoutCentered>
        <Editor
          value={code_name}
          setValue={setCode_Name}
          solution={solution_name}
          height={100}
        />
        <LayoutCentered className="mt-12 mb-16">
          <Typography className="mb-4 text-justify">
            HTML besteht aus verschiedenen Elementen, welche ineinander
            verschachtelt werden können. Ein Element ist folgendermassen
            aufgebaut:
          </Typography>
          <ul className="list-disc ml-8 mb-4">
            <li>
              Der eröffnende Tag (im vorherigen Beispiel <Code>&lt;h1&gt;</Code>
            </li>
            <li>
              Der Inhalt (dein Name, welchen du zwischen die Tags geschrieben
              hast)
            </li>
            <li>
              Der schliessende Tag von demselben Element mit einem Schrägstrich
              davor: <Code>&lt;/h1&gt;</Code>
            </li>
          </ul>
          <Typography className="mb-4 text-justify">
            Das <Code>h1</Code> Element wird verwendet, um einen Titel in die
            Website einzufügen. Es gibt aber wie erwähnt noch weitere Elemente,
            beispielsweise ein Element für Text (<Code>&lt;p&gt;</Code> für
            engl. 'paragraph'):
          </Typography>
          <img
            src={HtmlElementImage}
            alt="HTML Element"
            className="w-full my-8"
          />
          <Typography className="mb-4 text-justify">
            Der schliessende Tag ist sehr wichtig, da der Brwoser ansonsten
            nicht weiss, wann das Element fertig ist und ein neues Element
            beginnt. So können unerwartete Fehler entstehen, ohne dass im
            Browser ein Fehler angezeigt wird.
          </Typography>
        </LayoutCentered>
        <LayoutCentered className="mb-8">
          <Typography variant="title" className="mb-8 md:mb-12">
            HTML Struktur
          </Typography>
          <Typography className="mb-4 text-justify">
            HTML besteht, wie wir bereits gelernt haben, aus einzelnen
            Elementen. Diese Elemente können ineinander verschachtelt werden. So
            entsteht die grundlegende Struktur eines HTML Dokuments. Wir
            sprechen dabei im englischen von einem 'parent element', welches
            eines oder mehrere 'child elements' enthält.
          </Typography>
          <Typography className="mb-4 text-justify">
            Es wird nicht der ganze Inhalt aus dem HTML Dokument im Browser
            angezeigt. Der Browser sucht ein <Code>&lt;body&gt;</Code> Element
            und zeigt all dessen Inhalte an. Im nachfolgenden Editor siehst du
            einen <Code>&lt;body&gt;</Code> Tag, in welchen du Inhalte
            hinzufügen kannst. Füge einen Titel mit <Code>&lt;h1&gt;</Code> und
            einen Text mit <Code>&lt;p&gt;</Code> ein, sodass sie auf der
            rechten Seite angezeigt werden.
          </Typography>
        </LayoutCentered>
        <Editor
          value={code_body}
          setValue={setCode_Body}
          solution={solution_body}
          height={100}
        />
        <LayoutCentered className="mt-12 mb-8">
          <Typography className="mb-4 text-justify">
            Ein weiteres wichtiges Element ist das <Code>&lt;div&gt;</Code>.
            Dieses Element wird oft als Elternelement für weitere Elemente
            verwendet, welche eine Beziehung zueinander haben. So können
            beispielsweise, wenn mehrere Artikel eines Blogs auf einer Seite
            angezeigt werden, jeder Artikel mit Titel und Inhalt in einem{' '}
            <Code>&lt;div&gt;</Code> Element strukturiert werden. So kann die
            Seite später unter anderem einfacher gestaltet werden.
          </Typography>
          <Typography className="mb-4 text-justify">
            Im nachfolgenden Editor siehst du einen unfertigen Blog. Füge in das{' '}
            <Code>&lt;div&gt;</Code> Element einen Untertitel mit{' '}
            <Code>&lt;h2&gt;</Code> und einen Fliesstext mit{' '}
            <Code>&lt;p&gt;</Code> ein. Anschliessend kannst du noch einen
            zweiten Artikel mit einem weiteren <Code>&lt;div&gt;</Code>{' '}
            einfügen.
          </Typography>
        </LayoutCentered>
        <Editor
          value={code_div}
          setValue={setCode_Div}
          solution={solution_div}
          height={300}
        />
        <LayoutCentered className="mt-16 mb-8">
          <Typography variant="title" className="mb-8 md:mb-12">
            Attribute
          </Typography>
          <Typography className="mb-4 text-justify">
            Mit Attributen können HTML Elemente genauer beschrieben werden. Dies
            ist zum Beispiel bei der Auswertung von Formularen aber auch bei der
            Gestaltung der Website sehr nützlich. Ein Attribut besteht aus zwei
            Teilen:
          </Typography>
          <ul className="list-disc ml-8 mb-4">
            <li>Der Attributname</li>
            <li>Der Wert des Attributs</li>
          </ul>
          <Typography className="mb-4 text-justify">
            Ein oft verwendetes Attribut ist die <Code>id</Code>. Damit kann
            beispielsweise zusätzliche Information über ein Element geliefert
            werden. Ein Attribut wird immer innerhalb des eröffnenden Tags
            definiert, und der Wert in Gänsefüsschen angegeben. Hier ein
            Beispiel, dabei ist <Code>id</Code> der{' '}
            <strong>Attributname</strong> und <Code>"titel"</Code> der{' '}
            <strong>Wert des Attributs</strong>:{' '}
            <Code>&lt;h1 id="titel"&gt;</Code>. Dies ist zum Beispiel nützlich,
            wenn in einem Dokument mehr als ein <Code>&lt;h1&gt;</Code> Element
            vorhanden ist. Dann kann jedem Element eine andere Id vergeben
            werden, und man kann sie besser unterscheiden.
          </Typography>
          <Typography className="mb-4 text-justify">
            Füge im Code die folgenden Attribute hinzu:
          </Typography>
          <ul className="list-disc ml-8 mb-4">
            <li>
              Eine <Code>id</Code> mit dem Wert <Code>"titel"</Code> beim
              Element mit dem Inhalt <Code>Mein Blog</Code>
            </li>
            <li>
              Je eine <Code>class</Code> mit dem Wert <Code>"artikel"</Code> bei
              den beiden <Code>div</Code> Elementen.
            </li>
          </ul>
        </LayoutCentered>
        <Editor
          value={code_attribute}
          setValue={setCode_Attribute}
          solution={solution_attribute}
          height={300}
        />
        <LayoutCentered className="mt-16 mb-8">
          <Typography variant="title" className="mb-8 md:mb-12">
            Texte
          </Typography>
          <Typography className="mb-4 text-justify">
            Ein normaler Text kann, wie wir bereits gelernt haben, in einem{' '}
            <Code>&lt;p&gt;</Code> Element dargestellt werden. Wenn eine
            Textstelle besonders hervorgehoben werden soll, kann diese entweder
            in ein <Code>&lt;strong&gt;</Code> oder ein <Code>&lt;em&gt;</Code>{' '}
            Element geschrieben werden. Mit <Code>strong</Code> wird der Text{' '}
            <strong>fett</strong> und <Code>em</Code> <em>kursiv</em> angezeigt.
          </Typography>
          <Typography className="mb-4 text-justify">
            Probiere diese beiden Tags im nachfolgenden Beispiel aus, indem du
            die ersten drei Worte der Abschnitte fett markierst und die
            Textstelle in Klammern kursiv gestaltest.
          </Typography>
        </LayoutCentered>
        <Editor
          value={code_text}
          setValue={setCode_Text}
          solution={solution_text}
          height={250}
        />
        <LayoutCentered className="mt-16 mb-8">
          <Typography variant="title" className="mb-8 md:mb-12">
            Bilder
          </Typography>
          <Typography className="mb-4 text-justify">
            Bilder werden mit dem <Code>&lt;img&gt;</Code> Tag eingefügt. Als
            Attribute werden dann die Adresse des Bildes und ein Alternativtext
            angegeben, welcher angezeigt wird, falls das Bild nicht gefunden
            werden kann. Hier ein Beispiel:
          </Typography>
          <Code wrap>
            &lt;img src="/bild.jpg" alt="Beschreibung des Bildes" width="400px"
            /&gt;
          </Code>
          <Typography className="my-4 text-justify">
            Da die Adresse des Bildes direkt als Attribut definiert wird, hat
            dieser Tag niemals einen Inhalt. Aus diesem Grund wurde festgelegt,
            dass dieser Tag keinen schliessenden Tag hat, sondern am Ende des
            öffnenden Tags einen Schrägstrich.
          </Typography>
          <Typography className="mb-4 text-justify">
            Ausserdem sollte bei einem Bild immer definiert werden, wie gross es
            sein soll. Dies wird mit dem Attribut <Code>width</Code> gemacht.
            Als Wert des Attributs kann eine Grösse, zum Beispiel in Pixeln (
            <Code>400px</Code>) oder Prozent (<Code>100%</Code>) angegeben
            werden. Alternativ zu der Breite kann auch die Höhe des Bildes mit
            dem Attribut <Code>height</Code> angegeben werden. Wenn möglich
            sollte aber immer nur die Breite definiert werden, da das Bild
            automatisch skaliert wird.
          </Typography>
          <Typography className="mb-4 text-justify">
            Der Browser muss das Bild natürlich finden können, und da wir hier
            auf einer Website sind, können nur Bilder angezeigt werden, welche
            auch auf dem Server liegen. Füge im nachfolgenden Editor ein Bild
            mit den folgenden Attributen ein:
          </Typography>
          <ul className="list-disc ml-8 mb-4">
            <li>
              Die Adresse des Bildes ist <Code>"/haus.jpg"</Code>
            </li>
            <li>
              Die Beschreibung kannst du frei wählen, zum Beispiel{' '}
              <Code wrap>"Ein kleines Haus am See"</Code>
            </li>
            <li>
              Definiere die Breite des Bildes zuerst als <Code>400px</Code> und
              experimentiere auch mal mit anderen Zahlen und Prozentwerten. Bei
              einer Breite von <Code>100%</Code> wird der gesamte verfügbare
              Platz genutzt und das Bild erstreckt sich über die ganze Seite.
            </li>
          </ul>
          <Typography className="mb-4 text-justify">
            Deinen Alternativtext kannst du testen, wenn du für die Adresse des
            Bildes eine ungültige Adresse angibst, beispielsweise{' '}
            <Code>"/haus1.jpg"</Code>
          </Typography>
        </LayoutCentered>
        <Editor
          value={code_image}
          setValue={setCode_Image}
          solution={solution_image}
          height={400}
        />
        <LayoutCentered className="mt-16 mb-8">
          <Typography variant="title" className="mb-8 md:mb-12">
            Listen
          </Typography>
          <Typography className="mb-4 text-justify">
            Inhalte können in HTML auch aufgelistet werden. Es gibt zwei Arten
            von Listen:
          </Typography>
          <ul className="list-disc ml-8 mb-4">
            <li>
              Geordnete Listen, welche mit <Code>&lt;ol&gt;</Code> definiert
              werden.
            </li>
            <li>
              Ungeordnete Listen, welche mit <Code>&lt;ul&gt;</Code> definiert
              werden.
            </li>
          </ul>
          <Typography className="mb-4 text-justify">
            Als Kinderelemente dieser Listen werden dann die einzelnen Punkte
            mit dem Element <Code>&lt;li&gt;</Code> hinzugefügt. Du siehst im
            folgenden Beispiel eine ungeordnete Liste von Avengers. Füge im{' '}
            <Code>div</Code> mit der <Code>id</Code> "lieblingsfilme" nach dem
            Titel eine geordnete Liste mit deinen Lieblingsfilmen hinzu.
          </Typography>
        </LayoutCentered>
        <Editor
          value={code_lists}
          setValue={setCode_Lists}
          solution={solution_lists}
          height={400}
        />
      </Layout>
    </>
  );
};

export default HTMLBasics;
