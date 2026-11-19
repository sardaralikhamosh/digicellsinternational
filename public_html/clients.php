<?php
// ============================================================
// clients.php - Clients Page
// ============================================================
// This page includes the header, footer, and all assets
// ============================================================
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Our Happy Clients – Digicells International</title>
    <meta name="description" content="See our happy clients at Digicells International. We build brands and beautiful websites for businesses worldwide. Trusted by 150+ clients globally." />
    <meta name="keywords" content="clients, happy clients, case studies, testimonials, Digicells International, web development clients" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://digicellsinternational.com/clients" />
    <!-- Open Graph -->
    <meta property="og:title" content="Our Happy Clients – Digicells International" />
    <meta property="og:description" content="See our happy clients at Digicells International. We build brands and beautiful websites for businesses worldwide." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://digicellsinternational.com/clients" />
    <meta property="og:image" content="https://digicellsinternational.com/digicells-logo-official.png" />
    <!-- Schema.org -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Happy Clients – Digicells International",
            "description": "See our happy clients at Digicells International. We build brands and beautiful websites for businesses worldwide.",
            "url": "https://digicellsinternational.com/clients",
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
                        "name": "Clients",
                        "item": "https://digicellsinternational.com/clients"
                    }
                ]
            }
        }
    </script>
    <!-- ===== ASSETS ===== -->
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="assets/css/clients.css" />
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
            <div class="clients-page-breadcrumb">
                <a href="/">Home</a> <span>›</span> <span data-i18n="clients.breadcrumb">Our Clients</span>
            </div>

            <!-- Hero -->
            <div class="clients-page-hero">
                <h1 data-i18n="clients.page.title">Our <span>Clients</span></h1>
                <p data-i18n="clients.page.desc">We are proud to work with amazing businesses and organizations around the world. Here are some of our valued clients who trust us with their digital needs.</p>
            </div>

            <!-- Intro -->
            <div class="clients-intro">
                <p data-i18n="clients.intro">We are a software house in Islamabad building brands and beautiful websites for clients who need a little help to create something truly special. We do it with love in Brighton for clients all around the world and we can do it for you too.</p>
            </div>

            <!-- Stats -->
            <div class="clients-stats">
                <div class="stat-item">
                    <span class="stat-number" data-target="150">150+</span>
                    <span class="stat-label" data-i18n="clients.stats.clients">Happy Clients</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number" data-target="350">350+</span>
                    <span class="stat-label" data-i18n="clients.stats.projects">Projects Delivered</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number" data-target="30">30+</span>
                    <span class="stat-label" data-i18n="clients.stats.countries">Countries Served</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number" data-target="10">10+</span>
                    <span class="stat-label" data-i18n="clients.stats.experience">Years Experience</span>
                </div>
            </div>

            <!-- Clients Grid -->
            <div class="clients-grid">

                <!-- Client: MedLink Analytics LLC -->
                <div class="client-card">
                    <a href="https://medlinkanalytics.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <span class="client-icon-fallback">🏥</span>
                        <div class="client-caption">medlinkanalytics.com</div>
                    </a>
                </div>

                <!-- Client: Naveen Khan Words -->
                <div class="client-card">
                    <a href="https://www.naveenkhanwords.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <span class="client-icon-fallback">✍️</span>
                        <div class="client-caption">naveenkhanwords.com</div>
                    </a>
                </div>

                <!-- Client: SHINISA Organic Oils -->
                <div class="client-card">
                    <a href="https://shinisa.com" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2025/04/shinisa.png" alt="SHINISA Organic Oils" class="client-logo" loading="lazy">
                        <div class="client-caption">shinisa.com</div>
                    </a>
                </div>

                <!-- Client: HI Salon Systems -->
                <div class="client-card">
                    <a href="https://hi-salonsystems.co.uk/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2025/04/hi-salonsystems.png" alt="hi-salonsystems.co.uk" class="client-logo" loading="lazy">
                        <div class="client-caption">hi-salonsystems.co.uk</div>
                    </a>
                </div>

                <!-- Client: Rapido -->
                <div class="client-card">
                    <a href="https://rapido.com.qa" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2025/04/rapido.png" alt="rapido" class="client-logo" loading="lazy">
                        <div class="client-caption">rapido.com.qa</div>
                    </a>
                </div>

                <!-- Client: Kimberly Armstrong -->
                <div class="client-card">
                    <a href="https://kimberlyarmstrong.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2025/04/kimberlyarmstrong.png" alt="kimberlyarmstrong" class="client-logo" loading="lazy">
                        <div class="client-caption">kimberlyarmstrong.com</div>
                    </a>
                </div>

                <!-- Client: True Grit Detroit -->
                <div class="client-card">
                    <a href="https://www.truegritdetroit.com" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2025/04/truegritdetroit.png" alt="truegritdetroit" class="client-logo" loading="lazy">
                        <div class="client-caption">truegritdetroit.com</div>
                    </a>
                </div>

                <!-- Client: Totem Tribe -->
                <div class="client-card">
                    <a href="https://www.totem-tribe.co.uk" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2025/04/totem-tribe-.png" alt="totem-tribe.co.uk" class="client-logo" loading="lazy">
                        <div class="client-caption">totem-tribe.co.uk</div>
                    </a>
                </div>

                <!-- Client: Osiris Immigration -->
                <div class="client-card">
                    <a href="http://osirisimmigration.co.uk/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2025/04/osirisimmigration.png" alt="osirisimmigration.co.uk" class="client-logo" loading="lazy">
                        <div class="client-caption">osirisimmigration.co.uk</div>
                    </a>
                </div>

                <!-- Client: Orion Integrated Technical -->
                <div class="client-card">
                    <a href="https://orionintegratedtechnical.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2025/04/orionintegratedtechnical.png" alt="orion integrated technical services" class="client-logo" loading="lazy">
                        <div class="client-caption">orionintegratedtechnical.com</div>
                    </a>
                </div>

                <!-- Client: HiRays Real Estate -->
                <div class="client-card">
                    <a href="https://hiraysrealestate.com" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2025/04/hiraysrealestate.png" alt="hiraysrealestate dubai" class="client-logo" loading="lazy">
                        <div class="client-caption">hiraysrealestate.com</div>
                    </a>
                </div>

                <!-- Client: Living Fresh Produce -->
                <div class="client-card">
                    <a href="https://livingfreshproduce.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2024/05/livingfreshproduce-com.png" alt="livingfreshproduce.com" class="client-logo" loading="lazy">
                        <div class="client-caption">livingfreshproduce.com</div>
                    </a>
                </div>

                <!-- Client: Enkill -->
                <div class="client-card">
                    <a href="https://enkill.qa/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2024/05/enkill-qa.png" alt="enkill.qa" class="client-logo" loading="lazy">
                        <div class="client-caption">enkill.qa</div>
                    </a>
                </div>

                <!-- Client: Aloe Sun -->
                <div class="client-card">
                    <a href="https://aloesun.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2024/05/aloesun.png" alt="aloesun.com" class="client-logo" loading="lazy">
                        <div class="client-caption">aloesun.com</div>
                    </a>
                </div>

                <!-- Client: Halal Pharmacore -->
                <div class="client-card">
                    <a href="https://halalpharmacore.com" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2024/07/halalpharmacore.png" alt="halalpharmacore.com" class="client-logo" loading="lazy">
                        <div class="client-caption">halalpharmacore.com</div>
                    </a>
                </div>

                <!-- Client: MyDX Life -->
                <div class="client-card">
                    <a href="https://www.mydxlife.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2024/07/mydxlife.png" alt="mydxlife.com" class="client-logo" loading="lazy">
                        <div class="client-caption">mydxlife.com</div>
                    </a>
                </div>

                <!-- Client: Glow by Rabia -->
                <div class="client-card">
                    <a href="https://glowbyrabia.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2024/07/glowbyrabia.png" alt="glowbyrabia.com" class="client-logo" loading="lazy">
                        <div class="client-caption">glowbyrabia.com</div>
                    </a>
                </div>

                <!-- Client: Sevenfold Travels -->
                <div class="client-card">
                    <a href="https://sevenfoldtravels.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2024/07/sevenfoldtravels.png" alt="sevenfoldtravels.com" class="client-logo" loading="lazy">
                        <div class="client-caption">sevenfoldtravels.com</div>
                    </a>
                </div>

                <!-- Client: MedEasy RCM -->
                <div class="client-card">
                    <a href="https://medeasyrcm.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2024/07/medeasyrcm-1.png" alt="medeasyrcm.com" class="client-logo" loading="lazy">
                        <div class="client-caption">medeasyrcm.com</div>
                    </a>
                </div>

                <!-- Client: The Platinum Partnership -->
                <div class="client-card">
                    <a href="https://theplatinumpartnership.com" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2024/07/Platinumpatnership.png" alt="theplatinumpartnership.com" class="client-logo" loading="lazy">
                        <div class="client-caption">theplatinumpartnership.com</div>
                    </a>
                </div>

                <!-- Client: Atlantic Green Cross -->
                <div class="client-card">
                    <a href="http://atlanticgreencross.co" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2023/12/atlanticgreencross.jpg" alt="atlanticgreencross.co" class="client-logo" loading="lazy">
                        <div class="client-caption">atlanticgreencross.co</div>
                    </a>
                </div>

                <!-- Client: Alcotraz -->
                <div class="client-card">
                    <a href="https://www.alcotraz.co.uk/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2023/12/alcotraz.jpg" alt="alcotraz.co.uk" class="client-logo" loading="lazy">
                        <div class="client-caption">alcotraz.co.uk</div>
                    </a>
                </div>

                <!-- Client: Tillat Pharmaceuticals -->
                <div class="client-card">
                    <a href="https://tillatpharmaceuticals.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2023/12/tillatpharmaceuticals.jpg" alt="tillatpharmaceuticals.com" class="client-logo" loading="lazy">
                        <div class="client-caption">tillatpharmaceuticals.com</div>
                    </a>
                </div>

                <!-- Client: Shad Foundation -->
                <div class="client-card">
                    <a href="https://shadfoundation.org.pk/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2023/12/shad-foundation-updated.jpg" alt="shad foundation" class="client-logo" loading="lazy">
                        <div class="client-caption">shadfoundation.org.pk</div>
                    </a>
                </div>

                <!-- Client: Spa Violasole -->
                <div class="client-card">
                    <a href="https://spaviolasole.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2023/12/spaviolasole.jpg" alt="spaviolasole.com" class="client-logo" loading="lazy">
                        <div class="client-caption">spaviolasole.com</div>
                    </a>
                </div>

                <!-- Client: Brighton Murder Mystery -->
                <div class="client-card">
                    <a href="https://www.brightonmurdermystery.co.uk/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2023/12/brightonmurdermystery.jpg" alt="brightonmurdermystery.co.uk" class="client-logo" loading="lazy">
                        <div class="client-caption">brightonmurdermystery.co.uk</div>
                    </a>
                </div>

                <!-- Client: A1 American Roofing -->
                <div class="client-card">
                    <a href="https://a1americanroofing.net/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/a1america.png" alt="american roofing" class="client-logo" loading="lazy">
                        <div class="client-caption">a1americanroofing.net</div>
                    </a>
                </div>

                <!-- Client: D-Marketing -->
                <div class="client-card">
                    <a href="https://d-marketing.com.pk/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/d-marketing.png" alt="d-marketing.com.pk" class="client-logo" loading="lazy">
                        <div class="client-caption">d-marketing.com.pk</div>
                    </a>
                </div>

                <!-- Client: Drain Pros 805 -->
                <div class="client-card">
                    <a href="https://www.drainpros805.com" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/drainpros805.png" alt="drainpros805" class="client-logo" loading="lazy">
                        <div class="client-caption">drainpros805.com</div>
                    </a>
                </div>

                <!-- Client: Blackshop Black -->
                <div class="client-card">
                    <a href="https://blackshopblack.ch/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/blackshopblackch.png" alt="blackshopblack.ch" class="client-logo" loading="lazy">
                        <div class="client-caption">blackshopblack.ch</div>
                    </a>
                </div>

                <!-- Client: Africa Online System -->
                <div class="client-card">
                    <a href="http://africaonlinesystem.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/africaonlinesystem.png" alt="africaonlinesystem.com" class="client-logo" loading="lazy">
                        <div class="client-caption">africaonlinesystem.com</div>
                    </a>
                </div>

                <!-- Client: Eastern Services -->
                <div class="client-card">
                    <a href="https://easternservices.pk/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/easternservices.png" alt="easternservices.pk" class="client-logo" loading="lazy">
                        <div class="client-caption">easternservices.pk</div>
                    </a>
                </div>

                <!-- Client: Falfa -->
                <div class="client-card">
                    <a href="https://falfa.co.uk" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/falfa.png" alt="falfa.co.uk" class="client-logo" loading="lazy">
                        <div class="client-caption">falfa.co.uk</div>
                    </a>
                </div>

                <!-- Client: Flipbay -->
                <div class="client-card">
                    <a href="https://www.flipbay.com.ng" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/flipbay.png" alt="flipbay.com.ng" class="client-logo" loading="lazy">
                        <div class="client-caption">flipbay.com.ng</div>
                    </a>
                </div>

                <!-- Client: Panorama System -->
                <div class="client-card">
                    <a href="https://panoramasystem.eu" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/panoramasystem.png" alt="panoramasystem.eu" class="client-logo" loading="lazy">
                        <div class="client-caption">panoramasystem.eu</div>
                    </a>
                </div>

                <!-- Client: PLR 786 -->
                <div class="client-card">
                    <a href="https://plr786.com" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/plr786.png" alt="plr786.com" class="client-logo" loading="lazy">
                        <div class="client-caption">plr786.com</div>
                    </a>
                </div>

                <!-- Client: Bridey -->
                <div class="client-card">
                    <a href="https://bridey.com" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/bridey.png" alt="bridey.com" class="client-logo" loading="lazy">
                        <div class="client-caption">bridey.com</div>
                    </a>
                </div>

                <!-- Client: Spreadsheet -->
                <div class="client-card">
                    <a href="https://www.spreadsheet.com" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/10/spreadsheet.png" alt="spreadsheet.com" class="client-logo" loading="lazy">
                        <div class="client-caption">spreadsheet.com</div>
                    </a>
                </div>

                <!-- Client: CDRS World -->
                <div class="client-card">
                    <a href="https://www.cdrsworld.org/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2023/12/cdrsworld.jpg" alt="cdrsworld.org" class="client-logo" loading="lazy">
                        <div class="client-caption">cdrsworld.org</div>
                    </a>
                </div>

                <!-- Client: Alqamar Lajpal -->
                <div class="client-card">
                    <a href="https://alqamarlajpal.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2023/12/alqamarlajpal.jpg" alt="alqamarlajpal.com" class="client-logo" loading="lazy">
                        <div class="client-caption">alqamarlajpal.com</div>
                    </a>
                </div>

                <!-- Client: VIP Properties -->
                <div class="client-card">
                    <a href="https://www.vipproperties.com" target="_blank" rel="noopener noreferrer" class="client-link">
                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://digicellinternational.shinisa.com/wp-content/uploads/2021/09/client04-1.png" alt="VIP Properties Islamabad" class="client-logo" loading="lazy">
                        <div class="client-caption">vipproperties.com</div>
                    </a>
                </div>

            </div>

            <!-- Trusted Section -->
            <div class="trusted-section">
                <h2 data-i18n="clients.trusted.title">Trusted by Businesses Worldwide</h2>
                <p data-i18n="clients.trusted.desc">From startups to established enterprises, we partner with organizations of all sizes to deliver exceptional digital solutions.</p>
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
    <script src="assets/js/clients.js"></script>

</body>
</html>