import axios  from "./axios.js";
// const url = 'https://innodip.netlify.app/';
const url = 'http://inodip.rw/';

class apiService{
    static async getJobs() {
        let res = await axios.get(url+'data.json')
        let resp = res.data;
        return resp;
    }
    static async getProfile() {
        let res = await axios.get(url+'data.json')
        let resp = res.data;
        return resp;
    }
    static async getJob(id) {
        let res = await axios.get(url+'data.json/'+id)
        let resp = res.data;
        return resp;
    }
    static async  updateProfile(data) {
        let res = await axios.post(url+'pro/',data)
        let resp = res.data;
        return resp;
    }
    static async getImages() {
        // let res = await axios.get('')
        let res = await axios.get('https://picsum.photos/v2/list?limit=20')
        let resp = res.data;
        return resp;
    }
    static serializeFormData(form) {
        const formData = new FormData(form);
        return new URLSearchParams(formData).toString();
      }
}

export default apiService;