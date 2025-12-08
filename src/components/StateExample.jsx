import { useState } from 'react'

// State 예제 컴포넌트
// State는 컴포넌트의 동적인 데이터를 관리합니다

function StateExample() {
  // 1. 카운터 state
  const [count, setCount] = useState(0)
  
  // 2. 텍스트 input state
  const [name, setName] = useState('')
  
  // 3. 체크박스 state
  const [isChecked, setIsChecked] = useState(false)
  
  // 4. 배열 state
  const [items, setItems] = useState(['React', 'JavaScript', 'CSS'])
  const [newItem, setNewItem] = useState('')
  
  // 배열에 항목 추가
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem])
      setNewItem('')
    }
  }
  
  // 배열에서 항목 제거
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }
  
  return (
    <div style={{ padding: '20px', border: '2px solid #ff9800', borderRadius: '8px', marginBottom: '20px' }}>
      <h2 style={{ color: '#ff9800' }}>3. State 예제</h2>
      
      {/* 카운터 예제 */}
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff3e0', borderRadius: '4px' }}>
        <h3>카운터</h3>
        <p>현재 카운트: <strong style={{ fontSize: '24px', color: '#ff9800' }}>{count}</strong></p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ 
            margin: '5px',
            padding: '8px 16px',
            backgroundColor: '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          증가 (+1)
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{ 
            margin: '5px',
            padding: '8px 16px',
            backgroundColor: '#f57c00',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          감소 (-1)
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{ 
            margin: '5px',
            padding: '8px 16px',
            backgroundColor: '#e65100',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          초기화
        </button>
      </div>
      
      {/* 입력 필드 예제 */}
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff3e0', borderRadius: '4px' }}>
        <h3>텍스트 입력</h3>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
          style={{ 
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ff9800',
            marginRight: '10px',
            fontSize: '14px'
          }}
        />
        <p>입력한 이름: <strong>{name || '(없음)'}</strong></p>
        {name && <p>안녕하세요, {name}님! 👋</p>}
      </div>
      
      {/* 체크박스 예제 */}
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff3e0', borderRadius: '4px' }}>
        <h3>체크박스</h3>
        <label style={{ cursor: 'pointer' }}>
          <input 
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            style={{ marginRight: '8px' }}
          />
          React를 배우는 중입니다
        </label>
        <p>상태: {isChecked ? '✅ 체크됨' : '⬜ 체크 안 됨'}</p>
      </div>
      
      {/* 배열 state 예제 */}
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff3e0', borderRadius: '4px' }}>
        <h3>할 일 목록 (배열 State)</h3>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            placeholder="새 항목 입력"
            style={{ 
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ff9800',
              marginRight: '10px',
              fontSize: '14px'
            }}
          />
          <button 
            onClick={addItem}
            style={{ 
              padding: '8px 16px',
              backgroundColor: '#ff9800',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            추가
          </button>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item, index) => (
            <li 
              key={index}
              style={{ 
                padding: '8px',
                marginBottom: '5px',
                backgroundColor: 'white',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{item}</span>
              <button 
                onClick={() => removeItem(index)}
                style={{ 
                  padding: '4px 12px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '14px', color: '#666' }}>총 {items.length}개 항목</p>
      </div>
    </div>
  )
}

export default StateExample
