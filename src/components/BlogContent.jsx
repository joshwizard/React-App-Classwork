function BlogContent (props) {
    console.log(props)

    if(!props.isPublished) {

        // return null means "don't display any DOM elements here"
        return null
    } else {
        return (
        <div>
            <h1>{props.articleText}</h1>
            <p>{props.minutesToRead} minutes to read</p>
        </div>
    )}
    
}

function BlogPost () {
    return (
        <div>
            <BlogContent 
            articleText="Dear Reader: Josh is a Senior Backend Engineer" 
            isPublished={true}
            minutesToRead={1}/>
            <Comment commentText="I agree with this statement"/>
            <Comment commentText="A universal truth"/>
            <Comment commentText="Truth is singular. Versions are lies"/>
        </div>
    )
}

export default BlogPost

function Comment(props) {
    return (
        <div>
            {props.commentText}
        </div>
    )
}