const Article = (props) => {
    console.log(props);
    return (
        <div>
            <a href={`${props.url}`}>{props.title}</a>
        </div>
    )
}
export default Article;