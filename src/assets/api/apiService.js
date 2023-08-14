import axios  from "./axios.js";
// const url = 'https://innodip.netlify.app/';
const url = 'http://inodip.rw:8004/api/';
const url2 = '/';
const dataUrl = 'http://localhost:80/ino/index.php';

class apiService{
    static async getJobs() {
        let res = await axios.get(url2+'data.json')
        let resp = res.data;
        return resp;
    }
    static async getProfile() {
        let res = await axios.get(url+'applicants')
        let resp = res.data;
        return resp;
    }
    static async getJob(id) {
        let res = await axios.get(url2+'data.json/',id)
        let resp = res.data;
        return resp;
    }
    static async  updateProfile(data) {
        let res = await axios.post(url+'pro/',data)
        let resp = res.data;
        return resp;
    }
    static async  loginUser(data) {
        let res = await axios.post(url+'login',data)
        let resp = res.data;
        return resp;
    }
    static async  signApplicant(data) {
        let res = await axios.post(url+'create_applicant',data)
        let resp = res.data;
        return resp;
    }
    static async  signIndustry(data) {
        let res = await axios.post(url+'industry_signup',data)
        let resp = res.data;
        return resp;
    }
    static async  signInstitution(data) {
        let res = await axios.post(url+'hl_institutions_signup',data)
        let resp = res.data;
        return resp;
    }
    static async  handleForm(data) {
        let res = await axios.post(dataUrl,data)
        let resp = res.data;
        return resp;
    }
    static async getIndustries() {
        // let res = await axios.get('')
        let res = await axios.get(url+'industries')
        let resp = res.data;
        return resp;
    }
    static async getInstitutions() {
        // let res = await axios.get('')
        let res = await axios.get(url+'hl_institutions')
        let resp = res.data;
        return resp;
    }
    static serializeFormData(form) {
        const formData = new FormData(form);
        return new URLSearchParams(formData).toString();
      }
      static realDate(newdate){
          let date = new Date(newdate);
          let year = date.getFullYear();
          let month = String(date.getMonth() + 1).padStart(2, '0');
          let day = String(date.getDate()).padStart(2, '0');
          let newDate = `${year}-${month}-${day}`;
          date = new Date(newDate);
          day = date.getDate();
          month = date.toLocaleString("default", { month: "long" });
          year = date.getFullYear();
          const formattedDate = `${day}${this.getOrdinalSuffix(day)}-${month}-${year}`;
          return formattedDate;
      }
      
      static calendarDate(newdate){
          let date = new Date(newdate);
          let year = date.getFullYear();
          let month = String(date.getMonth() + 1).padStart(2, '0');
          let day = String(date.getDate()).padStart(2, '0');
          let newDate = `${year}-${month}-${day}`;
          return newDate;
      }
      static getOrdinalSuffix(number) {
          const suffixes = ["th", "st", "nd", "rd"];
          const lastDigit = number % 10;
          const suffix = suffixes[lastDigit] || suffixes[0];
          return suffix;
      } 
}

export default apiService;