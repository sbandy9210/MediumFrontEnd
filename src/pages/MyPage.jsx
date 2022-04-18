
import Nav from '../components/Nav'
import PostArticle from '../components/PostArticle'

const MyPage = () => {
    return(
        <div>
            <div className = 'myPageLeftDiv'>
                <div>
                    <Nav />
                </div>
                <div>
                    <br/>
                    Title 1
                    <br />
                    <img 
                        src = 'https://www.dankultura.org/wp-content/uploads/2015/10/Article-Writing-Can-be-a-Sure-Wager.jpg'
                        alt = ''
                        style = {{width: '150px'}}
                    />
                </div>
                <div className = 'editAndDeleteButton'>
                    <button>Edit</button>
                    <br />
                    <button>Delete</button>
                </div>
                <div>
                    <br/>
                    Title 2
                    <br />
                    <img 
                        src = 'https://www.dankultura.org/wp-content/uploads/2015/10/Article-Writing-Can-be-a-Sure-Wager.jpg'
                        alt = ''
                        style = {{width: '150px'}}
                    />
                </div>
                <div className = 'editAndDeleteButton'>
                    <button>Edit</button>
                    <br />
                    <button>Delete</button>
                </div>
            </div>
            <br />
            <div className = 'myPageRightDiv'>
                <PostArticle />
            </div>

        </div>
    )
}

export default MyPage