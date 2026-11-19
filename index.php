<?php
// ============================================================
// index.php - Main entry point (UPDATED)
// ============================================================
// This file includes the header, footer, and all assets
// ============================================================

// Include header (which includes <head>, opens <body>, and outputs the header nav)
include 'assets/inc/header.php';
?>

<!-- ===== PAGE CONTENT ===== -->
<main>
    <!-- Hero -->
    <section class="hero container" aria-labelledby="hero-title">
        <h1 id="hero-title" data-i18n="hero.title">Elevate Your Brand with <span>Digicells International</span></h1>
        <p data-i18n="hero.desc">
            We are a premium digital solutions powerhouse — fusing creativity, technology, and strategy to
            deliver exceptional results. From precision-driven <strong>digital marketing</strong> and
            <strong>web development</strong> to iconic <strong>branding</strong> and forward-thinking
            <strong>IT consulting</strong>, we architect experiences that captivate, convert, and endure.
            Partner with us to transform your vision into a digital legacy.
        </p>
    </section>

    <!-- Services Section -->
    <section class="services-section container" aria-labelledby="services-title">
        <h2 id="services-title" data-i18n="services.title">Our <span>Services</span></h2>

        <div class="service-tabs" role="tablist" id="serviceTabs">
            <!-- dynamically rendered -->
        </div>

        <div class="service-panels" id="servicePanels">
            <!-- dynamically rendered -->
        </div>

        <div class="service-detail-view" id="serviceDetail">
            <div class="breadcrumb" id="detailBreadcrumb"></div>
            <h3 id="detailTitle"></h3>
            <p id="detailDesc"></p>
            <div class="actions">
                <button class="btn btn-primary" id="detailHireBtn" data-i18n="services.hire">Hire This Service</button>
                <button class="btn btn-outline" id="detailLearnBtn" data-i18n="services.learn">Learn More</button>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contactSection" aria-labelledby="contact-title">
        <div class="container">
            <div class="contact-info">
                <h2 id="contact-title" data-i18n="contact.title">Get in Touch</h2>
                <p data-i18n="contact.sub">We'd love to hear from you. Reach out and let's create something extraordinary.</p>
                <div class="detail"><span class="emoji">📧</span> <a href="mailto:info@digicellsinternational.com">info@digicellsinternational.com</a></div>
                <div class="detail"><span class="emoji">📞</span> <a href="tel:+923273344778">+92 327 3344778</a></div>
                <div class="detail"><span class="emoji">💬</span> <a href="https://wa.me/923273344778" target="_blank">WhatsApp</a></div>

                <div class="social-links">
                    <a href="https://www.youtube.com/@digicellinternational" target="_blank" aria-label="YouTube" class="social-icon">▶</a>
                    <a href="https://www.facebook.com/digicellsinternational" target="_blank" aria-label="Facebook" class="social-icon">f</a>
                    <a href="https://soundcloud.com/digicells" target="_blank" aria-label="SoundCloud" class="social-icon">♪</a>
                    <a href="https://www.instagram.com/digicellinternational" target="_blank" aria-label="Instagram" class="social-icon">◊</a>
                    <a href="https://www.linkedin.com/company/digicells" target="_blank" aria-label="LinkedIn" class="social-icon">in</a>
                    <a href="https://x.com/digicells" target="_blank" aria-label="X (Twitter)" class="social-icon">✕</a>
                    <a href="https://www.tiktok.com/@digicells_international" target="_blank" aria-label="TikTok" class="social-icon">♪</a>
                    <a href="https://open.spotify.com/user/avwcqghsl60umkxax7dqj4hs0" target="_blank" aria-label="Spotify" class="social-icon">♫</a>
                </div>

                <div class="map-wrap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.9391999592453!2d73.13229580980324!3d33.528966373247414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9583ea4199b3%3A0xd5d74b82bfe63d6f!2sDigicells%20International!5e0!3m2!1sen!2s!4v1786687711411!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="Digicells International location on Google Maps"></iframe>
                </div>
            </div>

            <div class="contact-form-wrap">
                <h3 data-i18n="contact.form.title">Send a Message</h3>
                <form id="contactForm" method="POST" action="">
                    <div class="form-group">
                        <label for="formName" data-i18n="contact.form.name">Full Name</label>
                        <input type="text" id="formName" name="name" placeholder="John Doe" required />
                    </div>
                    <div class="form-group">
                        <label for="formEmail" data-i18n="contact.form.email">Email Address</label>
                        <input type="email" id="formEmail" name="email" placeholder="john@example.com" required />
                    </div>
                    <div class="form-group">
                        <label for="formService" data-i18n="contact.form.service">Service Interested In</label>
                        <select id="formService" name="service">
                            <option value="general">General Inquiry</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="web-development">Web Development</option>
                            <option value="branding-design">Branding &amp; Design</option>
                            <option value="it-consulting">IT Consulting</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="formMessage" data-i18n="contact.form.message">Message</label>
                        <textarea id="formMessage" name="message" placeholder="Tell us about your project..." required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" data-i18n="contact.form.submit">Send Message</button>
                    <div id="formStatus" class="form-status"></div>
                </form>
            </div>
        </div>
    </section>
</main>

<!-- ===== FOOTER ===== -->
<?php include 'assets/inc/footer.php'; ?>

<!-- ===== POPUP CONTACT FORM ===== -->
<div class="popup-overlay" id="popupOverlay">
    <div class="popup-form">
        <button class="close-popup" id="popupClose" aria-label="Close form">✕</button>
        <h3>Hire This Service</h3>
        <p class="subtitle">Fill in your details and we'll get back to you within 24 hours.</p>
        <form id="popupForm" method="POST" action="">
            <div class="form-group">
                <label for="popupName">Full Name *</label>
                <input type="text" id="popupName" name="name" placeholder="John Doe" required />
            </div>
            <div class="form-group">
                <label for="popupEmail">Email Address *</label>
                <input type="email" id="popupEmail" name="email" placeholder="john@example.com" required />
            </div>
            <div class="form-group">
                <label for="popupPhone">Phone Number</label>
                <input type="tel" id="popupPhone" name="phone" placeholder="+92 300 1234567" />
            </div>
            <div class="form-group">
                <label for="popupService">Service Interested In *</label>
                <select id="popupService" name="service" required>
                    <option value="">Select a service...</option>
                </select>
            </div>
            <div class="form-group">
                <label for="popupMessage">Message</label>
                <textarea id="popupMessage" name="message" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Request</button>
            <div id="popupStatus" class="form-status"></div>
        </form>
    </div>
</div>

<!-- ===== AI CHATBOT ===== -->
<button class="chatbot-toggle" id="chatbotToggle" aria-label="Open AI chatbot" title="Chat with Digicells Agent">
    <span class="chat-icon">💬</span>
</button>
<div class="chatbot-window" id="chatbotWindow" role="dialog" aria-label="AI Chatbot">
    <div class="chatbot-header">
        <div class="bot-info">
            <span class="chat-icon-small">💬</span>
            <span>Digicells Agent</span>
        </div>
        <button id="chatbotClose" aria-label="Close chatbot">✕</button>
    </div>
    <div class="chatbot-messages" id="chatbotMessages">
        <div class="msg bot">👋 Hello! I'm Digicells Agent, your virtual assistant. Ask me about our services, pricing, or anything about Digicells International.</div>
    </div>
    <div class="chatbot-input-wrap">
        <input type="text" id="chatbotInput" placeholder="Type your question..." aria-label="Chat input" />
        <button id="chatbotSend" class="btn btn-primary">Send</button>
    </div>
</div>

<!-- ===== PHP: CONTACT FORM HANDLER ===== -->
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'], $_POST['email'], $_POST['message'])) {
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $service = isset($_POST['service']) ? htmlspecialchars(trim($_POST['service'])) : 'General';
    $phone   = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : 'Not provided';
    $message = htmlspecialchars(trim($_POST['message']));

    $to      = 'info@digicellsinternational.com';
    $subject = "New Hire Request from " . $name . " (Service: " . $service . ")";
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $body, $headers)) {
        echo '<script>document.addEventListener("DOMContentLoaded", function() { showPopupStatus("✅ Your request was sent successfully! We\'ll get back to you soon.", "success"); });</script>';
    } else {
        echo '<script>document.addEventListener("DOMContentLoaded", function() { showPopupStatus("❌ Sorry, something went wrong. Please try again or call us directly.", "error"); });</script>';
    }
}
?>

<!-- ===== JAVASCRIPT ===== -->
<script src="assets/js/main.js"></script>
</body>
</html>