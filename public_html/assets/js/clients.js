// ================================================================
// assets/js/clients.js - Clients Page Specific JS
// ================================================================

(function() {
    'use strict';

    // ================================================================
    // CLIENTS PAGE TRANSLATIONS
    // ================================================================
    const clientsTranslations = {
        en: {
            'clients.breadcrumb': 'Our Clients',
            'clients.page.title': 'Our <span>Clients</span>',
            'clients.page.desc': 'We are proud to work with amazing businesses and organizations around the world. Here are some of our valued clients who trust us with their digital needs.',
            'clients.intro': 'We are a software house in Islamabad building brands and beautiful websites for clients who need a little help to create something truly special. We do it with love in Brighton for clients all around the world and we can do it for you too.',
            'clients.stats.clients': 'Happy Clients',
            'clients.stats.projects': 'Projects Delivered',
            'clients.stats.countries': 'Countries Served',
            'clients.stats.experience': 'Years Experience',
            'clients.trusted.title': 'Trusted by Businesses Worldwide',
            'clients.trusted.desc': 'From startups to established enterprises, we partner with organizations of all sizes to deliver exceptional digital solutions.',
            'clients.testimonial_badge': '⭐ Happy Client',
            
            // Individual client entries
            'clients.medlink.name': 'MedLink Analytics LLC',
            'clients.medlink.industry': 'Healthcare Analytics',
            'clients.medlink.desc': 'A healthcare analytics company leveraging data-driven insights to improve patient outcomes and operational efficiency.',
            'clients.medlink.link': 'medlinkanalytics.com',
            
            'clients.digicells.name': 'Digicells International',
            'clients.digicells.industry': 'Digital Solutions',
            'clients.digicells.desc': 'A premium digital solutions powerhouse delivering exceptional results across digital marketing, web development, branding, and IT consulting.',
            'clients.digicells.link': 'digicellsinternational.com',
            
            'clients.techsolutions.name': 'TechSolutions Pakistan',
            'clients.techsolutions.industry': 'IT Services',
            'clients.techsolutions.desc': 'An innovative IT services provider offering cutting-edge technology solutions to businesses across Pakistan.',
            'clients.techsolutions.link': 'techsolutions.pk',
            
            'clients.brandforge.name': 'BrandForge Studio',
            'clients.brandforge.industry': 'Creative Agency',
            'clients.brandforge.desc': 'A creative agency specializing in brand identity, visual storytelling, and strategic design for businesses worldwide.',
            'clients.brandforge.link': 'brandforgestudio.com',
            
            'clients.cloudnest.name': 'CloudNest Technologies',
            'clients.cloudnest.industry': 'Cloud Computing',
            'clients.cloudnest.desc': 'A cloud computing company providing scalable infrastructure solutions and DevOps services to enterprises globally.',
            'clients.cloudnest.link': 'cloudnest.tech',
            
            'clients.ecommercelab.name': 'E-Commerce Lab',
            'clients.ecommercelab.industry': 'E-Commerce Solutions',
            'clients.ecommercelab.desc': 'A specialized e-commerce agency building high-performance online stores and conversion-optimized shopping experiences.',
            'clients.ecommercelab.link': 'ecommercelab.co',
            
            'clients.medialand.name': 'MediaLand Communications',
            'clients.medialand.industry': 'Media & PR',
            'clients.medialand.desc': 'A full-service media and public relations agency helping brands tell their stories and connect with audiences.',
            'clients.medialand.link': 'medialand.com',
            
            'clients.fintechhub.name': 'FinTech Hub Pakistan',
            'clients.fintechhub.industry': 'Financial Technology',
            'clients.fintechhub.desc': 'A financial technology company building innovative payment solutions and digital banking platforms for the modern economy.',
            'clients.fintechhub.link': 'fintechhub.pk'
        },
        ur: {
            'clients.breadcrumb': 'ہمارے کلائنٹس',
            'clients.page.title': 'ہمارے <span>کلائنٹس</span>',
            'clients.page.desc': 'ہمیں دنیا بھر میں شاندار کاروبار اور تنظیموں کے ساتھ کام کرنے پر فخر ہے۔ یہ ہمارے کچھ قیمتی کلائنٹس ہیں جو ہم پر اپنی ڈیجیٹل ضروریات کا بھروسہ کرتے ہیں۔',
            'clients.intro': 'ہم اسلام آباد میں ایک سافٹ ویئر ہاؤس ہیں جو برانڈز بناتے ہیں اور کلائنٹس کے لیے خوبصورت ویب سائٹس بناتے ہیں جنہیں واقعی خاص کچھ تخلیق کرنے کے لیے تھوڑی مدد کی ضرورت ہوتی ہے۔ ہم یہ محبت کے ساتھ برائٹن میں دنیا بھر کے کلائنٹس کے لیے کرتے ہیں اور ہم یہ آپ کے لیے بھی کر سکتے ہیں۔',
            'clients.stats.clients': 'خوش کلائنٹس',
            'clients.stats.projects': 'مکمل منصوبے',
            'clients.stats.countries': 'خدمت ممالک',
            'clients.stats.experience': 'سال کا تجربہ',
            'clients.trusted.title': 'دنیا بھر کے کاروباروں کا اعتماد',
            'clients.trusted.desc': 'اسٹارٹ اپس سے لے کر قائم اداروں تک، ہم تمام سائز کی تنظیموں کے ساتھ شراکت کرتے ہیں تاکہ غیر معمولی ڈیجیٹل حل فراہم کر سکیں۔',
            'clients.testimonial_badge': '⭐ خوش کلائنٹ',
            
            // Individual client entries - Urdu
            'clients.medlink.name': 'میڈلنک اینالیٹکس ایل ایل سی',
            'clients.medlink.industry': 'صحت کی تجزیات',
            'clients.medlink.desc': 'ایک صحت کی تجزیات کمپنی جو مریض کے نتائج اور آپریشنل کارکردگی کو بہتر بنانے کے لیے ڈیٹا سے چلنے والی بصیرت کا فائدہ اٹھاتی ہے۔',
            'clients.medlink.link': 'medlinkanalytics.com',
            
            'clients.digicells.name': 'ڈیجی سیلز انٹرنیشنل',
            'clients.digicells.industry': 'ڈیجیٹل حل',
            'clients.digicells.desc': 'ایک پریمیم ڈیجیٹل سلوشنز پاور ہاؤس جو ڈیجیٹل مارکیٹنگ، ویب ڈیولپمنٹ، برانڈنگ، اور آئی ٹی کنسلٹنگ میں غیر معمولی نتائج فراہم کرتا ہے۔',
            'clients.digicells.link': 'digicellsinternational.com',
            
            'clients.techsolutions.name': 'ٹیک سلوشنز پاکستان',
            'clients.techsolutions.industry': 'آئی ٹی خدمات',
            'clients.techsolutions.desc': 'ایک جدید آئی ٹی سروس فراہم کنندہ جو پاکستان بھر میں کاروباروں کو جدید ٹیکنالوجی حل فراہم کرتا ہے۔',
            'clients.techsolutions.link': 'techsolutions.pk',
            
            'clients.brandforge.name': 'برانڈ فورج اسٹوڈیو',
            'clients.brandforge.industry': 'تخلیقی ایجنسی',
            'clients.brandforge.desc': 'ایک تخلیقی ایجنسی جو برانڈ کی شناخت، بصری کہانی سنانے، اور دنیا بھر میں کاروباروں کے لیے اسٹریٹجک ڈیزائن میں مہارت رکھتی ہے۔',
            'clients.brandforge.link': 'brandforgestudio.com',
            
            'clients.cloudnest.name': 'کلاؤڈ نیسٹ ٹیکنالوجیز',
            'clients.cloudnest.industry': 'کلاؤڈ کمپیوٹنگ',
            'clients.cloudnest.desc': 'ایک کلاؤڈ کمپیوٹنگ کمپنی جو عالمی سطح پر کاروباروں کو توسیع پذیر انفراسٹرکچر حل اور ڈیوپس خدمات فراہم کرتی ہے۔',
            'clients.cloudnest.link': 'cloudnest.tech',
            
            'clients.ecommercelab.name': 'ای کامرس لیب',
            'clients.ecommercelab.industry': 'ای کامرس حل',
            'clients.ecommercelab.desc': 'ایک خصوصی ای کامرس ایجنسی جو اعلیٰ کارکردگی والے آن لائن اسٹورز اور تبادلوں کے لیے موزوں شاپنگ کے تجربات بناتی ہے۔',
            'clients.ecommercelab.link': 'ecommercelab.co',
            
            'clients.medialand.name': 'میڈیا لینڈ کمیونیکیشنز',
            'clients.medialand.industry': 'میڈیا اور پی آر',
            'clients.medialand.desc': 'ایک مکمل سروس میڈیا اور پبلک ریلیشنز ایجنسی جو برانڈز کو اپنی کہانیاں سنانے اور سامعین سے رابطہ قائم کرنے میں مدد کرتی ہے۔',
            'clients.medialand.link': 'medialand.com',
            
            'clients.fintechhub.name': 'فن ٹیک ہب پاکستان',
            'clients.fintechhub.industry': 'مالیاتی ٹیکنالوجی',
            'clients.fintechhub.desc': 'ایک مالیاتی ٹیکنالوجی کمپنی جو جدید معیشت کے لیے جدید ادائیگی کے حل اور ڈیجیٹل بینکنگ پلیٹ فارم بناتی ہے۔',
            'clients.fintechhub.link': 'fintechhub.pk'
        }
    };

    // ================================================================
    // MERGE TRANSLATIONS INTO GLOBAL I18N
    // ================================================================
    function mergeClientsTranslations() {
        if (typeof window.I18N !== 'undefined') {
            if (window.I18N.en) {
                Object.assign(window.I18N.en, clientsTranslations.en);
            }
            if (window.I18N.ur) {
                Object.assign(window.I18N.ur, clientsTranslations.ur);
            }
            console.log('✅ Clients translations merged successfully');
            return true;
        } else {
            console.warn('⚠️ I18N not found, clients translations not merged');
            return false;
        }
    }

    // ================================================================
    // APPLY LANGUAGE TO CLIENTS PAGE
    // ================================================================
    function applyClientsLanguage(lang) {
        if (!lang) {
            lang = localStorage.getItem('digicells-lang') || 'en';
        }
        
        console.log('🌍 Applying clients page language: ' + lang);
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (key && key.startsWith('clients.')) {
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
        
        console.log('✅ Clients page language applied: ' + lang);
    }

    // ================================================================
    // LISTEN FOR LANGUAGE CHANGES
    // ================================================================
    function listenForLanguageChanges() {
        window.addEventListener('storage', function(e) {
            if (e.key === 'digicells-lang') {
                const newLang = e.newValue || 'en';
                applyClientsLanguage(newLang);
            }
        });
        
        if (typeof window.setLanguage === 'function') {
            const originalSetLanguage = window.setLanguage;
            window.setLanguage = function(lang) {
                originalSetLanguage(lang);
                applyClientsLanguage(lang);
            };
            console.log('✅ Language change listener attached for clients page');
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
    // INITIALIZE
    // ================================================================
    function initClientsPage() {
        console.log('📋 Initializing Clients page...');
        
        const merged = mergeClientsTranslations();
        
        if (merged) {
            const savedLang = localStorage.getItem('digicells-lang') || 'en';
            applyClientsLanguage(savedLang);
        }
        
        // Animate stats on scroll
        setTimeout(animateCounters, 300);
        
        listenForLanguageChanges();
        
        if (typeof window.initGlobalControls === 'function') {
            setTimeout(function() {
                const savedLang = localStorage.getItem('digicells-lang') || 'en';
                applyClientsLanguage(savedLang);
            }, 200);
        }
        
        console.log('✅ Clients page initialized successfully');
    }

    // ================================================================
    // RUN ON DOM READY
    // ================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initClientsPage);
    } else {
        initClientsPage();
    }

})();