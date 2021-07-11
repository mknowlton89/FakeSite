import axios from "axios";

export default {
    getVideoDetailsById: function (videoId: string) {
        console.log(videoId)
        const Token = '901591f70973e898ae7b7b2f070b71da'

        return axios.get(`https://api.vimeo.com/videos/${videoId}`, {
            headers: {
                Authorization: `bearer ${Token}`,
            },
        })
    }
}