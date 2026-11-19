// ================================================================
// assets/js/services.js - Services Index Page Specific JS
// ================================================================

(function() {
    'use strict';

    // ================================================================
    // SERVICES DATA
    // ================================================================
    const SERVICES_DATA = {
        'digital-marketing': {
            icon: '📈',
            label: 'Digital Marketing',
            count: '12 Services',
            subs: [
                { icon: '🔍', name: 'SEO (Search Engine Optimization)', url: '/services/digital-marketing/seo' },
                { icon: '🧠', name: 'AEO (Answer Engine Optimization)', url: '/services/digital-marketing/aeo' },
                { icon: '🌐', name: 'GEO (Generative Engine Optimization)', url: '/services/digital-marketing/geo' },
                { icon: '📱', name: 'Social Media Management', url: '/services/digital-marketing/social-media-management' },
                { icon: '📊', name: 'Social Media Campaigns', url: '/services/digital-marketing/social-media-campaigns' },
                { icon: '✉️', name: 'Email Marketing', url: '/services/digital-marketing/email-marketing' },
                { icon: '💰', name: 'PPC Advertising', url: '/services/digital-marketing/ppc-advertising' },
                { icon: '📝', name: 'Content Marketing', url: '/services/digital-marketing/content-marketing' },
                { icon: '📈', name: 'Organic Ranking', url: '/services/digital-marketing/organic-ranking' },
                { icon: '🔗', name: 'Link Building', url: '/services/digital-marketing/link-building' },
                { icon: '📊', name: 'Analytics & Reporting', url: '/services/digital-marketing/analytics' },
                { icon: '🎯', name: 'Lead Generation', url: '/services/digital-marketing/lead-generation' }
            ]
        },
        'development': {
            icon: '💻',
            label: 'Development',
            count: '15 Services',
            subs: [
                { icon: '🌐', name: 'Website Development', url: '/services/development/website-development' },
                { icon: '📱', name: 'Mobile App Development', url: '/services/development/mobile-app-development' },
                { icon: '💻', name: 'Desktop Application', url: '/services/development/desktop-application' },
                { icon: '⚙️', name: 'Software Development', url: '/services/development/software-development' },
                { icon: '🤖', name: 'AI Chatbot Development', url: '/services/development/ai-chatbot' },
                { icon: '🧠', name: 'AI Agent Development', url: '/services/development/ai-agent' },
                { icon: '📦', name: 'WordPress Theme Development', url: '/services/development/wordpress-theme' },
                { icon: '🔌', name: 'WordPress Plugin Development', url: '/services/development/wordpress-plugin' },
                { icon: '🧬', name: 'AI Model Development', url: '/services/development/ai-model' },
                { icon: '🔬', name: 'Research Model Development', url: '/services/development/research-model' },
                { icon: '🧩', name: 'LLM (Large Language Model)', url: '/services/development/llm' },
                { icon: '☁️', name: 'Cloud Architecture', url: '/services/development/cloud-architecture' },
                { icon: '🔗', name: 'API Development', url: '/services/development/api-development' },
                { icon: '🛡️', name: 'Cybersecurity Solutions', url: '/services/development/cybersecurity' },
                { icon: '📊', name: 'Data Science & Analytics', url: '/services/development/data-science' }
            ]
        },
        'designing': {
            icon: '🎨',
            label: 'Designing',
            count: '8 Services',
            subs: [
                { icon: '🖼️', name: 'Graphic Design', url: '/services/designing/graphic-design' },
                { icon: '📦', name: 'Product Design', url: '/services/designing/product-design' },
                { icon: '🌐', name: 'Web Design', url: '/services/designing/web-design' },
                { icon: '📱', name: 'UI/UX Design', url: '/services/designing/ui-ux-design' },
                { icon: '🏷️', name: 'Logo Design', url: '/services/designing/logo-design' },
                { icon: '📋', name: 'Brand Identity Design', url: '/services/designing/brand-identity' },
                { icon: '📄', name: 'Print Design', url: '/services/designing/print-design' },
                { icon: '🎯', name: 'Packaging Design', url: '/services/designing/packaging-design' }
            ]
        },
        'production': {
            icon: '🎬',
            label: 'Production',
            count: '9 Services',
            subs: [
                { icon: '🎵', name: 'Audio Production', url: '/services/production/audio-production' },
                { icon: '🎥', name: 'Video Production', url: '/services/production/video-production' },
                { icon: '📝', name: 'Content Creation', url: '/services/production/content-creation' },
                { icon: '🎞️', name: 'Film Production', url: '/services/production/film-production' },
                { icon: '📽️', name: 'Documentary Production', url: '/services/production/documentary' },
                { icon: '📸', name: 'Photography Services', url: '/services/production/photography' },
                { icon: '🎙️', name: 'Podcast Production', url: '/services/production/podcast-production' },
                { icon: '📹', name: 'Corporate Video', url: '/services/production/corporate-video' },
                { icon: '🎬', name: 'Post-Production Services', url: '/services/production/post-production' }
            ]
        },
        'healthcare': {
            icon: '🏥',
            label: 'Healthcare Administration',
            count: '10 Services',
            subs: [
                { icon: '💳', name: 'Medical Billing', url: '/services/healthcare/medical-billing' },
                { icon: '📋', name: 'Credentialing Services', url: '/services/healthcare/credentialing' },
                { icon: '🤝', name: 'Virtual Assistance', url: '/services/healthcare/virtual-assistance' },
                { icon: '📊', name: 'Medical Coding', url: '/services/healthcare/medical-coding' },
                { icon: '📈', name: 'RCM (Revenue Cycle Management)', url: '/services/healthcare/rcm' },
                { icon: '📋', name: 'Patient Scheduling', url: '/services/healthcare/patient-scheduling' },
                { icon: '📝', name: 'Medical Transcription', url: '/services/healthcare/medical-transcription' },
                { icon: '📊', name: 'Healthcare Analytics', url: '/services/healthcare/healthcare-analytics' },
                { icon: '📋', name: 'HIPAA Compliance', url: '/services/healthcare/hipaa-compliance' },
                { icon: '📞', name: 'Medical Call Center', url: '/services/healthcare/medical-call-center' }
            ]
        },
        'consulting': {
            icon: '🧠',
            label: 'Consulting',
            count: '7 Services',
            subs: [
                { icon: '📋', name: 'Digital Strategy', url: '/services/consulting/digital-strategy' },
                { icon: '🔧', name: 'Technology Consulting', url: '/services/consulting/technology-consulting' },
                { icon: '📊', name: 'Business Intelligence', url: '/services/consulting/business-intelligence' },
                { icon: '🔄', name: 'Digital Transformation', url: '/services/consulting/digital-transformation' },
                { icon: '📈', name: 'Growth Strategy', url: '/services/consulting/growth-strategy' },
                { icon: '🤖', name: 'AI Strategy Consulting', url: '/services/consulting/ai-strategy' },
                { icon: '📋', name: 'Process Optimization', url: '/services/consulting/process-optimization' }
            ]
        }
    };

    // ================================================================
    // RENDER SERVICES
    // ================================================================
    function renderServices() {
        const container = document.getElementById('servicesContainer');
        if (!container) return;

        let html = '';

        Object.entries(SERVICES_DATA).forEach(([key, category]) => {
            const subHtml = category.subs.map(sub => `
                <a href="${sub.url}" class="sub-service-item">
                    <span class="sub-icon">${sub.icon}</span>
                    <span class="sub-name">${sub.name}</span>
                    <span class="sub-arrow">→</span>
                </a>
            `).join('');

            html += `
                <div class="service-category" data-category="${key}">
                    <div class="service-category-header" data-toggle="${key}">
                        <span class="category-icon">${category.icon}</span>
                        <span class="category-title">${category.label}</span>
                        <span class="category-count">${category.count}</span>
                        <span class="toggle-icon">▼</span>
                    </div>
                    <div class="service-category-body" data-body="${key}">
                        <div class="sub-services-grid">
                            ${subHtml}
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;

        // Attach toggle events
        document.querySelectorAll('[data-toggle]').forEach(header => {
            header.addEventListener('click', function() {
                const key = this.dataset.toggle;
                const body = document.querySelector(`[data-body="${key}"]`);
                const icon = this.querySelector('.toggle-icon');
                if (body) {
                    body.classList.toggle('open');
                    if (icon) icon.classList.toggle('open');
                }
            });
        });

        // Open first category by default
        const firstBody = document.querySelector('[data-body]');
        if (firstBody) {
            firstBody.classList.add('open');
            const firstIcon = firstBody.closest('.service-category').querySelector('.toggle-icon');
            if (firstIcon) firstIcon.classList.add('open');
        }
    }

    // ================================================================
    // SERVICES PAGE TRANSLATIONS
    // ================================================================
    const servicesTranslations = {
        en: {
            'services.breadcrumb': 'Our Services',
            'services.page.title': 'Our <span>Services</span>',
            'services.page.desc': 'Discover our comprehensive range of professional digital services designed to help your business grow and succeed in the digital age.',
            'services.intro': 'From digital marketing and development to design, production, healthcare administration, and consulting — we offer end-to-end solutions tailored to your unique needs.',
            'services.stats.services': 'Services',
            'services.stats.experience': 'Years Experience',
            'services.stats.projects': 'Projects Delivered',
            'services.stats.clients': 'Happy Clients',
            'services.quick_nav': 'Quick Navigation'
        },
        ur: {
            'services.breadcrumb': 'ہماری خدمات',
            'services.page.title': 'ہماری <span>خدمات</span>',
            'services.page.desc': 'ہماری پیشہ ورانہ ڈیجیٹل خدمات کی جامع رینج دریافت کریں جو آپ کے کاروبار کو ڈیجیٹل دور میں بڑھنے اور کامیاب ہونے میں مدد کرنے کے لیے ڈیزائن کی گئی ہیں۔',
            'services.intro': 'ڈیجیٹل مارکیٹنگ اور ڈیولپمنٹ سے لے کر ڈیزائن، پروڈکشن، ہیلتھ کیئر ایڈمنسٹریشن، اور کنسلٹنگ تک — ہم آپ کی منفرد ضروریات کے مطابق اینڈ ٹو اینڈ حل پیش کرتے ہیں۔',
            'services.stats.services': 'خدمات',
            'services.stats.experience': 'سال کا تجربہ',
            'services.stats.projects': 'مکمل منصوبے',
            'services.stats.clients': 'خوش کلائنٹس',
            'services.quick_nav': 'فوری نیویگیشن'
        }
    };

    // ================================================================
    // MERGE TRANSLATIONS
    // ================================================================
    function mergeServicesTranslations() {
        if (typeof window.I18N !== 'undefined') {
            if (window.I18N.en) {
                Object.assign(window.I18N.en, servicesTranslations.en);
            }
            if (window.I18N.ur) {
                Object.assign(window.I18N.ur, servicesTranslations.ur);
            }
            console.log('✅ Services translations merged successfully');
            return true;
        }
        return false;
    }

    // ================================================================
    // APPLY LANGUAGE
    // ================================================================
    function applyServicesLanguage(lang) {
        if (!lang) {
            lang = localStorage.getItem('digicells-lang') || 'en';
        }
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (key && key.startsWith('services.')) {
                if (window.I18N && window.I18N[lang] && window.I18N[lang][key] !== undefined) {
                    const translation = window.I18N[lang][key];
                    if (/<[a-z][\s\S]*>/i.test(translation)) {
                        el.innerHTML = translation;
                    } else {
                        const childNodes = el.childNodes;
                        let hasTextNodes = false;
                        childNodes.forEach(node => {
                            if (node.nodeType === Node.TEXT_NODE) {
                                node.textContent = translation;
                                hasTextNodes = true;
                            }
                        });
                        if (!hasTextNodes) {
                            el.textContent = translation;
                        }
                    }
                }
            }
        });
    }

    // ================================================================
    // LISTEN FOR LANGUAGE CHANGES
    // ================================================================
    function listenForLanguageChanges() {
        window.addEventListener('storage', function(e) {
            if (e.key === 'digicells-lang') {
                const newLang = e.newValue || 'en';
                applyServicesLanguage(newLang);
            }
        });
        
        if (typeof window.setLanguage === 'function') {
            const originalSetLanguage = window.setLanguage;
            window.setLanguage = function(lang) {
                originalSetLanguage(lang);
                applyServicesLanguage(lang);
            };
        }
    }

    // ================================================================
    // ANIMATE STATS COUNTERS
    // ================================================================
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        if (!counters.length) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-target') || el.textContent.replace(/[^0-9]/g, ''));
                    if (!target || el.dataset.animated) return;
                    
                    el.dataset.animated = 'true';
                    let current = 0;
                    const duration = 1500;
                    const step = Math.ceil(target / (duration / 16));
                    const suffix = el.textContent.replace(/[0-9]/g, '');
                    
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            el.textContent = target + suffix;
                            clearInterval(timer);
                        } else {
                            el.textContent = current + suffix;
                        }
                    }, 16);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    }

    // ================================================================
    // QUICK NAV SMOOTH SCROLL
    // ================================================================
    function initQuickNav() {
        document.querySelectorAll('.quick-nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ================================================================
    // INITIALIZE
    // ================================================================
    function initServicesPage() {
        console.log('📋 Initializing Services Index page...');

        // Merge translations
        mergeServicesTranslations();

        // Render services
        renderServices();

        // Apply language
        const savedLang = localStorage.getItem('digicells-lang') || 'en';
        applyServicesLanguage(savedLang);

        // Animate stats
        setTimeout(animateCounters, 300);

        // Quick nav
        initQuickNav();

        // Listen for language changes
        listenForLanguageChanges();

        // Re-apply language when main.js is done
        if (typeof window.initGlobalControls === 'function') {
            setTimeout(function() {
                const lang = localStorage.getItem('digicells-lang') || 'en';
                applyServicesLanguage(lang);
            }, 200);
        }

        console.log('✅ Services Index page initialized successfully');
    }

    // ================================================================
    // RUN ON DOM READY
    // ================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initServicesPage);
    } else {
        initServicesPage();
    }

})();