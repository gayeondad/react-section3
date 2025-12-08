# react-section3

섹션3 리액트 핵심 - 컴포넌트, JSX, 속성, 상태

## 프로젝트 소개

이 프로젝트는 React의 핵심 개념을 학습하기 위한 예제 모음입니다.

## 학습 주제

1. **컴포넌트 (Components)** - React의 기본 구성 요소
2. **JSX** - JavaScript XML 문법
3. **Props** - 컴포넌트 속성 전달
4. **State** - 컴포넌트 상태 관리

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

## 프로젝트 구조

- `src/components/` - 학습용 예제 컴포넌트
  - `JSXExample.jsx` - JSX 문법 예제
  - `PropsExample.jsx` - Props 사용 예제
  - `StateExample.jsx` - State 관리 예제
  - `CombinedExample.jsx` - 모든 개념을 결합한 실습 예제

## 학습 가이드

### 1. JSX (JavaScript XML)

JSX는 JavaScript에 XML을 추가한 확장 문법입니다.

```jsx
const element = <h1>안녕하세요!</h1>
```

### 2. 컴포넌트 (Components)

컴포넌트는 재사용 가능한 UI 조각입니다.

```jsx
function Welcome() {
  return <h1>환영합니다</h1>
}
```

### 3. Props (속성)

Props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달합니다.

```jsx
function Greeting(props) {
  return <h1>안녕하세요, {props.name}님!</h1>
}
```

### 4. State (상태)

State는 컴포넌트의 동적 데이터를 관리합니다.

```jsx
function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>클릭: {count}</button>
}
```
