import { useNavigate } from 'react-router-dom'

const ArticleCard = (props) => {

    // const article = (article) => {
    //     navigate(`${article._id}`)
    // }
    
    const article = () => {
        navigate(`/blog/:blog_id`)
    }
    let navigate = useNavigate()

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


            <img 
                src = 'https://www.elsevier.com/__data/assets/image/0009/899451/RA-review-articles-banner-1200-x-600.jpg'  
                alt =''
                onClick = {article}
                style = {{width:'150px'}}
                />
            
            <br />
            This is article 1

            <br />
            <img 
                src = 'https://www.elsevier.com/__data/assets/image/0009/899451/RA-review-articles-banner-1200-x-600.jpg'  
                alt =''
                onClick = {article}
                style = {{width:'150px'}}
                />
            
            <br />
            This is article 1
        </div>
    )
}

export default ArticleCard