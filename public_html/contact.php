<?php
// ============================================================
// contact.php - Professional Contact Page
// ============================================================

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'], $_POST['email'], $_POST['message'])) {
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $phone   = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : 'Not provided';
    $service = isset($_POST['service']) ? htmlspecialchars(trim($_POST['service'])) : 'General';
    $subject_line = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : 'General Inquiry';
    $message = htmlspecialchars(trim($_POST['message']));

    $to      = 'info@digicellsinternational.com';
    $subject = "Contact Form: " . $subject_line . " from " . $name;
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\nSubject: $subject_line\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    $mail_sent = mail($to, $subject, $body, $headers);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Us – Digicells International</title>
    <meta name="description" content="Get in touch with Digicells International for premium digital marketing, web development, branding, and IT consulting services. Reach out today!" />
    <meta name="keywords" content="contact Digicells International, digital marketing agency, web development company, branding services, IT consulting, get in touch" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://digicellsinternational.com/contact" />
    <!-- Open Graph -->
    <meta property="og:title" content="Contact Us – Digicells International" />
    <meta property="og:description" content="Get in touch with Digicells International for premium digital marketing, web development, branding, and IT consulting services." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://digicellsinternational.com/contact" />
    <meta property="og:image" content="https://digicellsinternational.com/digicells-logo-official.png" />
    <!-- Schema.org -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us – Digicells International",
            "description": "Get in touch with Digicells International for premium digital marketing, web development, branding, and IT consulting services.",
            "url": "https://digicellsinternational.com/contact",
            "mainEntity": {
                "@type": "Organization",
                "name": "Digicells International",
                "url": "https://digicellsinternational.com",
                "logo": "https://digicellsinternational.com/digicells-logo-official.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+923273344778",
                    "contactType": "Sales",
                    "email": "info@digicellsinternational.com",
                    "availableLanguage": ["English", "Urdu"]
                },
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "PK"
                }
            }
        }
    </script>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
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
                    "name": "Contact",
                    "item": "https://digicellsinternational.com/contact"
                }
            ]
        }
    </script>
    <!-- ===== ASSETS ===== -->
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="assets/css/contact.css" />
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
            <div class="contact-page-breadcrumb">
                <a href="/">Home</a> <span>›</span> <span data-i18n="contact.breadcrumb">Contact</span>
            </div>

            <!-- Hero -->
            <div class="contact-page-hero">
                <h1 data-i18n="contact.page.title">Get in <span>Touch</span></h1>
                <p data-i18n="contact.page.desc">We'd love to hear from you. Whether you have a project in mind, a question about our services, or just want to say hello — reach out and let's create something extraordinary.</p>
            </div>

            <!-- Grid -->
            <div class="contact-page-grid">
                <!-- Left: Contact Info -->
                <div class="contact-info-card">
                    <h2 data-i18n="contact.info.title">📬 Contact Information</h2>

                    <div class="info-item">
                        <div class="icon-box">📧</div>
                        <div class="text">
                            <span class="label" data-i18n="contact.info.email_label">Email</span>
                            <a href="mailto:info@digicellsinternational.com">info@digicellsinternational.com</a>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="icon-box">📞</div>
                        <div class="text">
                            <span class="label" data-i18n="contact.info.phone_label">Phone</span>
                            <a href="tel:+923273344778">+92 327 3344778</a>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="icon-box">💬</div>
                        <div class="text">
                            <span class="label" data-i18n="contact.info.whatsapp_label">WhatsApp</span>
                            <a href="https://wa.me/923273344778" target="_blank">+92 327 3344778</a>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="icon-box">📍</div>
                        <div class="text">
                            <span class="label" data-i18n="contact.info.location_label">Location</span>
                            <span data-i18n="contact.info.location">Pakistan</span>
                        </div>
                    </div>

                    <!-- Hours -->
                    <div class="hours-section">
                        <h3 data-i18n="contact.hours.title">🕒 Business Hours</h3>
                        <div class="hour-item"><span class="day" data-i18n="contact.hours.weekdays">Monday – Friday</span><span data-i18n="contact.hours.weekday_hours">9:00 AM – 6:00 PM</span></div>
                        <div class="hour-item"><span class="day" data-i18n="contact.hours.saturday">Saturday</span><span data-i18n="contact.hours.saturday_hours">10:00 AM – 4:00 PM</span></div>
                        <div class="hour-item"><span class="day" data-i18n="contact.hours.sunday">Sunday</span><span data-i18n="contact.hours.sunday_hours">Closed</span></div>
                    </div>

                    <!-- Trust Badges -->
                    <div class="trust-badges">
                        <span class="badge"><span class="icon">🔒</span> <span data-i18n="contact.badges.privacy">Privacy Protected</span></span>
                        <span class="badge"><span class="icon">⚡</span> <span data-i18n="contact.badges.support">24/7 Support</span></span>
                        <span class="badge"><span class="icon">⭐</span> <span data-i18n="contact.badges.premium">Premium Service</span></span>
                    </div>

                    <!-- Social Links -->
                    <div class="social-row">
                        <a href="https://www.youtube.com/@digicellinternational" target="_blank" aria-label="YouTube">▶️</a>
                        <a href="https://www.facebook.com/digicellsinternational" target="_blank" aria-label="Facebook">📘</a>
                        <a href="https://soundcloud.com/digicells" target="_blank" aria-label="SoundCloud">🎵</a>
                        <a href="https://www.instagram.com/digicellinternational" target="_blank" aria-label="Instagram">📸</a>
                        <a href="https://www.linkedin.com/company/digicells" target="_blank" aria-label="LinkedIn">🔗</a>
                        <a href="https://x.com/digicells" target="_blank" aria-label="X (Twitter)">🐦</a>
                        <a href="https://www.tiktok.com/@digicells_international" target="_blank" aria-label="TikTok">🎶</a>
                        <a href="https://open.spotify.com/user/avwcqghsl60umkxax7dqj4hs0" target="_blank" aria-label="Spotify">🎧</a>
                    </div>

                    <!-- Map -->
                    <div class="map-box">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.9391999592453!2d73.13229580980324!3d33.528966373247414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9583ea4199b3%3A0xd5d74b82bfe63d6f!2sDigicells%20International!5e0!3m2!1sen!2s!4v1786687711411!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="Digicells International location on Google Maps"></iframe>
                    </div>
                </div>

                <!-- Right: Contact Form -->
                <div class="contact-form-card">
                    <h2 data-i18n="contact.form.title">✉️ Send a Message</h2>
                    <p class="subtitle" data-i18n="contact.form.subtitle">Fill in the form below and we'll get back to you within 24 hours.</p>

                    <?php if (isset($mail_sent) && $mail_sent): ?>
                        <div class="form-status success" style="display:block;">
                            ✅ Your message was sent successfully! We'll get back to you soon.
                        </div>
                    <?php elseif (isset($mail_sent) && !$mail_sent): ?>
                        <div class="form-status error" style="display:block;">
                            ❌ Sorry, something went wrong. Please try again or call us directly.
                        </div>
                    <?php endif; ?>

                    <form id="contactPageForm" method="POST" action="">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="contactName" data-i18n="contact.form.name_label">Full Name <span class="required">*</span></label>
                                <input type="text" id="contactName" name="name" placeholder="John Doe" required aria-required="true" />
                            </div>
                            <div class="form-group">
                                <label for="contactEmail" data-i18n="contact.form.email_label">Email Address <span class="required">*</span></label>
                                <input type="email" id="contactEmail" name="email" placeholder="john@example.com" required aria-required="true" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="contactPhone" data-i18n="contact.form.phone_label">Phone Number</label>
                                <input type="tel" id="contactPhone" name="phone" placeholder="+92 300 1234567" />
                            </div>
                            <div class="form-group">
                                <label for="contactService" data-i18n="contact.form.service_label">Service Interested In</label>
                                <select id="contactService" name="service">
                                    <option value="General" data-i18n="contact.form.service_general">General Inquiry</option>
                                    <option value="Digital Marketing" data-i18n="contact.form.service_digital">Digital Marketing</option>
                                    <option value="Web Development" data-i18n="contact.form.service_web">Web Development</option>
                                    <option value="Branding & Design" data-i18n="contact.form.service_branding">Branding &amp; Design</option>
                                    <option value="IT Consulting" data-i18n="contact.form.service_it">IT Consulting</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="contactSubject" data-i18n="contact.form.subject_label">Subject <span class="required">*</span></label>
                            <input type="text" id="contactSubject" name="subject" placeholder="Project Inquiry" required aria-required="true" />
                        </div>

                        <div class="form-group">
                            <label for="contactMessage" data-i18n="contact.form.message_label">Message <span class="required">*</span></label>
                            <textarea id="contactMessage" name="message" placeholder="Tell us about your project, goals, or any questions you have..." required aria-required="true"></textarea>
                        </div>

                        <button type="submit" class="btn-submit" data-i18n="contact.form.submit">🚀 Send Message</button>
                        <div id="contactPageStatus" class="form-status"></div>
                    </form>
                </div>
            </div>
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

    <!-- ===== JAVASCRIPT ===== -->
    <script src="assets/js/main.js"></script>
    <script>
        // ================================================================
        // CONTACT PAGE SPECIFIC - Form validation
        // ================================================================
        document.addEventListener('DOMContentLoaded', function() {
            // ===== CONTACT PAGE FORM VALIDATION =====
            const form = document.getElementById('contactPageForm');
            const status = document.getElementById('contactPageStatus');

            if (form) {
                form.addEventListener('submit', function(e) {
                    const name = document.getElementById('contactName').value.trim();
                    const email = document.getElementById('contactEmail').value.trim();
                    const subject = document.getElementById('contactSubject').value.trim();
                    const message = document.getElementById('contactMessage').value.trim();

                    if (!name || !email || !subject || !message) {
                        e.preventDefault();
                        status.textContent = '⚠️ Please fill in all required fields.';
                        status.className = 'form-status error';
                        status.style.display = 'block';
                        return;
                    }
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                        e.preventDefault();
                        status.textContent = '⚠️ Please enter a valid email address.';
                        status.className = 'form-status error';
                        status.style.display = 'block';
                        return;
                    }
                });
            }

            // Auto-hide status after 8 seconds if it's a success message
            if (status && status.classList.contains('success')) {
                setTimeout(() => {
                    status.style.display = 'none';
                }, 8000);
            }
        });
    </script>

</body>
</html>