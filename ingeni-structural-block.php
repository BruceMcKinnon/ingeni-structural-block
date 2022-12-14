<?php
/**
 * Plugin Name:       Ingeni Structural Block
 * Description:       Provides additional HTML structural elements for implement background images and pseudo element images.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            Bruce McKinnon
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ingeni-structural-block
 *
 * @package           ingeni-structural
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ingeni_structural_block_init() {
	register_block_type( __DIR__ . '/build' );

	// Init auto-update from GitHub repo
	require 'plugin-update-checker/plugin-update-checker.php';
	$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
		'https://github.com/BruceMcKinnon/ingeni-structural-block',
		__FILE__,
		'ingeni-structural-block'
	);
}
add_action( 'init', 'ingeni_structural_block_init' );
