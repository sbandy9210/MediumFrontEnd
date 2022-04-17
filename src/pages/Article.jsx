
import React from 'react'
import Nav from '../components/Nav'
import Comment from '../components/Comment'



const Article = (props) => {



    return(
        <div>
            <div className = 'navDiv'>
                <Nav />
            </div>
            <div className = 'articleDiv'>
                <div>
                    <img 
                        src = 'https://www.dankultura.org/wp-content/uploads/2015/10/Article-Writing-Can-be-a-Sure-Wager.jpg'
                        alt = ''
                        style = {{width: '500px'}}
                    />
                    <p>
                        Article information here
                    </p>
                </div>
                <div className = 'commentDiv'>
                    <Comment />
                </div>

            </div>

        </div>
    )
}

export default Article