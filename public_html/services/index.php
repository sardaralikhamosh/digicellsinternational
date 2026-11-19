<?php
// ============================================================
// services/index.php - Services Index Page
// ============================================================
// Include config and header
require_once $_SERVER['DOCUMENT_ROOT'] . '/assets/config.php';
require_once ROOT_PATH . '/assets/inc/header.php';
?>

<main>
    <div class="container">
        <!-- Breadcrumb -->
        <div class="services-page-breadcrumb">
            <a href="<?php echo BASE_URL; ?>/">Home</a> <span>›</span> <span data-i18n="services.breadcrumb">Our Services</span>
        </div>

        <!-- Hero -->
        <div class="services-page-hero">
            <h1 data-i18n="services.page.title">Our <span>Services</span></h1>
            <p data-i18n="services.page.desc">Discover our comprehensive range of professional digital services...</p>
        </div>

        <!-- Intro -->
        <div class="services-intro">
            <p data-i18n="services.intro">From digital marketing and development to design...</p>
        </div>

        <!-- Stats -->
        <div class="services-stats">
            <div class="stat-item">
                <span class="stat-number" data-target="61">61+</span>
                <span class="stat-label" data-i18n="services.stats.services">Services</span>
            </div>
            <!-- ... other stats ... -->
        </div>

        <!-- Quick Navigation -->
        <div class="quick-nav">
            <span style="opacity:0.6; font-weight:500;" data-i18n="services.quick_nav">Quick Navigation:</span>
            <a href="#digital-marketing">📈 Digital Marketing</a>
            <a href="#development">💻 Development</a>
            <a href="#designing">🎨 Designing</a>
            <a href="#production">🎬 Production</a>
            <a href="#healthcare">🏥 Healthcare</a>
            <a href="#consulting">🧠 Consulting</a>
        </div>

        <!-- Services Container -->
        <div id="servicesContainer"></div>
    </div>
</main>

<!-- ===== FOOTER ===== -->
<?php require_once ROOT_PATH . '/assets/inc/footer.php'; ?>

<!-- ===== AI CHATBOT (using base URL) ===== -->
<button class="chatbot-toggle" id="chatbotToggle" aria-label="Open AI chatbot" title="Chat with Digicells Agent">
    <span class="chat-icon">💬</span>
</button>
<div class="chatbot-window" id="chatbotWindow">
    <div class="chatbot-header">
        <div class="bot-info">
            <span class="chat-icon-small">💬</span>
            <span>Digicells Agent</span>
        </div>
        <button id="chatbotClose" aria-label="Close chatbot">✕</button>
    </div>
    <div class="chatbot-messages" id="chatbotMessages">
        <div class="msg bot">👋 Hello! I'm Digicells Agent, your virtual assistant...</div>
    </div>
    <div class="chatbot-input-wrap">
        <input type="text" id="chatbotInput" placeholder="Type your question..." />
        <button id="chatbotSend" class="btn btn-primary">Send</button>
    </div>
</div>

<!-- ===== JAVASCRIPT ===== -->
<script src="<?php echo ASSETS_URL; ?>/js/main.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/services.js"></script>

</body>
</html>