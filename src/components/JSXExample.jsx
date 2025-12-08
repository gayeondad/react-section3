// JSX 예제 컴포넌트
// JSX는 JavaScript에 XML을 추가한 확장 문법입니다

function JSXExample() {
  // 1. 변수를 JSX에 포함
  const name = "React 학습자"
  const currentTime = new Date().toLocaleTimeString('ko-KR')
  
  // 2. 표현식 사용
  const a = 10
  const b = 20
  
  // 3. 스타일 객체
  const titleStyle = {
    color: '#61dafb',
    fontSize: '24px',
    fontWeight: 'bold'
  }
  
  return (
    <div style={{ padding: '20px', border: '2px solid #61dafb', borderRadius: '8px', marginBottom: '20px' }}>
      <h2 style={titleStyle}>1. JSX 예제</h2>
      
      {/* JSX 주석은 이렇게 작성합니다 */}
      
      {/* 변수 사용 */}
      <p>안녕하세요, <strong>{name}</strong>님!</p>
      <p>현재 시간: {currentTime}</p>
      
      {/* 표현식 사용 */}
      <p>{a} + {b} = {a + b}</p>
      
      {/* 조건부 렌더링 */}
      <p>
        {a > b ? 'a가 b보다 큽니다' : 'b가 a보다 크거나 같습니다'}
      </p>
      
      {/* 배열 렌더링 */}
      <div>
        <h3>좋아하는 과일:</h3>
        <ul>
          {['사과', '바나나', '오렌지'].map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
      
      {/* HTML 속성은 camelCase로 작성 */}
      <button 
        onClick={() => alert('JSX 버튼 클릭!')}
        style={{ 
          backgroundColor: '#61dafb', 
          color: 'white', 
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        클릭해보세요
      </button>
    </div>
  )
}

export default JSXExample
