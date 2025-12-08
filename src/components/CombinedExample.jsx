import { useState } from 'react'

// 자식 컴포넌트: 사용자 카드
function UserCard({ user, onDelete }) {
  return (
    <div style={{ 
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>{user.name}</h4>
      <p style={{ margin: '5px 0', color: '#666' }}>나이: {user.age}세</p>
      <p style={{ margin: '5px 0', color: '#666' }}>직업: {user.job}</p>
      <button 
        onClick={() => onDelete(user.id)}
        style={{ 
          marginTop: '10px',
          padding: '6px 12px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        삭제
      </button>
    </div>
  )
}

// 부모 컴포넌트: 종합 예제
function CombinedExample() {
  // State: 사용자 목록
  const [users, setUsers] = useState([
    { id: 1, name: '김철수', age: 25, job: '개발자' },
    { id: 2, name: '이영희', age: 30, job: '디자이너' },
    { id: 3, name: '박민수', age: 28, job: '기획자' }
  ])
  
  // State: 새 사용자 정보
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState('')
  const [newJob, setNewJob] = useState('')
  
  // State: 필터
  const [ageFilter, setAgeFilter] = useState('')
  
  // 사용자 추가
  const addUser = () => {
    if (newName.trim() !== '' && newAge !== '' && newJob.trim() !== '') {
      const newUser = {
        id: Date.now(), // 간단한 고유 ID 생성
        name: newName,
        age: parseInt(newAge),
        job: newJob
      }
      setUsers([...users, newUser])
      // 입력 필드 초기화
      setNewName('')
      setNewAge('')
      setNewJob('')
    }
  }
  
  // 사용자 삭제
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  
  // 필터링된 사용자 목록
  const filteredUsers = ageFilter === '' 
    ? users 
    : users.filter(user => user.age >= parseInt(ageFilter))
  
  return (
    <div style={{ padding: '20px', border: '2px solid #9c27b0', borderRadius: '8px' }}>
      <h2 style={{ color: '#9c27b0' }}>4. 종합 예제 - 사용자 관리</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        컴포넌트, JSX, Props, State를 모두 사용한 실전 예제
      </p>
      
      {/* 사용자 추가 폼 */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f3e5f5', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3 style={{ marginTop: 0 }}>새 사용자 추가</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="이름"
            style={{ 
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #9c27b0',
              fontSize: '14px'
            }}
          />
          <input 
            type="number"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
            placeholder="나이"
            style={{ 
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #9c27b0',
              fontSize: '14px'
            }}
          />
          <input 
            type="text"
            value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
            placeholder="직업"
            style={{ 
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #9c27b0',
              fontSize: '14px'
            }}
          />
          <button 
            onClick={addUser}
            style={{ 
              padding: '10px',
              backgroundColor: '#9c27b0',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            사용자 추가
          </button>
        </div>
      </div>
      
      {/* 필터 */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f3e5f5', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontWeight: 'bold' }}>나이 필터 (이상):</span>
          <input 
            type="number"
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
            placeholder="전체"
            style={{ 
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #9c27b0',
              fontSize: '14px',
              width: '100px'
            }}
          />
          {ageFilter && (
            <button 
              onClick={() => setAgeFilter('')}
              style={{ 
                padding: '6px 12px',
                backgroundColor: '#757575',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              필터 해제
            </button>
          )}
        </label>
      </div>
      
      {/* 사용자 목록 */}
      <div>
        <h3>사용자 목록 ({filteredUsers.length}명)</h3>
        {filteredUsers.length === 0 ? (
          <p style={{ 
            padding: '20px', 
            textAlign: 'center', 
            color: '#999',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px'
          }}>
            사용자가 없습니다. 새 사용자를 추가해보세요!
          </p>
        ) : (
          <div>
            {filteredUsers.map(user => (
              <UserCard 
                key={user.id} 
                user={user} 
                onDelete={deleteUser}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* 통계 */}
      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f3e5f5',
        borderRadius: '8px'
      }}>
        <h4 style={{ marginTop: 0 }}>통계</h4>
        <p>전체 사용자: {users.length}명</p>
        <p>표시된 사용자: {filteredUsers.length}명</p>
        {users.length > 0 && (
          <p>평균 나이: {(users.reduce((sum, user) => sum + user.age, 0) / users.length).toFixed(1)}세</p>
        )}
      </div>
    </div>
  )
}

export default CombinedExample
