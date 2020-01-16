import React from 'react'
import { getSectionToEdit, updateTopStory, addFeatured, removeFeatured } from '../services/ApiMethods.js'
import '../styles/EditSection.css'
import Articles from './Articles.jsx'

class EditSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            section: {},
            feature_ids: []
        }
    }

    componentDidMount = async () => {
        this.setSection(this.props.match.params.id);
    }

    setSection = async (id) => {
        const section = await getSectionToEdit(id);
        const feature_ids = section.features.map(feature => feature.article_id)
        this.setState({
            section: section,
            feature_ids: feature_ids
        })
    }

    topToggle = async (id) => {
        const newSectionInfo = await updateTopStory(this.props.match.params.id, id)
        this.setSection(this.props.match.params.id);
    }

    featureToggle = async (id) => {
        if (!this.state.feature_ids.includes(id)) {
            await addFeatured(this.props.match.params.id, id);
        } else {
            const feature_id = this.state.section.features.filter(feature => feature.article_id == id)[0].id;
            await removeFeatured(feature_id);
        }
        this.setSection(this.props.match.params.id);
    }

    render() {
        return (
            <div className="sectionEdit">
                <h2>{this.state.section ? this.state.section.title : null }</h2>
                <Articles 
                    sectionId={this.props.match.params.id}
                    articles={this.state.section && this.state.section.articles}
                    top_story={this.state.section && this.state.section.top_story}
                    feature_ids={this.state.section && this.state.feature_ids}
                    topToggle={this.topToggle}
                    featureToggle={this.featureToggle}
                />
            </div>

        )
    }
}

export default EditSection