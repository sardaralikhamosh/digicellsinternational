// ================================================================
// assets/js/teams.js - Teams Page Specific JS
// ================================================================

(function() {
    'use strict';

    // ================================================================
    // TEAMS PAGE TRANSLATIONS
    // ================================================================
    const teamsTranslations = {
        en: {
            'teams.breadcrumb': 'Our Team',
            'teams.page.title': 'Our <span>Team</span>',
            'teams.page.desc': 'Meet the talented professionals behind Digicells International. Our diverse team brings expertise across digital marketing, development, design, and consulting.',
            'teams.intro': 'We are a team of passionate professionals dedicated to delivering exceptional digital solutions. With diverse backgrounds and expertise, we work together to help our clients succeed.',
            'teams.stats.members': 'Team Members',
            'teams.stats.experience': 'Combined Experience',
            'teams.stats.specialties': 'Specialties',
            'teams.stats.projects': 'Projects Delivered',
            'teams.years': 'Years',
            
            // Team member bios - English
            'teams.sardarali.name': 'Sardar Ali',
            'teams.sardarali.role': 'Software Engineer',
            'teams.sardarali.experience': '8 Years Experience',
            'teams.sardarali.bio': 'Full-stack developer specializing in scalable web applications, API development, and cloud architecture.',
            'teams.sardarali.specialties': 'Full-Stack Development, API Design, Cloud Architecture',
            
            'teams.azharali.name': 'Azhar Ali',
            'teams.azharali.role': 'Audio & Video Production Expert',
            'teams.azharali.experience': '12 Years Experience',
            'teams.azharali.bio': 'Award-winning audio and video production specialist with expertise in content creation, editing, and post-production.',
            'teams.azharali.specialties': 'Video Editing, Audio Production, Content Creation',
            
            'teams.aliyafatima.name': 'Aliya Fatima',
            'teams.aliyafatima.role': 'SEO/AEO/GEO Expert',
            'teams.aliyafatima.experience': '6 Years Experience',
            'teams.aliyafatima.bio': 'Digital optimization specialist focused on search engine optimization, answer engine optimization, and generative engine optimization strategies.',
            'teams.aliyafatima.specialties': 'SEO, AEO, GEO, Content Strategy',
            
            'teams.shamsiabaig.name': 'Shamsia Baig',
            'teams.shamsiabaig.role': 'Healthcare Administration Expert',
            'teams.shamsiabaig.experience': '15 Years Experience',
            'teams.shamsiabaig.bio': 'Healthcare administration professional with expertise in patient care, medical billing, revenue cycle management, and healthcare IT systems.',
            'teams.shamsiabaig.specialties': 'Healthcare Administration, RCM, Medical Billing',
            
            'teams.nazirahmed.name': 'Nazir Ahmed',
            'teams.nazirahmed.role': 'Legal Advisor',
            'teams.nazirahmed.experience': '17 Years Experience',
            'teams.nazirahmed.bio': 'Corporate legal expert providing guidance on contracts, compliance, intellectual property, and regulatory affairs.',
            'teams.nazirahmed.specialties': 'Corporate Law, Compliance, IP Protection',
            
            'teams.gulnayab.name': 'Gul Nayab',
            'teams.gulnayab.role': 'Content Creator & Proofreader',
            'teams.gulnayab.experience': '7 Years Experience',
            'teams.gulnayab.bio': 'Creative content writer and meticulous proofreader with expertise in copywriting, storytelling, and multilingual content creation.',
            'teams.gulnayab.specialties': 'Content Writing, Proofreading, Copywriting',
            
            'teams.asifali.name': 'Asif Ali',
            'teams.asifali.role': 'Digital Marketing Expert',
            'teams.asifali.experience': '9 Years Experience',
            'teams.asifali.bio': 'Digital marketing strategist specializing in social media marketing, PPC campaigns, analytics, and brand growth strategies.',
            'teams.asifali.specialties': 'Social Media Marketing, PPC, Analytics',
            
            'teams.joshuwa.name': 'Joshuwa',
            'teams.joshuwa.role': 'Photographer/Videographer',
            'teams.joshuwa.experience': '10 Years Experience',
            'teams.joshuwa.bio': 'Visual storyteller with expertise in photography, videography, and multimedia content creation for brands and businesses.',
            'teams.joshuwa.specialties': 'Photography, Videography, Multimedia',
            
            'teams.zuhan.name': 'Zuhan',
            'teams.zuhan.role': 'Branding Expert',
            'teams.zuhan.experience': '8 Years Experience',
            'teams.zuhan.bio': 'Brand strategist and identity designer helping businesses build memorable brands through visual identity, strategy, and storytelling.',
            'teams.zuhan.specialties': 'Brand Strategy, Visual Identity, Design',
            
            'teams.gulshanara.name': 'Prof. Gulshan Ara',
            'teams.gulshanara.role': 'Research Expert',
            'teams.gulshanara.experience': '14 Years Experience',
            'teams.gulshanara.bio': 'Research specialist with expertise in market research, academic writing, data analysis, and research methodology.',
            'teams.gulshanara.specialties': 'Market Research, Data Analysis, Academic Writing',
            
            'teams.shahjahan.name': 'Shahjahan',
            'teams.shahjahan.role': 'Data Analyst',
            'teams.shahjahan.experience': '5 Years Experience',
            'teams.shahjahan.bio': 'Data analyst specializing in business intelligence, predictive modeling, and data visualization to drive informed decision-making.',
            'teams.shahjahan.specialties': 'Data Analysis, Business Intelligence, Visualization'
        },
        ur: {
            'teams.breadcrumb': 'ہماری ٹیم',
            'teams.page.title': 'ہماری <span>ٹیم</span>',
            'teams.page.desc': 'ڈیجی سیلز انٹرنیشنل کے پیچھے باصلاحیت پیشہ ور افراد سے ملیں۔ ہماری متنوع ٹیم ڈیجیٹل مارکیٹنگ، ڈیولپمنٹ، ڈیزائن، اور کنسلٹنگ میں مہارت رکھتی ہے۔',
            'teams.intro': 'ہم پرجوش پیشہ ور افراد کی ایک ٹیم ہیں جو غیر معمولی ڈیجیٹل حل فراہم کرنے کے لیے پرعزم ہیں۔ متنوع پس منظر اور مہارت کے ساتھ، ہم اپنے کلائنٹس کو کامیاب ہونے میں مدد کرنے کے لیے مل کر کام کرتے ہیں۔',
            'teams.stats.members': 'ٹیم کے ارکان',
            'teams.stats.experience': 'مجموعی تجربہ',
            'teams.stats.specialties': 'مہارتیں',
            'teams.stats.projects': 'مکمل منصوبے',
            'teams.years': 'سال',
            
            // Team member bios - Urdu
            'teams.sardarali.name': 'سردار علی',
            'teams.sardarali.role': 'سافٹ ویئر انجینئر',
            'teams.sardarali.experience': '8 سال کا تجربہ',
            'teams.sardarali.bio': 'فل اسٹیک ڈیولپر جو اسکیل ایبل ویب ایپلیکیشنز، API ڈیولپمنٹ، اور کلاؤڈ آرکیٹیکچر میں مہارت رکھتا ہے۔',
            'teams.sardarali.specialties': 'فل اسٹیک ڈیولپمنٹ، API ڈیزائن، کلاؤڈ آرکیٹیکچر',
            
            'teams.azharali.name': 'اظہر علی',
            'teams.azharali.role': 'آڈیو اور ویڈیو پروڈکشن ماہر',
            'teams.azharali.experience': '12 سال کا تجربہ',
            'teams.azharali.bio': 'ایوارڈ یافتہ آڈیو اور ویڈیو پروڈکشن ماہر مواد کی تخلیق، ایڈیٹنگ، اور پوسٹ پروڈکشن میں مہارت رکھتا ہے۔',
            'teams.azharali.specialties': 'ویڈیو ایڈیٹنگ، آڈیو پروڈکشن، مواد کی تخلیق',
            
            'teams.aliyafatima.name': 'عالیہ فاطمہ',
            'teams.aliyafatima.role': 'SEO/AEO/GEO ماہر',
            'teams.aliyafatima.experience': '6 سال کا تجربہ',
            'teams.aliyafatima.bio': 'ڈیجیٹل آپٹیمائزیشن ماہر سرچ انجن آپٹیمائزیشن، انسر انجن آپٹیمائزیشن، اور جنریٹو انجن آپٹیمائزیشن کی حکمت عملیوں پر مرکوز ہے۔',
            'teams.aliyafatima.specialties': 'SEO، AEO، GEO، مواد کی حکمت عملی',
            
            'teams.shamsiabaig.name': 'شمسیہ بیگ',
            'teams.shamsiabaig.role': 'صحت کی دیکھ بھال کے انتظام کے ماہر',
            'teams.shamsiabaig.experience': '15 سال کا تجربہ',
            'teams.shamsiabaig.bio': 'صحت کی دیکھ بھال کے انتظام کی پیشہ ور جو مریضوں کی دیکھ بھال، طبی بلنگ، ریونیو سائیکل مینجمنٹ، اور صحت کی دیکھ بھال کے IT نظام میں مہارت رکھتی ہے۔',
            'teams.shamsiabaig.specialties': 'صحت کی دیکھ بھال کا انتظام، RCM، طبی بلنگ',
            
            'teams.nazirahmed.name': 'نذیر احمد',
            'teams.nazirahmed.role': 'قانونی مشیر',
            'teams.nazirahmed.experience': '17 سال کا تجربہ',
            'teams.nazirahmed.bio': 'کارپوریٹ قانون کے ماہر جو معاہدوں، تعمیل، دانشورانہ املاک، اور ریگولیٹری امور پر رہنمائی فراہم کرتے ہیں۔',
            'teams.nazirahmed.specialties': 'کارپوریٹ قانون، تعمیل، IP تحفظ',
            
            'teams.gulnayab.name': 'گل نایاب',
            'teams.gulnayab.role': 'مواد تخلیق کار اور پروف ریڈر',
            'teams.gulnayab.experience': '7 سال کا تجربہ',
            'teams.gulnayab.bio': 'تخلیقی مواد لکھنے والے اور محتاط پروف ریڈر جو کاپی رائٹنگ، کہانی سنانے، اور کثیر لسانی مواد کی تخلیق میں مہارت رکھتے ہیں۔',
            'teams.gulnayab.specialties': 'مواد لکھنا، پروف ریڈنگ، کاپی رائٹنگ',
            
            'teams.asifali.name': 'آصف علی',
            'teams.asifali.role': 'ڈیجیٹل مارکیٹنگ ماہر',
            'teams.asifali.experience': '9 سال کا تجربہ',
            'teams.asifali.bio': 'ڈیجیٹل مارکیٹنگ کے حکمت عملی ساز جو سوشل میڈیا مارکیٹنگ، PPC مہمات، تجزیات، اور برانڈ کی ترقی کی حکمت عملیوں میں مہارت رکھتے ہیں۔',
            'teams.asifali.specialties': 'سوشل میڈیا مارکیٹنگ، PPC، تجزیات',
            
            'teams.joshuwa.name': 'جوشوا',
            'teams.joshuwa.role': 'فوٹوگرافر/ویڈیوگرافر',
            'teams.joshuwa.experience': '10 سال کا تجربہ',
            'teams.joshuwa.bio': 'بصری کہانی کار جو برانڈز اور کاروباروں کے لیے فوٹوگرافی، ویڈیوگرافی، اور ملٹی میڈیا مواد کی تخلیق میں مہارت رکھتا ہے۔',
            'teams.joshuwa.specialties': 'فوٹوگرافی، ویڈیوگرافی، ملٹی میڈیا',
            
            'teams.zuhan.name': 'زوہان',
            'teams.zuhan.role': 'برانڈنگ ماہر',
            'teams.zuhan.experience': '8 سال کا تجربہ',
            'teams.zuhan.bio': 'برانڈ حکمت عملی ساز اور شناخت ڈیزائنر جو بصری شناخت، حکمت عملی، اور کہانی سنانے کے ذریعے کاروباروں کو یادگار برانڈز بنانے میں مدد کرتا ہے۔',
            'teams.zuhan.specialties': 'برانڈ حکمت عملی، بصری شناخت، ڈیزائن',
            
            'teams.gulshanara.name': 'پروفیسر گلشن آرا',
            'teams.gulshanara.role': 'تحقیق کی ماہر',
            'teams.gulshanara.experience': '14 سال کا تجربہ',
            'teams.gulshanara.bio': 'تحقیق کی ماہر جو مارکیٹ ریسرچ، تعلیمی تحریر، ڈیٹا تجزیہ، اور تحقیق کی طریقہ کار میں مہارت رکھتی ہے۔',
            'teams.gulshanara.specialties': 'مارکیٹ ریسرچ، ڈیٹا تجزیہ، تعلیمی تحریر',
            
            'teams.shahjahan.name': 'شاہجہان',
            'teams.shahjahan.role': 'ڈیٹا تجزیہ کار',
            'teams.shahjahan.experience': '5 سال کا تجربہ',
            'teams.shahjahan.bio': 'ڈیٹا تجزیہ کار جو باخبر فیصلہ سازی کے لیے بزنس انٹیلی جنس، پیشین گوئی ماڈلنگ، اور ڈیٹا ویژولائزیشن میں مہارت رکھتا ہے۔',
            'teams.shahjahan.specialties': 'ڈیٹا تجزیہ، بزنس انٹیلی جنس، ویژولائزیشن'
        }
    };

    // ================================================================
    // MERGE TRANSLATIONS INTO GLOBAL I18N
    // ================================================================
    function mergeTeamsTranslations() {
        if (typeof window.I18N !== 'undefined') {
            if (window.I18N.en) {
                Object.assign(window.I18N.en, teamsTranslations.en);
            }
            if (window.I18N.ur) {
                Object.assign(window.I18N.ur, teamsTranslations.ur);
            }
            console.log('✅ Teams translations merged successfully');
            return true;
        } else {
            console.warn('⚠️ I18N not found, teams translations not merged');
            return false;
        }
    }

    // ================================================================
    // APPLY LANGUAGE TO TEAMS PAGE
    // ================================================================
    function applyTeamsLanguage(lang) {
        if (!lang) {
            lang = localStorage.getItem('digicells-lang') || 'en';
        }
        
        console.log('🌍 Applying teams page language: ' + lang);
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (key && key.startsWith('teams.')) {
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
        
        console.log('✅ Teams page language applied: ' + lang);
    }

    // ================================================================
    // LISTEN FOR LANGUAGE CHANGES
    // ================================================================
    function listenForLanguageChanges() {
        window.addEventListener('storage', function(e) {
            if (e.key === 'digicells-lang') {
                const newLang = e.newValue || 'en';
                applyTeamsLanguage(newLang);
            }
        });
        
        if (typeof window.setLanguage === 'function') {
            const originalSetLanguage = window.setLanguage;
            window.setLanguage = function(lang) {
                originalSetLanguage(lang);
                applyTeamsLanguage(lang);
            };
            console.log('✅ Language change listener attached for teams page');
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
    function initTeamsPage() {
        console.log('📋 Initializing Teams page...');
        
        const merged = mergeTeamsTranslations();
        
        if (merged) {
            const savedLang = localStorage.getItem('digicells-lang') || 'en';
            applyTeamsLanguage(savedLang);
        }
        
        setTimeout(animateCounters, 300);
        listenForLanguageChanges();
        
        if (typeof window.initGlobalControls === 'function') {
            setTimeout(function() {
                const savedLang = localStorage.getItem('digicells-lang') || 'en';
                applyTeamsLanguage(savedLang);
            }, 200);
        }
        
        console.log('✅ Teams page initialized successfully');
    }

    // ================================================================
    // RUN ON DOM READY
    // ================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTeamsPage);
    } else {
        initTeamsPage();
    }

})();