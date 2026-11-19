// ================================================================
// assets/js/terms.js - Terms and Conditions Page Specific JS
// ================================================================

(function() {
    'use strict';

    // ================================================================
    // TERMS AND CONDITIONS TRANSLATIONS
    // ================================================================
    const termsTranslations = {
        en: {
            'terms.breadcrumb': 'Terms & Conditions',
            'terms.page.title': 'Terms &amp; <span>Conditions</span>',
            'terms.page.desc': 'Please read these terms and conditions carefully before using our services. By using our website, you agree to comply with and be bound by these terms.',
            'terms.effective_badge': '📋 Effective',
            'terms.last_updated_label': 'Last Updated:',
            'terms.last_updated_date': 'January 1, 2026',
            'terms.toc.title': '📑 Table of Contents',
            'terms.toc.s1': '1. Acceptance of Terms',
            'terms.toc.s2': '2. Description of Services',
            'terms.toc.s3': '3. User Obligations',
            'terms.toc.s4': '4. Intellectual Property',
            'terms.toc.s5': '5. Payment Terms',
            'terms.toc.s6': '6. Limitation of Liability',
            'terms.toc.s7': '7. Disclaimer of Warranties',
            'terms.toc.s8': '8. Indemnification',
            'terms.toc.s9': '9. Termination',
            'terms.toc.s10': '10. Governing Law',
            'terms.toc.s11': '11. Changes to Terms',
            'terms.toc.s12': '12. Contact Us',
            'terms.s1.title': '1. Acceptance of Terms',
            'terms.s1.p1': 'By accessing and using the Digicells International website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.',
            'terms.s1.p2': 'These terms apply to all visitors, users, and others who access or use our services. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.',
            'terms.s2.title': '2. Description of Services',
            'terms.s2.p1': 'Digicells International provides a range of digital services including but not limited to:',
            'terms.s2.li1': '<strong>Digital Marketing:</strong> SEO, AEO, GEO, content marketing, social media marketing, email marketing, and PPC advertising.',
            'terms.s2.li2': '<strong>Web Development:</strong> Frontend, backend, full-stack, and e-commerce development services.',
            'terms.s2.li3': '<strong>Branding &amp; Design:</strong> Logo design, graphic design, and UI/UX design services.',
            'terms.s2.li4': '<strong>IT Consulting:</strong> Digital strategy and technology consulting services.',
            'terms.s2.p2': 'We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.',
            'terms.s3.title': '3. User Obligations',
            'terms.s3.p1': 'As a user of our services, you agree to:',
            'terms.s3.li1': 'Provide accurate and complete information when using our services or contact forms.',
            'terms.s3.li2': 'Use our services in compliance with all applicable laws and regulations.',
            'terms.s3.li3': 'Not engage in any activity that could harm, disrupt, or interfere with our services or servers.',
            'terms.s3.li4': 'Not use our services for any unlawful or fraudulent purpose.',
            'terms.s3.li5': 'Not attempt to gain unauthorized access to any part of our services or systems.',
            'terms.s3.li6': 'Respect the intellectual property rights of Digicells International and third parties.',
            'terms.s4.title': '4. Intellectual Property',
            'terms.s4.p1': 'All content, materials, and intellectual property on the Digicells International website, including but not limited to:',
            'terms.s4.li1': 'Text, graphics, logos, icons, images, and software',
            'terms.s4.li2': 'Website design, layout, and structure',
            'terms.s4.li3': 'Trademarks, service marks, and trade names',
            'terms.s4.li4': 'All code, scripts, and proprietary technology',
            'terms.s4.p2': 'are the exclusive property of Digicells International or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent.',
            'terms.s5.title': '5. Payment Terms',
            'terms.s5.p1': 'For services requiring payment, the following terms apply:',
            'terms.s5.li1': 'All prices are quoted in the currency specified in the service agreement or invoice.',
            'terms.s5.li2': 'Payment is due within the timeframe specified in the invoice or service agreement.',
            'terms.s5.li3': 'We accept payment through approved payment methods as specified on our website or invoice.',
            'terms.s5.li4': 'Late payments may be subject to interest charges or service suspension.',
            'terms.s5.li5': 'All fees are non-refundable unless otherwise specified in the service agreement.',
            'terms.s5.p2': 'We reserve the right to modify our pricing at any time with prior notice to existing clients.',
            'terms.s6.title': '6. Limitation of Liability',
            'terms.s6.p1': 'To the maximum extent permitted by law, Digicells International shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:',
            'terms.s6.li1': 'Loss of profits, revenue, or business opportunities',
            'terms.s6.li2': 'Loss of data or information',
            'terms.s6.li3': 'Damages arising from the use or inability to use our services',
            'terms.s6.li4': 'Any unauthorized access to or alteration of your transmissions or data',
            'terms.s6.p2': 'Our total liability shall not exceed the amount paid by you, if any, for accessing our services during the twelve months preceding the claim.',
            'terms.s7.title': '7. Disclaimer of Warranties',
            'terms.s7.p1': 'Our services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We make no representations or warranties regarding:',
            'terms.s7.li1': 'The accuracy, reliability, or completeness of any content or information on our website',
            'terms.s7.li2': 'The availability, security, or uninterrupted operation of our services',
            'terms.s7.li3': 'That our services will meet your specific requirements or expectations',
            'terms.s7.p2': 'We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.',
            'terms.s8.title': '8. Indemnification',
            'terms.s8.p1': 'You agree to indemnify, defend, and hold harmless Digicells International, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising from:',
            'terms.s8.li1': 'Your use of our services in violation of these terms',
            'terms.s8.li2': 'Your violation of any applicable laws or regulations',
            'terms.s8.li3': 'Your infringement of any third-party rights, including intellectual property rights',
            'terms.s8.li4': 'Any content you submit, post, or transmit through our services',
            'terms.s9.title': '9. Termination',
            'terms.s9.p1': 'We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including but not limited to:',
            'terms.s9.li1': 'Breach of these Terms and Conditions',
            'terms.s9.li2': 'Violation of any applicable laws or regulations',
            'terms.s9.li3': 'Engaging in fraudulent or illegal activities',
            'terms.s9.li4': 'Non-payment of fees or charges',
            'terms.s9.p2': 'Upon termination, all rights granted to you under these terms will immediately cease, and you must stop using our services.',
            'terms.s10.title': '10. Governing Law',
            'terms.s10.p1': 'These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Pakistan.',
            'terms.s11.title': '11. Changes to These Terms',
            'terms.s11.p1': 'We reserve the right to modify or replace these Terms and Conditions at any time. We will notify you of any material changes by posting the updated terms on this page with a revised "Last Updated" date. Your continued use of our services after any changes constitutes your acceptance of the new terms.',
            'terms.s12.title': '12. Contact Us',
            'terms.s12.p1': 'If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us:',
            'terms.contact.email': '📧 Email:',
            'terms.contact.phone': '📞 Phone:',
            'terms.contact.address': '📍 Address:',
            'terms.contact.address_text': 'Pakistan',
            'terms.contact.response': 'We typically respond to inquiries within 48 hours.'
        },
        ur: {
            'terms.breadcrumb': 'شرائط و ضوابط',
            'terms.page.title': 'شرائط و <span>ضوابط</span>',
            'terms.page.desc': 'براہ کرم ہماری خدمات استعمال کرنے سے پہلے ان شرائط و ضوابط کو غور سے پڑھیں۔ ہماری ویب سائٹ استعمال کرکے، آپ ان شرائط کی تعمیل کرنے اور پابند ہونے پر متفق ہیں۔',
            'terms.effective_badge': '📋 مؤثر',
            'terms.last_updated_label': 'آخری تازہ کاری:',
            'terms.last_updated_date': 'یکم جنوری 2026',
            'terms.toc.title': '📑 مواد کا جدول',
            'terms.toc.s1': '1. شرائط کی قبولیت',
            'terms.toc.s2': '2. خدمات کی وضاحت',
            'terms.toc.s3': '3. صارف کی ذمہ داریاں',
            'terms.toc.s4': '4. دانشورانہ املاک',
            'terms.toc.s5': '5. ادائیگی کی شرائط',
            'terms.toc.s6': '6. ذمہ داری کی حد',
            'terms.toc.s7': '7. وارنٹیوں سے دستبرداری',
            'terms.toc.s8': '8. ہرجانے کی ادائیگی',
            'terms.toc.s9': '9. خاتمہ',
            'terms.toc.s10': '10. حکمران قانون',
            'terms.toc.s11': '11. شرائط میں تبدیلیاں',
            'terms.toc.s12': '12. ہم سے رابطہ کریں',
            'terms.s1.title': '1. شرائط کی قبولیت',
            'terms.s1.p1': 'ڈیجی سیلز انٹرنیشنل کی ویب سائٹ اور خدمات تک رسائی اور استعمال کرکے، آپ ان شرائط و ضوابط کی پابندی کرنے پر متفق ہیں۔ اگر آپ ان شرائط کے کسی بھی حصے سے متفق نہیں ہیں، تو براہ کرم ہماری خدمات استعمال نہ کریں۔',
            'terms.s1.p2': 'یہ شرائط تمام زائرین، صارفین، اور دوسروں پر لاگو ہوتی ہیں جو ہماری خدمات تک رسائی یا استعمال کرتے ہیں۔ ہماری خدمات استعمال کرکے، آپ تسلیم کرتے ہیں کہ آپ نے ان شرائط کو پڑھا، سمجھا اور ان کی پابندی کرنے پر متفق ہیں۔',
            'terms.s2.title': '2. خدمات کی وضاحت',
            'terms.s2.p1': 'ڈیجی سیلز انٹرنیشنل ڈیجیٹل خدمات کی ایک رینج فراہم کرتا ہے جس میں شامل ہیں لیکن ان تک محدود نہیں:',
            'terms.s2.li1': '<strong>ڈیجیٹل مارکیٹنگ:</strong> SEO، AEO، GEO، مواد کی مارکیٹنگ، سوشل میڈیا مارکیٹنگ، ای میل مارکیٹنگ، اور PPC تشہیر۔',
            'terms.s2.li2': '<strong>ویب ڈیولپمنٹ:</strong> فرنٹ اینڈ، بیک اینڈ، فل اسٹیک، اور ای کامرس ڈیولپمنٹ خدمات۔',
            'terms.s2.li3': '<strong>برانڈنگ اور ڈیزائن:</strong> لوگو ڈیزائن، گرافک ڈیزائن، اور UI/UX ڈیزائن خدمات۔',
            'terms.s2.li4': '<strong>آئی ٹی کنسلٹنگ:</strong> ڈیجیٹل حکمت عملی اور ٹیکنالوجی کنسلٹنگ خدمات۔',
            'terms.s2.p2': 'ہم کسی بھی وقت بغیر پیشگی اطلاع کے اپنی خدمات کے کسی بھی حصے میں ترمیم، معطلی، یا بند کرنے کا حق محفوظ رکھتے ہیں۔',
            'terms.s3.title': '3. صارف کی ذمہ داریاں',
            'terms.s3.p1': 'ہماری خدمات کے صارف کے طور پر، آپ اس بات پر متفق ہیں:',
            'terms.s3.li1': 'ہماری خدمات یا رابطہ فارمز استعمال کرتے وقت درست اور مکمل معلومات فراہم کریں۔',
            'terms.s3.li2': 'اپنی خدمات کو تمام قابل اطلاق قوانین اور ضوابط کی تعمیل میں استعمال کریں۔',
            'terms.s3.li3': 'کسی بھی ایسی سرگرمی میں مشغول نہ ہوں جو ہماری خدمات یا سرورز کو نقصان پہنچا سکتی ہے، خلل ڈال سکتی ہے یا مداخلت کر سکتی ہے۔',
            'terms.s3.li4': 'ہماری خدمات کو کسی غیر قانونی یا دھوکہ دہی کے مقصد کے لیے استعمال نہ کریں۔',
            'terms.s3.li5': 'ہماری خدمات یا نظاموں کے کسی بھی حصے تک غیر مجاز رسائی حاصل کرنے کی کوشش نہ کریں۔',
            'terms.s3.li6': 'ڈیجی سیلز انٹرنیشنل اور تھرڈ پارٹیز کے دانشورانہ املاک کے حقوق کا احترام کریں۔',
            'terms.s4.title': '4. دانشورانہ املاک',
            'terms.s4.p1': 'ڈیجی سیلز انٹرنیشنل کی ویب سائٹ پر تمام مواد، مواد، اور دانشورانہ املاک، بشمول لیکن ان تک محدود نہیں:',
            'terms.s4.li1': 'متن، گرافکس، لوگو، آئیکنز، تصاویر، اور سافٹ ویئر',
            'terms.s4.li2': 'ویب سائٹ ڈیزائن، ترتیب اور ڈھانچہ',
            'terms.s4.li3': 'ٹریڈ مارک، سروس مارک، اور تجارتی نام',
            'terms.s4.li4': 'تمام کوڈ، اسکرپٹس، اور ملکیتی ٹیکنالوجی',
            'terms.s4.p2': 'ڈیجی سیلز انٹرنیشنل یا اس کے لائسنس دہندگان کی خصوصی ملکیت ہیں اور کاپی رائٹ، ٹریڈ مارک، اور دیگر دانشورانہ املاک کے قوانین کے ذریعے محفوظ ہیں۔ آپ ہماری تحریری رضایت کے بغیر مشتق کاموں کو دوبارہ پیش، تقسیم، ترمیم یا تخلیق نہیں کر سکتے۔',
            'terms.s5.title': '5. ادائیگی کی شرائط',
            'terms.s5.p1': 'ادائیگی کی ضرورت والی خدمات کے لیے، درج ذیل شرائط لاگو ہوتی ہیں:',
            'terms.s5.li1': 'تمام قیمتیں سروس کے معاہدے یا انوائس میں مخصوص کرنسی میں درج ہیں۔',
            'terms.s5.li2': 'ادائیگی انوائس یا سروس کے معاہدے میں مخصوص مدت کے اندر واجب الادا ہے۔',
            'terms.s5.li3': 'ہم ہماری ویب سائٹ یا انوائس پر مخصوص کردہ منظور شدہ ادائیگی کے طریقوں کے ذریعے ادائیگی قبول کرتے ہیں۔',
            'terms.s5.li4': 'تاخیر سے ادائیگی سود کے چارجز یا سروس کی معطلی کے تابع ہو سکتی ہے۔',
            'terms.s5.li5': 'تمام فیسز غیر واپسی کے قابل ہیں جب تک کہ سروس کے معاہدے میں دوسری صورت میں وضاحت نہ کی گئی ہو۔',
            'terms.s5.p2': 'ہم موجودہ کلائنٹس کو پیشگی اطلاع کے ساتھ کسی بھی وقت اپنی قیمتوں میں ترمیم کرنے کا حق محفوظ رکھتے ہیں۔',
            'terms.s6.title': '6. ذمہ داری کی حد',
            'terms.s6.p1': 'قانون کے ذریعہ اجازت دی گئی زیادہ سے زیادہ حد تک، ڈیجی سیلز انٹرنیشنل کسی بھی بالواسطہ، واقعاتی، خصوصی، نتیجہ خیز، یا تعزیری نقصانات کے لیے ذمہ دار نہیں ہوگا، بشمول لیکن ان تک محدود نہیں:',
            'terms.s6.li1': 'منافع، آمدنی، یا کاروباری مواقع کا نقصان',
            'terms.s6.li2': 'ڈیٹا یا معلومات کا نقصان',
            'terms.s6.li3': 'ہماری خدمات کے استعمال یا استعمال میں نااہلی سے پیدا ہونے والے نقصانات',
            'terms.s6.li4': 'آپ کی ترسیلات یا ڈیٹا تک کوئی غیر مجاز رسائی یا تبدیلی',
            'terms.s6.p2': 'ہماری کل ذمہ داری آپ کی طرف سے ادا کی گئی رقم سے زیادہ نہیں ہوگی، اگر کوئی ہے، دعویٰ سے پہلے بارہ مہینوں کے دوران ہماری خدمات تک رسائی کے لیے۔',
            'terms.s7.title': '7. وارنٹیوں سے دستبرداری',
            'terms.s7.p1': 'ہماری خدمات "جیسا ہے" اور "جیسا دستیاب ہے" کی بنیاد پر کسی بھی قسم کی وارنٹی کے بغیر فراہم کی جاتی ہیں، خواہ ظاہر ہو یا مضمر۔ ہم اس بارے میں کوئی نمائندگی یا وارنٹی نہیں دیتے:',
            'terms.s7.li1': 'ہماری ویب سائٹ پر کسی بھی مواد یا معلومات کی درستگی، اعتبار، یا مکمل ہونے',
            'terms.s7.li2': 'ہماری خدمات کی دستیابی، سیکورٹی، یا بلاتعطل آپریشن',
            'terms.s7.li3': 'کہ ہماری خدمات آپ کی مخصوص ضروریات یا توقعات کو پوری کریں گی',
            'terms.s7.p2': 'ہم تمام وارنٹیوں سے دستبردار ہیں، بشمول لیکن تجارت، کسی خاص مقصد کے لیے فٹنس، اور عدم خلاف ورزی تک محدود نہیں۔',
            'terms.s8.title': '8. ہرجانے کی ادائیگی',
            'terms.s8.p1': 'آپ ڈیجی سیلز انٹرنیشنل، اس کے افسران، ڈائریکٹرز، ملازمین، ایجنٹس، اور الحاق شدہ کمپنیوں کو کسی بھی اور تمام دعووں، ذمہ داریوں، نقصانات، اخراجات، اور اخراجات (بشمول معقول قانونی فیس) سے پیدا ہونے والے معاوضے، دفاع، اور بے ضرر رکھنے پر متفق ہیں:',
            'terms.s8.li1': 'ان شرائط کی خلاف ورزی میں آپ کی خدمات کا استعمال',
            'terms.s8.li2': 'کسی بھی قابل اطلاق قوانین یا ضوابط کی آپ کی خلاف ورزی',
            'terms.s8.li3': 'کسی بھی تھرڈ پارٹی کے حقوق کی آپ کی خلاف ورزی، بشمول دانشورانہ املاک کے حقوق',
            'terms.s8.li4': 'کوئی بھی مواد جو آپ ہماری خدمات کے ذریعے جمع، پوسٹ، یا منتقل کرتے ہیں',
            'terms.s9.title': '9. خاتمہ',
            'terms.s9.p1': 'ہم کسی بھی وجہ سے، بشمول لیکن ان تک محدود نہیں، فوری طور پر، بغیر پیشگی اطلاع یا ذمہ داری کے آپ کی ہماری خدمات تک رسائی کو ختم یا معطل کر سکتے ہیں:',
            'terms.s9.li1': 'ان شرائط و ضوابط کی خلاف ورزی',
            'terms.s9.li2': 'کسی بھی قابل اطلاق قوانین یا ضوابط کی خلاف ورزی',
            'terms.s9.li3': 'دھوکہ دہی یا غیر قانونی سرگرمیوں میں ملوث ہونا',
            'terms.s9.li4': 'فیس یا چارجز کی عدم ادائیگی',
            'terms.s9.p2': 'خاتمے پر، ان شرائط کے تحت آپ کو دیے گئے تمام حقوق فوری طور پر ختم ہو جائیں گے، اور آپ کو ہماری خدمات کا استعمال بند کر دینا چاہیے۔',
            'terms.s10.title': '10. حکمران قانون',
            'terms.s10.p1': 'یہ شرائط و ضوابط پاکستان کے قوانین کے مطابق چلائے جائیں گے اور ان کی تشریح کی جائے گی۔ ان شرائط یا آپ کی خدمات کے استعمال سے پیدا ہونے والے کسی بھی تنازعہ کا فیصلہ پاکستان کی عدالتوں کے خصوصی دائرہ اختیار کے تابع ہوگا۔',
            'terms.s11.title': '11. شرائط میں تبدیلیاں',
            'terms.s11.p1': 'ہم کسی بھی وقت ان شرائط و ضوابط میں ترمیم یا تبدیلی کرنے کا حق محفوظ رکھتے ہیں۔ ہم آپ کو کسی بھی مادی تبدیلی کے بارے میں اس صفحہ پر اپ ڈیٹ کردہ شرائط کو نظر ثانی شدہ "آخری تازہ کاری" کی تاریخ کے ساتھ پوسٹ کرکے مطلع کریں گے۔ کسی بھی تبدیلی کے بعد ہماری خدمات کا آپ کا مسلسل استعمال نئی شرائط کی آپ کی قبولیت کو تشکیل دیتا ہے۔',
            'terms.s12.title': '12. ہم سے رابطہ کریں',
            'terms.s12.p1': 'اگر آپ کو ان شرائط و ضوابط کے بارے میں کوئی سوال، تشویش، یا درخواست ہے، تو براہ کرم ہم سے رابطہ کریں:',
            'terms.contact.email': '📧 ای میل:',
            'terms.contact.phone': '📞 فون:',
            'terms.contact.address': '📍 پتہ:',
            'terms.contact.address_text': 'پاکستان',
            'terms.contact.response': 'ہم عام طور پر پوچھ گچھ کا 48 گھنٹوں کے اندر جواب دیتے ہیں۔'
        }
    };

    // ================================================================
    // MERGE TRANSLATIONS INTO GLOBAL I18N
    // ================================================================
    function mergeTermsTranslations() {
        if (typeof window.I18N !== 'undefined') {
            // Merge English translations
            if (window.I18N.en) {
                Object.assign(window.I18N.en, termsTranslations.en);
            }
            // Merge Urdu translations
            if (window.I18N.ur) {
                Object.assign(window.I18N.ur, termsTranslations.ur);
            }
            console.log('✅ Terms translations merged successfully');
            return true;
        } else {
            console.warn('⚠️ I18N not found, terms translations not merged');
            return false;
        }
    }

    // ================================================================
    // APPLY LANGUAGE TO TERMS PAGE
    // ================================================================
    function applyTermsLanguage(lang) {
        if (!lang) {
            lang = localStorage.getItem('digicells-lang') || 'en';
        }
        
        console.log('🌍 Applying terms page language: ' + lang);
        
        // Update all terms-specific elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            // Check if this is a terms key (starts with 'terms.')
            if (key && key.startsWith('terms.')) {
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
        
        console.log('✅ Terms page language applied: ' + lang);
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
                applyTermsLanguage(newLang);
            }
        });
        
        // Override the global setLanguage to also apply terms translations
        if (typeof window.setLanguage === 'function') {
            const originalSetLanguage = window.setLanguage;
            window.setLanguage = function(lang) {
                // Call original function
                originalSetLanguage(lang);
                // Also apply terms-specific translations
                applyTermsLanguage(lang);
            };
            console.log('✅ Language change listener attached for terms page');
        }
    }

    // ================================================================
    // INITIALIZE
    // ================================================================
    function initTermsPage() {
        console.log('📋 Initializing Terms and Conditions page...');
        
        // 1. Merge translations
        const merged = mergeTermsTranslations();
        
        // 2. Apply current language to terms elements
        if (merged) {
            const savedLang = localStorage.getItem('digicells-lang') || 'en';
            applyTermsLanguage(savedLang);
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
                applyTermsLanguage(savedLang);
            }, 200);
        }
        
        console.log('✅ Terms and Conditions page initialized successfully');
    }

    // ================================================================
    // RUN ON DOM READY
    // ================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTermsPage);
    } else {
        // DOM already loaded
        initTermsPage();
    }

})();