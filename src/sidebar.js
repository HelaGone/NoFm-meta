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
		this.handleSelectValue = this.handleSelectValue.bind(this);
		this.state={
			_id_youtube:{
				key: null,
				value: null
			},
			_id_vimeo:{
				key: null,
				value: null
			},
			_podcast_duration: {
				key: null,
				value: null
			},
			_podcast_url: {
				key: null,
				value: null
			},
			_podcast_show:{
				key: null,
				value: null
			},
			_prog_horario_dias:{
				key: null,
				value: null
			},
			_prog_hora:{
				key: null,
				value: null
			},
			_prog_duration:{
				key: '',
				value: null
			},
			programas: [],
			is_pt_post: false,
			is_cpt_programs: false,
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

		if(postType!=='archivo'){
			wp.apiFetch({
				path: path,
				method: 'GET'
			}).then(data=>{
					this.setState({
						_id_youtube: {
							key:'_id_youtube',
							value: data.meta._id_youtube
						},
						_id_vimeo: {
							key:'_id_vimeo',
							value: data.meta._id_vimeo
						},
						_podcast_duration: {
							key: '_podcast_duration',
							value: data.meta._podcast_duration
						},
						_podcast_url: {
							key: '_podcast_url',
							value: data.meta._podcast_url
						},
						_podcast_show:{
							key: '_podcast_show',
							value: data.meta._podcast_show
						},
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
					});
				return data;
			}).catch(error=>console.error(error));
		}	

	}//end constructor

	componentDidMount(){
		const {getCurrentPostType} = select('core/editor');

		if(getCurrentPostType() === 'post'){
			if(!this.state.is_pt_post){
				this.setState({
					is_pt_post: true,
					is_cpt_podcasts: false,
					is_cpt_programs: false,
				});
			}
		}else if(getCurrentPostType() === 'podcasts'){
			if(!this.state.is_cpt_podcasts){
				this.setState({
					is_pt_post: false,
					is_cpt_podcasts: true,
					is_cpt_programs: false,
				});
			}
		}else if(getCurrentPostType() === 'programas'){
			if(!this.state.is_cpt_programs){
				this.setState({
					is_pt_post: false,
					is_cpt_podcasts: false,
					is_cpt_programs: true,
				});
			}
		}

		//Getting posts from programas CPT
		wp.apiFetch({
			path: 'wp/v2/programas/',
			method: 'GET'
		})
		.then(response=>{
			this.setState({
				programas: response
			});
			return response
		})
		.catch(error=>console.error(error));

	}// End did mount


	static getDerivedStateFromProps(nextProps, state){
		const state_arr = Object.values(state);
		const {postType} = nextProps;

		if(postType!=='archivo'){

			const filtered = state_arr.filter(object=>{
				if( (typeof(object.key)!=='object') ||  object.key!=''){
					return object.key;
				}
				return null;
			});

			filtered.map(keypar=>{
					if((nextProps.isPublishing||nextProps.isSaving) && !nextProps.isAutoSaving){
						wp.apiRequest({
							path: `/nofm/v2/update-meta?id=${nextProps.postId}`,
							method: 'POST',
							data: keypar
						}).then(
							(data)=>{
								return data;
						},(err)=>{
							return err;
						});
					}
			}); //End map
		}//End if archivo
	}//end get derived state from props

	render(){
		const {is_pt_post, is_cpt_programs, is_cpt_podcasts, programas} = this.state;
		let metabox_render;
		// console.log(this.state);
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

					<label>Programa al que pertenece</label><br/>
					<select name="_podcast_show" onChange={this.handleSelectValue} value={this.state._podcast_show.value}>
						<option value="">Sin programa</option>
						{
							programas.map(programa=>{
								return(	
									<option key={programa.id} value={programa.id}>{programa.title.rendered}</option>
								)
							})
						}
					</select>
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
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]:{
				key: name,
				value: value
			}
		});

	}//end handle input value

	handleSelectValue(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;
		// console.log(`${value} -> ${name}`);

		this.setState({
			[name]: {
				key: name,
				value: value
			}
		});

	}

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
