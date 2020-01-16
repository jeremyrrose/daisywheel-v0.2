import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EditSections.css';

const EditSections = (props) => {

    const sectionList = props.magazine && props.magazine.sections && props.magazine.sections.map((section,index) => <Link key={index} to={`/edit/sections/${section.id}`}><button>{section.title}</button></Link>)

    return (
        <div className="editSections">
            {sectionList}
        </div>
    )
}

export default EditSections