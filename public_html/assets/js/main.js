// ================================================================
// assets/js/main.js - Main JavaScript (FULLY UPDATED)
// ================================================================

// ===== DATA =====
const SERVICES_DATA = [{
    id: 'digital-marketing',
    label: 'Digital Marketing',
    icon: '📈',
    subs: [{
        id: 'seo-aeo-geo',
        label: 'SEO, AEO & GEO',
        icon: '🔍',
        subs: [
            { id: 'seo', label: 'SEO', icon: '📊', desc: 'Optimize site architecture, crawlability, and indexing for maximum search visibility.' },
            { id: 'aeo', label: 'AEO (Answer Engine Optimization)', icon: '🧠', desc: 'Optimize for voice search, featured snippets, and answer boxes to capture zero-click searches.' },
            { id: 'geo', label: 'GEO (Generative Engine Optimization)', icon: '🌐', desc: 'Prepare your content for AI-driven search engines like ChatGPT, Perplexity, and Gemini to drive AI-referral traffic.' }
        ]
    }, {
        id: 'organic-ranking',
        label: 'Organic Ranking',
        icon: '📈',
        subs: [
            { id: 'technical-seo', label: 'Technical SEO', icon: '⚙️', desc: 'Optimize site architecture, crawlability, and indexing for maximum search visibility.' },
            { id: 'on-page-seo', label: 'On-Page SEO', icon: '📝', desc: 'Content optimization, keyword targeting, and meta-data refinement for higher rankings.' },
            { id: 'off-page-seo', label: 'Off-Page SEO', icon: '🔗', desc: 'Link building, brand mentions, and authority signals to boost domain strength.' }
        ]
    }, {
        id: 'content-marketing',
        label: 'Content Marketing',
        icon: '✍️',
        desc: 'Strategic content creation that drives engagement, builds trust, and fuels conversions.'
    }, {
        id: 'social-media-marketing',
        label: 'Social Media Marketing',
        icon: '📱',
        subs: [
            { id: 'facebook-ads', label: 'Facebook Ads', icon: '📘', desc: 'Targeted campaigns on Facebook to reach your ideal audience with precision.' },
            { id: 'instagram-ads', label: 'Instagram Ads', icon: '📸', desc: 'Visual storytelling and ad placements that capture attention and drive action.' },
            { id: 'linkedin-ads', label: 'LinkedIn Ads', icon: '🔗', desc: 'B2B lead generation through LinkedIn\'s professional network.' }
        ]
    }, {
        id: 'email-marketing',
        label: 'Email Marketing',
        icon: '✉️',
        desc: 'Personalized email campaigns that nurture leads, retain customers, and boost lifetime value.'
    }, {
        id: 'ppc-advertising',
        label: 'PPC Advertising',
        icon: '💰',
        desc: 'Data-driven pay-per-click campaigns across Google, Bing, and social platforms for instant ROI.'
    }]
}, {
    id: 'web-development',
    label: 'Web Development',
    icon: '💻',
    subs: [{
        id: 'frontend-development',
        label: 'Frontend Development',
        icon: '🎨',
        desc: 'Pixel-perfect, responsive interfaces built with modern frameworks for seamless user experiences.'
    }, {
        id: 'backend-development',
        label: 'Backend Development',
        icon: '⚡',
        desc: 'Robust server-side logic, APIs, and databases that power scalable, secure applications.'
    }, {
        id: 'full-stack-development',
        label: 'Full Stack Development',
        icon: '🛠️',
        desc: 'End-to-end development from UI/UX to database and deployment — a complete digital solution.'
    }, {
        id: 'ecommerce-development',
        label: 'E-commerce Development',
        icon: '🛒',
        desc: 'Custom e-commerce platforms with secure payment gateways, inventory management, and analytics.'
    }]
}, {
    id: 'branding-design',
    label: 'Branding &amp; Design',
    icon: '🎯',
    subs: [{
        id: 'logo-design',
        label: 'Logo Design',
        icon: '🏷️',
        desc: 'Distinctive, memorable logos that embody your brand\'s identity and values.'
    }, {
        id: 'graphic-design',
        label: 'Graphic Design',
        icon: '🖼️',
        desc: 'Visual assets — from brochures to social creatives — that communicate with impact.'
    }, {
        id: 'ui-ux-design',
        label: 'UI/UX Design',
        icon: '🧩',
        desc: 'Human-centered design that enhances usability, accessibility, and user satisfaction.'
    }]
}, {
    id: 'it-consulting',
    label: 'IT Consulting',
    icon: '🧠',
    subs: [{
        id: 'digital-strategy',
        label: 'Digital Strategy',
        icon: '📋',
        desc: 'Strategic roadmaps that align technology with business goals for sustainable growth.'
    }, {
        id: 'technology-consulting',
        label: 'Technology Consulting',
        icon: '🔧',
        desc: 'Expert guidance on tech stacks, cloud migration, and digital transformation initiatives.'
    }]
}];

// ===== TRANSLATIONS =====
const I18N = {
    en: {
        // Homepage translations
        'hero.title': 'Elevate Your Brand with <span>Digicells International</span>',
        'hero.desc': 'We are a premium digital solutions powerhouse — fusing creativity, technology, and strategy to deliver exceptional results. From precision-driven <strong>digital marketing</strong> and <strong>web development</strong> to iconic <strong>branding</strong> and forward-thinking <strong>IT consulting</strong>, we architect experiences that captivate, convert, and endure. Partner with us to transform your vision into a digital legacy.',
        'services.title': 'Our <span>Services</span>',
        'services.hire': '📩 Hire This Service',
        'services.learn': '📖 Learn More',
        'contact.title': 'Get in Touch',
        'contact.sub': 'We\'d love to hear from you. Reach out and let\'s create something extraordinary.',
        'contact.form.title': 'Send a Message',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email Address',
        'contact.form.service': 'Service Interested In',
        'contact.form.message': 'Message',
        'contact.form.submit': '🚀 Send Message',
        
        // Contact page translations
        'contact.breadcrumb': 'Contact',
        'contact.page.title': 'Get in <span>Touch</span>',
        'contact.page.desc': 'We\'d love to hear from you. Whether you have a project in mind, a question about our services, or just want to say hello — reach out and let\'s create something extraordinary.',
        'contact.info.title': '📬 Contact Information',
        'contact.info.email_label': 'Email',
        'contact.info.phone_label': 'Phone',
        'contact.info.whatsapp_label': 'WhatsApp',
        'contact.info.location_label': 'Location',
        'contact.info.location': 'Pakistan',
        'contact.hours.title': '🕒 Business Hours',
        'contact.hours.weekdays': 'Monday – Friday',
        'contact.hours.weekday_hours': '9:00 AM – 6:00 PM',
        'contact.hours.saturday': 'Saturday',
        'contact.hours.saturday_hours': '10:00 AM – 4:00 PM',
        'contact.hours.sunday': 'Sunday',
        'contact.hours.sunday_hours': 'Closed',
        'contact.badges.privacy': 'Privacy Protected',
        'contact.badges.support': '24/7 Support',
        'contact.badges.premium': 'Premium Service',
        'contact.form.title': '✉️ Send a Message',
        'contact.form.subtitle': 'Fill in the form below and we\'ll get back to you within 24 hours.',
        'contact.form.name_label': 'Full Name',
        'contact.form.email_label': 'Email Address',
        'contact.form.phone_label': 'Phone Number',
        'contact.form.service_label': 'Service Interested In',
        'contact.form.service_general': 'General Inquiry',
        'contact.form.service_digital': 'Digital Marketing',
        'contact.form.service_web': 'Web Development',
        'contact.form.service_branding': 'Branding & Design',
        'contact.form.service_it': 'IT Consulting',
        'contact.form.subject_label': 'Subject',
        'contact.form.message_label': 'Message',
        'contact.form.submit': '🚀 Send Message'
    },
    ur: {
        // Homepage translations - Urdu
        'hero.title': 'ڈیجی سیلز انٹرنیشنل کے ساتھ اپنے برانڈ کو <span>بلند کریں</span>',
        'hero.desc': 'ہم ایک پریمیم ڈیجیٹل سلوشنز پاور ہاؤس ہیں — تخلیقی صلاحیتوں، ٹیکنالوجی اور حکمت عملی کو ملا کر شاندار نتائج فراہم کرتے ہیں۔ درست ڈیجیٹل مارکیٹنگ اور ویب ڈیولپمنٹ سے لے کر آئیکونک برانڈنگ اور دوراندیش IT کنسلٹنگ تک، ہم ایسے تجربات تخلیق کرتے ہیں جو متوجہ، تبدیل اور دیرپا ہوں۔ اپنے وژن کو ڈیجیٹل ورثے میں تبدیل کرنے کے لیے ہمارے ساتھ شراکت کریں۔',
        'services.title': 'ہماری <span>خدمات</span>',
        'services.hire': '📩 اس سروس کی خدمات حاصل کریں',
        'services.learn': '📖 مزید جانیں',
        'contact.title': 'رابطہ کریں',
        'contact.sub': 'ہم آپ سے سننا پسند کریں گے۔ ہم سے رابطہ کریں اور مل کر کچھ غیر معمولی تخلیق کریں۔',
        'contact.form.title': 'پیغام بھیجیں',
        'contact.form.name': 'پورا نام',
        'contact.form.email': 'ای میل ایڈریس',
        'contact.form.service': 'دلچسپی کی خدمت',
        'contact.form.message': 'پیغام',
        'contact.form.submit': '🚀 پیغام بھیجیں',
        
        // Contact page translations - Urdu
        'contact.breadcrumb': 'رابطہ',
        'contact.page.title': 'رابطہ <span>کریں</span>',
        'contact.page.desc': 'ہم آپ سے سننا پسند کریں گے۔ چاہے آپ کے ذہن میں کوئی پروجیکٹ ہو، ہماری خدمات کے بارے میں کوئی سوال ہو، یا صرف ہیلو کہنا چاہتے ہوں — ہم سے رابطہ کریں اور مل کر کچھ غیر معمولی تخلیق کریں۔',
        'contact.info.title': '📬 رابطے کی معلومات',
        'contact.info.email_label': 'ای میل',
        'contact.info.phone_label': 'فون',
        'contact.info.whatsapp_label': 'واٹس ایپ',
        'contact.info.location_label': 'مقام',
        'contact.info.location': 'پاکستان',
        'contact.hours.title': '🕒 کاروباری اوقات',
        'contact.hours.weekdays': 'پیر – جمعہ',
        'contact.hours.weekday_hours': 'صبح 9:00 – شام 6:00',
        'contact.hours.saturday': 'ہفتہ',
        'contact.hours.saturday_hours': 'صبح 10:00 – شام 4:00',
        'contact.hours.sunday': 'اتوار',
        'contact.hours.sunday_hours': 'بند',
        'contact.badges.privacy': 'پرائیویسی محفوظ',
        'contact.badges.support': '24/7 سپورٹ',
        'contact.badges.premium': 'پریمیم سروس',
        'contact.form.title': '✉️ پیغام بھیجیں',
        'contact.form.subtitle': 'ذیل میں فارم پُر کریں اور ہم 24 گھنٹوں کے اندر آپ سے رابطہ کریں گے۔',
        'contact.form.name_label': 'پورا نام',
        'contact.form.email_label': 'ای میل ایڈریس',
        'contact.form.phone_label': 'فون نمبر',
        'contact.form.service_label': 'دلچسپی کی خدمت',
        'contact.form.service_general': 'عام پوچھ گچھ',
        'contact.form.service_digital': 'ڈیجیٹل مارکیٹنگ',
        'contact.form.service_web': 'ویب ڈیولپمنٹ',
        'contact.form.service_branding': 'برانڈنگ اور ڈیزائن',
        'contact.form.service_it': 'آئی ٹی کنسلٹنگ',
        'contact.form.subject_label': 'موضوع',
        'contact.form.message_label': 'پیغام',
        'contact.form.submit': '🚀 پیغام بھیجیں'
    }
};

// ===== STATE =====
let currentLang = 'en';
let currentTheme = 'light';
let fontScale = 1;
let selectedService = null;
let chatbotOpen = false;

// ================================================================
// ===== HELPER: Safe DOM element getter =====
// ================================================================
function safeGet(id) {
    return document.getElementById(id);
}

// ================================================================
// ===== GLOBAL CONTROL FUNCTIONS =====
// ================================================================

// ===== THEME =====
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'dark' : '');
    const themeIcon = safeGet('themeIcon');
    if (themeIcon) themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('digicells-theme', currentTheme);
}

function loadTheme() {
    const saved = localStorage.getItem('digicells-theme');
    if (saved) {
        currentTheme = saved;
        document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'dark' : '');
        const themeIcon = safeGet('themeIcon');
        if (themeIcon) themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
}

// ===== FONT SIZE =====
function updateFontSize() {
    document.documentElement.style.setProperty('--font-scale', fontScale);
    const fontSizeLabel = safeGet('fontSizeLabel');
    if (fontSizeLabel) {
        fontSizeLabel.textContent = fontScale >= 1.4 ? 'A+' : fontScale <= 0.8 ? 'A-' : 'A';
    }
    localStorage.setItem('digicells-font-scale', fontScale);
}

function loadFontSize() {
    const saved = localStorage.getItem('digicells-font-scale');
    if (saved) {
        fontScale = parseFloat(saved);
        if (isNaN(fontScale) || fontScale < 0.7) fontScale = 1;
        if (fontScale > 1.6) fontScale = 1.6;
        updateFontSize();
    }
}

// ===== LANGUAGE =====
function setLanguage(lang) {
    currentLang = lang;
    const langSelect = safeGet('langSelect');
    const currentFlag = safeGet('currentFlag');
    if (langSelect) langSelect.value = lang;
    if (currentFlag) currentFlag.textContent = lang === 'en' ? '🇺🇸' : '🇵🇰';
    
    // Update ALL elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (I18N[lang] && I18N[lang][key] !== undefined) {
            const translation = I18N[lang][key];
            // Check if translation contains HTML tags
            if (/<[a-z][\s\S]*>/i.test(translation)) {
                el.innerHTML = translation;
            } else {
                // For plain text, preserve existing child elements (like icons)
                const childNodes = el.childNodes;
                let hasTextNodes = false;
                childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = translation;
                        hasTextNodes = true;
                    }
                });
                // If no text nodes, replace entire content
                if (!hasTextNodes) {
                    el.textContent = translation;
                }
            }
        }
    });
    
    // Also update select options with data-i18n
    document.querySelectorAll('option[data-i18n]').forEach(opt => {
        const key = opt.dataset.i18n;
        if (I18N[lang] && I18N[lang][key] !== undefined) {
            opt.textContent = I18N[lang][key];
        }
    });
    
    localStorage.setItem('digicells-lang', lang);
}

function loadLanguage() {
    const saved = localStorage.getItem('digicells-lang');
    if (saved && I18N[saved]) {
        setLanguage(saved);
    } else {
        setLanguage('en');
    }
}

// ================================================================
// ===== ATTACH HEADER CONTROLS (Safe) =====
// ================================================================
function attachHeaderControls() {
    // Theme toggle
    const themeToggle = safeGet('themeToggle');
    if (themeToggle && !themeToggle._listenerAttached) {
        themeToggle._listenerAttached = true;
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Font size controls
    const fontInc = safeGet('fontInc');
    const fontDec = safeGet('fontDec');
    if (fontInc && !fontInc._listenerAttached) {
        fontInc._listenerAttached = true;
        fontInc.addEventListener('click', function(e) {
            e.preventDefault();
            if (fontScale < 1.6) { fontScale += 0.1; updateFontSize(); }
        });
    }
    if (fontDec && !fontDec._listenerAttached) {
        fontDec._listenerAttached = true;
        fontDec.addEventListener('click', function(e) {
            e.preventDefault();
            if (fontScale > 0.7) { fontScale -= 0.1; updateFontSize(); }
        });
    }

    // Language selector
    const langSelect = safeGet('langSelect');
    if (langSelect && !langSelect._listenerAttached) {
        langSelect._listenerAttached = true;
        langSelect.addEventListener('change', function() {
            setLanguage(this.value);
        });
    }
}

// ================================================================
// ===== MASTER INIT FUNCTION =====
// ================================================================
function initGlobalControls() {
    try {
        loadTheme();
        loadFontSize();
        loadLanguage();
        attachHeaderControls();
        
        // Sync UI with current state
        const themeIcon = safeGet('themeIcon');
        if (themeIcon) themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        
        const fontSizeLabel = safeGet('fontSizeLabel');
        if (fontSizeLabel) {
            fontSizeLabel.textContent = fontScale >= 1.4 ? 'A+' : fontScale <= 0.8 ? 'A-' : 'A';
        }
        
        const langSelect = safeGet('langSelect');
        if (langSelect) langSelect.value = currentLang;
        
        const currentFlag = safeGet('currentFlag');
        if (currentFlag) currentFlag.textContent = currentLang === 'en' ? '🇺🇸' : '🇵🇰';
        
        console.log('✅ Global controls initialized successfully');
    } catch (e) {
        console.warn('⚠️ Global controls initialization warning:', e.message);
    }
}

// ================================================================
// ===== CHATBOT FUNCTIONS =====
// ================================================================
function getBotReply(input) {
    const lower = input.toLowerCase();
    const botResponses = [
        { keywords: ['hello', 'hi', 'hey', 'greetings'], response: 'Hello! Welcome to Digicells International. I\'m Digicells Agent. How can I assist you today?' },
        { keywords: ['service', 'services', 'offer', 'provide'], response: 'We offer premium Digital Marketing, Web Development, Branding & Design, and IT Consulting. Which area are you interested in?' },
        { keywords: ['price', 'pricing', 'cost', 'budget'], response: 'Our pricing is customized based on project scope. Contact us via the form or call +92 327 3344778 for a tailored quote.' },
        { keywords: ['seo', 'search engine', 'ranking'], response: 'Our SEO services include Technical SEO, On-Page SEO, and Off-Page SEO to boost your search visibility.' },
        { keywords: ['aeo', 'answer engine', 'voice'], response: 'AEO (Answer Engine Optimization) helps you capture featured snippets, voice search, and zero-click answers.' },
        { keywords: ['geo', 'generative engine', 'ai search', 'chatgpt'], response: 'GEO (Generative Engine Optimization) prepares your content for AI-driven search engines like ChatGPT, Perplexity, and Gemini.' },
        { keywords: ['web', 'development', 'website', 'site'], response: 'We build modern, responsive websites and web applications using the latest technologies.' },
        { keywords: ['brand', 'branding', 'logo', 'design'], response: 'Our branding and design team creates iconic logos, visual identities, and user-centric designs.' },
        { keywords: ['contact', 'email', 'phone', 'reach'], response: 'You can reach us at info@digicellsinternational.com or call +92 327 3344778. We\'re also on WhatsApp and all major social platforms.' },
        { keywords: ['hire', 'work with', 'partner'], response: 'We\'d love to work with you! Fill out the contact form or click "Hire This Service" on any service card to get started.' }
    ];
    for (let rule of botResponses) {
        for (let kw of rule.keywords) {
            if (lower.includes(kw)) return rule.response;
        }
    }
    return "That's a great question! I'd recommend reaching out to our team directly via the contact form or calling +92 327 3344778 for detailed assistance. 😊";
}

function addChatMessage(text, sender) {
    const chatbotMessages = safeGet('chatbotMessages');
    if (!chatbotMessages) return;
    const div = document.createElement('div');
    div.className = `msg ${sender}`;
    div.textContent = text;
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function handleChatSend() {
    const chatbotInput = safeGet('chatbotInput');
    if (!chatbotInput) return;
    const input = chatbotInput.value.trim();
    if (!input) return;
    addChatMessage(input, 'user');
    chatbotInput.value = '';
    setTimeout(() => {
        const reply = getBotReply(input);
        addChatMessage(reply, 'bot');
    }, 400 + Math.random() * 400);
}

function initChatbot() {
    try {
        const chatbotToggle = safeGet('chatbotToggle');
        const chatbotWindow = safeGet('chatbotWindow');
        const chatbotClose = safeGet('chatbotClose');
        const chatbotSend = safeGet('chatbotSend');
        const chatbotInput = safeGet('chatbotInput');

        if (chatbotToggle && chatbotWindow && !chatbotToggle._listenerAttached) {
            chatbotToggle._listenerAttached = true;
            chatbotToggle.addEventListener('click', function() {
                chatbotOpen = !chatbotOpen;
                chatbotWindow.classList.toggle('open', chatbotOpen);
                if (chatbotOpen && chatbotInput) {
                    chatbotInput.focus();
                    const chatbotMessages = safeGet('chatbotMessages');
                    if (chatbotMessages && chatbotMessages.children.length === 0) {
                        addChatMessage('👋 Hello! I\'m Digicells Agent, your virtual assistant. Ask me about our services, pricing, or anything about Digicells International.', 'bot');
                    }
                }
            });
        }

        if (chatbotClose && chatbotWindow && !chatbotClose._listenerAttached) {
            chatbotClose._listenerAttached = true;
            chatbotClose.addEventListener('click', function() {
                chatbotOpen = false;
                chatbotWindow.classList.remove('open');
            });
        }

        if (chatbotSend && chatbotInput && !chatbotSend._listenerAttached) {
            chatbotSend._listenerAttached = true;
            chatbotSend.addEventListener('click', handleChatSend);
        }

        if (chatbotInput && !chatbotInput._listenerAttached) {
            chatbotInput._listenerAttached = true;
            chatbotInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleChatSend();
                }
            });
        }

        // Close chatbot when clicking outside
        document.addEventListener('click', function(e) {
            if (chatbotOpen) {
                const win = chatbotWindow;
                const toggle = chatbotToggle;
                if (win && toggle && !win.contains(e.target) && !toggle.contains(e.target)) {
                    chatbotOpen = false;
                    win.classList.remove('open');
                }
            }
        });
    } catch (e) {
        console.warn('⚠️ Chatbot initialization warning:', e.message);
    }
}

// ================================================================
// ===== SERVICES RENDER FUNCTIONS =====
// ================================================================
function renderServices() {
    try {
        const serviceTabs = safeGet('serviceTabs');
        const servicePanels = safeGet('servicePanels');
        if (!serviceTabs || !servicePanels) return;

        serviceTabs.innerHTML = '';
        SERVICES_DATA.forEach((svc, idx) => {
            const btn = document.createElement('button');
            btn.className = 'tab-btn' + (idx === 0 ? ' active' : '');
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
            btn.dataset.mainId = svc.id;
            btn.innerHTML = `${svc.icon} ${svc.label}`;
            btn.addEventListener('click', () => switchMainService(svc.id));
            serviceTabs.appendChild(btn);
        });

        servicePanels.innerHTML = '';
        SERVICES_DATA.forEach((svc, idx) => {
            const panel = document.createElement('div');
            panel.className = 'service-panel' + (idx === 0 ? ' active' : '');
            panel.dataset.mainId = svc.id;
            panel.innerHTML = renderSubServices(svc);
            servicePanels.appendChild(panel);
        });

        const first = SERVICES_DATA[0];
        if (first && first.subs && first.subs.length) {
            const firstSub = first.subs[0];
            if (firstSub.subs && firstSub.subs.length) {
                const firstSubSub = firstSub.subs[0];
                showDetail(first.id, firstSub.id, firstSubSub.id, firstSubSub);
            } else {
                showDetail(first.id, firstSub.id, null, firstSub);
            }
        }
    } catch (e) {
        console.warn('⚠️ Services render warning:', e.message);
    }
}

function renderSubServices(parent) {
    let html = `<div class="sub-service-grid">`;
    parent.subs.forEach(sub => {
        const hasChildren = sub.subs && sub.subs.length;
        html += `
            <div class="sub-service-card" data-main="${parent.id}" data-sub="${sub.id}" data-has-children="${hasChildren}">
                <span class="icon">${sub.icon || '📌'}</span>
                <span class="label">${sub.label}</span>
            </div>
        `;
    });
    html += `</div>`;
    return html;
}

function renderSubSubs(mainId, subId, subs) {
    let html = `<div class="sub-sub-grid" data-main="${mainId}" data-sub="${subId}">`;
    subs.forEach(ss => {
        html += `
            <div class="sub-sub-card" data-main="${mainId}" data-sub="${subId}" data-subsub="${ss.id}">
                <span class="icon">${ss.icon || '📌'}</span>
                <span class="label">${ss.label}</span>
            </div>
        `;
    });
    html += `</div>`;
    return html;
}

function switchMainService(mainId) {
    try {
        document.querySelectorAll('.service-tabs .tab-btn').forEach(btn => {
            const isActive = btn.dataset.mainId === mainId;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        document.querySelectorAll('.service-panel').forEach(panel => {
            panel.classList.toggle('active', panel.dataset.mainId === mainId);
        });
        const serviceDetail = safeGet('serviceDetail');
        if (serviceDetail) serviceDetail.classList.remove('visible');
        document.querySelectorAll('.sub-sub-grid').forEach(el => el.remove());
        
        const main = SERVICES_DATA.find(s => s.id === mainId);
        if (main && main.subs && main.subs.length) {
            const firstSub = main.subs[0];
            if (firstSub.subs && firstSub.subs.length) {
                const panel = document.querySelector(`.service-panel[data-main="${mainId}"]`);
                if (panel) {
                    const existing = panel.querySelector('.sub-sub-grid');
                    if (existing) existing.remove();
                    const gridHtml = renderSubSubs(mainId, firstSub.id, firstSub.subs);
                    panel.insertAdjacentHTML('beforeend', gridHtml);
                }
                showDetail(mainId, firstSub.id, firstSub.subs[0].id, firstSub.subs[0]);
            } else {
                showDetail(mainId, firstSub.id, null, firstSub);
            }
        }
    } catch (e) {
        console.warn('⚠️ Switch main service warning:', e.message);
    }
}

function showDetail(mainId, subId, subSubId, item) {
    try {
        const main = SERVICES_DATA.find(s => s.id === mainId);
        const sub = main ? main.subs.find(s => s.id === subId) : null;
        if (!main || !sub || !item) return;

        selectedService = { mainId, subId, subSubId, item };

        const serviceDetail = safeGet('serviceDetail');
        const detailBreadcrumb = safeGet('detailBreadcrumb');
        const detailTitle = safeGet('detailTitle');
        const detailDesc = safeGet('detailDesc');
        const detailHireBtn = safeGet('detailHireBtn');
        const detailLearnBtn = safeGet('detailLearnBtn');

        if (!serviceDetail || !detailBreadcrumb || !detailTitle || !detailDesc) return;

        let bread = `${main.icon} ${main.label}`;
        if (sub) bread += ` → ${sub.icon} ${sub.label}`;
        if (subSubId && item) {
            const parentSub = main.subs.find(s => s.id === subId);
            if (parentSub && parentSub.subs) {
                const found = parentSub.subs.find(ss => ss.id === subSubId);
                if (found) bread += ` → ${found.icon} ${found.label}`;
            }
        }
        detailBreadcrumb.textContent = bread;
        detailTitle.textContent = item.label;
        detailDesc.textContent = item.desc || `Premium ${item.label} services tailored to your business needs.`;

        if (detailHireBtn) {
            detailHireBtn.dataset.main = mainId;
            detailHireBtn.dataset.sub = subId;
            detailHireBtn.dataset.subsub = subSubId || '';
        }
        if (detailLearnBtn) {
            detailLearnBtn.dataset.main = mainId;
            detailLearnBtn.dataset.sub = subId;
            detailLearnBtn.dataset.subsub = subSubId || '';
        }

        serviceDetail.classList.add('visible');
        serviceDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (e) {
        console.warn('⚠️ Show detail warning:', e.message);
    }
}

// ================================================================
// ===== POPUP FUNCTIONS =====
// ================================================================
function getServiceLabel(mainId, subId, subSubId) {
    const main = SERVICES_DATA.find(s => s.id === mainId);
    if (!main) return 'General Inquiry';
    const sub = main.subs.find(s => s.id === subId);
    if (!sub) return main.label;
    if (subSubId && sub.subs) {
        const ss = sub.subs.find(s => s.id === subSubId);
        if (ss) return `${main.label} → ${sub.label} → ${ss.label}`;
    }
    return `${main.label} → ${sub.label}`;
}

function openPopup(serviceLabel) {
    try {
        const popupOverlay = safeGet('popupOverlay');
        const popupService = safeGet('popupService');
        if (!popupOverlay || !popupService) return;

        popupService.innerHTML = '';
        const defaultOpt = document.createElement('option');
        defaultOpt.value = '';
        defaultOpt.textContent = 'Select a service...';
        popupService.appendChild(defaultOpt);

        SERVICES_DATA.forEach(main => {
            const optGroup = document.createElement('optgroup');
            optGroup.label = main.label;
            main.subs.forEach(sub => {
                if (sub.subs && sub.subs.length) {
                    sub.subs.forEach(ss => {
                        const opt = document.createElement('option');
                        opt.value = `${main.id} → ${sub.id} → ${ss.id}`;
                        opt.textContent = `${main.label} → ${sub.label} → ${ss.label}`;
                        optGroup.appendChild(opt);
                    });
                } else {
                    const opt = document.createElement('option');
                    opt.value = `${main.id} → ${sub.id}`;
                    opt.textContent = `${main.label} → ${sub.label}`;
                    optGroup.appendChild(opt);
                }
            });
            popupService.appendChild(optGroup);
        });

        if (serviceLabel) {
            const options = popupService.querySelectorAll('option');
            for (let opt of options) {
                if (opt.textContent.includes(serviceLabel) || serviceLabel.includes(opt.textContent)) {
                    opt.selected = true;
                    break;
                }
            }
        }

        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } catch (e) {
        console.warn('⚠️ Open popup warning:', e.message);
    }
}

function showPopupStatus(msg, type) {
    const popupStatus = safeGet('popupStatus');
    if (!popupStatus) return;
    popupStatus.textContent = msg;
    popupStatus.className = 'form-status ' + type;
    popupStatus.style.display = 'block';
    setTimeout(() => {
        popupStatus.style.display = 'none';
        popupStatus.className = 'form-status';
    }, 8000);
}

function initPopup() {
    try {
        const popupOverlay = safeGet('popupOverlay');
        const popupClose = safeGet('popupClose');
        const popupForm = safeGet('popupForm');
        const detailHireBtn = safeGet('detailHireBtn');

        if (popupClose && popupOverlay && !popupClose._listenerAttached) {
            popupClose._listenerAttached = true;
            popupClose.addEventListener('click', () => {
                popupOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        if (popupOverlay && !popupOverlay._listenerAttached) {
            popupOverlay._listenerAttached = true;
            popupOverlay.addEventListener('click', (e) => {
                if (e.target === popupOverlay) {
                    popupOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }

        if (detailHireBtn && !detailHireBtn._listenerAttached) {
            detailHireBtn._listenerAttached = true;
            detailHireBtn.addEventListener('click', function() {
                if (selectedService) {
                    const label = getServiceLabel(selectedService.mainId, selectedService.subId, selectedService.subSubId);
                    openPopup(label);
                } else {
                    openPopup(null);
                }
            });
        }

        const detailLearnBtn = safeGet('detailLearnBtn');
        if (detailLearnBtn && !detailLearnBtn._listenerAttached) {
            detailLearnBtn._listenerAttached = true;
            detailLearnBtn.addEventListener('click', function() {
                const main = selectedService ? SERVICES_DATA.find(s => s.id === selectedService.mainId) : null;
                const sub = main && selectedService ? main.subs.find(s => s.id === selectedService.subId) : null;
                const subSub = sub && selectedService && selectedService.subSubId ?
                    sub.subs ? sub.subs.find(s => s.id === selectedService.subSubId) : null : null;
                let path = '/services/';
                if (main) path += `${main.id}/`;
                if (sub) path += `${sub.id}/`;
                if (subSub) path += `${subSub.id}/`;
                if (path.endsWith('/')) path = path.slice(0, -1);
                alert(`🔗 Navigating to: digicellsinternational.com${path}\n\n(Service details page would open here.)`);
            });
        }

        if (popupForm && !popupForm._listenerAttached) {
            popupForm._listenerAttached = true;
            popupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = safeGet('popupName');
                const email = safeGet('popupEmail');
                const service = safeGet('popupService');
                const message = safeGet('popupMessage');
                if (!name || !email || !service) return;
                const nameVal = name.value.trim();
                const emailVal = email.value.trim();
                const serviceVal = service.value;
                const messageVal = message ? message.value.trim() : '';

                if (!nameVal || !emailVal || !serviceVal) {
                    showPopupStatus('⚠️ Please fill in all required fields (Name, Email, Service).', 'error');
                    return;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
                    showPopupStatus('⚠️ Please enter a valid email address.', 'error');
                    return;
                }

                const formData = new FormData(popupForm);
                fetch(window.location.href, {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(() => {
                    showPopupStatus('✅ Your request was sent successfully! We\'ll get back to you soon.', 'success');
                    popupForm.reset();
                    setTimeout(() => {
                        const overlay = safeGet('popupOverlay');
                        if (overlay) {
                            overlay.classList.remove('active');
                            document.body.style.overflow = '';
                        }
                    }, 3000);
                })
                .catch(() => {
                    showPopupStatus('❌ Sorry, something went wrong. Please try again or call us directly.', 'error');
                });
            });
        }
    } catch (e) {
        console.warn('⚠️ Popup initialization warning:', e.message);
    }
}

// ================================================================
// ===== SERVICE CLICK DELEGATION =====
// ================================================================
function initServiceClicks() {
    try {
        document.addEventListener('click', function(e) {
            const card = e.target.closest('.sub-service-card');
            if (card) {
                const mainId = card.dataset.main;
                const subId = card.dataset.sub;
                const hasChildren = card.dataset.hasChildren === 'true';
                const main = SERVICES_DATA.find(s => s.id === mainId);
                const sub = main ? main.subs.find(s => s.id === subId) : null;
                if (!sub) return;

                const parentPanel = card.closest('.service-panel');
                if (!parentPanel) return;
                let existingGrid = parentPanel.querySelector(`.sub-sub-grid[data-main="${mainId}"][data-sub="${subId}"]`);
                if (existingGrid) {
                    existingGrid.remove();
                    const serviceDetail = safeGet('serviceDetail');
                    if (serviceDetail) serviceDetail.classList.remove('visible');
                    return;
                }

                parentPanel.querySelectorAll('.sub-sub-grid').forEach(el => el.remove());

                if (hasChildren && sub.subs) {
                    const gridHtml = renderSubSubs(mainId, subId, sub.subs);
                    parentPanel.insertAdjacentHTML('beforeend', gridHtml);
                    if (sub.subs.length) {
                        showDetail(mainId, subId, sub.subs[0].id, sub.subs[0]);
                    }
                } else {
                    showDetail(mainId, subId, null, sub);
                }
            }

            const subSubCard = e.target.closest('.sub-sub-card');
            if (subSubCard) {
                const mainId = subSubCard.dataset.main;
                const subId = subSubCard.dataset.sub;
                const subSubId = subSubCard.dataset.subsub;
                const main = SERVICES_DATA.find(s => s.id === mainId);
                const sub = main ? main.subs.find(s => s.id === subId) : null;
                const subSub = sub && sub.subs ? sub.subs.find(s => s.id === subSubId) : null;
                if (subSub) {
                    showDetail(mainId, subId, subSubId, subSub);
                }
            }
        });
    } catch (e) {
        console.warn('⚠️ Service clicks initialization warning:', e.message);
    }
}

// ================================================================
// ===== CONTACT FORM (main page) =====
// ================================================================
function initContactForm() {
    try {
        const contactForm = safeGet('contactForm');
        const formStatus = safeGet('formStatus');
        if (!contactForm || !formStatus) return;

        contactForm.addEventListener('submit', function(e) {
            const name = safeGet('formName');
            const email = safeGet('formEmail');
            const message = safeGet('formMessage');
            if (!name || !email || !message) return;
            const nameVal = name.value.trim();
            const emailVal = email.value.trim();
            const messageVal = message.value.trim();
            if (!nameVal || !emailVal || !messageVal) {
                e.preventDefault();
                formStatus.textContent = '⚠️ Please fill in all required fields.';
                formStatus.className = 'form-status error';
                formStatus.style.display = 'block';
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
                e.preventDefault();
                formStatus.textContent = '⚠️ Please enter a valid email address.';
                formStatus.className = 'form-status error';
                formStatus.style.display = 'block';
                return;
            }
        });
    } catch (e) {
        console.warn('⚠️ Contact form initialization warning:', e.message);
    }
}

// ================================================================
// ===== MASTER INIT =====
// ================================================================
function initPage() {
    console.log('🚀 Initializing Digicells International...');
    
    // 1. Global controls (ALWAYS initialize)
    initGlobalControls();
    
    // 2. Chatbot (ALWAYS initialize)
    initChatbot();
    
    // 3. Services (only if elements exist)
    const serviceTabs = safeGet('serviceTabs');
    if (serviceTabs) {
        renderServices();
        initServiceClicks();
        initPopup();
    }
    
    // 4. Contact form (only if elements exist)
    const contactForm = safeGet('contactForm');
    if (contactForm) {
        initContactForm();
    }
    
    console.log('✅ Digicells International initialized successfully');
}

// ================================================================
// ===== EXPOSE GLOBALLY =====
// ================================================================
window.initGlobalControls = initGlobalControls;
window.loadTheme = loadTheme;
window.loadFontSize = loadFontSize;
window.loadLanguage = loadLanguage;
window.setLanguage = setLanguage;
window.toggleTheme = toggleTheme;
window.updateFontSize = updateFontSize;
window.showPopupStatus = showPopupStatus;
window.getBotReply = getBotReply;
window.addChatMessage = addChatMessage;
window.handleChatSend = handleChatSend;
window.openPopup = openPopup;
window.renderServices = renderServices;

// ================================================================
// ===== INIT ON PAGE LOAD =====
// ================================================================
document.addEventListener('DOMContentLoaded', initPage);

// Fallback: If DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initPage();
}
// ================================================================
// HAMBURGER MENU TOGGLE (works on all devices)
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerToggle');
    const navDropdown = document.getElementById('navDropdown');

    if (hamburger && navDropdown) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navDropdown.classList.toggle('open');
        });

        // Close dropdown when a link is clicked
        navDropdown.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navDropdown.classList.remove('open');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            const header = document.querySelector('header');
            if (header && !header.contains(e.target) && navDropdown.classList.contains('open')) {
                hamburger.classList.remove('active');
                navDropdown.classList.remove('open');
            }
        });
    }
});