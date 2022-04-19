import PostArticle from '../components/PostArticle'

const MyPage = (props) => {
    return(
        <div>
            <div className = 'myPageLeftDiv'>
                <div>
                    <h3>Title 1</h3>
                    <img 
                        src = 'https://www.dankultura.org/wp-content/uploads/2015/10/Article-Writing-Can-be-a-Sure-Wager.jpg'
                        alt = ''
                        style = {{width: '150px'}}
                    />
                </div>
                <div>
                    <h3>Title 2</h3>
                    <img 
                        src = 'https://www.dankultura.org/wp-content/uploads/2015/10/Article-Writing-Can-be-a-Sure-Wager.jpg'
                        alt = ''
                        style = {{width: '150px'}}
                    />
                </div>
            </div>
            <div className = 'myPageRightDiv'>
                <PostArticle user={props.user}/>
            </div>

        </div>
    )
}

export default MyPage