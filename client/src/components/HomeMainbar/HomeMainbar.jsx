import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {
    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

    const questionsList = useSelector(state => state.questionsReducer)
  //  console.log(questionsList)

  /*    var questionsList = [{
       _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: 'SELECT * EXCEPT',
        questionBody: 'Is there any RDBMS that implements something like SELECT * EXCEPT? What  ...',
        questionTags: ["sql", "sql-except"],
        userPosted: "Lukas",
        userId: 1,
        askedOn: "Jan 7",
        answer: [{
            answerBody: "A SELECT * EXCEPT statement specifies the names of one or more columns to exclude from the result. All matching column names are omitted from the output.",
            userAnswered: "Paul Vernon",
            answeredOn: "Jan 8",
            userId: 2,
        }]
    }, {
            _id: 2,
            upVotes: 3,
            downVotes: 2,
            noOfAnswers: 0,
            questionTitle: 'What does if __name__ == "__main__": do?',
            questionBody: 'where someone simply has not called any functions, or incorrectly expects a function named main to be used as an entry point automatically....',
            questionTags: ["python", "namespaces", "python-module"],
            userPosted: "Devoted",
            userId:1,
            askedOn: "Jan 7",
            answer: [{
                answerBody: "",
                userAnswered: "",
                answeredOn: "",
                userId:2,
                 }]
        }, {
            _id: 3,
            upVotes: 3,
            downVotes: 2,
            noOfAnswers: 2,
            questionTitle: 'What does if __name__ == "__main__": do?',
            questionBody: 'where someone simply has not called any functions, or incorrectly expects a function named main to be used as an entry point automatically....',
            questionTags: ["python", "namespaces", "idioms"],
            userPosted: "Devoted",
            userId: 1,
        askedOn: "Jan 7",
        answer: [{
            answerBody: "",
            userAnswered: "",
            answeredOn: "",
            userId: 2,
        }]
        }]
    
        */

    const checkAuth = () => {
        if (user === null) {
            alert("login or singup to ask a question")
            navigate('/Auth')
        } else {
            navigate('/AskQuestion')
        }

    }
    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1>Top Questions</h1>:<h1>All Questions</h1>
                }
                <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            <div>
                { questionsList.data === null ?
                    <h1>Loading....</h1> :
                    <>
                        <p>{questionsList.data.length} questions</p>
                        <QuestionsList questionsList={questionsList.data} />
                    </>
                }
            </div>
        </div>
    )

}
export default HomeMainbar