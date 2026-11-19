<?php
// ============================================================
// index.php - Front-controller / Router
// ============================================================

// Load configuration
require_once $_SERVER['DOCUMENT_ROOT'] . '/assets/config.php';

// Get the clean request URI (without query string)
$request = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

// Default route (home)
if (empty($request)) {
    $page = 'home';
} else {
    $page = $request;
}

// Map routes to physical PHP files
// You can extend this array for dynamic routes later
$routes = [
    'about'                 => 'about.php',
    'contact'               => 'contact.php',
    'pricing'               => 'pricing.php',
    'clients'               => 'clients.php',
    'teams'                 => 'teams.php',
    'services'              => 'services/index.php',
    // Add any other static routes here
];

// Check if route exists
if (isset($routes[$page])) {
    $file = $routes[$page];
} else {
    // Try to match dynamic service routes like services/digital-marketing
    // You can implement more sophisticated matching here
    $file = null;
    // For example, if request starts with 'services/', map to services/index.php
    // and let that page handle the sub-route via $_GET or PATH_INFO
    if (strpos($page, 'services/') === 0) {
        $file = 'services/index.php';
        // Optionally, pass the sub-path as a parameter
        $_GET['service_slug'] = substr($page, 9); // e.g., 'digital-marketing'
    }
}

// If no route found, show 404
if (!$file || !file_exists($file)) {
    header('HTTP/1.0 404 Not Found');
    // You can include a custom 404 page here
    include '404.php';
    exit;
}

// Include the target file (header/footer will be included inside)
include $file;
?>