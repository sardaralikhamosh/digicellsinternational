// ================================================================
// assets/js/pricing.js - Pricing Page Specific JS
// ================================================================

(function() {
    'use strict';

    // ================================================================
    // CURRENCY CONFIGURATION
    // ================================================================
    const CURRENCIES = {
        USD: { symbol: '$', rate: 1, label: 'USD - US Dollar' },
        PKR: { symbol: '₨', rate: 280, label: 'PKR - Pakistani Rupee' },
        EUR: { symbol: '€', rate: 0.92, label: 'EUR - Euro' },
        GBP: { symbol: '£', rate: 0.79, label: 'GBP - British Pound' },
        CAD: { symbol: 'CA$', rate: 1.37, label: 'CAD - Canadian Dollar' },
        AUD: { symbol: 'A$', rate: 1.53, label: 'AUD - Australian Dollar' },
        JPY: { symbol: '¥', rate: 148.50, label: 'JPY - Japanese Yen' },
        CNY: { symbol: '¥', rate: 7.24, label: 'CNY - Chinese Yuan' },
        INR: { symbol: '₹', rate: 83.50, label: 'INR - Indian Rupee' },
        AED: { symbol: 'د.إ', rate: 3.67, label: 'AED - UAE Dirham' },
        SAR: { symbol: 'ر.س', rate: 3.75, label: 'SAR - Saudi Riyal' },
        QAR: { symbol: 'ر.ق', rate: 3.64, label: 'QAR - Qatari Riyal' },
        KWD: { symbol: 'د.ك', rate: 0.31, label: 'KWD - Kuwaiti Dinar' },
        BHD: { symbol: 'ب.د', rate: 0.38, label: 'BHD - Bahraini Dinar' },
        OMR: { symbol: 'ر.ع', rate: 0.38, label: 'OMR - Omani Rial' },
        CHF: { symbol: 'Fr', rate: 0.88, label: 'CHF - Swiss Franc' },
        SEK: { symbol: 'kr', rate: 10.45, label: 'SEK - Swedish Krona' },
        NOK: { symbol: 'kr', rate: 10.65, label: 'NOK - Norwegian Krone' },
        DKK: { symbol: 'kr', rate: 6.90, label: 'DKK - Danish Krone' },
        SGD: { symbol: 'S$', rate: 1.34, label: 'SGD - Singapore Dollar' },
        MYR: { symbol: 'RM', rate: 4.72, label: 'MYR - Malaysian Ringgit' },
        THB: { symbol: '฿', rate: 36.25, label: 'THB - Thai Baht' },
        VND: { symbol: '₫', rate: 24950, label: 'VND - Vietnamese Dong' },
        PHP: { symbol: '₱', rate: 56.80, label: 'PHP - Philippine Peso' },
        IDR: { symbol: 'Rp', rate: 15700, label: 'IDR - Indonesian Rupiah' }
    };

    // ================================================================
    // PRICING DATA
    // ================================================================
    const PRICING_DATA = {
        'digital-marketing': {
            label: 'Digital Marketing',
            icon: '📈',
            packages: [
                {
                    name: 'Starter',
                    badge: 'Essential',
                    price_usd: 499,
                    features: [
                        'SEO Audit & Analysis',
                        'Keyword Research (50)',
                        'Content Strategy (5 pages)',
                        'Monthly Performance Report',
                        'Email Support'
                    ],
                    disabled: []
                },
                {
                    name: 'Professional',
                    badge: 'Popular Choice',
                    price_usd: 999,
                    features: [
                        'Comprehensive SEO Strategy',
                        'Keyword Research (200)',
                        'Content Strategy (20 pages)',
                        'Social Media Management',
                        'Monthly Performance Report',
                        'PPC Campaign Setup',
                        'Priority Email & Chat Support'
                    ],
                    disabled: [],
                    featured: true
                },
                {
                    name: 'Enterprise',
                    badge: 'Premium',
                    price_usd: 2499,
                    features: [
                        'Full-Service Digital Marketing',
                        'SEO + AEO + GEO Strategy',
                        'Unlimited Keyword Research',
                        'Content Strategy (Unlimited)',
                        'Social Media Management',
                        'PPC Campaign Management',
                        'Monthly Performance Report',
                        'Weekly Strategy Calls',
                        '24/7 Priority Support'
                    ],
                    disabled: []
                }
            ]
        },
        'web-development': {
            label: 'Web Development',
            icon: '💻',
            packages: [
                {
                    name: 'Basic',
                    badge: 'Essential',
                    price_usd: 799,
                    features: [
                        '5-Page Website',
                        'Responsive Design',
                        'Basic SEO Setup',
                        'Contact Form',
                        '1 Month Support'
                    ],
                    disabled: []
                },
                {
                    name: 'Professional',
                    badge: 'Popular Choice',
                    price_usd: 1499,
                    features: [
                        '10-Page Website',
                        'Responsive Design',
                        'Advanced SEO Setup',
                        'Custom Contact Forms',
                        'Blog Integration',
                        '3 Months Support',
                        'Performance Optimization'
                    ],
                    disabled: [],
                    featured: true
                },
                {
                    name: 'Enterprise',
                    badge: 'Premium',
                    price_usd: 3499,
                    features: [
                        'Unlimited Pages',
                        'Custom Web Application',
                        'Advanced SEO Setup',
                        'E-Commerce Integration',
                        'API Development',
                        '12 Months Support',
                        'Performance Optimization',
                        'Security Implementation',
                        'Cloud Hosting Setup'
                    ],
                    disabled: []
                }
            ]
        },
        'branding-design': {
            label: 'Branding & Design',
            icon: '🎨',
            packages: [
                {
                    name: 'Starter',
                    badge: 'Essential',
                    price_usd: 399,
                    features: [
                        'Logo Design (3 Concepts)',
                        'Brand Color Palette',
                        'Typography Selection',
                        'Social Media Kit',
                        '1 Revision Round'
                    ],
                    disabled: []
                },
                {
                    name: 'Professional',
                    badge: 'Popular Choice',
                    price_usd: 899,
                    features: [
                        'Logo Design (5 Concepts)',
                        'Brand Color Palette',
                        'Typography Selection',
                        'Social Media Kit',
                        'Brand Guidelines',
                        '3 Revision Rounds',
                        'Stationery Design'
                    ],
                    disabled: [],
                    featured: true
                },
                {
                    name: 'Enterprise',
                    badge: 'Premium',
                    price_usd: 1999,
                    features: [
                        'Logo Design (Unlimited)',
                        'Complete Brand Identity',
                        'Brand Guidelines',
                        'Social Media Kit',
                        'Stationery Design',
                        'UI/UX Design',
                        'Marketing Collateral',
                        'Unlimited Revisions',
                        'Brand Strategy Consultation'
                    ],
                    disabled: []
                }
            ]
        },
        'it-consulting': {
            label: 'IT Consulting',
            icon: '🧠',
            packages: [
                {
                    name: 'Starter',
                    badge: 'Essential',
                    price_usd: 599,
                    features: [
                        'Initial Consultation',
                        'Technology Assessment',
                        'Strategic Recommendations',
                        '1 Month Follow-up'
                    ],
                    disabled: []
                },
                {
                    name: 'Professional',
                    badge: 'Popular Choice',
                    price_usd: 1499,
                    features: [
                        'Comprehensive Technology Audit',
                        'Digital Strategy Development',
                        'Implementation Roadmap',
                        'Team Training',
                        '3 Months Support',
                        'Quarterly Review'
                    ],
                    disabled: [],
                    featured: true
                },
                {
                    name: 'Enterprise',
                    badge: 'Premium',
                    price_usd: 2999,
                    features: [
                        'Full Digital Transformation Strategy',
                        'Technology Infrastructure Design',
                        'Implementation Management',
                        'Team Training & Workshops',
                        '12 Months Support',
                        'Monthly Review & Optimization',
                        'Risk Assessment & Mitigation'
                    ],
                    disabled: []
                }
            ]
        }
    };

    // ================================================================
    // STATE
    // ================================================================
    let currentCurrency = 'USD';
    let selectedPackage = null;

    // ================================================================
    // DOM REFS
    // ================================================================
    const currencySelect = document.getElementById('currencySelect');
    const currencySymbolDisplay = document.getElementById('currencySymbolDisplay');
    const pricingContainers = document.querySelectorAll('.pricing-grid');
    const popupOverlay = document.getElementById('pricingPopupOverlay');
    const popupClose = document.getElementById('pricingPopupClose');
    const popupForm = document.getElementById('pricingPopupForm');
    const popupPackageName = document.getElementById('popupPackageName');
    const popupPackagePrice = document.getElementById('popupPackagePrice');
    const popupStatus = document.getElementById('pricingPopupStatus');

    // ================================================================
    // FORMAT PRICE
    // ================================================================
    function formatPrice(price, currency) {
        const rate = CURRENCIES[currency]?.rate || 1;
        const symbol = CURRENCIES[currency]?.symbol || '$';
        const converted = price * rate;
        
        // Format with commas for large numbers
        const formatted = converted.toFixed(converted % 1 === 0 ? 0 : 2);
        return { symbol, formatted };
    }

    // ================================================================
    // RENDER PRICING
    // ================================================================
    function renderPricing(currency) {
        const sections = document.querySelectorAll('.pricing-section');
        const priceCache = {};

        sections.forEach(section => {
            const serviceId = section.dataset.service;
            const data = PRICING_DATA[serviceId];
            if (!data) return;

            const grid = section.querySelector('.pricing-grid');
            if (!grid) return;

            grid.innerHTML = '';

            data.packages.forEach((pkg, index) => {
                const { symbol, formatted } = formatPrice(pkg.price_usd, currency);
                const card = document.createElement('div');
                card.className = `pricing-card${pkg.featured ? ' featured' : ''}`;
                
                let featuresHtml = '';
                pkg.features.forEach((feature, fi) => {
                    const disabled = pkg.disabled && pkg.disabled.includes(fi);
                    featuresHtml += `<li class="${disabled ? 'disabled' : ''}">${feature}</li>`;
                });

                card.innerHTML = `
                    <span class="package-badge">${pkg.badge}</span>
                    <div class="package-name">${pkg.name}</div>
                    <div class="package-price">
                        <span class="currency-symbol-display">${symbol}</span>${formatted}
                    </div>
                    <div class="package-period">${currency === 'PKR' ? 'per project' : 'per project'}</div>
                    <ul class="package-features">${featuresHtml}</ul>
                    <button class="btn-get-started" data-service="${serviceId}" data-package-index="${index}">
                        Get Started
                    </button>
                `;

                grid.appendChild(card);
            });
        });

        // Update currency symbol display
        if (currencySymbolDisplay) {
            currencySymbolDisplay.textContent = CURRENCIES[currency]?.symbol || '$';
        }

        // Attach event listeners to Get Started buttons
        attachGetStartedListeners();
    }

    // ================================================================
    // ATTACH GET STARTED LISTENERS
    // ================================================================
    function attachGetStartedListeners() {
        document.querySelectorAll('.btn-get-started').forEach(btn => {
            btn.removeEventListener('click', handleGetStarted);
            btn.addEventListener('click', handleGetStarted);
        });
    }

    function handleGetStarted(e) {
        const btn = e.currentTarget;
        const serviceId = btn.dataset.service;
        const packageIndex = parseInt(btn.dataset.packageIndex);
        const data = PRICING_DATA[serviceId];
        if (!data) return;

        const pkg = data.packages[packageIndex];
        if (!pkg) return;

        const currency = currentCurrency;
        const { symbol, formatted } = formatPrice(pkg.price_usd, currency);
        
        selectedPackage = {
            service: data.label,
            serviceId: serviceId,
            packageName: pkg.name,
            price: formatted,
            currency: currency,
            currencySymbol: symbol
        };

        openPopup(selectedPackage);
    }

    // ================================================================
    // POPUP FUNCTIONS
    // ================================================================
    function openPopup(pkg) {
        if (!popupOverlay) return;

        // Set package info
        if (popupPackageName) {
            popupPackageName.textContent = `${pkg.service} – ${pkg.packageName}`;
        }
        if (popupPackagePrice) {
            popupPackagePrice.textContent = `${pkg.currencySymbol}${pkg.price}`;
        }

        // Set service in dropdown
        const serviceSelect = document.getElementById('popupService');
        if (serviceSelect) {
            // Find the matching service option
            const options = serviceSelect.querySelectorAll('option');
            let found = false;
            options.forEach(opt => {
                if (opt.value === pkg.serviceId) {
                    opt.selected = true;
                    found = true;
                }
            });
            if (!found && options.length > 0) {
                serviceSelect.selectedIndex = 0;
            }
        }

        // Set package name in hidden field
        const packageInput = document.getElementById('popupPackage');
        if (packageInput) {
            packageInput.value = `${pkg.service} – ${pkg.packageName}`;
        }

        // Set price in hidden field
        const priceInput = document.getElementById('popupPrice');
        if (priceInput) {
            priceInput.value = `${pkg.currencySymbol}${pkg.price}`;
        }

        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        popupStatus.style.display = 'none';
        popupStatus.className = 'form-status';
    }

    function closePopup() {
        if (!popupOverlay) return;
        popupOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPopupStatus(msg, type) {
        if (!popupStatus) return;
        popupStatus.textContent = msg;
        popupStatus.className = 'form-status ' + type;
        popupStatus.style.display = 'block';
        setTimeout(() => {
            popupStatus.style.display = 'none';
            popupStatus.className = 'form-status';
        }, 8000);
    }

    // ================================================================
    // CURRENCY CHANGE HANDLER
    // ================================================================
    function handleCurrencyChange() {
        const currency = currencySelect.value;
        currentCurrency = currency;
        renderPricing(currency);
        localStorage.setItem('digicells-currency', currency);
    }

    // ================================================================
    // POPUP FORM SUBMISSION
    // ================================================================
    function handlePopupSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('popupName').value.trim();
        const email = document.getElementById('popupEmail').value.trim();
        const phone = document.getElementById('popupPhone').value.trim();
        const service = document.getElementById('popupService').value;
        const packageName = document.getElementById('popupPackage').value;
        const price = document.getElementById('popupPrice').value;
        const message = document.getElementById('popupMessage').value.trim();

        if (!name || !email) {
            showPopupStatus('⚠️ Please fill in all required fields (Name, Email).', 'error');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showPopupStatus('⚠️ Please enter a valid email address.', 'error');
            return;
        }

        // Build email body
        const subject = `New Service Inquiry: ${packageName}`;
        const body = `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service}
Package: ${packageName}
Price: ${price}
Message: ${message || 'No message provided'}
        `.trim();

        // Use FormData to submit via AJAX
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('service', service);
        formData.append('package', packageName);
        formData.append('price', price);
        formData.append('message', message);
        formData.append('subject', subject);

        fetch(window.location.href, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(() => {
            showPopupStatus('✅ Your inquiry was sent successfully! We\'ll get back to you within 24 hours.', 'success');
            popupForm.reset();
            
            // Reset package fields
            document.getElementById('popupPackage').value = '';
            document.getElementById('popupPrice').value = '';
            
            setTimeout(() => {
                closePopup();
            }, 3000);
        })
        .catch(() => {
            showPopupStatus('❌ Sorry, something went wrong. Please try again or call us directly.', 'error');
        });
    }

    // ================================================================
    // PRICING PAGE TRANSLATIONS
    // ================================================================
    const pricingTranslations = {
        en: {
            'pricing.breadcrumb': 'Pricing',
            'pricing.page.title': 'Our <span>Pricing</span>',
            'pricing.page.desc': 'Choose the perfect plan for your business. All our packages are designed to deliver maximum value with flexible options to suit your needs.',
            'pricing.currency_label': 'Select Currency:',
            'pricing.per_project': 'per project'
        },
        ur: {
            'pricing.breadcrumb': 'قیمتوں',
            'pricing.page.title': 'ہماری <span>قیمتیں</span>',
            'pricing.page.desc': 'اپنے کاروبار کے لیے بہترین منصوبہ منتخب کریں۔ ہمارے تمام پیکجز زیادہ سے زیادہ قدر فراہم کرنے کے لیے ڈیزائن کیے گئے ہیں۔',
            'pricing.currency_label': 'کرنسی منتخب کریں:',
            'pricing.per_project': 'فی منصوبہ'
        }
    };

    // ================================================================
    // MERGE TRANSLATIONS
    // ================================================================
    function mergePricingTranslations() {
        if (typeof window.I18N !== 'undefined') {
            if (window.I18N.en) {
                Object.assign(window.I18N.en, pricingTranslations.en);
            }
            if (window.I18N.ur) {
                Object.assign(window.I18N.ur, pricingTranslations.ur);
            }
            console.log('✅ Pricing translations merged successfully');
            return true;
        }
        return false;
    }

    // ================================================================
    // APPLY LANGUAGE
    // ================================================================
    function applyPricingLanguage(lang) {
        if (!lang) {
            lang = localStorage.getItem('digicells-lang') || 'en';
        }
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (key && key.startsWith('pricing.')) {
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
        
        // Update period text
        document.querySelectorAll('.package-period').forEach(el => {
            if (window.I18N && window.I18N[lang] && window.I18N[lang]['pricing.per_project']) {
                el.textContent = window.I18N[lang]['pricing.per_project'];
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
                applyPricingLanguage(newLang);
            }
        });
        
        if (typeof window.setLanguage === 'function') {
            const originalSetLanguage = window.setLanguage;
            window.setLanguage = function(lang) {
                originalSetLanguage(lang);
                applyPricingLanguage(lang);
            };
        }
    }

    // ================================================================
    // INITIALIZE
    // ================================================================
    function initPricingPage() {
        console.log('📋 Initializing Pricing page...');

        // Merge translations
        mergePricingTranslations();

        // Load saved currency
        const savedCurrency = localStorage.getItem('digicells-currency') || 'USD';
        if (currencySelect) {
            currencySelect.value = savedCurrency;
        }
        currentCurrency = savedCurrency;

        // Render pricing
        renderPricing(currentCurrency);

        // Apply language
        const savedLang = localStorage.getItem('digicells-lang') || 'en';
        applyPricingLanguage(savedLang);

        // Attach currency change listener
        if (currencySelect) {
            currencySelect.removeEventListener('change', handleCurrencyChange);
            currencySelect.addEventListener('change', handleCurrencyChange);
        }

        // Popup controls
        if (popupClose) {
            popupClose.removeEventListener('click', closePopup);
            popupClose.addEventListener('click', closePopup);
        }
        if (popupOverlay) {
            popupOverlay.removeEventListener('click', function(e) {
                if (e.target === popupOverlay) closePopup();
            });
            popupOverlay.addEventListener('click', function(e) {
                if (e.target === popupOverlay) closePopup();
            });
        }

        // Popup form submission
        if (popupForm) {
            popupForm.removeEventListener('submit', handlePopupSubmit);
            popupForm.addEventListener('submit', handlePopupSubmit);
        }

        // Listen for language changes
        listenForLanguageChanges();

        // Re-apply language when main.js is done
        if (typeof window.initGlobalControls === 'function') {
            setTimeout(function() {
                const lang = localStorage.getItem('digicells-lang') || 'en';
                applyPricingLanguage(lang);
            }, 200);
        }

        console.log('✅ Pricing page initialized successfully');
    }

    // ================================================================
    // RUN ON DOM READY
    // ================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPricingPage);
    } else {
        initPricingPage();
    }

})();