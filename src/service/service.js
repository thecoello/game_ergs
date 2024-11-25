import axios from "axios";
import questions from "/questions.json?url"

export default class ServiceHttp {

  getData() {
      return  axios.get(questions)
  }




}