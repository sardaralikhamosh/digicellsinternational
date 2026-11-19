<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/lang.php';

$pageTitle = t('divisions.healthcare.name') . ' — ' . SITE_NAME;
$pageDesc = t('divisions.healthcare.summary');
$canonicalPath = 'healthcare-solutions.php';
$pageDivision = 'healthcare';
$currentPage = 'healthcare';
$pageSchema = [
    '@context' => 'https://schema.org',
    '@type' => 'Service',
    'serviceType' => 'Medical billing, revenue cycle management, credentialing, and medical coding',
    'provider' => ['@type' => 'Organization', 'name' => SITE_NAME],
    'areaServed' => 'US',
];

require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/nav.php';
?>
<main id="main">

  <header class="page-header" data-division="healthcare">
    <div class="container">
      <p class="eyebrow"><?php echo t('divisions.healthcare.tag'); ?></p>
      <h1><?php echo t('divisions.healthcare.name'); ?></h1>
      <p style="max-width:60ch;font-size:1.1rem;"><?php echo t('divisions.healthcare.summary'); ?></p>
      <a href="/contact.php?division=healthcare" class="btn btn-primary"><?php echo t('divisions.healthcare.cta'); ?></a>
    </div>
  </header>

  <section class="section" data-division="healthcare">
    <div class="container">
      <h2><?php echo t('divisions.healthcare.services_title'); ?></h2>
      <ul class="service-list" style="--accent:var(--healthcare);">
        <?php for ($i = 1; $i <= 5; $i++): ?>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
          <span><?php echo t('divisions.healthcare.s' . $i); ?></span>
        </li>
        <?php endfor; ?>
      </ul>
    </div>
  </section>

  <section class="section section--tight" data-division="healthcare">
    <div class="container">
      <div class="callout" style="--accent:var(--healthcare);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
        <p><?php echo t('divisions.healthcare.compliance_note'); ?></p>
      </div>
    </div>
  </section>

  <section class="section section--sunken">
    <div class="container">
      <h2><?php echo t('divisions.healthcare.process_title'); ?></h2>
      <div class="process-steps" style="--accent:var(--healthcare);">
        <div class="process-step"><p class="step-index">01</p><h3 style="font-size:1.05rem;">Secure intake</h3><p>New practice conversations move to a secure, dedicated channel — never this public form — before any account or patient details are exchanged.</p></div>
        <div class="process-step"><p class="step-index">02</p><h3 style="font-size:1.05rem;">Setup</h3><p>Payer enrollment, credentialing, and system access configured against your practice's specifics.</p></div>
        <div class="process-step"><p class="step-index">03</p><h3 style="font-size:1.05rem;">Run</h3><p>Coding, billing, and claims management handled by a dedicated team for your practice.</p></div>
        <div class="process-step"><p class="step-index">04</p><h3 style="font-size:1.05rem;">Report</h3><p>Regular visibility into claims status, denials, and collections.</p></div>
      </div>
    </div>
  </section>

</main>
<?php require_once __DIR__ . '/includes/footer.php'; ?>
