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
			key: '_id_youtube',
			value: ''
		}

		wp.apiFetch({
			path: `/wp/v2/posts/${this.props.postId}`, 
			method: 'GET'
		}).then(data=>{
			// console.log(data.meta);
			this.setState({
				key:'_id_youtube',
				value: data.meta._id_youtube
			});
			return data;
		}).catch(error=>console.error(error));

	}//end constructor


	static getDerivedStateFromProps(nextProps, state){

		if((nextProps.isPublishing||nextProps.isSaving) && !nextProps.isAutoSaving){
			wp.apiRequest({
				path: `/nofm/v2/update-meta?id=${nextProps.postId}`,
				method: 'POST',
				data: state
			}).then(
				(data)=>{
					return data;
			},(err)=>{
				return err;
			});
		}

	}//end get derived state from props


	render(){
		// console.log(this.state);
		return(
			<Fragment>
				<PluginSidebarMoreMenuItem target="nofm-metadata-sidebar">
					{ __( 'NoFm Metadata' ) }
				</PluginSidebarMoreMenuItem>
				<PluginSidebar name="nofm-metadata-sidebar" title={ __( 'Nofm Metadata' ) }>
					<PanelBody>
						<TextControl
							label={ __( 'ID de youtube' ) }
							value={this.state.value}
							onChange={this.handleInputValue}
						/>
					</PanelBody>
				</PluginSidebar>
			</Fragment>
		)
	}//end render

	handleInputValue(value){
		console.log(value);
		this.setState({
			key: '_id_youtube',
			value: value
		})
	}

}

const HOC = withSelect((select, {forceIsSaving})=>{
	const { getCurrentPostId, isSavingPost, isPublishingPost, isAutosavingPost, getEditedPostAttribute, isTyping, getPermalink} = select('core/editor');
	return{
		postId: getCurrentPostId(),
		isSaving: forceIsSaving || isSavingPost(),
		isAutoSaving: isAutosavingPost(),
		isPublishing: isPublishingPost(),
		isTyping: isTyping(),
	}
})(NofmMetadata);

registerPlugin('nofm-metadata', {
	icon: 'editor-spellcheck',
	render: HOC
});
