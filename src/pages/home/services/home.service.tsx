import axios from "axios"

const baseUrl =   import.meta.env.VITE_APP_API_BASE_URL+'chat'

// const httpsAgent = new https.Agent({
//   requestCert: true,
//   rejectUnauthorized: false
// });

interface PostChatInterface {
    query_str : string
}

export const postChat = async (ask:PostChatInterface )=>{
  const resp = await axios.post(baseUrl, JSON.stringify(ask))
  return resp
}
