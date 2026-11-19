<?php
// ============================================================
// pricing.php - Pricing Page
// ============================================================
// This page includes the header, footer, and all assets
// ============================================================

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'], $_POST['email'])) {
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $phone   = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : 'Not provided';
    $service = isset($_POST['service']) ? htmlspecialchars(trim($_POST['service'])) : 'Not specified';
    $package = isset($_POST['package']) ? htmlspecialchars(trim($_POST['package'])) : 'Not specified';
    $price   = isset($_POST['price']) ? htmlspecialchars(trim($_POST['price'])) : 'Not specified';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : 'No message provided';
    $subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : 'New Service Inquiry';

    $to      = 'info@digicellsinternational.com';
    $cc      = 'skhamosh152@gmail.com';
    $subject_line = $subject;
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\nPackage: $package\nPrice: $price\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\nCc: $cc\r\nContent-Type: text/plain; charset=UTF-8";

    $mail_sent = mail($to, $subject_line, $body, $headers);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pricing – Digicells International</title>
    <meta name="description" content="Explore Digicells International's professional pricing plans for digital marketing, web development, branding, and IT consulting. Flexible packages for every budget." />
    <meta name="keywords" content="pricing, plans, digital marketing pricing, web development pricing, branding pricing, IT consulting pricing, packages" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://digicellsinternational.com/pricing" />
    <!-- Open Graph -->
    <meta property="og:title" content="Pricing – Digicells International" />
    <meta property="og:description" content="Explore Digicells International's professional pricing plans for digital marketing, web development, branding, and IT consulting." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://digicellsinternational.com/pricing" />
    <meta property="og:image" content="https://digicellsinternational.com/digicells-logo-official.png" />
    <!-- Schema.org -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pricing – Digicells International",
            "description": "Explore Digicells International's professional pricing plans for digital marketing, web development, branding, and IT consulting.",
            "url": "https://digicellsinternational.com/pricing",
            "isPartOf": {
                "@type": "WebSite",
                "name": "Digicells International",
                "url": "https://digicellsinternational.com"
            },
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://digicellsinternational.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Pricing",
                        "item": "https://digicellsinternational.com/pricing"
                    }
                ]
            }
        }
    </script>
    <!-- ===== ASSETS ===== -->
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="assets/css/pricing.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet" />
</head>
<body>

    <!-- ===== HEADER ===== -->
    <?php include 'assets/inc/header.php'; ?>

    <!-- ===== PAGE CONTENT ===== -->
    <main>
        <div class="container">
            <!-- Breadcrumb -->
            <div class="pricing-page-breadcrumb">
                <a href="/">Home</a> <span>›</span> <span data-i18n="pricing.breadcrumb">Pricing</span>
            </div>

            <!-- Hero -->
            <div class="pricing-page-hero">
                <h1 data-i18n="pricing.page.title">Our <span>Pricing</span></h1>
                <p data-i18n="pricing.page.desc">Choose the perfect plan for your business. All our packages are designed to deliver maximum value with flexible options to suit your needs.</p>
            </div>

            <!-- Currency Selector -->
            <div class="currency-selector-wrap">
                <label for="currencySelect" data-i18n="pricing.currency_label">Select Currency:</label>
                <select id="currencySelect">
                    <?php foreach ([
                        'USD' => 'USD - US Dollar',
                        'PKR' => 'PKR - Pakistani Rupee',
                        'EUR' => 'EUR - Euro',
                        'GBP' => 'GBP - British Pound',
                        'CAD' => 'CAD - Canadian Dollar',
                        'AUD' => 'AUD - Australian Dollar',
                        'JPY' => 'JPY - Japanese Yen',
                        'CNY' => 'CNY - Chinese Yuan',
                        'INR' => 'INR - Indian Rupee',
                        'AED' => 'AED - UAE Dirham',
                        'SAR' => 'SAR - Saudi Riyal',
                        'QAR' => 'QAR - Qatari Riyal',
                        'KWD' => 'KWD - Kuwaiti Dinar',
                        'BHD' => 'BHD - Bahraini Dinar',
                        'OMR' => 'OMR - Omani Rial',
                        'CHF' => 'CHF - Swiss Franc',
                        'SEK' => 'SEK - Swedish Krona',
                        'NOK' => 'NOK - Norwegian Krone',
                        'DKK' => 'DKK - Danish Krone',
                        'SGD' => 'SGD - Singapore Dollar',
                        'MYR' => 'MYR - Malaysian Ringgit',
                        'THB' => 'THB - Thai Baht',
                        'VND' => 'VND - Vietnamese Dong',
                        'PHP' => 'PHP - Philippine Peso',
                        'IDR' => 'IDR - Indonesian Rupiah'
                    ] as $code => $label): ?>
                        <option value="<?php echo $code; ?>"><?php echo $label; ?></option>
                    <?php endforeach; ?>
                </select>
                <span class="currency-symbol" id="currencySymbolDisplay">$</span>
            </div>

            <!-- Digital Marketing Section -->
            <section class="pricing-section" data-service="digital-marketing">
                <h2 class="section-title">📈 <span>Digital Marketing</span></h2>
                <p class="section-subtitle">Complete marketing solutions to grow your business online</p>
                <div class="pricing-grid"></div>
            </section>

            <!-- Web Development Section -->
            <section class="pricing-section" data-service="web-development">
                <h2 class="section-title">💻 <span>Web Development</span></h2>
                <p class="section-subtitle">Custom websites and applications built with modern technology</p>
                <div class="pricing-grid"></div>
            </section>

            <!-- Branding & Design Section -->
            <section class="pricing-section" data-service="branding-design">
                <h2 class="section-title">🎨 <span>Branding &amp; Design</span></h2>
                <p class="section-subtitle">Create a powerful brand identity that stands out from the competition</p>
                <div class="pricing-grid"></div>
            </section>

            <!-- IT Consulting Section -->
            <section class="pricing-section" data-service="it-consulting">
                <h2 class="section-title">🧠 <span>IT Consulting</span></h2>
                <p class="section-subtitle">Strategic technology guidance to drive your business forward</p>
                <div class="pricing-grid"></div>
            </section>

        </div>
    </main>

    <!-- ===== FOOTER ===== -->
    <?php include 'assets/inc/footer.php'; ?>

    <!-- ===== AI CHATBOT ===== -->
    <button class="chatbot-toggle" id="chatbotToggle" aria-label="Open AI chatbot" title="Chat with Digicells Agent">
        <img src="digicells-logo-official.png" alt="Digicells Agent" />
    </button>
    <div class="chatbot-window" id="chatbotWindow" role="dialog" aria-label="AI Chatbot">
        <div class="chatbot-header">
            <div class="bot-info">
                <img src="digicells-logo-official.png" alt="Digicells Agent" />
                <span>Digicells Agent</span>
            </div>
            <button id="chatbotClose" aria-label="Close chatbot">✕</button>
        </div>
        <div class="chatbot-messages" id="chatbotMessages">
            <div class="msg bot">👋 Hello! I'm Digicells Agent, your virtual assistant. Ask me about our services, pricing, or anything about Digicells International.</div>
        </div>
        <div class="chatbot-input-wrap">
            <input type="text" id="chatbotInput" placeholder="Type your question..." aria-label="Chat input" />
            <button id="chatbotSend">Send</button>
        </div>
    </div>

    <!-- ===== PRICING POPUP FORM ===== -->
    <div class="pricing-popup-overlay" id="pricingPopupOverlay">
        <div class="pricing-popup">
            <button class="close-popup" id="pricingPopupClose" aria-label="Close form">✕</button>
            <h3>💎 Get Started</h3>
            <p style="opacity: 0.7; margin-bottom: 4px;">You're about to inquire about:</p>
            <div class="package-summary">
                <span class="label">Package:</span>
                <span class="value" id="popupPackageName">-</span>
                <span class="label" style="margin-left: auto;">Price:</span>
                <span class="value" id="popupPackagePrice">-</span>
            </div>

            <?php if (isset($mail_sent) && $mail_sent): ?>
                <div class="form-status success" style="display:block;">
                    ✅ Your inquiry was sent successfully! We'll get back to you within 24 hours.
                </div>
            <?php elseif (isset($mail_sent) && !$mail_sent): ?>
                <div class="form-status error" style="display:block;">
                    ❌ Sorry, something went wrong. Please try again or call us directly.
                </div>
            <?php endif; ?>

            <form id="pricingPopupForm" method="POST" action="">
                <input type="hidden" id="popupPackage" name="package" />
                <input type="hidden" id="popupPrice" name="price" />
                <input type="hidden" name="subject" value="New Service Inquiry" />

                <div class="form-group">
                    <label for="popupName">Full Name <span class="required">*</span></label>
                    <input type="text" id="popupName" name="name" placeholder="John Doe" required />
                </div>
                <div class="form-group">
                    <label for="popupEmail">Email Address <span class="required">*</span></label>
                    <input type="email" id="popupEmail" name="email" placeholder="john@example.com" required />
                </div>
                <div class="form-group">
                    <label for="popupPhone">Phone Number</label>
                    <input type="tel" id="popupPhone" name="phone" placeholder="+92 300 1234567" />
                </div>
                <div class="form-group">
                    <label for="popupService">Service Interested In</label>
                    <select id="popupService" name="service">
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="web-development">Web Development</option>
                        <option value="branding-design">Branding &amp; Design</option>
                        <option value="it-consulting">IT Consulting</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="popupMessage">Message</label>
                    <textarea id="popupMessage" name="message" placeholder="Tell us about your project, timeline, or any specific requirements..."></textarea>
                </div>
                <button type="submit" class="btn-submit">🚀 Send Inquiry</button>
                <div id="pricingPopupStatus" class="form-status"></div>
            </form>
        </div>
    </div>

    <!-- ===== JAVASCRIPT ===== -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/pricing.js"></script>

</body>
</html>