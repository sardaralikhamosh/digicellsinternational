// ================================================================
// assets/js/privacy-policy.js - Privacy Policy Page Specific JS
// ================================================================

(function() {
    'use strict';

    // ================================================================
    // PRIVACY POLICY TRANSLATIONS
    // ================================================================
    const privacyTranslations = {
        en: {
            'privacy.breadcrumb': 'Privacy Policy',
            'privacy.page.title': 'Privacy <span>Policy</span>',
            'privacy.page.desc': 'Your privacy is important to us. This policy explains how Digicells International collects, uses, and protects your personal information.',
            'privacy.effective_badge': '📋 Effective',
            'privacy.last_updated_label': 'Last Updated:',
            'privacy.last_updated_date': 'January 1, 2026',
            'privacy.toc.title': '📑 Table of Contents',
            'privacy.toc.s1': '1. Information We Collect',
            'privacy.toc.s2': '2. How We Use Your Information',
            'privacy.toc.s3': '3. Information Sharing',
            'privacy.toc.s4': '4. Data Security',
            'privacy.toc.s5': '5. Your Rights',
            'privacy.toc.s6': '6. Cookies',
            'privacy.toc.s7': '7. Third-Party Links',
            'privacy.toc.s8': "8. Children's Privacy",
            'privacy.toc.s9': '9. International Transfers',
            'privacy.toc.s10': '10. Changes to This Policy',
            'privacy.toc.s11': '11. Contact Us',
            'privacy.s1.title': '1. Information We Collect',
            'privacy.s1.p1': 'At Digicells International, we collect information to provide better services to our clients and visitors. The types of information we collect include:',
            'privacy.s1.li1': '<strong>Personal Information:</strong> Name, email address, phone number, company name, and any other information you voluntarily provide through our contact forms or communication channels.',
            'privacy.s1.li2': '<strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.',
            'privacy.s1.li3': '<strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers for analytics and security purposes.',
            'privacy.s1.li4': '<strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience and analyze site traffic.',
            'privacy.s2.title': '2. How We Use Your Information',
            'privacy.s2.p1': 'We use the collected information for the following purposes:',
            'privacy.s2.li1': '<strong>Service Delivery:</strong> To provide, maintain, and improve our digital marketing, web development, branding, and IT consulting services.',
            'privacy.s2.li2': '<strong>Communication:</strong> To respond to inquiries, send project updates, and share relevant information about our services.',
            'privacy.s2.li3': '<strong>Analytics:</strong> To understand how visitors interact with our website and optimize user experience.',
            'privacy.s2.li4': '<strong>Marketing:</strong> To send promotional materials, newsletters, and service updates (with your consent).',
            'privacy.s2.li5': '<strong>Compliance:</strong> To comply with legal obligations and enforce our terms of service.',
            'privacy.s3.title': '3. Information Sharing',
            'privacy.s3.p1': 'We respect your privacy and do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:',
            'privacy.s3.li1': '<strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website, conducting business, or serving clients, provided they agree to keep information confidential.',
            'privacy.s3.li2': '<strong>Legal Requirements:</strong> When required by law, court order, or government regulation to protect our rights or the rights of others.',
            'privacy.s3.li3': '<strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred to the new entity.',
            'privacy.s4.title': '4. Data Security',
            'privacy.s4.p1': 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:',
            'privacy.s4.li1': 'SSL/TLS encryption for data transmission',
            'privacy.s4.li2': 'Secure servers with firewall protection',
            'privacy.s4.li3': 'Regular security audits and vulnerability assessments',
            'privacy.s4.li4': 'Access controls and employee training on data protection',
            'privacy.s4.highlight': '🔒 <strong>Our Commitment:</strong> While we strive to protect your personal information, no method of transmission over the internet is 100% secure. We continuously improve our security practices to safeguard your data.',
            'privacy.s5.title': '5. Your Rights',
            'privacy.s5.p1': 'Depending on your location, you may have the following rights regarding your personal information:',
            'privacy.s5.li1': '<strong>Access:</strong> Request a copy of the personal information we hold about you.',
            'privacy.s5.li2': '<strong>Correction:</strong> Request correction of inaccurate or incomplete information.',
            'privacy.s5.li3': '<strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations).',
            'privacy.s5.li4': '<strong>Restriction:</strong> Request restriction of processing your information.',
            'privacy.s5.li5': '<strong>Data Portability:</strong> Request transfer of your data to another service provider.',
            'privacy.s5.li6': '<strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time.',
            'privacy.s5.p2': 'To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.',
            'privacy.s6.title': '6. Cookies',
            'privacy.s6.p1': 'Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:',
            'privacy.s6.li1': 'Remember your preferences and settings',
            'privacy.s6.li2': 'Analyze site traffic and user behavior',
            'privacy.s6.li3': 'Provide personalized content and recommendations',
            'privacy.s6.li4': 'Enable social media integration and sharing features',
            'privacy.s6.p2': 'You can control cookie settings through your browser preferences. Please note that disabling cookies may affect your experience on our website.',
            'privacy.s7.title': '7. Third-Party Links',
            'privacy.s7.p1': 'Our website may contain links to third-party websites, including social media platforms, payment gateways, and partner sites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.',
            'privacy.s8.title': "8. Children's Privacy",
            'privacy.s8.p1': 'Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to remove that information.',
            'privacy.s9.title': '9. International Data Transfers',
            'privacy.s9.p1': 'As a global organization, we may transfer your personal information to countries outside your jurisdiction. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable privacy laws, including the GDPR and other international standards.',
            'privacy.s10.title': '10. Changes to This Privacy Policy',
            'privacy.s10.p1': 'We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.',
            'privacy.s11.title': '11. Contact Us',
            'privacy.s11.p1': 'If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:',
            'privacy.contact.email': '📧 Email:',
            'privacy.contact.phone': '📞 Phone:',
            'privacy.contact.address': '📍 Address:',
            'privacy.contact.address_text': 'Pakistan',
            'privacy.contact.response': 'We typically respond to privacy-related inquiries within 48 hours.'
        },
        ur: {
            'privacy.breadcrumb': 'رازداری کی پالیسی',
            'privacy.page.title': 'رازداری کی <span>پالیسی</span>',
            'privacy.page.desc': 'آپ کی رازداری ہمارے لیے اہم ہے۔ یہ پالیسی وضاحت کرتی ہے کہ ڈیجی سیلز انٹرنیشنل آپ کی ذاتی معلومات کو کیسے جمع، استعمال اور محفوظ کرتا ہے۔',
            'privacy.effective_badge': '📋 مؤثر',
            'privacy.last_updated_label': 'آخری تازہ کاری:',
            'privacy.last_updated_date': 'یکم جنوری 2026',
            'privacy.toc.title': '📑 مواد کا جدول',
            'privacy.toc.s1': '1. ہم کیا معلومات جمع کرتے ہیں',
            'privacy.toc.s2': '2. ہم آپ کی معلومات کا استعمال کیسے کرتے ہیں',
            'privacy.toc.s3': '3. معلومات کا اشتراک',
            'privacy.toc.s4': '4. ڈیٹا سیکیورٹی',
            'privacy.toc.s5': '5. آپ کے حقوق',
            'privacy.toc.s6': '6. کوکیز',
            'privacy.toc.s7': '7. تھرڈ پارٹی لنکس',
            'privacy.toc.s8': "8. بچوں کی رازداری",
            'privacy.toc.s9': '9. بین الاقوامی منتقلی',
            'privacy.toc.s10': '10. اس پالیسی میں تبدیلیاں',
            'privacy.toc.s11': '11. ہم سے رابطہ کریں',
            'privacy.s1.title': '1. ہم کیا معلومات جمع کرتے ہیں',
            'privacy.s1.p1': 'ڈیجی سیلز انٹرنیشنل میں، ہم اپنے کلائنٹس اور زائرین کو بہتر خدمات فراہم کرنے کے لیے معلومات جمع کرتے ہیں۔ ہم جو معلومات جمع کرتے ہیں ان میں شامل ہیں:',
            'privacy.s1.li1': '<strong>ذاتی معلومات:</strong> نام، ای میل ایڈریس، فون نمبر، کمپنی کا نام، اور کوئی بھی دوسری معلومات جو آپ ہمارے رابطہ فارمز یا مواصلاتی چینلز کے ذریعے فراہم کرتے ہیں۔',
            'privacy.s1.li2': '<strong>استعمال کا ڈیٹا:</strong> معلومات کے بارے میں کہ آپ ہماری ویب سائٹ کے ساتھ کیسے تعامل کرتے ہیں، بشمول دیکھے گئے صفحات، گزارا ہوا وقت، اور حوالہ جاتی URLs۔',
            'privacy.s1.li3': '<strong>ڈیوائس کی معلومات:</strong> براؤزر کی قسم، آپریٹنگ سسٹم، IP ایڈریس، اور تجزیات اور حفاظتی مقاصد کے لیے ڈیوائس کی شناخت کنندگان۔',
            'privacy.s1.li4': '<strong>کوکیز:</strong> چھوٹی ڈیٹا فائلیں جو آپ کے ڈیوائس پر آپ کے براؤزنگ کے تجربے کو بہتر بنانے اور سائٹ ٹریفک کا تجزیہ کرنے کے لیے محفوظ کی جاتی ہیں۔',
            'privacy.s2.title': '2. ہم آپ کی معلومات کا استعمال کیسے کرتے ہیں',
            'privacy.s2.p1': 'ہم جمع کی گئی معلومات کو درج ذیل مقاصد کے لیے استعمال کرتے ہیں:',
            'privacy.s2.li1': '<strong>سروس کی فراہمی:</strong> ہماری ڈیجیٹل مارکیٹنگ، ویب ڈیولپمنٹ، برانڈنگ، اور آئی ٹی کنسلٹنگ خدمات فراہم کرنے، برقرار رکھنے اور بہتر بنانے کے لیے۔',
            'privacy.s2.li2': '<strong>مواصلات:</strong> پوچھ گچھ کا جواب دینے، پروجیکٹ کی تازہ کاریاں بھیجنے، اور ہماری خدمات کے بارے میں متعلقہ معلومات شیئر کرنے کے لیے۔',
            'privacy.s2.li3': '<strong>تجزیات:</strong> یہ سمجھنے کے لیے کہ زائرین ہماری ویب سائٹ کے ساتھ کیسے تعامل کرتے ہیں اور صارف کے تجربے کو بہتر بنانے کے لیے۔',
            'privacy.s2.li4': '<strong>مارکیٹنگ:</strong> تشہیری مواد، نیوز لیٹرز، اور سروس کی تازہ کاریاں بھیجنے کے لیے (آپ کی رضامندی سے)۔',
            'privacy.s2.li5': '<strong>تعمیل:</strong> قانونی ذمہ داریوں کی تعمیل اور ہماری سروس کی شرائط کو نافذ کرنے کے لیے۔',
            'privacy.s3.title': '3. معلومات کا اشتراک',
            'privacy.s3.p1': 'ہم آپ کی رازداری کا احترام کرتے ہیں اور آپ کی ذاتی معلومات کو تھرڈ پارٹیز کو فروخت، تجارت یا کرایہ پر نہیں دیتے۔ ہم درج ذیل حالات میں آپ کی معلومات کا اشتراک کر سکتے ہیں:',
            'privacy.s3.li1': '<strong>سروس فراہم کنندگان:</strong> قابل اعتماد تھرڈ پارٹی وینڈرز کے ساتھ جو ہماری ویب سائٹ کو چلانے، کاروبار کرنے، یا کلائنٹس کی خدمت میں ہماری مدد کرتے ہیں، بشرطیکہ وہ معلومات کو خفیہ رکھنے پر متفق ہوں۔',
            'privacy.s3.li2': '<strong>قانونی تقاضے:</strong> جب قانون، عدالتی حکم، یا سرکاری ضابطے کے ذریعے ہمارے حقوق یا دوسروں کے حقوق کے تحفظ کے لیے ضروری ہو۔',
            'privacy.s3.li3': '<strong>کاروباری منتقلی:</strong> انضمام، حصول، یا اثاثوں کی فروخت کی صورت میں، آپ کی معلومات نئی ہستی کو منتقل کی جا سکتی ہیں۔',
            'privacy.s4.title': '4. ڈیٹا سیکیورٹی',
            'privacy.s4.p1': 'ہم آپ کی ذاتی معلومات کو غیر مجاز رسائی، تبدیلی، افشاء، یا تباہی سے بچانے کے لیے صنعت کے معیاری حفاظتی اقدامات نافذ کرتے ہیں۔ ان اقدامات میں شامل ہیں:',
            'privacy.s4.li1': 'ڈیٹا کی ترسیل کے لیے SSL/TLS انکرپشن',
            'privacy.s4.li2': 'فائر وال تحفظ کے ساتھ محفوظ سرورز',
            'privacy.s4.li3': 'باقاعدہ سیکیورٹی آڈٹ اور کمزوریوں کا جائزہ',
            'privacy.s4.li4': 'رسائی کنٹرول اور ڈیٹا کے تحفظ پر ملازمین کی تربیت',
            'privacy.s4.highlight': '🔒 <strong>ہمارا عزم:</strong> اگرچہ ہم آپ کی ذاتی معلومات کے تحفظ کی کوشش کرتے ہیں، انٹرنیٹ پر ترسیل کا کوئی بھی طریقہ 100% محفوظ نہیں ہے۔ ہم آپ کے ڈیٹا کی حفاظت کے لیے اپنے سیکیورٹی طریقوں کو مسلسل بہتر کرتے ہیں۔',
            'privacy.s5.title': '5. آپ کے حقوق',
            'privacy.s5.p1': 'آپ کے مقام کے لحاظ سے، آپ کو اپنی ذاتی معلومات کے حوالے سے درج ذیل حقوق حاصل ہو سکتے ہیں:',
            'privacy.s5.li1': '<strong>رسائی:</strong> ہمارے پاس موجود ذاتی معلومات کی کاپی کی درخواست کریں۔',
            'privacy.s5.li2': '<strong>ترمیم:</strong> غلط یا نامکمل معلومات کی اصلاح کی درخواست کریں۔',
            'privacy.s5.li3': '<strong>حذف:</strong> اپنی ذاتی معلومات کو حذف کرنے کی درخواست کریں (قانونی ذمہ داریوں کے تحت)۔',
            'privacy.s5.li4': '<strong>پابندی:</strong> آپ کی معلومات کی پروسیسنگ کی پابندی کی درخواست کریں۔',
            'privacy.s5.li5': '<strong>ڈیٹا کی منتقلی:</strong> اپنے ڈیٹا کو کسی دوسرے سروس فراہم کنندہ کو منتقل کرنے کی درخواست کریں۔',
            'privacy.s5.li6': '<strong>رضامندی واپس لینا:</strong> کسی بھی وقت مارکیٹنگ مواصلات کے لیے رضامندی واپس لیں۔',
            'privacy.s5.p2': 'ان میں سے کسی بھی حق کو استعمال کرنے کے لیے، براہ کرم نیچے "ہم سے رابطہ کریں" سیکشن میں فراہم کردہ معلومات کا استعمال کرتے ہوئے ہم سے رابطہ کریں۔',
            'privacy.s6.title': '6. کوکیز',
            'privacy.s6.p1': 'ہماری ویب سائٹ آپ کے براؤزنگ کے تجربے کو بہتر بنانے کے لیے کوکیز کا استعمال کرتی ہے۔ کوکیز چھوٹی ٹیکسٹ فائلیں ہیں جو آپ کے ڈیوائس پر محفوظ کی جاتی ہیں جو ہماری مدد کرتی ہیں:',
            'privacy.s6.li1': 'آپ کی ترجیحات اور سیٹنگز کو یاد رکھنا',
            'privacy.s6.li2': 'سائٹ ٹریفک اور صارف کے رویے کا تجزیہ کرنا',
            'privacy.s6.li3': 'ذاتی نوعیت کا مواد اور سفارشات فراہم کرنا',
            'privacy.s6.li4': 'سوشل میڈیا انضمام اور شیئرنگ کی خصوصیات کو فعال کرنا',
            'privacy.s6.p2': 'آپ اپنے براؤزر کی ترجیحات کے ذریعے کوکی سیٹنگز کو کنٹرول کر سکتے ہیں۔ براہ کرم نوٹ کریں کہ کوکیز کو غیر فعال کرنے سے ہماری ویب سائٹ پر آپ کے تجربے پر اثر پڑ سکتا ہے۔',
            'privacy.s7.title': '7. تھرڈ پارٹی لنکس',
            'privacy.s7.p1': 'ہماری ویب سائٹ میں تھرڈ پارٹی ویب سائٹس کے لنکس ہو سکتے ہیں، بشمول سوشل میڈیا پلیٹ فارمز، ادائیگی کے گیٹ ویز، اور پارٹنر سائٹس۔ ہم ان بیرونی سائٹس کی رازداری کے طریقوں یا مواد کے ذمہ دار نہیں ہیں۔ ہم آپ کو کسی بھی تھرڈ پارٹی سائٹس کی رازداری کی پالیسیوں کا جائزہ لینے کی ترغیب دیتے ہیں جو آپ دیکھتے ہیں۔',
            'privacy.s8.title': "8. بچوں کی رازداری",
            'privacy.s8.p1': 'ہماری خدمات 16 سال سے کم عمر کے افراد کے لیے نہیں ہیں۔ ہم جان بوجھ کر بچوں سے ذاتی معلومات جمع نہیں کرتے۔ اگر آپ والدین یا سرپرست ہیں اور آپ کو یقین ہے کہ آپ کے بچے نے ہمیں ذاتی معلومات فراہم کی ہیں، تو براہ کرم ہم سے رابطہ کریں، اور ہم اس معلومات کو ہٹانے کے لیے اقدامات کریں گے۔',
            'privacy.s9.title': '9. بین الاقوامی ڈیٹا کی منتقلی',
            'privacy.s9.p1': 'ایک عالمی تنظیم کے طور پر، ہم آپ کی ذاتی معلومات کو آپ کے دائرہ اختیار سے باہر ممالک میں منتقل کر سکتے ہیں۔ ہم اس بات کو یقینی بناتے ہیں کہ آپ کے ڈیٹا کے تحفظ کے لیے لاگو رازداری کے قوانین کے مطابق مناسب تحفظات موجود ہیں، بشمول GDPR اور دیگر بین الاقوامی معیارات۔',
            'privacy.s10.title': '10. اس رازداری کی پالیسی میں تبدیلیاں',
            'privacy.s10.p1': 'ہم اس رازداری کی پالیسی کو وقتاً فوقتاً اپنے طریقوں یا قانونی تقاضوں میں تبدیلیوں کی عکاسی کرنے کے لیے اپ ڈیٹ کر سکتے ہیں۔ ہم آپ کو کسی بھی مادی تبدیلی کے بارے میں اس صفحہ پر اپ ڈیٹ کردہ پالیسی کو نظر ثانی شدہ "آخری تازہ کاری" کی تاریخ کے ساتھ پوسٹ کرکے مطلع کریں گے۔ ہم آپ کو اس پالیسی کا وقتاً فوقتاً جائزہ لینے کی ترغیب دیتے ہیں۔',
            'privacy.s11.title': '11. ہم سے رابطہ کریں',
            'privacy.s11.p1': 'اگر آپ کو اس رازداری کی پالیسی یا ہمارے ڈیٹا کے طریقوں کے بارے میں کوئی سوال، تشویش، یا درخواست ہے، تو براہ کرم ہم سے رابطہ کریں:',
            'privacy.contact.email': '📧 ای میل:',
            'privacy.contact.phone': '📞 فون:',
            'privacy.contact.address': '📍 پتہ:',
            'privacy.contact.address_text': 'پاکستان',
            'privacy.contact.response': 'ہم عام طور پر رازداری سے متعلق پوچھ گچھ کا 48 گھنٹوں کے اندر جواب دیتے ہیں۔'
        }
    };

    // ================================================================
    // MERGE TRANSLATIONS INTO GLOBAL I18N
    // ================================================================
    function mergePrivacyTranslations() {
        if (typeof window.I18N !== 'undefined') {
            // Merge English translations
            if (window.I18N.en) {
                Object.assign(window.I18N.en, privacyTranslations.en);
            }
            // Merge Urdu translations
            if (window.I18N.ur) {
                Object.assign(window.I18N.ur, privacyTranslations.ur);
            }
            console.log('✅ Privacy policy translations merged successfully');
            return true;
        } else {
            console.warn('⚠️ I18N not found, privacy translations not merged');
            return false;
        }
    }

    // ================================================================
    // APPLY LANGUAGE TO PRIVACY PAGE
    // ================================================================
    function applyPrivacyLanguage(lang) {
        if (!lang) {
            lang = localStorage.getItem('digicells-lang') || 'en';
        }
        
        console.log('🌍 Applying privacy page language: ' + lang);
        
        // Update all privacy-specific elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            // Check if this is a privacy key (starts with 'privacy.')
            if (key && key.startsWith('privacy.')) {
                if (window.I18N && window.I18N[lang] && window.I18N[lang][key] !== undefined) {
                    const translation = window.I18N[lang][key];
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
            }
        });
        
        console.log('✅ Privacy page language applied: ' + lang);
    }

    // ================================================================
    // SMOOTH SCROLL FOR TABLE OF CONTENTS
    // ================================================================
    function initSmoothScroll() {
        const tocLinks = document.querySelectorAll('.table-of-contents a[href^="#"]');
        tocLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 100;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    // Update URL hash without scrolling
                    history.pushState(null, null, targetId);
                }
            });
        });
    }

    // ================================================================
    // LISTEN FOR LANGUAGE CHANGES
    // ================================================================
    function listenForLanguageChanges() {
        // Listen for storage changes (when language is changed in another tab)
        window.addEventListener('storage', function(e) {
            if (e.key === 'digicells-lang') {
                const newLang = e.newValue || 'en';
                applyPrivacyLanguage(newLang);
            }
        });
        
        // Override the global setLanguage to also apply privacy translations
        if (typeof window.setLanguage === 'function') {
            const originalSetLanguage = window.setLanguage;
            window.setLanguage = function(lang) {
                // Call original function
                originalSetLanguage(lang);
                // Also apply privacy-specific translations
                applyPrivacyLanguage(lang);
            };
            console.log('✅ Language change listener attached');
        }
    }

    // ================================================================
    // INITIALIZE
    // ================================================================
    function initPrivacyPage() {
        console.log('📋 Initializing Privacy Policy page...');
        
        // 1. Merge translations
        const merged = mergePrivacyTranslations();
        
        // 2. Apply current language to privacy elements
        if (merged) {
            const savedLang = localStorage.getItem('digicells-lang') || 'en';
            applyPrivacyLanguage(savedLang);
        }
        
        // 3. Initialize smooth scroll
        initSmoothScroll();
        
        // 4. Listen for language changes
        listenForLanguageChanges();
        
        // 5. Also apply when main.js has finished loading
        if (typeof window.initGlobalControls === 'function') {
            // Wait for main.js to finish
            setTimeout(function() {
                const savedLang = localStorage.getItem('digicells-lang') || 'en';
                applyPrivacyLanguage(savedLang);
            }, 200);
        }
        
        console.log('✅ Privacy Policy page initialized successfully');
    }

    // ================================================================
    // RUN ON DOM READY
    // ================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPrivacyPage);
    } else {
        // DOM already loaded
        initPrivacyPage();
    }

})();