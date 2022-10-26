import SearchBar from "./SearchBar"
import NewArticleForm from "./NewArticleForm"
import ArticleCard from "./ArticleCard"

function HomePage(){
    return(
        <div>
            <h1>this is the home page</h1>
            <SearchBar/>
            <ArticleCard/>
            <NewArticleForm/>
        </div>
    )
}

export default HomePage