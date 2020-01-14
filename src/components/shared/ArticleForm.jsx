import React from 'react';

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
    author_id,
    onChange,
    onSubmit,
    wysiwygHandler
}) => {

    return(
        <form className="articleForm" onSubmit={e => onSubmit(e)} >
            <div className="row1">
                <h2>New Article</h2>
                <select name="section_id" value={section_id} onChange={(e) => onChange(e)} >
                    <option value="0">---</option>
                    <option value="1">Random Articles</option>
                </select>
            </div>
            <input name="title" type="text" value={title} onChange={(e) => onChange(e)} />
            <input name="dek" type="text" value={dek} onChange={(e) => onChange(e)} />
            <div className="row4">
                <select name="author_id" value={author_id} onChange={(e) => onChange(e)}>
                    <option value="0">Staff</option>
                    <option value="1">Jeremy Rose</option>
                </select>
                <input name="updated_at" type="text" value={updated_at} onChange={(e) => onChange(e)} />
            </div>
            <div className="heroRow">
                <img src="broken.jpg" alt={caption} />
                <div className="heroColumn">
                    <input name="caption" type="text" value={caption} onChange={(e) => onChange(e)} />
                    <input name="credit" type="text" value={credit} onChange={(e) => onChange(e)} />
                    <button name="changePhoto">Change photo</button>
                </div>
            </div>
            <div id="content" contentEditable="true" onBlur={() => wysiwygHandler('content')} dangerouslySetInnerHTML={{__html: content}} />
            <div className="submitRow">
                <button name="draft" label="Draft" />
                <button name="published" label="Publish" />
                <input type="submit" />
            </div>

        </form>
    )
}

export default ArticleForm;