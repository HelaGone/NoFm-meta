/**
 * Internal block libraries
 */
const {__} = wp.i18n;
const {PluginSidebar,PluginSidebarMoreMenuItem} = wp.editPost;
const {PanelBody,TextControl, TextareaControl} = wp.components;
const {Component,Fragment} = wp.element;
const {withSelect, select} = wp.data;
const {registerPlugin} = wp.plugins;
const {addAction} = wp.hooks;

class NofmMetadata extends Component{
	constructor(props){
		super(props);
		this.handleInputValue = this.handleInputValue.bind(this);
		this.state={
			_id_youtube:{
				key: '',
				value: ''
			},
			_id_vimeo:{
				key: '',
				value: ''
			},
			_podcast_duration: {
				key: '',
				value: ''
			},
			_podcast_url: {
				key: '',
				value: ''
			},
			_prog_horario_dias:{
				key: '',
				value: ''
			},
			_prog_hora:{
				key: '',
				value: ''
			},
			_prog_duration:{
				key: '',
				value: ''
			},
			should_render: false,
			is_pt_post: false,
			is_cpt_programs: false,
			is_cpt_archive: false,
			is_cpt_podcasts: false
		}

		const {postType} = this.props
		let path;
		if(postType==='post'){
			path = `/wp/v2/posts/${this.props.postId}`; 
		}else if(postType==='podcasts'){
			path = `/wp/v2/podcasts/${this.props.postId}`;
		}else if(postType==='programas'){
			path = `/wp/v2/programas/${this.props.postId}`;
		}

		wp.apiFetch({
			path: path,
			method: 'GET'
		}).then(data=>{
			if(postType==='post'){
				this.setState({
					_id_youtube: {
						key:'_id_youtube',
						value: data.meta._id_youtube
					},
					_id_vimeo: {
						key:'_id_vimeo',
						value: data.meta._id_vimeo
					}
				});
			}else if(postType==='podcasts'){
				this.setState({
					_podcast_duration: {
						key: '_podcast_duration',
						value: data.meta._podcast_duration
					},
					_podcast_url: {
						key: '_podcast_url',
						value: data.meta._podcast_url
					}
				});
			}else if(postType==='programas'){
				this.setState({
					_prog_horario_dias:{
						key: '_prog_horario_dias',
						value: data.meta._prog_horario_dias
					},
					_prog_hora:{
						key: '_prog_hora',
						value: data.meta._prog_hora
					},
					_prog_duration:{
						key: '_prog_duration',
						value: data.meta._prog_duration
					}
				})
			}
			return data;
		}).catch(error=>console.error(error));

	}//end constructor

	componentDidMount(){
		const {getCurrentPostType} = select('core/editor');

		if(getCurrentPostType() === 'post'){
			if(!this.state.is_pt_post){
				this.setState({
					is_pt_post: true,
					is_cpt_podcasts: false,
					is_cpt_programs: false,
					is_cpt_archive: false
				});
			}
		}else if(getCurrentPostType() === 'podcasts'){
			if(!this.state.is_cpt_podcasts){
				this.setState({
					is_pt_post: false,
					is_cpt_podcasts: true,
					is_cpt_programs: false,
					is_cpt_archive: false
				});
			}
		}else if(getCurrentPostType() === 'programas'){
			if(!this.state.is_cpt_programs){
				this.setState({
					is_pt_post: false,
					is_cpt_podcasts: false,
					is_cpt_programs: true,
					is_cpt_archive: false
				});
			}
		}else if(getCurrentPostType() === 'archivo'){
			if(!this.state.is_cpt_archive){
				this.setState({
					is_pt_post: false,
					is_cpt_podcasts: false,
					is_cpt_programs: false,
					is_cpt_archive: true
				});
			}
		}

	}// End did mount


	static getDerivedStateFromProps(nextProps, state){
		const state_arr = Object.values(state);

		state_arr.map(object=>{
			if(object.key!==undefined){
				// console.log(object);
				if((nextProps.isPublishing||nextProps.isSaving) && !nextProps.isAutoSaving){
					wp.apiRequest({
						path: `/nofm/v2/update-meta?id=${nextProps.postId}`,
						method: 'POST',
						data: object
					}).then(
						(data)=>{
							return data;
					},(err)=>{
						return err;
					});
				}
			}

		}); //End map

	}//end get derived state from props

	render(){
		const {is_pt_post, is_cpt_archive, is_cpt_programs, is_cpt_podcasts} = this.state;
		let metabox_render;

		if(is_pt_post){
			metabox_render = (
				<PanelBody>
					<label for="_id_youtube">Id de Youtube</label><br/>
					<input type="text" name="_id_youtube" value={this.state._id_youtube.value} onChange={this.handleInputValue} /><br/>
					<label for="_id_vimeo">Id de Vimeo</label><br/>
					<input type="text" name="_id_vimeo" value={this.state._id_vimeo.value} onChange={this.handleInputValue} /><br/>
				</PanelBody>
			);
		}else if(is_cpt_podcasts){
			metabox_render = (
				<PanelBody>
					<label for="_podcast_duration">Duración del podcast</label><br/>
					<input type="text" name="_podcast_duration" value={this.state._podcast_duration.value} onChange={this.handleInputValue} /><br/>

					<label for="_podcast_url">Url del podcast</label><br/>
					<input type="text" name="_podcast_url" value={this.state._podcast_url.value} onChange={this.handleInputValue} /><br/>
				</PanelBody>
			);
		}else if(is_cpt_programs){
			metabox_render = (
				<PanelBody>
					<label for="_prog_horario_dias">Horario del programa</label><br/>
					<input type="text" name="_prog_horario_dias" value={this.state._prog_horario_dias.value} onChange={this.handleInputValue} placeholder="Lunes y Viernes" /><br/>

					<label for="_prog_hora">Hora del programa</label><br/>
					<input type="text" name="_prog_hora" value={this.state._prog_hora.value} onChange={this.handleInputValue} placeholder="0 - 23h" /><br/>

					<label for="_prog_duration">Duración del programa</label><br/>
					<input type="text" name="_prog_duration" value={this.state._prog_duration.value} onChange={this.handleInputValue} placeholder="30, 60 ó 90min" /><br/>
				</PanelBody>	
			);
		}

		return(
			<Fragment>
				<PluginSidebarMoreMenuItem target="nofm-metadata-sidebar">
					{ __( 'NoFm Metadata' ) }
				</PluginSidebarMoreMenuItem>
				<PluginSidebar name="nofm-metadata-sidebar" title={ __( 'Nofm Metadata' ) }>
					{metabox_render}
				</PluginSidebar>
			</Fragment>
		)
	}//end render

	handleInputValue(event){
		const target = event.target;
		const value = (target.type==='checkbox') ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]:{
				key: name,
				value: value
			}
		});

	}//end handle input value

}//End class

const HOC = withSelect((select, {forceIsSaving})=>{
	const { getCurrentPostId, getCurrentPostType, isSavingPost, isPublishingPost, isAutosavingPost, getEditedPostAttribute, isTyping, getPermalink} = select('core/editor');

	return{
		postId: getCurrentPostId(),
		isSaving: forceIsSaving || isSavingPost(),
		isAutoSaving: isAutosavingPost(),
		isPublishing: isPublishingPost(),
		isTyping: isTyping(),
		postType: getCurrentPostType()
	}

})( NofmMetadata );

registerPlugin('nofm-metadata', {
	icon: 'schedule',
	render: HOC
});
