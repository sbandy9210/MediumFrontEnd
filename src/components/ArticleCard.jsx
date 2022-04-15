

const ArticleCard = (props) => {

    return(
        <div>

            {/* {props.articles.map((article) => {
                return(
                    <div>
                        <img 
                            src = {article.image} 
                            onClick={() => showArticle} 
                        />
                        <p>
                            {props.article.content}
                        </p>
                    </div>
                )
            })} */}


            <img src = 'https://www.elsevier.com/__data/assets/image/0009/899451/RA-review-articles-banner-1200-x-600.jpg'  alt =''/>
            <br />
            This is article 1
        </div>
    )
}

export default ArticleCard