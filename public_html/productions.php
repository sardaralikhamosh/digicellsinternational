<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/lang.php';

$pageTitle = t('divisions.productions.name') . ' — ' . SITE_NAME;
$pageDesc = t('divisions.productions.summary');
$canonicalPath = 'productions.php';
$pageDivision = 'productions';
$currentPage = 'productions';
$pageSchema = [
    '@context' => 'https://schema.org',
    '@type' => 'Service',
    'serviceType' => 'Video, audio, and content production',
    'provider' => ['@type' => 'Organization', 'name' => SITE_NAME],
    'areaServed' => 'Worldwide',
];

require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/nav.php';
?>
<main id="main">

  <header class="page-header" data-division="productions">
    <div class="container">
      <p class="eyebrow"><?php echo t('divisions.productions.tag'); ?></p>
      <h1><?php echo t('divisions.productions.name'); ?></h1>
      <p style="max-width:60ch;font-size:1.1rem;"><?php echo t('divisions.productions.summary'); ?></p>
      <a href="/contact.php?division=productions" class="btn btn-primary"><?php echo t('divisions.productions.cta'); ?></a>
    </div>
  </header>

  <section class="section" data-division="productions">
    <div class="container">
      <h2><?php echo t('divisions.productions.services_title'); ?></h2>
      <ul class="service-list" style="--accent:var(--productions);">
        <?php for ($i = 1; $i <= 5; $i++): ?>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
          <span><?php echo t('divisions.productions.s' . $i); ?></span>
        </li>
        <?php endfor; ?>
      </ul>
    </div>
  </section>

  <section class="section section--sunken">
    <div class="container">
      <h2><?php echo t('divisions.productions.process_title'); ?></h2>
      <div class="process-steps" style="--accent:var(--productions);">
        <div class="process-step"><p class="step-index">01</p><h3 style="font-size:1.05rem;">Brief</h3><p>We define audience, format, and deliverables before a camera or mic turns on.</p></div>
        <div class="process-step"><p class="step-index">02</p><h3 style="font-size:1.05rem;">Produce</h3><p>Filming, recording, or writing, with review checkpoints built in.</p></div>
        <div class="process-step"><p class="step-index">03</p><h3 style="font-size:1.05rem;">Edit</h3><p>Post-production, motion graphics, and platform-specific cutdowns.</p></div>
        <div class="process-step"><p class="step-index">04</p><h3 style="font-size:1.05rem;">Deliver</h3><p>Final files in the formats and specs each channel needs.</p></div>
      </div>
    </div>
  </section>

</main>
<?php require_once __DIR__ . '/includes/footer.php'; ?>
