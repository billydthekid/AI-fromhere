/* ============================================
   AI FROM HERE — Application Logic
   Thai-First Project-Based AI Learning Platform
   JUMP Thailand 2026
   ============================================ */

// ===== I18N TRANSLATION DICTIONARY =====
const i18n = {
    th: {
        // App identity
        appName: 'AI FROM HERE',
        appSub: 'JUMP Thailand 2026',
        authTagline: 'เรียนรู้จากสิ่งที่ชุมชนของคุณรู้ และสร้าง AI จากมัน',
        
        // Navigation
        navDashboard: 'ภาพรวม',
        navMissions: 'ภารกิจ',
        navKnowledge: 'องค์ความรู้',
        navVerify: 'ตรวจสอบข้อมูล',
        navBuild: 'สร้าง Local AI',
        navTest: 'ทดสอบ AI',
        navImpact: 'ผลกระทบ',
        navProfile: 'โปรไฟล์',

        // Auth
        loginTitle: 'เข้าสู่ระบบ',
        registerTitle: 'สร้างบัญชี',
        emailLabel: 'อีเมล',
        passwordLabel: 'รหัสผ่าน',
        confirmPasswordLabel: 'ยืนยันรหัสผ่าน',
        firstNameLabel: 'ชื่อ',
        lastNameLabel: 'นามสกุล',
        roleLabel: 'เลือกบทบาท',
        roleStudent: 'นักเรียน (AI Creator)',
        roleTeacher: 'ครู / ผู้ดูแล',
        roleExpert: 'ผู้เชี่ยวชาญในชุมชน',
        rememberMe: 'จดจำฉัน',
        forgotPassword: 'ลืมรหัสผ่าน?',
        loginBtn: 'เข้าสู่ระบบ',
        registerBtn: 'สร้างบัญชี',
        noAccount: 'ยังไม่มีบัญชี?',
        registerLink: 'สมัครสมาชิก',
        haveAccount: 'มีบัญชีอยู่แล้ว?',
        loginLink: 'เข้าสู่ระบบ',
        termsLabel: 'ฉันยอมรับข้อกำหนดการใช้งานและนโยบายข้อมูล',
        quickDemoLogin: 'เข้าสู่ระบบแบบ Demo ทันที',

        // Validation Errors
        errEmailRequired: 'กรุณากรอกอีเมล',
        errEmailInvalid: 'กรุณากรอกอีเมลให้ถูกต้อง',
        errPasswordRequired: 'กรุณากรอกรหัสผ่าน',
        errPasswordShort: 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร',
        errPasswordMismatch: 'รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง',
        errFirstNameRequired: 'กรุณากรอกชื่อ',
        errLastNameRequired: 'กรุณากรอกนามสกุล',
        errTermsRequired: 'กรุณายอมรับข้อกำหนดการใช้งาน',
        errFillAllFields: 'กรุณากรอกข้อมูลให้ครบทุกช่อง',

        // Topbar
        demoBtn: 'Start Demo',
        stopDemoBtn: 'หยุด Demo',
        searchPlaceholder: 'ค้นหาภารกิจ, องค์ความรู้...',

        // Dashboard
        heroTitle: 'สร้าง AI จากสิ่งที่ชุมชนของคุณรู้',
        heroSubtitle: 'ไม่ใช่แค่เรียน AI แต่ลงมือสร้าง AI จากปัญหาและองค์ความรู้ในพื้นที่จริง',
        startMissionBtn: 'เริ่มภารกิจ',
        viewMyProjectsBtn: 'ดูโปรเจกต์ของฉัน',
        statMissions: 'ภารกิจ',
        statKnowledge: 'องค์ความรู้',
        statAI: 'AI ที่สร้าง',
        statSkills: 'ทักษะที่ปลดล็อก',
        currentMissionTitle: 'ภารกิจปัจจุบัน',
        viewAllMissions: 'ดูทั้งหมด',
        coffeeMissionDesc: 'สร้าง AI Assistant จากองค์ความรู้ของเกษตรกรผู้ปลูกกาแฟในชุมชน',
        progressLabel: 'ความคืบหน้า',
        stepCollect: 'เก็บข้อมูล',
        stepVerify: 'ตรวจสอบ',
        stepStructure: 'จัดโครงสร้าง',
        stepBuild: 'สร้าง Local AI',
        stepTest: 'ทดสอบ AI',
        stepDeploy: 'Deploy',
        continueMissionBtn: 'ทำภารกิจต่อ',

        // Missions
        missionsHeader: 'ภารกิจของฉัน',
        missionsSubheader: 'เลือกภารกิจจริงในชุมชนเพื่อสร้าง AI Assistant ที่ตอบโจทย์การใช้งานจริง',
        statusInProgress: 'กำลังดำเนินการ',
        statusAvailable: 'พร้อมเริ่ม',
        btnContinue: 'ทำต่อ',
        btnStartMission: 'เริ่มภารกิจ',
        missionCoffeeCardDesc: 'สร้าง AI Assistant จากองค์ความรู้ของเกษตรกรผู้ปลูกกาแฟในพื้นที่ดอยช้าง',
        missionTourismCardDesc: 'รวบรวมเรื่องเล่าและสถานที่ท่องเที่ยวลับจากคนในชุมชนเพื่อสร้างไกด์ AI ท้องถิ่น',
        missionFarmingCardDesc: 'สร้าง AI ช่วยตอบคำถามด้านการเกษตรและโรคพืชจากปราชญ์ชาวบ้าน',

        // Knowledge
        knowledgeHeader: 'องค์ความรู้ของชุมชน',
        knowledgeSubheader: 'อะไรในชุมชนของคุณที่ AI ยังไม่รู้?',
        dropFilesTitle: 'ลากไฟล์มาวางที่นี่',
        supportFormats: 'รองรับไฟล์ Audio, Image, Text, PDF พร้อมระบบบันทึก Consent',
        addKnowledgeBtn: '+ เพิ่มข้อมูล',
        sourcesTitle: 'แหล่งข้อมูลในระบบ',

        // Verify
        verifyHeader: 'ตรวจสอบองค์ความรู้',
        verifySubheader: 'ตรวจสอบความถูกต้อง แหล่งที่มา และความยินยอม (Consent) ก่อนนำเข้าสู่ AI Model',
        extractedLabel: 'ข้อมูลที่ระบบถอดออกมา (Extracted Knowledge)',
        btnApprove: '✓ ยืนยันข้อมูล',
        btnFlag: '⚠ ส่งให้ตรวจสอบเพิ่มเติม',
        verifiedSuccessTitle: '✓ ข้อมูลได้รับการยืนยัน',
        verifiedSuccessDesc: 'ข้อมูลถูกจัดเก็บเข้าสู่ Verified Knowledge Base พร้อมนำไป Build AI',
        goBuildBtn: 'ไปสร้าง AI →',
        metaSource: 'ข้อมูลต้นทาง',
        metaDate: 'วันที่เก็บข้อมูล',
        metaConsent: 'Consent (ความยินยอม)',
        metaConfidence: 'Confidence Score',
        metaType: 'ประเภทไฟล์',
        metaTopic: 'หัวข้อหลัก',

        // Build
        buildHeader: 'สร้าง Local AI',
        buildSubheader: 'เปลี่ยนองค์ความรู้ที่ผ่านการตรวจสอบให้กลายเป็น AI ที่ใช้งานได้จริง',
        verifiedSourcesListTitle: 'แหล่งข้อมูลที่ผ่านการตรวจสอบ',
        configTitle: 'การกำหนดค่า AI',
        configAiName: 'AI Name',
        configKnowledgeBase: 'Knowledge Base',
        configAiType: 'AI Type',
        btnBuildLocalAI: '⚡ สร้าง Local AI',
        bStep1: 'กำลังประมวลผลข้อมูล...',
        bStep2: 'กำลังสร้าง Knowledge Base...',
        bStep3: 'กำลังเชื่อมต่อ RAG...',
        bStep4: 'กำลังตรวจสอบแหล่งข้อมูล...',
        bStep5: 'กำลังทดสอบ AI...',
        buildSuccessTitle: 'สร้าง AI สำเร็จ',
        btnOpenAI: 'เปิด AI',

        // Chat
        chatStatusOnline: '🟢 พร้อมใช้งาน',
        chatWelcomeText: 'สวัสดีครับ! ผมเป็น AI Assistant ที่สร้างจากองค์ความรู้จริงของเกษตรกรผู้ปลูกกาแฟในชุมชนดอยช้าง ถามคำถามเกี่ยวกับการปลูกและดูแลรักษาได้เลยครับ',
        trustLayerTitle: 'AI Trust Layer',
        trustExplanation: 'AI นี้ตอบคำถามจากองค์ความรู้ที่ผ่านการตรวจสอบแล้ว ทุกคำตอบสามารถสืบย้อนถึงแหล่งที่มาในชุมชนได้',

        // Impact
        impactHeader: 'จากการเรียนรู้ สู่ผลกระทบจริง',
        impactSubheader: 'เปลี่ยนบทบาทจากผู้ใช้ AI สู่ผู้สร้างสรรค์นวัตกรรม AI เพื่อพัฒนาชุมชน',
        flowStep1: 'เข้าถึงเทคโนโลยีและการเชื่อมต่อ',
        flowStep2: 'สร้างทักษะ AI และการคิดวิเคราะห์',
        flowStep3: 'สร้าง Local AI จากภูมิปัญญาท้องถิ่น',
        flowStep4: 'เกิดประโยชน์จริงกับชุมชนและสังคม',
        impactStudentTitle: '👨‍🎓 นักเรียน',
        impactStudent1: 'Skills: ทักษะ AI, Data & Critical Thinking',
        impactStudent2: 'Portfolio: ผลงาน AI จริงที่นำไปต่อยอดได้',
        impactStudent3: 'Digital Credential: ประกาศนียบัตรรับรองทักษะ',
        impactCommunityTitle: '🏘️ ชุมชน',
        impactComm1: 'Local Knowledge: อนุรักษ์ภูมิปัญญาท้องถิ่นไม่ให้สูญหาย',
        impactComm2: 'Verified Information: ข้อมูลผ่านการตรวจทานน่าเชื่อถือ',
        impactComm3: 'AI ที่เข้าใจบริบทพื้นที่: ใช้งานได้จริงในชีวิตประจำวัน',
        impactPartnerTitle: '🤝 Partner',
        impactPart1: 'Cloud & AI Infrastructure Scaling',
        impactPart2: 'Connectivity for Remote Areas',
        impactPart3: 'National Learning Platform Integration',
        impactPart4: 'CSR / ESG Outcome ที่วัดผลความยั่งยืนได้จริง',

        // Profile
        profileStatProjects: 'Projects',
        profileStatSources: 'Verified Sources',
        profileStatDeployed: 'Deployed AI',
        profileStatSkills: 'Skills',
        profileSkillsTitle: 'ทักษะที่ได้รับการพัฒนา',
        profilePortfolioTitle: 'Project Portfolio (ผลงาน AI)',

        // Modals
        modalGoalLabel: 'Mission Goal (เป้าหมายภารกิจ)',
        modalCommunityLabel: 'Community (ชุมชน)',
        modalSkillsLabel: 'Required Skills (ทักษะที่ใช้)',
        modalDataLabel: 'Data Needed (ข้อมูลที่ต้องใช้)',
        modalImpactLabel: 'Expected Impact (ผลลัพธ์ที่คาดหวัง)',
        modalStartMissionBtn: 'เริ่มภารกิจนี้'
    },
    en: {
        appName: 'AI FROM HERE',
        appSub: 'JUMP Thailand 2026',
        authTagline: 'Learn from what your community knows, and build AI from it.',
        navDashboard: 'Dashboard',
        navMissions: 'Missions',
        navKnowledge: 'Knowledge',
        navVerify: 'Verify Data',
        navBuild: 'Build Local AI',
        navTest: 'Test AI',
        navImpact: 'Impact',
        navProfile: 'Profile',
        loginTitle: 'Sign In',
        registerTitle: 'Create Account',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        confirmPasswordLabel: 'Confirm Password',
        firstNameLabel: 'First Name',
        lastNameLabel: 'Last Name',
        roleLabel: 'Select Role',
        roleStudent: 'Student (AI Creator)',
        roleTeacher: 'Teacher / Mentor',
        roleExpert: 'Community Expert',
        rememberMe: 'Remember Me',
        forgotPassword: 'Forgot Password?',
        loginBtn: 'Sign In',
        registerBtn: 'Create Account',
        noAccount: "Don't have an account?",
        registerLink: 'Sign Up',
        haveAccount: 'Already have an account?',
        loginLink: 'Sign In',
        termsLabel: 'I agree to the Terms of Service and Data Policy',
        quickDemoLogin: 'Quick Demo Sign In',
        errEmailRequired: 'Please enter your email',
        errEmailInvalid: 'Please enter a valid email address',
        errPasswordRequired: 'Please enter your password',
        errPasswordShort: 'Password must be at least 6 characters',
        errPasswordMismatch: 'Passwords do not match. Please check again.',
        errFirstNameRequired: 'Please enter your first name',
        errLastNameRequired: 'Please enter your last name',
        errTermsRequired: 'Please accept the terms of service',
        errFillAllFields: 'Please complete all required fields',
        demoBtn: 'Start Demo',
        stopDemoBtn: 'Stop Demo',
        searchPlaceholder: 'Search missions, knowledge...',
        heroTitle: 'Build AI from what your community knows',
        heroSubtitle: "Don't just learn AI — build real AI assistants from local problems and community wisdom.",
        startMissionBtn: 'Explore Missions',
        viewMyProjectsBtn: 'View My Projects',
        statMissions: 'Missions',
        statKnowledge: 'Knowledge Sources',
        statAI: 'AI Models Built',
        statSkills: 'Skills Unlocked',
        currentMissionTitle: 'Current Mission',
        viewAllMissions: 'View All',
        coffeeMissionDesc: 'Build an AI assistant from local coffee farming knowledge.',
        progressLabel: 'Progress',
        stepCollect: 'Collect',
        stepVerify: 'Verify',
        stepStructure: 'Structure',
        stepBuild: 'Build Local AI',
        stepTest: 'Test AI',
        stepDeploy: 'Deploy',
        continueMissionBtn: 'Continue Mission',
        missionsHeader: 'My Missions',
        missionsSubheader: 'Choose real community challenges to build impactful AI solutions.',
        statusInProgress: 'In Progress',
        statusAvailable: 'Available',
        btnContinue: 'Continue',
        btnStartMission: 'Start Mission',
        missionCoffeeCardDesc: 'Build an AI assistant from Doi Chang coffee farmer knowledge.',
        missionTourismCardDesc: 'Gather local tourism stories and hidden gems to build an AI guide.',
        missionFarmingCardDesc: 'Build a smart farming Q&A assistant from local agricultural experts.',
        knowledgeHeader: 'Community Knowledge Base',
        knowledgeSubheader: "What does your community know that AI doesn't?",
        dropFilesTitle: 'Drop files here',
        supportFormats: 'Supports Audio, Image, Text, PDF with built-in Consent verification',
        addKnowledgeBtn: '+ Add Knowledge',
        sourcesTitle: 'Knowledge Sources in System',
        verifyHeader: 'Verify Knowledge',
        verifySubheader: 'Review accuracy, source trace, and consent before injecting into AI model',
        extractedLabel: 'Extracted Knowledge',
        btnApprove: '✓ Approve Knowledge',
        btnFlag: '⚠ Flag for Review',
        verifiedSuccessTitle: '✓ Knowledge Verified',
        verifiedSuccessDesc: 'Source is stored in Verified Knowledge Base, ready for AI construction.',
        goBuildBtn: 'Build AI →',
        metaSource: 'Source',
        metaDate: 'Collected Date',
        metaConsent: 'Consent',
        metaConfidence: 'Confidence Score',
        metaType: 'File Type',
        metaTopic: 'Topic',
        buildHeader: 'Build Local AI',
        buildSubheader: 'Transform verified community knowledge into an intelligent assistant.',
        verifiedSourcesListTitle: 'Verified Knowledge Sources',
        configTitle: 'AI Configuration',
        configAiName: 'AI Name',
        configKnowledgeBase: 'Knowledge Base',
        configAiType: 'AI Type',
        btnBuildLocalAI: '⚡ BUILD LOCAL AI',
        bStep1: 'Processing Knowledge Data...',
        bStep2: 'Building Knowledge Base...',
        bStep3: 'Connecting RAG Pipeline...',
        bStep4: 'Verifying Citation Sources...',
        bStep5: 'Testing Local AI Model...',
        buildSuccessTitle: 'Your Local AI is Ready',
        btnOpenAI: 'Open AI Assistant',
        chatStatusOnline: '🟢 Online',
        chatWelcomeText: 'Hello! I am a Local AI assistant built from Doi Chang coffee farmers. Ask me anything about coffee cultivation and care.',
        trustLayerTitle: 'AI Trust Layer',
        trustExplanation: 'This AI only answers from verified local knowledge. Every response is traceable to its source.',
        impactHeader: 'From Learning to Real Impact',
        impactSubheader: 'Empowering children to become AI Creators solving local challenges.',
        flowStep1: 'Connectivity & Tech Access',
        flowStep2: 'Capability & AI Skills',
        flowStep3: 'Creation of Local AI',
        flowStep4: 'Impact on Community',
        impactStudentTitle: '👨‍🎓 Student',
        impactStudent1: 'Skills: AI, Data & Critical Thinking',
        impactStudent2: 'Portfolio: Real deployed AI projects',
        impactStudent3: 'Digital Credential: Skill Certification',
        impactCommunityTitle: '🏘️ Community',
        impactComm1: 'Local Knowledge: Preserving generational wisdom',
        impactComm2: 'Verified Information: Trusted ground truth',
        impactComm3: 'Locally-grounded AI: Practical everyday use',
        impactPartnerTitle: '🤝 Partner',
        impactPart1: 'Cloud & AI Infrastructure Scaling',
        impactPart2: 'Connectivity for Remote Areas',
        impactPart3: 'National Learning Platform Integration',
        impactPart4: 'Measurable CSR / ESG Outcomes',
        profileStatProjects: 'Projects',
        profileStatSources: 'Verified Sources',
        profileStatDeployed: 'Deployed AI',
        profileStatSkills: 'Skills',
        profileSkillsTitle: 'Skill Development Progress',
        profilePortfolioTitle: 'Project Portfolio',
        modalGoalLabel: 'Mission Goal',
        modalCommunityLabel: 'Community',
        modalSkillsLabel: 'Required Skills',
        modalDataLabel: 'Data Needed',
        modalImpactLabel: 'Expected Impact',
        modalStartMissionBtn: 'Start This Mission'
    }
};

// ===== STATE MANAGEMENT =====
let currentLang = 'th';
let currentUser = null;
let currentPage = 'dashboard';
let demoRunning = false;
let demoTimeouts = [];
let knowledgeSources = [];
let verifyApproved = false;
let buildCompleted = false;

// Default demo sources
const initialDemoSources = [
    {
        title: 'สัมภาษณ์เกษตรกร — คุณสมชาย',
        titleEn: 'Interview — Farmer Somchai',
        type: 'audio',
        icon: 'mic',
        duration: '01:24',
        source: 'คุณสมชาย — เกษตรกรในชุมชน',
        sourceEn: 'Somchai — Local Farmer',
        consent: true,
        topic: 'การดูแลต้นกาแฟในฤดูฝน',
        topicEn: 'Rainy Season Coffee Care',
        status: 'needs-verify'
    },
    {
        title: 'คู่มือการปลูกและดูแลกาแฟท้องถิ่น',
        titleEn: 'Local Coffee Farming Guide',
        type: 'text',
        icon: 'file-text',
        duration: '4 หน้า',
        source: 'เอกสารกลุ่มวิสาหกิจชุมชน',
        sourceEn: 'Community Enterprise Doc',
        consent: true,
        topic: 'การเก็บเกี่ยวและการแปรรูป',
        topicEn: 'Harvesting & Honey Process',
        status: 'needs-verify'
    },
    {
        title: 'บันทึกกลุ่มเกษตรกรดอยช้าง',
        titleEn: 'Doi Chang Farmers Notes',
        type: 'pdf',
        icon: 'file',
        duration: '12 หน้า',
        source: 'สภาเกษตรกรชุมชน',
        sourceEn: 'Village Farming Council',
        consent: true,
        topic: 'โรคพืชและการฟื้นฟูดิน',
        topicEn: 'Pest Control & Soil Prep',
        status: 'needs-verify'
    }
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initLanguage();
    initNavigation();
    initUpload();
    initMobileMenu();
    initIcons();
    initKeyboardShortcuts();
});

function initIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// ===== AUTHENTICATION (LOCALSTORAGE SPA) =====
function initAuth() {
    try {
        const savedUser = localStorage.getItem('afh_user');
        if (savedUser) {
            currentUser = JSON.parse(savedUser);
            showMainApp();
        } else {
            showAuthView('login');
        }
    } catch (e) {
        showAuthView('login');
    }
}

function showAuthView(viewName) {
    const authContainer = document.getElementById('auth-container');
    const mainApp = document.getElementById('main-app-container');
    const loginView = document.getElementById('view-login');
    const registerView = document.getElementById('view-register');

    if (authContainer) authContainer.classList.remove('hidden');
    if (mainApp) mainApp.classList.add('hidden');

    if (viewName === 'login') {
        if (loginView) loginView.classList.remove('hidden');
        if (registerView) registerView.classList.add('hidden');
    } else {
        if (loginView) loginView.classList.add('hidden');
        if (registerView) registerView.classList.remove('hidden');
    }
    clearFormErrors();
    initIcons();
}

function switchAuthView(viewName) {
    showAuthView(viewName);
}

function showMainApp() {
    const authContainer = document.getElementById('auth-container');
    const mainApp = document.getElementById('main-app-container');

    if (authContainer) authContainer.classList.add('hidden');
    if (mainApp) mainApp.classList.remove('hidden');

    // Update user profile display across topbar, sidebar and profile page
    updateUserDisplays();
    initIcons();
}

function updateUserDisplays() {
    if (!currentUser) return;
    const name = currentUser.name || 'Billy';
    const role = currentUser.roleTitle || 'Local AI Creator';
    const initial = name.charAt(0).toUpperCase();

    const topbarAvatar = document.getElementById('topbar-avatar');
    const topbarName = document.getElementById('topbar-name');
    const sidebarAvatar = document.getElementById('sidebar-avatar');
    const sidebarName = document.getElementById('sidebar-user-name');
    const sidebarRole = document.getElementById('sidebar-user-role');
    const profileAvatarLg = document.getElementById('profile-avatar-lg');
    const profileDisplayName = document.getElementById('profile-display-name');
    const profileRoleBadge = document.getElementById('profile-role-badge');

    if (topbarAvatar) topbarAvatar.textContent = initial;
    if (topbarName) topbarName.textContent = name;
    if (sidebarAvatar) sidebarAvatar.textContent = initial;
    if (sidebarName) sidebarName.textContent = name;
    if (sidebarRole) sidebarRole.textContent = role;
    if (profileAvatarLg) profileAvatarLg.textContent = initial;
    if (profileDisplayName) profileDisplayName.textContent = name;
    if (profileRoleBadge) profileRoleBadge.textContent = role;
}

function handleLoginSubmit(e) {
    e.preventDefault();
    clearFormErrors();

    const emailEl = document.getElementById('login-email');
    const passEl = document.getElementById('login-password');

    const email = emailEl ? emailEl.value.trim() : '';
    const password = passEl ? passEl.value : '';

    let hasError = false;

    if (!email) {
        setFieldError('login-email', i18n[currentLang].errEmailRequired);
        hasError = true;
    } else if (!validateEmail(email)) {
        setFieldError('login-email', i18n[currentLang].errEmailInvalid);
        hasError = true;
    }

    if (!password) {
        setFieldError('login-password', i18n[currentLang].errPasswordRequired);
        hasError = true;
    }

    if (hasError) return;

    // Check stored user or use demo user
    let userObj = {
        name: 'Billy',
        email: email,
        role: 'student',
        roleTitle: 'Local AI Creator'
    };

    try {
        const storedUsers = JSON.parse(localStorage.getItem('afh_users_db') || '[]');
        const found = storedUsers.find(u => u.email === email);
        if (found) {
            userObj = found;
        }
    } catch (err) {}

    currentUser = userObj;
    localStorage.setItem('afh_user', JSON.stringify(currentUser));

    showToast(currentLang === 'th' ? 'เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ!' : 'Welcome back! Signed in successfully.', 'success');
    showMainApp();
    navigateTo('dashboard');
}

function handleRegisterSubmit(e) {
    e.preventDefault();
    clearFormErrors();

    const fnameEl = document.getElementById('reg-firstname');
    const lnameEl = document.getElementById('reg-lastname');
    const emailEl = document.getElementById('reg-email');
    const passEl = document.getElementById('reg-password');
    const confirmEl = document.getElementById('reg-confirm-password');
    const roleEl = document.getElementById('reg-role');
    const termsEl = document.getElementById('reg-terms');

    const fname = fnameEl ? fnameEl.value.trim() : '';
    const lname = lnameEl ? lnameEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const pass = passEl ? passEl.value : '';
    const confirm = confirmEl ? confirmEl.value : '';
    const role = roleEl ? roleEl.value : 'student';
    const terms = termsEl ? termsEl.checked : false;

    let hasError = false;

    if (!fname) { setFieldError('reg-firstname', i18n[currentLang].errFirstNameRequired); hasError = true; }
    if (!lname) { setFieldError('reg-lastname', i18n[currentLang].errLastNameRequired); hasError = true; }

    if (!email) {
        setFieldError('reg-email', i18n[currentLang].errEmailRequired);
        hasError = true;
    } else if (!validateEmail(email)) {
        setFieldError('reg-email', i18n[currentLang].errEmailInvalid);
        hasError = true;
    }

    if (!pass) {
        setFieldError('reg-password', i18n[currentLang].errPasswordRequired);
        hasError = true;
    } else if (pass.length < 6) {
        setFieldError('reg-password', i18n[currentLang].errPasswordShort);
        hasError = true;
    }

    if (!confirm) {
        setFieldError('reg-confirm-password', i18n[currentLang].errPasswordRequired);
        hasError = true;
    } else if (pass !== confirm) {
        setFieldError('reg-confirm-password', i18n[currentLang].errPasswordMismatch);
        hasError = true;
    }

    if (!terms) {
        setFieldError('reg-terms', i18n[currentLang].errTermsRequired);
        hasError = true;
    }

    if (hasError) return;

    let roleTitle = 'Local AI Creator';
    if (role === 'teacher') roleTitle = 'AI Education Mentor';
    if (role === 'expert') roleTitle = 'Community Knowledge Expert';

    const newUser = {
        name: fname,
        lastName: lname,
        email: email,
        role: role,
        roleTitle: roleTitle
    };

    // Save to demo DB
    try {
        const storedUsers = JSON.parse(localStorage.getItem('afh_users_db') || '[]');
        storedUsers.push(newUser);
        localStorage.setItem('afh_users_db', JSON.stringify(storedUsers));
    } catch (err) {}

    currentUser = newUser;
    localStorage.setItem('afh_user', JSON.stringify(currentUser));

    showToast(currentLang === 'th' ? 'สร้างบัญชีสำเร็จ ยินดีต้อนรับสู่ AI FROM HERE!' : 'Account created successfully! Welcome to AI FROM HERE.', 'success');
    showMainApp();
    navigateTo('dashboard');
}

function quickDemoLogin() {
    currentUser = {
        name: 'Billy',
        email: 'billy@aifromhere.edu',
        role: 'student',
        roleTitle: 'Local AI Creator'
    };
    localStorage.setItem('afh_user', JSON.stringify(currentUser));
    showToast(currentLang === 'th' ? 'เข้าสู่ระบบด้วยบัญชี Demo สำเร็จ' : 'Logged in with Demo Account', 'success');
    showMainApp();
    navigateTo('dashboard');
}

function handleLogout() {
    localStorage.removeItem('afh_user');
    currentUser = null;
    if (demoRunning) stopDemo();
    showToast(currentLang === 'th' ? 'ออกจากระบบเรียบร้อยแล้ว' : 'Logged out successfully', 'info');
    showAuthView('login');
}

function handleForgotPassword() {
    showToast(currentLang === 'th' ? 'ระบบจำลองการกู้คืนรหัสผ่าน: กรุณาใช้ Demo Login' : 'Demo Password Recovery: Please use Quick Demo Sign In.', 'info');
}

function setFieldError(fieldId, errorMsg) {
    const errorEl = document.getElementById(`${fieldId}-error`);
    const inputEl = document.getElementById(fieldId);
    if (errorEl) errorEl.textContent = errorMsg;
    if (inputEl) inputEl.classList.add('input-error');
}

function clearFormErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== LANGUAGE SWITCHER (TH / EN) =====
function initLanguage() {
    const savedLang = localStorage.getItem('afh_lang');
    if (savedLang && (savedLang === 'th' || savedLang === 'en')) {
        currentLang = savedLang;
    } else {
        currentLang = 'th';
    }
    applyLanguage(currentLang);
}

function setLanguage(lang) {
    if (lang !== 'th' && lang !== 'en') return;
    currentLang = lang;
    localStorage.setItem('afh_lang', lang);
    applyLanguage(lang);
    showToast(lang === 'th' ? 'เปลี่ยนภาษาเป็น: ภาษาไทย' : 'Language set to: English', 'info');
}

function applyLanguage(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    // Toggle active classes on language buttons
    const btnTh = document.getElementById('lang-th');
    const btnEn = document.getElementById('lang-en');
    if (btnTh) btnTh.classList.toggle('active', lang === 'th');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update search input placeholder
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = dict.searchPlaceholder;
    }

    // Re-render knowledge list if sources exist
    if (knowledgeSources.length > 0) {
        renderKnowledgeList();
    }

    initIcons();
}

// ===== NAVIGATION =====
function initNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            if (page) navigateTo(page);
        });
    });
}

function navigateTo(page) {
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (navItem) navItem.classList.add('active');

    // Update active page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    currentPage = page;

    // Scroll to top
    const content = document.getElementById('content');
    if (content) content.scrollTo(0, 0);
    window.scrollTo(0, 0);

    // Close mobile menu if open
    closeMobileSidebar();

    // Trigger page-specific animations
    if (page === 'profile') animateSkillBars();
    if (page === 'knowledge' && knowledgeSources.length === 0) {
        // Auto-seed initial items if empty
        knowledgeSources = [...initialDemoSources];
        renderKnowledgeList();
    }

    initIcons();
}

// ===== MOBILE SIDEBAR =====
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    if (toggle) toggle.addEventListener('click', toggleMobileSidebar);

    // Create overlay if not present
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.addEventListener('click', closeMobileSidebar);
        const app = document.getElementById('app');
        if (app) app.appendChild(overlay);
    }
}

function toggleMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');
}

// ===== MISSION MODAL =====
const missionData = {
    coffee: {
        emoji: '☕',
        titleTh: 'Coffee Local AI',
        titleEn: 'Coffee Local AI',
        descTh: 'สร้าง AI จากองค์ความรู้ของเกษตรกรในพื้นที่ เพื่อรวบรวมภูมิปัญญาการปลูกกาแฟที่สืบทอดมาหลายชั่วอายุคน',
        descEn: 'Build a localized AI assistant from generations of Doi Chang coffee farmer wisdom.',
        goalTh: 'สร้าง AI Assistant จากองค์ความรู้ของผู้ปลูกกาแฟเพื่อถ่ายทอดและอนุรักษ์ภูมิปัญญาชุมชน',
        goalEn: 'Preserve and share generational coffee wisdom through an accessible local AI assistant.',
        communityTh: 'กลุ่มเกษตรกรผู้ปลูกกาแฟดอยช้าง จังหวัดเชียงราย',
        communityEn: 'Doi Chang Coffee Community, Chiang Rai',
        skillsTh: 'การสัมภาษณ์, การตรวจสอบ Consent, พื้นฐาน RAG, Responsible AI',
        skillsEn: 'Interviewing, Consent Verification, RAG Pipeline, Responsible AI',
        dataTh: 'เสียงสัมภาษณ์เกษตรกร, ภาพถ่ายแปลงปลูก, คู่มือการเกษตรท้องถิ่น',
        dataEn: 'Farmer voice interviews, farm photos, local community guides',
        impactTh: 'สร้างระบบตอบคำถามและดูแลกาแฟที่ทุกคนในชุมชนและผู้สนใจเข้าถึงได้ฟรี',
        impactEn: 'Free, locally-grounded coffee knowledge base for the entire community.'
    },
    tourism: {
        emoji: '🏝️',
        titleTh: 'Local Tourism AI',
        titleEn: 'Local Tourism AI',
        descTh: 'รวบรวมความรู้สถานที่ท่องเที่ยวจากคนในชุมชน เพื่อสร้าง AI แนะนำท่องเที่ยวจากมุมมองคนท้องถิ่น',
        descEn: 'Gather authentic stories and hidden gems to create a community-driven AI tour guide.',
        goalTh: 'สร้าง AI ไกด์นำเที่ยวชุมชนที่บอกเล่าเรื่องราวที่แท้จริงและกระจายรายได้สู่คนท้องถิ่น',
        goalEn: 'Empower local tourism by sharing authentic stories and supporting local business.',
        communityTh: 'ชุมชนท่องเที่ยวเชิงนิเวศ จังหวัดเชียงราย',
        communityEn: 'Eco-Tourism Community, Chiang Rai',
        skillsTh: 'Storytelling, Content Curation, Audio Verification, AI Deployment',
        skillsEn: 'Storytelling, Content Curation, Audio Verification, AI Deployment',
        dataTh: 'เรื่องเล่าปราชญ์ท้องถิ่น, พิกัดเส้นทางลับ, บันทึกประวัติศาสตร์ชุมชน',
        dataEn: 'Local stories, secret trails, oral community histories',
        impactTh: 'โปรโมตการท่องเที่ยวอย่างยั่งยืนและอนุรักษ์วัฒนธรรมท้องถิ่น',
        impactEn: 'Sustainable community tourism and authentic heritage preservation.'
    },
    farming: {
        emoji: '🌾',
        titleTh: 'Smart Farming AI',
        titleEn: 'Smart Farming AI',
        descTh: 'สร้าง AI ช่วยตอบคำถามด้านการเกษตรและโรคพืชจากความรู้ของเกษตรกรผู้เชี่ยวชาญในพื้นที่',
        descEn: 'Build an agricultural advisory AI grounded in local farmer knowledge and pest remedies.',
        goalTh: 'สร้าง AI ผู้ช่วยเกษตรกรในการวินิจฉัยโรคพืชและคำนวณการฟื้นฟูดิน',
        goalEn: 'Create an accessible agricultural helper for disease prevention and soil recovery.',
        communityTh: 'กลุ่มเกษตรกรผสมผสาน ภาคเหนือ',
        communityEn: 'Integrated Farming Network, Northern Thailand',
        skillsTh: 'Data Collection, Agricultural Taxonomy, AI Evaluation',
        skillsEn: 'Data Collection, Agricultural Taxonomy, AI Evaluation',
        dataTh: 'บันทึกสูตรสมุนไพรไล่แมลง, รูปภาพอาการโรคใบ, สภาพดินท้องถิ่น',
        dataEn: 'Natural pest remedy recipes, leaf disease photos, soil logs',
        impactTh: 'ลดการใช้สารเคมีและเพิ่มผลผลิตทางการเกษตรอย่างยั่งยืน',
        impactEn: 'Reduced chemical usage and sustainable smallholder yield improvement.'
    }
};

function openMissionModal(missionId) {
    const data = missionData[missionId];
    if (!data) return;

    const modal = document.getElementById('mission-modal');
    if (!modal) return;

    const isTh = currentLang === 'th';

    document.getElementById('modal-emoji').textContent = data.emoji;
    document.getElementById('modal-title').textContent = isTh ? data.titleTh : data.titleEn;
    document.getElementById('modal-desc').textContent = isTh ? data.descTh : data.descEn;
    document.getElementById('modal-goal').textContent = isTh ? data.goalTh : data.goalEn;
    document.getElementById('modal-community').textContent = isTh ? data.communityTh : data.communityEn;
    document.getElementById('modal-skills').textContent = isTh ? data.skillsTh : data.skillsEn;
    document.getElementById('modal-data').textContent = isTh ? data.dataTh : data.dataEn;
    document.getElementById('modal-impact').textContent = isTh ? data.impactTh : data.impactEn;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initIcons();
}

function closeMissionModal() {
    const modal = document.getElementById('mission-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function startMission() {
    closeMissionModal();
    showToast(currentLang === 'th' ? 'เริ่มภารกิจแล้ว! เริ่มต้นด้วยการเก็บรวบรวมองค์ความรู้' : 'Mission started! Begin by collecting local knowledge.', 'success');
    navigateTo('knowledge');
}

// ===== KNOWLEDGE UPLOAD =====
function initUpload() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const addBtn = document.getElementById('add-knowledge-btn');

    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => fileInput.click());
    }

    if (addBtn && fileInput) {
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            fileInput.click();
        });
    }

    if (uploadArea) {
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
            simulateUpload();
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', () => {
            simulateUpload();
        });
    }

    // Default sources
    knowledgeSources = [...initialDemoSources];
    renderKnowledgeList();
}

function simulateUpload() {
    const newDemoItem = {
        title: 'ภาพถ่ายแปลงกาแฟและบันทึกโรคราสนิม',
        titleEn: 'Coffee Farm Photos & Rust Disease Log',
        type: 'image',
        icon: 'image',
        duration: '8 ภาพ',
        source: 'คุณสมชาย — ไร่กาแฟดอยช้าง',
        sourceEn: 'Somchai — Doi Chang Farm',
        consent: true,
        topic: 'โรคพืชและการดูแล',
        topicEn: 'Plant Disease Prevention',
        status: 'needs-verify'
    };

    knowledgeSources.unshift(newDemoItem);
    renderKnowledgeList();

    const countEl = document.getElementById('dash-stat-sources');
    if (countEl) countEl.textContent = knowledgeSources.length + 9;

    showToast(currentLang === 'th' ? 'อัปโหลดและสกัดข้อมูลสำเร็จ: พร้อมตรวจสอบความถูกต้อง' : 'File uploaded & extracted successfully: Ready for verification.', 'success');
}

function renderKnowledgeList() {
    const container = document.getElementById('knowledge-items');
    const countEl = document.getElementById('source-count');
    if (!container) return;

    const isTh = currentLang === 'th';
    if (countEl) {
        countEl.textContent = `${knowledgeSources.length} ${isTh ? 'แหล่งข้อมูล' : 'sources'}`;
    }

    container.innerHTML = knowledgeSources.map((src, i) => `
        <div class="knowledge-item" data-index="${i}">
            <div class="knowledge-type-icon ${src.type}">
                <i data-lucide="${src.icon}"></i>
            </div>
            <div class="knowledge-item-info">
                <h4>${isTh ? src.title : src.titleEn}</h4>
                <div class="knowledge-item-meta">
                    <span><i data-lucide="tag"></i> ${isTh ? src.topic : src.topicEn}</span>
                    <span><i data-lucide="clock"></i> ${src.duration}</span>
                    <span><i data-lucide="user"></i> ${isTh ? src.source : src.sourceEn}</span>
                    <span>${src.consent ? '<i data-lucide="check-circle-2"></i> Consent ✓' : ''}</span>
                </div>
            </div>
            <span class="knowledge-item-status ${src.status}">
                ${src.status === 'needs-verify' ? (isTh ? 'รอตรวจสอบ' : 'Needs Verification') : (isTh ? '✓ ได้รับการยืนยันแล้ว' : '✓ Verified')}
            </span>
            ${src.status === 'needs-verify' ? `<span class="verify-link" onclick="navigateTo('verify')">${isTh ? 'ไปตรวจสอบ →' : 'Verify →'}</span>` : ''}
        </div>
    `).join('');

    initIcons();
}

// ===== VERIFY KNOWLEDGE =====
function approveKnowledge() {
    const actions = document.getElementById('verify-actions');
    const success = document.getElementById('verify-success');

    if (actions) actions.classList.add('hidden');
    if (success) success.classList.remove('hidden');
    verifyApproved = true;

    // Update all sources to verified
    knowledgeSources.forEach(k => {
        k.status = 'verified';
    });
    renderKnowledgeList();

    // Update dashboard counters
    const dashStatSources = document.getElementById('dash-stat-sources');
    if (dashStatSources) dashStatSources.textContent = '12';

    showToast(currentLang === 'th' ? '✓ ยืนยันข้อมูลเรียบร้อยแล้ว ถูกบันทึกเข้า Verified Knowledge Base' : '✓ Knowledge verified and stored into Verified Knowledge Base!', 'success');
    initIcons();
}

function flagKnowledge() {
    showToast(currentLang === 'th' ? '⚠ ส่งข้อมูลให้ผู้เชี่ยวชาญในชุมชนตรวจสอบเพิ่มเติมแล้ว' : '⚠ Knowledge flagged for community expert re-evaluation.', 'warning');
}

function resetVerifyState() {
    const actions = document.getElementById('verify-actions');
    const success = document.getElementById('verify-success');
    if (actions) actions.classList.remove('hidden');
    if (success) success.classList.add('hidden');
    verifyApproved = false;
}

// ===== BUILD LOCAL AI =====
function startBuildAI() {
    const config = document.getElementById('build-config');
    const progress = document.getElementById('build-progress');
    const success = document.getElementById('build-success');

    if (config) config.classList.add('hidden');
    if (progress) progress.classList.remove('hidden');
    if (success) success.classList.add('hidden');

    const steps = ['bs-1', 'bs-2', 'bs-3', 'bs-4', 'bs-5'];

    steps.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active', 'done');
    });

    // Animate 5 steps sequentially
    steps.forEach((id, i) => {
        const timeout1 = setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.classList.add('active');
        }, i * 1000);

        const timeout2 = setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove('active');
                el.classList.add('done');
            }
        }, (i + 1) * 1000);

        demoTimeouts.push(timeout1, timeout2);
    });

    // Final success display
    const finalTimeout = setTimeout(() => {
        if (progress) progress.classList.add('hidden');
        if (success) success.classList.remove('hidden');
        buildCompleted = true;
        showToast(currentLang === 'th' ? '🎉 สร้าง Local AI สำเร็จ! พร้อมเปิดใช้งาน' : '🎉 Your Local AI is ready! Model successfully built.', 'success');
        initIcons();
    }, steps.length * 1000 + 300);

    demoTimeouts.push(finalTimeout);
}

function resetBuildState() {
    const config = document.getElementById('build-config');
    const progress = document.getElementById('build-progress');
    const success = document.getElementById('build-success');
    if (config) config.classList.remove('hidden');
    if (progress) progress.classList.add('hidden');
    if (success) success.classList.add('hidden');
    buildCompleted = false;
}

// ===== CHAT / TEST AI =====
const chatKnowledgeBase = [
    {
        keywords: ['ฤดูฝน', 'ฝน', 'ความชื้น', 'รากเน่า', 'rainy', 'rain'],
        answerTh: 'จากข้อมูลของเกษตรกรในพื้นที่ ช่วงฤดูฝนควรเน้นการระบายน้ำและลดความชื้นบริเวณราก เพื่อช่วยป้องกันปัญหารากเน่า โดยเฉพาะในพื้นที่ที่มีดินระบายน้ำช้า ควรทำร่องระบายน้ำรอบแปลงและงดการรดน้ำซ้ำซ้อน นอกจากนี้ควรตรวจดูโคนต้นเพื่อป้องกันเชื้อราสะสม',
        answerEn: 'According to local farmers, during the rainy season you should focus on improving soil drainage and reducing root moisture to prevent root rot. Dig drainage trenches around the farm and inspect the tree bases regularly for fungus.',
        sources: ['คุณสมชาย — สัมภาษณ์เกษตรกร', 'Local Coffee Farming Guide']
    },
    {
        keywords: ['รดน้ำ', 'บ่อย', 'น้ำ', 'water', 'watering'],
        answerTh: 'ในสภาพอากาศปกติควรรดน้ำสัปดาห์ละ 2-3 ครั้งในช่วงเช้า แต่หากเป็นช่วงฤดูฝนให้งดการรดน้ำหากดินยังมีความชื้นอยู่ และควรคลุมดินด้วยเปลือกกาแฟหมักเพื่อช่วยรักษาความชื้นที่เหมาะสมโดยไม่ทำให้น้ำขัง',
        answerEn: 'In normal weather, water 2-3 times per week in the early morning. In rainy season, cease watering if soil remains moist, and apply composted coffee husk mulch for balanced moisture retention.',
        sources: ['คู่มือการปลูกและดูแลกาแฟท้องถิ่น', 'บันทึกกลุ่มเกษตรกรดอยช้าง']
    },
    {
        keywords: ['ปัญหา', 'มากที่สุด', 'ศัตรูพืช', 'โรค', 'problem', 'disease'],
        answerTh: 'ปัญหาที่เกษตรกรในพื้นที่พบมากที่สุดคือ "โรคราสนิม" (Coffee Leaf Rust) ในช่วงอากาศชื้น และปัญหา "มอดเจาะผลกาแฟ" ชุมชนแก้ไขโดยการตัดแต่งกิ่งให้โปร่งเพื่อรับแสงแดด และใช้เชื้อราไตรโคเดอร์มาในการควบคุมทางชีววิธี',
        answerEn: 'The most common challenge noted by local farmers is Coffee Leaf Rust and the Coffee Berry Borer. The community addresses this through canopy pruning for sun penetration and applying Trichoderma bio-control.',
        sources: ['คุณสมชาย — สัมภาษณ์เกษตรกร', 'บันทึกกลุ่มเกษตรกรดอยช้าง']
    },
    {
        keywords: ['ใส่ปุ๋ย', 'ปุ๋ย', 'บำรุง', 'fertilizer', 'nutrition'],
        answerTh: 'ควรใส่ปุ๋ยอินทรีย์หรือปุ๋ยหมักจากเปลือกกาแฟ 2 ช่วงหลัก คือ ช่วงต้นฤดูฝน (พฤษภาคม) เพื่อเตรียมความพร้อมของต้น และช่วงติดผล (สิงหาคม-กันยายน) เพื่อบำรุงเมล็ดกาแฟให้สมบูรณ์และได้ขนาดมาตรฐาน',
        answerEn: 'Apply organic fertilizer or composted coffee husks twice a year: at the start of the rainy season (May) to build strength, and during fruiting (August-September) to ensure full bean development.',
        sources: ['คู่มือการปลูกและดูแลกาแฟท้องถิ่น']
    },
    {
        keywords: ['เก็บเกี่ยว', 'คุณภาพ', 'เก็บ', 'harvest', 'quality'],
        answerTh: 'เกษตรกรในพื้นที่แนะนำให้เก็บเฉพาะผลกาแฟที่สุกแดงเต็มที่ (Cherry Red) ด้วยมือทีละผล (Selective Picking) และต้องนำเข้าสู่กระบวนการแปรรูปภายใน 24 ชั่วโมงหลังการเก็บเกี่ยวเพื่อคงคุณภาพและความหวานธรรมชาติ',
        answerEn: 'Local farmers emphasize hand-picking only fully ripe Cherry Red coffee fruit (Selective Picking) and processing them within 24 hours to preserve natural sugar and specialty flavor notes.',
        sources: ['คุณสมชาย — สัมภาษณ์เกษตรกร', 'คู่มือการปลูกและดูแลกาแฟท้องถิ่น']
    }
];

const unknownAnswer = {
    answerTh: 'ขออภัย ขณะนี้ยังไม่พบข้อมูลที่ผ่านการตรวจสอบจากชุมชนสำหรับคำถามนี้ (AI ตอบเฉพาะข้อมูลที่ได้รับการยืนยันความถูกต้องจากคนในพื้นที่แล้วเท่านั้น)',
    answerEn: 'Sorry, no verified community knowledge was found for this query. (This AI strictly answers using verified local ground truth).',
    sources: ['AI Trust Layer — Verified Grounding Policy']
};

function findChatResponse(query) {
    const text = query.toLowerCase();
    for (const item of chatKnowledgeBase) {
        const matched = item.keywords.some(kw => text.includes(kw.toLowerCase()));
        if (matched) return item;
    }
    return unknownAnswer;
}

function sendSuggestion(chip) {
    const input = document.getElementById('chat-input');
    if (!input || !chip) return;
    input.value = chip.textContent.trim();
    sendChatMessage();
}

function handleChatKeydown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    if (!input) return;
    const message = input.value.trim();
    if (!message) return;

    input.value = '';

    // Remove welcome view
    const welcome = document.querySelector('.chat-welcome');
    if (welcome) welcome.remove();

    // Hide suggestions after first message
    const suggestions = document.getElementById('chat-suggestions');
    if (suggestions) suggestions.style.display = 'none';

    // Append user message
    addChatBubble('user', message);

    // Show typing indicator
    showTypingIndicator();

    // Process response
    const responseObj = findChatResponse(message);
    const isTh = currentLang === 'th';
    const answer = isTh ? responseObj.answerTh : responseObj.answerEn;
    const sources = responseObj.sources;

    setTimeout(() => {
        removeTypingIndicator();
        addChatBubble('ai', answer, sources);
    }, 1200 + Math.random() * 800);
}

function addChatBubble(type, text, sources) {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    const isUser = type === 'user';
    const userInitial = currentUser && currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'B';
    const avatar = isUser ? userInitial : '☕';

    let sourcesHtml = '';
    if (sources && sources.length > 0) {
        sourcesHtml = `
            <div class="chat-sources-list">
                <div class="chat-sources-label">${currentLang === 'th' ? 'แหล่งข้อมูลอ้างอิง (Verified Sources)' : 'Verified Sources'}</div>
                ${sources.map(s => `<div class="chat-source-item" onclick="openSourceModal('${s}')"><i data-lucide="file-check"></i> ${s}</div>`).join('')}
            </div>
        `;
    }

    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${type}`;
    msgDiv.innerHTML = `
        <div class="chat-msg-avatar">${avatar}</div>
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
        <div class="chat-msg-avatar">☕</div>
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
}

function removeTypingIndicator() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
}

// ===== SOURCE CITATION MODAL =====
const sourceDataDocs = {
    'คุณสมชาย — สัมภาษณ์เกษตรกร': {
        title: 'บทสัมภาษณ์: คุณสมชาย (ปราชญ์กาแฟดอยช้าง)',
        content: '“การปลูกกาแฟในดอยช้างอาศัยร่มเงาไม้ป่าและความเข้าใจสภาพอากาศ ช่วงหน้าฝนสำคัญที่สุดคืออย่าให้น้ำขังที่โคนต้น ต้องทำร่องน้ำรอบแปลง และตัดแต่งกิ่งให้แสงส่องถึงเสมอเพื่อลดความชื้นสะสม”'
    },
    'Local Coffee Farming Guide': {
        title: 'คู่มือการปลูกและแปรรูปกาแฟท้องถิ่น',
        content: 'คู่มือรวบรวมเทคนิคการให้น้ำตามฤดูกาล การใส่ปุ๋ยอินทรีย์จากเปลือกกาแฟหมัก และขั้นตอน Honey Process ที่พัฒนาโดยวิสาหกิจชุมชนกาแฟดอยช้าง เพื่อมาตรฐานกาแฟพิเศษ Specialty Coffee'
    },
    'คู่มือการปลูกและดูแลกาแฟท้องถิ่น': {
        title: 'คู่มือการปลูกและดูแลกาแฟท้องถิ่น',
        content: 'ขั้นตอนการเก็บเกี่ยวแบบ Selective Picking เฉพาะเมล็ดสีแดง Cherry Red และการนำไปหมักแปรรูปภายใน 24 ชม. เพื่อคงระดับความหวานตามธรรมชาติของเมล็ดกาแฟ'
    },
    'บันทึกกลุ่มเกษตรกรดอยช้าง': {
        title: 'บันทึกการประชุมและสรุปการควบคุมโรคพืช',
        content: 'สรุปการเฝ้าระวังโรคราสนิมและมอดเจาะผลกาแฟ การใช้เชื้อราไตรโคเดอร์มาแบบชีววิธี และการฟื้นฟูดินด้วยอินทรียวัตถุหลังการเก็บเกี่ยว'
    }
};

function openSourceModal(sourceTitle) {
    const modal = document.getElementById('source-modal');
    if (!modal) return;

    const doc = sourceDataDocs[sourceTitle] || {
        title: sourceTitle,
        content: 'ข้อมูลนี้ได้รับการตรวจสอบความถูกต้องและผ่านการให้ความยินยอม (Consent) จากเกษตรกรในชุมชนเรียบร้อยแล้ว'
    };

    document.getElementById('source-modal-title').textContent = doc.title;
    document.getElementById('source-modal-body').innerHTML = `<p>${doc.content}</p>`;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initIcons();
}

function closeSourceModal() {
    const modal = document.getElementById('source-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// ===== SKILL BARS ANIMATION =====
function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-fill');
    fills.forEach(fill => {
        const w = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => {
            fill.style.width = w;
        }, 120);
    });
}

// ===== TOAST NOTIFICATIONS =====
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

function showNotificationToast() {
    showToast(currentLang === 'th' ? '🔔 มี 3 การแจ้งเตือน: แหล่งข้อมูลได้รับการตรวจทานแล้ว' : '🔔 3 Notifications: Knowledge verified by community!', 'info');
}

// ===== DEMO MODE (JUDGES PITCH FLOW) =====
function toggleDemoMode() {
    if (demoRunning) {
        stopDemo();
    } else {
        startDemo();
    }
}

function startDemo() {
    demoRunning = true;
    demoTimeouts = [];

    const demoBtn = document.getElementById('demo-btn');
    const demoBtnText = document.getElementById('demo-btn-text');
    if (demoBtn) demoBtn.classList.add('running');
    if (demoBtnText) demoBtnText.textContent = i18n[currentLang].stopDemoBtn;

    const demoBar = document.getElementById('demo-bar');
    if (demoBar) demoBar.classList.remove('hidden');

    resetVerifyState();
    resetBuildState();

    showToast(currentLang === 'th' ? '🎬 เริ่มต้นโหมดสาธิต (Demo Flow สำหรับกรรมการ)' : '🎬 Demo Mode Started for Presentation', 'info');

    const totalSteps = 7;
    function setStep(num, labelTh, labelEn) {
        const label = currentLang === 'th' ? labelTh : labelEn;
        const progressEl = document.getElementById('demo-progress-fill');
        const labelEl = document.getElementById('demo-label');
        if (progressEl) progressEl.style.width = `${(num / totalSteps) * 100}%`;
        if (labelEl) labelEl.textContent = `Step ${num}/${totalSteps}: ${label}`;
    }

    // Step 1: Missions
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(1, 'สำรวจภารกิจชุมชน', 'Explore Missions');
        navigateTo('missions');
    }, 800));

    // Step 1b: Open Mission Details
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        openMissionModal('coffee');
    }, 2800));

    // Step 1c: Close Modal
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        closeMissionModal();
    }, 6000));

    // Step 2: Knowledge
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(2, 'เก็บรวบรวมองค์ความรู้', 'Collect Knowledge');
        navigateTo('knowledge');
    }, 6800));

    // Step 2b: Add Knowledge demo
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        simulateUpload();
    }, 9000));

    // Step 3: Verify
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(3, 'ตรวจสอบข้อมูล & Consent', 'Verify Knowledge & Consent');
        navigateTo('verify');
    }, 12500));

    // Step 3b: Approve
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        approveKnowledge();
    }, 15000));

    // Step 4: Build AI
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(4, 'สร้าง Local AI (RAG Pipeline)', 'Build Local AI');
        navigateTo('build');
    }, 18000));

    // Step 4b: Start build
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        startBuildAI();
    }, 20000));

    // Step 5: Test AI Chat
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(5, 'ทดสอบและสนทนากับ Local AI', 'Test AI Chat');
        navigateTo('test');
    }, 27500));

    // Step 5b: Simulated Typing Question
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        const input = document.getElementById('chat-input');
        const question = 'ช่วงฤดูฝนควรดูแลต้นกาแฟอย่างไร?';
        if (input) {
            let charIndex = 0;
            input.value = '';
            const typeInterval = setInterval(() => {
                if (charIndex < question.length && demoRunning) {
                    input.value += question[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 40);
        }
    }, 29000));

    // Step 5c: Send Message
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        sendChatMessage();
    }, 32500));

    // Step 6: Profile & Skills
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(6, 'การเติบโตของทักษะ (Skill Growth)', 'Skill Growth');
        navigateTo('profile');
    }, 37500));

    // Step 7: Impact Page
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        setStep(7, 'ผลกระทบจริงต่อชุมชน (Impact)', 'Real-world Impact');
        navigateTo('impact');
    }, 42500));

    // Demo Complete
    demoTimeouts.push(setTimeout(() => {
        if (!demoRunning) return;
        showToast(currentLang === 'th' ? '🎬 จบการนำเสนอ Demo สำเร็จ! ขอบคุณครับ' : '🎬 Demo Presentation completed successfully!', 'success');
        stopDemo();
    }, 48000));
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

// ===== KEYBOARD SHORTCUTS & OVERLAYS =====
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMissionModal();
            closeSourceModal();
            closeMobileSidebar();
        }
    });

    // Close modals on backdrop click
    const missionModal = document.getElementById('mission-modal');
    if (missionModal) {
        missionModal.addEventListener('click', (e) => {
            if (e.target === missionModal) closeMissionModal();
        });
    }

    const sourceModal = document.getElementById('source-modal');
    if (sourceModal) {
        sourceModal.addEventListener('click', (e) => {
            if (e.target === sourceModal) closeSourceModal();
        });
    }
}
