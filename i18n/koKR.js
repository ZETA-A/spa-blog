const i18n_koKR = {
    navigation: {
        about: '소개',
        note: '노트',
        projects: '프로젝트',
    },
    profile: {
        blockquoteDescription:
            '더 많은 사람들이 기술을 <b>자유롭게</b> 사용할 수 있도록.<br/>현실의 문제를 해결하기 위해, 컴퓨터라는 도구를 사용합니다.',
        blockquoteCite: '—풀스택을 꿈꾸는 개발자, <cite>김승현</cite>',
        weatherLocation: '서울특별시',
        weatherLoading: '날씨 정보를 불러오는 중...',
        weatherUnavailable: '날씨 정보를 불러오지 못했습니다.',
        githubLabel: 'GitHub 프로필로 이동',
        skillsTitle: '기술 스택',
        experienceTitle: '경력',
    },
    pages: {
        noteTitle: 'My Notes',
        noteDescription: '개발과 일상을 정리한 메모를 모아두는 공간입니다.',
        projectsTitle: 'Projects',
        projectsDescription: '완성했거나 진행 중인 프로젝트를 소개합니다.',
        notFoundTitle: '404',
        notFoundDescription: '요청한 페이지를 찾을 수 없습니다.',
        notFoundAction: '홈으로 돌아가기',
        noteBackButton: '← 목록으로 돌아가기',
    },
    notes: {
        csBasics: {
            title: '(CS) 자료구조 기초',
            date: '03.09.',
            description:
                '자료구조 개념, 이상적인 자료구조 특성, 시간과 메모리 간의 트레이드오프 이해',
            tags: ['자료구조', '기초', 'CS'],
            id: 'cs-basics',
            category: '2026',
            content: `## 자료구조

- 추상 데이터 타입(Abstract Data Type, ADT): 데이터와 그 데이터에 적용할 수 있는 연산을 정의한 개념적 모델
- 알고리즘(Algorithm): 문제를 해결하기 위한 일련의 명확한 단계나 절차
- 자료구조(Data Structure): 데이터를 조직하고 저장하는 방법을 정의한 구체적인 구현
- 데이터 구조 구현(Data Structure Implementation): 특정 프로그래밍 언어로 자료구조를 실제로 구현한 것

## 이상적인 자료구조

완벽한 자료구조는 없지만, 이상적인 자료구조는 다음과 같은 특성을 가질 것이다.

- 빠름(Fast): 연산이 빠르게 수행되어야 함
- 적은 메모리 사용(Low Memory Usage): 메모리를 효율적으로 사용
- 단순함(Simple): 구현이 간단하고 이해하기 쉬워야 함

하지만 현실에서는 이걸 모두 만족하는 자료구조는 존재하지 않는다. 그래서 우리는 특정 상황에 맞는 자료구조를 선택해야 한다.

## 생기는 충돌

**속도(Time) vs 메모리(Memory)**

- Array: 빠른 접근 속도를 제공하지만, 크기가 고정되어 있고 삽입/삭제가 느릴 수 있음
- Linked List: 삽입/삭제가 빠르지만, 접근 속도가 느릴 수 있음

**단순함(Simplicity) vs 범용성(Generality)**

- Array: 범용적으로 사용되지만, 크기가 고정되어 있고 삽입/삭제가 느릴 수 있음
- Linked List: 단순한 구조로 구현이 쉽지만, 배열보다 접근 속도가 느릴 수 있음

## 결론

**자료구조 공부 = 트레이드 오프를 이해하는 것**

각 상황에 따라 맞는 자료구조가 다르기 때문에, 트레이드 오프를 이해하고 적절한 자료구조를 선택하는 것이 중요하다.`,
        },
        queue: {
            title: '(CS) Queue',
            date: '03.12.',
            description:
                'FIFO(First In, First Out) 구조의 큐, 주요 연산(enqueue, dequeue, front), 백준 예제',
            tags: ['큐', '자료구조', '기초'],
            id: 'queue',
            category: '2026',
            content: `## 큐(Queue)란?

큐는 FIFO(First In, First Out) 구조로, 가장 먼저 추가된 요소가 가장 먼저 제거되는 자료구조이다. 큐는 작업 스케줄링, 너비 우선 탐색, 프린터 대기열 등에서 사용된다.

### 큐의 주요 연산

- enqueue: 큐의 뒤에 요소를 추가하는 연산.
- dequeue: 큐의 앞에 있는 요소를 제거하고 반환하는 연산.
- front: 큐의 앞에 있는 요소를 제거하지 않고 반환하는 연산.
- isEmpty: 큐가 비어 있는지 확인하는 연산.
- size: 큐에 있는 요소의 개수를 반환하는 연산.

### 예제문제(백준 18258 큐2)

큐를 구현하고 명령어에 따라 동작하는 문제입니다. 

- push X: 정수 X를 큐에 넣는 연산
- pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력. 없으면 -1 출력
- size: 큐에 들어있는 정수의 개수를 출력
- empty: 큐가 비어있으면 1, 아니면 0 출력
- front: 큐의 가장 앞에 있는 정수를 출력. 없으면 -1 출력
- back: 큐의 가장 뒤에 있는 정수를 출력. 없으면 -1 출력`,
        },
        stack: {
            title: '(CS) Stack',
            date: '03.16.',
            description:
                'LIFO(Last In, First Out) 구조의 스택, 주요 연산(push, pop, top), 백준 예제',
            tags: ['스택', '자료구조', '기초'],
            id: 'stack',
            category: '2026',
            content: `## 스택(Stack)이란?

스택은 LIFO(Last In, First Out) 구조로, 가장 최근에 추가된 요소가 가장 먼저 제거되는 자료구조이다. 스택은 함수 호출, 괄호 검사, 되돌리기 기능 등 다양한 상황에서 사용된다.

### 스택(Stack)의 주요 연산

- push: 스택의 맨 위에 요소를 추가하는 연산.
- pop: 스택의 맨 위에 있는 요소를 제거하고 반환하는 연산.
- top(peek): 스택의 맨 위에 있는 요소를 제거하지 않고 반환하는 연산.
- isEmpty: 스택이 비어 있는지 확인하는 연산.

### 예제문제(백준 28278 스택2)

스택을 구현하고 명령어에 따라 동작하는 문제입니다.

- push X: 정수 X를 스택에 넣는 연산
- pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력. 없으면 -1 출력
- size: 스택에 들어있는 정수의 개수를 출력
- empty: 스택이 비어있으면 1, 아니면 0 출력
- top: 스택의 가장 위에 있는 정수를 출력. 없으면 -1 출력`,
        },
        linuxFind: {
            title: '(Linux) find 명령어',
            date: '05.13.',
            description:
                'find 명령어로 파일과 디렉토리를 찾는 방법, 다양한 표현식과 옵션',
            tags: ['디렉토리', '파일', '명령어'],
            id: 'linux-find',
            category: '2025',
            content: `## 파일과 디렉토리를 찾는 명령어, find

find 명령어는 리눅스에서 파일이나 디렉토리를 검색하고 싶을 때 사용하는 명령어입니다.

본 명령어는 다음과 같은 방법으로 사용할 수 있습니다.

\`\`\`
$ find [경로] [옵션] [표현식]
\`\`\`

find 명령어의 인자는 크게 두 종류로 나뉩니다.

- 옵션 (Option): 실행 방식 자체를 제어
- 표현식 (Expression): 어떤 파일을 찾을지 정의

### 자주 사용하는 표현식 모음

**1. 이름/경로 관련**
- -name pattern: 파일 이름이 pattern과 일치
- -iname pattern: 대소문자 구분 없이 이름 일치
- -path pattern: 전체 경로가 pattern과 일치

**2. 파일 타입 관련**
- -type c: 파일 유형이 c일 때
  - f: 일반 파일
  - d: 디렉토리
  - l: 심볼릭 링크

**3. 파일 크기 관련**
- -size n[cwbkMG]: 파일 크기 비교
  - c: byte
  - k: KB
  - M: MB

**4. 시간 관련**
- -mtime n: 수정된 지 n일 전
- -atime n: 마지막 접근 n일 전
- -newer file: file보다 최근 수정

**5. 권한/소유자 관련**
- -user username: 소유자가 username
- -perm mode: 퍼미션이 정확히 일치

**6. 링크 관련**
- -links n: 하드링크 수가 n
- -samefile file: file과 같은 inode

**7. 구조/기타 조건**
- -empty: 비어있는 파일 또는 디렉토리

**8. 실행/출력 관련**
- -exec command {} \\;: 각 파일에 대해 command 실행
- -print: 경로 출력

**9. 논리 연산자**
- -a 또는 생략: AND (둘 다 참)
- -o: OR (하나라도 참)
- !: NOT (부정)

### find 명령어를 사용한 사용 예시

**홈 디렉토리에서 최근 7일 내 수정된 .log 파일 찾기**
\`\`\`
$ find ~ -name "*.log" -mtime -7
\`\`\`

**시스템 루트에서 1MB 이상인 setuid 바이너리 찾기**
\`\`\`
$ sudo find / -xdev -type f -size +1M -perm /4000
\`\`\`

**현재 디렉토리에서 빈 디렉토리를 지우기**
\`\`\`
$ find . -O2 -type d -empty -mindepth 1 -maxdepth 3 -exec rm -r {} +
\`\`\``,
        },
        nextjsSsr: {
            title: '(Next.js) SSR과 CSR의 차이',
            date: '04.23.',
            description:
                'Server Side Rendering(SSR)과 Client Side Rendering(CSR)의 개념과 차이점 이해',
            tags: ['React', 'Javascript', 'Next.js'],
            id: 'nextjs-ssr',
            category: '2025',
            content: `## SSR과 CSR이란

SSR(Server Side Rendering)과 CSR(Client Side Rendering)의 차이는 다음과 같다.

우선 이 개념을 이해하기 위해선 Rendering이라는 개념을 이해하는 것이 중요하다.

React에서의 Rendering이라는 개념은, 기존 React로 작성된 컴포넌트 파일의 UI를 생성하고 브라우저 DOM으로 변환하는 과정을 말한다. 간단하게 말하여, React Javascript파일을 HTML로 변환하는 과정인 것이다.

### CSR (Client Side Rendering)

먼저 CRA(Create React App)로 만들 수 있는 일반적인 React인 경우, CSR에 해당한다.

CSR는 이름에서부터 Client가 들어가는 것처럼, 유저의 브라우저에서 해당 과정을 처리한다. 그렇기 때문에, 해당 방식은 다음과 같은 문제점이 있다.

- 수많은 Javascript파일을 다운받고, 변환해야한다.
- 변환하기 전에는 HTML에 내용이 전혀 없으므로, 로딩하는 동안 공백이 생기게 된다.

### SSR (Server Side Rendering)

Next.js에서 사용하는 SSR의 경우, 유저가 서버에게 request를 보내면 서버에서 Javascript 파일을 실행하여 HTML로 Render한 후, 변환이 완료된 HTML파일을 respone로 보낸다. 해당 방식은 위의 CSR방식의 단점을 보완한다.

- 상대적으로 적은 Javascript파일만 다운 받으면 된다.
- 서버에서 미리 렌더링된 HTML 파일을 전달받기 때문에, 초기 로딩 시 화면에 공백이 없다. 
- 이후 클라이언트에서 Hydration 과정을 통해 동적 기능이 활성화 된다.`,
        },
        nextjsHydration: {
            title: '(Next.js) Hydration',
            date: '04.23.',
            description: 'Hydration의 개념, use client 지시문, 과정, 주의점',
            tags: ['Hydration', '컴포넌트', 'Next.js'],
            id: 'nextjs-hydration',
            category: '2025',
            content: `## Hydration이란

Hydration이란, 브라우저에서 컴포넌트의 Javascript의 동적 기능을 연결하는 과정을 말한다.

SSR은 미리 렌더링된 HTML파일을 받는다. 이 HTML파일에는 Interactive하게 작용할 수 있는 Javascript 코드가 없기 때문에, Hydration이라는 과정을 통하여 동적 기능을 활성화 해야 한다.

예를 들어, useState, useQuery와 같은 React코드는 미리 렌더링된 HTML에서는 Hydration 과정 없이 사용할 수 없다.

### Hydration의 개념

Hydration은 물을 주는 것처럼, 정적인 HTML에 동적인 기능을 '주입'하는 개념이다.

HTML은 건베리(dehydrated berry)처럼 겉모습만 보여준다. HTML에는 페이지의 구조와 형태만 포함되어 있을 뿐, 실제로 상호작용할 수 있는 기능은 없다.

예를 들어, useState가 적용된 Button이 렌더링되었더라도, Hydration이 이루어지기 전에는 버튼이 제대로 동작하지 않는다.

Hydration을 통해 JavaScript가 주입되면, 신선한 딸기(hydrated berry)처럼 상호작용 가능한 웹 페이지로 변환된다.

즉, Hydration은 정적으로 생성된 HTML을 브라우저에서 React와 연결해 동적으로 동작하도록 활성화 하는 과정이다.

### Hydration을 구분할 수 있는 방법, 'use client'

Hydration은 모든 컴포넌트에서 이루어지지 않는다. 오히려 SSR 서비스에서 Hydration이 많이 필요하다면, 그것은 잘못된 코드를 작성하고 있을 가능성이 높다.

Hydration이 많을 경우 유저는 그만큼 수많은 양의 Javascript를 다운 받아야함을 뜻하고, CSR방식과 크게 다를 바가 없어진다.

그렇기 때문에 Next.js에서는 서버에서 변환(SSR)을 기본 원칙으로하고, 필요한 컴포넌트에서만 Hydration하도록 하고 있다.

Hydration 컴포넌트를 구별하는 방법은, 컴포넌트 파일 최상단에 \`'use client'\`라고 적는다. 

\`'use client'\`는 컴포넌트를 클라이언트 컴포넌트로 지정하는 지시문이다. 이를 사용하면 해당 컴포넌트에서만 Hydration이 발생하고, 나머지 부분은 SSR로 처리된다.

### Hydration의 주의점

\`'use client'\` 지시문이 적용된 컴포넌트에서 Hydration이 이루어지면, 해당 컴포넌트의 모든 자식 컴포넌트도 클라이언트 컴포넌트로 처리된다.

이는 자식 컴포넌트가 'use server' 지시문을 포함하고 있더라도, 부모 컴포넌트가 \`'use client'\`로 렌더링될 경우 클라이언트 측에서 렌더링되기 때문이다.`,
        },
    },
    footer: {
        copyright: '© 2026 Seunghyeon Kim. All rights reserved.',
        contactLabel: 'Contact',
        followLabel: 'Follow',
        githubUrl: 'https://github.com',
        twitterUrl: 'https://twitter.com',
    },
    theme: {
        darkMode: '다크모드',
        lightMode: '라이트모드',
        systemDefault: '시스템 기본',
    },
    language: {
        korean: '한국어',
        english: 'English',
    },
};
