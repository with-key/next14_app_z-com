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
- `(routename)`: (route group) 소괄호의 역할은 주소창에 관여하지 않지만, 그룹을 만들 수 있다. 그룹핑을 하는 이유는 동일 그룹에 동일한 레이아웃을 적용하고 싶을 때 사용한다. 주소창에 안뜸
- `_name`: private 폴더. 주소창에 안뜸
- `layout`: 해당 동일 디렉토리 안에서 layout 컴포넌트가 된다.
- `template`: layout 과 동일한 역할을 하나, 페이지가 변경될 때 매번 새롭게 실행(마운트)된다. `layout`과 `template`은 택 1이다.
- `parallel routes`: 같은 폴더 내 2개의 페이지를 동시에 화면에 보여줄 수 있게 처리해준다. 페러렐 라우트는 같은 디렉토리의 레이아웃에서 사용할 수 있다. children을 여러개 사용 할 수 있는 아법이라고 생각하면 될듯? 주소창에 안뜸
- `intercepting routes`: 서로 주소가 다른데, 한 화면에서 같이 보여지게 처리되는 방식. `(.)name` 상대경로를 표시하고, 가로챌 폴더의 이름을 명시한다. 클라이언트 라우트를 통해서 이동했을 때만 가로채며, url을 직접 들어오는 경우에는 가로채지 못한다. 가로챈 상태에서 리프레시가 발생하면, 원래 페이지가 보여진다(가로채지 못한 원래 페이지)

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

### 서버 컴포넌트와 클라이언트 컴포넌트
1. 서버 컴포넌트는 클라이언트 컨포넌트를 import 할 수 있다. 하지만 클라이언트 컴포넌트는 서버 컴포넌트를 import 할 수 없다. (할 순 있는데, 클라이언트 컴포넌트로 변경되면서 서버 컴포넌트의 이점이 사라지게 된다.)
2. 