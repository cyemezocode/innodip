import axios  from "./axios.js";
const url = 'https://64a3cbf71a33a62f73b2759b--endearing-narwhal-e9681a.netlify.app/';
const url2 = 'https://localhost/';

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
        let res = await axios.get(url+'data.json/',id)
        let resp = res.data;
        return resp;
    }
    static async  updateProfile(data) {
        let res = await axios.post(url2+'pro/',data)
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