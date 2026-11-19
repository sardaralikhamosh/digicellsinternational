<?php
// ============================================================
// assets/inc/header.php - Full page header (includes <head>)
// ============================================================
require_once $_SERVER['DOCUMENT_ROOT'] . '/assets/config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digicells International – Premium Digital Solutions</title>
    <meta name="description" content="Digicells International delivers premium digital marketing, web development, branding, and IT consulting services. Elevate your business with our expert solutions." />
    <meta name="keywords" content="digital marketing, web development, SEO, AEO, GEO, branding, IT consulting, Digicells International" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://digicellsinternational.com/" />
    <!-- Open Graph -->
    <meta property="og:title" content="Digicells International – Premium Digital Solutions" />
    <meta property="og:description" content="Premium digital marketing, web development, branding &amp; IT consulting. Transform your business with Digicells International." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://digicellsinternational.com/" />
    <meta property="og:image" content="https://digicellsinternational.com/digicells-logo-official.png" />
    <!-- Schema.org -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Digicells International",
            "url": "https://digicellsinternational.com",
            "logo": "https://digicellsinternational.com/digicells-logo-official.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+923273344778",
                "contactType": "Sales",
                "email": "info@digicellsinternational.com"
            },
            "sameAs": [
                "https://www.youtube.com/@digicellinternational",
                "https://www.facebook.com/digicellsinternational",
                "https://soundcloud.com/digicells",
                "https://www.instagram.com/digicellinternational",
                "https://www.linkedin.com/company/digicells",
                "https://x.com/digicells",
                "https://www.tiktok.com/@digicells_international",
                "https://open.spotify.com/user/avwcqghsl60umkxax7dqj4hs0"
            ]
        }
    </script>
    <!-- ===== ASSETS (absolute paths) ===== -->
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/style.css" />
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/header.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet" />
</head>
<body>

    <!-- ===== HEADER ===== -->
    <header role="banner">
        <div class="container header-inner">
            <!-- Logo -->
            <div class="logo-wrap">
                <img src="<?php echo BASE_URL; ?>/digicells-logo-official.png" alt="Digicells International – Premium Digital Solutions" />
            </div>

            <!-- Controls + Hamburger -->
            <div class="header-controls">
                <!-- Font size -->
                <div class="font-size-controls" role="group" aria-label="Font size controls">
                    <button id="fontDec" aria-label="Decrease font size" title="Decrease font size">A-</button>
                    <span id="fontSizeLabel">A</span>
                    <button id="fontInc" aria-label="Increase font size" title="Increase font size">A+</button>
                </div>
                <!-- Theme -->
                <button id="themeToggle" class="icon-btn" aria-label="Toggle dark/light theme" title="Toggle theme">
                    <span id="themeIcon">🌙</span>
                </button>
                <!-- Language -->
                <div class="lang-select-wrap">
                    <span class="globe-icon">🌍</span>
                    <span class="flag-icon" id="currentFlag">🇺🇸</span>
                    <select id="langSelect" aria-label="Select language">
                        <option value="en">🇺🇸 EN</option>
                        <option value="ur">🇵🇰 UR</option>
                    </select>
                </div>
                <!-- Hamburger -->
                <button class="hamburger-toggle" id="hamburgerToggle" aria-label="Toggle navigation menu" title="Menu">
                    <span class="hamburger-icon">
                        <span></span><span></span><span></span>
                    </span>
                </button>
            </div>
        </div>

        <!-- Dropdown Menu -->
        <nav class="nav-dropdown" id="navDropdown" role="navigation" aria-label="Main Navigation">
            <div class="container">
                <a href="<?php echo BASE_URL; ?>/" class="nav-link">Home</a>
                <a href="<?php echo BASE_URL; ?>/about.php" class="nav-link">About</a>
                <a href="<?php echo BASE_URL; ?>/services/index.php" class="nav-link">Services</a>
                <a href="<?php echo BASE_URL; ?>/pricing.php" class="nav-link">Pricing</a>
                <a href="<?php echo BASE_URL; ?>/clients.php" class="nav-link">Clients</a>
                <a href="<?php echo BASE_URL; ?>/teams.php" class="nav-link">Teams</a>
                <a href="<?php echo BASE_URL; ?>/contact.php" class="nav-link">Contact</a>
                <a href="https://shinisa.com" class="nav-link nav-shop" target="_blank" rel="noopener">Shop</a>
            </div>
        </nav>
    </header>