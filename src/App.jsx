import { useState } from 'react';
import Header from './components/Header/Header.jsx';
// import componentImage from './assets/components.png';

import TapButton from './components/TabButton.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';


function App() {
  const [selectedTab, setSelectedTab] = useState();

  function handelSelect(selectedButton) {
    setSelectedTab(selectedButton);
    console.log(`Tab "${selectedTab}" selected`);
  }

  let tabContent = <p>Please select a tab to see an example.</p>;
  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTab].code}
          </code>
        </pre>
      </div>
    );
  }
  
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton isSelected={selectedTab === 'components'} onSelect={() => handelSelect('components')}>Components</TapButton>
            <TapButton isSelected={selectedTab === 'jsx'} onSelect={() => handelSelect('jsx')}>JSX</TapButton>
            <TapButton isSelected={selectedTab === 'state'} onSelect={() => handelSelect('state')}>State</TapButton>
            <TapButton isSelected={selectedTab === 'props'} onSelect={() => handelSelect('props')}>Props</TapButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
