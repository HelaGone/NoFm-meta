/**
 * Internal block libraries
 */
const {__} = wp.i18n;
const {PluginSidebar,PluginSidebarMoreMenuItem} = wp.editPost;
const {PanelBody,TextControl, TextareaControl} = wp.components;
const {Component,Fragment} = wp.element;
const {withSelect} = wp.data;
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
			}
		}

		wp.apiFetch({
			path: `/wp/v2/posts/${this.props.postId}`,
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
				}
			});
			return data;
		}).catch(error=>console.error(error));

	}//end constructor


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
		return(
			<Fragment>
				<PluginSidebarMoreMenuItem target="nofm-metadata-sidebar">
					{ __( 'NoFm Metadata' ) }
				</PluginSidebarMoreMenuItem>
				<PluginSidebar name="nofm-metadata-sidebar" title={ __( 'Nofm Metadata' ) }>
					<PanelBody>
							<label for="_id_youtbe">Id de Youtube</label><br/>
							<input type="text" name="_id_youtube" value={this.state._id_youtube.value} onChange={this.handleInputValue} /><br/>

							<label for="_id_vimeo">Id de Vimeo</label><br/>
							<input type="text" name="_id_vimeo" value={this.state._id_vimeo.value} onChange={this.handleInputValue} /><br/>
					</PanelBody>
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
