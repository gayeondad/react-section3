import Header from './components/Header/Header.jsx';
// import componentImage from './assets/components.png';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TapButton from './components/TabButton.jsx';

function handelSelect(selectedButton) {
  console.log(`Tab "${selectedButton}" selected`);
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handelSelect('Components')}>Components</TapButton>
            <TapButton onSelect={() => handelSelect('JSX')}>JSX</TapButton>
            <TapButton onSelect={() => handelSelect('State')}>State</TapButton>
            <TapButton onSelect={() => handelSelect('Props')}>Props</TapButton>
          </menu>
          Dynmic Content
        </section>
      </main>
    </div>
  );
}

export default App;
