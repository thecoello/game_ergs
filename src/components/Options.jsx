import { useGSAP } from "@gsap/react"
import gsap, { Back, Expo, Power2 } from "gsap"
import { useEffect, useRef, useState } from "react"
import ServiceHttp from "../service/service"

function CategoriesRender(props){

  const categoryDiv = []

  for (const key in props.categories) {
    categoryDiv.push(
      <div key={key} className="bg-white object-fill basis-1/5 w-[9rem] flex justify-center items-center flex-col p-4 rounded-2xl">

      <img className="w-auto" src={props.categories[key].category.icon} alt="" />
      {props.categories[key].category.title  ? <p className="text-[2rem]">{props.categories[key].category.title}</p> : null}
      </div>
    )
  }

  return categoryDiv
}

function Options() {

  const [categories, setCategories] = useState(null)

  useEffect(()=>{
    const serviceHttp = new ServiceHttp()

    serviceHttp.getData().then((response =>{
      setCategories(response.data)
    }))

  },[])

  return (
      <div className="flex w-full h-full justify-center items-center pt-14">
        
        <div className="flex gap-5 flex-wrap justify-center">
        <CategoriesRender categories={categories} />
        </div>

      </div>
  )
}

export default Options