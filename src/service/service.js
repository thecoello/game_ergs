import axios from "axios";

export default class ServiceHttp {

  getData() {
      return  axios.get('../../public/questions.json')
  }




}