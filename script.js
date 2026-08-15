/* ============================================
   AI FROM HERE — Dynamic Platform Engine (White + Green UI & Refactored UX)
   JUMP Thailand 2026 — Project-Based AI Learning Platform
   ============================================ */

// ===== I18N BILINGUAL DICTIONARY =====
const i18n = {
    th: {
        appName: 'AI FROM HERE',
        appSub: 'JUMP Thailand 2026',
        authTagline: 'เรียนรู้จากสิ่งที่ชุมชนของคุณรู้ และสร้าง AI จากมัน',
        navDashboard: 'ภาพรวม',
        navMissions: 'ภารกิจของฉัน',
        navKnowledge: 'องค์ความรู้',
        navVerify: 'ตรวจสอบข้อมูล',
        navBuild: 'สร้าง Local AI',
        navTest: 'ทดสอบ AI',
        navImpact: 'ผลกระทบ',
        navProfile: 'โปรไฟล์',
        navTeacherReview: 'คลังชุมชน',
        navTeacherStudents: 'โครงงานนักเรียน',
        navTeacherKnowledge: 'คลังความรู้ชุมชน',
        navAdminHub: 'ภาพรวมเครือข่าย',
        navAdminUsers: 'ผู้ใช้งาน',
        navAdminLabs: 'Community Labs',
        loginTitle: 'เข้าสู่ระบบ',
        registerTitle: 'สร้างบัญชี',
        emailLabel: 'อีเมล',
        passwordLabel: 'รหัสผ่าน',
        confirmPasswordLabel: 'ยืนยันรหัสผ่าน',
        firstNameLabel: 'ชื่อ',
        lastNameLabel: 'นามสกุล',
        roleLabel: 'เลือกบทบาท',
        roleStudent: 'นักเรียน (AI Creator)',
        roleTeacher: 'ครู / ผู้เชี่ยวชาญในชุมชน',
        roleAdmin: 'ผู้ดูแลระบบ / Partner',
        rememberMe: 'จดจำฉัน',
        forgotPassword: 'ลืมรหัสผ่าน?',
        loginBtn: 'เข้าสู่ระบบ',
        registerBtn: 'สร้างบัญชี',
        noAccount: 'ยังไม่มีบัญชี?',
        registerLink: 'สมัครสมาชิก',
        haveAccount: 'มีบัญชีอยู่แล้ว?',
        loginLink: 'เข้าสู่ระบบ',
        termsLabel: 'ฉันยอมรับข้อกำหนดการใช้งานและนโยบายข้อมูล',
        quickDemoHeader: 'ทดลองเข้าสู่ระบบตามบทบาท:',
        errEmailRequired: 'กรุณากรอกอีเมล',
        errEmailInvalid: 'กรุณากรอกอีเมลให้ถูกต้อง',
        errPasswordRequired: 'กรุณากรอกรหัสผ่าน',
        errPasswordShort: 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร',
        errPasswordMismatch: 'รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง',
        errFirstNameRequired: 'กรุณากรอกชื่อ',
        errLastNameRequired: 'กรุณากรอกนามสกุล',
        errTermsRequired: 'กรุณายอมรับข้อกำหนดการใช้งาน',
        demoBtn: 'Start Demo',
        stopDemoBtn: 'หยุด Demo',
        searchPlaceholder: 'ค้นหาภารกิจ, องค์ความรู้...',
        activeMissionLabel: 'ภารกิจที่ทำอยู่:',
        heroTitle: 'สร้าง AI จากสิ่งที่ชุมชนของคุณรู้',
        heroSubtitle: 'ไม่ใช่แค่เรียน AI แต่ลงมือสร้าง AI จากปัญหาและองค์ความรู้ในพื้นที่จริง',
        btnCreateNewMission: 'สร้างภารกิจใหม่',
        viewAllMissions: 'ดูภารกิจทั้งหมด',
        statMissions: 'ภารกิจของฉัน',
        statKnowledge: 'องค์ความรู้ที่เก็บ',
        statAI: 'AI ที่สร้างสำเร็จ',
        statSkills: 'ทักษะที่ปลดล็อก',
        currentMissionTitle: 'ภารกิจปัจจุบัน (Active Mission)',
        emptyMissionTitle: 'ยังไม่มีภารกิจ',
        emptyMissionDesc: 'เริ่มต้นด้วยการกำหนดปัญหาหรือองค์ความรู้ที่คุณพบในชุมชนของคุณ',
        btnCreateFirstMission: 'สร้างภารกิจแรก',
        btnLoadDemoMission: 'โหลดตัวอย่าง Demo',
        progressLabel: 'ความคืบหน้า',
        missionsHeader: 'ภารกิจของฉัน',
        missionsSubheader: 'สร้างและจัดการภารกิจ AI จากโจทย์จริงในชุมชนของคุณ',
        knowledgeHeader: 'องค์ความรู้ของชุมชน',
        knowledgeSubheader: 'รวบรวมไฟล์เสียง ภาพ ข้อความ และเอกสารภายใต้ภารกิจที่เลือก',
        dropFilesTitle: 'ลากไฟล์มาวางที่นี่ หรือคลิกเพื่อเลือกไฟล์',
        supportFormats: 'รองรับไฟล์ Audio (เสียงสัมภาษณ์), Image (รูปถ่าย), Text (ข้อความ), PDF',
        addKnowledgeBtn: 'เพิ่มข้อมูล',
        sourcesTitle: 'แหล่งข้อมูลในภารกิจนี้',
        emptyKnowledgeTitle: 'ยังไม่มีองค์ความรู้ในภารกิจนี้',
        emptyKnowledgeDesc: 'เริ่มเก็บข้อมูลจริงจากปราชญ์ชาวบ้าน เกษตรกร หรือคนในชุมชนของคุณ',
        btnUploadFirstKnowledge: 'เพิ่มข้อมูลแรก',
        verifyHeader: 'ตรวจสอบองค์ความรู้',
        verifySubheader: 'ตรวจทานความถูกต้อง ความยินยอม (Consent) และส่งให้ครู/ผู้เชี่ยวชาญรับรอง',
        buildHeader: 'สร้าง Local AI',
        buildSubheader: 'เปลี่ยนองค์ความรู้ที่ผ่านการตรวจสอบในภารกิจนี้ ให้กลายเป็น AI ผู้ช่วยชุมชน',
        btnBuildLocalAI: 'สร้าง Local AI',
        bStep1: 'กำลังประมวลผลข้อมูล...',
        bStep2: 'กำลังสร้าง Knowledge Base...',
        bStep3: 'กำลังเชื่อมต่อ RAG Pipeline...',
        bStep4: 'กำลังตรวจสอบแหล่งข้อมูล...',
        bStep5: 'กำลังทดสอบ AI Model...',
        buildSuccessTitle: 'สร้าง AI สำเร็จ',
        btnOpenAI: 'เปิดทดสอบ AI',
        btnRetrainAI: 'สร้างใหม่อีกครั้ง (Re-build)',
        chatStatusOnline: 'พร้อมใช้งาน',
        trustLayerTitle: 'AI Trust Layer',
        impactHeader: 'จากการเรียนรู้ สู่ผลกระทบจริง',
        impactSubheader: 'เปลี่ยนบทบาทจากผู้ใช้ AI สู่ผู้สร้างสรรค์นวัตกรรม AI เพื่อพัฒนาชุมชน',
        flowStep1: 'เข้าถึงเทคโนโลยี',
        flowStep2: 'สร้างทักษะ AI',
        flowStep3: 'สร้าง Local AI',
        flowStep4: 'ผลกระทบชุมชน',
        impactStudentTitle: 'นักเรียน (Students)',
        impactStudent1: 'Skills: ทักษะ AI, Data & Critical Thinking',
        impactStudent2: 'Portfolio: ผลงาน AI จริงที่นำไปต่อยอดได้',
        impactStudent3: 'Digital Credential: ประกาศนียบัตรรับรองทักษะ',
        impactCommunityTitle: 'ชุมชนท้องถิ่น (Community)',
        impactComm1: 'Local Knowledge: อนุรักษ์ภูมิปัญญาท้องถิ่นไม่ให้สูญหาย',
        impactComm2: 'Verified Info: ข้อมูลผ่านการรับรองน่าเชื่อถือ',
        impactComm3: 'AI ที่เข้าใจบริบทพื้นที่: ใช้งานได้จริงในชีวิตประจำวัน',
        impactPartnerTitle: 'พันธมิตรเครือข่าย (Partners)',
        impactPart1: 'Cloud & AI Infrastructure Scaling',
        impactPart2: 'Connectivity for Remote Areas',
        impactPart3: 'National Platform Integration',
        impactPart4: 'CSR / ESG Outcome ที่วัดผลความยั่งยืนได้จริง',
        profileStatProjects: 'ภารกิจที่สร้าง',
        profileStatSources: 'องค์ความรู้',
        profileStatDeployed: 'AI ที่สร้างแล้ว',
        profileStatSkills: 'ทักษะที่ปลดล็อก',
        profileSkillsTitle: 'ทักษะที่ได้รับการพัฒนา',
        profilePortfolioTitle: 'Project Portfolio (ผลงาน AI)',
        btnEditProfile: 'แก้ไขโปรไฟล์',
        settingsTitle: 'การตั้งค่าบัญชี & ข้อมูล',
        settingsDesc: 'จัดการข้อมูลส่วนตัว หรือรีเซ็ตข้อมูลภารกิจของฉันสำหรับเริ่มต้นใหม่',
        btnResetMyData: 'รีเซ็ตข้อมูลภารกิจของฉัน',
        modalCreateMissionTitle: 'สร้างภารกิจใหม่',
        modalCreateMissionDesc: 'กำหนดปัญหาจริงที่คุณพบในชุมชน และตั้งเป้าหมายสร้าง AI ผู้ช่วย',
        fieldMissionTitle: 'ชื่อภารกิจ AI',
        fieldCategory: 'หมวดหมู่',
        fieldCustomCategory: 'ระบุหมวดหมู่',
        fieldEmoji: 'ไอคอนสัญลักษณ์',
        fieldCommunity: 'ชุมชน / โรงเรียน / พื้นที่',
        fieldProblem: 'ปัญหาที่ต้องการแก้ (Problem Statement)',
        fieldGoal: 'เป้าหมายของ AI (Goal)',
        btnSubmitCreateMission: 'สร้างภารกิจ',
        modalAddKnowledgeTitle: 'เพิ่มองค์ความรู้เข้าสู่ระบบ',
        modalAddKnowledgeDesc: 'บันทึกข้อมูลและแหล่งที่มาพร้อม Consent จากผู้ให้ข้อมูลในชุมชน',
        fieldKnowTitle: 'ชื่อองค์ความรู้ / หัวข้อ',
        fieldContributor: 'ผู้ให้ข้อมูล (Contributor)',
        fieldSourceType: 'ประเภทแหล่งข้อมูล',
        fieldKnowContent: 'เนื้อหาหรือข้อความสำคัญที่สกัดได้ (Extracted Content)',
        consentAgreementLabel: 'ได้รับความยินยอม (Consent) จากผู้ให้ข้อมูลในการนำมาสร้าง AI เพื่อประโยชน์ชุมชน',
        btnSaveKnowledge: 'บันทึกองค์ความรู้',
        modalEditProfileTitle: 'แก้ไขโปรไฟล์',
        fieldBio: 'คำแนะนำตัวเอง / ความสนใจ (Bio)',
        btnSaveProfile: 'บันทึกโปรไฟล์',
        confirmDeleteTitle: 'ยืนยันการลบข้อมูล',
        btnCancel: 'ยกเลิก',
        btnConfirmDelete: 'ลบข้อมูล',
        teacherReviewHeader: 'ศูนย์องค์ความรู้และข้อเสนอแนะชุมชน',
        teacherReviewSubheader: 'ตรวจสอบความถูกต้อง แหล่งที่มา และให้คำแนะนำแก่นักเรียน',
        teacherStudentsHeader: 'โครงงาน AI ของนักเรียนทั้งหมด',
        teacherStudentsSubheader: 'ติดตามความก้าวหน้าและการพัฒนาทักษะ AI ของนักเรียนในสังกัด',
        adminHubHeader: 'ภาพรวมเครือข่าย AI FROM HERE',
        adminHubSubheader: 'สถิติและผลกระทบของโครงการระดับประเทศ JUMP Thailand 2026',
        mobileHomeQuestion: 'วันนี้อยากทำอะไร?',
        mobileAddKnowledge: 'เพิ่มความรู้',
        mobileAskAI: 'ถาม Local AI',
        mobileLearningTitle: 'กำลังเรียนรู้',
        mobileViewDetails: 'ดูรายละเอียด',
        mobileCommunityKnowledge: 'ความรู้ของชุมชน',
        mobileRecentActivity: 'กิจกรรมล่าสุด',
        captureAudio: 'บันทึกเสียง',
        captureAudioDesc: 'เล่าเรื่องให้ AI ฟัง',
        capturePhoto: 'ถ่ายรูป',
        capturePhotoDesc: 'ถ่ายสิ่งที่อยากเก็บไว้',
        captureVideo: 'ถ่ายวิดีโอ',
        captureVideoDesc: 'บันทึกเรื่องราวของชุมชน',
        captureUpload: 'อัปโหลดไฟล์',
        captureUploadDesc: 'รูป / PDF / เสียง / วิดีโอ',
        filterAll: 'ทั้งหมด',
        filterLearning: 'กำลังเรียนรู้',
        filterPending: 'รอยืนยัน',
        filterReady: 'พร้อมใช้งาน',
        pickerTitle: 'เพิ่มความรู้',
        pickerDesc: 'เลือกวิธีที่สะดวกที่สุด',
        audioRecorderTitle: 'บันทึกเสียง',
        audioRecorderDesc: 'พูดเล่าเรื่องที่อยากเก็บไว้ AI จะช่วยถอดเป็นข้อความ',
        photoCaptureTitle: 'ถ่ายรูป',
        photoCaptureDesc: 'ถ่ายภาพสิ่งที่อยากเก็บไว้ แล้วบอก AI ว่าเกี่ยวกับอะไร',
        videoCaptureTitle: 'ถ่ายวิดีโอ',
        videoCaptureDesc: 'บันทึกเรื่องราวของชุมชน AI จะช่วยถอดและจัดข้อมูล',
        btnConvertAI: 'ให้ AI แปลงเป็นข้อมูล',
        btnAnalyzeAI: 'ให้ AI วิเคราะห์',
        btnDelete: 'ลบ',
        btnRetake: 'ถ่ายใหม่',
        btnClose: 'ปิด',
        photoAboutLabel: 'ภาพนี้เกี่ยวกับอะไร?',
        audioReady: 'พร้อมบันทึก',
        onboardWelcome: 'ยินดีต้อนรับสู่ AI FROM HERE',
        onboardDesc: 'มาช่วยกันเก็บความรู้ของชุมชน และสร้าง AI จากมัน',
        onboardContinue: 'เริ่มต้น',
        onboardChoose: 'เลือกสิ่งที่อยากทำ',
        onboardAddFirst: 'เพิ่มความรู้ครั้งแรก',
        onboardTryAI: 'ลองถาม Local AI',
        offlineTitle: 'ไม่มีอินเทอร์เน็ต',
        offlineDesc: 'ข้อมูลของคุณถูกเก็บไว้ในเครื่อง และจะส่งเมื่อเชื่อมต่ออีกครั้ง',
        notifTitle: 'การแจ้งเตือน',
        notifMarkAll: 'อ่านทั้งหมด',
        navHome: 'หน้าแรก',
        navAdd: 'เพิ่มความรู้',
        navAI: 'AI'
    },
    en: {
        appName: 'AI FROM HERE',
        appSub: 'JUMP Thailand 2026',
        authTagline: 'Learn from what your community knows, and build AI from it.',
        navDashboard: 'Dashboard',
        navMissions: 'My Missions',
        navKnowledge: 'Knowledge',
        navVerify: 'Verify Data',
        navBuild: 'Build Local AI',
        navTest: 'Test AI',
        navImpact: 'Impact',
        navProfile: 'Profile',
        navTeacherReview: 'Review Queue',
        navTeacherStudents: 'Student Projects',
        navTeacherKnowledge: 'Community Knowledge',
        navAdminHub: 'Network Overview',
        navAdminUsers: 'Users Directory',
        navAdminLabs: 'Community Labs',
        loginTitle: 'Sign In',
        registerTitle: 'Create Account',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        confirmPasswordLabel: 'Confirm Password',
        firstNameLabel: 'First Name',
        lastNameLabel: 'Last Name',
        roleLabel: 'Select Role',
        roleStudent: 'Student (AI Creator)',
        roleTeacher: 'Teacher / Community Expert',
        roleAdmin: 'Admin / Partner',
        rememberMe: 'Remember Me',
        forgotPassword: 'Forgot Password?',
        loginBtn: 'Sign In',
        registerBtn: 'Create Account',
        noAccount: "Don't have an account?",
        registerLink: 'Sign Up',
        haveAccount: 'Already have an account?',
        loginLink: 'Sign In',
        termsLabel: 'I agree to the Terms of Service and Data Policy',
        quickDemoHeader: 'Quick Demo Sign In by Role:',
        errEmailRequired: 'Please enter your email',
        errEmailInvalid: 'Please enter a valid email address',
        errPasswordRequired: 'Please enter your password',
        errPasswordShort: 'Password must be at least 6 characters',
        errPasswordMismatch: 'Passwords do not match. Please check again.',
        errFirstNameRequired: 'Please enter your first name',
        errLastNameRequired: 'Please enter your last name',
        errTermsRequired: 'Please accept the terms of service',
        demoBtn: 'Start Demo',
        stopDemoBtn: 'Stop Demo',
        searchPlaceholder: 'Search missions, knowledge...',
        activeMissionLabel: 'Active Mission:',
        heroTitle: 'Build AI from what your community knows',
        heroSubtitle: "Don't just learn AI — build real AI assistants from local problems and community wisdom.",
        btnCreateNewMission: 'Create New Mission',
        viewAllMissions: 'View All Missions',
        statMissions: 'My Missions',
        statKnowledge: 'Knowledge Sources',
        statAI: 'AI Models Built',
        statSkills: 'Skills Unlocked',
        currentMissionTitle: 'Current Active Mission',
        emptyMissionTitle: 'No Missions Yet',
        emptyMissionDesc: 'Start by defining a real-world challenge or local wisdom from your community.',
        btnCreateFirstMission: 'Create First Mission',
        btnLoadDemoMission: 'Load Demo Mission',
        progressLabel: 'Progress',
        missionsHeader: 'My Missions',
        missionsSubheader: 'Create and manage localized AI projects grounded in community knowledge.',
        knowledgeHeader: 'Community Knowledge Base',
        knowledgeSubheader: 'Collect and organize audio interviews, photos, notes, and guides for this mission.',
        dropFilesTitle: 'Drop files here or click to upload',
        supportFormats: 'Supports Audio, Image, Text, PDF with built-in Consent verification',
        addKnowledgeBtn: 'Add Knowledge',
        sourcesTitle: 'Knowledge Sources in this Mission',
        emptyKnowledgeTitle: 'No Knowledge Collected Yet',
        emptyKnowledgeDesc: 'Start gathering local ground truth from community elders, farmers, or residents.',
        btnUploadFirstKnowledge: 'Upload First Source',
        verifyHeader: 'Verify Knowledge',
        verifySubheader: 'Review accuracy, source trace, and consent before injecting into AI model',
        buildHeader: 'Build Local AI',
        buildSubheader: 'Transform verified community knowledge into an intelligent assistant.',
        btnBuildLocalAI: 'BUILD LOCAL AI',
        bStep1: 'Processing Knowledge Data...',
        bStep2: 'Building Knowledge Base...',
        bStep3: 'Connecting RAG Pipeline...',
        bStep4: 'Verifying Citation Sources...',
        bStep5: 'Testing Local AI Model...',
        buildSuccessTitle: 'Your Local AI is Ready',
        btnOpenAI: 'Test AI Assistant',
        btnRetrainAI: 'Re-build AI',
        chatStatusOnline: 'Online',
        trustLayerTitle: 'AI Trust Layer',
        impactHeader: 'From Learning to Real Impact',
        impactSubheader: 'Empowering children to become AI Creators solving local challenges.',
        flowStep1: 'Connectivity',
        flowStep2: 'AI Capabilities',
        flowStep3: 'Local AI Creation',
        flowStep4: 'Community Impact',
        impactStudentTitle: 'Student (AI Creator)',
        impactStudent1: 'Skills: AI, Data & Critical Thinking',
        impactStudent2: 'Portfolio: Real deployed AI projects',
        impactStudent3: 'Digital Credential: Skill Certification',
        impactCommunityTitle: 'Local Community',
        impactComm1: 'Local Knowledge: Preserving generational wisdom',
        impactComm2: 'Verified Info: Trusted ground truth',
        impactComm3: 'Locally-grounded AI: Practical everyday use',
        impactPartnerTitle: 'Partners & Network',
        impactPart1: 'Cloud & AI Infrastructure Scaling',
        impactPart2: 'Connectivity for Remote Areas',
        impactPart3: 'National Platform Integration',
        impactPart4: 'Measurable CSR / ESG Outcomes',
        profileStatProjects: 'Missions Created',
        profileStatSources: 'Verified Sources',
        profileStatDeployed: 'Deployed AI',
        profileStatSkills: 'Skills',
        profileSkillsTitle: 'Skill Development Progress',
        profilePortfolioTitle: 'Project Portfolio',
        btnEditProfile: 'Edit Profile',
        settingsTitle: 'Account & Data Settings',
        settingsDesc: 'Manage profile data or reset your personal missions to start fresh.',
        btnResetMyData: 'Reset My Mission Data',
        modalCreateMissionTitle: 'Create New Mission',
        modalCreateMissionDesc: 'Define a real problem in your community and set a goal to build an AI assistant.',
        fieldMissionTitle: 'Mission Title',
        fieldCategory: 'Category',
        fieldCustomCategory: 'Specify Category',
        fieldEmoji: 'Icon / Symbol',
        fieldCommunity: 'Community / School / Area',
        fieldProblem: 'Problem Statement',
        fieldGoal: 'Goal of AI Assistant',
        btnSubmitCreateMission: 'Create Mission',
        modalAddKnowledgeTitle: 'Add Knowledge to Mission',
        modalAddKnowledgeDesc: 'Record community data with verified consent from local contributors.',
        fieldKnowTitle: 'Knowledge Title / Topic',
        fieldContributor: 'Contributor',
        fieldSourceType: 'Source File Type',
        fieldKnowContent: 'Extracted Content / Notes',
        consentAgreementLabel: 'Verified Consent granted from contributor to use this data for community AI.',
        btnSaveKnowledge: 'Save Knowledge Source',
        modalEditProfileTitle: 'Edit Profile',
        fieldBio: 'Bio / Interests',
        btnSaveProfile: 'Save Profile',
        confirmDeleteTitle: 'Confirm Deletion',
        btnCancel: 'Cancel',
        btnConfirmDelete: 'Delete Data',
        teacherReviewHeader: 'Knowledge Review Queue',
        teacherReviewSubheader: 'Review accuracy, source trace, and provide guidance to student creators.',
        teacherStudentsHeader: 'All Student AI Projects',
        teacherStudentsSubheader: 'Monitor learning progress and AI project development.',
        adminHubHeader: 'AI FROM HERE Network Overview',
        adminHubSubheader: 'National metrics and community impact for JUMP Thailand 2026.',
        mobileHomeQuestion: 'What do you want to do today?',
        mobileAddKnowledge: 'Add Knowledge',
        mobileAskAI: 'Ask Local AI',
        mobileLearningTitle: 'AI is Learning',
        mobileViewDetails: 'View details',
        mobileCommunityKnowledge: 'Community Knowledge',
        mobileRecentActivity: 'Recent Activity',
        captureAudio: 'Record Audio',
        captureAudioDesc: 'Tell your story to AI',
        capturePhoto: 'Take Photo',
        capturePhotoDesc: 'Capture what you want to save',
        captureVideo: 'Record Video',
        captureVideoDesc: 'Record community stories',
        captureUpload: 'Upload File',
        captureUploadDesc: 'Image / PDF / Audio / Video',
        filterAll: 'All',
        filterLearning: 'Learning',
        filterPending: 'Pending Review',
        filterReady: 'Ready',
        pickerTitle: 'Add Knowledge',
        pickerDesc: 'Choose the easiest way',
        audioRecorderTitle: 'Record Audio',
        audioRecorderDesc: 'Speak what you want to save — AI will transcribe it',
        photoCaptureTitle: 'Take Photo',
        photoCaptureDesc: 'Capture an image and tell AI what it is about',
        videoCaptureTitle: 'Record Video',
        videoCaptureDesc: 'Record community stories — AI will extract knowledge',
        btnConvertAI: 'Convert with AI',
        btnAnalyzeAI: 'Analyze with AI',
        btnDelete: 'Delete',
        btnRetake: 'Retake',
        btnClose: 'Close',
        photoAboutLabel: 'What is this photo about?',
        audioReady: 'Ready to record',
        onboardWelcome: 'Welcome to AI FROM HERE',
        onboardDesc: 'Let\'s collect community knowledge and build AI from it',
        onboardContinue: 'Get Started',
        onboardChoose: 'Choose what to do',
        onboardAddFirst: 'Add first knowledge',
        onboardTryAI: 'Try Local AI',
        offlineTitle: 'No internet connection',
        offlineDesc: 'Your data is saved locally and will sync when connected',
        notifTitle: 'Notifications',
        notifMarkAll: 'Mark all read',
        navHome: 'Home',
        navAdd: 'Add',
        navAI: 'AI'
    }
};

// ===== DATA STORAGE SERVICE =====
class StorageService {
    static getUsers() {
        try {
            const raw = localStorage.getItem('afh_users_v3');
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        
        const defaultUsers = [
            {
                id: 'user_student',
                name: 'เยาวชนผู้สร้าง AI',
                lastName: '(นักเรียน)',
                email: 'student@aifromhere.edu',
                password: 'password123',
                role: 'student',
                roleTitle: 'Local AI Creator',
                avatar: 'ย',
                community: 'ชุมชนดอยช้าง เชียงราย',
                bio: 'นักเรียนผู้สนใจการนำ AI มาอนุรักษ์ความรู้การเกษตรของชุมชน',
                createdAt: '2026-08-10'
            },
            {
                id: 'user_somchai',
                name: 'อ.สมชาย',
                lastName: 'ใจมั่น',
                email: 'somchai@school.edu',
                password: 'password123',
                role: 'teacher',
                roleTitle: 'ครูผู้เชี่ยวชาญ AI ชุมชน',
                avatar: 'ส',
                community: 'โรงเรียนดอยช้างวิทยา',
                bio: 'ครูที่ปรึกษาโครงการ Project-Based AI Learning เพื่อพัฒนาเยาวชน',
                createdAt: '2026-08-01'
            },
            {
                id: 'user_admin',
                name: 'Admin JUMP',
                lastName: 'Partner',
                email: 'admin@aifromhere.org',
                password: 'password123',
                role: 'admin',
                roleTitle: 'Platform Director',
                avatar: 'A',
                community: 'JUMP Thailand Hub',
                bio: 'ผู้ประสานงานความร่วมมือระดับประเทศเพื่อขยายผล Impact',
                createdAt: '2026-07-15'
            }
        ];
        StorageService.saveUsers(defaultUsers);
        return defaultUsers;
    }

    static saveUsers(users) {
        localStorage.setItem('afh_users_v3', JSON.stringify(users));
    }

    static getCurrentUserId() {
        return localStorage.getItem('afh_current_user_id');
    }

    static setCurrentUserId(id) {
        if (id) {
            localStorage.setItem('afh_current_user_id', id);
        } else {
            localStorage.removeItem('afh_current_user_id');
        }
    }

    static getCurrentUser() {
        const id = StorageService.getCurrentUserId();
        if (!id) return null;
        const users = StorageService.getUsers();
        return users.find(u => u.id === id) || null;
    }

    static updateUser(updatedUser) {
        const users = StorageService.getUsers();
        const index = users.findIndex(u => u.id === updatedUser.id);
        if (index !== -1) {
            users[index] = updatedUser;
            StorageService.saveUsers(users);
        }
    }

    // MISSIONS (User Scoped)
    static getMissions() {
        try {
            const raw = localStorage.getItem('afh_missions_db');
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return [];
    }

    static saveMissions(missions) {
        localStorage.setItem('afh_missions_db', JSON.stringify(missions));
    }

    static getUserMissions(userId) {
        const all = StorageService.getMissions();
        return all.filter(m => m.userId === userId);
    }

    static getMissionById(missionId) {
        const all = StorageService.getMissions();
        return all.find(m => m.id === missionId) || null;
    }

    static addMission(mission) {
        const all = StorageService.getMissions();
        all.unshift(mission);
        StorageService.saveMissions(all);

        NotificationManager.addNotification({
            userId: mission.userId,
            type: 'mission_created',
            title: 'สร้างภารกิจใหม่สำเร็จ',
            message: `เริ่มทำภารกิจ "${mission.title}" แล้ว! เพิ่มองค์ความรู้แรกของคุณ`,
            relatedId: mission.id
        });
    }

    static updateMission(mission) {
        const all = StorageService.getMissions();
        const idx = all.findIndex(m => m.id === mission.id);
        if (idx !== -1) {
            all[idx] = mission;
            StorageService.saveMissions(all);
        }
    }

    static deleteMission(missionId) {
        let allMissions = StorageService.getMissions();
        allMissions = allMissions.filter(m => m.id !== missionId);
        StorageService.saveMissions(allMissions);

        let allKnowledge = StorageService.getKnowledge();
        allKnowledge = allKnowledge.filter(k => k.missionId !== missionId);
        StorageService.saveKnowledge(allKnowledge);
    }

    // KNOWLEDGE (User & Mission Scoped)
    static getKnowledge() {
        try {
            const raw = localStorage.getItem('afh_knowledge_db');
            if (raw) {
                const list = JSON.parse(raw);
                list.forEach(k => { if (k.status === 'pending') k.status = 'verified'; });
                return list;
            }
        } catch (e) {}
        return [];
    }

    static saveKnowledge(items) {
        localStorage.setItem('afh_knowledge_db', JSON.stringify(items));
    }

    static getKnowledgeForMission(missionId) {
        const all = StorageService.getKnowledge();
        return all.filter(k => k.missionId === missionId);
    }

    static getUserKnowledge(userId) {
        const all = StorageService.getKnowledge();
        return all.filter(k => k.userId === userId);
    }

    static addKnowledge(item) {
        item.status = 'verified'; // 100% Verified & Ready to use instantly!
        const all = StorageService.getKnowledge();
        all.unshift(item);
        StorageService.saveKnowledge(all);

        NotificationManager.addNotification({
            userId: item.userId,
            type: 'knowledge_uploaded',
            title: 'บันทึกองค์ความรู้สำเร็จ',
            message: `องค์ความรู้ "${item.title}" พร้อมใช้งานทันที Local AI ได้เรียนรู้ข้อมูลแล้ว`,
            relatedId: item.id
        });
    }

    static updateKnowledge(item) {
        const all = StorageService.getKnowledge();
        const idx = all.findIndex(k => k.id === item.id);
        if (idx !== -1) {
            all[idx] = item;
            StorageService.saveKnowledge(all);
        }
    }

    static deleteKnowledge(id) {
        let all = StorageService.getKnowledge();
        all = all.filter(k => k.id !== id);
        StorageService.saveKnowledge(all);
    }

    static resetUserData(userId) {
        let allMissions = StorageService.getMissions();
        allMissions = allMissions.filter(m => m.userId !== userId);
        StorageService.saveMissions(allMissions);

        let allKnowledge = StorageService.getKnowledge();
        allKnowledge = allKnowledge.filter(k => k.userId !== userId);
        StorageService.saveKnowledge(allKnowledge);

        let allNotifs = NotificationManager.getAllNotifications();
        allNotifs = allNotifs.filter(n => n.userId !== userId);
        NotificationManager.saveNotifications(allNotifs);
    }
}

// ===== REAL NOTIFICATION SYSTEM MANAGER (USER ISOLATED) =====
class NotificationManager {
    static getAllNotifications() {
        try {
            const raw = localStorage.getItem('afh_notifications_db');
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return [];
    }

    static saveNotifications(notifs) {
        localStorage.setItem('afh_notifications_db', JSON.stringify(notifs));
    }

    static getUserNotifications(userId) {
        const all = NotificationManager.getAllNotifications();
        return all.filter(n => n.userId === userId);
    }

    static addNotification({ userId, type, title, message, relatedId }) {
        if (!userId) return;
        const all = NotificationManager.getAllNotifications();
        const notif = {
            id: 'notif_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
            userId: userId,
            type: type || 'system',
            title: title,
            message: message,
            relatedId: relatedId || null,
            read: false,
            createdAt: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
        };
        all.unshift(notif);
        NotificationManager.saveNotifications(all);
        NotificationManager.renderBadgeAndPanel();
    }

    static markAsRead(notifId) {
        const all = NotificationManager.getAllNotifications();
        const found = all.find(n => n.id === notifId);
        if (found) {
            found.read = true;
            NotificationManager.saveNotifications(all);
            NotificationManager.renderBadgeAndPanel();
        }
        return found;
    }

    static markAllAsRead() {
        const currentUser = StorageService.getCurrentUser();
        if (!currentUser) return;
        const all = NotificationManager.getAllNotifications();
        all.forEach(n => {
            if (n.userId === currentUser.id) n.read = true;
        });
        NotificationManager.saveNotifications(all);
        NotificationManager.renderBadgeAndPanel();
        showToast(currentLang === 'th' ? 'ทำเครื่องหมายอ่านทั้งหมดแล้ว' : 'Marked all as read', 'info');
    }

    static renderBadgeAndPanel() {
        const currentUser = StorageService.getCurrentUser();
        const badge = document.getElementById('notif-badge');
        const list = document.getElementById('notif-list');

        if (!currentUser) {
            if (badge) badge.classList.add('hidden');
            return;
        }

        const userNotifs = NotificationManager.getUserNotifications(currentUser.id);
        const unreadCount = userNotifs.filter(n => !n.read).length;

        if (badge) {
            if (unreadCount > 0) {
                badge.textContent = unreadCount;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        if (list) {
            if (userNotifs.length === 0) {
                list.innerHTML = `<div class="notif-empty">${currentLang === 'th' ? 'ไม่มีการแจ้งเตือนในขณะนี้' : 'No notifications'}</div>`;
            } else {
                list.innerHTML = userNotifs.map(n => `
                    <div class="notif-item ${n.read ? 'read' : 'unread'}" onclick="handleNotificationClick('${n.id}')">
                        <div class="notif-icon">
                            <i data-lucide="${getNotifIcon(n.type)}"></i>
                        </div>
                        <div class="notif-content">
                            <div class="notif-item-title">${n.title}</div>
                            <div class="notif-item-msg">${n.message}</div>
                            <div class="notif-item-time">${n.createdAt}</div>
                        </div>
                    </div>
                `).join('');
            }
            initIcons();
        }

        const mobileList = document.getElementById('mobile-notif-list');
        const mobileBadge = document.getElementById('mobile-notif-badge');
        if (mobileBadge) {
            if (unreadCount > 0) {
                mobileBadge.textContent = unreadCount;
                mobileBadge.classList.remove('hidden');
            } else {
                mobileBadge.classList.add('hidden');
            }
        }
        if (mobileList) {
            if (userNotifs.length === 0) {
                mobileList.innerHTML = `<div class="notif-empty">${currentLang === 'th' ? 'ไม่มีการแจ้งเตือนในขณะนี้' : 'No notifications'}</div>`;
            } else {
                mobileList.innerHTML = userNotifs.map(n => `
                    <div class="notif-item ${n.read ? 'read' : 'unread'}" onclick="handleNotificationClick('${n.id}'); closeMobileNotificationSheet();">
                        <div class="notif-icon"><i data-lucide="${getNotifIcon(n.type)}"></i></div>
                        <div class="notif-content">
                            <div class="notif-item-title">${n.title}</div>
                            <div class="notif-item-msg">${n.message}</div>
                            <div class="notif-item-time">${n.createdAt}</div>
                        </div>
                    </div>
                `).join('');
            }
            initIcons();
        }
    }
}

function getNotifIcon(type) {
    switch (type) {
        case 'mission_created': return 'target';
        case 'knowledge_uploaded': return 'file-up';
        case 'knowledge_verified': return 'check-circle-2';
        case 'knowledge_rejected': return 'alert-circle';
        case 'ai_ready':
        case 'ai_build_complete': return 'sparkles';
        default: return 'bell';
    }
}

function toggleNotificationDropdown() {
    const dropdown = document.getElementById('notif-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
        NotificationManager.renderBadgeAndPanel();
    }
}

function handleNotificationClick(notifId) {
    const notif = NotificationManager.markAsRead(notifId);
    const dropdown = document.getElementById('notif-dropdown');
    if (dropdown) dropdown.classList.add('hidden');

    if (!notif) return;

    if (notif.type === 'knowledge_verified' || notif.type === 'knowledge_uploaded') {
        navigateTo('knowledge');
    } else if (notif.type === 'knowledge_rejected') {
        navigateTo('verify');
    } else if (notif.type === 'ai_ready' || notif.type === 'ai_build_complete') {
        navigateTo('test');
    } else if (notif.type === 'mission_created') {
        navigateTo('missions');
    }
}

function markAllNotificationsAsRead() {
    NotificationManager.markAllAsRead();
}

// ===== APPLICATION STATE =====
let currentLang = 'th';
let currentUser = null;
let activeMissionId = null;
let currentPage = 'dashboard';
let pendingDeleteAction = null;
let selectedFileForUpload = null;
let demoRunning = false;
let demoTimeouts = [];
let knowledgeFilter = 'all';
let learningDetailsExpanded = false;

// Active media capture state
let audioRecorder = null;
let audioChunks = [];
let audioBlob = null;
let audioStream = null;
let audioTimerInterval = null;
let audioSeconds = 0;
let audioPaused = false;

let photoStream = null;
let photoBlob = null;

let videoRecorder = null;
let videoChunks = [];
let videoBlob = null;
let videoStream = null;
let videoTimerInterval = null;
let videoSeconds = 0;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initAuth();
    initDragAndDropUpload();
    initKeyboardShortcuts();
    initOfflineDetection();
    checkAndShowOnboarding();
    initIcons();
});

function initIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// ===== AUTHENTICATION SYSTEM =====
function initAuth() {
    currentUser = StorageService.getCurrentUser();
    if (currentUser) {
        if (currentUser.role === 'student') {
            ensureDemoMissionForUser(currentUser.id);
        }
        setupActiveMission();
        showMainApp();
    } else {
        showAuthView('login');
    }
}

function ensureDemoMissionForUser(userId) {
    if (!userId) return;
    const missions = StorageService.getUserMissions(userId);
    if (missions.length === 0) {
        const mId = 'mission_coffee_demo_' + userId;
        const demoMission = {
            id: mId,
            userId: userId,
            title: 'Coffee Local AI',
            category: 'เกษตรกรรมและการเพาะปลูก',
            icon: 'coffee',
            community: 'ชุมชนดอยช้าง เชียงราย',
            problem: 'เกษตรกรในชุมชนต้องการคำแนะนำเรื่องการระบายน้ำในฤดูฝน การป้องกันโรคราสนิม และการแปรรูป Honey Process',
            goal: 'สร้าง AI Assistant จากองค์ความรู้ของผู้ปลูกกาแฟเพื่อถ่ายทอดและอนุรักษ์ภูมิปัญญาชุมชน',
            status: 'in-progress',
            progress: 75,
            builtAi: true,
            createdAt: '2026-08-12'
        };
        StorageService.addMission(demoMission);

        const sampleK = [
            {
                id: 'k_1_' + userId,
                userId: userId,
                missionId: mId,
                title: 'สัมภาษณ์เกษตรกร — คุณสมชาย',
                contributor: 'คุณสมชาย — ปราชญ์กาแฟ',
                sourceType: 'audio',
                content: 'ในช่วงฤดูฝนควรลดความชื้นบริเวณราก ทำร่องระบายน้ำรอบต้น และงดการรดน้ำซ้ำซ้อนเพื่อป้องกันปัญหารากเน่า',
                topic: 'การดูแลต้นกาแฟในฤดูฝน',
                consent: true,
                status: 'verified',
                createdAt: '2026-08-12'
            },
            {
                id: 'k_2_' + userId,
                userId: userId,
                missionId: mId,
                title: 'คู่มือการปลูกและแปรรูปกาแฟท้องถิ่น',
                contributor: 'กลุ่มวิสาหกิจชุมชนดอยช้าง',
                sourceType: 'text',
                content: 'การเก็บเกี่ยวควรใช้วิธี Selective Picking เฉพาะผลสีแดง Cherry Red และแปรรูป Honey Process ภายใน 24 ชม.',
                topic: 'การเก็บเกี่ยวและแปรรูป',
                consent: true,
                status: 'verified',
                createdAt: '2026-08-13'
            },
            {
                id: 'k_3_' + userId,
                userId: userId,
                missionId: mId,
                title: 'บันทึกการควบคุมโรคราสนิมและการฟื้นฟูดิน',
                contributor: 'สภาเกษตรกรชุมชน',
                sourceType: 'pdf',
                content: 'ตัดแต่งกิ่งให้แสงส่องถึงโคนต้นเพื่อลดความชื้น และใช้เชื้อราไตรโคเดอร์มาในการควบคุมโรคทางชีววิธี',
                topic: 'โรคพืชและการดูแล',
                consent: true,
                status: 'verified',
                createdAt: '2026-08-14'
            }
        ];
        sampleK.forEach(k => StorageService.addKnowledge(k));
    }
}

function showAuthView(view) {
    const authContainer = document.getElementById('auth-container');
    const mainApp = document.getElementById('main-app-container');
    const viewLogin = document.getElementById('view-login');
    const viewRegister = document.getElementById('view-register');

    if (authContainer) authContainer.classList.remove('hidden');
    if (mainApp) mainApp.classList.add('hidden');

    if (view === 'login') {
        if (viewLogin) viewLogin.classList.remove('hidden');
        if (viewRegister) viewRegister.classList.add('hidden');
    } else {
        if (viewLogin) viewLogin.classList.add('hidden');
        if (viewRegister) viewRegister.classList.remove('hidden');
    }
    clearFormErrors();
    initIcons();
}

function switchAuthView(view) {
    showAuthView(view);
}

function showMainApp() {
    const authContainer = document.getElementById('auth-container');
    const mainApp = document.getElementById('main-app-container');

    if (authContainer) authContainer.classList.add('hidden');
    if (mainApp) mainApp.classList.remove('hidden');

    renderRoleNavigation();
    updateUserDisplays();
    renderActiveMissionUI();
    NotificationManager.renderBadgeAndPanel();
    renderCurrentPage();
    checkAndShowOnboarding();
    initIcons();
}

function handleLoginSubmit(e) {
    e.preventDefault();
    clearFormErrors();

    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value;

    let hasError = false;
    if (!email) { setFieldError('login-email', i18n[currentLang].errEmailRequired); hasError = true; }
    else if (!validateEmail(email)) { setFieldError('login-email', i18n[currentLang].errEmailInvalid); hasError = true; }

    if (!password) { setFieldError('login-password', i18n[currentLang].errPasswordRequired); hasError = true; }

    if (hasError) return;

    const users = StorageService.getUsers();
    let foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!foundUser) {
        const namePart = email.split('@')[0];
        foundUser = {
            id: 'user_' + Date.now(),
            name: namePart.charAt(0).toUpperCase() + namePart.slice(1),
            lastName: 'Creator',
            email: email,
            password: password,
            role: 'student',
            roleTitle: 'Local AI Creator',
            avatar: namePart.charAt(0).toUpperCase(),
            community: 'ชุมชนท้องถิ่น',
            bio: 'ผู้สร้างสรรค์ AI เพื่อแก้ปัญหาและพัฒนาชุมชน',
            createdAt: new Date().toISOString().split('T')[0]
        };
        users.push(foundUser);
        StorageService.saveUsers(users);
    }

    currentUser = foundUser;
    StorageService.setCurrentUserId(currentUser.id);

    setupActiveMission();
    showToast(currentLang === 'th' ? `ยินดีต้อนรับคุณ ${currentUser.name}` : `Welcome, ${currentUser.name}!`, 'success');
    showMainApp();
    navigateTo(currentUser.role === 'teacher' ? 'teacher-review' : (currentUser.role === 'admin' ? 'admin-hub' : 'dashboard'));
}

function handleRegisterSubmit(e) {
    e.preventDefault();
    clearFormErrors();

    const fname = document.getElementById('reg-firstname')?.value.trim();
    const lname = document.getElementById('reg-lastname')?.value.trim();
    const email = document.getElementById('reg-email')?.value.trim();
    const role = document.getElementById('reg-role')?.value || 'student';
    const pass = document.getElementById('reg-password')?.value;
    const confirm = document.getElementById('reg-confirm-password')?.value;
    const terms = document.getElementById('reg-terms')?.checked;

    let hasError = false;
    if (!fname) { setFieldError('reg-firstname', i18n[currentLang].errFirstNameRequired); hasError = true; }
    if (!lname) { setFieldError('reg-lastname', i18n[currentLang].errLastNameRequired); hasError = true; }
    if (!email) { setFieldError('reg-email', i18n[currentLang].errEmailRequired); hasError = true; }
    else if (!validateEmail(email)) { setFieldError('reg-email', i18n[currentLang].errEmailInvalid); hasError = true; }

    if (!pass) { setFieldError('reg-password', i18n[currentLang].errPasswordRequired); hasError = true; }
    else if (pass.length < 6) { setFieldError('reg-password', i18n[currentLang].errPasswordShort); hasError = true; }

    if (!confirm) { setFieldError('reg-confirm-password', i18n[currentLang].errPasswordRequired); hasError = true; }
    else if (pass !== confirm) { setFieldError('reg-confirm-password', i18n[currentLang].errPasswordMismatch); hasError = true; }

    if (!terms) { setFieldError('reg-terms', i18n[currentLang].errTermsRequired); hasError = true; }

    if (hasError) return;

    let roleTitle = 'Local AI Creator';
    if (role === 'teacher') roleTitle = 'ครูผู้เชี่ยวชาญ AI ชุมชน';
    if (role === 'admin') roleTitle = 'Platform Director';

    const newUser = {
        id: 'user_' + Date.now(),
        name: fname,
        lastName: lname,
        email: email,
        password: pass,
        role: role,
        roleTitle: roleTitle,
        avatar: fname.charAt(0).toUpperCase(),
        community: 'ชุมชนท้องถิ่น',
        bio: 'ผู้สร้างสรรค์ AI เพื่อแก้ปัญหาและพัฒนาชุมชน',
        createdAt: new Date().toISOString().split('T')[0]
    };

    const users = StorageService.getUsers();
    users.push(newUser);
    StorageService.saveUsers(users);

    currentUser = newUser;
    StorageService.setCurrentUserId(currentUser.id);

    setupActiveMission();
    showToast(currentLang === 'th' ? `สร้างบัญชีสำเร็จ ยินดีต้อนรับ ${currentUser.name}` : `Account created! Welcome, ${currentUser.name}!`, 'success');
    showMainApp();
    navigateTo(role === 'teacher' ? 'teacher-review' : (role === 'admin' ? 'admin-hub' : 'dashboard'));
}

function quickDemoLogin(role = 'student') {
    const users = StorageService.getUsers();
    let user = users.find(u => u.role === role);
    if (!user) {
        user = users[0];
    }
    currentUser = user;
    StorageService.setCurrentUserId(currentUser.id);
    
    if (currentUser.role === 'student') {
        ensureDemoMissionForUser(currentUser.id);
    }
    setupActiveMission();

    showToast(currentLang === 'th' ? `เข้าสู่ระบบในฐานะ: ${currentUser.name} (${currentUser.roleTitle})` : `Signed in as: ${currentUser.name} (${currentUser.role})`, 'success');
    showMainApp();
    navigateTo(role === 'teacher' ? 'teacher-review' : (role === 'admin' ? 'admin-hub' : 'dashboard'));
}

function handleLogout() {
    StorageService.setCurrentUserId(null);
    currentUser = null;
    activeMissionId = null;
    if (demoRunning) stopDemo();
    showToast(currentLang === 'th' ? 'ออกจากระบบเรียบร้อยแล้ว' : 'Logged out successfully', 'info');
    showAuthView('login');
}

function handleForgotPassword() {
    showToast(currentLang === 'th' ? 'ระบบจำลองการกู้คืนรหัสผ่าน: กรุณาใช้ Quick Demo Sign In' : 'Demo Mode: Please use Quick Demo Sign In.', 'info');
}

function setFieldError(id, msg) {
    const errEl = document.getElementById(`${id}-error`);
    const inputEl = document.getElementById(id);
    if (errEl) errEl.textContent = msg;
    if (inputEl) inputEl.classList.add('input-error');
}

function clearFormErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== ROLE-BASED UI CONTROLLER =====
function renderRoleNavigation() {
    const navContainer = document.getElementById('sidebar-nav-container');
    const bottomNav = document.getElementById('mobile-bottom-nav');
    if (!navContainer || !currentUser) return;

    const isTh = currentLang === 'th';
    const role = currentUser.role;

    let navItems = [];
    let mobileNavItems = [];

    if (role === 'student') {
        navItems = [
            { page: 'dashboard', icon: 'home', label: i18n[currentLang].navDashboard },
            { page: 'knowledge', icon: 'book-open', label: i18n[currentLang].navKnowledge },
            { page: 'add-knowledge', icon: 'plus', label: i18n[currentLang].navAdd || 'เพิ่ม', isFab: true },
            { page: 'test', icon: 'bot', label: i18n[currentLang].navAI || 'AI' },
            { page: 'profile', icon: 'user', label: i18n[currentLang].navProfile }
        ];
        mobileNavItems = navItems;
    } else if (role === 'teacher') {
        navItems = [
            { page: 'teacher-review', icon: 'check-square', label: i18n[currentLang].navTeacherReview },
            { page: 'teacher-students', icon: 'users', label: i18n[currentLang].navTeacherStudents },
            { page: 'knowledge', icon: 'book-open', label: i18n[currentLang].navTeacherKnowledge },
            { page: 'impact', icon: 'bar-chart-2', label: i18n[currentLang].navImpact },
            { page: 'profile', icon: 'user', label: i18n[currentLang].navProfile }
        ];
        mobileNavItems = [
            { page: 'teacher-review', icon: 'book-open', label: isTh ? 'คลังชุมชน' : 'Community' },
            { page: 'teacher-students', icon: 'users', label: isTh ? 'นักเรียน' : 'Students' },
            { page: 'impact', icon: 'bar-chart-2', label: isTh ? 'ผลกระทบ' : 'Impact' },
            { page: 'profile', icon: 'user', label: isTh ? 'โปรไฟล์' : 'Profile' }
        ];
    } else if (role === 'admin') {
        navItems = [
            { page: 'admin-hub', icon: 'layout-grid', label: i18n[currentLang].navAdminHub },
            { page: 'impact', icon: 'bar-chart-2', label: i18n[currentLang].navImpact },
            { page: 'profile', icon: 'user', label: i18n[currentLang].navProfile }
        ];
        mobileNavItems = [
            { page: 'admin-hub', icon: 'layout-grid', label: isTh ? 'ภาพรวม' : 'Hub' },
            { page: 'impact', icon: 'bar-chart-2', label: isTh ? 'ผลกระทบ' : 'Impact' },
            { page: 'profile', icon: 'user', label: isTh ? 'โปรไฟล์' : 'Profile' }
        ];
    }

    navContainer.innerHTML = navItems.map(item => `
        <a class="nav-item ${currentPage === item.page ? 'active' : ''}" data-page="${item.page}" onclick="navigateTo('${item.page}')">
            <i data-lucide="${item.icon}"></i>
            <span>${item.label}</span>
        </a>
    `).join('');

    if (bottomNav) {
        bottomNav.innerHTML = mobileNavItems.map(item => {
            if (item.isFab) {
                return `
                    <a class="mobile-nav-item nav-fab-wrap" onclick="openAddKnowledgePicker()">
                        <div class="mobile-nav-fab"><i data-lucide="plus"></i></div>
                        <span>${item.label}</span>
                    </a>
                `;
            }
            return `
                <a class="mobile-nav-item ${currentPage === item.page ? 'active' : ''}" onclick="navigateTo('${item.page}')">
                    <i data-lucide="${item.icon}"></i>
                    <span>${item.label}</span>
                </a>
            `;
        }).join('');
    }

    initIcons();
}

function updateUserDisplays() {
    if (!currentUser) return;
    const name = currentUser.name;
    const roleTitle = currentUser.roleTitle || currentUser.role;
    const avatar = currentUser.avatar || name.charAt(0).toUpperCase();

    // Greeting
    const greetingTitle = document.getElementById('dash-greeting-title');
    if (greetingTitle) greetingTitle.textContent = `สวัสดี, ${name}`;

    // Topbar
    const topbarAvatar = document.getElementById('topbar-avatar');
    const topbarName = document.getElementById('topbar-name');
    const topbarRole = document.getElementById('topbar-role-badge');
    if (topbarAvatar) topbarAvatar.textContent = avatar;
    if (topbarName) topbarName.textContent = name;
    if (topbarRole) topbarRole.textContent = roleTitle;

    // Sidebar
    const sidebarAvatar = document.getElementById('sidebar-avatar');
    const sidebarName = document.getElementById('sidebar-user-name');
    const sidebarRole = document.getElementById('sidebar-user-role');
    if (sidebarAvatar) sidebarAvatar.textContent = avatar;
    if (sidebarName) sidebarName.textContent = name;
    if (sidebarRole) sidebarRole.textContent = roleTitle;

    // Profile Page
    const pAvatar = document.getElementById('profile-avatar-lg');
    const pName = document.getElementById('profile-display-name');
    const pRoleBadge = document.getElementById('profile-role-badge');
    const pCommunity = document.getElementById('profile-community-badge');
    const pBio = document.getElementById('profile-bio-text');

    if (pAvatar) pAvatar.textContent = avatar;
    if (pName) pName.textContent = `${name} ${currentUser.lastName || ''}`;
    if (pRoleBadge) pRoleBadge.innerHTML = `<i data-lucide="award"></i> ${roleTitle}`;
    if (pCommunity) pCommunity.innerHTML = `<i data-lucide="map-pin"></i> ${currentUser.community || 'ชุมชนท้องถิ่น'}`;
    if (pBio) pBio.textContent = currentUser.bio || 'ผู้สร้างสรรค์ AI เพื่อแก้ปัญหาและพัฒนาชุมชน';

    initIcons();
}

// ===== DYNAMIC MISSION CONTROLLER =====
function setupActiveMission() {
    if (!currentUser) return;
    const userMissions = StorageService.getUserMissions(currentUser.id);
    if (userMissions.length > 0) {
        if (!activeMissionId || !userMissions.some(m => m.id === activeMissionId)) {
            activeMissionId = userMissions[0].id;
        }
    } else {
        activeMissionId = null;
    }
}

function handleActiveMissionChange(missionId) {
    if (missionId === 'create_new') {
        openCreateMissionModal();
        return;
    }
    activeMissionId = missionId;
    renderActiveMissionUI();
    renderCurrentPage();
    showToast(currentLang === 'th' ? 'เปลี่ยน Local AI ที่ใช้งานแล้ว' : 'Switched active Local AI', 'info');
}

function renderActiveMissionUI() {
    const selectorContainer = document.getElementById('topbar-mission-selector-container');
    const dropdown = document.getElementById('active-mission-dropdown');
    if (!currentUser || currentUser.role !== 'student') {
        if (selectorContainer) selectorContainer.style.display = 'none';
        return;
    }

    const userMissions = StorageService.getUserMissions(currentUser.id);

    if (userMissions.length === 0) {
        if (selectorContainer) selectorContainer.style.display = 'none';
        return;
    }

    if (selectorContainer) selectorContainer.style.display = 'flex';
    if (dropdown) {
        dropdown.innerHTML = userMissions.map(m => `
            <option value="${m.id}" ${m.id === activeMissionId ? 'selected' : ''}>🤖 ${m.title}</option>
        `).join('') + `<option value="create_new">➕ สร้าง Local AI ตัวใหม่...</option>`;
    }

    const activeMission = StorageService.getMissionById(activeMissionId);
    const kContext = document.getElementById('knowledge-mission-context');
    const bContext = document.getElementById('build-mission-context');

    const missionTitle = activeMission ? activeMission.title : (currentLang === 'th' ? 'ยังไม่ได้เลือกภารกิจ' : 'No mission selected');
    if (kContext) kContext.innerHTML = `<i data-lucide="target"></i> <span>${missionTitle}</span>`;
    if (bContext) bContext.innerHTML = `<i data-lucide="target"></i> <span>${missionTitle}</span>`;

    initIcons();
}

function openCreateMissionModal() {
    const modal = document.getElementById('create-mission-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initIcons();
}

function closeCreateMissionModal() {
    const modal = document.getElementById('create-mission-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function handleCategoryChange(val) {
    const customGroup = document.getElementById('custom-category-group');
    if (customGroup) {
        customGroup.style.display = val === 'other' ? 'block' : 'none';
    }
}

function handleCreateMissionSubmit(e) {
    e.preventDefault();
    if (!currentUser) {
        showToast(currentLang === 'th' ? 'ข้อผิดพลาด: ไม่พบผู้ใช้งาน' : 'Error: User not found', 'error');
        return;
    }

    const titleInput = document.getElementById('mission-title-input');
    const categorySelect = document.getElementById('mission-category-select');
    const customCategoryInput = document.getElementById('custom-category-input');
    const emojiSelect = document.getElementById('mission-emoji-select');
    const communityInput = document.getElementById('mission-community-input');
    const problemInput = document.getElementById('mission-problem-input');
    const goalInput = document.getElementById('mission-goal-input');

    const title = titleInput?.value.trim();
    let category = categorySelect?.value;
    if (category === 'other') {
        category = customCategoryInput?.value.trim() || 'ทั่วไป';
    }
    const icon = emojiSelect?.value || 'target';
    const community = communityInput?.value.trim() || currentUser.community || 'ชุมชนท้องถิ่น';
    const problem = problemInput?.value.trim();
    const goal = goalInput?.value.trim();

    // Strict Validation
    let hasError = false;
    if (!title || title.length < 3) {
        showToast(currentLang === 'th' ? '⚠️ ชื่อภารกิจต้องมีอย่างน้อย 3 ตัวอักษร' : 'Mission title must be at least 3 characters', 'warning');
        hasError = true;
    }
    if (!problem || problem.length < 10) {
        showToast(currentLang === 'th' ? '⚠️ กำหนดปัญหาอย่างชัดเจน (อย่างน้อย 10 ตัวอักษร)' : 'Problem statement must be at least 10 characters', 'warning');
        hasError = true;
    }
    if (!goal || goal.length < 10) {
        showToast(currentLang === 'th' ? '⚠️ กำหนดเป้าหมาย AI ให้ชัดเจน (อย่างน้อย 10 ตัวอักษร)' : 'AI goal must be at least 10 characters', 'warning');
        hasError = true;
    }

    if (hasError) return;

    const newMission = {
        id: 'm_' + Date.now(),
        userId: currentUser.id,
        title: title,
        category: category,
        icon: icon,
        community: community,
        problem: problem,
        goal: goal,
        status: 'in-progress',
        progress: 100,
        builtAi: true,
        createdAt: new Date().toISOString().split('T')[0]
    };

    StorageService.addMission(newMission);
    activeMissionId = newMission.id;

    closeCreateMissionModal();
    document.getElementById('create-mission-form')?.reset();

    showToast(currentLang === 'th' ? `สร้าง Local AI "${title}" เรียบร้อยแล้ว! อัปโหลดไฟล์หรือเริ่มถามตอบได้ทันที` : `Created Local AI "${title}"! Ready to use.`, 'success');
    renderActiveMissionUI();
    renderCurrentPage();
    navigateTo('knowledge');
}

function loadSampleDemoMission() {
    if (!currentUser) return;
    const sample = {
        id: 'm_demo_' + Date.now(),
        userId: currentUser.id,
        title: 'Coffee Local AI',
        category: 'เกษตรกรรมและการเพาะปลูก',
        icon: 'coffee',
        community: 'ชุมชนดอยช้าง เชียงราย',
        problem: 'เกษตรกรผู้ปลูกกาแฟในพื้นที่สูงต้องการที่ปรึกษา AI ในการดูแลต้นกาแฟช่วงฤดูฝนและการแปรรูป Honey Process',
        goal: 'สร้าง AI Assistant จากองค์ความรู้ของผู้ปลูกกาแฟเพื่อถ่ายทอดและอนุรักษ์ภูมิปัญญาชุมชน',
        status: 'in-progress',
        progress: 75,
        builtAi: true,
        createdAt: new Date().toISOString().split('T')[0]
    };
    StorageService.addMission(sample);
    activeMissionId = sample.id;

    const sampleSources = [
        {
            id: 'k_demo_1_' + Date.now(),
            userId: currentUser.id,
            missionId: sample.id,
            title: 'สัมภาษณ์เกษตรกร — คุณสมชาย',
            contributor: 'คุณสมชาย — ปราชญ์กาแฟ',
            sourceType: 'audio',
            content: 'ในช่วงฤดูฝนควรลดความชื้นบริเวณราก ทำร่องระบายน้ำรอบแปลง และงดการรดน้ำซ้ำซ้อนเพื่อป้องกันปัญหารากเน่า',
            topic: 'การดูแลต้นกาแฟในฤดูฝน',
            consent: true,
            status: 'verified',
            createdAt: new Date().toISOString().split('T')[0]
        },
        {
            id: 'k_demo_2_' + Date.now(),
            userId: currentUser.id,
            missionId: sample.id,
            title: 'คู่มือการปลูกและแปรรูปกาแฟท้องถิ่น',
            contributor: 'กลุ่มวิสาหกิจชุมชนดอยช้าง',
            sourceType: 'text',
            content: 'การเก็บเกี่ยวควรใช้วิธี Selective Picking เฉพาะผลสีแดง Cherry Red และแปรรูป Honey Process ภายใน 24 ชม.',
            topic: 'การเก็บเกี่ยวและแปรรูป',
            consent: true,
            status: 'verified',
            createdAt: new Date().toISOString().split('T')[0]
        },
        {
            id: 'k_demo_3_' + Date.now(),
            userId: currentUser.id,
            missionId: sample.id,
            title: 'บันทึกการควบคุมโรคราสนิมและการฟื้นฟูดิน',
            contributor: 'สภาเกษตรกรชุมชน',
            sourceType: 'pdf',
            content: 'ตัดแต่งกิ่งให้แสงส่องถึงโคนต้นเพื่อลดความชื้น และใช้เชื้อราไตรโคเดอร์มาในการควบคุมโรคทางชีววิธี',
            topic: 'โรคพืชและการดูแล',
            consent: true,
            status: 'verified',
            createdAt: new Date().toISOString().split('T')[0]
        }
    ];
    sampleSources.forEach(s => StorageService.addKnowledge(s));

    renderActiveMissionUI();
    renderCurrentPage();
    showToast(currentLang === 'th' ? 'โหลดตัวอย่างภารกิจ Coffee Local AI สำเร็จแล้ว' : 'Sample Demo Mission loaded!', 'success');
}

function handleDeleteMission(missionId) {
    pendingDeleteAction = {
        type: 'mission',
        id: missionId
    };
    const desc = document.getElementById('delete-confirm-desc');
    if (desc) desc.textContent = currentLang === 'th' ? 'ต้องการลบภารกิจนี้พร้อมองค์ความรู้ทั้งหมดที่เกี่ยวข้องหรือไม่?' : 'Are you sure you want to delete this mission and all its knowledge?';
    const modal = document.getElementById('delete-confirm-modal');
    if (modal) modal.classList.remove('hidden');
    initIcons();
}

// ===== REAL FILE UPLOAD & KNOWLEDGE CONTROLLER =====
function initDragAndDropUpload() {
    const uploadArea = document.getElementById('upload-area');
    if (!uploadArea) return;

    uploadArea.addEventListener('click', (e) => {
        if (e.target.id !== 'add-knowledge-trigger-btn' && !e.target.closest('#add-knowledge-trigger-btn')) {
            triggerFileInput();
        }
    });

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleRealFileSelected(e.dataTransfer.files);
        }
    });
}

function triggerFileInput() {
    const fileInput = document.getElementById('real-file-input');
    if (fileInput) fileInput.click();
}

function handleRealFileSelected(files) {
    if (!files || files.length === 0) return;
    if (!activeMissionId) {
        showToast(currentLang === 'th' ? 'กรุณาสร้างหรือเลือกภารกิจก่อนเพิ่มองค์ความรู้' : 'Please create or select a mission first', 'warning');
        openCreateMissionModal();
        return;
    }

    const file = files[0];
    selectedFileForUpload = file;

    let sourceType = 'text';
    if (file.type.startsWith('audio/')) sourceType = 'audio';
    else if (file.type.startsWith('image/')) sourceType = 'image';
    else if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) sourceType = 'pdf';

    const previewName = document.getElementById('file-preview-name');
    const previewSize = document.getElementById('file-preview-size');
    const titleInput = document.getElementById('know-title-input');
    const typeSelect = document.getElementById('know-source-type-select');

    if (previewName) previewName.textContent = file.name;
    if (previewSize) previewSize.textContent = formatBytes(file.size);
    if (titleInput) titleInput.value = file.name.replace(/\.[^/.]+$/, '');
    if (typeSelect) typeSelect.value = sourceType;

    if (file.type.startsWith('text/') && file.size < 500000) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const contentInput = document.getElementById('know-content-input');
            if (contentInput && e.target.result) {
                contentInput.value = e.target.result.slice(0, 500);
                runAIQualityCheckOnInput(contentInput.value);
            }
        };
        reader.readAsText(file);
    } else {
        runAIQualityCheckOnInput(titleInput?.value || '');
    }

    const modal = document.getElementById('add-knowledge-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initIcons();
}

function closeAddKnowledgeModal() {
    const modal = document.getElementById('add-knowledge-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function handleSaveKnowledgeSubmit(e) {
    e.preventDefault();
    if (!currentUser || !activeMissionId) {
        showToast(currentLang === 'th' ? 'ข้อผิดพลาด: ไม่พบผู้ใช้หรือภารกิจ' : 'Error: No user or mission', 'error');
        return;
    }

    const titleInput = document.getElementById('know-title-input');
    const contributorInput = document.getElementById('know-contributor-input');
    const typeSelect = document.getElementById('know-source-type-select');
    const contentInput = document.getElementById('know-content-input');
    const consentCheckbox = document.getElementById('know-consent-checkbox');

    const title = titleInput?.value.trim();
    const contributor = contributorInput?.value.trim();
    const sourceType = typeSelect?.value || 'text';
    const content = contentInput?.value.trim();
    const consent = consentCheckbox?.checked || false;

    // Strict Validation with User Feedback
    let hasError = false;
    if (!title || title.length < 3) {
        showToast(currentLang === 'th' ? '⚠️ ชื่อองค์ความรู้ต้องมีอย่างน้อย 3 ตัวอักษร' : 'Knowledge title must be at least 3 characters', 'warning');
        hasError = true;
    }
    if (!contributor || contributor.length < 2) {
        showToast(currentLang === 'th' ? '⚠️ ชื่อผู้ให้ข้อมูลต้องมีอย่างน้อย 2 ตัวอักษร' : 'Contributor name must be at least 2 characters', 'warning');
        hasError = true;
    }
    if (!content || content.length < 15) {
        showToast(currentLang === 'th' ? '⚠️ เนื้อหาต้องมีอย่างน้อย 15 ตัวอักษร เพื่อให้ AI เข้าใจได้ชัดเจน' : 'Content must be at least 15 characters for AI to understand properly', 'warning');
        hasError = true;
    }
    if (!consent) {
        showToast(currentLang === 'th' ? '⚠️ ต้องได้รับยินยอม (Consent) จากผู้ให้ข้อมูลก่อน' : 'Consent from contributor is required', 'warning');
        hasError = true;
    }

    if (hasError) return;

    const newKnowledge = {
        id: 'k_' + Date.now(),
        userId: currentUser.id,
        missionId: activeMissionId,
        title: title,
        contributor: contributor,
        sourceType: sourceType,
        content: content,
        topic: title,
        consent: consent,
        status: 'pending',
        createdAt: new Date().toISOString().split('T')[0]
    };

    StorageService.addKnowledge(newKnowledge);

    const activeMission = StorageService.getMissionById(activeMissionId);
    if (activeMission) {
        const kList = StorageService.getKnowledgeForMission(activeMissionId);
        activeMission.progress = Math.min(85, 20 + kList.length * 15);
        StorageService.updateMission(activeMission);
    }

    closeAddKnowledgeModal();
    document.getElementById('add-knowledge-form')?.reset();

    showToast(currentLang === 'th' ? `บันทึก "${title}" แล้ว ส่งเข้าสู่ระบบตรวจสอบ` : `Saved "${title}"! Submitted to review queue.`, 'success');
    renderCurrentPage();
}

// ===== AI KNOWLEDGE ENRICHMENT / RESEARCH ASSISTANT =====
function runAIQualityCheckOnInput(text) {
    const scorePill = document.getElementById('quality-score-pill');
    const checksContainer = document.getElementById('ai-quality-checks');
    const suggContainer = document.getElementById('ai-quality-suggestions');

    if (!text || text.length < 15) {
        if (scorePill) scorePill.textContent = '40% Quality';
        if (checksContainer) {
            checksContainer.innerHTML = `
                <div class="q-item warn"><i data-lucide="alert-circle"></i> ข้อมูลยังมีรายละเอียดค่อนข้างน้อย</div>
                <div class="q-item warn"><i data-lucide="alert-circle"></i> ขาดการระบุขั้นตอน หรือช่วงเวลาที่ชัดเจน</div>
            `;
        }
        if (suggContainer) {
            suggContainer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                    <span>AI แนะนำ: เพิ่มรายละเอียดวิธีการ, ช่วงฤดูกาล หรือกดให้ AI ค้นข้อมูลประกอบให้</span>
                    <button type="button" class="btn btn-primary btn-sm" onclick="autoEnrichKnowledgeFromAI()" style="padding: 4px 10px; font-size: 11.5px;">
                        <i data-lucide="sparkles"></i> <span>AI เติมเต็มข้อมูลอัตโนมัติ</span>
                    </button>
                </div>
            `;
        }
        initIcons();
        return;
    }

    let score = 50;
    let checks = [];
    let suggs = [];

    if (text.length > 40) {
        score += 20;
        checks.push('<div class="q-item check"><i data-lucide="check-circle-2"></i> มีรายละเอียดเนื้อหาเบื้องต้นชัดเจน</div>');
    } else {
        checks.push('<div class="q-item warn"><i data-lucide="alert-circle"></i> ควรเพิ่มเนื้อหาให้ครอบคลุมบริบท</div>');
    }

    if (text.includes('วิธี') || text.includes('การ') || text.includes('ควร') || text.includes('ขั้นตอน') || text.includes('ใช้')) {
        score += 15;
        checks.push('<div class="q-item check"><i data-lucide="check-circle-2"></i> ระบุแนวทางปฏิบัติ / วิธีการชัดเจน</div>');
    } else {
        checks.push('<div class="q-item warn"><i data-lucide="alert-circle"></i> ยังขาดรายละเอียดขั้นตอนวิธีการปฏิบัติ</div>');
        suggs.push('ขั้นตอนวิธีการปฏิบัติ');
    }

    if (text.includes('ช่วง') || text.includes('เดือน') || text.includes('ฤดู') || text.includes('เวลา') || text.includes('อุณหภูมิ')) {
        score += 15;
        checks.push('<div class="q-item check"><i data-lucide="check-circle-2"></i> ระบุช่วงเวลา / ปัจจัยแวดล้อมชัดเจน</div>');
    } else {
        suggs.push('ช่วงฤดูกาล/เวลา');
    }

    if (text.includes('Level 2') || text.includes('AI Research') || text.includes('ข้อมูลประกอบ')) {
        score = Math.max(score, 95);
        checks.push('<div class="q-item check"><i data-lucide="check-circle-2"></i> ผสานข้อมูลวิชาการประกอบ (Level 2 Enriched)</div>');
    }

    score = Math.min(98, score);
    if (scorePill) scorePill.textContent = `${score}% Quality`;
    if (checksContainer) checksContainer.innerHTML = checks.join('');
    if (suggContainer) {
        if (suggs.length > 0 && !text.includes('Level 2')) {
            suggContainer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                    <span>AI แนะนำ: ขาด ${suggs.join(', ')} ต้องการให้ AI ช่วยค้นข้อมูลมาเติมให้ไหม?</span>
                    <button type="button" class="btn btn-primary btn-sm" onclick="autoEnrichKnowledgeFromAI()" style="padding: 4px 10px; font-size: 11.5px;">
                        <i data-lucide="sparkles"></i> <span>AI เติมเต็มข้อมูลอัตโนมัติ</span>
                    </button>
                </div>
            `;
        } else {
            suggContainer.innerHTML = `<span>ข้อมูลมีคุณภาพสมบูรณ์ พร้อมบันทึกและส่งตรวจทาน</span>`;
        }
    }
    initIcons();
}

function autoEnrichKnowledgeFromAI() {
    const titleInput = document.getElementById('know-title-input');
    const contentInput = document.getElementById('know-content-input');
    if (!contentInput) return;

    const topic = titleInput?.value.trim() || 'องค์ความรู้ชุมชน';
    const currentText = contentInput.value.trim();

    const enrichmentNote = `\n\n[ข้อมูลประกอบจาก AI Research (Level 2)]:\n• แหล่งอ้างอิงวิชาการ: รายงานวิจัยและมาตรฐาน GAP ระบุว่าการจัดการความชื้นและการควบคุมอุณหภูมิที่เหมาะสมเป็นหัวใจสำคัญ\n• แนวทางเสริม: ควรบันทึกช่วงเวลาในการปฏิบัติ (เช้า/เย็น) และใช้วิธีการควบคุมชีววิธีควบคู่เพื่อความยั่งยืน`;

    contentInput.value = currentText + enrichmentNote;
    runAIQualityCheckOnInput(contentInput.value);
    showToast(currentLang === 'th' ? 'AI ได้ช่วยค้นและเติมเต็มข้อมูลประกอบให้เรียบร้อยแล้ว' : 'AI has enriched the data with research context!', 'success');
}

function openExternalResearchModal() {
    const titleInput = document.getElementById('know-title-input');
    const contentInput = document.getElementById('know-content-input');
    const query = titleInput?.value.trim() || contentInput?.value.trim() || 'เกษตรและภูมิปัญญา';

    const container = document.getElementById('research-results-container');
    if (container) {
        const mockResearch = [
            {
                sourceType: 'University Source',
                title: `รายงานวิจัยมหาวิทยาลัยเกี่ยวกับการอนุรักษ์: ${query}`,
                relevance: '92% Relevance',
                summary: `ข้อมูลทางวิชาการระบุว่าองค์ความรู้เรื่อง ${query} มีปัจจัยหลักที่เกี่ยวข้องกับสภาพแวดล้อม การควบคุมอุณหภูมิ และมาตรฐานความปลอดภัยทางอาหาร`,
                link: 'https://research.edu/paper-summary'
            },
            {
                sourceType: 'Government Organization',
                title: `แนวทางการส่งเสริมภูมิปัญญาท้องถิ่น — กรมส่งเสริมเกษตร/วัฒนธรรม`,
                relevance: '87% Relevance',
                summary: `มาตราฐานและแนวทางปฏิบัติตามมาตรฐานท้องถิ่น เน้นการอนุรักษ์วิธีการดั้งเดิมควบคู่กับการใช้เทคโนโลยีควบคุมคุณภาพ`,
                link: 'https://digital.go.th/standard-guidelines'
            },
            {
                sourceType: 'Professional Industry Standard',
                title: `คู่มือมาตรฐานการปฏิบัติที่ดี (Good Agricultural Practice - GAP)`,
                relevance: '79% Relevance',
                summary: `ข้อแนะนำในการจัดเก็บข้อมูลและรักษาสุขอนามัยเพื่อเพิ่มมูลค่าของผลิตภัณฑ์ชุมชน`,
                link: 'https://standard.org/gap-handbook'
            }
        ];

        container.innerHTML = mockResearch.map(r => `
            <div class="research-card">
                <div class="research-card-header">
                    <span class="research-badge">${r.sourceType}</span>
                    <span class="research-score">${r.relevance}</span>
                </div>
                <h4>${r.title}</h4>
                <p>${r.summary}</p>
                <a href="${r.link}" target="_blank" class="research-source-link"><i data-lucide="external-link"></i> ตรวจสอบแหล่งอ้างอิงภายนอก</a>
            </div>
        `).join('');
    }

    const modal = document.getElementById('external-research-modal');
    if (modal) modal.classList.remove('hidden');
    initIcons();
}

function closeExternalResearchModal() {
    const modal = document.getElementById('external-research-modal');
    if (modal) modal.classList.add('hidden');
}

function applyResearchDraftToInput() {
    const contentInput = document.getElementById('know-content-input');
    if (contentInput) {
        const existing = contentInput.value.trim();
        const externalNote = `\n\n[ข้อมูลประกอบจาก AI — External Research (Level 2)]:\nองค์ความรู้ทางวิชาการและแนวทางปฏิบัติมาตรฐานสนับสนุนว่า ควรให้ความสำคัญกับการควบคุมปัจจัยแวดล้อม และการปฏิบัติตามมาตรฐานความปลอดภัย`;
        contentInput.value = existing + externalNote;
        runAIQualityCheckOnInput(contentInput.value);
    }
    closeExternalResearchModal();
    showToast(currentLang === 'th' ? 'เพิ่มข้อมูลประกอบร่าง (Level 2 Draft) เรียบร้อย' : 'Added Level 2 Draft', 'success');
}

function openKnowledgeDetail(kId) {
    const all = StorageService.getKnowledge();
    const item = all.find(k => k.id === kId);
    if (!item) return;

    const titleEl = document.getElementById('kdetail-title');
    const contentEl = document.getElementById('kdetail-content');
    const contributorEl = document.getElementById('kdetail-contributor');
    const missionEl = document.getElementById('kdetail-mission');
    const statusEl = document.getElementById('kdetail-status-pill');

    const mission = StorageService.getMissionById(item.missionId);

    if (titleEl) titleEl.textContent = item.title;
    if (contentEl) contentEl.textContent = `“${item.content}”`;
    if (contributorEl) contributorEl.textContent = item.contributor;
    if (missionEl) missionEl.textContent = mission ? mission.title : '-';
    
    if (statusEl) {
        const isVerified = item.status === 'verified';
        statusEl.innerHTML = isVerified ? `<i data-lucide="check-circle-2"></i> ${currentLang === 'th' ? 'ผ่านการตรวจสอบแล้ว' : 'Verified'}` : `<i data-lucide="clock"></i> ${currentLang === 'th' ? 'รอการตรวจสอบ' : 'Pending Verification'}`;
        statusEl.className = `kdetail-status-pill ${isVerified ? 'verified' : 'pending'}`;
    }

    window.currentViewingKId = kId;

    const modal = document.getElementById('knowledge-detail-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initIcons();
}

function closeKnowledgeDetailModal() {
    const modal = document.getElementById('knowledge-detail-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function handleDeleteKnowledgeFromDetail() {
    if (window.currentViewingKId) {
        closeKnowledgeDetailModal();
        handleDeleteKnowledge(window.currentViewingKId);
    }
}

function handleDeleteKnowledge(kId) {
    pendingDeleteAction = {
        type: 'knowledge',
        id: kId
    };
    const desc = document.getElementById('delete-confirm-desc');
    if (desc) desc.textContent = currentLang === 'th' ? 'ต้องการลบองค์ความรู้นี้ออกจากภารกิจหรือไม่?' : 'Are you sure you want to delete this knowledge source?';
    const modal = document.getElementById('delete-confirm-modal');
    if (modal) modal.classList.remove('hidden');
    initIcons();
}

function closeDeleteConfirmModal() {
    const modal = document.getElementById('delete-confirm-modal');
    if (modal) modal.classList.add('hidden');
    pendingDeleteAction = null;
}

function executePendingDelete() {
    if (!pendingDeleteAction) return;

    if (pendingDeleteAction.type === 'mission') {
        StorageService.deleteMission(pendingDeleteAction.id);
        setupActiveMission();
        showToast(currentLang === 'th' ? 'ลบภารกิจเรียบร้อยแล้ว' : 'Mission deleted', 'info');
    } else if (pendingDeleteAction.type === 'knowledge') {
        StorageService.deleteKnowledge(pendingDeleteAction.id);
        showToast(currentLang === 'th' ? 'ลบองค์ความรู้เรียบร้อยแล้ว' : 'Knowledge source deleted', 'info');
    }

    closeDeleteConfirmModal();
    renderActiveMissionUI();
    renderCurrentPage();
}

function formatBytes(bytes) {
    if (!bytes) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// ===== DYNAMIC BUILD AI CONTROLLER =====
function startBuildAI() {
    const activeMission = StorageService.getMissionById(activeMissionId);
    if (!activeMission) {
        showToast(currentLang === 'th' ? 'กรุณาเลือกภารกิจก่อนสร้าง AI' : 'Please select a mission first', 'warning');
        return;
    }

    const verifiedK = StorageService.getKnowledgeForMission(activeMissionId).filter(k => k.status === 'verified');
    if (verifiedK.length === 0) {
        showToast(currentLang === 'th' ? 'ต้องมีองค์ความรู้ที่ผ่านการตรวจสอบอย่างน้อย 1 รายการเพื่อสร้าง AI' : 'Need at least 1 verified source to build AI', 'warning');
        return;
    }

    const config = document.getElementById('build-config-state');
    const progress = document.getElementById('build-progress-state');
    const success = document.getElementById('build-success-state');

    if (config) config.classList.add('hidden');
    if (progress) progress.classList.remove('hidden');
    if (success) success.classList.add('hidden');

    const steps = ['bstep-1', 'bstep-2', 'bstep-3', 'bstep-4', 'bstep-5'];
    steps.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active', 'done');
    });

    steps.forEach((id, i) => {
        const t1 = setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.classList.add('active');
        }, i * 800);

        const t2 = setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove('active');
                el.classList.add('done');
            }
        }, (i + 1) * 800);

        demoTimeouts.push(t1, t2);
    });

    const tFinal = setTimeout(() => {
        if (progress) progress.classList.add('hidden');
        if (success) success.classList.remove('hidden');

        activeMission.builtAi = true;
        activeMission.progress = 100;
        activeMission.status = 'completed';
        StorageService.updateMission(activeMission);

        NotificationManager.addNotification({
            userId: activeMission.userId,
            type: 'ai_build_complete',
            title: 'สร้าง Local AI สำเร็จ',
            message: `AI ผู้ช่วยสำหรับภารกิจ "${activeMission.title}" พร้อมทดสอบใช้งานแล้ว`,
            relatedId: activeMission.id
        });

        showToast(currentLang === 'th' ? `สร้าง AI "${activeMission.title}" สำเร็จแล้ว` : `Successfully built AI "${activeMission.title}"!`, 'success');
        initIcons();
    }, steps.length * 800 + 300);

    demoTimeouts.push(tFinal);
}

function resetBuildToConfig() {
    const config = document.getElementById('build-config-state');
    const progress = document.getElementById('build-progress-state');
    const success = document.getElementById('build-success-state');
    if (config) config.classList.remove('hidden');
    if (progress) progress.classList.add('hidden');
    if (success) success.classList.add('hidden');
    initIcons();
}

// ===== DYNAMIC AI CHATBOT CONTROLLER =====
function handleChatKeydown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    if (!input) return;
    const query = input.value.trim();
    if (!query) return;

    input.value = '';

    const welcome = document.querySelector('.chat-welcome');
    if (welcome) welcome.remove();

    const suggestions = document.getElementById('chat-suggestions');
    if (suggestions) suggestions.style.display = 'none';

    addChatBubble('user', query);
    showTypingIndicator();

    const activeMission = StorageService.getMissionById(activeMissionId);
    const verifiedKnowledge = activeMission ? StorageService.getKnowledgeForMission(activeMission.id).filter(k => k.status === 'verified') : [];

    setTimeout(() => {
        removeTypingIndicator();
        const response = generateAIResponse(query, activeMission, verifiedKnowledge);
        addChatBubble('ai', response.text, response.sources);
    }, 900 + Math.random() * 500);
}

function enrichKnowledgeContentIfNeeded(title, content) {
    const cleanTitle = (title || '').trim();
    let cleanContent = (content || '').trim();

    if (!cleanContent || cleanContent.toLowerCase() === cleanTitle.toLowerCase() || cleanContent.length < 35) {
        const topic = cleanTitle.toLowerCase();
        if (topic.includes('xiaomi') || topic.includes('เสียวหมี่')) {
            cleanContent = `Xiaomi Corporation (เสียวหมี่) เป็นบริษัทเทคโนโลยีและอิเล็กทรอนิกส์ข้ามชาติระดับโลกจากประเทศจีน ก่อตั้งในปี 2010 โดย Lei Jun มีชื่อเสียงระดับโลกในการสร้างนวัตกรรมสมาร์ทโฟน ระบบนิเวศสมาร์ทโฮม (IoT Smart Home Ecosystem) และผลิตภัณฑ์ดิจิทัลคุณภาพสูงในราคาที่เข้าถึงได้ง่าย`;
        } else if (topic.includes('coffee') || topic.includes('กาแฟ')) {
            cleanContent = `องค์ความรู้การเพาะปลูกและแปรรูปกาแฟอราบิก้าชุมชน: การเตรียมดินร่วนระบายน้ำดีในพื้นที่สูง การตัดแต่งกิ่งเพื่อลดความชื้นป้องกันโรคราสนิม การเก็บเกี่ยวเฉพาะผลสุกสีแดง Cherry Red และเทคนิคการแปรรูป Honey Process เพื่อดึงกลิ่นหอมและรสชาติหวานธรรมชาติ`;
        } else if (topic.includes('เกษตร') || topic.includes('พืช')) {
            cleanContent = `ภูมิปัญญาการเกษตรยั่งยืนของชุมชน: การบำรุงดินด้วยปุ๋ยหมักชีวภาพ การจัดระบบทางระบายน้ำช่วงฤดูฝน การป้องกันแมลงศัตรูพืชด้วยสารสกัดธรรมชาติ และการสร้างมูลค่าเพิ่มแก่ผลผลิตชุมชน`;
        } else {
            cleanContent = `องค์ความรู้เรื่อง "${cleanTitle}": รวบรวมข้อมูลสำคัญ รายละเอียดเชิงลึก สาระน่ารู้ และภูมิปัญญาท้องถิ่นเพื่อการจัดเก็บและถ่ายทอดผ่าน Local AI ประจำชุมชน`;
        }
    }
    return cleanContent;
}

function generateAIResponse(query, mission, knowledgeList) {
    const q = query.toLowerCase().trim();
    const missionName = mission ? mission.title : 'Local AI';

    // Candidate knowledge items for Grounded RAG (ONLY verified sources)
    let candidateList = (knowledgeList && knowledgeList.length > 0) 
        ? knowledgeList 
        : (currentUser ? StorageService.getUserKnowledge(currentUser.id).filter(k => k.status === 'verified') : []);

    let matchedItem = null;
    let maxScore = 0;

    // Search for relevant knowledge from verified sources only
    for (const item of candidateList) {
        if (item.status !== 'verified') continue; // Skip unverified sources
        
        const textToSearch = `${item.title} ${item.topic} ${item.content} ${item.contributor}`.toLowerCase();
        const words = q.split(/\s+/);
        let score = 0;
        for (const w of words) {
            if (w.length >= 2 && textToSearch.includes(w)) {
                score += (item.title.toLowerCase().includes(w) ? 3 : 1);
            }
        }
        if (score > maxScore) {
            maxScore = score;
            matchedItem = item;
        }
    }

    // ✅ Community Knowledge Found - Answer ONLY from verified sources
    if (matchedItem && maxScore > 0) {
        const fileContent = matchedItem.content || matchedItem.title;
        
        let answerMarkdown = `### 🤖 คำตอบจาก ${missionName} Local AI\n\n` +
            `✅ **ข้อมูลจากชุมชนที่ได้รับการยืนยันแล้ว** ("${matchedItem.title}"):\n` +
            `\n${fileContent}\n\n` +
            `📌 **สาเหตุ:** คำตอบนี้ถูกสกัดจากข้อมูลที่ผู้ให้ข้อมูล ${matchedItem.contributor} ได้บันทึกไว้ และได้รับการตรวจสอบความถูกต้องแล้ว`;

        return {
            text: answerMarkdown,
            sources: [matchedItem.title]
        };
    }

    // ❌ No Community Knowledge Match - Tell user to add data
    const suggestText = `${currentLang === 'th' ? 'ยังไม่มีข้อมูลเกี่ยวกับ "' + query + '" ในคลังความรู้' : 'No community knowledge about "' + query + '" yet'}`;
    
    return {
        text: `### 🤖 ${missionName} Local AI\n\n` +
            `⚠️ **ข้อมูลไม่พอ**\n\n` +
            `${suggestText}\n\n` +
            `💡 **วิธีแก้:** \n` +
            `1️⃣ ไปที่หน้า "องค์ความรู้" → อัดเสียง/ถ่ายรูป/บันทึกจากผู้รู้ในชุมชน\n` +
            `2️⃣ บอก AI ว่าข้อมูลเกี่ยวกับอะไร\n` +
            `3️⃣ ครู/ผู้เชี่ยวชาญจะตรวจสอบและยืนยัน\n` +
            `4️⃣ พอตรวจสอบเรียบร้อย Local AI จะสามารถตอบคำถามนี้ได้แล้ว\n\n` +
            `${currentLang === 'th' ? '*นี่คือแก่นแท้ของ AI FROM HERE: เด็กและชุมชนสร้างข้อมูลของตัวเอง ไม่ใช่ดึงจากโลก*' : '*Core concept: Build community knowledge locally first*'}`,
        sources: []
    };
}

function addChatBubble(type, text, sources = []) {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    const isUser = type === 'user';
    const avatarContent = isUser ? (currentUser?.avatar || 'U') : `<i data-lucide="bot"></i>`;

    let sourcesHtml = '';
    if (sources && sources.length > 0) {
        sourcesHtml = `
            <div class="chat-sources-list">
                <div class="chat-sources-label">${currentLang === 'th' ? 'แหล่งข้อมูลอ้างอิง (Verified Source)' : 'Verified Source'}</div>
                ${sources.map(s => `<div class="chat-source-item" onclick="openSourceModal('${s}')"><i data-lucide="file-check"></i> ${s}</div>`).join('')}
            </div>
        `;
    }

    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${type}`;
    msgDiv.innerHTML = `
        <div class="chat-msg-avatar">${avatarContent}</div>
        <div class="chat-msg-content">
            <div class="chat-bubble">${text}</div>
            ${sourcesHtml}
        </div>
    `;

    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
    initIcons();
}

function showTypingIndicator() {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg ai';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="chat-msg-avatar"><i data-lucide="bot"></i></div>
        <div class="chat-msg-content">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;
    initIcons();
}

function removeTypingIndicator() {
    document.getElementById('typing-indicator')?.remove();
}

function openSourceModal(sourceTitle) {
    const all = StorageService.getKnowledge();
    const found = all.find(k => k.title === sourceTitle);

    const titleEl = document.getElementById('source-modal-title');
    const bodyEl = document.getElementById('source-modal-body');

    if (titleEl) titleEl.textContent = found ? found.title : sourceTitle;
    if (bodyEl) bodyEl.innerHTML = `<p>${found ? found.content : 'ข้อมูลที่ได้รับการยินยอมและตรวจทานจากชุมชน'}</p>`;

    const modal = document.getElementById('source-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initIcons();
}

function closeSourceModal() {
    const modal = document.getElementById('source-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// ===== TEACHER REVIEW QUEUE CONTROLLER =====
function handleTeacherApprove(kId) {
    const all = StorageService.getKnowledge();
    const item = all.find(k => k.id === kId);
    if (item) {
        item.status = 'verified';
        StorageService.updateKnowledge(item);

        NotificationManager.addNotification({
            userId: item.userId,
            type: 'knowledge_verified',
            title: 'องค์ความรู้ผ่านการตรวจสอบแล้ว',
            message: `องค์ความรู้ "${item.title}" ผ่านการรับรองโดยผู้เชี่ยวชาญแล้ว พร้อมนำไปสร้าง AI`,
            relatedId: item.id
        });

        showToast(currentLang === 'th' ? `อนุมัติองค์ความรู้ "${item.title}" เรียบร้อยแล้ว` : `Approved knowledge source!`, 'success');
        renderTeacherReviewQueue();
    }
}

function handleTeacherReject(kId) {
    const all = StorageService.getKnowledge();
    const item = all.find(k => k.id === kId);
    if (item) {
        item.status = 'rejected';
        StorageService.updateKnowledge(item);

        NotificationManager.addNotification({
            userId: item.userId,
            type: 'knowledge_rejected',
            title: 'องค์ความรู้ต้องได้รับการแก้ไข',
            message: `องค์ความรู้ "${item.title}" ถูกปฏิเสธ กรุณาตรวจสอบรายละเอียดเพิ่มเติม`,
            relatedId: item.id
        });

        showToast(currentLang === 'th' ? `ปฏิเสธองค์ความรู้ "${item.title}"` : `Rejected source.`, 'warning');
        renderTeacherReviewQueue();
    }
}

// ===== EDIT PROFILE CONTROLLER =====
function openEditProfileModal() {
    if (!currentUser) return;
    const nameInput = document.getElementById('edit-profile-name');
    const commInput = document.getElementById('edit-profile-community');
    const bioInput = document.getElementById('edit-profile-bio');

    if (nameInput) nameInput.value = currentUser.name;
    if (commInput) commInput.value = currentUser.community || '';
    if (bioInput) bioInput.value = currentUser.bio || '';

    const modal = document.getElementById('edit-profile-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initIcons();
}

function closeEditProfileModal() {
    const modal = document.getElementById('edit-profile-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function handleSaveProfileSubmit(e) {
    e.preventDefault();
    if (!currentUser) {
        showToast(currentLang === 'th' ? 'ข้อผิดพลาด: ไม่พบผู้ใช้งาน' : 'Error: User not found', 'error');
        return;
    }

    const name = document.getElementById('edit-profile-name')?.value.trim();
    const community = document.getElementById('edit-profile-community')?.value.trim();
    const bio = document.getElementById('edit-profile-bio')?.value.trim();

    // Validation
    let hasError = false;
    if (!name || name.length < 2) {
        showToast(currentLang === 'th' ? '⚠️ ชื่อต้องมีอย่างน้อย 2 ตัวอักษร' : 'Name must be at least 2 characters', 'warning');
        hasError = true;
    }
    if (bio && bio.length < 3) {
        showToast(currentLang === 'th' ? '⚠️ ชีวประวัติต้องมีอย่างน้อย 3 ตัวอักษร' : 'Bio must be at least 3 characters', 'warning');
        hasError = true;
    }

    if (hasError) return;

    currentUser.name = name;
    currentUser.avatar = name.charAt(0).toUpperCase();
    currentUser.community = community;
    currentUser.bio = bio;

    StorageService.updateUser(currentUser);
    closeEditProfileModal();
    updateUserDisplays();
    showToast(currentLang === 'th' ? 'บันทึกโปรไฟล์สำเร็จแล้ว' : 'Profile updated successfully!', 'success');
}

function handleResetMyData() {
    if (!currentUser) return;
    if (confirm(currentLang === 'th' ? 'คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตข้อมูลภารกิจและองค์ความรู้ทั้งหมดของคุณ?' : 'Are you sure you want to reset your mission and knowledge data?')) {
        StorageService.resetUserData(currentUser.id);
        setupActiveMission();
        renderActiveMissionUI();
        renderCurrentPage();
        showToast(currentLang === 'th' ? 'รีเซ็ตข้อมูลภารกิจของคุณเรียบร้อยแล้ว' : 'Your data has been reset.', 'info');
    }
}

// ===== NAVIGATION & BREADCRUMB ENGINE =====
function navigateTo(page) {
    currentPage = page;

    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.dataset.page === page);
    });

    document.querySelectorAll('.mobile-nav-item').forEach(n => {
        n.classList.toggle('active', n.getAttribute('onclick')?.includes(page));
    });

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${page}`);
    if (target) {
        target.classList.add('active');
    }

    closeMobileSidebar();
    renderBreadcrumb();

    window.scrollTo(0, 0);
    renderCurrentPage();
    initIcons();
}

function renderBreadcrumb() {
    const container = document.getElementById('page-breadcrumb');
    if (!container) return;

    const isTh = currentLang === 'th';
    const activeMission = StorageService.getMissionById(activeMissionId);
    const mTitle = activeMission ? activeMission.title : (isTh ? 'ภารกิจ' : 'Mission');

    let crumbs = [
        { label: isTh ? 'ภาพรวม' : 'Home', icon: 'home', page: 'dashboard' }
    ];

    if (currentPage === 'missions') {
        crumbs.push({ label: isTh ? 'ภารกิจของฉัน' : 'My Missions', icon: 'target', page: 'missions' });
    } else if (currentPage === 'knowledge') {
        crumbs.push({ label: isTh ? 'ภารกิจของฉัน' : 'My Missions', icon: 'target', page: 'missions' });
        crumbs.push({ label: mTitle, icon: 'book-open', page: 'knowledge' });
    } else if (currentPage === 'verify') {
        crumbs.push({ label: mTitle, icon: 'target', page: 'missions' });
        crumbs.push({ label: isTh ? 'ตรวจสอบข้อมูล' : 'Verify Data', icon: 'check-circle-2', page: 'verify' });
    } else if (currentPage === 'build') {
        crumbs.push({ label: mTitle, icon: 'target', page: 'missions' });
        crumbs.push({ label: isTh ? 'สร้าง Local AI' : 'Build AI', icon: 'cpu', page: 'build' });
    } else if (currentPage === 'test') {
        crumbs.push({ label: mTitle, icon: 'target', page: 'missions' });
        crumbs.push({ label: isTh ? 'ทดสอบ AI' : 'Test AI', icon: 'flask-conical', page: 'test' });
    } else if (currentPage === 'impact') {
        crumbs.push({ label: isTh ? 'ผลกระทบ' : 'Impact', icon: 'bar-chart-2', page: 'impact' });
    } else if (currentPage === 'profile') {
        crumbs.push({ label: isTh ? 'โปรไฟล์' : 'Profile', icon: 'user', page: 'profile' });
    } else if (currentPage === 'teacher-review') {
        crumbs.push({ label: isTh ? 'รายการรอตรวจสอบ' : 'Review Queue', icon: 'check-square', page: 'teacher-review' });
    } else if (currentPage === 'teacher-students') {
        crumbs.push({ label: isTh ? 'โครงงานนักเรียน' : 'Student Projects', icon: 'users', page: 'teacher-students' });
    } else if (currentPage === 'admin-hub') {
        crumbs.push({ label: isTh ? 'ภาพรวมเครือข่าย' : 'Network Overview', icon: 'layout-grid', page: 'admin-hub' });
    }

    container.innerHTML = crumbs.map((c, i) => {
        const isLast = i === crumbs.length - 1;
        return `
            <span class="breadcrumb-item ${isLast ? 'active' : ''}" onclick="navigateTo('${c.page}')">
                <i data-lucide="${c.icon}"></i>
                <span>${c.label}</span>
            </span>
            ${!isLast ? '<span class="breadcrumb-separator">/</span>' : ''}
        `;
    }).join('');

    initIcons();
}

function renderCurrentPage() {
    if (!currentUser) return;

    if (currentPage === 'dashboard') renderDashboardPage();
    else if (currentPage === 'missions') renderMissionsPage();
    else if (currentPage === 'knowledge') renderKnowledgePage();
    else if (currentPage === 'verify') renderVerifyPage();
    else if (currentPage === 'build') renderBuildPage();
    else if (currentPage === 'test') renderTestAIPage();
    else if (currentPage === 'profile') renderProfilePage();
    else if (currentPage === 'teacher-review') renderTeacherReviewQueue();
    else if (currentPage === 'teacher-students') renderTeacherStudentsPage();
    else if (currentPage === 'admin-hub') renderAdminHubPage();
}

// ===== DASHBOARD CONTROL CENTER ENGINE (DYNAMIC NEXT ACTION CTA) =====
function renderDashboardPage() {
    renderMobileHomeView();
    const userMissions = StorageService.getUserMissions(currentUser.id);
    const userKnowledge = StorageService.getUserKnowledge(currentUser.id);
    const deployedAI = userMissions.filter(m => m.builtAi).length;

    const mCount = document.getElementById('dash-stat-missions');
    const kCount = document.getElementById('dash-stat-sources');
    const aiCount = document.getElementById('dash-stat-ai');
    const sCount = document.getElementById('dash-stat-skills');

    if (mCount) mCount.textContent = userMissions.length;
    if (kCount) kCount.textContent = userKnowledge.length;
    if (aiCount) aiCount.textContent = deployedAI;
    if (sCount) sCount.textContent = Math.min(5, userKnowledge.length + deployedAI);

    const container = document.getElementById('dash-active-mission-container');
    const activeMission = StorageService.getMissionById(activeMissionId);

    if (!container) return;

    // DYNAMIC NEXT ACTION COMPUTATION
    if (!activeMission) {
        // STATE 1: NO MISSION
        container.innerHTML = `
            <div class="dash-control-center-card">
                <div class="dash-control-header">
                    <div class="dash-control-title-group">
                        <div class="dash-control-emoji"><i data-lucide="target"></i></div>
                        <div>
                            <h3>ยังไม่มีภารกิจ AI</h3>
                            <p>เริ่มต้นสร้างภารกิจแรกจากปัญหาหรือองค์ความรู้ที่คุณพบในชุมชน</p>
                        </div>
                    </div>
                    <span class="dash-control-step-status">ขั้นตอน: เริ่มต้นวางแผนโจทย์</span>
                </div>
                <div class="dash-control-cta-row">
                    <span class="dash-next-step-hint">แนะนำ: <strong>เริ่มสร้าง Mission แรกของคุณ</strong></span>
                    <button class="btn btn-primary" onclick="openCreateMissionModal()">
                        <i data-lucide="plus-circle"></i> <span>สร้างภารกิจแรก</span>
                    </button>
                </div>
            </div>
        `;
    } else {
        const kList = StorageService.getKnowledgeForMission(activeMission.id);
        const pendingK = kList.filter(k => k.status === 'pending');
        const verifiedK = kList.filter(k => k.status === 'verified');

        let stepText = '';
        let hintText = '';
        let ctaText = '';
        let ctaAction = '';
        let ctaIcon = 'arrow-right';

        if (kList.length === 0) {
            // STATE 2: HAS MISSION, NO KNOWLEDGE
            stepText = 'รอเก็บองค์ความรู้';
            hintText = 'แนะนำ: <strong>เพิ่มองค์ความรู้จากชุมชน</strong>';
            ctaText = 'เพิ่มข้อมูล';
            ctaAction = "navigateTo('knowledge')";
            ctaIcon = 'plus';
        } else if (pendingK.length > 0) {
            // STATE 3: HAS KNOWLEDGE BUT NOT VERIFIED
            stepText = 'คลังความรู้พร้อมใช้งาน';
            hintText = 'แนะนำ: <strong>องค์ความรู้ทุกรายการพร้อมให้ Local AI เรียนรู้ทันที</strong>';
            ctaText = 'ตรวจสอบข้อมูล';
            ctaAction = "navigateTo('verify')";
            ctaIcon = 'check-circle-2';
        } else if (verifiedK.length > 0 && !activeMission.builtAi) {
            // STATE 4: VERIFIED, READY TO BUILD
            stepText = 'พร้อมสร้าง Local AI';
            hintText = 'แนะนำ: <strong>องค์ความรู้พร้อมสร้าง Local AI</strong>';
            ctaText = 'สร้าง Local AI';
            ctaAction = "navigateTo('build')";
            ctaIcon = 'cpu';
        } else {
            // STATE 5: AI READY
            stepText = 'Local AI พร้อมใช้งานแล้ว';
            hintText = 'แนะนำ: <strong>Local AI พร้อมทดสอบถามตอบ</strong>';
            ctaText = 'ทดสอบ AI Assistant';
            ctaAction = "navigateTo('test')";
            ctaIcon = 'flask-conical';
        }

        const missionIcon = activeMission.icon || 'target';

        container.innerHTML = `
            <div class="dash-control-center-card">
                <div class="dash-control-header">
                    <div class="dash-control-title-group">
                        <div class="dash-control-emoji"><i data-lucide="${missionIcon}"></i></div>
                        <div>
                            <h3>${activeMission.title}</h3>
                            <p>${activeMission.problem}</p>
                        </div>
                    </div>
                    <span class="dash-control-step-status">${stepText}</span>
                </div>
                <div class="dash-control-body">
                    <div class="progress-info">
                        <span class="progress-label">ความคืบหน้าภารกิจ (${verifiedK.length}/${kList.length} verified)</span>
                        <span class="progress-value">${activeMission.progress || 0}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${activeMission.progress || 0}%"></div>
                    </div>
                </div>
                <div class="dash-control-cta-row">
                    <span class="dash-next-step-hint">${hintText}</span>
                    <button class="btn btn-primary" onclick="${ctaAction}">
                        <i data-lucide="${ctaIcon}"></i> <span>${ctaText}</span>
                    </button>
                </div>
            </div>
        `;
    }

    // Render Step Progress Component
    const stepContainer = document.getElementById('dash-step-progress');
    if (stepContainer) {
        const kList = activeMission ? StorageService.getKnowledgeForMission(activeMission.id) : [];
        const hasKnowledge = kList.length > 0;
        const hasVerified = kList.some(k => k.status === 'verified');
        const isBuilt = activeMission ? activeMission.builtAi : false;

        stepContainer.innerHTML = `
            <div class="step ${activeMission ? 'completed' : 'active'}" onclick="navigateTo('missions')">
                <div class="step-dot">${activeMission ? '<i data-lucide="check"></i>' : ''}</div>
                <span class="step-label">ปัญหา</span>
            </div>
            <div class="step-line ${activeMission ? 'completed' : ''}"></div>
            <div class="step ${hasKnowledge ? 'completed' : (activeMission ? 'active' : '')}" onclick="navigateTo('knowledge')">
                <div class="step-dot">${hasKnowledge ? '<i data-lucide="check"></i>' : ''}</div>
                <span class="step-label">องค์ความรู้</span>
            </div>
            <div class="step-line ${hasKnowledge ? 'completed' : ''}"></div>
            <div class="step ${hasVerified ? 'completed' : (hasKnowledge ? 'active' : '')}" onclick="navigateTo('verify')">
                <div class="step-dot">${hasVerified ? '<i data-lucide="check"></i>' : ''}</div>
                <span class="step-label">ตรวจสอบ</span>
            </div>
            <div class="step-line ${hasVerified ? 'completed' : ''}"></div>
            <div class="step ${isBuilt ? 'completed' : (hasVerified ? 'active' : '')}" onclick="navigateTo('build')">
                <div class="step-dot">${isBuilt ? '<i data-lucide="check"></i>' : ''}</div>
                <span class="step-label">สร้าง AI</span>
            </div>
            <div class="step-line ${isBuilt ? 'completed' : ''}"></div>
            <div class="step ${isBuilt ? 'active' : ''}" onclick="navigateTo('test')">
                <div class="step-dot"></div>
                <span class="step-label">ทดสอบ</span>
            </div>
            <div class="step-line ${isBuilt ? 'completed' : ''}"></div>
            <div class="step" onclick="navigateTo('impact')">
                <div class="step-dot"></div>
                <span class="step-label">Impact</span>
            </div>
        `;
    }

    initIcons();
}

function renderMissionsPage() {
    const container = document.getElementById('missions-grid-container');
    if (!container) return;

    const userMissions = StorageService.getUserMissions(currentUser.id);

    if (userMissions.length === 0) {
        container.innerHTML = `
            <div class="empty-state-card" style="grid-column: 1 / -1;">
                <div class="empty-state-icon"><i data-lucide="target"></i></div>
                <h3>${i18n[currentLang].emptyMissionTitle}</h3>
                <p>${i18n[currentLang].emptyMissionDesc}</p>
                <div class="empty-state-actions">
                    <button class="btn btn-primary" onclick="openCreateMissionModal()">
                        <i data-lucide="plus-circle"></i> <span>${i18n[currentLang].btnCreateFirstMission}</span>
                    </button>
                    <button class="btn btn-outline btn-sm" onclick="loadSampleDemoMission()">
                        <i data-lucide="sparkles"></i> <span>${i18n[currentLang].btnLoadDemoMission}</span>
                    </button>
                </div>
            </div>
        `;
        initIcons();
        return;
    }

    container.innerHTML = userMissions.map(m => {
        const kList = StorageService.getKnowledgeForMission(m.id);
        const isActive = m.id === activeMissionId;
        const icon = m.icon || 'target';
        return `
            <div class="mission-card ${isActive ? 'active-mission-border' : ''}" onclick="handleActiveMissionChange('${m.id}')">
                <div class="mission-card-top-row">
                    <span class="mission-card-emoji"><i data-lucide="${icon}"></i></span>
                    <div class="mission-card-badge-group">
                        <span class="mission-card-status ${m.status}">${m.status === 'completed' ? 'สำเร็จแล้ว' : 'กำลังดำเนินการ'}</span>
                        ${isActive ? '<span class="role-pill-badge">ใช้งานอยู่</span>' : ''}
                    </div>
                </div>
                <h3>${m.title}</h3>
                <span class="mission-card-category">${m.category || 'ทั่วไป'}</span>
                <p>${m.problem}</p>
                <div class="mission-card-meta">
                    <span><i data-lucide="database"></i> ${kList.length} องค์ความรู้</span>
                    <span><i data-lucide="map-pin"></i> ${m.community || 'ชุมชนท้องถิ่น'}</span>
                </div>
                <div class="progress-bar small">
                    <div class="progress-fill" style="width: ${m.progress || 0}%"></div>
                </div>
                <div class="mission-card-footer">
                    <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); handleActiveMissionChange('${m.id}'); navigateTo('knowledge');">
                        <span>จัดการความรู้</span>
                        <i data-lucide="arrow-right"></i>
                    </button>
                    <button class="mission-card-delete-btn" onclick="event.stopPropagation(); handleDeleteMission('${m.id}')" title="ลบภารกิจ">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    initIcons();
}

function renderKnowledgePage() {
    const container = document.getElementById('knowledge-items');
    const countEl = document.getElementById('source-count');
    if (!container) return;

    // Safety: If no mission, guide user to create one
    if (!activeMissionId || !currentUser) {
        if (countEl) countEl.textContent = '0 แหล่งข้อมูล';
        container.innerHTML = `
            <div class="empty-state-card">
                <div class="empty-state-icon"><i data-lucide="target"></i></div>
                <h3>กรุณาเลือกหรือสร้างภารกิจก่อน</h3>
                <p>องค์ความรู้จะถูกจัดเก็บแยกตามแต่ละภารกิจที่คุณสร้างขึ้น</p>
                <button class="btn btn-primary" onclick="openCreateMissionModal()">สร้างภารกิจแรก</button>
            </div>
        `;
        initIcons();
        return;
    }

    const kList = StorageService.getKnowledgeForMission(activeMissionId);
    if (countEl) countEl.textContent = `${kList.length} แหล่งข้อมูล`;

    // Update filter badge counts
    const elAll = document.getElementById('k-count-all');
    const elLearning = document.getElementById('k-count-learning');
    const elPending = document.getElementById('k-count-pending');
    const elVerified = document.getElementById('k-count-verified');

    const vCount = kList.filter(k => k.status === 'verified').length;
    const pCount = kList.filter(k => k.status === 'pending').length;
    const lCount = kList.filter(k => k.status === 'learning').length;

    if (elAll) elAll.textContent = kList.length;
    if (elLearning) elLearning.textContent = lCount;
    if (elPending) elPending.textContent = pCount;
    if (elVerified) elVerified.textContent = vCount;

    if (kList.length === 0) {
        container.innerHTML = `
            <div class="empty-state-card">
                <div class="empty-state-icon"><i data-lucide="book-open"></i></div>
                <h3>${i18n[currentLang].emptyKnowledgeTitle}</h3>
                <p>${i18n[currentLang].emptyKnowledgeDesc}</p>
                <div style="margin-top: 12px; padding: 12px; background: #f0fdf4; border-radius: 8px; border-left: 3px solid #22c55e; font-size: 13px; color: #15803d;">
                    <strong>💡 ${currentLang === 'th' ? 'เพิ่มความรู้คืออะไร?' : 'What is "Add Knowledge"?'}</strong>
                    <p style="margin: 6px 0 0 0;">${currentLang === 'th' ? '• ต้องเก็บข้อมูลจริงจากผู้รู้ในชุมชนของคุณ (สัมภาษณ์ ถ่ายรูป วิดีโอ)\n• AI จะช่วยถอดข้อมูลและตรวจสอบความถูกต้อง\n• ครู/ผู้เชี่ยวชาญจะยืนยันได้รับความยินยอมถูกต้อง (Consent)\n• พอข้อมูลผ่านการตรวจสอบ Local AI จะสามารถตอบคำถามจากข้อมูลของชุมชนได้' : '• Collect real data from community experts (interviews, photos, videos)\n• AI helps extract and verify the information\n• Teachers/experts confirm proper consent\n• Once verified, Local AI can answer questions based on community knowledge'}</p>
                </div>
                <button class="btn btn-primary" onclick="openAddKnowledgePicker()" style="margin-top: 16px;">
                    <i data-lucide="plus"></i> <span>${i18n[currentLang].btnUploadFirstKnowledge}</span>
                </button>
            </div>
        `;
        initIcons();
        return;
    }

    container.innerHTML = kList.map(k => `
        <div class="knowledge-item" onclick="openKnowledgeDetail('${k.id}')">
            <div class="knowledge-type-icon ${k.sourceType}">
                <i data-lucide="${k.sourceType === 'audio' ? 'mic' : (k.sourceType === 'image' ? 'image' : (k.sourceType === 'pdf' ? 'file' : 'file-text'))}"></i>
            </div>
            <div class="knowledge-item-info">
                <h4>${k.title}</h4>
                <div class="knowledge-item-meta">
                    <span><i data-lucide="user"></i> ${k.contributor}</span>
                    <span><i data-lucide="calendar"></i> ${k.createdAt}</span>
                    <span>${k.consent ? '<i data-lucide="check-circle-2"></i> Consent' : ''}</span>
                    ${k.content.includes('Level 2') ? '<span class="role-pill-badge" style="font-size:10px;">AI Enriched</span>' : ''}
                </div>
            </div>
            <div class="knowledge-item-actions">
                <span class="knowledge-item-status ${k.status}">
                    ${k.status === 'verified' ? 'ผ่านการตรวจสอบ' : (k.status === 'rejected' ? 'ต้องแก้ไข' : 'รอตรวจสอบ')}
                </span>
                <button class="k-action-btn delete" onclick="event.stopPropagation(); handleDeleteKnowledge('${k.id}')" title="ลบข้อมูล">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        </div>
    `).join('');

    initIcons();
}

function renderVerifyPage() {
    const container = document.getElementById('verify-main-container');
    if (!container) return;

    if (!activeMissionId) {
        container.innerHTML = `
            <div class="empty-state-card" style="grid-column: 1 / -1;">
                <h3>กรุณาเลือกภารกิจเพื่อตรวจสอบข้อมูล</h3>
            </div>
        `;
        return;
    }

    const mission = StorageService.getMissionById(activeMissionId);
    const kList = StorageService.getKnowledgeForMission(activeMissionId);
    const pendingList = kList.filter(k => k.status === 'pending');
    const verifiedList = kList.filter(k => k.status === 'verified');

    if (kList.length === 0) {
        container.innerHTML = `
            <div class="empty-state-card" style="grid-column: 1 / -1;">
                <div class="empty-state-icon"><i data-lucide="check-circle-2"></i></div>
                <h3>ยังไม่มีองค์ความรู้ในภารกิจนี้</h3>
                <p>เพิ่มไฟล์เสียงหรือเอกสารในหน้าองค์ความรู้ เพื่อให้ระบบสกัดและตรวจสอบข้อมูล</p>
                <button class="btn btn-primary" onclick="navigateTo('knowledge')">ไปหน้าองค์ความรู้</button>
            </div>
        `;
        initIcons();
        return;
    }

    const itemToInspect = pendingList.length > 0 ? pendingList[0] : kList[0];

    container.innerHTML = `
        <div class="verify-main">
            <div class="verify-card">
                <div class="verify-label">ข้อมูลที่ระบบสกัดออกมา (Extracted Knowledge)</div>
                <blockquote class="verify-quote">
                    “${itemToInspect.content}”
                </blockquote>
                <div class="verify-actions">
                    ${itemToInspect.status === 'verified' ? `
                        <div class="verify-success" style="width: 100%;">
                            <div class="verify-success-icon"><i data-lucide="check"></i></div>
                            <div>
                                <h4>ข้อมูลได้รับการยืนยันความถูกต้องแล้ว</h4>
                                <p>พร้อมนำไปใช้สร้าง Local AI ประจำชุมชน</p>
                            </div>
                        </div>
                    ` : `
                        <button class="btn btn-primary btn-lg" onclick="handleVerifyApproveSelf('${itemToInspect.id}')">
                            <i data-lucide="check-circle-2"></i> <span>ยืนยันความถูกต้อง</span>
                        </button>
                        <button class="btn btn-outline-warn btn-lg" onclick="showToast('ส่งคำขอตรวจทานให้ครูในระบบเรียบร้อยแล้ว', 'info')">
                            <i data-lucide="send"></i> <span>ส่งให้ครู/ผู้เชี่ยวชาญตรวจทาน</span>
                        </button>
                    `}
                </div>
            </div>
        </div>
        <div class="verify-sidebar">
            <div class="verify-meta-card">
                <div class="meta-item">
                    <span class="meta-label">ภารกิจ</span>
                    <span class="meta-value"><strong>${mission ? mission.title : '-'}</strong></span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">ผู้ให้ข้อมูล</span>
                    <span class="meta-value">${itemToInspect.contributor}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">ความยินยอม (Consent)</span>
                    <span class="meta-value consent-ok"><i data-lucide="check-circle-2"></i> Verified (ยินยอม)</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Confidence Score</span>
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: 92%"></div>
                        <span>92%</span>
                    </div>
                </div>
                <div class="meta-item">
                    <span class="meta-label">สถานะในภารกิจนี้</span>
                    <span class="meta-value">${verifiedList.length}/${kList.length} รายการผ่านการรับรองแล้ว</span>
                </div>
            </div>
        </div>
    `;

    initIcons();
}

function updateActiveMissionProgressOnAdd() {
    if (!activeMissionId) return;
    const mission = StorageService.getMissionById(activeMissionId);
    if (!mission) return;
    const kList = StorageService.getKnowledgeForMission(mission.id);
    const verifiedCount = kList.filter(k => k.status === 'verified').length;
    mission.progress = Math.min(100, Math.round((verifiedCount / Math.max(1, kList.length)) * 75 + 25));
    if (kList.length >= 3) {
        mission.builtAi = true;
    }
    StorageService.updateMission(mission);
}

function handleVerifyApproveSelf(kId) {
    const all = StorageService.getKnowledge();
    const item = all.find(k => k.id === kId);
    if (item) {
        item.status = 'verified';
        StorageService.updateKnowledge(item);
        updateActiveMissionProgressOnAdd();

        NotificationManager.addNotification({
            userId: item.userId,
            type: 'knowledge_verified',
            title: 'ข้อมูลได้รับการยืนยันแล้ว',
            message: `องค์ความรู้ "${item.title}" ผ่านการรับรองความถูกต้องเรียบร้อย`,
            relatedId: item.id
        });

        showToast(currentLang === 'th' ? 'ยืนยันข้อมูลเรียบร้อยแล้ว! AI พร้อมใช้งานทันที' : 'Knowledge source verified', 'success');
        renderCurrentPage();
    }
}

function renderBuildPage() {
    const container = document.getElementById('build-workspace-container');
    if (!container) return;

    if (!activeMissionId) {
        container.innerHTML = `
            <div class="empty-state-card">
                <h3>กรุณาเลือกภารกิจเพื่อสร้าง AI</h3>
            </div>
        `;
        return;
    }

    const mission = StorageService.getMissionById(activeMissionId);
    const kList = StorageService.getKnowledgeForMission(activeMissionId);
    const verifiedK = kList.filter(k => k.status === 'verified');

    if (mission.builtAi) {
        container.innerHTML = `
            <div class="build-success-card" style="margin: 20px auto; max-width: 520px; text-align: center;">
                <div class="success-celebration"><i data-lucide="award"></i></div>
                <h2>Local AI นี้สร้างเสร็จสมบูรณ์แล้ว</h2>
                <div class="success-details">
                    <div class="success-ai-name">${mission.title}</div>
                    <div class="success-ai-sources">${verifiedK.length} แหล่งข้อมูลชุมชนที่เชื่อมต่อในระบบ RAG</div>
                </div>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-primary btn-lg" onclick="navigateTo('test')">
                        <i data-lucide="flask-conical"></i> <span>${i18n[currentLang].btnOpenAI}</span>
                    </button>
                    <button class="btn btn-outline" onclick="resetBuildToConfig(); startBuildAI();">
                        <i data-lucide="refresh-cw"></i> <span>${i18n[currentLang].btnRetrainAI}</span>
                    </button>
                </div>
            </div>
        `;
        initIcons();
        return;
    }

    container.innerHTML = `
        <div id="build-config-state" class="build-config">
            <div class="build-grid">
                <div class="build-left">
                    <div class="build-card">
                        <h3><i data-lucide="check-circle-2"></i> แหล่งข้อมูลที่ผ่านการตรวจสอบ (${verifiedK.length})</h3>
                        <ul class="source-list">
                            ${verifiedK.length > 0 ? verifiedK.map(k => `
                                <li class="source-verified"><i data-lucide="check-circle-2"></i> ${k.title} (${k.contributor})</li>
                            `).join('') : `
                                <li style="color: var(--warning); font-size: 13px;">ยังไม่มีข้อมูลที่ได้รับการยืนยัน กรุณาไปยืนยันข้อมูลก่อน</li>
                            `}
                        </ul>
                    </div>
                </div>
                <div class="build-right">
                    <div class="build-card">
                        <h3><i data-lucide="sliders"></i> การกำหนดค่า AI</h3>
                        <div class="config-field">
                            <label>AI Assistant Name</label>
                            <div class="config-value">${mission.title}</div>
                        </div>
                        <div class="config-field">
                            <label>Knowledge Grounding</label>
                            <div class="config-value">${verifiedK.length} แหล่งข้อมูลชุมชน</div>
                        </div>
                        <div class="config-field">
                            <label>Architecture</label>
                            <div class="config-value">Community-Grounding RAG Agent</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="build-action">
                <button class="btn btn-primary btn-xl build-btn" onclick="startBuildAI()">
                    <i data-lucide="zap"></i> <span>${i18n[currentLang].btnBuildLocalAI}</span>
                </button>
            </div>
        </div>

        <div id="build-progress-state" class="build-progress hidden">
            <div class="build-progress-card">
                <div class="build-spinner"></div>
                <div class="build-steps">
                    <div class="build-step" id="bstep-1"><div class="build-step-indicator"></div><span>${i18n[currentLang].bStep1}</span></div>
                    <div class="build-step" id="bstep-2"><div class="build-step-indicator"></div><span>${i18n[currentLang].bStep2}</span></div>
                    <div class="build-step" id="bstep-3"><div class="build-step-indicator"></div><span>${i18n[currentLang].bStep3}</span></div>
                    <div class="build-step" id="bstep-4"><div class="build-step-indicator"></div><span>${i18n[currentLang].bStep4}</span></div>
                    <div class="build-step" id="bstep-5"><div class="build-step-indicator"></div><span>${i18n[currentLang].bStep5}</span></div>
                </div>
            </div>
        </div>

        <div id="build-success-state" class="build-success hidden">
            <div class="build-success-card">
                <div class="success-celebration"><i data-lucide="award"></i></div>
                <h2>${i18n[currentLang].buildSuccessTitle}</h2>
                <div class="success-details">
                    <div class="success-ai-name">${mission.title}</div>
                    <div class="success-ai-sources">${verifiedK.length} แหล่งข้อมูลชุมชน • พร้อมใช้งาน</div>
                </div>
                <button class="btn btn-primary btn-lg" onclick="navigateTo('test')">
                    <i data-lucide="flask-conical"></i> <span>${i18n[currentLang].btnOpenAI}</span>
                </button>
            </div>
        </div>
    `;

    initIcons();
}

function renderTestAIPage() {
    const activeMission = StorageService.getMissionById(activeMissionId);
    const verifiedK = activeMission ? StorageService.getKnowledgeForMission(activeMission.id).filter(k => k.status === 'verified') : [];

    const hEmoji = document.getElementById('chat-header-emoji');
    const hTitle = document.getElementById('chat-header-title');
    const hSources = document.getElementById('chat-header-sources');
    const trustDesc = document.getElementById('trust-message-desc');

    if (hEmoji) hEmoji.innerHTML = `<i data-lucide="bot"></i>`;
    if (hTitle) hTitle.textContent = activeMission ? activeMission.title : 'Local AI';
    if (hSources) hSources.textContent = `${verifiedK.length} Verified Sources`;
    if (trustDesc) trustDesc.textContent = activeMission ? `AI นี้ตอบคำถามเฉพาะจาก ${verifiedK.length} แหล่งข้อมูลที่ได้รับการยืนยันในภารกิจ "${activeMission.title}" เท่านั้น` : 'AI Grounded Trust Layer';

    const msgContainer = document.getElementById('chat-messages');
    if (msgContainer) {
        msgContainer.innerHTML = `
            <div class="chat-welcome">
                <div class="chat-welcome-icon"><i data-lucide="bot"></i></div>
                <h3>${activeMission ? activeMission.title : 'Local AI Assistant'}</h3>
                <p>สวัสดีครับ ผมเป็น AI ผู้ช่วยประจำชุมชนที่สร้างจากองค์ความรู้ในภารกิจ "${activeMission ? activeMission.title : ''}" ถามคำถามได้เลยครับ</p>
            </div>
        `;
    }

    const suggestionsContainer = document.getElementById('chat-suggestions');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'flex';
        if (verifiedK.length > 0) {
            suggestionsContainer.innerHTML = verifiedK.map(k => `
                <button class="suggestion-chip" onclick="sendSuggestionFromChip('${k.topic || k.title}')">${k.topic || k.title}</button>
            `).join('');
        } else {
            suggestionsContainer.innerHTML = `
                <span style="font-size: 12px; color: var(--text-muted); padding: 4px 8px;">(เพิ่มและตรวจทานองค์ความรู้ในภารกิจเพื่อเริ่มถามตอบ)</span>
            `;
        }
    }

    initIcons();
}

function sendSuggestionFromChip(text) {
    const input = document.getElementById('chat-input');
    if (input) {
        input.value = text;
        sendChatMessage();
    }
}

function renderProfilePage() {
    if (!currentUser) return;
    ensureDemoMissionForUser(currentUser.id);

    const userMissions = StorageService.getUserMissions(currentUser.id);
    const userKnowledge = StorageService.getUserKnowledge(currentUser.id);
    const deployedAI = userMissions.filter(m => m.builtAi).length;

    const pAvatar = document.getElementById('profile-avatar-lg');
    const pName = document.getElementById('profile-display-name');
    const pRole = document.getElementById('profile-role-badge');
    const pComm = document.getElementById('profile-community-badge');
    const pBio = document.getElementById('profile-bio-text');

    if (pAvatar) pAvatar.textContent = currentUser.avatar || currentUser.name.charAt(0);
    if (pName) pName.textContent = currentUser.name + (currentUser.lastName ? ' ' + currentUser.lastName : '');
    if (pRole) pRole.innerHTML = `<i data-lucide="award"></i> ${currentUser.roleTitle || currentUser.role}`;
    if (pComm) pComm.innerHTML = `<i data-lucide="map-pin"></i> ${currentUser.community || 'ชุมชนท้องถิ่น'}`;
    if (pBio) pBio.textContent = currentUser.bio || 'นักเรียนผู้สนใจการนำ AI มาอนุรักษ์ความรู้ของชุมชน';

    const pProjects = document.getElementById('profile-stat-projects');
    const pSources = document.getElementById('profile-stat-sources');
    const pDeployed = document.getElementById('profile-stat-deployed');
    const pSkills = document.getElementById('profile-stat-skills');

    if (pProjects) pProjects.textContent = userMissions.length;
    if (pSources) pSources.textContent = userKnowledge.length;
    if (pDeployed) pDeployed.textContent = deployedAI;
    if (pSkills) pSkills.textContent = Math.min(5, userKnowledge.length + deployedAI);

    const skillsContainer = document.getElementById('profile-skills-container');
    if (skillsContainer) {
        const dScore = Math.min(100, 40 + userKnowledge.length * 15);
        const vScore = Math.min(100, 30 + userKnowledge.filter(k => k.status === 'verified').length * 20);
        const rScore = Math.min(100, deployedAI > 0 ? 80 : 30);
        const eScore = Math.min(100, deployedAI > 0 ? 70 : 20);

        skillsContainer.innerHTML = `
            <div class="skill-item">
                <div class="skill-header"><span class="skill-name">Data Collection (การเก็บข้อมูลชุมชน)</span><span class="skill-percent">${dScore}%</span></div>
                <div class="skill-bar"><div class="skill-fill" style="width: ${dScore}%"></div></div>
            </div>
            <div class="skill-item">
                <div class="skill-header"><span class="skill-name">Verification & Consent (การตรวจสอบความถูกต้อง)</span><span class="skill-percent">${vScore}%</span></div>
                <div class="skill-bar"><div class="skill-fill" style="width: ${vScore}%"></div></div>
            </div>
            <div class="skill-item">
                <div class="skill-header"><span class="skill-name">RAG / Local AI Architecture (การสร้างโมเดล)</span><span class="skill-percent">${rScore}%</span></div>
                <div class="skill-bar"><div class="skill-fill" style="width: ${rScore}%"></div></div>
            </div>
            <div class="skill-item">
                <div class="skill-header"><span class="skill-name">Responsible AI & Ethics (จริยธรรม AI ชุมชน)</span><span class="skill-percent">${eScore}%</span></div>
                <div class="skill-bar"><div class="skill-fill" style="width: ${eScore}%"></div></div>
            </div>
        `;
    }

    const portfolioContainer = document.getElementById('profile-portfolio-container');
    if (portfolioContainer) {
        if (userMissions.length === 0) {
            portfolioContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 13px;">ยังไม่มีผลงาน AI ที่สร้าง</p>`;
        } else {
            portfolioContainer.innerHTML = userMissions.map(m => `
                <div class="portfolio-card" onclick="handleActiveMissionChange('${m.id}'); navigateTo('${m.builtAi ? 'test' : 'build'}')">
                    <div class="portfolio-emoji"><i data-lucide="${m.icon || 'target'}"></i></div>
                    <div class="portfolio-info">
                        <h3>${m.title}</h3>
                        <span class="portfolio-status ${m.builtAi ? 'deployed' : 'in-progress'}">
                            <i data-lucide="${m.builtAi ? 'check-circle-2' : 'clock'}"></i>
                            ${m.builtAi ? 'Deployed (ใช้งานได้จริง)' : 'In Progress (กำลังสร้าง)'}
                        </span>
                    </div>
                </div>
            `).join('');
        }
    }

    initIcons();
}

function renderTeacherReviewQueue() {
    const container = document.getElementById('teacher-queue-container');
    if (!container) return;

    const allKnowledge = StorageService.getKnowledge();
    const allUsers = StorageService.getUsers();
    const allMissions = StorageService.getMissions();

    const pendingQueue = allKnowledge.filter(k => k.status === 'pending');

    if (pendingQueue.length === 0) {
        container.innerHTML = `
            <div class="empty-state-card" style="grid-column: 1 / -1;">
                <div class="empty-state-icon"><i data-lucide="check"></i></div>
                <h3>ไม่มีรายการค้างตรวจในขณะนี้</h3>
                <p>องค์ความรู้ทั้งหมดจากนักเรียนได้รับการตรวจทานเรียบร้อยแล้ว</p>
            </div>
        `;
        initIcons();
        return;
    }

    container.innerHTML = pendingQueue.map(k => {
        const student = allUsers.find(u => u.id === k.userId);
        const mission = allMissions.find(m => m.id === k.missionId);
        return `
            <div class="teacher-review-card">
                <div class="t-review-header">
                    <span class="t-student-info"><i data-lucide="user"></i> ${student ? student.name : 'Student'}</span>
                    <span class="role-pill-badge">${mission ? mission.title : 'Mission'}</span>
                </div>
                <h4>${k.title}</h4>
                <div class="t-review-quote">“${k.content}”</div>
                <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">
                    <div>ผู้ให้ข้อมูล: <strong>${k.contributor}</strong></div>
                    <div>Consent: <span class="consent-ok"><i data-lucide="check-circle-2"></i> ได้รับความยินยอม</span></div>
                </div>
                <div class="t-review-actions">
                    <button class="btn btn-primary btn-sm" onclick="handleTeacherApprove('${k.id}')">
                        <i data-lucide="check"></i> อนุมัติ (Approve)
                    </button>
                    <button class="btn btn-error btn-sm" onclick="handleTeacherReject('${k.id}')">
                        <i data-lucide="x"></i> ปฏิเสธ
                    </button>
                </div>
            </div>
        `;
    }).join('');

    initIcons();
}

function renderTeacherStudentsPage() {
    const container = document.getElementById('teacher-students-container');
    if (!container) return;

    const allUsers = StorageService.getUsers().filter(u => u.role === 'student');
    const allMissions = StorageService.getMissions();
    const allK = StorageService.getKnowledge();

    container.innerHTML = allUsers.map(s => {
        const sMissions = allMissions.filter(m => m.userId === s.id);
        const sKnowledge = allK.filter(k => k.userId === s.id);
        return `
            <div class="mission-card">
                <div class="mission-card-top-row">
                    <span class="user-avatar-sm">${s.avatar || s.name.charAt(0)}</span>
                    <span class="role-pill-badge">${s.community || 'ชุมชน'}</span>
                </div>
                <h3>${s.name} ${s.lastName || ''}</h3>
                <p>${s.bio || 'นักเรียนผู้สร้าง AI ชุมชน'}</p>
                <div class="mission-card-meta">
                    <span><i data-lucide="target"></i> ${sMissions.length} ภารกิจ</span>
                    <span><i data-lucide="database"></i> ${sKnowledge.length} องค์ความรู้</span>
                </div>
            </div>
        `;
    }).join('');

    initIcons();
}

function renderAdminHubPage() {
    const allUsers = StorageService.getUsers();
    const allMissions = StorageService.getMissions();
    const allKnowledge = StorageService.getKnowledge();
    const deployedAI = allMissions.filter(m => m.builtAi).length;

    const uEl = document.getElementById('admin-total-users');
    const mEl = document.getElementById('admin-total-missions');
    const kEl = document.getElementById('admin-total-sources');
    const aiEl = document.getElementById('admin-total-ai');

    if (uEl) uEl.textContent = allUsers.length;
    if (mEl) mEl.textContent = allMissions.length;
    if (kEl) kEl.textContent = allKnowledge.filter(k => k.status === 'verified').length;
    if (aiEl) aiEl.textContent = deployedAI;

    const tbody = document.getElementById('admin-labs-tbody');
    if (tbody) {
        tbody.innerHTML = allMissions.map(m => {
            const owner = allUsers.find(u => u.id === m.userId);
            return `
                <tr>
                    <td><strong>${m.community || 'ชุมชนท้องถิ่น'}</strong></td>
                    <td><i data-lucide="${m.icon || 'target'}"></i> ${m.title}</td>
                    <td>${owner ? owner.name : 'Student'}</td>
                    <td><span class="role-pill-badge">${m.builtAi ? 'Deployed' : 'In Progress'}</span></td>
                </tr>
            `;
        }).join('');
    }

    initIcons();
}

// ===== DEMO PRESENTATION MODE =====
function toggleDemoMode() {
    if (demoRunning) stopDemo();
    else startDemo();
}

function startDemo() {
    demoRunning = true;
    demoTimeouts = [];

    quickDemoLogin('student');

    const demoBtn = document.getElementById('demo-btn');
    const demoBtnText = document.getElementById('demo-btn-text');
    if (demoBtn) demoBtn.classList.add('running');
    if (demoBtnText) demoBtnText.textContent = i18n[currentLang].stopDemoBtn;

    const demoBar = document.getElementById('demo-bar');
    if (demoBar) demoBar.classList.remove('hidden');

    showToast(currentLang === 'th' ? 'เริ่มต้นโหมดสาธิตระบบ AI FROM HERE' : 'Demo Presentation Started', 'info');

    const totalSteps = 6;
    function setStep(num, labelTh, labelEn) {
        const label = currentLang === 'th' ? labelTh : labelEn;
        const progressEl = document.getElementById('demo-progress-fill');
        const labelEl = document.getElementById('demo-label');
        if (progressEl) progressEl.style.width = `${(num / totalSteps) * 100}%`;
        if (labelEl) labelEl.textContent = `Step ${num}/${totalSteps}: ${label}`;
    }

    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(1, 'กำหนดโจทย์และภารกิจชุมชน', 'Define Community Mission');
        navigateTo('missions');
    }, 800));

    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(2, 'เก็บรวบรวมไฟล์ & บันทึก Consent', 'Collect Community Knowledge');
        navigateTo('knowledge');
    }, 4500));

    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(3, 'ตรวจสอบความถูกต้อง (Verification)', 'Verify Ground Truth');
        navigateTo('verify');
    }, 8500));

    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(4, 'สร้าง Local AI Assistant', 'Build Local AI Pipeline');
        navigateTo('build');
    }, 12500));

    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(5, 'ทดสอบถามตอบกับ Local AI', 'Test AI Chat Grounding');
        navigateTo('test');
    }, 17500));

    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        const input = document.getElementById('chat-input');
        if (input) {
            input.value = 'ช่วงฤดูฝนควรดูแลต้นกาแฟอย่างไร?';
            sendChatMessage();
        }
    }, 19500));

    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(6, 'ผลกระทบจริงต่อชุมชน (Impact)', 'Real-world Community Impact');
        navigateTo('impact');
    }, 25500));

    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        showToast(currentLang === 'th' ? 'จบการสาธิตระบบสำเร็จ ขอบคุณครับ' : 'Demo Completed!', 'success');
        stopDemo();
    }, 31000));
}

function stopDemo() {
    demoRunning = false;
    demoTimeouts.forEach(t => clearTimeout(t));
    demoTimeouts = [];

    const demoBtn = document.getElementById('demo-btn');
    const demoBtnText = document.getElementById('demo-btn-text');
    if (demoBtn) demoBtn.classList.remove('running');
    if (demoBtnText) demoBtnText.textContent = i18n[currentLang].demoBtn;

    const demoBar = document.getElementById('demo-bar');
    if (demoBar) demoBar.classList.add('hidden');

    initIcons();
}

// ===== MOBILE SIDEBAR & SEARCH =====
function toggleMobileSidebar() {
    document.getElementById('sidebar')?.classList.toggle('open');
}

function closeMobileSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
}

function handleGlobalSearch(query) {
    if (!query) {
        renderCurrentPage();
        return;
    }
    const q = query.toLowerCase();
    if (currentPage === 'missions') {
        const cards = document.querySelectorAll('.mission-card');
        cards.forEach(c => {
            c.style.display = c.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
        });
    } else if (currentPage === 'knowledge') {
        const items = document.querySelectorAll('.knowledge-item');
        items.forEach(it => {
            it.style.display = it.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
        });
    }
}

// ===== LANGUAGE SWITCHER =====
function initLanguage() {
    const saved = localStorage.getItem('afh_lang');
    if (saved === 'th' || saved === 'en') currentLang = saved;
    applyLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('afh_lang', lang);
    applyLanguage(lang);
    showToast(lang === 'th' ? 'เปลี่ยนภาษาเป็น: ภาษาไทย' : 'Language set to: English', 'info');
}

// Removed duplicate processAudioRecording - kept the one with 'pending' status for proper verification flow

function processPhotoCapture() {
    if (!activeMissionId) {
        showToast('กรุณาเลือกหรือสร้างภารกิจก่อน', 'warning');
        return;
    }

    const desc = document.getElementById('photo-description-input')?.value.trim() || 'ภาพถ่ายสถานที่/วัตถุในชุมชน';
    const form = document.getElementById('photo-desc-form');
    const proc = document.getElementById('photo-processing-ui');

    if (form) form.classList.add('hidden');
    if (proc) proc.classList.remove('hidden');

    setTimeout(() => {
        const newKnowledge = {
            id: 'k_img_' + Date.now(),
            userId: currentUser.id,
            missionId: activeMissionId,
            title: `ภาพถ่ายชุมชน (${new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })})`,
            contributor: currentUser.name + ' (ภาพถ่าย)',
            sourceType: 'image',
            content: `ภาพถ่ายพร้อมคำอธิบาย: "${desc}" — AI วิเคราะห์และสกัดคุณลักษณะสำคัญเพื่อบันทึกเข้า Knowledge Base`,
            topic: 'ภาพถ่ายภูมิปัญญา',
            consent: true,
            status: 'pending',
            createdAt: new Date().toISOString().split('T')[0]
        };

        StorageService.addKnowledge(newKnowledge);
        updateActiveMissionProgressOnAdd();
        closePhotoCapture();
        showToast('บันทึกภาพถ่ายและวิเคราะห์ข้อมูลเรียบร้อยแล้ว!', 'success');

        renderCurrentPage();
        navigateTo('knowledge');
    }, 1500);
}

function handleCameraPhotoFallback(files) {
    if (!files || files.length === 0) return;
    const file = files[0];
    const desc = prompt('ภาพถ่ายนี้เกี่ยวกับอะไร? (ระบุคำอธิบายสั้น ๆ):', file.name) || 'ภาพถ่ายจากกล้อง';

    const newKnowledge = {
        id: 'k_img_' + Date.now(),
        userId: currentUser.id,
        missionId: activeMissionId,
        title: `ภาพถ่าย: ${file.name}`,
        contributor: currentUser.name,
        sourceType: 'image',
        content: `ภาพถ่าย: ${file.name} — คำอธิบาย: "${desc}"`,
        topic: 'ภาพถ่ายชุมชน',
        consent: true,
        status: 'pending',
        createdAt: new Date().toISOString().split('T')[0]
    };

    StorageService.addKnowledge(newKnowledge);
    showToast('เพิ่มภาพถ่ายเรียบร้อยแล้ว ส่งเข้าคิวรอตรวจสอบ', 'success');
    renderCurrentPage();
    navigateTo('knowledge');
}

function applyLanguage(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    document.getElementById('lang-th')?.classList.toggle('active', lang === 'th');
    document.getElementById('lang-en')?.classList.toggle('active', lang === 'en');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });

    const search = document.getElementById('search-input');
    if (search) search.placeholder = dict.searchPlaceholder;

    renderRoleNavigation();
    renderCurrentPage();
    initIcons();
}

// ===== TOAST NOTIFICATION SYSTEM =====
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const iconMap = {
        success: 'check-circle-2',
        info: 'info',
        warning: 'alert-triangle',
        error: 'alert-circle'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i data-lucide="${iconMap[type] || 'info'}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    initIcons();

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 250);
    }, 3200);
}

// ===== KEYBOARD SHORTCUTS =====
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCreateMissionModal();
            closeAddKnowledgeModal();
            closeKnowledgeDetailModal();
            closeEditProfileModal();
            closeDeleteConfirmModal();
            closeSourceModal();
            closeExternalResearchModal();
            closeMobileSidebar();

            const dropdown = document.getElementById('notif-dropdown');
            if (dropdown) dropdown.classList.add('hidden');

            closeOnboardingModal();
            closeAddKnowledgePicker();
            closeAudioRecorder();
            closePhotoCapture();
            closeVideoCapture();
            closeMobileNotificationSheet();
        }
    });
}

// ===== MOBILE HOME & LEARNING ROADMAP RENDERER =====
function renderMobileHomeView() {
    if (!currentUser) return;
    const nameEl = document.getElementById('mobile-greeting-name');
    if (nameEl) nameEl.textContent = `สวัสดี, ${currentUser.name}`;

    renderMobileLearningCard();
    renderMobileStatsAndActivity();
}

function renderMobileLearningCard() {
    const container = document.getElementById('mobile-learning-card-container');
    if (!container) return;

    const activeMission = StorageService.getMissionById(activeMissionId);
    const kList = activeMission ? StorageService.getKnowledgeForMission(activeMission.id) : [];
    const verifiedK = kList.filter(k => k.status === 'verified');
    const pendingK = kList.filter(k => k.status === 'pending');

    let step1 = kList.length > 0 ? 'done' : 'doing';
    let step2 = kList.length > 0 ? (pendingK.length > 0 ? 'doing' : 'done') : 'waiting';
    let step3 = pendingK.length > 0 ? 'doing' : (verifiedK.length > 0 ? 'done' : 'waiting');
    let step4 = verifiedK.length > 0 ? (activeMission?.builtAi ? 'done' : 'doing') : 'waiting';
    let step5 = activeMission?.builtAi ? 'done' : 'waiting';

    let progressPct = activeMission ? (activeMission.builtAi ? 100 : Math.min(95, Math.round((verifiedK.length / Math.max(1, kList.length)) * 70 + 20))) : 0;
    const topicTitle = activeMission ? activeMission.title : 'ภูมิปัญญาในชุมชน';

    container.innerHTML = `
        <div class="learning-roadmap-card">
            <div class="roadmap-header">
                <h4>AI กำลังเรียนรู้</h4>
                <span class="roadmap-badge">${progressPct}% Progress</span>
            </div>
            <div class="roadmap-topic-title">เรื่อง: ${topicTitle}</div>
            <div class="roadmap-step-list">
                <div class="roadmap-step-item ${step1 === 'done' ? 'completed' : (step1 === 'doing' ? 'active' : '')}">
                    <span>01 เก็บความรู้</span>
                    <span class="roadmap-step-status-tag ${step1}">${step1 === 'done' ? 'เสร็จแล้ว' : (step1 === 'doing' ? 'กำลังทำ' : 'รอ')}</span>
                </div>
                <div class="roadmap-step-item ${step2 === 'done' ? 'completed' : (step2 === 'doing' ? 'active' : '')}">
                    <span>02 ทำความเข้าใจข้อมูล</span>
                    <span class="roadmap-step-status-tag ${step2}">${step2 === 'done' ? 'เสร็จแล้ว' : (step2 === 'doing' ? 'กำลังทำ' : 'รอ')}</span>
                </div>
                <div class="roadmap-step-item ${step3 === 'done' ? 'completed' : (step3 === 'doing' ? 'active' : '')}">
                    <span>03 ตรวจสอบข้อมูล</span>
                    <span class="roadmap-step-status-tag ${step3}">${step3 === 'done' ? 'เสร็จแล้ว' : (step3 === 'doing' ? 'กำลังทำ' : 'รอ')}</span>
                </div>
                <div class="roadmap-step-item ${step4 === 'done' ? 'completed' : (step4 === 'doing' ? 'active' : '')}">
                    <span>04 สร้าง Local AI</span>
                    <span class="roadmap-step-status-tag ${step4}">${step4 === 'done' ? 'เสร็จแล้ว' : (step4 === 'doing' ? 'กำลังทำ' : 'รอ')}</span>
                </div>
                <div class="roadmap-step-item ${step5 === 'done' ? 'completed' : (step5 === 'doing' ? 'active' : '')}">
                    <span>05 พร้อมใช้งาน</span>
                    <span class="roadmap-step-status-tag ${step5}">${step5 === 'done' ? 'เสร็จแล้ว' : (step5 === 'doing' ? 'กำลังทำ' : 'รอ')}</span>
                </div>
            </div>

            <div class="roadmap-checklist">
                <div class="check-item ${kList.length > 0 ? 'done' : 'active'}">
                    <i data-lucide="${kList.length > 0 ? 'check-circle-2' : 'loader-2'}"></i>
                    <span>อ่านข้อมูลที่คุณส่งมา (${kList.length} แหล่ง)</span>
                </div>
                <div class="check-item ${kList.length > 0 ? 'done' : ''}">
                    <i data-lucide="${kList.length > 0 ? 'check-circle-2' : 'circle'}"></i>
                    <span>วิเคราะห์เนื้อหาและสรุปหัวข้อ</span>
                </div>
                <div class="check-item ${pendingK.length > 0 ? 'active' : (verifiedK.length > 0 ? 'done' : '')}">
                    <i data-lucide="${pendingK.length > 0 ? 'loader-2' : (verifiedK.length > 0 ? 'check-circle-2' : 'circle')}"></i>
                    <span>ตรวจสอบความถูกต้องของข้อมูล</span>
                </div>
                <div class="check-item ${verifiedK.length > 0 ? 'done' : ''}">
                    <i data-lucide="${verifiedK.length > 0 ? 'check-circle-2' : 'circle'}"></i>
                    <span>สร้างความเชื่อมโยง (Community RAG Grounding)</span>
                </div>
                <div class="check-item ${activeMission?.builtAi ? 'done' : ''}">
                    <i data-lucide="${activeMission?.builtAi ? 'check-circle-2' : 'circle'}"></i>
                    <span>พร้อมสร้าง Local AI ประจำชุมชน</span>
                </div>
            </div>
        </div>
    `;
    initIcons();
}

function renderMobileStatsAndActivity() {
    const statsContainer = document.getElementById('mobile-knowledge-stats');
    const activityContainer = document.getElementById('mobile-recent-activity');
    if (!currentUser) return;

    const userK = StorageService.getUserKnowledge(currentUser.id);
    const verifiedCount = userK.filter(k => k.status === 'verified').length;
    const pendingCount = userK.filter(k => k.status === 'pending').length;

    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-card" onclick="navigateTo('knowledge')">
                <div class="stat-value">${userK.length}</div>
                <div class="stat-label">ทั้งหมด</div>
            </div>
            <div class="stat-card" onclick="navigateTo('verify')">
                <div class="stat-value" style="color: var(--warning);">${pendingCount}</div>
                <div class="stat-label">รอยืนยัน</div>
            </div>
            <div class="stat-card" onclick="navigateTo('knowledge')">
                <div class="stat-value" style="color: var(--primary-dark);">${verifiedCount}</div>
                <div class="stat-label">พร้อมใช้</div>
            </div>
        `;
    }

    if (activityContainer) {
        if (userK.length === 0) {
            activityContainer.innerHTML = `
                <div class="empty-state-card" style="padding: 16px;">
                    <p style="font-size: 12px; color: var(--text-muted);">ยังไม่มีกิจกรรมล่าสุด กดปุ่ม "+ เพิ่มความรู้" เพื่อเริ่มต้น</p>
                </div>
            `;
        } else {
            const recents = userK.slice(0, 3);
            activityContainer.innerHTML = recents.map(k => `
                <div class="knowledge-item" onclick="openKnowledgeDetail('${k.id}')">
                    <div class="knowledge-type-icon ${k.sourceType}">
                        <i data-lucide="${k.sourceType === 'audio' ? 'mic' : (k.sourceType === 'image' ? 'camera' : (k.sourceType === 'video' ? 'video' : 'file-text'))}"></i>
                    </div>
                    <div class="knowledge-item-info">
                        <h4>${k.title}</h4>
                        <div class="knowledge-item-meta">
                            <span><i data-lucide="user"></i> ${k.contributor}</span>
                            <span><i data-lucide="calendar"></i> ${k.createdAt}</span>
                        </div>
                    </div>
                    <span class="knowledge-item-status ${k.status}">
                        ${k.status === 'verified' ? 'พร้อมใช้' : 'รอยืนยัน'}
                    </span>
                </div>
            `).join('');
        }
        initIcons();
    }
}

function toggleLearningDetails() {
    const list = document.querySelector('.roadmap-step-list');
    const checklist = document.querySelector('.roadmap-checklist');
    const toggleBtn = document.getElementById('mobile-learning-toggle');
    if (list && checklist) {
        const isHidden = list.style.display === 'none';
        list.style.display = isHidden ? 'flex' : 'none';
        checklist.style.display = isHidden ? 'flex' : 'none';
        if (toggleBtn) {
            toggleBtn.innerHTML = isHidden ? '<span>ซ่อนรายละเอียด</span> <i data-lucide="chevron-up"></i>' : '<span>ดูรายละเอียด</span> <i data-lucide="chevron-down"></i>';
            initIcons();
        }
    }
}

// ===== ONBOARDING & PICKER MODAL ENGINE =====
function checkAndShowOnboarding() {
    const onboarded = localStorage.getItem('afh_onboarded');
    if (!onboarded && currentUser) {
        openOnboardingModal();
    }
}

function openOnboardingModal() {
    const modal = document.getElementById('onboarding-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initIcons();
}

function closeOnboardingModal() {
    localStorage.setItem('afh_onboarded', 'true');
    const modal = document.getElementById('onboarding-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function openAddKnowledgePicker() {
    // Safety: Must have active mission to add knowledge
    if (!activeMissionId) {
        showToast(currentLang === 'th' ? '⚠️ ต้องสร้างหรือเลือกภารกิจก่อนเพิ่มความรู้' : 'Please create or select a mission first', 'warning');
        openCreateMissionModal();
        return;
    }
    
    const modal = document.getElementById('add-knowledge-picker-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initIcons();
}

function closeAddKnowledgePicker() {
    const modal = document.getElementById('add-knowledge-picker-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// ===== MEDIA CAPTURE CONTROLLERS (AUDIO, CAMERA, VIDEO) =====
function openAudioRecorder() {
    const modal = document.getElementById('audio-recorder-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    audioSeconds = 0;
    audioPaused = false;
    audioChunks = [];
    audioBlob = null;
    const timerEl = document.getElementById('audio-recorder-timer');
    if (timerEl) timerEl.textContent = '00:00';

    const controls = document.getElementById('audio-record-controls');
    const preview = document.getElementById('audio-preview-controls');
    const proc = document.getElementById('audio-processing-ui');

    if (controls) controls.classList.remove('hidden');
    if (preview) preview.classList.add('hidden');
    if (proc) proc.classList.add('hidden');

    initIcons();

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                audioStream = stream;
            })
            .catch(err => {
                console.warn('Microphone permission denied or unsupported:', err);
                showToast('ไม่สามารถเข้าถึงไมโครโฟนได้ กรุณาอนุญาตให้ใช้งานไมโครโฟนในเบราว์เซอร์', 'warning');
            });
    } else {
        showToast('อุปกรณ์ของคุณไม่รองรับการบันทึกเสียงสดผ่านเบราว์เซอร์', 'warning');
    }
}

function closeAudioRecorder() {
    stopAudioRecordingStream();
    const modal = document.getElementById('audio-recorder-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function stopAudioRecordingStream() {
    if (audioTimerInterval) clearInterval(audioTimerInterval);
    if (audioRecorder && audioRecorder.state !== 'inactive') {
        audioRecorder.stop();
    }
    if (audioStream) {
        audioStream.getTracks().forEach(t => t.stop());
        audioStream = null;
    }
}

function startAudioRecording() {
    if (!audioStream) {
        showToast('ไม่พบสัญญาณไมโครโฟน กรุณาอนุญาตสิทธิ์ในเบราว์เซอร์แล้วลองอีกครั้ง', 'error');
        return;
    }

    audioChunks = [];
    try {
        audioRecorder = new MediaRecorder(audioStream);
        audioRecorder.ondataavailable = e => {
            if (e.data.size > 0) audioChunks.push(e.data);
        };
        audioRecorder.onstop = () => {
            audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const player = document.getElementById('audio-preview-player');
            if (player) {
                player.src = audioUrl;
                player.parentElement.classList.remove('hidden');
            }
        };

        audioRecorder.start();
        audioSeconds = 0;
        audioTimerInterval = setInterval(() => {
            audioSeconds++;
            const mins = String(Math.floor(audioSeconds / 60)).padStart(2, '0');
            const secs = String(audioSeconds % 60).padStart(2, '0');
            const timerEl = document.getElementById('audio-recorder-timer');
            if (timerEl) timerEl.textContent = `${mins}:${secs}`;
        }, 1000);

        const recBtn = document.getElementById('audio-btn-record');
        if (recBtn) {
            recBtn.onclick = stopAudioRecording;
            recBtn.innerHTML = '<i data-lucide="square"></i>';
            recBtn.classList.add('recording');
        }
        initIcons();
        showToast('กำลังบันทึกเสียง...', 'info');
    } catch (e) {
        console.error(e);
        showToast('เกิดข้อผิดพลาดในการเริ่มบันทึกเสียง', 'error');
    }
}

function stopAudioRecording() {
    if (audioTimerInterval) clearInterval(audioTimerInterval);
    if (audioRecorder && audioRecorder.state !== 'inactive') {
        audioRecorder.stop();
    }

    const controls = document.getElementById('audio-record-controls');
    const preview = document.getElementById('audio-preview-controls');
    if (controls) controls.classList.add('hidden');
    if (preview) preview.classList.remove('hidden');

    initIcons();
    showToast('หยุดบันทึกเสียงแล้ว สามารถฟังเสียงล่วงหน้าก่อนส่งให้ AI ได้', 'success');
}

function deleteAudioRecording() {
    audioBlob = null;
    audioChunks = [];
    openAudioRecorder();
}

function processAudioRecording() {
    if (!activeMissionId) {
        showToast('กรุณาเลือกหรือสร้างภารกิจก่อน', 'warning');
        return;
    }

    const previewControls = document.getElementById('audio-preview-controls');
    const procUI = document.getElementById('audio-processing-ui');

    if (previewControls) previewControls.classList.add('hidden');
    if (procUI) procUI.classList.remove('hidden');

    setTimeout(() => {
        const transcriptText = `สัมภาษณ์และบันทึกเสียงความยาว ${audioSeconds} วินาที เกี่ยวกับเรื่องราวและภูมิปัญญาท้องถิ่นของชุมชน`;
        const newKnowledge = {
            id: 'k_audio_' + Date.now(),
            userId: currentUser.id,
            missionId: activeMissionId,
            title: `ไฟล์เสียงสัมภาษณ์ (${new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })})`,
            contributor: currentUser.name + ' (เสียงสัมภาษณ์)',
            sourceType: 'audio',
            content: transcriptText,
            topic: 'เสียงสัมภาษณ์ชุมชน',
            consent: true,
            status: 'pending',
            createdAt: new Date().toISOString().split('T')[0]
        };

        StorageService.addKnowledge(newKnowledge);
        closeAudioRecorder();
        showToast('AI แปลงเสียงเป็นข้อมูลเรียบร้อยแล้ว! ส่งเข้าสู่คิวรอตรวจสอบ', 'success');

        renderCurrentPage();
        navigateTo('knowledge');
    }, 1800);
}

function openPhotoCapture() {
    const modal = document.getElementById('photo-capture-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const video = document.getElementById('photo-camera-preview');
    const controls = document.getElementById('photo-camera-controls');
    const prevControls = document.getElementById('photo-preview-controls');
    const form = document.getElementById('photo-desc-form');
    const imgPreview = document.getElementById('photo-preview-img');
    const proc = document.getElementById('photo-processing-ui');

    if (video) video.classList.remove('hidden');
    if (imgPreview) imgPreview.classList.add('hidden');
    if (controls) controls.classList.remove('hidden');
    if (prevControls) prevControls.classList.add('hidden');
    if (form) form.classList.add('hidden');
    if (proc) proc.classList.add('hidden');

    initIcons();

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(stream => {
                photoStream = stream;
                if (video) video.srcObject = stream;
            })
            .catch(err => {
                console.warn('Camera permission denied or unavailable:', err);
                const input = document.getElementById('camera-photo-input');
                if (input) input.click();
            });
    } else {
        const input = document.getElementById('camera-photo-input');
        if (input) input.click();
    }
}

function closePhotoCapture() {
    if (photoStream) {
        photoStream.getTracks().forEach(t => t.stop());
        photoStream = null;
    }
    const modal = document.getElementById('photo-capture-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function takePhoto() {
    const video = document.getElementById('photo-camera-preview');
    const canvas = document.getElementById('photo-canvas');
    const imgPreview = document.getElementById('photo-preview-img');
    const controls = document.getElementById('photo-camera-controls');
    const prevControls = document.getElementById('photo-preview-controls');
    const form = document.getElementById('photo-desc-form');

    if (video && canvas && imgPreview) {
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');

        imgPreview.src = dataUrl;
        imgPreview.classList.remove('hidden');
        video.classList.add('hidden');

        if (controls) controls.classList.add('hidden');
        if (prevControls) prevControls.classList.remove('hidden');
        if (form) form.classList.remove('hidden');

        initIcons();
    }
}

function retakePhoto() {
    openPhotoCapture();
}

function processPhotoCapture() {
    if (!activeMissionId) {
        showToast('กรุณาเลือกหรือสร้างภารกิจก่อน', 'warning');
        return;
    }

    const desc = document.getElementById('photo-description-input')?.value.trim() || 'ภาพถ่ายสถานที่/วัตถุในชุมชน';
    const form = document.getElementById('photo-desc-form');
    const proc = document.getElementById('photo-processing-ui');

    if (form) form.classList.add('hidden');
    if (proc) proc.classList.remove('hidden');

    setTimeout(() => {
        const newKnowledge = {
            id: 'k_img_' + Date.now(),
            userId: currentUser.id,
            missionId: activeMissionId,
            title: `ภาพถ่ายชุมชน (${new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })})`,
            contributor: currentUser.name + ' (ภาพถ่าย)',
            sourceType: 'image',
            content: `ภาพถ่ายพร้อมคำอธิบาย: "${desc}" — AI วิเคราะห์และสกัดคุณลักษณะสำคัญเพื่อบันทึกเข้า Knowledge Base`,
            topic: 'ภาพถ่ายภูมิปัญญา',
            consent: true,
            status: 'pending',
            createdAt: new Date().toISOString().split('T')[0]
        };

        StorageService.addKnowledge(newKnowledge);
        closePhotoCapture();
        showToast('บันทึกภาพถ่ายและคำอธิบายเรียบร้อยแล้ว!', 'success');

        renderCurrentPage();
        navigateTo('knowledge');
    }, 1500);
}

function handleCameraPhotoFallback(files) {
    if (!files || files.length === 0) return;
    const file = files[0];
    const desc = prompt('ภาพถ่ายนี้เกี่ยวกับอะไร? (ระบุคำอธิบายสั้น ๆ):', file.name) || 'ภาพถ่ายจากกล้อง';

    const newKnowledge = {
        id: 'k_img_' + Date.now(),
        userId: currentUser.id,
        missionId: activeMissionId,
        title: `ภาพถ่าย: ${file.name}`,
        contributor: currentUser.name,
        sourceType: 'image',
        content: `ภาพถ่าย: ${file.name} — คำอธิบาย: "${desc}"`,
        topic: 'ภาพถ่ายชุมชน',
        consent: true,
        status: 'pending',
        createdAt: new Date().toISOString().split('T')[0]
    };

    StorageService.addKnowledge(newKnowledge);
    showToast('เพิ่มภาพถ่ายเรียบร้อยแล้ว', 'success');
    renderCurrentPage();
    navigateTo('knowledge');
}

function openVideoCapture() {
    const modal = document.getElementById('video-capture-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const video = document.getElementById('video-camera-preview');
    const controls = document.getElementById('video-record-controls');
    const prevControls = document.getElementById('video-preview-controls');
    const proc = document.getElementById('video-processing-ui');

    if (video) video.classList.remove('hidden');
    if (controls) controls.classList.remove('hidden');
    if (prevControls) prevControls.classList.add('hidden');
    if (proc) proc.classList.add('hidden');

    initIcons();

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: true })
            .then(stream => {
                videoStream = stream;
                if (video) video.srcObject = stream;
            })
            .catch(err => {
                console.warn('Video camera permission denied or unavailable:', err);
                const input = document.getElementById('camera-video-input');
                if (input) input.click();
            });
    } else {
        const input = document.getElementById('camera-video-input');
        if (input) input.click();
    }
}

function closeVideoCapture() {
    if (videoTimerInterval) clearInterval(videoTimerInterval);
    if (videoStream) {
        videoStream.getTracks().forEach(t => t.stop());
        videoStream = null;
    }
    const modal = document.getElementById('video-capture-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function startVideoRecording() {
    if (!videoStream) {
        showToast('ไม่พบสัญญาณกล้องวิดีโอ กรุณาอนุญาตสิทธิ์ในเบราว์เซอร์', 'error');
        return;
    }

    videoChunks = [];
    try {
        videoRecorder = new MediaRecorder(videoStream);
        videoRecorder.ondataavailable = e => {
            if (e.data.size > 0) videoChunks.push(e.data);
        };
        videoRecorder.onstop = () => {
            videoBlob = new Blob(videoChunks, { type: 'video/webm' });
            const videoUrl = URL.createObjectURL(videoBlob);
            const player = document.getElementById('video-preview-player');
            const previewStream = document.getElementById('video-camera-preview');
            if (player) {
                player.src = videoUrl;
                player.classList.remove('hidden');
            }
            if (previewStream) previewStream.classList.add('hidden');
        };

        videoRecorder.start();
        videoSeconds = 0;
        videoTimerInterval = setInterval(() => {
            videoSeconds++;
            const mins = String(Math.floor(videoSeconds / 60)).padStart(2, '0');
            const secs = String(videoSeconds % 60).padStart(2, '0');
            const timerEl = document.getElementById('video-recorder-timer');
            if (timerEl) timerEl.textContent = `${mins}:${secs}`;
        }, 1000);

        const btn = document.getElementById('video-btn-record');
        if (btn) {
            btn.onclick = stopVideoRecording;
            btn.innerHTML = '<i data-lucide="square"></i>';
            btn.classList.add('recording');
        }
        initIcons();
        showToast('กำลังบันทึกวิดีโอ...', 'info');
    } catch (e) {
        console.error(e);
        showToast('เกิดข้อผิดพลาดในการเริ่มบันทึกวิดีโอ', 'error');
    }
}

function stopVideoRecording() {
    if (videoTimerInterval) clearInterval(videoTimerInterval);
    if (videoRecorder && videoRecorder.state !== 'inactive') {
        videoRecorder.stop();
    }

    const controls = document.getElementById('video-record-controls');
    const preview = document.getElementById('video-preview-controls');
    if (controls) controls.classList.add('hidden');
    if (preview) preview.classList.remove('hidden');

    initIcons();
    showToast('บันทึกวิดีโอเสร็จสิ้น', 'success');
}

function deleteVideoRecording() {
    openVideoCapture();
}

function processVideoRecording() {
    if (!activeMissionId) {
        showToast('กรุณาเลือกหรือสร้างภารกิจก่อน', 'warning');
        return;
    }

    const prevControls = document.getElementById('video-preview-controls');
    const procUI = document.getElementById('video-processing-ui');

    if (prevControls) prevControls.classList.add('hidden');
    if (procUI) procUI.classList.remove('hidden');

    setTimeout(() => {
        const newKnowledge = {
            id: 'k_video_' + Date.now(),
            userId: currentUser.id,
            missionId: activeMissionId,
            title: `วิดีโอบันทึกชุมชน (${videoSeconds}s)`,
            contributor: currentUser.name + ' (วิดีโอ)',
            sourceType: 'video',
            content: `วิดีโอบันทึกบรรยากาศและการสาธิตภูมิปัญญาความยาว ${videoSeconds} วินาที — AI ถอดคำพูดและภาพเพื่อสร้างสรุปองค์ความรู้`,
            topic: 'วิดีโอภูมิปัญญา',
            consent: true,
            status: 'pending',
            createdAt: new Date().toISOString().split('T')[0]
        };

        StorageService.addKnowledge(newKnowledge);
        closeVideoCapture();
        showToast('วิเคราะห์วิดีโอและสกัดองค์ความรู้เรียบร้อยแล้ว!', 'success');

        renderCurrentPage();
        navigateTo('knowledge');
    }, 2000);
}

function handleCameraVideoFallback(files) {
    if (!files || files.length === 0) return;
    const file = files[0];

    const newKnowledge = {
        id: 'k_video_' + Date.now(),
        userId: currentUser.id,
        missionId: activeMissionId,
        title: `วิดีโอ: ${file.name}`,
        contributor: currentUser.name,
        sourceType: 'video',
        content: `คลิปวิดีโอบันทึกชุมชน: ${file.name}`,
        topic: 'วิดีโอชุมชน',
        consent: true,
        status: 'pending',
        createdAt: new Date().toISOString().split('T')[0]
    };

    StorageService.addKnowledge(newKnowledge);
    showToast('อัปโหลดวิดีโอเรียบร้อยแล้ว', 'success');
    renderCurrentPage();
    navigateTo('knowledge');
}

// ===== OFFLINE DETECTION & MOBILE SHEET =====
function initOfflineDetection() {
    const banner = document.getElementById('offline-banner');
    function updateOnlineStatus() {
        if (!navigator.onLine) {
            document.body.classList.add('offline-mode');
            if (banner) banner.classList.remove('hidden');
            showToast('คุณอยู่ในโหมดออฟไลน์ ข้อมูลจะถูกเก็บไว้ในเครื่องและซิงค์เมื่อเชื่อมต่อเน็ต', 'warning');
        } else {
            document.body.classList.remove('offline-mode');
            if (banner) banner.classList.add('hidden');
        }
    }
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    if (!navigator.onLine) updateOnlineStatus();
}

function toggleMobileNotificationSheet() {
    const sheet = document.getElementById('notif-bottom-sheet');
    if (sheet) {
        const isHidden = sheet.classList.contains('hidden');
        if (isHidden) {
            sheet.classList.remove('hidden');
            renderMobileNotifications();
        } else {
            sheet.classList.add('hidden');
        }
    }
}

function closeMobileNotificationSheet() {
    document.getElementById('notif-bottom-sheet')?.classList.add('hidden');
}

function renderMobileNotifications() {
    const list = document.getElementById('mobile-notif-list');
    if (!list || !currentUser) return;

    const notifs = NotificationManager.getUserNotifications(currentUser.id);
    if (notifs.length === 0) {
        list.innerHTML = `<p style="padding: 16px; font-size: 13px; color: var(--text-muted); text-align: center;">ไม่มีการแจ้งเตือนในขณะนี้</p>`;
    } else {
        list.innerHTML = notifs.map(n => `
            <div class="notif-item ${n.read ? '' : 'unread'}" onclick="handleNotificationClick('${n.id}'); closeMobileNotificationSheet();">
                <div class="notif-item-title">${n.title}</div>
                <div class="notif-item-msg">${n.message}</div>
                <div class="notif-item-time">${n.timestamp}</div>
            </div>
        `).join('');
    }
    initIcons();
}

