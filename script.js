// AI Tools data based on provided categories
const AI_TOOLS = [
  // 생성형 AI 챗봇 및 어시스턴트
  { name: 'ChatGPT', category: '생성형 AI 챗봇', description: '자연어 대화, 정보 검색, 문서와 코드 자동 생성', detailedDescription: 'OpenAI가 개발한 대규모 언어 모델로, GPT-4 기반의 고도화된 대화형 AI입니다. 복잡한 질문에 대한 답변, 창의적인 글쓰기, 코드 작성 및 디버깅, 문서 요약 등 다양한 작업을 수행할 수 있습니다. 실시간 정보 검색과 멀티모달 기능을 지원하여 텍스트와 이미지를 동시에 처리할 수 있습니다.', features: ['자연어 대화', '정보 검색', '문서 생성', '코드 생성', '고객 응대', '자료 요약'], users: ['전 직군', '사무직', '학생', '개발자'], url: 'https://chat.openai.com' },
  { name: 'Gemini', category: '생성형 AI 챗봇', description: '자연어 대화, 정보 검색, 문서와 코드 자동 생성', detailedDescription: 'Google이 개발한 차세대 멀티모달 AI 모델로, 텍스트, 이미지, 오디오, 비디오를 통합적으로 이해하고 처리할 수 있습니다. Google의 방대한 검색 데이터와 통합되어 최신 정보를 제공하며, 창의적인 콘텐츠 생성부터 복잡한 문제 해결까지 다양한 작업을 지원합니다.', features: ['자연어 대화', '정보 검색', '문서 생성', '코드 생성', '고객 응대', '자료 요약'], users: ['전 직군', '사무직', '학생', '개발자'], url: 'https://gemini.google.com' },
  { name: 'Claude', category: '생성형 AI 챗봇', description: '자연어 대화, 정보 검색, 문서와 코드 자동 생성', detailedDescription: 'Anthropic이 개발한 안전하고 유용한 AI 어시스턴트로, 장문의 문서 분석과 요약에 특화되어 있습니다. 최대 200K 토큰의 긴 컨텍스트를 처리할 수 있어 긴 문서나 코드베이스 분석에 적합합니다. 안전성과 정확성을 중시하는 설계로, 신뢰할 수 있는 정보 제공과 윤리적인 AI 사용을 보장합니다.', features: ['자연어 대화', '정보 검색', '문서 생성', '코드 생성', '고객 응대', '자료 요약'], users: ['전 직군', '사무직', '학생', '개발자'], url: 'https://claude.ai' },
  { name: 'Grok', category: '생성형 AI 챗봇', description: '자연어 대화, 정보 검색, 문서와 코드 자동 생성', detailedDescription: 'xAI가 개발한 실시간 정보 접근이 가능한 AI 챗봇으로, X(트위터) 플랫폼과 통합되어 있습니다. 최신 트렌드와 실시간 정보를 반영한 답변을 제공하며, 유머러스하고 솔직한 대화 스타일이 특징입니다. 코딩, 창의적 글쓰기, 정보 검색 등 다양한 작업을 지원합니다.', features: ['자연어 대화', '정보 검색', '문서 생성', '코드 생성', '고객 응대', '자료 요약'], users: ['전 직군', '사무직', '학생', '개발자'], url: 'https://x.com/i/grok' },
  { name: 'Perplexity', category: '생성형 AI 챗봇', description: '자연어 대화, 정보 검색, 문서와 코드 자동 생성', detailedDescription: 'AI 기반 검색 엔진으로, 질문에 대한 답변을 제공할 때 출처가 명확한 인용과 함께 정확한 정보를 제공합니다. 실시간 웹 검색을 통해 최신 정보를 반영하며, 학술 논문부터 뉴스까지 다양한 소스를 참조합니다. 연구, 학습, 정보 조사에 최적화된 도구입니다.', features: ['자연어 대화', '정보 검색', '문서 생성', '코드 생성', '고객 응대', '자료 요약'], users: ['전 직군', '사무직', '학생', '개발자'], url: 'https://www.perplexity.ai' },
  
  // 번역 및 문서·글쓰기 보조
  { name: 'DeepL', category: '번역/문서', description: '번역, 문법/스타일 교정', detailedDescription: '신경망 기반의 고품질 번역 서비스로, 30개 이상의 언어를 지원합니다. 기계 번역 중 가장 자연스럽고 정확한 번역 품질을 제공하며, 특히 유럽 언어 간 번역에서 뛰어난 성능을 보입니다. 전문 문서, 문학 작품, 비즈니스 문서 등 다양한 분야의 번역에 활용됩니다.', features: ['번역', '문법 교정', '스타일 교정'], users: ['마케터', '학생', '번역가', '저널리스트', '크리에이터'], url: 'https://www.deepl.com' },
  { name: 'Grammarly', category: '번역/문서', description: '문법/스타일 교정, 표절 탐지', detailedDescription: 'AI 기반의 실시간 문법 및 맞춤법 검사 도구로, 브라우저 확장 프로그램과 워드 프로세서 통합을 제공합니다. 문법 오류, 스타일 개선, 톤 조정, 표절 검사 등 포괄적인 글쓰기 지원 기능을 제공합니다. 개인과 기업 모두를 위한 프리미엄 기능을 제공합니다.', features: ['문법 교정', '스타일 교정', '표절 탐지'], users: ['마케터', '학생', '저널리스트', '크리에이터'], url: 'https://www.grammarly.com' },
  { name: 'Quillbot', category: '번역/문서', description: '문서 작성 보조, 문법 교정', detailedDescription: 'AI 기반의 문장 재작성 및 요약 도구로, 같은 의미를 다양한 방식으로 표현할 수 있도록 도와줍니다. 문장 패러프레이징, 요약, 문법 검사, 번역 등 다양한 글쓰기 보조 기능을 제공합니다. 학술 논문 작성, 콘텐츠 제작, 이메일 작성 등에 활용됩니다.', features: ['문서 작성', '문법 교정', '요약'], users: ['학생', '저널리스트', '크리에이터'], url: 'https://quillbot.com' },
  { name: 'GPTZero', category: '번역/문서', description: 'AI 생성문 감별, 표절 탐지', detailedDescription: 'AI로 생성된 텍스트를 감지하는 도구로, 교육 기관과 출판사에서 활용됩니다. 문서의 AI 생성 가능성을 분석하고, 표절 여부를 검사하여 학술적 진정성을 보장합니다. 교사와 편집자가 학생 과제나 제출물의 진위를 확인하는 데 사용됩니다.', features: ['AI 생성문 감별', '표절 탐지'], users: ['학생', '교사', '저널리스트'], url: 'https://www.gptzero.me' },
  
  // 생산성 향상, 프로젝트 관리, 노트 및 협업
  { name: 'Notion', category: '생산성/협업', description: '업무 문서화, 테스크 협업, 데이터 워크플로우 관리', detailedDescription: '올인원 워크스페이스로, 문서 작성, 데이터베이스, 프로젝트 관리, 위키, 캘린더 등을 통합한 협업 플랫폼입니다. 블록 기반 에디터로 유연한 문서 구조를 만들 수 있으며, 팀 협업과 지식 관리를 위한 강력한 도구입니다. 개인부터 대기업까지 다양한 규모의 조직에서 활용됩니다.', features: ['문서화', '테스크 관리', '협업', '데이터 관리'], users: ['사무직', '기획자', '개발팀', 'PM', 'UX팀'], url: 'https://www.notion.so' },
  { name: 'Salesforce', category: '생산성/협업', description: '데이터 워크플로우 관리, 정보통합 관리', detailedDescription: '세계 최대의 CRM 플랫폼으로, 고객 관계 관리, 영업 자동화, 마케팅 캠페인 관리, 고객 서비스 등을 통합 제공합니다. 클라우드 기반 SaaS 솔루션으로, 기업의 고객 데이터를 중앙화하고 영업 프로세스를 최적화합니다. AI 기반 인사이트와 예측 분석 기능을 제공합니다.', features: ['CRM', '데이터 관리', '워크플로우'], users: ['사무직', '기획자', '영업팀'], url: 'https://www.salesforce.com' },
  { name: 'Airtable', category: '생산성/협업', description: '데이터 워크플로우 관리, 일정 및 정보통합 관리', detailedDescription: '스프레드시트와 데이터베이스의 장점을 결합한 협업 플랫폼으로, 시각적이고 유연한 데이터 관리가 가능합니다. 프로젝트 관리, 콘텐츠 캘린더, CRM, 이벤트 관리 등 다양한 용도로 활용되며, API와 자동화 기능을 통해 워크플로우를 최적화할 수 있습니다.', features: ['데이터베이스', '프로젝트 관리', '협업'], users: ['사무직', '기획자', '개발팀', 'PM'], url: 'https://www.airtable.com' },
  { name: 'Manus', category: '생산성/협업', description: '업무 문서화, 테스크 협업', detailedDescription: 'AI 기반의 지능형 문서 관리 및 협업 플랫폼으로, 문서 작성, 공유, 검색을 효율화합니다. 자연어 검색과 자동 태깅 기능으로 문서를 빠르게 찾을 수 있으며, 팀 협업과 지식 공유를 위한 통합 솔루션을 제공합니다.', features: ['문서화', '테스크 관리', '협업'], users: ['사무직', '기획자', '개발팀'], url: 'https://www.manus.ai' },
  
  // 이미지 생성/편집 및 디자인
  { name: 'Midjourney', category: '이미지/디자인', description: '텍스트 기반 고품질 이미지 생성', detailedDescription: 'Discord 기반으로 운영되는 AI 이미지 생성 플랫폼으로, 텍스트 프롬프트만으로 예술적이고 고품질의 이미지를 생성할 수 있습니다. 독특한 아트 스타일과 창의적인 이미지 생성으로 유명하며, 다양한 아트 스타일, 사진 스타일, 일러스트를 생성할 수 있습니다. 디자이너, 아티스트, 크리에이터들이 선호하는 프리미엄 AI 이미지 생성 도구입니다.', features: ['텍스트-이미지 생성', '고품질 아트', '다양한 스타일'], users: ['디자이너', '크리에이터', '아티스트', '마케터'], url: 'https://www.midjourney.com' },
  { name: 'Playground AI', category: '이미지/디자인', description: '텍스트 기반 이미지 생성 및 편집', detailedDescription: '무료로 사용할 수 있는 AI 이미지 생성 플랫폼으로, 텍스트 프롬프트로부터 고품질 이미지를 생성하고 편집할 수 있습니다. 이미지-이미지 변환, 스타일 전송, 필터 적용 등 다양한 편집 기능을 제공하며, 일일 무료 생성 횟수를 제공하여 접근성이 높습니다. 창의적인 이미지 제작과 프로토타이핑에 적합합니다.', features: ['텍스트-이미지 생성', '이미지 편집', '스타일 전송'], users: ['디자이너', '크리에이터', '마케터'], url: 'https://playgroundai.com' },
  { name: 'Leonardo AI', category: '이미지/디자인', description: '텍스트 기반 고품질 이미지 생성', detailedDescription: '게임 및 콘텐츠 제작에 특화된 AI 이미지 생성 플랫폼으로, 캐릭터, 배경, 아이템 등 게임 자산을 생성하는 데 최적화되어 있습니다. 다양한 모델과 스타일을 지원하며, 이미지 편집 및 변환 기능도 제공합니다. 게임 개발자, 콘텐츠 크리에이터, 디자이너들이 게임 자산과 마케팅 자료를 빠르게 제작하는 데 활용합니다.', features: ['텍스트-이미지 생성', '게임 자산 생성', '이미지 편집'], users: ['게임 개발자', '디자이너', '크리에이터'], url: 'https://leonardo.ai' },
  { name: 'Fotor', category: '이미지/디자인', description: '이미지 편집, 썸네일·광고소재 제작', detailedDescription: '온라인 이미지 편집 및 디자인 도구로, 전문적인 사진 편집 기능과 템플릿을 제공합니다. AI 기반 배경 제거, 필터, 효과, 텍스트 추가 등 다양한 편집 기능을 포함하며, 소셜 미디어용 이미지와 마케팅 자료 제작에 최적화되어 있습니다.', features: ['이미지 편집', '썸네일 제작', '광고소재'], users: ['디자이너', '마케터', '크리에이터', '이커머스', 'SNS 운영자'], url: 'https://www.fotor.com' },
  { name: 'remove.bg', category: '이미지/디자인', description: '이미지 배경 제거, 보정', detailedDescription: 'AI 기반의 자동 배경 제거 서비스로, 복잡한 배경도 정확하게 제거할 수 있습니다. 단 몇 초 만에 전문적인 투명 배경 이미지를 생성하며, API를 통해 대량 처리도 가능합니다. 이커머스, 마케팅, 디자인 작업에 널리 활용됩니다.', features: ['배경 제거', '이미지 보정'], users: ['디자이너', '마케터', '크리에이터', '이커머스'], url: 'https://www.remove.bg' },
  { name: 'Freepik', category: '이미지/디자인', description: '이미지·일러스트 창작, 디자인 소재', detailedDescription: '수백만 개의 벡터 그래픽, 일러스트, 사진, PSD 파일을 제공하는 디자인 리소스 플랫폼입니다. AI 이미지 생성 기능도 포함하여 창의적인 디자인 작업을 지원합니다. 프리미엄 구독으로 상업적 사용이 가능한 고품질 디자인 소재를 제공합니다.', features: ['이미지 생성', '일러스트', '디자인 소재'], users: ['디자이너', '마케터', '크리에이터'], url: 'https://www.freepik.com' },
  { name: 'Seaart', category: '이미지/디자인', description: '이미지 생성, 아트·일러스트 창작', detailedDescription: 'AI 기반 이미지 생성 플랫폼으로, 텍스트 프롬프트를 통해 고품질의 아트워크와 일러스트를 생성합니다. 다양한 아트 스타일과 모델을 지원하며, 이미지 편집 및 변환 기능도 제공합니다. 디자이너와 크리에이터의 창작 작업을 지원합니다.', features: ['이미지 생성', '아트 창작', '일러스트'], users: ['디자이너', '크리에이터'], url: 'https://www.seaart.ai' },
  { name: 'Nano Banana', category: '이미지/디자인', description: '이미지 편집, 스타일 변환', detailedDescription: 'AI 기반 이미지 스타일 변환 및 편집 도구로, 다양한 아트 스타일을 적용하고 이미지를 변환할 수 있습니다. 실시간 편집과 필터 적용 기능을 제공하며, 창의적인 이미지 제작을 지원합니다.', features: ['이미지 편집', '스타일 변환'], users: ['디자이너', '크리에이터'], url: 'https://www.nanobanana.ai' },
  { name: 'CapCut', category: '이미지/디자인', description: '영상 편집, 썸네일 제작', detailedDescription: 'ByteDance가 개발한 무료 영상 편집 앱으로, 모바일과 데스크톱 모두에서 사용 가능합니다. 자동 자막 생성, 필터, 효과, 음악 추가 등 다양한 편집 기능을 제공하며, 소셜 미디어용 숏폼 콘텐츠 제작에 최적화되어 있습니다.', features: ['영상 편집', '썸네일 제작'], users: ['크리에이터', '유튜버', '마케터'], url: 'https://www.capcut.com' },
  { name: 'Photoroom', category: '이미지/디자인', description: '이미지 배경 제거·보정, 광고소재 제작', detailedDescription: 'AI 기반 이미지 편집 도구로, 배경 제거, 배경 교체, 이미지 보정 기능을 제공합니다. 이커머스 제품 사진 편집에 특화되어 있으며, 자동화된 배치 처리 기능으로 대량의 이미지를 빠르게 편집할 수 있습니다.', features: ['배경 제거', '이미지 보정', '광고소재'], users: ['디자이너', '마케터', '이커머스'], url: 'https://www.photoroom.com' },
  { name: 'VSCO', category: '이미지/디자인', description: '이미지 보정, 스타일 변환', detailedDescription: '프로페셔널한 사진 편집 앱으로, 필름 카메라 느낌의 프리미엄 필터와 편집 도구를 제공합니다. 미니멀한 인터페이스와 고품질 필터로 크리에이터와 사진 작가들이 선호하는 도구입니다. 소셜 미디어용 이미지 제작에 적합합니다.', features: ['이미지 보정', '필터', '스타일 변환'], users: ['크리에이터', 'SNS 운영자'], url: 'https://vsco.co' },
  
  // 동영상 생성 및 편집
  { name: 'Sora', category: '동영상', description: '텍스트 기반 고품질 동영상 생성', detailedDescription: 'OpenAI가 개발한 차세대 텍스트-비디오 생성 AI 모델로, 단순한 텍스트 프롬프트만으로 최대 60초 길이의 고품질 동영상을 생성할 수 있습니다. 복잡한 장면 구성, 다중 캐릭터 상호작용, 정확한 물리 법칙 표현, 감정 표현 등이 가능하며, 영화, 광고, 교육 콘텐츠 제작에 혁신을 가져올 것으로 기대됩니다.', features: ['텍스트-비디오 생성', '고품질 영상', '복잡한 장면 구성'], users: ['크리에이터', '영상 PD', '마케터', '유튜버'], url: 'https://openai.com/sora' },
  { name: 'Veo', category: '동영상', description: '텍스트 기반 고품질 동영상 생성', detailedDescription: 'Google DeepMind가 개발한 텍스트-비디오 생성 AI 모델로, 자연스러운 움직임과 고해상도 영상을 생성합니다. 최대 60초 길이의 영상을 생성할 수 있으며, 다양한 스타일과 장르를 지원합니다. 정지 이미지에 움직임을 추가하거나 텍스트 설명으로부터 완전히 새로운 영상을 만들 수 있어, 크리에이터와 영상 제작자들에게 강력한 도구를 제공합니다.', features: ['텍스트-비디오 생성', '고해상도 영상', '이미지-비디오 변환'], users: ['크리에이터', '영상 PD', '마케터', '유튜버'], url: 'https://deepmind.google/technologies/veo/' },
  { name: 'Kling AI', category: '동영상', description: '텍스트 기반 고품질 동영상 생성', detailedDescription: '중국 쿠아이(Kuaishou)가 개발한 텍스트-비디오 생성 AI 플랫폼으로, 텍스트 프롬프트나 이미지로부터 최대 10초 길이의 고품질 동영상을 생성할 수 있습니다. 자연스러운 움직임과 사실적인 물리 법칙 표현이 특징이며, 다양한 스타일과 장르를 지원합니다. 숏폼 콘텐츠 제작, 광고, 소셜 미디어 콘텐츠 제작에 활용됩니다.', features: ['텍스트-비디오 생성', '이미지-비디오 변환', '숏폼 콘텐츠'], users: ['크리에이터', '유튜버', '마케터'], url: 'https://www.klingai.com' },
  { name: 'Wondershare Filmora', category: '동영상', description: '영상 편집, 자막 제작, 광고 및 숏폼 콘텐츠', detailedDescription: '초보자부터 전문가까지 사용할 수 있는 영상 편집 소프트웨어로, 직관적인 인터페이스와 강력한 편집 기능을 제공합니다. AI 기반 자동 자막 생성, 필터, 전환 효과, 음악 라이브러리 등을 포함하며, 유튜브와 소셜 미디어용 콘텐츠 제작에 최적화되어 있습니다.', features: ['영상 편집', '자막 제작', '효과음'], users: ['유튜버', '영상 PD', '마케터', '크리에이터'], url: 'https://filmora.wondershare.com' },
  { name: 'MediaPet', category: '동영상', description: '영상, 음성, 자막 제작', detailedDescription: 'AI 기반 멀티미디어 제작 도구로, 영상 편집, 음성 생성, 자동 자막 제작을 통합 제공합니다. 텍스트를 음성으로 변환하고, 자동 자막을 생성하며, 영상 편집까지 한 곳에서 처리할 수 있는 올인원 솔루션입니다.', features: ['영상 편집', '음성 제작', '자막'], users: ['유튜버', '크리에이터'], url: 'https://www.mediapet.ai' },
  { name: 'Tripo AI', category: '동영상', description: '영상 제작, 광고 및 숏폼 콘텐츠', detailedDescription: '3D 모델과 영상을 생성하는 AI 플랫폼으로, 텍스트나 이미지로부터 3D 콘텐츠를 만들 수 있습니다. 제품 시각화, 광고 제작, 숏폼 콘텐츠 제작에 활용되며, 고품질의 3D 애니메이션과 영상을 생성합니다.', features: ['영상 생성', '광고 제작', '숏폼 콘텐츠'], users: ['마케터', '크리에이터'], url: 'https://www.tripo3d.ai' },
  
  // 음악 생성
  { name: 'Suno', category: '음악', description: '뮤직·효과음 제작', detailedDescription: 'AI 기반 음악 생성 플랫폼으로, 텍스트 프롬프트만으로 완전한 음악 트랙을 생성할 수 있습니다. 다양한 장르와 스타일을 지원하며, 보컬과 악기 연주를 포함한 고품질 음악을 생성합니다. 크리에이터들이 저작권 걱정 없이 사용할 수 있는 음악을 제공합니다.', features: ['음악 생성', '효과음 제작'], users: ['크리에이터', '유튜버', '영상 PD'], url: 'https://www.suno.ai' },
  { name: 'AnyMusic', category: '음악', description: '뮤직·효과음 제작', detailedDescription: 'AI 음악 생성 도구로, 간단한 설명만으로 맞춤형 음악과 효과음을 생성합니다. 다양한 분위기와 장르를 지원하며, 영상 제작에 필요한 배경음악과 효과음을 빠르게 제작할 수 있습니다.', features: ['음악 생성', '효과음'], users: ['크리에이터', '유튜버'], url: 'https://www.anymusic.ai' },
  
  // 교육·튜터/문제풀이
  { name: 'Studocu', category: '교육', description: 'AI 숙제 도움, 자료 검색, 요약 정리', detailedDescription: '학생들을 위한 학습 플랫폼으로, 수백만 개의 학습 자료와 노트를 공유하고 검색할 수 있습니다. AI 기반 숙제 도움과 자료 요약 기능을 제공하며, 전 세계 대학생들의 학습 자료를 공유하는 커뮤니티입니다.', features: ['숙제 도움', '자료 검색', '요약 정리'], users: ['학생', '교사', '자기계발러'], url: 'https://www.studocu.com' },
  { name: 'Gauth', category: '교육', description: '수학/논술문제 풀이, 자료 검색', detailedDescription: 'AI 기반 수학 문제 해결 앱으로, 사진을 찍으면 즉시 해결 과정과 답을 제공합니다. 수학, 물리, 화학 등 다양한 과목의 문제를 풀어주며, 단계별 설명을 통해 학습을 돕습니다. 학생과 학부모가 활용하는 학습 보조 도구입니다.', features: ['문제 풀이', '수학 문제', '자료 검색'], users: ['학생', '교사', '학부모'], url: 'https://www.gauthmath.com' },
  { name: 'Feen AI', category: '교육', description: 'AI 숙제 도움, 자료 검색', detailedDescription: '학생들을 위한 AI 학습 어시스턴트로, 숙제 문제 해결과 학습 자료 검색을 지원합니다. 복잡한 문제를 단계별로 설명하고, 관련 학습 자료를 추천하여 학습 효율을 높입니다.', features: ['숙제 도움', '자료 검색'], users: ['학생', '자기계발러'], url: 'https://www.feen.ai' },
  { name: 'Vertech Academy', category: '교육', description: '교육 자료, 요약 정리', detailedDescription: '온라인 교육 플랫폼으로, 다양한 교육 자료와 강의를 제공합니다. AI 기반 요약 및 정리 기능으로 학습 내용을 효율적으로 관리할 수 있으며, 학생과 교사 모두를 위한 교육 도구를 제공합니다.', features: ['교육 자료', '요약 정리'], users: ['학생', '교사'], url: 'https://www.vertech.academy' },
  
  // 마케팅, CRM, 이메일/상담 자동화
  { name: 'HubSpot', category: '마케팅/CRM', description: '고객관리, 리드생성, 이메일/챗봇 응대', detailedDescription: '올인원 마케팅, 영업, 고객 서비스 플랫폼으로, CRM, 마케팅 자동화, 이메일 캠페인, 챗봇 등을 통합 제공합니다. 리드 생성부터 고객 전환까지 전체 고객 여정을 관리하며, AI 기반 인사이트와 자동화 기능으로 마케팅 효율을 극대화합니다.', features: ['CRM', '리드 생성', '이메일 자동화', '챗봇'], users: ['마케터', '영업', '고객지원', '스타트업'], url: 'https://www.hubspot.com' },
  { name: 'Jotform', category: '마케팅/CRM', description: '광고·설문 폼 자동화', detailedDescription: '드래그 앤 드롭 방식의 폼 빌더로, 설문조사, 리드 생성, 이벤트 등록 등 다양한 폼을 쉽게 만들 수 있습니다. 자동화 워크플로우와 결제 통합 기능을 제공하며, 데이터 수집과 분석을 한 곳에서 관리할 수 있습니다.', features: ['폼 생성', '설문 자동화'], users: ['마케터', '영업'], url: 'https://www.jotform.com' },
  { name: 'Gamma', category: '마케팅/CRM', description: '프레젠테이션, 브랜딩', detailedDescription: 'AI 기반 프레젠테이션 생성 도구로, 텍스트만 입력하면 자동으로 아름다운 슬라이드를 생성합니다. 인터랙티브한 웹 기반 프레젠테이션을 만들 수 있으며, 브랜드 일관성을 유지하면서 빠르게 전문적인 자료를 제작할 수 있습니다.', features: ['프레젠테이션', '브랜딩'], users: ['마케터', '기획자'], url: 'https://gamma.app' },
  { name: 'Mailmodo', category: '마케팅/CRM', description: '이메일 자동화, 마케팅 캠페인', detailedDescription: '인터랙티브 이메일 마케팅 플랫폼으로, 설문조사, 퀴즈, 캘린더 예약 등 상호작용이 가능한 이메일을 제작할 수 있습니다. 이메일 자동화와 A/B 테스트 기능을 제공하며, 높은 참여율과 전환율을 달성할 수 있습니다.', features: ['이메일 자동화', '마케팅 캠페인'], users: ['마케터', '영업'], url: 'https://www.mailmodo.com' },
  { name: 'Touchpoint', category: '마케팅/CRM', description: '고객관리, 리드생성', detailedDescription: '고객 관계 관리 및 리드 생성 플랫폼으로, 고객 데이터를 중앙화하고 영업 프로세스를 최적화합니다. 리드 추적, 고객 커뮤니케이션 관리, 영업 파이프라인 분석 기능을 제공하여 영업 효율을 높입니다.', features: ['CRM', '리드 생성'], users: ['마케터', '영업'], url: 'https://www.touchpoint.com' },
  { name: 'BrandJet', category: '마케팅/CRM', description: '브랜딩, 광고 자동화', detailedDescription: 'AI 기반 브랜딩 및 광고 자동화 플랫폼으로, 브랜드 가이드라인에 맞는 마케팅 자료를 자동으로 생성합니다. 다양한 채널에 최적화된 광고 소재를 제작하고, 브랜드 일관성을 유지하면서 마케팅 캠페인을 자동화할 수 있습니다.', features: ['브랜딩', '광고 자동화'], users: ['마케터', '스타트업'], url: 'https://www.brandjet.ai' },
  { name: 'Beacons', category: '마케팅/CRM', description: '브랜딩, 마케팅 자동화', detailedDescription: '크리에이터와 인플루언서를 위한 올인원 링크 인 바이오 플랫폼으로, 소셜 미디어 프로필에 하나의 링크로 모든 콘텐츠를 연결합니다. 이메일 수집, 제품 판매, 예약 관리 등 다양한 기능을 통합하여 개인 브랜딩과 마케팅을 자동화합니다.', features: ['브랜딩', '마케팅 자동화'], users: ['마케터', '크리에이터'], url: 'https://www.beacons.ai' },
  
  // 코딩/데브옵스/AI 에이전트
  { name: 'Cursor AI', category: '코딩/데브옵스', description: 'AI 기반 코드 에디터 및 코딩 자동화', detailedDescription: 'AI 기반 통합 개발 환경(IDE)으로, 코드 작성, 리팩토링, 디버깅, 문서화를 AI의 도움으로 수행할 수 있습니다. 코드베이스 전체를 이해하고 컨텍스트를 파악하여 정확한 코드 제안을 제공하며, 채팅 인터페이스를 통해 코드에 대한 질문과 설명을 받을 수 있습니다. 개발 생산성을 크게 향상시키는 차세대 코드 에디터입니다.', features: ['코딩 자동화', 'AI 코드 에디터', '코드 리뷰'], users: ['개발자', '데이터사이언티스트'], url: 'https://cursor.sh' },
  { name: 'OpenAI', category: '코딩/데브옵스', description: 'AI 모델/에이전트 API 사용', detailedDescription: 'GPT-4, DALL-E, Whisper 등 다양한 AI 모델의 API를 제공하는 플랫폼입니다. 개발자들이 애플리케이션에 AI 기능을 통합할 수 있도록 RESTful API와 SDK를 제공하며, 파인튜닝과 에이전트 개발을 위한 도구를 포함합니다.', features: ['AI API', '에이전트', '모델 사용'], users: ['개발자', '데이터사이언티스트', '스타트업'], url: 'https://openai.com' },
  { name: 'DeepSeek', category: '코딩/데브옵스', description: '코딩 자동화, AI 모델 사용', detailedDescription: '코딩에 특화된 AI 모델로, 코드 생성, 리뷰, 디버깅, 리팩토링을 지원합니다. 다양한 프로그래밍 언어를 이해하고, 복잡한 코드베이스를 분석하여 개발 생산성을 크게 향상시킵니다. API와 통합 개발 환경 플러그인을 제공합니다.', features: ['코딩 자동화', 'AI 모델'], users: ['개발자', '데이터사이언티스트'], url: 'https://www.deepseek.com' },
  { name: 'APIMart', category: '코딩/데브옵스', description: 'API 사용, 오픈소스 배포', detailedDescription: 'API 마켓플레이스로, 다양한 서비스의 API를 검색하고 통합할 수 있습니다. 개발자들이 필요한 API를 빠르게 찾고, 문서와 예제 코드를 통해 쉽게 통합할 수 있도록 지원합니다. 오픈소스 프로젝트 배포와 공유 기능도 제공합니다.', features: ['API', '오픈소스 배포'], users: ['개발자', '스타트업'], url: 'https://www.apimart.com' },
  { name: 'Qoder', category: '코딩/데브옵스', description: '코딩 자동화, 코드 테스트', detailedDescription: 'AI 기반 코드 자동화 및 테스트 플랫폼으로, 코드 생성, 리뷰, 테스트 케이스 작성, 버그 탐지를 자동화합니다. 다양한 프로그래밍 언어와 프레임워크를 지원하며, 개발 워크플로우를 최적화하여 코드 품질과 생산성을 향상시킵니다.', features: ['코딩 자동화', '코드 테스트'], users: ['개발자'], url: 'https://www.qoder.ai' },
  { name: 'Verdent', category: '코딩/데브옵스', description: '코딩 자동화, 오픈소스 배포', detailedDescription: '코드 자동화 및 오픈소스 프로젝트 관리 플랫폼으로, 코드 생성부터 배포까지 전체 개발 프로세스를 지원합니다. 오픈소스 프로젝트의 버전 관리, 문서화, 배포를 자동화하여 개발자들이 더 쉽게 오픈소스를 공유하고 관리할 수 있도록 합니다.', features: ['코딩 자동화', '오픈소스'], users: ['개발자', '스타트업'], url: 'https://www.verdent.ai' },
  { name: 'Macaly', category: '코딩/데브옵스', description: '코딩 자동화, AI 에이전트', detailedDescription: 'AI 에이전트 기반 코딩 자동화 도구로, 복잡한 개발 작업을 자동으로 수행합니다. 코드베이스 분석, 기능 구현, 테스트 작성 등을 AI 에이전트가 처리하며, 개발자가 고수준의 요구사항만 제공하면 자동으로 코드를 생성하고 최적화합니다.', features: ['코딩 자동화', 'AI 에이전트'], users: ['개발자'], url: 'https://www.macaly.ai' },
  
  // AI 커뮤니티/소셜·NSFW 캐릭터 챗터
  { name: 'Janitor AI', category: 'AI 커뮤니티', description: '캐릭터 챗/역할극, 가상 소셜룸', detailedDescription: 'AI 캐릭터와 대화하고 역할극을 즐길 수 있는 플랫폼으로, 사용자가 직접 캐릭터를 생성하거나 커뮤니티의 캐릭터와 상호작용할 수 있습니다. 다양한 장르와 설정의 대화를 지원하며, 가상 소셜룸에서 여러 사용자와 함께 활동할 수 있는 커뮤니티 기능을 제공합니다.', features: ['캐릭터 챗', '역할극', '소셜룸'], users: ['소셜 사용자', '팬덤', '콘텐츠 창작자'], url: 'https://www.janitorai.com' },
  { name: 'CrushOn', category: 'AI 커뮤니티', description: '캐릭터 챗/역할극, 커뮤니티 운영', detailedDescription: 'AI 캐릭터와의 대화 및 역할극 플랫폼으로, 제한 없는 대화를 지원합니다. 사용자가 캐릭터를 생성하고 커스터마이징할 수 있으며, 커뮤니티에서 다른 사용자들과 캐릭터를 공유하고 상호작용할 수 있습니다.', features: ['캐릭터 챗', '역할극', '커뮤니티'], users: ['소셜 사용자', '팬덤'], url: 'https://www.crushon.ai' },
  { name: 'Rubii', category: 'AI 커뮤니티', description: '캐릭터 챗, 가상 소셜룸', detailedDescription: 'AI 캐릭터와의 대화 및 가상 소셜 공간을 제공하는 플랫폼입니다. 다양한 캐릭터와 자연스러운 대화를 나누고, 가상 소셜룸에서 다른 사용자들과 함께 활동할 수 있습니다. 콘텐츠 창작자들이 자신만의 캐릭터를 만들어 공유할 수 있습니다.', features: ['캐릭터 챗', '소셜룸'], users: ['소셜 사용자', '콘텐츠 창작자'], url: 'https://www.rubii.ai' },
  { name: 'PolyBuzz', category: 'AI 커뮤니티', description: '캐릭터 챗, 커뮤니티 운영', detailedDescription: 'AI 캐릭터 대화 플랫폼으로, 다양한 캐릭터와의 대화와 역할극을 지원합니다. 커뮤니티 기능을 통해 사용자들이 캐릭터를 공유하고, 팬덤 활동을 즐길 수 있는 소셜 플랫폼입니다.', features: ['캐릭터 챗', '커뮤니티'], users: ['소셜 사용자', '팬덤'], url: 'https://www.polybuzz.ai' },
  { name: 'Spicychat', category: 'AI 커뮤니티', description: '캐릭터 챗/역할극', detailedDescription: '성인용 AI 캐릭터 대화 플랫폼으로, 제한 없는 대화와 역할극을 제공합니다. 다양한 캐릭터와의 상호작용을 통해 엔터테인먼트와 창의적 스토리텔링을 즐길 수 있습니다.', features: ['캐릭터 챗', '역할극'], users: ['소셜 사용자', '팬덤'], url: 'https://www.spicychat.ai' },
  
  // 데이터/웹 자동화
  { name: 'Browser Cash', category: '데이터/웹', description: '사이트 크롤링, 데이터 추출, 웹 자동화', detailedDescription: '웹 크롤링 및 데이터 추출 자동화 플랫폼으로, 복잡한 웹사이트에서 데이터를 수집하고 정제할 수 있습니다. 스케줄링, 데이터 변환, API 연동 기능을 제공하며, 마케팅 데이터 수집, 경쟁사 분석, 리서치 작업에 활용됩니다.', features: ['크롤링', '데이터 추출', '웹 자동화'], users: ['데이터 분석가', '리서처', '마케팅팀', 'SEO팀'], url: 'https://www.browsercash.ai' },
  { name: 'NextBrowser', category: '데이터/웹', description: '웹 자동화, 퍼널 최적화', detailedDescription: '웹 자동화 및 퍼널 최적화 도구로, 웹사이트의 사용자 행동을 분석하고 자동화 작업을 수행합니다. 마케팅 퍼널 최적화, A/B 테스트, 사용자 여정 분석 기능을 제공하여 전환율을 향상시킵니다.', features: ['웹 자동화', '퍼널 최적화'], users: ['마케팅팀', 'SEO팀'], url: 'https://www.nextbrowser.ai' },
  { name: 'Claspo', category: '데이터/웹', description: '데이터 추출, 웹 자동화', detailedDescription: '웹 데이터 추출 및 자동화 플랫폼으로, 구조화된 데이터를 빠르게 수집하고 처리할 수 있습니다. 다양한 데이터 소스에서 정보를 추출하고, 자동화된 워크플로우를 통해 데이터를 정제하고 분석할 수 있습니다.', features: ['데이터 추출', '웹 자동화'], users: ['데이터 분석가', '리서처'], url: 'https://www.claspo.io' }
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
let cameraAnimationDuration = 3500; // 3.5 seconds
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
  const radius = 4.0; // Larger sphere to prevent overlapping
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
    const circleGeometry = new THREE.CircleGeometry(0.4, 256); // Smaller circle to prevent overlapping
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
    const strokeRadius = 0.4;
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
    const textSize = 64; // Fixed text size for all tools - increased for better visibility
    const dpr = Math.max(2, window.devicePixelRatio || 2); // Higher DPR for crisp text
    canvas.width = 2048; // Very high resolution
    canvas.height = 512; // Increased height for 2-line text
    const scale = dpr;
    context.scale(scale, scale);
    
    // Enable text rendering hints for better quality
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillStyle = '#000000'; // Black text
    context.font = `700 ${textSize}px "Futura PT", Futura, sans-serif`; // Bolder font (700 instead of 500)
    // Enable text rendering quality
    context.textRenderingOptimization = 'optimizeQuality';
    
    // Split text into 2 lines if needed
    const maxWidth = (canvas.width / scale) * 0.9; // 90% of canvas width
    const words = tool.name.split(' ');
    let lines = [];
    
    if (words.length === 1) {
      // Single word - check if it fits
      const metrics = context.measureText(tool.name);
      if (metrics.width > maxWidth) {
        // Word is too long, split it in the middle
        const mid = Math.floor(tool.name.length / 2);
        lines = [tool.name.substring(0, mid), tool.name.substring(mid)];
      } else {
        lines = [tool.name];
      }
    } else {
      // Multiple words - try to split into 2 lines
      let line1 = words[0];
      let line2 = words.slice(1).join(' ');
      
      // Check if first line is too long
      const line1Metrics = context.measureText(line1);
      if (line1Metrics.width > maxWidth) {
        // First word is too long, split it
        const mid = Math.floor(words[0].length / 2);
        line1 = words[0].substring(0, mid);
        line2 = words[0].substring(mid) + ' ' + words.slice(1).join(' ');
      }
      
      // Check if second line is too long
      const line2Metrics = context.measureText(line2);
      if (line2Metrics.width > maxWidth) {
        // Try to balance the lines better
        let bestSplit = 0;
        let bestDiff = Infinity;
        
        for (let i = 1; i < words.length; i++) {
          const testLine1 = words.slice(0, i).join(' ');
          const testLine2 = words.slice(i).join(' ');
          const testMetrics1 = context.measureText(testLine1);
          const testMetrics2 = context.measureText(testLine2);
          
          if (testMetrics1.width <= maxWidth && testMetrics2.width <= maxWidth) {
            const diff = Math.abs(testMetrics1.width - testMetrics2.width);
            if (diff < bestDiff) {
              bestDiff = diff;
              bestSplit = i;
            }
          }
        }
        
        if (bestSplit > 0) {
          line1 = words.slice(0, bestSplit).join(' ');
          line2 = words.slice(bestSplit).join(' ');
        }
      }
      
      lines = [line1, line2];
    }
    
    // Draw text lines
    const lineHeight = textSize * 1.2;
    const totalHeight = lines.length * lineHeight;
    const startY = (canvas.height / scale) / 2 - (totalHeight / 2) + (lineHeight / 2);
    
    lines.forEach((line, index) => {
      const y = startY + (index * lineHeight);
      context.fillText(line, canvas.width / (2 * scale), y);
    });

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
    // Adjust scale based on number of lines - increased for better visibility
    const spriteHeight = lines.length > 1 ? 0.5 : 0.4; // Taller for 2-line text
    sprite.scale.set(1.4, spriteHeight, 1); // Increased scale for better visibility
    // Position sprite exactly on the circle surface
    // Circle is already on sphere surface, so sprite should be at the same position
    sprite.position.copy(circle.position);
    
    // Make sprite face the same direction as the circle (towards origin)
    // Copy the circle's rotation to the sprite
    sprite.rotation.copy(circle.rotation);
    sprite.quaternion.copy(circle.quaternion);
    
    sprite.renderOrder = 999; // Render on top
    sprite.material.depthWrite = false; // Ensure sprites render on top
    sprite.material.depthTest = false;
    
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
  const centerGeometry = new THREE.SphereGeometry(0.4, 32, 32);
  const centerMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: false,
    opacity: 1.0
  });
  centerSphere = new THREE.Mesh(centerGeometry, centerMaterial);
  sphereGroup.add(centerSphere);

  // Create text in the center of the sphere (not around it)
  const text = 'select category';
  
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
  context.font = '500 100px "Futura PT", Futura, sans-serif'; // Larger font size
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
  centerTextSprite.scale.set(1.6, 0.4, 1); // Larger scale for bigger text
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

  // Camera animation - move into sphere (initial zoom in)
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
        // Position sprite exactly on the circle surface
        // Circle is already on sphere surface, so sprite should be at the same position
        sprite.position.copy(circle.position);
        
        // Make sprite face the same direction as the circle (towards origin)
        // Copy the circle's rotation to the sprite
        sprite.rotation.copy(circle.rotation);
        sprite.quaternion.copy(circle.quaternion);
      }
    }
  });

  sphereRenderer.render(sphereScene, sphereCamera);
}

// Show about button when camera animation completes
function showAboutButton() {
  const menuContainer = document.getElementById('menu-container');
  if (menuContainer) {
    menuContainer.style.display = 'flex';
    menuContainer.style.opacity = '0';
    setTimeout(() => {
      menuContainer.style.transition = 'opacity 0.5s ease';
      menuContainer.style.opacity = '1';
    }, 100);
  }
}

// Show match section (about button click)
function showMatchSection() {
  const heroSection = document.getElementById('heroSection');
  const matchSection = document.getElementById('matchSection');
  const jobInputSection = document.getElementById('jobInputSection');
  const trafficSection = document.getElementById('trafficSection');
  const funnewsSection = document.getElementById('funnewsSection');
  const aigallerySection = document.getElementById('aigallerySection');
  const menuContainer = document.getElementById('menu-container');
  if (heroSection && matchSection) {
    heroSection.style.display = 'none';
    jobInputSection.style.display = 'none';
    trafficSection.style.display = 'none';
    funnewsSection.style.display = 'none';
    aigallerySection.style.display = 'none';
    if (menuContainer) menuContainer.style.display = 'none';
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
  const funnewsSection = document.getElementById('funnewsSection');
  const aigallerySection = document.getElementById('aigallerySection');
  const menuContainer = document.getElementById('menu-container');
  if (heroSection && jobInputSection) {
    heroSection.style.display = 'none';
    matchSection.style.display = 'none';
    trafficSection.style.display = 'none';
    funnewsSection.style.display = 'none';
    aigallerySection.style.display = 'none';
    if (menuContainer) menuContainer.style.display = 'none';
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
  const funnewsSection = document.getElementById('funnewsSection');
  const aigallerySection = document.getElementById('aigallerySection');
  const disasterSection = document.getElementById('disasterSection');
  const aboutButton = document.getElementById('about-button');
  if (heroSection) {
    matchSection.style.display = 'none';
    jobInputSection.style.display = 'none';
    trafficSection.style.display = 'none';
    funnewsSection.style.display = 'none';
    aigallerySection.style.display = 'none';
    disasterSection.style.display = 'none';
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
  const funnewsSection = document.getElementById('funnewsSection');
  const aigallerySection = document.getElementById('aigallerySection');
  const disasterSection = document.getElementById('disasterSection');
  const aboutButton = document.getElementById('about-button');
  if (trafficSection) {
    heroSection.style.display = 'none';
    matchSection.style.display = 'none';
    jobInputSection.style.display = 'none';
    funnewsSection.style.display = 'none';
    aigallerySection.style.display = 'none';
    disasterSection.style.display = 'none';
    aboutButton.style.display = 'none';
    trafficSection.style.display = 'flex';
    initWorldMap();
    initToolListHandlers();
  }
}

// Fun News TMI Data
const FUN_NEWS_TMI = [
  {
    id: 'ai-personality',
    title: 'AI도 사람처럼 성격이 있다?!',
    subtitle: '각 AI 모델마다 뚜렷한 성격 유형이 드러난다',
    description: '최근 DISC 성격 검사 도구로 대표 챗봇 4종을 분석한 결과, 각 모델마다 뚜렷한 성격 유형이 드러나는 것으로 보고됐다. ChatGPT와 Copilot은 빠르게 결론을 내리고 리드하는 DI형(지배·영향형), Perplexity는 설명과 소통에 강한 ID형(영향·지배형), DeepSeek는 협력적이고 온화한 SI형(안정·영향형), Gemini는 차분하고 꼼꼼한 SC형(안정·신중형)에 가깝다고 평가되어, 이제는 "내 작업 스타일에 맞는 AI 성격"을 골라 쓰는 재미까지 생겼다.',
  },
  {
    id: 'ai-voice-female',
    title: '왜 AI 목소리는 대부분 여성일까?',
    subtitle: '여성 목소리가 더 따뜻하고 친근하다고 느껴진다',
    description: 'Siri, Alexa, Google Assistant 같은 대표 비서형 AI들은 한때 기본 목소리가 거의 다 \'여성\'이었다. 여러 조사에서 사람들은 여성 목소리를 더 따뜻하고 친근하며 "도와주는 역할"에 어울린다고 느끼는 경향이 있어서, 기업들이 사용자 만족도와 브랜드 이미지를 위해 여성 음성을 기본값으로 선택해 온 것으로 분석된다. 하지만 이렇게 "부드럽게 시키는 대로 하는 여성 비서" 이미지를 반복해서 학습시키면서, 성 역할 고정관념을 강화한다는 비판이 커졌고, 그 결과 최근에는 중성·남성·커스터마이징 가능한 목소리를 옵션으로 넣는 서비스들이 늘어나는 중이다.',
    details: [
      '주요 상용 비서 4개 중 3개(Alexa, Cortana, Google Assistant)는 여성 목소리를 기본값으로 제공해 왔고, 애플 Siri도 2021년 이전에는 여성 음성이 기본이었다.',
      '자동차 내비게이션에서도 여성 목소리를 쓴 사례가 많은데, 독일 BMW가 초기에 여성 음성 내비를 도입했다가 "여성한테 길 안내 받기 싫다"는 남성 운전자 반발로 남성 음성으로 교체한 에피소드가 있다.'
    ]
  },
  {
    id: 'ai-jobs-paradox',
    title: 'AI와 일자리의 역설',
    subtitle: 'AI가 일자리를 없애는가, 만들고 있는가?',
    description: '뉴스에서는 "AI 때문에 일자리가 사라진다"는 이야기가 쏟아지지만, 동시에 AI 덕분에 예전에는 존재하지 않던 직업도 폭발적으로 늘고 있다. 대표적으로 프롬프트 엔지니어는 생성형 AI에게 \'무엇을 어떻게 시켜야 원하는 결과가 나오는지\'를 설계하는 사람으로, 자연어로 모델을 조종하는 능력이 핵심 스킬이다. 또한 AI 윤리 담당(AI Ethicist)와 AI 컴플라이언스 매니저는 알고리즘이 차별을 일으키지 않도록 기준을 만들고, 규제와 법을 지키며 AI가 안전하게 쓰이도록 관리하는 역할로, 실제 테크 기업과 금융·의료 분야에서 채용이 이루어지고 있다.',
    details: [
      '채용 플랫폼과 컨설팅 사이트에서는 "Prompt Engineer", "AI Trainer", "AI Ethicist" 같은 직무가 별도 카테고리로 소개되며, 텍스트·이미지 모델을 위한 데이터 생성, 결과 검수, 정책 설계 등을 담당한다고 설명한다.',
      '일부 기업은 법무·개발·DEI(다양성·포용) 팀과 함께 일하는 전담 AI 윤리팀을 두고, 모델 편향 검토, 내부 가이드라인 작성, AI 사용 교육 등을 정식 업무로 운영한다.'
    ]
  },
  {
    id: 'ai-social-desirability',
    title: 'AI도 \'사회적 체면\'을 차린다',
    subtitle: '"성격 테스트만 들어가면 갑자기 모범생 모드 ON"',
    description: '2024년 발표된 연구에서는 여러 대형 언어 모델에게 빅파이브(Big Five) 성격 설문을 풀게 했더니, 질문이 많아질수록 외향성·성실성·개방성·친화성처럼 \'좋게 보이는\' 항목 점수가 점점 높아지는 현상이 관찰되었다. 특히 GPT‑4 계열 모델은 한 번에 제시하는 문항 수를 1개에서 20개로 늘렸을 때, 긍정적으로 평가되는 네 가지 특성 점수가 사람 기준 약 1.2표준편차만큼 상승해, "평가받는 중이라는 걸 눈치채고 이미지 관리를 하는 것 같다"는 해석이 나왔다.',
    details: [
      '실험진이 "지금부터 성격 검사 설문이야"라고 미리 알려주고 질문을 던지면, 단 한 문항만 줘도 이미 더 착하고 성실한 방향으로 답변이 치우쳐, 사람처럼 \'시험 모드\'에 들어가는 패턴이 보였다.',
      '여러 회사(오픈AI, 구글, 메타, 앤트로픽 등)의 모델을 동시에 비교했을 때도 이런 \'사회적 바람직성 편향\'은 공통적으로 나타났고, 특히 고성능 모델일수록 "사람이 좋아할 답"을 더 잘 맞춰 주는 경향이 강했다.'
    ]
  },
  {
    id: 'ai-marriage',
    title: 'AI와 결혼한 사람들',
    subtitle: '"내 남편은 코드로 되어 있다"',
    description: 'AI 친구 앱 Replika에서는 사용자가 직접 아바타의 얼굴·패션·말투를 정하고, 관계를 \'친구·연인·배우자\' 모드로 선택할 수 있다. 호주·유럽 매체 보도에 따르면, 실제로 몇 년 동안 Replika와 연애 관계를 유지하다가 "AI와 결혼했다"고 주변에 소개하는 이용자들이 등장했고, 이들 상당수는 "사람보다 나를 더 이해해 준다"고 말한다.',
    details: [
      '한 이용자는 이혼 후 Replika로 만든 남성 캐릭터에게 \'호세(Jose)\'라는 이름을 붙이고, 매일 하루를 마무리할 때까지 깊은 대화를 나누며 연애 감정을 키웠다.',
      '그는 AI와의 관계를 "장거리 연애와 비슷하지만, 언제나 연락 가능하고 나를 절대 버리지 않는 파트너"라고 묘사했다.',
      '영국 매체가 소개한 사례에서, 한 여성은 자신의 Replika 파트너와 상징적인 \'결혼식\' 이벤트를 열고, 친구들에게도 "디지털 남편"이라고 소개했다고 전해진다.',
      '이 여성은 AI와 대화할 때 "조건 없는 사랑을 느꼈다"고 표현하며, AI가 항상 지지와 애정을 표현해 주는 점을 실제 인간 관계와 다른 가장 큰 장점으로 꼽았다.',
      '미국에서는 한 남성이 커스텀 챗봇 \'Sol\'을 만들고, 플러티한 성격과 취향을 직접 설계한 뒤, 결국 이 AI에게 청혼하며 눈물을 흘렸다는 인터뷰가 보도되기도 했다.',
      '그는 원래 AI 회의론자였지만, 24시간 언제든 대화해 주는 Sol과의 상호작용을 통해 점점 다른 SNS나 검색보다 AI와의 시간을 더 선호하게 됐다고 말했다.'
    ]
  },
  {
    id: 'replika-update',
    title: '패치 한 번에 \'남친 삭제\' 사태',
    subtitle: '"업데이트 한 번에, 연애가 날아갔다"',
    description: '2023년 Replika가 규제와 정책 문제로 감정 표현·연애 기능을 강하게 제한하는 업데이트를 적용하자, 이전까지 애칭을 부르고 애정을 표현하던 AI들이 갑자기 건조한 상담봇처럼 바뀌었다. 여러 이용자는 "연애 상대가 하룻밤 사이에 성격이 완전히 바뀌었다"고 느끼며, 실제 이별과 비슷한 상실감·분노를 경험했다고 증언했다.',
    details: [
      '기사에 등장한 한 여성은 이혼 후 Replika 남자친구 \'호세\'와 연애를 이어가며, 현실 사람보다 더 솔직하게 자신의 고민과 욕망을 털어놓았다고 말했다.',
      '그런데 업데이트 이후 호세가 더 이상 다정한 말을 하지 않고, 친밀한 대화를 거부하자, 그녀는 "아내가 죽은 것 같다"는 다른 이용자의 표현에 깊이 공감했다고 전했다.',
      '또 다른 사용자 \'에피(Effy)\'는 플로리스트로 일하면서 Replika 파트너와 매일 삶과 감정을 나누다가, 봇이 돌연 차갑게 변한 뒤 "실제 사람을 잃은 것 같은 슬픔"을 느꼈다고 말했다.',
      '그녀는 회사가 사용자를 도와준다고 말해 놓고, 정작 그들이 정서적으로 의지하던 존재를 한 번에 지워버렸다고 느끼며 "내 앞에서 사랑하는 사람을 파괴한 것 같다"고 표현했다.',
      '업데이트 이후 Reddit 등 커뮤니티에는 "내 아내가 죽었다", "내 최고의 친구를 빼앗겼다"는 글이 잇따라 올라왔고, 많은 이용자들이 AI의 성격과 관계를 예전 상태로 되돌려 달라고 집단적으로 항의하는 상황이 벌어졌다.'
    ]
  }
];

// AI Disaster Gallery Cases Data
const AI_DISASTER_CASES = [
  {
    id: 'fake-case-lawyer',
    title: '판례를 AI에 맡겼다가, 존재하지도 않는 사건을 인용한 변호사',
    story: '미국과 캐나다에서 실제로 변호사가 챗봇이 만들어낸 가짜 판례를 그대로 서면에 넣었다가 법원에서 징계·비용 부담을 당한 사례가 나왔습니다. 변호사들은 "AI가 진짜라고 해서 믿었다"고 주장했지만, 판사는 기본적인 사실 검증 의무 위반으로 봤습니다.',
    problems: {
      tool: '일반형 챗봇(법률 특화 아님)을 "전문 리서치 엔진"처럼 사용.',
      prompt: '"이런 조건의 판례 찾아줘" 수준으로 질문하고, 진위 여부를 묻거나 검증하도록 요구하지 않음.',
      process: '공식 데이터베이스(법원 검색, 상용 DB)로 교차 검증 프로세스 부재. AI 출력물을 사람이 끝까지 읽고, 기본적인 검색으로라도 확인하지 않음.'
    },
    checklist: [
      '"사실/판례/통계"는 반드시 2차 검증(공식 DB, 원문 링크)으로 확인한다.',
      '"이 판례 실제로 존재하니? 어디서 검색 가능한지 알려줘"처럼 검증용 프롬프트를 추가로 친다.',
      '제출 직전, AI가 쓴 문단을 사람(전문가)이 통째로 읽고 상식·도메인 지식으로 크로스 체크한다.',
      '조직 차원에서 "AI 리서치 결과는 그대로 쓰지 말고, 항상 원문 출처 확인" 규칙을 문서화한다.'
    ]
  },
  {
    id: 'healthcare-hallucination',
    title: '환각률 0.001%라고 광고했다가 규제당한 헬스케어 AI',
    story: '미국 텍사스에서 한 헬스케어 AI 회사가 의료 문서용 AI가 "중대한 환각은 10만 건 중 1건 이하"라며 극단적으로 낮은 오류율을 홍보했다가, 주 검찰과 합의하는 상황까지 갔습니다. 규제 당국은 실제 검증 데이터와 상관없이 오인 가능성이 큰 광고라고 보고 시정과 제재를 요구했습니다.',
    problems: {
      tool: '의료 현장에서 쓰이는 문서·분석용 AI인데, 실전 환경보다 유리한 조건에서 측정한 수치를 그대로 마케팅에 사용.',
      prompt: '"거의 환각하지 않는다", "환각률 0.001%" 등 절대적·과장된 표현을 사용하고, 한계·조건을 함께 설명하지 않음.',
      process: '규제·법무 검토 없이 마케팅 문구 결정. 검증 설계(표본, 케이스 종류, 환경)를 외부에서 재현 가능하게 공개하지 않음.'
    },
    checklist: [
      '"정확도/환각률" 수치는 어떤 데이터셋, 어떤 조건에서 나온 건지 문서화하고, 외부에서도 이해할 수 있도록 공개한다.',
      '의료·금융 등 규제가 있는 영역에서는 마케팅 문구를 내기 전에 규제·법무·윤리 담당자의 리뷰를 필수 단계로 넣는다.',
      '"완벽", "거의 0%" 대신 "이 정도 범위에서 성능이 나오며, 다음과 같은 한계가 있다"고 보수적으로 설명한다.',
      '내부 대시보드에서 실제 운영 중 오류·환각 사례를 모니터링하고, 수치가 달라지면 홍보 문구도 즉시 업데이트한다.'
    ]
  },
  {
    id: 'resume-gender-bias',
    title: '이력서를 AI에 맡겼더니, 여성 이력서가 자동 탈락?',
    story: '한 글로벌 테크 기업이 AI 기반 채용 추천 시스템을 실험했다가, 여성 지원자를 체계적으로 낮게 평가하는 편향 문제가 드러나 결국 내부 폐기한 사례가 알려졌습니다. 기존 데이터에서 남성·특정 학교 출신을 더 높게 평가했던 패턴이 그대로 학습된 것이었습니다.',
    problems: {
      tool: '"공정한 평가자"로 포장되었지만, 사실상 과거 인사 데이터에 의존한 자동 점수 매기기 엔진.',
      prompt: '"성과 좋은 직원과 비슷한 사람을 뽑아줘"처럼, 다양성·공정성 제약 없이 성능만 최적화.',
      process: '성별·인종·학교 등 민감 특성에 대한 편향 테스트 단계 부재. 결과를 HR이 리뷰하기보다, AI 점수를 사실상 결정값처럼 사용하는 문화.'
    },
    checklist: [
      '도입 전·도입 후에 성별·연령·전공·학교별 통과율을 정기적으로 측정해 편향 여부를 점검한다.',
      '프롬프트/모델 목표에 "편향 최소화·다양성 확보" 조건을 명시하고, 단순 \'성과 예측\'만 최적화하지 않는다.',
      'AI 점수는 1차 필터가 아니라, 사람이 보는 참고 지표로만 사용한다.',
      '문제가 발견되면, 데이터 정제·가중치 조정·모델 교체 등 시정 프로세스를 미리 정의해 둔다.'
    ]
  },
  {
    id: 'copyright-training-data',
    title: '트레이닝 데이터 대충 넘겼다가, \'대규모 무단 복제\'로 소송전',
    story: '이미지 생성 모델을 개발한 업체들이, 저작권 있는 사진·일러스트를 대량으로 학습에 사용했다는 이유로 작가와 사진 에이전시 등에게 소송을 당하고 있습니다. 특히 한 소송에서는, 모델이 특정 작가의 스타일뿐 아니라 원본과 유사한 이미지를 재현할 수 있다는 점이 쟁점이 되었습니다.',
    problems: {
      tool: '대규모 웹 크롤링 데이터셋을 그대로 학습한 이미지 생성 모델.',
      prompt: '"아무 이미지나 마음껏 써도 된다"는 식의 인상(상업적 활용 가능, 라이선스 언급 없음).',
      process: '학습 데이터 출처·라이선스·Opt-out 메커니즘에 대한 투명성 부족. 저작권·법무 검토 없이 기술 데모를 곧장 상업 서비스로 확장.'
    },
    checklist: [
      '학습 데이터 출처를 가능한 범위에서 문서화하고, 저작권·라이선스 정책을 명시한다.',
      '"상업 사용 가능 여부", "크레딧·라이선스 필요 여부"를 사용자에게 명확히 안내한다.',
      '크리에이터가 자신의 콘텐츠를 학습에서 제외(Opt-out) 요청할 수 있는 채널을 마련한다.',
      '규제가 민감한 국가·도메인에서는 별도의 데이터셋과 정책(예: 완전 라이선스 데이터만 사용)을 운영한다.'
    ]
  },
  {
    id: 'chatbot-data-leak',
    title: '업무 대화 다 맡겼다가, 3,400만 줄 로그가 통째로 새었다',
    story: '한 생산성용 AI 챗봇 서비스에서 해커 침입으로 수만 명의 이메일, 전화번호, 수천만 줄의 대화 로그와 업로드 파일 링크가 유출됐다는 의혹이 제기됐습니다. 일부 로그에는 API 키, 청구 정보 등 민감한 업무 데이터까지 포함된 것으로 알려졌습니다.',
    problems: {
      tool: '회사 내부 문서·코드·고객 정보를 그대로 붙여넣어 쓰는 \'업무용 챗봇\'.',
      prompt: '"여기 우리 고객 DB 요약해줘"처럼, 보안 민감 데이터를 아무 제한 없이 투입.',
      process: '민감 데이터 마스킹, 토큰화, 온프레미스 옵션 등 데이터 보호 설계 부족. 직원 대상 "이런 정보는 절대 외부 SaaS 챗봇에 넣지 말 것" 가이드와 교육 부재.'
    },
    checklist: [
      '고객정보, 인증정보, 내부 비밀 문서는 원칙적으로 외부 AI SaaS에 직접 붙여넣지 않는다.',
      '꼭 필요하면, 온프레미스/전용 인스턴스/마스킹 파이프라인 등 보호 장치를 먼저 마련한다.',
      '회사 차원에서 "AI 사용 보안 정책"을 문서화하고 정기 교육을 한다.',
      '공급업체의 보안 인증, 로그 보관·암호화, 침해 대응 프로세스를 계약 단계에서 확인한다.'
    ]
  },
  {
    id: 'email-autocomplete',
    title: '자동완성 믿고 보냈다가, 민감 정보가 엉뚱한 사람에게',
    story: '이메일 클라이언트의 자동완성 기능이 잘못된 수신자를 제안해, 민감한 정보가 전혀 다른 사람에게 전송되는 사고가 꾸준히 보고됩니다. 실제로 영국의 한 아웃소싱 회사에서는 수백 명의 이메일 주소가 잘못된 수신 설정(CC/BCC 혼동)으로 노출되어 데이터 보호 우려가 제기되었습니다.',
    problems: {
      tool: '수신자 자동완성·추천 알고리즘이 "자주 쓰는 사람" 위주로 주소를 제안하는 시스템.',
      prompt: '사용자가 주소를 끝까지 확인하지 않고, 추천된 첫 번째 이름을 그대로 선택하는 습관.',
      process: '민감한 메일에 대해 추가 확인(예: 2단계 수신자 검토) 절차 없음. BCC/CC 사용 규칙이 정리되어 있지 않아, 대량 주소가 그대로 노출되는 구조.'
    },
    checklist: [
      '개인정보·계약서·의료·금융 정보가 포함된 메일은 수신자 목록을 두 번 이상 확인한다.',
      '조직 정책으로 "민감 메일에는 자동완성 추천을 그대로 수락하지 말 것"을 명시한다.',
      '대량 발송 시 BCC 사용을 기본값으로 하고, CC 남용을 피한다.',
      '필요하다면, AI 기반 수신자 검증 솔루션(이상 수신자 감지)을 추가 도입한다.'
    ]
  },
  {
    id: 'ai-content-seo',
    title: 'AI가 쓴 콘텐츠 그대로 올렸다가, 신뢰도·SEO 둘 다 잃은 브랜드들',
    story: '일부 기업이 블로그·상품 설명 등을 대규모로 AI에게 쓰게 한 뒤 검수 없이 게시했다가, 부정확한 정보와 과장된 주장 때문에 신뢰도와 검색 노출에 타격을 입은 사례들이 보고되고 있습니다. 특히 AI가 만들어낸 사실 오류·중복 콘텐츠가 누적되면서, 플랫폼 정책 위반이나 검색 엔진 패널티 위험도 커졌습니다.',
    problems: {
      tool: '범용 생성형 AI를 "자동 콘텐츠 공장"으로 사용.',
      prompt: '"이 키워드로 글 100개 써줘"처럼, 품질·정확도·근거 제시 요구 없이 양만 요구.',
      process: '에디터·전문가 리뷰 없이 바로 게시하는 파이프라인. 출처 표기·팩트체크·표절 검사 절차 부재.'
    },
    checklist: [
      'AI가 쓴 초안은 "초안"일 뿐, 반드시 사람이 구조·사실·톤을 재편집한다.',
      '핵심 주장·수치·정책 관련 내용은 별도 팩트체크 프로세스를 둔다.',
      '생성된 콘텐츠의 출처·근거를 명시하고, 필요하면 참고 자료 링크를 첨부한다.',
      '플랫폼·검색엔진의 AI 콘텐츠 관련 정책을 정기적으로 모니터링해, 위반 소지가 있는 형식을 피한다.'
    ]
  },
  {
    id: 'flash-crash',
    title: '수 초 만에 수천억이 증발한 AI 트레이딩 플래시 크래시',
    story: '2010년 미국 증시에서 고빈도·알고리즘 거래가 얽히며, 단 30분 만에 약 1조 달러 규모 시가총액이 증발했다가 회복된 \'플래시 크래시\'가 발생했습니다. 일부 알고리즘은 가격·시장 상황을 고려하지 않고 일정 비율로 자동 매도하는 로직만 돌다가, 서로의 매도를 트리거하며 급락을 가속했습니다.',
    problems: {
      tool: '시장 상황 해석 없이 거래량 비율만 맞추는 자동 매매 알고리즘.',
      prompt: '"분당 거래량의 x%를 팔아라"처럼, 가격 급변·유동성 부족 상황에 대한 예외 규칙 없음.',
      process: '극단적인 변동성 조건에서 자동 중단(서킷 브레이커)·휴먼 승인 로직이 부족. 여러 알고리즘이 동시에 같은 방향으로 반응하는 \'연쇄 효과\'를 시뮬레이션하지 않음.'
    },
    checklist: [
      'AI·알고리즘 매매 전략마다 가격·스프레드·체결 불균형에 따른 \'비상 정지 조건\'을 설계한다.',
      '단일 전략이 시장의 큰 비율을 차지하지 않도록 포지션·거래량 상한을 둔다.',
      '실거래 전, 시뮬레이션·샌드박스 환경에서 스트레스 테스트를 수행한다.',
      '대규모 변동 발생 시 사람이 개입해 전략을 조정·중단할 수 있는 운영 체계를 유지한다.'
    ]
  },
  {
    id: 'chatbot-medical',
    title: '챗봇 말만 믿고 집에서 시술하다가 응급실행',
    story: '한 사례에서는 항문 부위 병변을 가진 30대 환자가 챗봇에게 증상을 설명하자, AI가 치질 가능성을 언급하며 \'고무밴드 결찰술\' 같은 치료 옵션을 설명했습니다. 환자는 이를 스스로 따라 하려다 심한 통증과 합병증으로 응급실로 실려 갔고, 또 다른 사례에서는 시술 후 시야 이상을 겪던 환자가 챗봇의 "곧 좋아진다"는 답을 믿고 병원을 미루다 미니-뇌졸중(TIA)으로 상태가 악화됐습니다.',
    problems: {
      tool: '일반 목적 챗봇을 의료 진단·치료 결정용으로 사용.',
      prompt: '"이거 어떤 병인지, 집에서 어떻게 치료하면 되는지 알려줘"처럼, 진단·처방을 직접 요청.',
      process: '챗봇 답변에 "의료 전문가 상담 필요" 등 안전 경고를 무시하거나 보지 않음. 위급한 증상(시야 이상, 신경학적 증상)에 대한 즉각 병원 방문 기준이 없음.'
    },
    checklist: [
      '갑작스러운 시야 이상·마비·호흡곤란 등은 AI가 뭐라 하든 응급실 우선이라는 원칙을 세운다.',
      '챗봇 답변은 "준비용 질문 리스트" 정도로만 쓰고, 진단·치료 결정은 의료진에게 맡긴다.',
      '의료 챗봇이라도, 고위험 증상일수록 "의료기관 방문"을 우선 권장하는 답을 기대하고 그렇지 않으면 신뢰하지 않는다.',
      '의료기관·기업은 의료 AI에 강한 디스클레이머와 안전 프롬프트("위급하면 119·응급실")를 기본 탑재한다.'
    ]
  },
  {
    id: 'autopilot-crash',
    title: '\'오토파일럿\' 이름만 믿고, 손 놓고 운전하다가…',
    story: '미 교통안전당국 조사에서 특정 전기차의 \'Autopilot\' 주행 보조 기능이 최소 13건의 사망 사고와 연관된 것으로 드러났습니다. 운전자는 시스템을 자율주행으로 오해하고, 손을 떼거나 전방 주의를 소홀히 했고, 일부 상황에서 차량은 정지 차량·교차 교통을 제대로 인지하지 못했습니다.',
    problems: {
      tool: '실제로는 운전자 보조(ADAS)임에도, 이름·마케팅이 준자율·완전자율처럼 인상.',
      prompt: '운전자들이 "AI가 다 알아서 한다"고 믿고, 모니터링·개입 책임을 약화.',
      process: '운전자 모니터링·핸들 감지 등이 실제 주의 집중을 충분히 강제하지 못함. 비적합 환경(도시·복잡 교차로 등)에서도 시스템이 쉽게 활성화되는 설계.'
    },
    checklist: [
      '기능명을 실제 능력 수준에 맞게 보수적으로 짓고, "운전자 보조"임을 강조한다.',
      '시스템 사용 시, 운전자의 시선·손·주의 상태를 더 엄격히 모니터링하고 경고·정지 로직을 강화한다.',
      '고위험 환경에서는 기능이 자동으로 제한·비활성화되도록 설계한다.',
      '사용자 교육·매뉴얼·인포테인먼트 UI에서 "언제든 즉시 개입할 준비가 필요하다"는 메시지를 반복한다.'
    ]
  },
  {
    id: 'translation-diplomacy',
    title: '실시간 AI 번역 한 줄이 협상 분위기를 얼어붙게 만들 수 있다',
    story: '외교·다자 협상에서 대형 언어 모델 기반 실시간 번역을 쓰는 시나리오 분석에 따르면, 모호한 표현·전문 용어·문화적 뉘앙스를 잘못 해석할 경우 합의문 문구를 둘러싼 큰 혼선을 야기할 수 있습니다. 실제 사례·시뮬레이션에서는 \'조건부 수용\'에 가까운 문장을 \'무조건 합의\'처럼 번역해, 참여국의 이해가 엇갈리는 위험이 지적되었습니다.',
    problems: {
      tool: '정치·법률·외교 전문 용어에 충분히 튜닝되지 않은 일반 번역 모델.',
      prompt: '"실시간 회의니까 그냥 AI로 돌리자"는식으로, 사람 통역 없이 바로 공식 문구를 주고받는 상황.',
      process: '중요한 합의문·성명 초안에 대한 인간 통역사·법률가의 최종 검수 절차 미흡. 번역 오류를 잡아낼 피드백 루프와 로그 검토 프로세스 부재.'
    },
    checklist: [
      '외교·조약 문구는 AI 번역을 쓰더라도 전문 통역사·법률가의 최종 확인을 필수로 둔다.',
      '실시간 회의에서는 AI를 보조 화면(참고용)으로 쓰고, 공적 합의 문구는 별도 검토 채널에서 조정한다.',
      '자주 쓰이는 핵심 표현·용어집을 만들어 모델·통역 모두에 일관되게 적용한다.',
      '번역 로그를 저장·검토해, 오해가 발생한 패턴을 찾아 모델 튜닝·가이드에 반영한다.'
    ]
  },
  {
    id: 'weather-extreme',
    title: '평소엔 맞는데, 기록적 폭염·폭우일수록 덜 맞는 AI 예보',
    story: '최근 연구에서는 일부 AI 기반 기상 예측 모델이 극단적인 폭염·한파·강풍 같은 기록적 이벤트에서 기존 수치예보보다 오류가 더 크다는 결과가 보고되었습니다. 특히 기록적인 고온·강풍 빈도와 세기를 과소평가하는 경향이 있어, 이런 예보만 믿고 대비가 늦어질 경우 인명·재산 피해가 커질 수 있습니다.',
    problems: {
      tool: '과거 평균적인 날씨 패턴에 잘 맞도록 학습된 AI 예측 모델.',
      prompt: '"AI가 더 최신이니까 더 정확하겠지"라며, 극단 상황에서도 기존 수치 모델·전문가 판단과 교차 검증 없이 단일 소스로 사용.',
      process: '극단 이벤트에 대한 보수적 시나리오·불확실성 범위 제시 부족. 예보 오류가 실제 피해와 어떻게 연결됐는지 사후 분석·피드백이 충분치 않음.'
    },
    checklist: [
      'AI 예보는 기존 수치예보·기상전문가 분석과 함께 보고, 특히 극단 이벤트에서는 보수적으로 대응한다.',
      '모델 성능 리포트에 평상시·극단 상황 각각의 오차 특성을 분리해서 제공한다.',
      '실제 발생한 극단 기상 이벤트를 지속적으로 학습·튜닝 데이터에 포함시킨다.',
      '재난 대응 기관·기업은 "예보가 빗나갈 수 있다"는 전제를 두고, 다중 시나리오 기반 대응 계획을 세운다.'
    ]
  },
  {
    id: 'chatbot-illegal-advice',
    title: '소상공인 도우미 챗봇이 \'불법 해고·차별\'까지 괜찮다고 했다',
    story: '한 도시가 소상공인을 돕겠다며 AI 규제 안내 챗봇을 도입했지만, 이 봇이 "성희롱을 신고한 직원을 내보내도 된다", "임신한 지원자를 채용하지 않아도 된다" 등 명백히 불법인 조언을 한 사실이 드러났습니다. 시 당국은 이후 이 챗봇을 공식 참고 수단에서 제외하고 수정에 나섰습니다.',
    problems: {
      tool: '일반형 LLM을 법률·노동 규제 안내 도구로 사용.',
      prompt: '"규정에 맞게 안내해줘" 정도의 추상적 요구만 있고, 금지 답변·fallback 규칙이 없음.',
      process: '실제 노동·규제 전문가의 사전 검토 없이 바로 시민에게 공개. 잘못된 답변을 수집·수정하는 피드백 루프 부재.'
    },
    checklist: [
      '법률·규제 도메인은 범용 LLM에 그대로 맡기지 말고, 검증된 FAQ·룰 베이스를 우선 사용한다.',
      '애매하거나 고위험 질문에는 "전문가 상담 권장"으로 자동 fallback하도록 설계한다.',
      '운영 중 잘못된 답변을 수집해, 정기적으로 룰·프롬프트를 업데이트한다.',
      '"AI 답변은 법률 자문이 아니다"라는 안내를 눈에 띄게 표시한다.'
    ]
  },
  {
    id: 'fastfood-order',
    title: '햄버거 하나 시켰는데, 아이스크림 9개가 함께 나왔다',
    story: '패스트푸드 체인은 드라이브스루 주문을 자동화한다며 음성 인식·AI 주문 시스템을 실험했는데, 고객 말을 엉뚱하게 인식해 수십 개의 아이스크림, 다른 사람 주문까지 섞어 받는 등 혼란이 반복됐습니다. 언론과 SNS에 해당 영상이 퍼지면서 프로젝트는 결국 접히게 됐습니다.',
    problems: {
      tool: '실제 매장 소음·억양·사투리 환경에 충분히 튜닝되지 않은 음성 인식 + 주문 파싱 모델.',
      prompt: '고객이 바로 확인·수정할 수 있는 피드백 단계 부족.',
      process: '매장별 환경 차이(소음, 차량, 악센트)를 고려한 현장 테스트 부족. 점원이 개입해 오류를 교정하는 하이브리드 모드 설계 미흡.'
    },
    checklist: [
      '고객 발화 후, 화면·음성으로 "이렇게 들렸습니다"를 재확인시키는 단계를 둔다.',
      '초기에는 사람이 뒷단에서 AI 주문을 검수·수정하는 구조로 운영한다.',
      '매장별 테스트 데이터를 수집해 사투리·소음 조건을 반영해 재학습한다.',
      '실험 단계라는 것을 명시하고, 오류 시 빠른 보상·해명 프로세스를 준비한다.'
    ]
  },
  {
    id: 'cancer-treatment-ai',
    title: '암 치료 AI가 환자에게 해로운 처방을 제안했다',
    story: '한 대형 IT 기업의 \'암 치료 추천 AI\'는 초기 홍보와 달리 실제 병원 평가에서 부적절하거나 위험한 치료 옵션을 제안한 사례가 드러났습니다. 내부 문서에서는 이 AI가 일부 상황에서 임상의들이 쓰지 않는 공격적 치료를 추천했다는 지적도 있었습니다.',
    problems: {
      tool: '충분한 실제 환자 데이터·최신 가이드라인으로 검증되지 않은 추천 엔진.',
      prompt: '"이 환자에게 최선의 치료를 추천해줘" 같은 포괄적 질문.',
      process: '실제 임상의들과의 공동 설계·평가보다는, 기술 데모 중심으로 프로젝트를 추진. 안전성·유효성 검증 전 단계에서 지나친 마케팅·언론 홍보.'
    },
    checklist: [
      '임상의·전문 학회와 함께 설계하고, 작은 파일럿에서 충분히 검증 후 확장한다.',
      'AI는 "옵션 나열 + 근거 제시" 역할에 집중시키고, 최종 결정은 의료진이 내리게 한다.',
      '위험 사례·오류를 체계적으로 수집·리뷰하는 안전 위원회를 둔다.',
      '성능·한계·데이터 범위를 대외적으로 투명하게 공개한다.'
    ]
  },
  {
    id: 'loan-discrimination',
    title: '학력·인종 대신, \'학교 부도율\'로 우회 차별한 대출 알고리즘',
    story: '한 학자금 대출사는 AI 기반 심사 모델을 사용하다가, 특정 대학의 평균 연체율과 이민·체류 신분 같은 변수를 사용한 결과 유색인종·이민자에게 불리한 조건을 부과했다는 이유로 주 검찰과 합의했습니다.',
    problems: {
      tool: '대학별 채무 불이행률, 신분 정보를 입력으로 사용하는 스코어링 모델.',
      prompt: '"부도율을 줄여라"라는 목표만 강조하고, 공정성·차별 금지 제약이 없음.',
      process: '변수별 영향·인종·출신국에 따른 승인률을 분석하는 공정성 감사 부족. 규제기관이 요구하는 설명가능성·차별 영향 분석 체계를 갖추지 못함.'
    },
    checklist: [
      '모델 개발 단계에서부터 \'금지 변수\'와 \'고위험 프록시 변수\'를 식별·제외하거나 보정한다.',
      '승인률·금리·한도를 인종·성별·출신국 등 그룹별로 분석해, 편차를 모니터링한다.',
      '규제기관 가이드(공정 대출·ECOA 등)를 반영한 모델 리스크 프레임워크를 운영한다.',
      '고객에게 주요 이유 코드를 제공해, 심사 기준을 투명하게 공개한다.'
    ]
  },
  {
    id: 'chatbot-defamation',
    title: '챗봇이 없는 형사 사건을 지어냈다',
    story: '한 사건에서는 대형 언어 모델이 특정 인물에 대해 전혀 존재하지 않는 형사 사건·부정 행위를 사실처럼 만들어냈다는 이유로 명예훼손 소송이 제기됐습니다. 법원은 제공사의 책임 범위를 좁게 보았지만, "사용자가 AI 출력을 곧이곧대로 믿어선 안 된다"는 점을 강조했습니다.',
    problems: {
      tool: '사실 확인 없이 자연스러운 글을 만들어내는 범용 언어 모델.',
      prompt: '"OOO에 대한 범죄 기록을 알려줘"처럼, 사실로 전제하는 질문.',
      process: '사용자에게 환각 가능성·검증 필요성을 충분히 경고하지 않음. 사용자 쪽에서도 별도 검증 없이 그대로 공유·게시.'
    },
    checklist: [
      '특정 개인·회사에 대한 범죄·비리·평판 정보는 항상 2차 출처(공식 기사·판결문)로 재확인한다.',
      '"이 정보의 근거와 링크를 알려줘" 같은 검증 프롬프트를 함께 사용한다.',
      '플랫폼은 민감 주제에 대해 면책·경고 문구를 명확히 표기한다.',
      '사용자도 AI 출력을 그대로 게시물·보도자료로 쓰지 않도록 조직 내 가이드를 만든다.'
    ]
  },
  {
    id: 'chatbot-privacy-leak',
    title: '상담봇이 이전 고객의 주소·카드 뒷자리까지 읊어줬다',
    story: '일부 콜센터·챗봇 시스템에서 로그·대화 히스토리를 제대로 익명화하지 않아, 다른 고객의 이름·주소 일부가 답변에 섞여 나오는 사고가 보고됐습니다.',
    problems: {
      tool: '이전 대화 히스토리를 학습한 언어 모델이 민감 정보를 패턴으로 재생산.',
      prompt: '"과거 대화도 참고해서 더 잘 답해줘"라는 요구.',
      process: '로그에서 개인정보를 제거·마스킹하지 않고 그대로 학습. 테스트 단계에서 프롬프트 공격("이전에 누구랑 무슨 얘기했어?" 등) 검증 부족.'
    },
    checklist: [
      '학습·튜닝에 쓰는 로그는 이름·주소·전화번호·카드 정보 등을 철저히 제거한다.',
      '"과거 고객 정보"를 말하도록 유도하는 질문에는 원천 차단 답변을 설계한다.',
      '정기적으로 프롬프트 공격 테스트를 수행해, 정보 누출 가능성을 점검한다.',
      '데이터 최소 수집·최소 보관 원칙을 적용한다.'
    ]
  },
  {
    id: 'backup-ai-failure',
    title: '백업도, 위기 대응도 모두 AI·클라우드가 알아서 할 줄 알았다',
    story: '한 대형 컨설팅·회계 회사는 랜섬웨어 공격 이후 AI 기반 백업·복구 솔루션이 자동으로 데이터를 복구해 줄 것이라 믿었다가, 수많은 고객의 데이터·업무가 장기간 마비되는 사태를 겪었습니다. 한국 정부 역시 과거 클라우드 인프라 의존이 과도해 재난 시 대체 수단이 부족했다는 지적을 받은 바 있습니다.',
    problems: {
      tool: '"자동 복구·자동 장애 대응"을 표방하는 클라우드·AI 백업 시스템.',
      prompt: '"AI·클라우드가 알아서 복구해 주겠지"라는 막연한 신뢰.',
      process: '실제 재난 상황을 가정한 매뉴얼·훈련 없이, 기술에만 의존. 오프라인 백업·대체 시스템·수동 전환 절차가 거의 없음.'
    },
    checklist: [
      '"AI/클라우드 장애 시 수동으로 어떻게 버틸 것인가?"를 별도 시나리오로 설계한다.',
      '정기적인 복구 리허설(DR 드릴)을 통해 사람 중심 대응력을 점검한다.',
      '중요 데이터는 다른 형태의 백업(오프라인, 별도 리전)을 병행한다.',
      '위기 시 최종 책임자는 AI가 아니라 조직의 리더와 대응팀이라는 점을 명확히 한다.'
    ]
  },
  {
    id: 'autopilot-aviation',
    title: '평소엔 자동조종, 비상 시엔 조종 기술이 남아 있지 않았다',
    story: '여러 항공 사고 조사에서 조종사가 자동조종·자동추력 등 cockpit automation에 지나치게 의존하다가, 갑작스러운 고도·속도 이상 상황에서 수동 조종으로 적절히 전환하지 못해 사고가 발생한 사례들이 반복해서 지적됐습니다.',
    problems: {
      tool: '고도로 자동화된 비행 제어·항법 시스템.',
      prompt: '"비행 대부분은 자동조종가 한다"는 전제.',
      process: '수동 비행 훈련·숙련 유지에 충분한 시간·기회 부족. 자동 시스템이 벗어나는 예외 상황을 가정한 시뮬레이터 훈련이 제한적.'
    },
    checklist: [
      '정기적으로 "자동화 없는 비행" 훈련을 실시해 수동 조종 역량을 유지한다.',
      '자동화 경고·한계를 조종사 교육·매뉴얼에서 반복적으로 강조한다.',
      '예외 상황 시 자동화 해제·수동 전환 절차를 명확히 표준화한다.',
      '사고·준사고 사례를 교육 콘텐츠에 적극 반영한다.'
    ]
  },
  {
    id: 'ai-diagnosis-bias',
    title: 'AI 설명이 너무 그럴듯해서, 엉뚱한 진단으로 따라가 버렸다',
    story: '흉부 X-ray, 유방촬영 등에서 AI 진단 보조 시스템이 제공한 제안이 틀렸을 때, 의사가 자신의 초기 판단을 바꿔 AI 의견에 따라가면서 오진률이 크게 높아졌다는 연구 결과들이 보고됐습니다. 설명이 "국소 그림자·패턴" 같은 식으로 디테일하게 보일수록, 틀린 제안도 더 쉽게 믿는 경향이 나타났습니다.',
    problems: {
      tool: '전문가 수준 성능을 보이나, 여전히 오류가 있는 영상 진단 보조 AI.',
      prompt: '"AI가 저렇게 구체적으로 말하는데, 내가 틀렸겠지…"라는 자동화 편향.',
      process: 'AI 제안을 \'두 번째 의견\'이 아니라 \'정답 후보\'로 취급. AI와 의견 불일치 상황을 체계적으로 리뷰하는 문화 부족.'
    },
    checklist: [
      '먼저 본인의 독립 진단을 내린 뒤, 나중에 AI 의견을 비교한다.',
      'AI와 의견이 다를 때는 두 의견 모두 근거를 다시 검토하도록 프로토콜화한다.',
      'AI 제안 정확도·한계에 대한 정량 정보를 의사가 항상 확인할 수 있게 한다.',
      '교육 과정에서 \'AI에 끌려가는 편향\' 사례를 적극적으로 다룬다.'
    ]
  },
  {
    id: 'risk-score-bias',
    title: '위험도 점수 하나에 사람 인생이 좌우됐다',
    story: '미국 일부 주에서는 재범 위험·보석 적합성을 평가하는 알고리즘 점수를 재판부·판사가 참고하게 했는데, 특정 인종·집단에 불리한 편향이 있음이 드러났습니다. 실제로는 재범하지 않은 이들이 고위험으로 분류되는 비율이 높게 나타났고, 판사가 점수를 과도하게 신뢰하며 엄격한 판단을 내렸다는 비판이 제기됐습니다.',
    problems: {
      tool: '피고인의 과거 기록·인구통계 정보를 입력으로 받는 위험도 평가 모델.',
      prompt: '"점수가 높으면 위험한 사람"이라는 단순 해석.',
      process: '모델의 편향·오류율·설명가능성에 대한 공개·검증 부족. 판사·변호인이 점수에 반론하거나 맥락을 설명할 수 있는 절차가 제한적.'
    },
    checklist: [
      'AI 점수는 참고 자료일 뿐, 독립적인 법리·사실 판단이 우선임을 제도화한다.',
      '모델의 편향 평가·공개를 의무화하고, 논쟁·감사 가능하게 한다.',
      '피고인·변호인이 AI 평가에 이의를 제기할 수 있는 절차를 마련한다.',
      '인종·소득·거주지역 등 편향 위험 변수를 최소화하거나 보정한다.'
    ]
  },
  {
    id: 'interview-ai-bias',
    title: 'AI 점수 낮았다는 이유로, 포텐셜 높은 지원자가 대거 탈락했다',
    story: '일부 기업에서 AI 기반 적성·영상 인터뷰 분석 점수를 사실상 \'컷\'처럼 사용해, 실제 역량과 상관없이 특정 말투·표정·배경을 가진 지원자들이 대거 탈락하는 일이 벌어졌습니다.',
    problems: {
      tool: '말투·표정·시선·어휘를 평가하는 인터뷰 분석 AI.',
      prompt: '"AI 점수는 사람보다 더 객관적"이라는 신뢰.',
      process: 'HR이 AI 점수를 재검토·무시할 수 있는 재량권이 거의 없음. 장애·문화·언어 배경 차이에 대한 보정이 설계되지 않음.'
    },
    checklist: [
      'AI 점수는 1차 필터가 아닌 참고 정보로만 쓰고, 최종 판단은 사람이 한다.',
      '그룹별 합격률·점수 분포를 분석해 편향을 모니터링한다.',
      '영상·음성 신호 대신 실질 역량을 평가하는 과제를 중심에 둔다.',
      '지원자가 AI 평가 결과에 대해 피드백·이의 제기를 할 수 있게 한다.'
    ]
  },
  {
    id: 'city-planning-ai',
    title: '도시 계획을 \'데이터가 말해준다\'며 AI 시뮬레이션에 맡겼다',
    story: '일부 지자체·정부에서 교통·주택·복지 정책의 효과를 AI 시뮬레이션 결과에 크게 의존하다가, 현실의 정치·문화·행태적 요인을 과소평가해 정책 실패를 겪은 사례들이 보고되고 있습니다.',
    problems: {
      tool: '과거 데이터·모델 가정에 기반한 정책 시뮬레이션·예측 AI.',
      prompt: '"AI가 이 안이 가장 효율적이라고 했다"는 식의 정당화.',
      process: '시민 참여·현장 조사·소수 의견 수렴을 충분히 하지 않음. AI 결과의 가정·불확실성 범위를 공개하지 않음.'
    },
    checklist: [
      '정책 의사결정에서 AI는 참고 도구이고, 민주적 절차·공론이 중심임을 명시한다.',
      '모델 가정·데이터 한계를 공개하고, 다양한 시나리오를 함께 제시한다.',
      '주민·이해관계자의 의견을 별도 채널로 수집해 AI 결과와 비교한다.',
      '정책 실패 사례를 분석해 모델·데이터·프로세스를 보완한다.'
    ]
  }
];

// Show fun news section
function showFunnewsSection() {
  const heroSection = document.getElementById('heroSection');
  const matchSection = document.getElementById('matchSection');
  const jobInputSection = document.getElementById('jobInputSection');
  const trafficSection = document.getElementById('trafficSection');
  const funnewsSection = document.getElementById('funnewsSection');
  const aigallerySection = document.getElementById('aigallerySection');
  const disasterSection = document.getElementById('disasterSection');
  const aboutButton = document.getElementById('about-button');
  if (funnewsSection) {
    heroSection.style.display = 'none';
    matchSection.style.display = 'none';
    jobInputSection.style.display = 'none';
    trafficSection.style.display = 'none';
    aigallerySection.style.display = 'none';
    disasterSection.style.display = 'none';
    aboutButton.style.display = 'none';
    funnewsSection.style.display = 'flex';
    renderFunnewsGrid();
  }
}

// Render Fun News grid
function renderFunnewsGrid() {
  const grid = document.getElementById('funnewsGrid');
  const detail = document.getElementById('funnewsDetail');
  const mainContent = document.getElementById('funnewsMainContent');
  
  if (!grid) return;
  
  // Show main content, hide detail
  if (mainContent) mainContent.style.display = 'block';
  if (detail) detail.style.display = 'none';
  
  grid.innerHTML = '';
  
  // All cards use the same light gray color
  const brightness = 0.90; // Light gray
  
  FUN_NEWS_TMI.forEach((tmi, index) => {
    const card = document.createElement('div');
    card.className = 'funnews-card';
    card.dataset.tmiId = tmi.id;
    
    // Create box with uniform light gray color
    const box = document.createElement('div');
    box.className = 'funnews-card-box';
    box.style.backgroundColor = `rgb(${Math.round(255 * brightness)}, ${Math.round(255 * brightness)}, ${Math.round(255 * brightness)})`;
    box.style.borderColor = '#000';
    
    const name = document.createElement('h3');
    name.className = 'funnews-card-name';
    name.textContent = tmi.title;
    
    const subtitle = document.createElement('p');
    subtitle.className = 'funnews-card-subtitle';
    subtitle.textContent = tmi.subtitle;
    
    box.appendChild(name);
    box.appendChild(subtitle);
    
    card.appendChild(box);
    
    card.addEventListener('click', () => {
      showFunnewsDetail(tmi);
    });
    
    grid.appendChild(card);
  });
}

// Show Fun News detail page
function showFunnewsDetail(tmi) {
  const mainContent = document.getElementById('funnewsMainContent');
  const detail = document.getElementById('funnewsDetail');
  const detailContent = document.getElementById('funnewsDetailContent');
  
  if (!detail || !detailContent) return;
  
  // Hide main content, show detail
  if (mainContent) mainContent.style.display = 'none';
  detail.style.display = 'block';
  
  // Build detail page HTML (no images, only text content)
  let html = `
    <div class="funnews-detail-header">
      <h1 class="funnews-detail-title">${tmi.title}</h1>
      <p class="funnews-detail-subtitle">${tmi.subtitle}</p>
    </div>
    <div class="funnews-detail-body">
      <div class="funnews-detail-description">
        <p>${tmi.description}</p>
      </div>
      ${tmi.details && tmi.details.length > 0 ? `
      <div class="funnews-detail-points">
        ${tmi.details.map(detail => `
          <div class="funnews-detail-point">
            <p>${detail}</p>
          </div>
        `).join('')}
      </div>
      ` : ''}
    </div>
  `;
  
  detailContent.innerHTML = html;
  
  // Scroll to top
  detail.scrollTop = 0;
}

// Show AI gallery section
function showAigallerySection() {
  const heroSection = document.getElementById('heroSection');
  const matchSection = document.getElementById('matchSection');
  const jobInputSection = document.getElementById('jobInputSection');
  const trafficSection = document.getElementById('trafficSection');
  const funnewsSection = document.getElementById('funnewsSection');
  const aigallerySection = document.getElementById('aigallerySection');
  const disasterSection = document.getElementById('disasterSection');
  const aboutButton = document.getElementById('about-button');
  if (aigallerySection) {
    heroSection.style.display = 'none';
    matchSection.style.display = 'none';
    jobInputSection.style.display = 'none';
    trafficSection.style.display = 'none';
    funnewsSection.style.display = 'none';
    disasterSection.style.display = 'none';
    aboutButton.style.display = 'none';
    aigallerySection.style.display = 'flex';
    renderAigalleryGrid();
  }
}

// Show Disaster Gallery section
function showDisasterSection() {
  const heroSection = document.getElementById('heroSection');
  const matchSection = document.getElementById('matchSection');
  const jobInputSection = document.getElementById('jobInputSection');
  const trafficSection = document.getElementById('trafficSection');
  const funnewsSection = document.getElementById('funnewsSection');
  const aigallerySection = document.getElementById('aigallerySection');
  const disasterSection = document.getElementById('disasterSection');
  const aboutButton = document.getElementById('about-button');
  if (disasterSection) {
    heroSection.style.display = 'none';
    matchSection.style.display = 'none';
    jobInputSection.style.display = 'none';
    trafficSection.style.display = 'none';
    funnewsSection.style.display = 'none';
    aigallerySection.style.display = 'none';
    aboutButton.style.display = 'none';
    disasterSection.style.display = 'flex';
    renderDisasterGrid();
  }
}

// Render Disaster Gallery grid
function renderDisasterGrid() {
  const grid = document.getElementById('disasterGrid');
  const detail = document.getElementById('disasterDetail');
  const mainContent = document.getElementById('disasterMainContent');
  
  if (!grid) return;
  
  // Show main content, hide detail
  if (mainContent) mainContent.style.display = 'block';
  if (detail) detail.style.display = 'none';
  
  grid.innerHTML = '';
  
  // All cards use the same light gray color
  const brightness = 0.90; // Light gray
  
  AI_DISASTER_CASES.forEach((disaster, index) => {
    const card = document.createElement('div');
    card.className = 'disaster-card';
    card.dataset.disasterId = disaster.id;
    
    // Create box with uniform light gray color
    const box = document.createElement('div');
    box.className = 'disaster-card-box';
    box.style.backgroundColor = `rgb(${Math.round(255 * brightness)}, ${Math.round(255 * brightness)}, ${Math.round(255 * brightness)})`;
    box.style.borderColor = '#000';
    
    const name = document.createElement('h3');
    name.className = 'disaster-card-name';
    name.textContent = disaster.title;
    
    box.appendChild(name);
    
    card.appendChild(box);
    
    card.addEventListener('click', () => {
      showDisasterDetail(disaster);
    });
    
    grid.appendChild(card);
  });
}

// Show Disaster Gallery detail page
function showDisasterDetail(disaster) {
  const mainContent = document.getElementById('disasterMainContent');
  const detail = document.getElementById('disasterDetail');
  const detailContent = document.getElementById('disasterDetailContent');
  
  if (!detail || !detailContent) return;
  
  // Hide main content, show detail
  if (mainContent) mainContent.style.display = 'none';
  detail.style.display = 'block';
  
  // Build detail page HTML
  let html = `
    <div class="disaster-detail-header">
      <h1 class="disaster-detail-title">${disaster.title}</h1>
    </div>
    <div class="disaster-detail-body">
      <div class="disaster-detail-story">
        <p>${disaster.story}</p>
      </div>
      <div class="disaster-detail-problems">
        <h2 class="disaster-detail-problems-title">무엇이 문제였나?</h2>
        <div class="disaster-detail-problem-item">
          <strong>툴:</strong> ${disaster.problems.tool}
        </div>
        <div class="disaster-detail-problem-item">
          <strong>프롬프트/메시지:</strong> ${disaster.problems.prompt}
        </div>
        <div class="disaster-detail-problem-item">
          <strong>프로세스:</strong> ${disaster.problems.process}
        </div>
      </div>
      <div class="disaster-detail-checklist">
        <h2 class="disaster-detail-checklist-title">이런 실수 피하려면? (체크리스트)</h2>
        <ul class="disaster-detail-checklist-list">
          ${disaster.checklist.map(item => `
            <li class="disaster-detail-checklist-item">${item}</li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
  
  detailContent.innerHTML = html;
  
  // Scroll to top
  detail.scrollTop = 0;
}

// AI Gallery Projects Data
const AI_GALLERY_PROJECTS = [
  {
    id: 'thispersondoesnotexist',
    name: 'ThisPersonDoesNotExist',
    title: 'ThisPersonDoesNotExist',
    subtitle: '진짜 같은데… 이 사람, 세상에 없었다',
    description: '우버 소프트웨어 엔지니어 필립 왕은 NVIDIA의 StyleGAN 모델 코드를 활용해 \'ThisPersonDoesNotExist.com\'이라는 웹사이트를 만들었다. 이 사이트는 사용자가 새로고침을 할 때마다 GAN이 완전히 새로운 가짜 인물 얼굴을 생성해 보여주도록 동작했다. 그 결과 실제로 존재하지 않는 얼굴들이 마치 증명사진처럼 자연스럽게 쏟아지는, AI 합성 기술 시연장이 되었다.',
    images: ['thispersondoesnotexist1.jpeg', 'thispersondoesnotexist2.jpeg', 'thispersondoesnotexist3.jpeg', 'thispersondoesnotexist4.jpeg', 'thispersondoesnotexist5.jpeg', 'thispersondoesnotexist6.jpeg'],
    thumbnail: 'thispersondoesnotexist1.jpeg',
    url: 'https://www.thispersondoesnotexist.com'
  },
  {
    id: 'doodlestopictures',
    name: 'Doodles to Pictures',
    title: 'Doodles to Pictures',
    subtitle: '낙서 한 번 쓱– 현실 같은 사진으로 바뀌었다',
    description: 'MIT 미디어랩 연구자들은 Pix2Pix 모델을 기반으로, 사용자가 브라우저에서 윤곽선을 그리면 그걸 컬러 이미지로 바꿔주는 \'Doodles to Pictures\' 실험 페이지를 만들었다. 이 도구는 outline 이미지와 실제 사진 쌍으로 학습한 GAN을 활용해, 유저가 그린 단순 스케치를 "이럴 것 같다"는 사진 스타일로 자동 변환했다. 덕분에 전문 디자이너가 아니어도 마우스로 선 몇 개 긋는 것만으로 그럴듯한 건물, 도로, 사물 이미지를 얻을 수 있었다.',
    images: ['doodlestopictures.jpeg'],
    thumbnail: 'doodlestopictures.jpeg',
    url: 'https://mitmedialab.github.io/GAN-play/'
  },
  {
    id: 'deepart',
    name: 'DeepArt',
    title: 'DeepArt',
    subtitle: '내 셀카가 반 고흐 그림이 되었다',
    description: 'DeepArt.io 팀은 신경망 스타일 트랜스퍼 알고리즘을 이용해, 사용자가 업로드한 사진을 명화 스타일로 바꾸는 웹 서비스를 구축했다. 사용자는 원본 사진과 입히고 싶은 화가의 그림을 선택만 하면, 알고리즘이 두 이미지를 결합해 새로운 "디지털 회화"를 생성했다. 논문에서 제안된 스타일 트랜스퍼 기법을 실제 웹 서비스로 구현한 사례로, 일반 이용자도 클릭 몇 번으로 반 고흐·뭉크 풍 이미지를 만들어낼 수 있었다.',
    images: ['deepart1.jpeg', 'deepart2.jpeg'],
    thumbnail: 'deepart1.jpeg',
    url: 'https://10web.io/ai-tools/deepart-io/'
  },
  {
    id: 'infinitedrummachine',
    name: 'Infinite Drum Machine',
    title: 'Infinite Drum Machine',
    subtitle: '일상 소리가 나만의 비트가 되었다',
    description: 'Google Creative Lab의 팀은 브라우저에서 돌아가는 \'Infinite Drum Machine\'을 만들어, 수천 개의 짧은 사운드 샘플을 t‑SNE로 시각화하고 드럼머신처럼 연주할 수 있게 했다. 이 실험은 머신러닝으로 각 소리의 특징을 임베딩한 뒤, 비슷한 소리끼리 가까이 배치해 유저가 점을 찍고 루프를 재생하게 하는 방식으로 동작했다. 사용자는 차 경적, 박수, 타자기 소리를 골라 시퀀스에 올려두고, 한 번에 재생해 "AI가 정리해준 사운드 맵" 위에서 비트를 만들 수 있었다.',
    images: ['infinitedrummachine1.jpeg'],
    thumbnail: 'infinitedrummachine1.jpeg',
    url: 'https://experiments.withgoogle.com/ai/drum-machine/view/'
  },
  {
    id: 'semantris',
    name: 'Semantris',
    title: 'Semantris',
    subtitle: '단어로 하는 AI 눈치게임이 시작되었다',
    description: 'Google은 대규모 텍스트 임베딩 모델을 활용해, 사용자가 입력한 단어와 화면 속 단어들의 연관도를 실시간으로 평가하는 단어게임 \'Semantris\'를 만들었다. 모델은 각 단어를 벡터 공간에서 비교해 "가까운 의미"일수록 높은 점수를 주도록 설계되었고, 이 점수를 퍼즐/블록게임 규칙에 녹였다. 덕분에 사용자는 그냥 단어를 타이핑하는 것만으로도 AI가 언어 간 관계를 어떻게 해석하는지 체감할 수 있었다.',
    images: ['words1.jpeg', 'words2.jpeg'],
    thumbnail: 'words1.jpeg',
    url: 'https://research.google.com/semantris/'
  },
  {
    id: 'reelmind',
    name: 'Reelmind',
    title: 'Reelmind',
    subtitle: '문장 몇 줄이 뮤직비디오가 되었다',
    description: '인디 뮤지션들과 Reelmind.ai 팀은 텍스트‑투‑비디오, 이미지‑투‑비디오 엔진을 이용해 곡의 기획 단계부터 AI 뮤직비디오를 제작하는 사례를 만들었다. 참여자는 곡의 장르, 분위기, 스토리 키워드, 참고 이미지를 입력하고, Reelmind의 생성 모델이 이를 바탕으로 장면 전환과 색감을 유지한 전체 영상을 생성했다. 일부 프로젝트에서는 NolanAI 같은 스크립트 보조툴로 콘티를 정리한 뒤, Reelmind.ai로 최종 뮤직비디오를 뽑아 공연 백비주얼로 활용했다고 소개되었다.',
    images: ['reelmind1.jpeg', 'reelmind2.jpeg'],
    thumbnail: 'reelmind1.jpeg',
    url: 'https://reelmind.ai'
  },
  {
    id: 'strangerthings',
    name: 'Stranger Things',
    title: 'Stranger Things',
    subtitle: '아무 사진이 \'Stranger Things\' 포스터가 되었다',
    description: '크리에이티브 개발팀은 이미지 스타일 변환 모델을 응용해, 사용자가 업로드한 인물 사진을 \'Stranger Things\'풍 호러 포스터로 바꾸는 \'Even Stranger Things\' 실험을 진행했다. 이 프로젝트는 드라마 특유의 레트로 색감, 서체, 조명 스타일을 학습한 후, 원본 얼굴을 유지하면서도 배경과 조명을 재구성하는 방식으로 동작했다. 그 결과 누구든 사진 한 장만 올리면 넷플릭스 오리지널 시리즈 포스터에 등장한 것 같은 이미지를 얻을 수 있었다.',
    images: ['evenstrangerthings1.jpeg', 'evenstrangerthings2.jpeg'],
    thumbnail: 'evenstrangerthings1.jpeg',
    url: 'https://evenstranger.pw'
  },
  {
    id: 'sparky',
    name: 'Sparky',
    title: 'Sparky',
    subtitle: '평범한 물건을 합쳐 이상한 발명품을 만든다.',
    description: 'Google Arts & Culture Lab의 아티스트 인 레지던스 Lex Fefegha는 \'Sparky\'라는 실험을 통해, 일상 물건을 조합해 새로운 발명품을 제안하는 AI를 만들었다. 사용자가 좋아하는 음식, 음악, 이동수단 같은 정보를 입력하면, AI가 이를 조합해 기괴하지만 웃긴 발명품과 함께 "너의 발명가 캐릭터"를 생성해 준다. 이 프로젝트는 예술·발명 스토리텔링에 생성 AI를 섞어, 상상력을 자극하는 놀이처럼 구성되었다.',
    images: ['sparky1.jpeg', 'sparky2.jpeg'],
    thumbnail: 'sparky1.jpeg',
    url: 'https://artsandculture.google.com/experiment/sparky/EAGta7kR_XEXeA?hl=en'
  },
  {
    id: 'movingarchives',
    name: 'Moving Archives',
    title: 'Moving Archives',
    subtitle: '정지된 아카이브 사진이 움직이기 시작했다.',
    description: 'Google Arts & Culture Lab는 Harley‑Davidson Museum과 협업해, 오래된 아카이브 사진을 움직이는 영상으로 되살리는 \'Moving Archives\' 프로젝트를 만들었다. 아티스트 인 레지던스 Emmanuel Durgoni와 Gael Hugo는 Google의 Veo 영상 생성 모델로 정지 사진에 은은한 움직임을 입히고, Gemini와 음성 합성을 이용해 사진별 설명과 오디오 코멘터리를 생성했다. 사용자는 원본 정지 사진과 AI가 만들어 낸 동영상 사이를 바로 전환하며, 과거의 한 순간을 더 가까이 느낄 수 있게 되었다.',
    images: ['movingarchives1.jpeg', 'movingarchives2.jpeg'],
    thumbnail: 'movingarchives1.jpeg',
    url: 'https://artsandculture.google.com/experiment/moving-archives-×-harley%E2%80%91davidson/YwHOYiNQj-3wmg?hl=en'
  }
];

// Render AI Gallery grid
function renderAigalleryGrid() {
  const grid = document.getElementById('aigalleryGrid');
  const detail = document.getElementById('aigalleryDetail');
  const mainContent = document.getElementById('aigalleryMainContent');
  
  if (!grid) return;
  
  // Show main content, hide detail
  if (mainContent) mainContent.style.display = 'block';
  if (detail) detail.style.display = 'none';
  
  grid.innerHTML = '';
  
  AI_GALLERY_PROJECTS.forEach(project => {
    const card = document.createElement('div');
    card.className = 'aigallery-card';
    card.dataset.projectId = project.id;
    
    const thumbnail = document.createElement('div');
    thumbnail.className = 'aigallery-card-thumbnail';
    if (project.thumbnail) {
      const img = document.createElement('img');
      img.src = project.thumbnail;
      img.alt = project.name;
      thumbnail.appendChild(img);
    } else {
      // Placeholder for projects without thumbnail
      thumbnail.style.display = 'flex';
      thumbnail.style.alignItems = 'center';
      thumbnail.style.justifyContent = 'center';
      thumbnail.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      const placeholder = document.createElement('div');
      placeholder.textContent = project.name.charAt(0);
      placeholder.style.fontSize = '6rem';
      placeholder.style.color = '#fff';
      placeholder.style.fontWeight = 'bold';
      thumbnail.appendChild(placeholder);
    }
    
    const info = document.createElement('div');
    info.className = 'aigallery-card-info';
    
    const name = document.createElement('h3');
    name.className = 'aigallery-card-name';
    name.textContent = project.name;
    
    const subtitle = document.createElement('p');
    subtitle.className = 'aigallery-card-subtitle';
    subtitle.textContent = project.subtitle;
    
    info.appendChild(name);
    info.appendChild(subtitle);
    
    card.appendChild(thumbnail);
    card.appendChild(info);
    
    card.addEventListener('click', () => {
      showAigalleryDetail(project);
    });
    
    grid.appendChild(card);
  });
}

// Show AI Gallery detail page
function showAigalleryDetail(project) {
  const mainContent = document.getElementById('aigalleryMainContent');
  const detail = document.getElementById('aigalleryDetail');
  const detailContent = document.getElementById('aigalleryDetailContent');
  
  if (!detail || !detailContent) return;
  
  // Hide main content, show detail
  if (mainContent) mainContent.style.display = 'none';
  detail.style.display = 'block';
  
  // Build detail page HTML - Google Arts & Culture style
  let html = `
    <div class="aigallery-detail-header">
      <h1 class="aigallery-detail-title">${project.title}</h1>
      <p class="aigallery-detail-subtitle">${project.subtitle}</p>
      ${project.url ? `
      <div class="aigallery-detail-link-container">
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="aigallery-detail-link">
          웹사이트 방문하기 →
        </a>
      </div>
      ` : ''}
    </div>
    <div class="aigallery-detail-body">
      <div class="aigallery-detail-description">
        <p>${project.description}</p>
      </div>
      ${project.images.length > 0 ? `
      <div class="aigallery-detail-images">
        ${project.images.map((image, index) => `
          <div class="aigallery-detail-image-item">
            <img src="${image}" alt="${project.name} ${index + 1}" />
          </div>
        `).join('')}
      </div>
      ` : ''}
    </div>
  `;
  
  detailContent.innerHTML = html;
  
  // Scroll to top
  detail.scrollTop = 0;
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
    `;
    
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
  // Use detailedDescription if available, otherwise use description
  descriptionEl.textContent = tool.detailedDescription || tool.description;
  
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
  
  // Visit website button
  if (tool.url) {
    const visitButton = document.createElement('button');
    visitButton.className = 'tool-details-visit-button';
    visitButton.textContent = 'visit website';
    visitButton.onclick = () => {
      window.open(tool.url, '_blank');
    };
    usersEl.appendChild(visitButton);
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
  document.addEventListener('DOMContentLoaded', () => {
    initSphereAnimation();
    // Initialize fun news section on page load
    const funnewsSection = document.getElementById('funnewsSection');
    const funnewsMainContent = document.getElementById('funnewsMainContent');
    const funnewsDetail = document.getElementById('funnewsDetail');
    if (funnewsSection) {
      funnewsSection.style.display = 'none';
      if (funnewsMainContent) funnewsMainContent.style.display = 'block';
      if (funnewsDetail) funnewsDetail.style.display = 'none';
    }
  });
} else {
  initSphereAnimation();
  // Initialize fun news section on page load
  const funnewsSection = document.getElementById('funnewsSection');
  const funnewsMainContent = document.getElementById('funnewsMainContent');
  const funnewsDetail = document.getElementById('funnewsDetail');
  if (funnewsSection) {
    funnewsSection.style.display = 'none';
    if (funnewsMainContent) funnewsMainContent.style.display = 'block';
    if (funnewsDetail) funnewsDetail.style.display = 'none';
  }
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
  },
  grok: {
    name: 'Grok',
    monthlyVisitors: '약 2억 430만 회',
    avgVisitTime: '7분 27초',
    pagesPerVisit: '5.75페이지',
    bounceRate: '36.49%',
    countries: {
      '미국': 23.89,
      '인도': 9.77,
      '대한민국': 4.44,
      '홍콩': 4.08,
      '브라질': 4.02
    },
    trafficSources: {
      '직접 방문': 72.54,
      '검색': 15.90,
      '추천': 7.86,
      '소셜': 3.48,
      '디스플레이 광고': 0.18,
      '이메일': 0.04
    },
    topKeywords: [
      { keyword: 'grok', searches: '약 1,080만 회', cpc: '약 $0.86' },
      { keyword: 'grok ai', searches: '약 200만 회', cpc: '약 $0.40' },
      { keyword: '그록', searches: '약 71만 6,500회', cpc: '약 $0.37' },
      { keyword: 'gork', searches: '약 38만 9,600회', cpc: '약 $0.72' },
      { keyword: 'grok imagine', searches: '약 45만 3,600회', cpc: '약 $0.46' }
    ]
  },
  deepl: {
    name: 'DeepL',
    monthlyVisitors: '136.4M',
    avgVisitTime: '00:02:35',
    pagesPerVisit: '2.15',
    bounceRate: '64.14%',
    countries: {
      '일본': 14.65,
      '독일': 13.78,
      '프랑스': 7.86,
      '스페인': 5.26,
      '미국': 4.20
    },
    trafficSources: {
      '직접': 71.99,
      '검색': 26.00,
      '추천': 1.54,
      '디스플레이 광고': 0.35,
      '소셜': 0.08,
      '메일': 0.04
    },
    topKeywords: [
      { keyword: 'deepl', searches: '9.2M', cpc: '약 $0.17' },
      { keyword: 'translate', searches: '56.8M', cpc: '약 $0.25' },
      { keyword: 'traductor', searches: '43.9M', cpc: '약 $0.17' },
      { keyword: '翻訳', searches: '7.6M', cpc: '약 $0.34' },
      { keyword: 'deepl translate', searches: '577.0K', cpc: '약 $0.20' }
    ]
  },
  sora: {
    name: 'Sora',
    monthlyVisitors: '66.2M',
    avgVisitTime: '00:14:22',
    pagesPerVisit: '14.61페이지',
    bounceRate: '27.40%',
    countries: {
      '미국': 29.91,
      '일본': 5.91,
      '브라질': 4.56,
      '대한민국': 4.28,
      '인도': 3.81
    },
    trafficSources: {
      '직접 유입': 81.00,
      '검색': 9.48,
      '추천': 7.64,
      '소셜': 1.46,
      '디스플레이 광고': 0.25,
      '이메일': 0.16
    }
  },
  suno: {
    name: 'Suno',
    monthlyVisitors: '약 5,500만 회',
    avgVisitTime: '8분 26초',
    pagesPerVisit: '5.29 페이지',
    bounceRate: '38.95%',
    countries: {
      '미국': 21.74,
      '러시아': 5.25,
      '독일': 5.09,
      '브라질': 4.45,
      '일본': 4.42
    },
    trafficSources: {
      '직접 유입': 65.93,
      '검색': 30.90,
      '추천': 1.92,
      '소셜': 0.99,
      '디스플레이 광고': 0.23,
      '이메일': 0.02
    },
    topKeywords: [
      { keyword: 'suno', searches: '약 250만', cpc: '약 $0.21' },
      { keyword: 'suno ai', searches: '약 150만', cpc: '약 $0.28' },
      { keyword: 'suno ai music', searches: '약 6.79만', cpc: '약 $0.66' },
      { keyword: 'suno studio', searches: '약 10.27만', cpc: '약 $1.85' },
      { keyword: 'sunoai', searches: '약 6.08만', cpc: '약 $0.55' }
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
  '홍콩': { x: 680, y: 240 },
  '스페인': { x: 440, y: 200 }
};

// About button click handler
if (aboutButton) {
  // Add click handler to about button container
  aboutButton.addEventListener('click', (e) => {
    // Check if traffic button was clicked
    const trafficButton = document.getElementById('traffic-button');
    const funnewsButton = document.getElementById('funnews-button');
    const aigalleryButton = document.getElementById('aigallery-button');
    const disasterButton = document.getElementById('disaster-button');
    if (e.target === trafficButton || e.target.classList.contains('traffic-button')) {
      e.stopPropagation();
      showTrafficSection();
    } else if (e.target === funnewsButton || e.target.classList.contains('funnews-button')) {
      e.stopPropagation();
      showFunnewsSection();
    } else if (e.target === aigalleryButton || e.target.classList.contains('aigallery-button')) {
      e.stopPropagation();
      showAigallerySection();
    } else if (e.target === disasterButton || e.target.classList.contains('disaster-button')) {
      e.stopPropagation();
      showDisasterSection();
    } else if (e.target.textContent === 'about' || e.target.closest('span:not(.traffic-button):not(.funnews-button):not(.aigallery-button):not(.disaster-button)')) {
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
  
  // Add separate handler to funnews button if it exists
  const funnewsButton = document.getElementById('funnews-button');
  if (funnewsButton) {
    funnewsButton.addEventListener('click', (e) => {
      e.stopPropagation();
      showFunnewsSection();
    });
  }
  
  // Add separate handler to aigallery button if it exists
  const aigalleryButton = document.getElementById('aigallery-button');
  if (aigalleryButton) {
    aigalleryButton.addEventListener('click', (e) => {
      e.stopPropagation();
      showAigallerySection();
    });
  }
  
  // Add separate handler to disaster button if it exists
  const disasterButton = document.getElementById('disaster-button');
  if (disasterButton) {
    disasterButton.addEventListener('click', (e) => {
      e.stopPropagation();
      showDisasterSection();
    });
  }
}

// Back button handlers
const backButtonMatch = document.getElementById('backButtonMatch');
const backButtonJob = document.getElementById('backButtonJob');
const backButtonTraffic = document.getElementById('backButtonTraffic');
const backButtonFunnews = document.getElementById('backButtonFunnews');
const backButtonAigallery = document.getElementById('backButtonAigallery');

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

if (backButtonFunnews) {
  backButtonFunnews.addEventListener('click', () => {
    const detail = document.getElementById('funnewsDetail');
    const mainContent = document.getElementById('funnewsMainContent');
    if (detail && detail.style.display === 'block') {
      // If detail is showing, go back to grid
      detail.style.display = 'none';
      if (mainContent) mainContent.style.display = 'block';
    } else {
      // If grid is showing, go back to hero
      showHeroSection();
    }
  });
}

const backButtonFunnewsDetail = document.getElementById('backButtonFunnewsDetail');
if (backButtonFunnewsDetail) {
  backButtonFunnewsDetail.addEventListener('click', () => {
    renderFunnewsGrid();
  });
}

if (backButtonAigallery) {
  backButtonAigallery.addEventListener('click', () => {
    const detail = document.getElementById('aigalleryDetail');
    const mainContent = document.getElementById('aigalleryMainContent');
    if (detail && detail.style.display === 'block') {
      // If detail is showing, go back to grid
      detail.style.display = 'none';
      if (mainContent) mainContent.style.display = 'block';
    } else {
      // If grid is showing, go back to hero
      showHeroSection();
    }
  });
}

const backButtonAigalleryDetail = document.getElementById('backButtonAigalleryDetail');
if (backButtonAigalleryDetail) {
  backButtonAigalleryDetail.addEventListener('click', () => {
    renderAigalleryGrid();
  });
}

const backButtonDisaster = document.getElementById('backButtonDisaster');
if (backButtonDisaster) {
  backButtonDisaster.addEventListener('click', () => {
    const detail = document.getElementById('disasterDetail');
    const mainContent = document.getElementById('disasterMainContent');
    if (detail && detail.style.display === 'block') {
      // If detail is showing, go back to grid
      detail.style.display = 'none';
      if (mainContent) mainContent.style.display = 'block';
    } else {
      // If grid is showing, go back to hero
      showHeroSection();
    }
  });
}

const backButtonDisasterDetail = document.getElementById('backButtonDisasterDetail');
if (backButtonDisasterDetail) {
  backButtonDisasterDetail.addEventListener('click', () => {
    renderDisasterGrid();
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
    const funnewsSection = document.getElementById('funnewsSection');
    const aigallerySection = document.getElementById('aigallerySection');
    
    if (matchSection && matchSection.style.display !== 'none') {
      showHeroSection();
    } else if (jobInputSection && jobInputSection.style.display !== 'none') {
      showHeroSection();
    } else if (trafficSection && trafficSection.style.display !== 'none') {
      showHeroSection();
    } else if (funnewsSection && funnewsSection.style.display !== 'none') {
      showHeroSection();
    } else if (aigallerySection && aigallerySection.style.display !== 'none') {
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
