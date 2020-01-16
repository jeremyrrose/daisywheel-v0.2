import React from 'react';
import '../../styles/ArticleForm.css'
import checkMark from '../../images/checkMark.svg'

const ArticleForm = ({
    id,
    title,
    dek,
    content,
    image,
    caption,
    credit,
    url,
    published,
    updated_at,
    section_id,
    sections,
    author_id,
    onChange,
    toggle,
    onSubmit,
    wysiwygHandler
}) => {

    const header = id ? <h2>Edit Article</h2> : <h2>New Article</h2>
    const sectionSelect = sections && sections.map((section, index) => <option key={index} value={section.id}>{section.title}</option>)

    return(
        <form className="articleForm" onSubmit={e => onSubmit(e)} >
            <div className="row1">
                {header}
                <div>
                    <label for="section_id">Section</label>
                    <select name="section_id" value={section_id} onChange={(e) => onChange(e)} >
                        {sectionSelect}
                        <option value={0}>:: Static Page</option>
                    </select>
                </div>
            </div>
            <div class="wideInput">
                <label for="title">Article title</label>
                <input name="title" type="text" value={title} onChange={(e) => onChange(e)} />
            </div>
            <div class="wideInput">
                <label for="dek">Dek</label>
                <input name="dek" type="text" value={dek} onChange={(e) => onChange(e)} />
            </div>
            <div className="row4">
                <div>
                    <label for="author_id">Author</label>
                    <select name="author_id" value={author_id} onChange={(e) => onChange(e)}>
                        <option value="0">Staff</option>
                        <option value="1">Jeremy Rose</option>
                    </select>
                </div>
                <input name="updated_at" type="text" value={updated_at} onChange={(e) => onChange(e)} />
            </div>
            <div className="heroRow">
                <div>
                    <label>Hero image</label>
                    <img src="broken.jpg" alt={caption} />
                </div>
                <div className="heroColumn">
                    <div>
                        <label for="caption">Photo caption</label>
                        <input name="caption" type="text" value={caption} onChange={(e) => onChange(e)} />
                    </div>
                    <div>
                        <label for="credit">Photo credit</label>
                        <input name="credit" type="text" value={credit} onChange={(e) => onChange(e)} />
                    </div>
                    <button name="changePhoto">Change photo</button>
                </div>
            </div>
            <div>
                <label for="content">Article body</label>
                <div id="content" contentEditable="true" onBlur={() => wysiwygHandler('content')} dangerouslySetInnerHTML={{__html: content}} />
            </div>
            <div className="submitRow">
                <button name="draft" className={published ? null : 'checkOn'} onClick={(e) => toggle(e,'draft')}>Draft <img src={checkMark} /></button>
                <button name="publish" className={published ? 'checkOn' : null} onClick={(e) => toggle(e, 'publish')}>Publish <img src={checkMark} /></button>
                <input type="submit" />
            </div>

        </form>
    )
}

export default ArticleForm;