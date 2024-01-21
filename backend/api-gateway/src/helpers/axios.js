import axios from 'axios'

const timeout = process.env.TIMEOUT || 5000

export default (baseURL) => {
	return axios.create({ baseURL, timeout })
}
