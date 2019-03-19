<?php
/*
 * Register the meta key to rest api
*/
function nofm_register_meta(){
	register_meta('post','_id_youtube',array('type'=>'string','single'=>true,'show_in_rest'=>true));
	register_meta('post','_id_vimeo',array('type'=>'string','single'=>true,'show_in_rest'=>true));

	//podcasts' metaboxes
	register_meta('post','_podcast_duration',array('type'=>'string','single'=>true,'show_in_rest'=>true));
	register_meta('post','_podcast_url',array('type'=>'string','single'=>true,'show_in_rest'=>true));
	//Falta el metabox que guarda el programa al que pertenece
	
	//programas' metaboxes
	register_meta('post','_prog_horario_dias',array('type'=>'string','single'=>true,'show_in_rest'=>true));	
	register_meta('post','_prog_hora',array('type'=>'string','single'=>true,'show_in_rest'=>true));	
	register_meta('post','_prog_duration',array('type'=>'string','single'=>true,'show_in_rest'=>true));	
}
add_action('init', 'nofm_register_meta');

/*
 * This method will add our custom route to Wordpress REST API
 * /nofm/v2/update-meta/
*/
function nofm_api_posts_meta_field(){
	register_rest_route(
		'nofm/v2',
		'/update-meta',
		array(
			'methods'=>'POST',
			'callback'=>'nofm_update_meta_callback',
			'args'=>array(
				'id'=>array(
					'sanitize_callback'=>'absint'
				)
			)
		)
	);
}
add_action('rest_api_init', 'nofm_api_posts_meta_field');

function nofm_update_meta_callback($data){
	return update_post_meta($data['id'], $data['key'], $data['value']);
}