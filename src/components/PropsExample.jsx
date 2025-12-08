// Props 예제 컴포넌트
// Props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법입니다

// 자식 컴포넌트 1: 기본 props 사용
function Greeting({ name, age }) {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '10px', borderRadius: '4px' }}>
      <p>이름: {name}</p>
      <p>나이: {age}세</p>
    </div>
  )
}

// 자식 컴포넌트 2: 기본값 설정
function Welcome({ name = "게스트", message = "환영합니다!" }) {
  return (
    <div style={{ padding: '10px', backgroundColor: '#e3f2fd', marginBottom: '10px', borderRadius: '4px' }}>
      <p>{name}님, {message}</p>
    </div>
  )
}

// 자식 컴포넌트 3: children props
function Card({ title, children }) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '15px', 
      marginBottom: '10px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{ marginTop: 0, color: '#333' }}>{title}</h4>
      <div>{children}</div>
    </div>
  )
}

// 부모 컴포넌트
function PropsExample() {
  return (
    <div style={{ padding: '20px', border: '2px solid #4caf50', borderRadius: '8px', marginBottom: '20px' }}>
      <h2 style={{ color: '#4caf50' }}>2. Props 예제</h2>
      
      <h3>기본 Props 전달</h3>
      <Greeting name="김철수" age={25} />
      <Greeting name="이영희" age={30} />
      
      <h3>기본값이 있는 Props</h3>
      <Welcome name="홍길동" message="좋은 하루 되세요!" />
      <Welcome /> {/* 기본값 사용 */}
      
      <h3>Children Props</h3>
      <Card title="React 학습">
        <p>React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.</p>
        <ul>
          <li>컴포넌트 기반</li>
          <li>선언적</li>
          <li>효율적</li>
        </ul>
      </Card>
      
      <Card title="Props의 특징">
        <p>Props는 <strong>읽기 전용</strong>입니다.</p>
        <p>자식 컴포넌트에서 props를 직접 수정할 수 없습니다.</p>
      </Card>
    </div>
  )
}

export default PropsExample
