# AIM - AI Tool Matcher

AI 툴에 대한 정보를 제공하고 사용자에게 가장 적합한 AI 툴을 추천해주는 웹사이트입니다.

## 🚀 배포 방법

### GitHub Pages로 배포하기

1. GitHub에 새 리포지토리를 생성합니다.

2. 다음 파일들을 리포지토리에 업로드합니다:
   ```
   ├── index.html          # 메인 HTML 파일
   ├── script.js           # JavaScript 로직
   ├── styles.css          # 스타일시트
   ├── cursor.png          # 커서 이미지
   ├── favicon.ico         # 파비콘
   └── README.md           # 이 파일
   ```

3. GitHub 리포지토리 설정에서:
   - Settings → Pages
   - Source를 "Deploy from a branch"로 선택
   - Branch를 "main" (또는 "master")로 선택
   - 폴더를 "/ (root)"로 선택
   - Save 클릭

4. 몇 분 후 `https://[사용자명].github.io/[리포지토리명]`에서 사이트를 확인할 수 있습니다.

## 📁 프로젝트 구조

```
AIM/
├── index.html          # 메인 HTML 파일
├── script.js           # Three.js 애니메이션 및 로직
├── styles.css          # 스타일시트
├── cursor.png          # 커서 이미지
├── favicon.ico         # 파비콘
└── README.md           # 프로젝트 설명
```

## 🎨 주요 기능

- 3D 구 형태의 AI 툴 시각화
- 카테고리별 AI 툴 분류 및 추천
- 툴 클릭 시 상세 정보 표시
- 반응형 디자인

## 🛠 기술 스택

- HTML5
- CSS3
- JavaScript (ES6+)
- Three.js (r128)

## 📝 참고사항

- 백엔드 서버 파일(`server/`, `server.js`)은 GitHub Pages 배포에 포함하지 않습니다.
- API 호출이 필요한 경우 별도의 백엔드 서버를 배포해야 합니다.
- `node_modules/`는 `.gitignore`에 포함되어 있어 업로드되지 않습니다.

https://github.com/user-attachments/assets/9e427ff4-3a4c-48e9-b1b1-b6e1a2c64336
