import React from "react";
import { useSelector } from "react-redux";

function FetchButton(props) {
    const questionCategory = useSelector(state => state.options.question_category)
    const questionDifficulty = useSelector(state => state.options.question_difficulty)
    const questionType = useSelector(state => state.options.question_type)
    const numberOfQuestions = useSelector(state => state.options.amount_of_questions)
    const questionIndex = useSelector(state => state.options.index)

    const handleQuery = async () => {

        let apiUrl = `https://opentdb.com/api.php?amount=${questionAmount}`;
        if (questionCategory.length){
            apiUrl = apiUrl.concat(`&difficulty=${questionCategory}`)
        }
        if (questionDifficulty.length){
            apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`)
        }
        if (questionType.length){
            apiUrl = apiUrl.concat(`&difficulty=${questionType}`)
        }
        await fetch(apiUrl)
          .then((res) => res.json())
          .then((response) => {

          });
    }

    return <button onClick={handleQuery}>{props.text}</button>;
}

export default FetchButton;