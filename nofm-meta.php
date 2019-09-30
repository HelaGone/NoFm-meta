<?php
/*
 * Plugin Name: NoFm Metaboxes
 * Plugin URI: https://github.com/HelaGone/NoFm-meta
 * Description: Metaboxes para los CPT de NoFm
 * Author: Holkan Luna
 * Author URI: https://cubeinthebox.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: nofm-meta
 * Domain Path: /languages
 * @package nofm-meta
*/

define('NOFM_META_PATH', dirname(__FILE__));
define('NOFM_META_URL', trailingslashit( plugins_url('', __FILE__)));

//Exit if accessed directly
defined('ABSPATH') || exit;

include_once NOFM_META_PATH.'/includes/nofm-metaboxes.php';

/**
 * Enqueue front end and editor Javascript and CSS
*/
function nofm_meta_enqueue_scripts(){
	$blockpath = 'dist/block.js';
	$stylepath = 'dist/block_block.css';

	//JS
	wp_register_script(
		'nofm-meta-block-js',
		plugins_url($blockpath, __FILE__),
		array(
			'wp-i18n',
			'wp-edit-post',
			'wp-element',
			'wp-editor',
			'wp-components',
			'wp-data',
			'wp-plugins',
			'wp-edit-post',
			'wp-api'),
		filemtime(plugin_dir_path(__FILE__).$blockpath));
	wp_enqueue_script('nofm-meta-block-js');

	//CSS
	wp_enqueue_style('nofm-meta-block-css',plugins_url($stylepath, __FILE__),'',filemtime(plugin_dir_path(__FILE__).$stylepath));

	//wp_set_script_translations( 'nofm-meta-block-js', 'nofm-meta', plugin_dir_path( __FILE__ ) . 'languages' );
}
add_action('enqueue_block_editor_assets', 'nofm_meta_enqueue_scripts');


function nofm_meta_load_text_domain(){
	load_plugin_textdomain('nofm-meta', false, plugin_dir_path(__FILE__).'languages');
}
add_action('plugins_loaded', 'nofm_meta_load_text_domain');


/**
* The regular expression used to find formatting tags
* @var string
*/

$formatting_tag_pattern = '';

if(is_admin()){
	$formatting_tag_pattern = apply_filters( 'wp_seo_formatting_tag_pattern', '/#[a-zA-Z\_]+#/' );
}