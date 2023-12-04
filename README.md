# X.com Clone

## using packages
- react v18 (RSC)
- next v14 (app router)
- tanstack query (react-query) v5
- msw v2
- zustand

## New Next v14
### router
- `[routename]`: (dynamic route) 동적 라우팅을 설정한다.
- `(routename)`: (route group) 소괄호의 역할은 주소창에 관여하지 않지만, 그룹을 만들 수 있다.
- `layout`: 해당 동일 디렉토리 안에서 layout 컴포넌트가 된다.
- `template`: layout 과 동일한 역할을 하나, 페이지가 변경될 때 매번 새롭게 실행(마운트)된다. `layout`과 `template`은 택 1이다.
- `parallel routes`: 같은 폴더 내 2개의 페이지를 동시에 화면에 보여줄 수 있게 처리해준다. 페러렐 라우트는 같은 디렉토리의 레이아웃에서 사용할 수 있다.
- `intercepting routes`: 

### next/navigation

**redirect**
컴포넌트 안에서 특정 url로 redirect 할 수 있다.
```tsx
import { redirect } from 'next/navigation';

export default function Login() {
  redirect('/i/flow/login');
}

```

### next/image
```tsx
next의 이미지 최적화
import Iamge from 'next/image';
import logo from '../public/logo.png'

export default function Home(){
  return <Iamge src={logo} alt='logo' />
}
```