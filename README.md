# Peace Piece Front-End

[![Netlify Status](https://api.netlify.com/api/v1/badges/9cc5d64a-ced2-42bc-8391-37c835b35bcc/deploy-status)](https://app.netlify.com/sites/peacepiece/deploys)

<div align=center>
    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
    <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/>
    <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

## 목차

1. [💁🏻‍♂ 웹 서비스 소개](#-웹-서비스-소개)

2. [🧑🏻‍💻 팀원 소개](#-팀원-소개)

3. [🏬 프로젝트 구조](#-프로젝트-구조)

4. [📁 디렉토리 구조](#-디렉토리-구조)

5. [⛏ 작업 방식](#-작업-방식)

6. [💡 피그마 기획안](#-피그마-기획안)

7. [💻 주요 기능](#-주요-기능)

8. [🎥 데모 영상](#-데모-영상)

9. [🔆 기대 효과](#-기대-효과)

## 💁🏻‍♂ 웹 서비스 소개

<code>일상생활 속 환경을 위한 활동을 기반으로 가상공간을 꾸밀 수 있는 웹플랫폼</code>

환경 보호를 위한 인식과 행동을 유발하기 위해 일상생활 속 활동을 기반으로 챌린지를 진행합니다. 챌린지 제안 기능을 통해 많은 사람들이 일상생활에서 환경을 보호할 수 있는 방법에 대해 고민하고, 사람들과 공유할 수 있다는 점에서 환경보호에 대한 관심을 증대하고 다양한 환경문제 해결법을 도출할 수 있습니다. 챌린지와 환경을 위한 SNS 커뮤니티인 피스를 통해 포인트를 획득하고, 포인트를 사용하여 섬 확장 및 아이템 구매를 통해 ‘나의 섬’을 꾸밀 수 있는 흥미로운 요소도 있습니다.

## 🧑🏻‍💻 팀원 소개

| 이름          | 역할                     | 개발 내용                                                                                         |
| ------------- | ------------------------ | ------------------------------------------------------------------------------------------------- |
| 김신건 &nbsp; | 기획, 백엔드, 프론트엔드 | 프로젝트 기획/디자인 제작 및 프로젝트 전반의 개발을 관리/진행                                     |
| 김민정        | 프론트엔드               | 프론트엔드에서 백엔드로의 api 통신과 데이터 연결 및 컴포넌트 구조 설계 및 성능 최적화를 주로 담당 |
| 최유찬        | 프론트엔드               | 반응형 디자인 및 레이아웃 작업 및 페이지에 필요한 컴포넌트들을 주로 개발                          |
| 권소예        | 프론트엔드               | 팀원 소개 페이지 반응형 및 재사용 가능한 컴포넌트들을 주로 개발                                   |
| 최지현        | 백엔드                   | 백엔드 프로젝트 배포와 모델 구현 및 전반적인 API 개발하였으며 QA를 진행                           |
| 진승희        | 백엔드                   | 초기 세팅과 jwt 를 이용한 사용자의 인증 및 인가를 담당                                            |

## 🏬 프로젝트 구조

<img width="682" alt="스크린샷 2022-09-14 오후 4 26 30" src="https://user-images.githubusercontent.com/66055587/190088872-56cab70c-7524-4f55-b037-89f87317bc5a.png">

## 📁 디렉토리 구조

<img width="971" alt="스크린샷 2022-09-14 오후 4 31 43" src="https://user-images.githubusercontent.com/66055587/190090032-94959e5a-d6a4-4661-9b65-36ed32f1ee6b.png">

## ⛏ 작업 방식

### 📌 협업을 위한 컨벤션

- ESLint & Prettier (with Airbnb Style Guide) 를 통해 프로젝트 컨벤션 지정
  컴포넌트명 및 디렉토리 구조 선 설계 후 개발 진행

### ✍️ 모던 CSS 기법 활용

- 손쉬운 레이아웃 개발을 위하여 Flex, Grid 등의 모던 CSS 기법 사용

### 🎨 CSS-in-JS (with styled-components, emotion)

- CSS 모델을 컴포넌트 레벨로 추상화하여 사용

### 🔼 Bottom-up 방식

- 컴포넌트 재사용을 고려하여 최소 단위의 컴포넌트부터 구성
- ➡️ 이후 기능 단위의 컴포넌트를 이전에 제작한
  최소 단위 컴포넌트로 구성하여 기능을 연결
- ➡️ 기능 단위의 컴포넌트들을 레이아웃에 맞게 배치하여 페이지 구성

> > ⚡ 컴포넌트의 재사용으로 불필요한 중복 코드 감소 및 개발 시간 단축 + 컴포넌트 단위의 배치로 UI 요소들이 유기적으로 배치되도록 반응형 디자인 설계

## 💡 피그마 기획안

<img width="1203" alt="스크린샷 2022-09-14 오후 4 33 05" src="https://user-images.githubusercontent.com/66055587/190090315-3198596a-612b-4d69-b397-eb3039823c11.png">

## 💻 주요 기능

<img width="1322" alt="스크린샷 2022-09-14 오후 4 36 53" src="https://user-images.githubusercontent.com/66055587/190091211-b9c2d0af-70c2-4cbe-a10b-bb9b8c1e2ca3.png">
<img width="1317" alt="스크린샷 2022-09-14 오후 4 36 56" src="https://user-images.githubusercontent.com/66055587/190091215-f7d91f50-b047-41e3-b30d-1f0ec935f069.png">
<img width="1314" alt="스크린샷 2022-09-14 오후 4 36 58" src="https://user-images.githubusercontent.com/66055587/190091220-31a976c8-2c2d-426a-90c1-f7187dca9e25.png">

## 🎥 데모 영상

- (Youtube 링크 올라오면 업로드)

## 🔆 기대 효과

<code>환경 문제가 실생활로 자연스럽게 공유된다</code>

- Peacepiece에서는 사용자가 환경 관련 챌린지를 제안하고 챌린지에 참여함으로써 이 활동을 SNS에 공유할 수 있습니다.

- 사람들은 SNS를 통해 자신이 한 활동, 업적 같은 게시물을 공유하는 이유는 자신이 중요한 사람이 되고 싶은 욕망이 크기 때문입니다.
- 이런 심리를 활용해서 현재 우리가 직접 위험으로 느끼고 있고 해결 해야하는 큰 문제인 환경 문제에 도움이 될 거라 기대합니다.

<code>멸종 위기종에 대한 관심 증가</code>

- 피스 페이지를 통해 환경 관련 정보를 공유하고, 챌린지를 참여해 받은 포인트로 나의 섬을 꾸밀 수 있습니다.
- 얻은 포인트로 멸종위기종를 입양할 수 있는데, 이를 통해 멸종위기종에 대한 관심을 이끌어낼 수 있다고 기대합니다.

## 🖥 실행 방법

```
git clone https://github.com/today-they-learned/peacepiece_front.git
cd peacepiece_front
yarn install
yarn start
```

## 🗂 사용 패키지

```
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@material-ui/types": "5.1.0",
    "@mui/icons-material": "^5.8.4",
    "@mui/material": "^5.10.1",
    "@mui/styled-engine-sc": "^5.10.1",
    "@mui/types": "^7.1.5",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^28.1.5",
    "@types/node": "^18.0.4",
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "@types/react-responsive": "^8.0.5",
    "@types/styled-components": "^5.1.25",
    "axios": "^0.27.2",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-cookie": "^4.1.1",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "react-intersection-observer": "^9.4.0",
    "react-isometric-grid": "^0.0.3",
    "react-isometric-tilemap": "^1.0.0",
    "react-material-ui-carousel": "^3.4.2",
    "react-query": "^3.39.2",
    "react-responsive": "^9.0.0-beta.10",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.1.3",
    "styled-components": "^5.3.5",
    "typescript": "^4.7.4",
    "web-vitals": "^2.1.4"
```
