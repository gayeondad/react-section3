import JSXExample from './components/JSXExample'
import PropsExample from './components/PropsExample'
import StateExample from './components/StateExample'
import CombinedExample from './components/CombinedExample'
import './App.css'

function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <header style={{ 
        textAlign: 'center', 
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        marginBottom: '30px',
        color: 'white'
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5em' }}>
          React 섹션 3
        </h1>
        <p style={{ margin: 0, fontSize: '1.2em', opacity: 0.9 }}>
          컴포넌트, JSX, Props, State 학습
        </p>
      </header>

      <main>
        <JSXExample />
        <PropsExample />
        <StateExample />
        <CombinedExample />
      </main>

      <footer style={{ 
        marginTop: '40px', 
        padding: '20px',
        textAlign: 'center',
        color: '#666',
        borderTop: '2px solid #eee'
      }}>
        <p>React 학습 예제 모음</p>
        <p style={{ fontSize: '14px' }}>
          각 예제를 직접 사용해보며 React의 핵심 개념을 이해해보세요! 🚀
        </p>
      </footer>
    </div>
  )
}

export default App
