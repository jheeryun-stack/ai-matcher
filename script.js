// AI Tools data based on provided categories
const AI_TOOLS = [
  // 생성형 AI 챗봇 및 어시스턴트
  { name: 'ChatGPT', category: '생성형 AI 챗봇', description: '자연어 대화, 정보 검색, 문서와 코드 자동 생성', features: ['자연어 대화', '정보 검색', '문서 생성', '코드 생성', '고객 응대', '자료 요약'], users: ['전 직군', '사무직', '학생', '개발자'] },
  { name: 'Gemini', category: '생성형 AI 챗봇', description: '자연어 대화, 정보 검색, 문서와 코드 자동 생성', features: ['자연어 대화', '정보 검색', '문서 생성', '코드 생성', '고객 응대', '자료 요약'], users: ['전 직군', '사무직', '학생', '개발자'] },
  { name: 'Claude', category: '생성형 AI 챗봇', description: '자연어 대화, 정보 검색, 문서와 코드 자동 생성', features: ['자연어 대화', '정보 검색', '문서 생성', '코드 생성', '고객 응대', '자료 요약'], users: ['전 직군', '사무직', '학생', '개발자'] },
  { name: 'Grok', category: '생성형 AI 챗봇', description: '자연어 대화, 정보 검색, 문서와 코드 자동 생성', features: ['자연어 대화', '정보 검색', '문서 생성', '코드 생성', '고객 응대', '자료 요약'], users: ['전 직군', '사무직', '학생', '개발자'] },
  { name: 'Perplexity', category: '생성형 AI 챗봇', description: '자연어 대화, 정보 검색, 문서와 코드 자동 생성', features: ['자연어 대화', '정보 검색', '문서 생성', '코드 생성', '고객 응대', '자료 요약'], users: ['전 직군', '사무직', '학생', '개발자'] },
  
  // 번역 및 문서·글쓰기 보조
  { name: 'DeepL', category: '번역/문서', description: '번역, 문법/스타일 교정', features: ['번역', '문법 교정', '스타일 교정'], users: ['마케터', '학생', '번역가', '저널리스트', '크리에이터'] },
  { name: 'Grammarly', category: '번역/문서', description: '문법/스타일 교정, 표절 탐지', features: ['문법 교정', '스타일 교정', '표절 탐지'], users: ['마케터', '학생', '저널리스트', '크리에이터'] },
  { name: 'Quillbot', category: '번역/문서', description: '문서 작성 보조, 문법 교정', features: ['문서 작성', '문법 교정', '요약'], users: ['학생', '저널리스트', '크리에이터'] },
  { name: 'GPTZero', category: '번역/문서', description: 'AI 생성문 감별, 표절 탐지', features: ['AI 생성문 감별', '표절 탐지'], users: ['학생', '교사', '저널리스트'] },
  
  // 생산성 향상, 프로젝트 관리, 노트 및 협업
  { name: 'Notion', category: '생산성/협업', description: '업무 문서화, 테스크 협업, 데이터 워크플로우 관리', features: ['문서화', '테스크 관리', '협업', '데이터 관리'], users: ['사무직', '기획자', '개발팀', 'PM', 'UX팀'] },
  { name: 'Salesforce', category: '생산성/협업', description: '데이터 워크플로우 관리, 정보통합 관리', features: ['CRM', '데이터 관리', '워크플로우'], users: ['사무직', '기획자', '영업팀'] },
  { name: 'Airtable', category: '생산성/협업', description: '데이터 워크플로우 관리, 일정 및 정보통합 관리', features: ['데이터베이스', '프로젝트 관리', '협업'], users: ['사무직', '기획자', '개발팀', 'PM'] },
  { name: 'Manus', category: '생산성/협업', description: '업무 문서화, 테스크 협업', features: ['문서화', '테스크 관리', '협업'], users: ['사무직', '기획자', '개발팀'] },
  
  // 이미지 생성/편집 및 디자인
  { name: 'Fotor', category: '이미지/디자인', description: '이미지 편집, 썸네일·광고소재 제작', features: ['이미지 편집', '썸네일 제작', '광고소재'], users: ['디자이너', '마케터', '크리에이터', '이커머스', 'SNS 운영자'] },
  { name: 'remove.bg', category: '이미지/디자인', description: '이미지 배경 제거, 보정', features: ['배경 제거', '이미지 보정'], users: ['디자이너', '마케터', '크리에이터', '이커머스'] },
  { name: 'Freepik', category: '이미지/디자인', description: '이미지·일러스트 창작, 디자인 소재', features: ['이미지 생성', '일러스트', '디자인 소재'], users: ['디자이너', '마케터', '크리에이터'] },
  { name: 'Seaart', category: '이미지/디자인', description: '이미지 생성, 아트·일러스트 창작', features: ['이미지 생성', '아트 창작', '일러스트'], users: ['디자이너', '크리에이터'] },
  { name: 'Nano Banana', category: '이미지/디자인', description: '이미지 편집, 스타일 변환', features: ['이미지 편집', '스타일 변환'], users: ['디자이너', '크리에이터'] },
  { name: 'CapCut', category: '이미지/디자인', description: '영상 편집, 썸네일 제작', features: ['영상 편집', '썸네일 제작'], users: ['크리에이터', '유튜버', '마케터'] },
  { name: 'Photoroom', category: '이미지/디자인', description: '이미지 배경 제거·보정, 광고소재 제작', features: ['배경 제거', '이미지 보정', '광고소재'], users: ['디자이너', '마케터', '이커머스'] },
  { name: 'VSCO', category: '이미지/디자인', description: '이미지 보정, 스타일 변환', features: ['이미지 보정', '필터', '스타일 변환'], users: ['크리에이터', 'SNS 운영자'] },
  
  // 동영상/음악 생성, 미디어 편집
  { name: 'Wondershare Filmora', category: '동영상/음악', description: '영상 편집, 자막 제작, 광고 및 숏폼 콘텐츠', features: ['영상 편집', '자막 제작', '효과음'], users: ['유튜버', '영상 PD', '마케터', '크리에이터'] },
  { name: 'Suno', category: '동영상/음악', description: '뮤직·효과음 제작', features: ['음악 생성', '효과음 제작'], users: ['크리에이터', '유튜버', '영상 PD'] },
  { name: 'AnyMusic', category: '동영상/음악', description: '뮤직·효과음 제작', features: ['음악 생성', '효과음'], users: ['크리에이터', '유튜버'] },
  { name: 'MediaPet', category: '동영상/음악', description: '영상, 음성, 자막 제작', features: ['영상 편집', '음성 제작', '자막'], users: ['유튜버', '크리에이터'] },
  { name: 'Tripo AI', category: '동영상/음악', description: '영상 제작, 광고 및 숏폼 콘텐츠', features: ['영상 생성', '광고 제작', '숏폼 콘텐츠'], users: ['마케터', '크리에이터'] },
  
  // 교육·튜터/문제풀이
  { name: 'Studocu', category: '교육', description: 'AI 숙제 도움, 자료 검색, 요약 정리', features: ['숙제 도움', '자료 검색', '요약 정리'], users: ['학생', '교사', '자기계발러'] },
  { name: 'Gauth', category: '교육', description: '수학/논술문제 풀이, 자료 검색', features: ['문제 풀이', '수학 문제', '자료 검색'], users: ['학생', '교사', '학부모'] },
  { name: 'Feen AI', category: '교육', description: 'AI 숙제 도움, 자료 검색', features: ['숙제 도움', '자료 검색'], users: ['학생', '자기계발러'] },
  { name: 'Vertech Academy', category: '교육', description: '교육 자료, 요약 정리', features: ['교육 자료', '요약 정리'], users: ['학생', '교사'] },
  
  // 마케팅, CRM, 이메일/상담 자동화
  { name: 'HubSpot', category: '마케팅/CRM', description: '고객관리, 리드생성, 이메일/챗봇 응대', features: ['CRM', '리드 생성', '이메일 자동화', '챗봇'], users: ['마케터', '영업', '고객지원', '스타트업'] },
  { name: 'Jotform', category: '마케팅/CRM', description: '광고·설문 폼 자동화', features: ['폼 생성', '설문 자동화'], users: ['마케터', '영업'] },
  { name: 'Gamma', category: '마케팅/CRM', description: '프레젠테이션, 브랜딩', features: ['프레젠테이션', '브랜딩'], users: ['마케터', '기획자'] },
  { name: 'Mailmodo', category: '마케팅/CRM', description: '이메일 자동화, 마케팅 캠페인', features: ['이메일 자동화', '마케팅 캠페인'], users: ['마케터', '영업'] },
  { name: 'Touchpoint', category: '마케팅/CRM', description: '고객관리, 리드생성', features: ['CRM', '리드 생성'], users: ['마케터', '영업'] },
  { name: 'BrandJet', category: '마케팅/CRM', description: '브랜딩, 광고 자동화', features: ['브랜딩', '광고 자동화'], users: ['마케터', '스타트업'] },
  { name: 'Beacons', category: '마케팅/CRM', description: '브랜딩, 마케팅 자동화', features: ['브랜딩', '마케팅 자동화'], users: ['마케터', '크리에이터'] },
  
  // 코딩/데브옵스/AI 에이전트
  { name: 'OpenAI', category: '코딩/데브옵스', description: 'AI 모델/에이전트 API 사용', features: ['AI API', '에이전트', '모델 사용'], users: ['개발자', '데이터사이언티스트', '스타트업'] },
  { name: 'DeepSeek', category: '코딩/데브옵스', description: '코딩 자동화, AI 모델 사용', features: ['코딩 자동화', 'AI 모델'], users: ['개발자', '데이터사이언티스트'] },
  { name: 'APIMart', category: '코딩/데브옵스', description: 'API 사용, 오픈소스 배포', features: ['API', '오픈소스 배포'], users: ['개발자', '스타트업'] },
  { name: 'Qoder', category: '코딩/데브옵스', description: '코딩 자동화, 코드 테스트', features: ['코딩 자동화', '코드 테스트'], users: ['개발자'] },
  { name: 'Verdent', category: '코딩/데브옵스', description: '코딩 자동화, 오픈소스 배포', features: ['코딩 자동화', '오픈소스'], users: ['개발자', '스타트업'] },
  { name: 'Macaly', category: '코딩/데브옵스', description: '코딩 자동화, AI 에이전트', features: ['코딩 자동화', 'AI 에이전트'], users: ['개발자'] },
  
  // AI 커뮤니티/소셜·NSFW 캐릭터 챗터
  { name: 'Janitor AI', category: 'AI 커뮤니티', description: '캐릭터 챗/역할극, 가상 소셜룸', features: ['캐릭터 챗', '역할극', '소셜룸'], users: ['소셜 사용자', '팬덤', '콘텐츠 창작자'] },
  { name: 'CrushOn', category: 'AI 커뮤니티', description: '캐릭터 챗/역할극, 커뮤니티 운영', features: ['캐릭터 챗', '역할극', '커뮤니티'], users: ['소셜 사용자', '팬덤'] },
  { name: 'Rubii', category: 'AI 커뮤니티', description: '캐릭터 챗, 가상 소셜룸', features: ['캐릭터 챗', '소셜룸'], users: ['소셜 사용자', '콘텐츠 창작자'] },
  { name: 'PolyBuzz', category: 'AI 커뮤니티', description: '캐릭터 챗, 커뮤니티 운영', features: ['캐릭터 챗', '커뮤니티'], users: ['소셜 사용자', '팬덤'] },
  { name: 'Spicychat', category: 'AI 커뮤니티', description: '캐릭터 챗/역할극', features: ['캐릭터 챗', '역할극'], users: ['소셜 사용자', '팬덤'] },
  
  // 데이터/웹 자동화
  { name: 'Browser Cash', category: '데이터/웹', description: '사이트 크롤링, 데이터 추출, 웹 자동화', features: ['크롤링', '데이터 추출', '웹 자동화'], users: ['데이터 분석가', '리서처', '마케팅팀', 'SEO팀'] },
  { name: 'NextBrowser', category: '데이터/웹', description: '웹 자동화, 퍼널 최적화', features: ['웹 자동화', '퍼널 최적화'], users: ['마케팅팀', 'SEO팀'] },
  { name: 'Claspo', category: '데이터/웹', description: '데이터 추출, 웹 자동화', features: ['데이터 추출', '웹 자동화'], users: ['데이터 분석가', '리서처'] }
];

const AI_TOOLS_OLD = [
  {
    name: 'OpenAI GPT-4',
    industries: ['모든 산업'],
    taskTypes: ['고객 지원', '문서 작성', '기술 지원', '교육', '아이디어 브레인스토밍', '데이터 분석 보조'],
    jobRoles: ['영업', '마케팅', 'R&D', '생산', '기획', '인사', '재무', 'IT', '법무', '홍보'],
    summary: '범용 자연어 모델로 다양한 지식 업무와 커뮤니케이션을 고도화합니다.'
  },
  {
    name: 'Jasper AI',
    industries: ['마케팅', '광고', 'e커머스', '미디어', '출판'],
    taskTypes: ['콘텐츠 마케팅', '광고 문구 생성', 'SNS 관리', '이메일 캠페인 작성'],
    jobRoles: ['마케팅', '영업', '홍보', '기획'],
    summary: '마케팅 팀을 위한 생성형 카피라이팅과 캠페인 자동화 도구입니다.'
  },
  {
    name: 'Canva AI',
    industries: ['디자인', '마케팅', '출판', '교육', '이벤트'],
    taskTypes: ['그래픽 디자인', '영상 제작', '마케팅 자료 디자인', '프레젠테이션 제작'],
    jobRoles: ['마케팅', '홍보', '기획'],
    summary: '비주얼 제작을 자동화하고 브랜드 가이드를 유지하도록 돕는 디자인 도구입니다.'
  },
  {
    name: 'Salesforce Einstein',
    industries: ['IT', '금융', '유통', '제조', '서비스업'],
    taskTypes: ['고객 관계 관리(CRM)', '영업 예측', '마케팅 자동화', '고객 데이터 분석'],
    jobRoles: ['영업', '마케팅', '재무', 'IT'],
    summary: 'CRM 데이터 기반으로 영업/마케팅 의사결정을 자동화하고 예측합니다.'
  },
  {
    name: 'GitHub Copilot',
    industries: ['IT/소프트웨어 개발', '금융', 'R&D'],
    taskTypes: ['소프트웨어 개발', '코드 작성 및 리뷰', '자동화 스크립트 생성'],
    jobRoles: ['IT', 'R&D'],
    summary: '코드를 실시간 제안해 개발 생산성을 높이는 AI 페어 프로그래머입니다.'
  },
  {
    name: 'IBM Watson',
    industries: ['의료', '금융', '제조', '정부', '서비스'],
    taskTypes: ['데이터 분석', '자연어 처리 기반 챗봇', '음성 인식', '문서 자동 분류'],
    jobRoles: ['R&D', '재무', '생산', 'IT', '기획'],
    summary: '대규모 데이터 분석과 자연어 서비스를 통합 제공하는 엔터프라이즈 AI 플랫폼입니다.'
  },
  {
    name: 'AlphaSense',
    industries: ['금융', '제약', '법률', '기술 연구'],
    taskTypes: ['시장 조사', '기술/특허 분석', '리서치 자동화'],
    jobRoles: ['재무', '법무', '기획', 'R&D'],
    summary: '시장과 규제/기술 정보를 통합 탐색하여 빠른 의사결정을 지원합니다.'
  },
  {
    name: 'Microsoft Copilot',
    industries: ['모든 산업'],
    taskTypes: ['문서 작성', '데이터 분석', '프레젠테이션 제작', '이메일 관리'],
    jobRoles: ['영업', '마케팅', '재무', '인사', '기획', '홍보'],
    summary: 'MS 365 전반에서 반복 업무를 줄이는 AI 어시스턴트입니다.'
  },
  {
    name: 'Siemens MindSphere',
    industries: ['제조', '에너지', '산업 설비'],
    taskTypes: ['생산 공정 모니터링', 'IoT 데이터 분석', '설비 유지보수 예측'],
    jobRoles: ['생산', 'R&D', 'IT'],
    summary: '산업 IoT 데이터를 통합해 실시간 모니터링과 예측 유지보수를 지원합니다.'
  },
  {
    name: 'Notion AI',
    industries: ['모든 산업'],
    taskTypes: ['아이디어 정리', '보고서 작성', '팀 협업 문서 관리'],
    jobRoles: ['기획', '마케팅', '인사', '홍보'],
    summary: '협업 문서와 지식 관리를 자동화하는 워크스페이스 내 AI 도우미입니다.'
  },
  {
    name: 'HireVue',
    industries: ['모든 산업'],
    taskTypes: ['영상 면접 평가', '후보자 성향 분석', '채용 자동화'],
    jobRoles: ['인사'],
    summary: 'AI 기반 영상 인터뷰 분석을 제공하는 채용 프로세스 자동화 도구입니다.'
  },
  {
    name: 'LinkedIn Recruiter',
    industries: ['모든 산업'],
    taskTypes: ['채용 후보자 검색', '인재 매칭', '채용 캠페인 관리'],
    jobRoles: ['인사'],
    summary: '전 세계 인재 풀을 분석해 최적의 후보자를 찾는 리크루팅 플랫폼입니다.'
  },
  {
    name: 'Betterworks',
    industries: ['모든 산업'],
    taskTypes: ['목표 관리', '성과 트래킹', '피드백 자동화'],
    jobRoles: ['인사', '기획'],
    summary: 'OKR 중심의 성과 관리와 피드백 자동화를 지원하는 HR 플랫폼입니다.'
  },
  {
    name: 'Eightfold',
    industries: ['IT', '금융', '제조', '서비스'],
    taskTypes: ['인재 매칭', '채용 데이터 분석', '이직 예측'],
    jobRoles: ['인사', 'R&D', '재무'],
    summary: '인재 데이터를 머신러닝으로 분석해 채용 및 내부 이동을 최적화합니다.'
  },
  {
    name: 'SAP AI',
    industries: ['제조', '금융', '유통', '공공'],
    taskTypes: ['재무회계 자동화', '예산 관리', '비용 분석'],
    jobRoles: ['재무', '생산', '기획'],
    summary: 'ERP 데이터 기반으로 재무와 운영 의사결정을 자동화합니다.'
  },
  {
    name: 'Oracle AI',
    industries: ['금융', 'IT', '대기업 전 산업'],
    taskTypes: ['재무 분석', '수익 예측', '경비 처리 자동화'],
    jobRoles: ['재무', '기획', 'IT'],
    summary: '엔터프라이즈 데이터 전반을 분석해 재무와 운영을 고도화합니다.'
  },
  {
    name: 'UiPath',
    industries: ['금융', '보험', '제조', 'IT', '공공'],
    taskTypes: ['업무 자동화(RPA)', '데이터 입력', '반복 작업 처리'],
    jobRoles: ['재무', 'IT', '생산', '기획', '인사'],
    summary: '반복적인 백오피스 업무를 로봇 프로세스로 자동화합니다.'
  },
  {
    name: 'Moveworks',
    industries: ['IT', '기술 서비스', '대기업'],
    taskTypes: ['IT 헬프데스크 자동화', '티켓 분류 및 해결', '직원 지원'],
    jobRoles: ['IT', '인사'],
    summary: '사내 티켓과 FAQ를 자연어로 해결하는 IT·직원 지원 봇입니다.'
  },
  {
    name: 'ServiceNow AI',
    industries: ['IT', '대기업 서비스 운영'],
    taskTypes: ['IT 서비스 관리', '운영 자동화', '워크플로우 관리'],
    jobRoles: ['IT', '기획', '생산'],
    summary: '서비스 운영 전반을 자동화하고 워크플로우를 최적화합니다.'
  },
  {
    name: 'Luminance',
    industries: ['법무', '금융', '대기업 법무팀'],
    taskTypes: ['계약서 분석', '법률문서 검토', '리스크 평가'],
    jobRoles: ['법무', '재무'],
    summary: '계약 및 규제 문서를 고속 분석해 컴플라이언스를 강화합니다.'
  },
  {
    name: 'Harvey AI',
    industries: ['법률', '로펌', '기업 법무부서'],
    taskTypes: ['법률 자문', '판례 검색', '문서 질문 답변'],
    jobRoles: ['법무', '기획'],
    summary: '법률 전문 지식에 최적화된 생성형 AI 어시스턴트입니다.'
  },
  {
    name: 'Casetext',
    industries: ['법률', '학술', '법률 연구기관'],
    taskTypes: ['법률 문서 검색', '사례 요약', '법률 연구'],
    jobRoles: ['법무', 'R&D'],
    summary: '판례와 규제 문서를 빠르게 검색하고 요약합니다.'
  },
  {
    name: 'Fireflies.ai',
    industries: ['모든 산업'],
    taskTypes: ['회의 녹음', '자동 필기', '대화 분석 및 요약'],
    jobRoles: ['영업', '마케팅', '기획', '홍보', '인사'],
    summary: '회의 콘텐츠를 자동 기록하고 요약해 협업 효율을 끌어올립니다.'
  },
  {
    name: 'Gong',
    industries: ['영업', '마케팅', '고객 지원'],
    taskTypes: ['영업 통화 분석', '고객 대화 피드백', '판매 전략 개선'],
    jobRoles: ['영업', '마케팅'],
    summary: '고객 대화를 분석해 영업 전략과 성과를 개선합니다.'
  }
];

// Sphere Animation Setup
let sphereScene, sphereCamera, sphereRenderer, sphereGroup, centerSphere;
let sphereAnimationId = null;
let mouseX = 0;
let mouseY = 0;
let targetRotationX = 0;
let targetRotationY = 0;
let currentRotationX = 0;
let currentRotationY = 0;
let cameraAnimationStart = null;
let cameraAnimationDuration = 2000; // 2 seconds
let initialCameraZ = 20; // Start far away
let finalCameraZ = 2.0; // End inside but far enough to see the center sphere
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let cameraAnimationComplete = false;
let redBalls = []; // Array to hold red ball meshes for animation
let redToolGroups = []; // Array to hold toolGroups that are red (recommended)
let isCenteringRedTools = false; // Flag to track if we're centering red tools

function initSphereAnimation() {
  const container = document.getElementById('sphere-container');
  if (!container || typeof THREE === 'undefined') return;

  // Scene setup
  sphereScene = new THREE.Scene();
  sphereScene.background = new THREE.Color(0xffffff);

  // Camera setup - start far away, will animate into sphere
  const width = window.innerWidth;
  const height = window.innerHeight;
  sphereCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  sphereCamera.position.z = initialCameraZ;
  cameraAnimationStart = Date.now();

  // Renderer setup
  sphereRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  sphereRenderer.setSize(width, height);
  sphereRenderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(sphereRenderer.domElement);

  // Create sphere group
  sphereGroup = new THREE.Group();
  sphereScene.add(sphereGroup);

  // Create tool logo circles with text
  const toolsToShow = AI_TOOLS;
  const radius = 3.2; // Slightly larger sphere
  const numTools = toolsToShow.length;

  // Use Fibonacci sphere algorithm for even distribution
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

  toolsToShow.forEach((tool, index) => {
    // Fibonacci sphere distribution for even spacing
    const y = 1 - (index / (numTools - 1)) * 2; // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y); // radius at y
    const theta = goldenAngle * index; // golden angle increment

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    // Scale to sphere radius
    const finalX = x * radius;
    const finalY = y * radius;
    const finalZ = z * radius;

    // Create circle geometry - white circle
    // Increased segments for smoother circle when viewed up close
    const circleGeometry = new THREE.CircleGeometry(0.5, 256); // More segments for smoothness
    const circleMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 1.0,
      depthWrite: true,
      depthTest: true
    });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.position.set(finalX, finalY, finalZ);
    circle.lookAt(0, 0, 0);
    circle.renderOrder = 1;
    circle.userData = { tool: tool, originalScale: 1 };
    
    // Create black stroke using Line - crisp and smooth outline
    const strokeRadius = 0.5;
    const strokeSegments = 512; // Very high segment count for ultra-smooth circle
    const strokePoints = [];
    for (let i = 0; i <= strokeSegments; i++) {
      const angle = (i / strokeSegments) * Math.PI * 2;
      strokePoints.push(new THREE.Vector3(
        Math.cos(angle) * strokeRadius,
        Math.sin(angle) * strokeRadius,
        0
      ));
    }
    const strokeGeometry = new THREE.BufferGeometry().setFromPoints(strokePoints);
    const strokeMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      linewidth: 1,
      transparent: false,
      opacity: 1.0
    });
    const stroke = new THREE.Line(strokeGeometry, strokeMaterial);
    stroke.position.copy(circle.position);
    stroke.lookAt(0, 0, 0);
    stroke.renderOrder = 2;
    
    // Create additional lines slightly offset for thicker appearance
    // This ensures visibility even when linewidth is not fully supported
    const strokeGroup = new THREE.Group();
    strokeGroup.position.copy(circle.position);
    strokeGroup.lookAt(0, 0, 0);
    
    // Create multiple thin lines for thicker, smoother appearance
    for (let offset = -0.003; offset <= 0.003; offset += 0.001) {
      const offsetPoints = strokePoints.map(p => new THREE.Vector3(
        p.x * (1 + offset / strokeRadius),
        p.y * (1 + offset / strokeRadius),
        p.z
      ));
      const offsetGeometry = new THREE.BufferGeometry().setFromPoints(offsetPoints);
      const offsetLine = new THREE.Line(offsetGeometry, strokeMaterial);
      strokeGroup.add(offsetLine);
    }
    
    // Create text sprite for tool name - black text, much higher resolution
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const textSize = Math.min(72, 500 / tool.name.length); // Larger text size (increased from 56)
    const dpr = Math.max(2, window.devicePixelRatio || 2); // Higher DPR for crisp text
    canvas.width = 2048; // Very high resolution
    canvas.height = 512;
    const scale = dpr;
    context.scale(scale, scale);
    
    // Enable text rendering hints for better quality
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillStyle = '#000000'; // Black text
    context.font = `700 ${textSize}px "Futura PT", Futura, sans-serif`; // Bolder font (700 instead of 500)
    // Enable text rendering quality
    context.textRenderingOptimization = 'optimizeQuality';
    context.fillText(tool.name, canvas.width / (2 * scale), canvas.height / (2 * scale));

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false; // Disable mipmaps for text clarity
    const spriteMaterial = new THREE.SpriteMaterial({ 
      map: texture,
      transparent: true,
      alphaTest: 0.01,
      depthWrite: false,
      depthTest: false
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(1.2, 0.3, 1); // Larger scale for better visibility (increased from 1.0, 0.25)
    sprite.position.copy(circle.position);
    // Position sprite significantly in front of circle
    const offset = circle.position.clone().normalize().multiplyScalar(0.15);
    sprite.position.add(offset);
    sprite.renderOrder = 999; // Render on top
    sprite.material.depthWrite = false; // Ensure sprites render on top
    sprite.material.depthTest = false;
    
    // Sprite automatically faces camera, no need for lookAt
    
    // Create a group for circle, stroke, and text
    const toolGroup = new THREE.Group();
    toolGroup.add(circle);
    toolGroup.add(strokeGroup);
    toolGroup.add(sprite);
    toolGroup.userData = { tool: tool, originalScale: 1, sprite: sprite };
    
    // Store toolGroup reference in all child objects for easy lookup
    circle.userData.toolGroup = toolGroup;
    sprite.userData.toolGroup = toolGroup;
    strokeGroup.userData.toolGroup = toolGroup;
    // Also store in strokeGroup's children
    strokeGroup.children.forEach(child => {
      child.userData.toolGroup = toolGroup;
    });
    
    sphereGroup.add(toolGroup);
  });

  // Create center sphere with rotating text - more visible black sphere
  const centerGeometry = new THREE.SphereGeometry(1.0, 32, 32);
  const centerMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: false,
    opacity: 1.0
  });
  centerSphere = new THREE.Mesh(centerGeometry, centerMaterial);
  sphereGroup.add(centerSphere);

  // Create text in the center of the sphere (not around it)
  const text = 'find your perfect match';
  
  // Create a single canvas for the entire text
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const dpr = Math.max(3, window.devicePixelRatio || 3);
  canvas.width = 2048 * dpr;
  canvas.height = 512 * dpr;
  context.scale(dpr, dpr);
  
  // Enable text rendering quality
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.fillStyle = '#ffffff'; // White text
  context.font = '500 140px "Futura PT", Futura, sans-serif'; // Large font for center text
  context.fillText(text, canvas.width / (2 * dpr), canvas.height / (2 * dpr));

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  const spriteMaterial = new THREE.SpriteMaterial({ 
    map: texture,
    transparent: true,
    alphaTest: 0.01,
    depthWrite: false,
    depthTest: false
  });
  const centerTextSprite = new THREE.Sprite(spriteMaterial);
  centerTextSprite.scale.set(3.0, 0.7, 1); // Larger scale for center text
  centerTextSprite.position.set(0, 0, 0); // Center position
  centerTextSprite.renderOrder = 1000; // Render on top
  centerTextSprite.userData = { isCenterText: true };
  
  // Add to scene directly, not to sphereGroup, so it doesn't rotate with sphere
  sphereScene.add(centerTextSprite);

  // Mouse interaction for drag rotation and hover
  let hoveredCircle = null;
  
  // Track if mouse moved during mousedown to distinguish click from drag
  let mouseDownPosition = { x: 0, y: 0 };
  let hasMoved = false;
  
  // Mouse down - start dragging
  container.addEventListener('mousedown', (event) => {
    mouseDownPosition.x = event.clientX;
    mouseDownPosition.y = event.clientY;
    hasMoved = false;
    
    if (cameraAnimationComplete) {
      isDragging = true;
      previousMousePosition.x = event.clientX;
      previousMousePosition.y = event.clientY;
      container.style.cursor = 'grabbing';
    }
  });

  // Mouse move - handle dragging and hover
  container.addEventListener('mousemove', (event) => {
    if (isDragging && cameraAnimationComplete) {
      // Check if mouse has moved significantly (to distinguish click from drag)
      const moveDistance = Math.sqrt(
        Math.pow(event.clientX - mouseDownPosition.x, 2) + 
        Math.pow(event.clientY - mouseDownPosition.y, 2)
      );
      if (moveDistance > 5) {
        hasMoved = true;
      }
      
      // Calculate rotation delta based on mouse movement
      const deltaX = event.clientX - previousMousePosition.x;
      const deltaY = event.clientY - previousMousePosition.y;
      
      // Apply rotation (inverse for natural feel)
      currentRotationY += deltaX * 0.005;
      currentRotationX -= deltaY * 0.005;
      
      // Clamp vertical rotation to prevent flipping
      currentRotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, currentRotationX));
      
      previousMousePosition.x = event.clientX;
      previousMousePosition.y = event.clientY;
    }

    // Raycasting for hover effect (only when not dragging)
    if (!isDragging) {
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, sphereCamera);

      const circles = sphereGroup.children.filter(child => child.userData && child.userData.tool);
      const intersects = raycaster.intersectObjects(circles, true); // true for recursive check

      // Reset previous hover
      if (hoveredCircle) {
        const toolGroup = hoveredCircle.parent;
        if (toolGroup && toolGroup.userData) {
          toolGroup.scale.set(
            toolGroup.userData.originalScale,
            toolGroup.userData.originalScale,
            toolGroup.userData.originalScale
          );
          const circle = toolGroup.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.CircleGeometry);
          if (circle) {
            circle.material.opacity = 1.0;
            circle.material.color.setHex(0xffffff);
          }
        }
        hoveredCircle = null;
      }

      // Set new hover
      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        const toolGroup = clickedObject.parent;
        if (toolGroup && toolGroup.userData && toolGroup.userData.tool) {
          hoveredCircle = clickedObject;
          toolGroup.scale.set(1.5, 1.5, 1.5);
          const circle = toolGroup.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.CircleGeometry);
          if (circle) {
            circle.material.opacity = 1.0;
            circle.material.color.setHex(0xffffff);
          }
          container.style.cursor = 'pointer';
        } else {
          container.style.cursor = cameraAnimationComplete ? 'grab' : 'default';
        }
      } else {
        container.style.cursor = cameraAnimationComplete ? 'grab' : 'default';
      }
    }
  });

  // Mouse up - stop dragging
  container.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      container.style.cursor = cameraAnimationComplete ? 'grab' : 'default';
    }
  });

  // Mouse leave - stop dragging
  container.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      container.style.cursor = cameraAnimationComplete ? 'grab' : 'default';
    }
  });

  container.addEventListener('click', (event) => {
    // Only handle click if it wasn't a drag
    if (hasMoved || !cameraAnimationComplete) return;
    
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, sphereCamera);

    // Check if center sphere is clicked, or red tool groups
    const allObjects = [centerSphere, ...sphereGroup.children];
    const intersects = raycaster.intersectObjects(allObjects, true);
    
    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      
      // If center sphere is clicked, show job input section
      if (clickedObject === centerSphere) {
        showJobInputSection();
      } else {
        // Find the tool group - use stored reference or find parent
        let toolGroup = null;
        
        // First, check if clicked object has a direct toolGroup reference
        if (clickedObject.userData && clickedObject.userData.toolGroup) {
          toolGroup = clickedObject.userData.toolGroup;
        }
        // Check if clicked object itself is a toolGroup
        else if (clickedObject.userData && clickedObject.userData.tool) {
          toolGroup = clickedObject;
        }
        // Otherwise, traverse up the parent chain to find toolGroup
        else {
          let current = clickedObject;
          while (current && current.parent) {
            current = current.parent;
            // Check if current is a toolGroup
            if (current.userData && current.userData.tool) {
              toolGroup = current;
              break;
            }
            // Check if current has a toolGroup reference
            if (current.userData && current.userData.toolGroup) {
              toolGroup = current.userData.toolGroup;
              break;
            }
          }
        }
        
        if (toolGroup && toolGroup.userData && toolGroup.userData.tool) {
          // Get the actual tool object from toolGroup
          const clickedTool = toolGroup.userData.tool;
          
          // Check if this is a red (recommended) tool
          const isRedTool = redToolGroups.includes(toolGroup);
          
          // Verify we have the correct tool by checking the tool name matches
          // Find the tool in AI_TOOLS array to ensure we have the complete data
          const actualTool = AI_TOOLS.find(t => t.name === clickedTool.name);
          
          if (actualTool) {
            showToolDetails(actualTool);
          } else {
            // Fallback to toolGroup's tool if not found in AI_TOOLS
            showToolDetails(clickedTool);
          }
        } else {
          console.warn('Could not find toolGroup for clicked object:', clickedObject);
        }
      }
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    sphereCamera.aspect = width / height;
    sphereCamera.updateProjectionMatrix();
    sphereRenderer.setSize(width, height);
  });

  // Start animation
  animateSphere();
}

function animateSphere() {
  sphereAnimationId = requestAnimationFrame(animateSphere);

  // Camera animation - move into sphere
  if (cameraAnimationStart) {
    const elapsed = Date.now() - cameraAnimationStart;
    const progress = Math.min(elapsed / cameraAnimationDuration, 1);
    
    // Ease out cubic for smooth deceleration
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    sphereCamera.position.z = initialCameraZ + (finalCameraZ - initialCameraZ) * easeOutCubic;
    
    if (progress >= 1) {
      cameraAnimationStart = null; // Animation complete
      cameraAnimationComplete = true; // Enable manual rotation
      showAboutButton(); // Show about button when animation completes
    }
  }

  // Auto rotation only during camera animation
  if (!cameraAnimationComplete) {
    // Very slow continuous rotation while entering
    sphereGroup.rotation.y += 0.001;
  } else {
    // After animation complete, only manual rotation (no auto rotation)
    // Rotation is controlled by mouse drag
    sphereGroup.rotation.x = currentRotationX;
    sphereGroup.rotation.y = currentRotationY;
  }
  
  // Center text sprite always faces camera
  const centerTextSprite = sphereScene.children.find(child => child instanceof THREE.Sprite && child.userData && child.userData.isCenterText);
  if (centerTextSprite) {
    // Sprites automatically face camera in Three.js, but ensure it's visible
    const cameraPosition = new THREE.Vector3();
    sphereCamera.getWorldPosition(cameraPosition);
    centerTextSprite.lookAt(cameraPosition);
  }
  
  // Red tools stay in their original positions - no centering animation

  // Sprites automatically face camera in Three.js
  // Ensure sprites are always visible by keeping them in front of circles
  sphereGroup.children.forEach(toolGroup => {
    if (toolGroup.userData && toolGroup.userData.tool && toolGroup.userData.sprite) {
      const sprite = toolGroup.userData.sprite;
      const circle = toolGroup.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.CircleGeometry);
      if (circle) {
        // Calculate direction from origin to circle
        const direction = circle.position.clone().normalize();
        // Position sprite in front of circle (towards camera)
        const offset = direction.multiplyScalar(0.15);
        sprite.position.copy(circle.position).add(offset);
      }
    }
  });

  sphereRenderer.render(sphereScene, sphereCamera);
}

// Show about button when camera animation completes
function showAboutButton() {
  const aboutButton = document.getElementById('about-button');
  if (aboutButton) {
    aboutButton.style.display = 'block';
    aboutButton.style.opacity = '0';
    setTimeout(() => {
      aboutButton.style.transition = 'opacity 0.5s ease';
      aboutButton.style.opacity = '1';
    }, 100);
  }
}

// Show match section (about button click)
function showMatchSection() {
  const heroSection = document.getElementById('heroSection');
  const matchSection = document.getElementById('matchSection');
  const jobInputSection = document.getElementById('jobInputSection');
  const trafficSection = document.getElementById('trafficSection');
  const aboutButton = document.getElementById('about-button');
  if (heroSection && matchSection) {
    heroSection.style.display = 'none';
    jobInputSection.style.display = 'none';
    trafficSection.style.display = 'none';
    aboutButton.style.display = 'none';
    matchSection.style.display = 'flex';
    startMatchWordCycle();
  }
}

// Show job input section (center sphere click)
function showJobInputSection() {
  const heroSection = document.getElementById('heroSection');
  const matchSection = document.getElementById('matchSection');
  const jobInputSection = document.getElementById('jobInputSection');
  const trafficSection = document.getElementById('trafficSection');
  const aboutButton = document.getElementById('about-button');
  if (heroSection && jobInputSection) {
    heroSection.style.display = 'none';
    matchSection.style.display = 'none';
    trafficSection.style.display = 'none';
    aboutButton.style.display = 'none';
    jobInputSection.style.display = 'flex';
    renderCategoryList();
  }
}

// Show hero section (back to sphere)
function showHeroSection() {
  const heroSection = document.getElementById('heroSection');
  const matchSection = document.getElementById('matchSection');
  const jobInputSection = document.getElementById('jobInputSection');
  const trafficSection = document.getElementById('trafficSection');
  const aboutButton = document.getElementById('about-button');
  if (heroSection) {
    matchSection.style.display = 'none';
    jobInputSection.style.display = 'none';
    trafficSection.style.display = 'none';
    heroSection.style.display = 'block';
    if (cameraAnimationComplete) {
      aboutButton.style.display = 'block';
    }
    resetToolColors();
    redToolGroups = [];
    isCenteringRedTools = false;
  }
}

// Show traffic section
function showTrafficSection() {
  const heroSection = document.getElementById('heroSection');
  const matchSection = document.getElementById('matchSection');
  const jobInputSection = document.getElementById('jobInputSection');
  const trafficSection = document.getElementById('trafficSection');
  const aboutButton = document.getElementById('about-button');
  if (trafficSection) {
    heroSection.style.display = 'none';
    matchSection.style.display = 'none';
    jobInputSection.style.display = 'none';
    aboutButton.style.display = 'none';
    trafficSection.style.display = 'flex';
    initWorldMap();
    initToolListHandlers();
  }
}

// Initialize world map
function initWorldMap() {
  const worldMap = document.getElementById('worldMap');
  if (!worldMap) return;
  
  // Clear previous map
  worldMap.innerHTML = '';
  
  // Draw simplified world map background with better visibility
  // Using ellipses and paths for more realistic continents
  const ns = 'http://www.w3.org/2000/svg';
  
  // Background ocean
  const ocean = document.createElementNS(ns, 'rect');
  ocean.setAttribute('x', '0');
  ocean.setAttribute('y', '0');
  ocean.setAttribute('width', '1000');
  ocean.setAttribute('height', '500');
  ocean.setAttribute('fill', '#e8f4f8');
  worldMap.appendChild(ocean);
  
  // North America
  const naPath = document.createElementNS(ns, 'path');
  naPath.setAttribute('d', 'M 100 100 L 280 80 L 300 200 L 250 300 L 120 320 L 80 250 Z');
  naPath.setAttribute('fill', '#d4e6d1');
  naPath.setAttribute('stroke', '#999');
  naPath.setAttribute('stroke-width', '2');
  worldMap.appendChild(naPath);
  
  // South America
  const saPath = document.createElementNS(ns, 'path');
  saPath.setAttribute('d', 'M 250 280 L 320 260 L 350 380 L 320 450 L 240 420 L 220 350 Z');
  saPath.setAttribute('fill', '#d4e6d1');
  saPath.setAttribute('stroke', '#999');
  saPath.setAttribute('stroke-width', '2');
  worldMap.appendChild(saPath);
  
  // Europe
  const euPath = document.createElementNS(ns, 'path');
  euPath.setAttribute('d', 'M 400 80 L 550 70 L 580 150 L 520 200 L 420 180 L 380 120 Z');
  euPath.setAttribute('fill', '#d4e6d1');
  euPath.setAttribute('stroke', '#999');
  euPath.setAttribute('stroke-width', '2');
  worldMap.appendChild(euPath);
  
  // Africa
  const afPath = document.createElementNS(ns, 'path');
  afPath.setAttribute('d', 'M 480 200 L 580 190 L 600 350 L 580 450 L 500 440 L 460 320 Z');
  afPath.setAttribute('fill', '#d4e6d1');
  afPath.setAttribute('stroke', '#999');
  afPath.setAttribute('stroke-width', '2');
  worldMap.appendChild(afPath);
  
  // Asia
  const asPath = document.createElementNS(ns, 'path');
  asPath.setAttribute('d', 'M 550 60 L 850 50 L 900 200 L 880 350 L 750 380 L 600 300 L 580 150 Z');
  asPath.setAttribute('fill', '#d4e6d1');
  asPath.setAttribute('stroke', '#999');
  asPath.setAttribute('stroke-width', '2');
  worldMap.appendChild(asPath);
  
  // Oceania
  const ocPath = document.createElementNS(ns, 'path');
  ocPath.setAttribute('d', 'M 750 320 L 850 310 L 880 380 L 850 420 L 750 400 Z');
  ocPath.setAttribute('fill', '#d4e6d1');
  ocPath.setAttribute('stroke', '#999');
  ocPath.setAttribute('stroke-width', '2');
  worldMap.appendChild(ocPath);
}

// Show traffic data for selected tool
function showTrafficData(toolKey) {
  const data = TRAFFIC_DATA[toolKey];
  if (!data) return;
  
  const trafficTitle = document.getElementById('trafficTitle');
  const trafficDetails = document.getElementById('trafficDetails');
  const worldMap = document.getElementById('worldMap');
  
  if (trafficTitle) {
    trafficTitle.textContent = data.name;
  }
  
  if (trafficDetails) {
    let html = `
      <div class="traffic-stats">
        <div class="traffic-stat-item">
          <span class="stat-label">월간 방문자 수</span>
          <span class="stat-value">${data.monthlyVisitors}</span>
        </div>
        <div class="traffic-stat-item">
          <span class="stat-label">평균 방문 시간</span>
          <span class="stat-value">${data.avgVisitTime}</span>
        </div>
        <div class="traffic-stat-item">
          <span class="stat-label">방문당 페이지 수</span>
          <span class="stat-value">${data.pagesPerVisit}</span>
        </div>
        <div class="traffic-stat-item">
          <span class="stat-label">이탈률</span>
          <span class="stat-value">${data.bounceRate}</span>
        </div>
      </div>
      <div class="traffic-sources">
        <h3 class="traffic-subtitle">트래픽 유입 경로</h3>
        <div class="traffic-sources-list">
    `;
    
    Object.entries(data.trafficSources).forEach(([source, percentage]) => {
      html += `
        <div class="traffic-source-item">
          <span class="source-name">${source}</span>
          <span class="source-percentage">${percentage}%</span>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
    
    if (data.topKeywords && data.topKeywords.length > 0) {
      html += `
        <div class="traffic-keywords">
          <h3 class="traffic-subtitle">인기 검색 키워드</h3>
          <div class="keywords-list">
      `;
      data.topKeywords.forEach(keyword => {
        html += `
          <div class="keyword-item">
            <span class="keyword-name">${keyword.keyword}</span>
            <span class="keyword-searches">${keyword.searches}</span>
            ${keyword.cpc ? `<span class="keyword-cpc">${keyword.cpc}</span>` : ''}
          </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    }
    
    trafficDetails.innerHTML = html;
  }
  
  // Highlight countries on map
  if (worldMap) {
    // Remove previous country markers and labels more thoroughly
    const existingMarkers = worldMap.querySelectorAll('.country-marker, .country-label, .country-bg');
    existingMarkers.forEach(marker => {
      try {
        marker.remove();
      } catch (e) {
        // Ignore errors if element is already removed
      }
    });
    
    // Also remove by class name as fallback
    const allElements = worldMap.querySelectorAll('*');
    allElements.forEach(el => {
      if (el.classList && (el.classList.contains('country-marker') || 
          el.classList.contains('country-label') || 
          el.classList.contains('country-bg'))) {
        try {
          el.remove();
        } catch (e) {
          // Ignore errors
        }
      }
    });
    
    // Find top country
    const topCountry = Object.entries(data.countries).sort((a, b) => b[1] - a[1])[0];
    const topCountryName = topCountry[0];
    const topCountryPercent = topCountry[1];
    
    const ns = 'http://www.w3.org/2000/svg';
    
    // Highlight all countries with data
    Object.entries(data.countries).forEach(([country, percentage]) => {
      const coords = COUNTRY_COORDINATES[country];
      if (coords) {
        const isTopCountry = country === topCountryName;
        
        // Add background circle for better visibility
        const bgCircle = document.createElementNS(ns, 'circle');
        bgCircle.setAttribute('cx', coords.x);
        bgCircle.setAttribute('cy', coords.y);
        bgCircle.setAttribute('r', isTopCountry ? 30 : 20);
        bgCircle.setAttribute('fill', '#fff');
        bgCircle.setAttribute('opacity', '0.8');
        bgCircle.setAttribute('stroke', '#ddd');
        bgCircle.setAttribute('stroke-width', '1');
        bgCircle.classList.add('country-bg');
        worldMap.appendChild(bgCircle);
        
        // Draw circle for country
        const circle = document.createElementNS(ns, 'circle');
        circle.setAttribute('cx', coords.x);
        circle.setAttribute('cy', coords.y);
        circle.setAttribute('r', isTopCountry ? 25 : 15);
        circle.setAttribute('fill', isTopCountry ? '#ff0000' : '#ff6666');
        circle.setAttribute('opacity', isTopCountry ? '0.9' : '0.7');
        circle.setAttribute('stroke', isTopCountry ? '#cc0000' : '#cc3333');
        circle.setAttribute('stroke-width', isTopCountry ? '3' : '2');
        circle.classList.add('country-marker');
        worldMap.appendChild(circle);
        
        // Add label with country name and percentage
        const label = document.createElementNS(ns, 'text');
        label.setAttribute('x', coords.x);
        label.setAttribute('y', coords.y + (isTopCountry ? 45 : 35));
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('font-size', isTopCountry ? '16' : '13');
        label.setAttribute('font-weight', isTopCountry ? 'bold' : '600');
        label.setAttribute('fill', '#000');
        label.setAttribute('font-family', 'Pretendard, sans-serif');
        label.textContent = `${country} ${percentage}%`;
        label.classList.add('country-label');
        worldMap.appendChild(label);
      }
    });
  }
  
  // Update tool list active state
  const toolItems = document.querySelectorAll('.tool-item');
  toolItems.forEach(item => {
    if (item.dataset.tool === toolKey) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Render category list with tools
function renderCategoryList() {
  const categoryList = document.getElementById('categoryList');
  if (!categoryList) return;
  
  // Group tools by category
  const toolsByCategory = {};
  AI_TOOLS.forEach(tool => {
    if (!toolsByCategory[tool.category]) {
      toolsByCategory[tool.category] = [];
    }
    toolsByCategory[tool.category].push(tool);
  });
  
  categoryList.innerHTML = '';
  
  // Create category cards
  Object.keys(toolsByCategory).forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.className = 'category-card-title';
    categoryTitle.textContent = category;
    categoryCard.appendChild(categoryTitle);
    
    const toolCount = document.createElement('p');
    toolCount.className = 'category-card-count';
    toolCount.textContent = `${toolsByCategory[category].length} tools`;
    categoryCard.appendChild(toolCount);
    
    // Remove tool list - tools will be shown in sphere view only
    
    categoryCard.addEventListener('click', () => {
      selectCategory(category, toolsByCategory[category]);
    });
    
    categoryList.appendChild(categoryCard);
  });
}

// Select category and trigger animation
function selectCategory(category, tools) {
  // Go back to sphere view
  const heroSection = document.getElementById('heroSection');
  const jobInputSection = document.getElementById('jobInputSection');
  if (heroSection && jobInputSection) {
    jobInputSection.style.display = 'none';
    heroSection.style.display = 'block';
    
    // Trigger red ball animation
    animateRedBallsToTools(tools);
  }
}

// Animate red balls from center sphere to recommended tools
function animateRedBallsToTools(recommendedTools) {
  if (!sphereGroup || !centerSphere || !sphereScene || !sphereRenderer) return;
  
  // Reset previous red tools
  resetToolColors();
  redToolGroups = [];
  isCenteringRedTools = false;
  
  // Get tool names from recommended tools
  const recommendedToolNames = recommendedTools.map(tool => tool.name);
  
  // Find toolGroups for recommended tools
  const recommendedToolGroups = [];
  sphereGroup.children.forEach(toolGroup => {
    if (toolGroup.userData && toolGroup.userData.tool) {
      if (recommendedToolNames.includes(toolGroup.userData.tool.name)) {
        recommendedToolGroups.push(toolGroup);
      }
    }
  });
  
  if (recommendedToolGroups.length === 0) {
    console.warn('No matching tool groups found for recommended tools');
    return;
  }
  
  // Store recommended tool groups
  redToolGroups = recommendedToolGroups;
  
  // Create red ball geometry and material (reuse for performance)
  const ballGeometry = new THREE.SphereGeometry(0.15, 16, 16);
  const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  
  let completedAnimations = 0;
  const totalAnimations = recommendedToolGroups.length;
  
  // Animate balls to each recommended tool
  recommendedToolGroups.forEach((toolGroup, index) => {
    setTimeout(() => {
      const targetPosition = toolGroup.position.clone();
      
      // Create a new ball for each tool
      const ball = new THREE.Mesh(ballGeometry, ballMaterial.clone());
      ball.position.copy(centerSphere.position);
      sphereScene.add(ball);
      
      // Animate ball to target
      const startTime = Date.now();
      const duration = 1200; // 1.2 seconds
      const startPos = centerSphere.position.clone();
      
      function animateBall() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        // Interpolate position
        ball.position.lerpVectors(startPos, targetPosition, easeOutCubic);
        
        if (progress < 1) {
          requestAnimationFrame(animateBall);
        } else {
          // Ball reached target - change circle to red
          const circle = toolGroup.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.CircleGeometry);
          if (circle) {
            circle.material.color.setHex(0xff0000);
            // Also change stroke to red
            const strokeGroup = toolGroup.children.find(child => child instanceof THREE.Group && child !== circle);
            if (strokeGroup) {
              strokeGroup.children.forEach(line => {
                if (line.material) {
                  line.material.color.setHex(0xff0000);
                }
              });
            }
          }
          
          // Remove ball after a short delay
          setTimeout(() => {
            sphereScene.remove(ball);
            ball.geometry.dispose();
            ball.material.dispose();
          }, 300);
          
          completedAnimations++;
          
          // No centering animation - tools stay in their original positions
        }
        
        // Continue rendering in animation loop
        if (sphereAnimationId) {
          sphereRenderer.render(sphereScene, sphereCamera);
        }
      }
      
      animateBall();
    }, index * 150); // Stagger animations by 150ms
  });
}

// Function to reset all tool circles to white
function resetToolColors() {
  if (!sphereGroup) return;
  
  sphereGroup.children.forEach(toolGroup => {
    if (toolGroup.userData && toolGroup.userData.tool) {
      const circle = toolGroup.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.CircleGeometry);
      const strokeGroup = toolGroup.children.find(child => child instanceof THREE.Group && child.children.every(c => c instanceof THREE.Line));
      if (circle) {
        circle.material.color.setHex(0xffffff); // White color
      }
      if (strokeGroup) {
        strokeGroup.children.forEach(line => {
          if (line.material) {
            line.material.color.setHex(0x000000); // Black stroke
          }
        });
      }
      // Reset scale
      if (toolGroup.userData.originalScale) {
        toolGroup.scale.set(
          toolGroup.userData.originalScale,
          toolGroup.userData.originalScale,
          toolGroup.userData.originalScale
        );
      }
    }
  });
}

// Center red tools in the middle of the screen
function centerRedTools() {
  if (redToolGroups.length === 0 || !sphereCamera) return;
  
  isCenteringRedTools = true;
  
  // Camera is at z=2.0 looking at origin (0,0,0)
  // Position tools in front of camera, closer to camera than origin
  // Use simple local coordinates relative to sphereGroup (which is at origin)
  const count = redToolGroups.length;
  const radius = 0.8; // Radius of circle layout (smaller for better visibility)
  const angleStep = (Math.PI * 2) / count;
  const targetZ = -0.5; // Position in front of camera (negative Z, between camera and origin)
  
  redToolGroups.forEach((toolGroup, index) => {
    // Store original position (in local space relative to sphereGroup)
    toolGroup.userData.centerStartPosition = toolGroup.position.clone();
    toolGroup.userData.originalScale = toolGroup.scale.clone() || new THREE.Vector3(1, 1, 1);
    
    // Calculate target position in a circle around center, in front of camera
    const angle = index * angleStep;
    const targetX = Math.cos(angle) * radius;
    const targetY = Math.sin(angle) * radius;
    
    toolGroup.userData.centerTargetPosition = new THREE.Vector3(targetX, targetY, targetZ);
    toolGroup.userData.centerStartTime = Date.now();
    toolGroup.userData.isCentering = true;
    toolGroup.userData.isCentered = false;
  });
}

// Show tool details modal
function showToolDetails(tool) {
  const modal = document.getElementById('tool-details-modal');
  const nameEl = document.getElementById('tool-details-name');
  const categoryEl = document.getElementById('tool-details-category');
  const descriptionEl = document.getElementById('tool-details-description');
  const featuresEl = document.getElementById('tool-details-features');
  const usersEl = document.getElementById('tool-details-users');
  
  if (!modal || !nameEl) return;
  
  nameEl.textContent = tool.name;
  categoryEl.textContent = tool.category;
  descriptionEl.textContent = tool.description;
  
  // Features tags
  featuresEl.innerHTML = '';
  if (tool.features && tool.features.length > 0) {
    const featuresTitle = document.createElement('h3');
    featuresTitle.textContent = '주요 기능';
    featuresTitle.className = 'tool-details-section-title';
    featuresEl.appendChild(featuresTitle);
    
    const featuresTags = document.createElement('div');
    featuresTags.className = 'tool-details-tags';
    tool.features.forEach(feature => {
      const tag = document.createElement('span');
      tag.className = 'tool-details-tag';
      tag.textContent = feature;
      featuresTags.appendChild(tag);
    });
    featuresEl.appendChild(featuresTags);
  }
  
  // Users tags
  usersEl.innerHTML = '';
  if (tool.users && tool.users.length > 0) {
    const usersTitle = document.createElement('h3');
    usersTitle.textContent = '사용 분야';
    usersTitle.className = 'tool-details-section-title';
    usersEl.appendChild(usersTitle);
    
    const usersTags = document.createElement('div');
    usersTags.className = 'tool-details-tags';
    tool.users.forEach(user => {
      const tag = document.createElement('span');
      tag.className = 'tool-details-tag';
      tag.textContent = user;
      usersTags.appendChild(tag);
    });
    usersEl.appendChild(usersTags);
  }
  
  modal.style.display = 'flex';
  
  // Close button
  const closeBtn = modal.querySelector('.tool-details-close');
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.style.display = 'none';
    };
  }
  
  // Close on background click
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
}

// Initialize sphere animation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSphereAnimation);
} else {
  initSphereAnimation();
}

const heroSection = document.getElementById('heroSection');
const matchSection = document.getElementById('matchSection');
const matchWordEl = document.getElementById('matchWord');
const jobInputSection = document.getElementById('jobInputSection');
const logoTopRight = document.querySelector('.logo-top-right');
const aboutButton = document.getElementById('about-button');

const ALL_TASKS = Array.from(new Set(AI_TOOLS.flatMap((tool) => tool.taskTypes))).sort((a, b) =>
  a.localeCompare(b, 'ko')
);

const API_BASE_URL = (window.AIM_API_BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const API_ENDPOINT = `${API_BASE_URL}/api/recommend`;

const JOB_WORDS = [
  'Sales',
  'Marketing',
  'Research',
  'Production',
  'Planning',
  'Finance',
  'Coding',
  'Design',
  'PR'
];
const JOB_WORD_VISIBLE_MS = 2000;
const JOB_WORD_TRANSITION_MS = 350;
let jobWordIndex = 0;
let jobWordTimers = [];

function clearJobWordTimers() {
  jobWordTimers.forEach((id) => clearTimeout(id));
  jobWordTimers = [];
}

function cycleJobWord() {
  if (!jobWordEl) return;

  jobWordEl.classList.remove('job-word-active');
  // force reflow to restart transition
  void jobWordEl.offsetWidth;

  jobWordEl.textContent = JOB_WORDS[jobWordIndex];
  jobWordEl.classList.add('job-word-active');

  const holdTimer = setTimeout(() => {
    jobWordEl.classList.remove('job-word-active');

    const transitionTimer = setTimeout(() => {
      jobWordIndex = (jobWordIndex + 1) % JOB_WORDS.length;
      cycleJobWord();
    }, JOB_WORD_TRANSITION_MS);

    jobWordTimers.push(transitionTimer);
  }, JOB_WORD_VISIBLE_MS);

  jobWordTimers.push(holdTimer);
}

function startJobWordCycle() {
  if (!jobWordEl) return;
  clearJobWordTimers();
  jobWordIndex = 0;
  cycleJobWord();
}

const MATCH_WORD_VISIBLE_MS = 2000;
const MATCH_WORD_TRANSITION_MS = 350;
let matchWordIndex = 0;
let matchWordTimers = [];
let matchWordCycleActive = false;

function clearMatchWordTimers() {
  matchWordTimers.forEach((id) => clearTimeout(id));
  matchWordTimers = [];
}

function cycleMatchWord() {
  if (!matchWordEl) return;

  matchWordEl.classList.remove('match-word-active');
  void matchWordEl.offsetWidth;

  matchWordEl.textContent = JOB_WORDS[matchWordIndex];
  matchWordEl.style.minWidth = 'auto';
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const wordWidth = matchWordEl.scrollWidth;
      matchWordEl.style.minWidth = `${wordWidth}px`;
      matchWordEl.classList.add('match-word-active');
    });
  });

  const holdTimer = setTimeout(() => {
    matchWordEl.classList.remove('match-word-active');

    const transitionTimer = setTimeout(() => {
      matchWordIndex = (matchWordIndex + 1) % JOB_WORDS.length;
      cycleMatchWord();
    }, MATCH_WORD_TRANSITION_MS);

    matchWordTimers.push(transitionTimer);
  }, MATCH_WORD_VISIBLE_MS);

  matchWordTimers.push(holdTimer);
}

function startMatchWordCycle() {
  if (!matchWordEl || matchWordCycleActive) return;
  matchWordCycleActive = true;
  clearMatchWordTimers();
  matchWordIndex = 0;
  cycleMatchWord();
}

function stopMatchWordCycle() {
  matchWordCycleActive = false;
  clearMatchWordTimers();
  if (matchWordEl) {
    matchWordEl.classList.remove('match-word-active');
    matchWordEl.textContent = '';
    matchWordEl.style.minWidth = '';
  }
}

function handleScroll() {
  if (!matchSection) return;

  const rect = matchSection.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

  if (isVisible && !matchWordCycleActive) {
    startMatchWordCycle();
  } else if (!isVisible && matchWordCycleActive) {
    stopMatchWordCycle();
  }

  // 로고 표시/숨김 처리
  if (logoTopRight) {
    const matchRect = matchSection?.getBoundingClientRect();
    const isMatchVisible = matchRect && matchRect.top < window.innerHeight * 0.8 && matchRect.bottom > 0;

    if (isMatchVisible) {
      logoTopRight.style.display = 'none';
    } else {
      logoTopRight.style.display = 'block';
    }
  }
}

// Remove scroll event listeners since we're not using scroll anymore
// window.addEventListener('scroll', handleScroll);
// window.addEventListener('resize', handleScroll);

if (matchSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !matchWordCycleActive) {
          startMatchWordCycle();
        } else if (!entry.isIntersecting && matchWordCycleActive) {
          stopMatchWordCycle();
        }

        if (logoTopRight) {
          if (entry.isIntersecting) {
            logoTopRight.style.display = 'none';
          } else {
              logoTopRight.style.display = 'block';
          }
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(matchSection);
}

// Traffic data
const TRAFFIC_DATA = {
  chatgpt: {
    name: 'ChatGPT',
    monthlyVisitors: '약 62억 회',
    avgVisitTime: '6분 25초',
    pagesPerVisit: '3.84페이지',
    bounceRate: '31.18%',
    countries: {
      '미국': 19.78,
      '인도': 7.03,
      '브라질': 5.24,
      '일본': 3.80,
      '영국': 3.34
    },
    trafficSources: {
      '직접 방문': 76.80,
      '검색': 18.26,
      '추천 링크': 4.29,
      '소셜 미디어': 0.32,
      '디스플레이 광고': 0.23,
      '이메일': 0.09
    },
    topKeywords: [
      { keyword: 'chatgpt', searches: '2억 1,060만', cpc: '$0.14' },
      { keyword: 'chat gpt', searches: '1억 1,340만', cpc: '$0.14' },
      { keyword: 'gpt', searches: '2,290만', cpc: '$0.14' }
    ]
  },
  gemini: {
    name: 'Google Gemini',
    monthlyVisitors: '12억',
    avgVisitTime: '7분 8초',
    pagesPerVisit: '4.52',
    bounceRate: '28.96%',
    countries: {
      '미국': 15.36,
      '인도': 7.91,
      '브라질': 7.07,
      '일본': 5.76,
      '대한민국': 5.14
    },
    trafficSources: {
      '직접': 76.00,
      '검색': 18.44,
      '추천': 4.74,
      '소셜': 0.36,
      '디스플레이 광고': 0.29,
      '이메일': 0.17
    }
  },
  claude: {
    name: 'Claude',
    monthlyVisitors: '1억 9700만 명',
    avgVisitTime: '5분 59초',
    pagesPerVisit: '3.93 페이지',
    bounceRate: '29.46%',
    countries: {
      '미국': 32.34,
      '인도': 6.48,
      '영국': 4.55,
      '프랑스': 3.01,
      '대한민국': 2.95
    },
    trafficSources: {
      '직접': 76.95,
      '검색': 19.67,
      '추천': 2.80,
      '소셜': 0.36,
      '디스플레이 광고': 0.19,
      '이메일': 0.03
    },
    topKeywords: [
      { keyword: 'claude', searches: '770만회', cpc: '$0.48' },
      { keyword: 'claude ai', searches: '460만회', cpc: '$0.46' }
    ]
  },
  perplexity: {
    name: 'Perplexity AI',
    monthlyVisitors: '약 2억 1,890만',
    avgVisitTime: '4분 24초',
    pagesPerVisit: '3.77',
    bounceRate: '31.64%',
    countries: {
      '인도': 21.96,
      '미국': 18.01,
      '독일': 3.93,
      '인도네시아': 3.60,
      '러시아': 3.33
    },
    trafficSources: {
      '직접 접속': 71.39,
      '검색': 25.90,
      '추천': 2.03,
      '소셜': 0.44,
      '디스플레이 광고': 0.17,
      '이메일': 0.07
    },
    topKeywords: [
      { keyword: 'perplexity', searches: '약 1,540만', cpc: '$0.63' },
      { keyword: 'comet ai browser', searches: '약 200만', cpc: '' }
    ]
  },
  deepseek: {
    name: 'DeepSeek',
    monthlyVisitors: '약 3억 5,530만 명',
    avgVisitTime: '5분 21초',
    pagesPerVisit: '3.48',
    bounceRate: '34.41%',
    countries: {
      '중국': 37.75,
      '러시아': 9.34,
      '미국': 6.78,
      '브라질': 4.17,
      '홍콩': 3.05
    },
    trafficSources: {
      '직접 접속': 70.50,
      '검색 엔진': 26.56,
      '추천 링크': 2.14,
      '소셜 미디어': 0.68,
      '디스플레이 광고': 0.08,
      '이메일': 0.03
    },
    topKeywords: [
      { keyword: 'deepseek', searches: '1,900만', cpc: '$0.45' }
    ]
  }
};

// Country coordinates for world map (simplified)
const COUNTRY_COORDINATES = {
  '미국': { x: 200, y: 200 },
  '인도': { x: 550, y: 280 },
  '브라질': { x: 350, y: 380 },
  '일본': { x: 750, y: 220 },
  '영국': { x: 450, y: 150 },
  '중국': { x: 650, y: 200 },
  '러시아': { x: 600, y: 100 },
  '대한민국': { x: 720, y: 210 },
  '프랑스': { x: 470, y: 170 },
  '독일': { x: 500, y: 160 },
  '인도네시아': { x: 680, y: 350 },
  '홍콩': { x: 680, y: 240 }
};

// About button click handler
if (aboutButton) {
  // Add click handler to about button container
  aboutButton.addEventListener('click', (e) => {
    // Check if traffic button was clicked
    const trafficButton = document.getElementById('traffic-button');
    if (e.target === trafficButton || e.target.classList.contains('traffic-button')) {
      e.stopPropagation();
      showTrafficSection();
    } else if (e.target.textContent === 'about' || e.target.closest('span:not(.traffic-button)')) {
      showMatchSection();
    }
  });
  
  // Also add separate handler to traffic button if it exists
  const trafficButton = document.getElementById('traffic-button');
  if (trafficButton) {
    trafficButton.addEventListener('click', (e) => {
      e.stopPropagation();
      showTrafficSection();
    });
  }
}

// Back button handlers
const backButtonMatch = document.getElementById('backButtonMatch');
const backButtonJob = document.getElementById('backButtonJob');
const backButtonTraffic = document.getElementById('backButtonTraffic');

if (backButtonMatch) {
  backButtonMatch.addEventListener('click', () => {
    showHeroSection();
  });
}

if (backButtonJob) {
  backButtonJob.addEventListener('click', () => {
    showHeroSection();
  });
}

if (backButtonTraffic) {
  backButtonTraffic.addEventListener('click', () => {
    showHeroSection();
  });
}

// Tool list click handlers - initialize when traffic section is shown
function initToolListHandlers() {
  const toolItems = document.querySelectorAll('.tool-item');
  toolItems.forEach(item => {
    // Remove existing listeners by cloning
    const newItem = item.cloneNode(true);
    item.parentNode.replaceChild(newItem, item);
    
    newItem.addEventListener('click', () => {
      const toolKey = newItem.dataset.tool;
      showTrafficData(toolKey);
    });
  });
}

// ESC key handler for going back
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const matchSection = document.getElementById('matchSection');
    const jobInputSection = document.getElementById('jobInputSection');
    const trafficSection = document.getElementById('trafficSection');
    
    if (matchSection && matchSection.style.display !== 'none') {
      showHeroSection();
    } else if (jobInputSection && jobInputSection.style.display !== 'none') {
      showHeroSection();
    } else if (trafficSection && trafficSection.style.display !== 'none') {
      showHeroSection();
    }
  }
});

function updateTaskSuggestions(jobRole) {
  datalist.innerHTML = '';
  let suggestions = ALL_TASKS;

  if (jobRole) {
    const filteredTasks = new Set();
    AI_TOOLS.forEach((tool) => {
      if (tool.jobRoles.includes(jobRole)) {
        tool.taskTypes.forEach((task) => filteredTasks.add(task));
      }
    });
    if (filteredTasks.size > 0) {
      suggestions = Array.from(filteredTasks).sort((a, b) => a.localeCompare(b, 'ko'));
    }
  }

  suggestions.forEach((task) => {
    const option = document.createElement('option');
    option.value = task;
    datalist.appendChild(option);
  });
}

function filterTools(jobRole, taskType) {
  return AI_TOOLS.filter((tool) => {
    const matchesJob = jobRole ? tool.jobRoles.includes(jobRole) : true;
    const matchesTask = taskType
      ? tool.taskTypes.some((task) => task.includes(taskType) || taskType.includes(task))
      : true;
    return matchesJob && matchesTask;
  }).sort((a, b) => a.name.localeCompare(b.name, 'en'));
}

function renderTools(tools, { jobRole, taskType }) {
  toolList.innerHTML = '';

  if (tools.length === 0) {
    helpText.textContent = '조건에 맞는 툴이 없습니다. 다른 업무 유형을 시도해 보세요.';
    return;
  }

  helpText.textContent = `${tools.length}개의 툴을 찾았어요. 세부 기능과 태그를 확인해 보세요.`;

  tools.forEach((tool) => {
    const card = document.createElement('article');
    card.className = 'tool-card';

    const title = document.createElement('h3');
    title.textContent = tool.name;
    card.appendChild(title);

    const summary = document.createElement('p');
    summary.textContent = tool.summary;
    card.appendChild(summary);

    const industries = document.createElement('p');
    industries.className = 'help-text';
    industries.textContent = `적용 산업: ${tool.industries.join(', ')}`;
    card.appendChild(industries);

    const tagsWrapper = document.createElement('div');
    tagsWrapper.className = 'tags';

    tool.taskTypes.forEach((task) => {
      const tag = document.createElement('span');
      const isHighlight = taskType && (task.includes(taskType) || taskType.includes(task));
      tag.className = `tag${isHighlight ? ' highlight' : ''}`;
      tag.textContent = task;
      tagsWrapper.appendChild(tag);
    });

    if (jobRole) {
      const roleTag = document.createElement('span');
      roleTag.className = 'tag';
      roleTag.textContent = `직무: ${jobRole}`;
      tagsWrapper.appendChild(roleTag);
    }

    card.appendChild(tagsWrapper);
    toolList.appendChild(card);
  });
}

function getTopToolsForPrompt(jobRole, taskType) {
  const filtered = filterTools(jobRole, taskType);
  if (filtered.length > 0) {
    return filtered.slice(0, 5);
  }
  return AI_TOOLS.slice(0, 5);
}

async function requestAIRecommendation({ jobRole, taskType, prompt }) {
  const toolsForRequest = getTopToolsForPrompt(jobRole, taskType);

  const payload = {
    jobRole: jobRole || '미선택',
    taskType: taskType || '미입력',
    prompt,
    tools: toolsForRequest
  };

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      const message = errorPayload?.error || 'AI 추천 API 호출에 실패했습니다.';
      throw new Error(message);
    }

    const data = await response.json();
    return {
      success: true,
      message: data.recommendation || 'AI 응답이 비어 있습니다.'
    };
  } catch (error) {
    return {
      success: false,
      message: `AI 추천 생성 중 오류가 발생했습니다: ${error.message}`
    };
  }
}

function smoothScrollTo(element) {
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

jobSelect.addEventListener('change', (event) => {
  updateTaskSuggestions(event.target.value);
});

showDefaultBtn.addEventListener('click', () => {
  const jobRole = jobSelect.value;
  const taskType = taskInput.value.trim();
  const tools = filterTools(jobRole, taskType);
  renderTools(tools, { jobRole, taskType });
});

aiShortcutBtn.addEventListener('click', () => {
  smoothScrollTo(document.querySelector('.ai-consult'));
  aiPrompt.focus();
});

generateInsightBtn.addEventListener('click', async () => {
  const jobRole = jobSelect.value;
  const taskType = taskInput.value.trim();
  const prompt = aiPrompt.value.trim();

  if (!prompt) {
    apiStatus.textContent = '자연어 설명을 입력해 주세요.';
    apiStatus.classList.add('error');
    return;
  }

  apiStatus.textContent = 'AI가 분석 중입니다...';
  apiStatus.classList.remove('error');
  aiRecommendation.hidden = true;

  const result = await requestAIRecommendation({ jobRole, taskType, prompt });

  if (result.success) {
    aiRecommendation.textContent = result.message;
    aiRecommendation.hidden = false;
    apiStatus.textContent = '분석이 완료되었습니다.';
  } else {
    apiStatus.textContent = result.message;
    apiStatus.classList.add('error');
  }
});

// 초기화
updateTaskSuggestions('');
renderTools([], { jobRole: '', taskType: '' });

// 새로운 직무 입력 섹션
const jobPositionInput = document.getElementById('jobPositionInput');
const helpDescriptionInput = document.getElementById('helpDescriptionInput');
const findToolsBtn = document.getElementById('findToolsBtn');
const toolRecommendations = document.getElementById('toolRecommendations');
const recommendedToolsList = document.getElementById('recommendedToolsList');

async function findAITools() {
  const jobPosition = jobPositionInput?.value.trim() || '';
  const helpDescription = helpDescriptionInput?.value.trim() || '';

  if (!jobPosition && !helpDescription) {
    alert('Please enter at least one field (job position or help description)');
    return;
  }

  if (findToolsBtn) {
    findToolsBtn.disabled = true;
    findToolsBtn.textContent = 'Finding...';
  }

  try {
    const prompt = `Job Position: ${jobPosition}\nHelp Needed: ${helpDescription}`;
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jobRole: jobPosition || 'General',
        taskType: helpDescription || 'General assistance',
        prompt: prompt,
        tools: AI_TOOLS
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const recommendation = data.recommendation || data.raw?.recommendation || '';

    // 추천 결과를 파싱하여 툴 목록 표시
    displayRecommendedTools(recommendation, jobPosition, helpDescription);
  } catch (error) {
    console.error('Error finding AI tools:', error);
    alert('Failed to find AI tools. Please try again.');
  } finally {
    if (findToolsBtn) {
      findToolsBtn.disabled = false;
      findToolsBtn.textContent = 'Find AI Tools';
    }
  }
}

function displayRecommendedTools(recommendation, jobPosition, helpDescription) {
  if (!recommendedToolsList || !toolRecommendations) return;

  recommendedToolsList.innerHTML = '';

  // 추천 텍스트에서 툴 이름 추출 및 매칭
  const mentionedTools = [];
  AI_TOOLS.forEach((tool) => {
    if (recommendation.toLowerCase().includes(tool.name.toLowerCase())) {
      mentionedTools.push(tool);
    }
  });

  // 매칭된 툴이 없으면 필터링된 툴 사용
  let toolsToDisplay = mentionedTools;
  if (toolsToDisplay.length === 0) {
    toolsToDisplay = filterTools(
      jobPosition || undefined,
      helpDescription || undefined
    ).slice(0, 6);
  }

  if (toolsToDisplay.length === 0) {
    recommendedToolsList.innerHTML = '<p style="color: var(--text-secondary); font-size: 1.6rem;">No tools found. Please try different keywords.</p>';
  } else {
    toolsToDisplay.forEach((tool) => {
      const card = document.createElement('div');
      card.className = 'recommended-tool-card';

      const title = document.createElement('h3');
      title.textContent = tool.name;
      card.appendChild(title);

      const summary = document.createElement('p');
      summary.className = 'tool-summary';
      summary.textContent = tool.summary;
      card.appendChild(summary);

      const features = document.createElement('p');
      features.className = 'tool-features';
      features.innerHTML = `<strong>Key Features:</strong> ${tool.taskTypes.slice(0, 3).join(', ')}${tool.taskTypes.length > 3 ? '...' : ''}`;
      card.appendChild(features);

      recommendedToolsList.appendChild(card);
    });
  }

  toolRecommendations.hidden = false;
}

if (findToolsBtn) {
  findToolsBtn.addEventListener('click', findAITools);
}

if (helpDescriptionInput) {
  helpDescriptionInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      findAITools();
    }
  });
}

if (jobPositionInput) {
  jobPositionInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      findAITools();
    }
  });
}
