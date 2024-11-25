import { useGSAP } from "@gsap/react"
import gsap, { Back, Expo, Power2 } from "gsap"
import { useEffect, useRef, useState } from "react"
import ServiceHttp from "../service/service"
import Confetti from 'react-confetti'



function CategoriesRender(props) {

  const categoryDiv = []

  for (const key in props.categories) {
    categoryDiv.push(
      <div onClick={() => { props.answers(true); props.questions(props.categories[key]) }} key={key} className="bg-white object-fill basis-1/5 w-[9rem] flex justify-center items-center flex-col p-4 rounded-2xl cursor-pointer">

        <img className="w-auto" src={props.categories[key].category.icon} alt="" />
        {props.categories[key].category.title ? <p className="text-[1.4rem]">{props.categories[key].category.title}</p> : null}
      </div>
    )
  }

  return categoryDiv
}

function Options() {

  const [categories, setCategories] = useState(null)
  const [anwering, setAnwering] = useState(false)
  const [question, setQuestion] = useState(null)
  const [answerOk, setAnswerOk] = useState(false)
  const [answerNoOk, setAnswerNoOk] = useState(false)


  const { width, height } = [window.innerWidth, window.innerHeight]


  useEffect(() => {
    const serviceHttp = new ServiceHttp()

    serviceHttp.getData().then((response => {
      setCategories(response.data)
    }))

  }, [])

  const startAnswer = () => {
    setAnwering(true)
  }

  return (
    <>
      {answerOk ?


        <>

          <div className="w-screen h-screen absolute z-40 flex items-center justify-center bg-dellBlue">

            <div className="flex flex-col items-center justify-center bg-white p-10 rounded-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#26b013" className="size-32">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>

              <p className="text-dark text-[3rem]">¡Correcto!</p>


            </div>

          </div>


          <div className="fixed z-50 w-screen h-screen"><Confetti width={width} height={height} /></div>
        </>

        :

        null


      }

      {answerNoOk ?

        <div className="w-screen h-screen absolute z-40 flex items-center justify-center bg-dellBlue">

          <div className="flex flex-col items-center justify-center bg-white p-10 rounded-3xl">


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="flex flex-col items-center justify-center bg-white p-10 rounded-3xl">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
            </svg>


            <p className="text-dark text-[3rem]">Incorrecto</p>


          </div>

        </div>
        : null
      }


      <div className="flex w-full h-full justify-center items-center pt-14">

        <div className="flex gap-5 flex-wrap justify-center">
          {!anwering ?
            <CategoriesRender questions={setQuestion} answers={startAnswer} categories={categories} />
            :
            <div className="flex flex-col items-center justify-center gap-4">

              <p className="text-[2rem] ">Categoría: {question.category.title}</p>

              <div className="flex gap-4">


                <div className="bg-white p-8 w-1/3 flex flex-col gap-4 justify-center items-center text-center">
                  <p className="text-[1.5rem]"><b>{question.category.questions[0].question_1.titleQuestion}</b></p>

                  {question.category.questions[0].question_1.answers.map((answer, i) => {
                    return (
                      <p onClick={() => { answer.correct ? setAnswerOk(true) : setAnswerNoOk(true) }} className="p-2 bg-slate-100 text-[1.3rem] rounded-2xl cursor-pointer"><b>{i + 1})</b> {answer.titleAnswers}</p>
                    )
                  })}
                </div>

                <div className="bg-white p-8 w-1/3 flex flex-col gap-4 justify-center items-center text-center">
                  <p className="text-[1.5rem]"><b>{question.category.questions[0].question_2.titleQuestion}</b></p>

                  {question.category.questions[0].question_1.answers.map((answer, i) => {
                    return (
                      <p onClick={() => { answer.correct ? setAnswerOk(true) : setAnswerNoOk(true) }} className="p-2 bg-slate-100 text-[1.3rem] rounded-2xl cursor-pointer"><b>{i + 1})</b> {answer.titleAnswers}</p>
                    )
                  })}
                </div>

                <div className="bg-white p-8 w-1/3 flex flex-col gap-4 justify-center items-center text-center">
                  <p className="text-[1.5rem]"><b>{question.category.questions[0].question_3.titleQuestion}</b></p>

                  {question.category.questions[0].question_1.answers.map((answer, i) => {
                    return (
                      <p onClick={() => { answer.correct ? setAnswerOk(true) : setAnswerNoOk(true) }} className="p-2 bg-slate-100 text-[1.3rem] rounded-2xl cursor-pointer"><b>{i + 1})</b> {answer.titleAnswers}</p>
                    )
                  })}
                </div>

              </div>

            </div>

          }
        </div>

      </div>

    </>
  )
}

export default Options