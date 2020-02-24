const remoteUrl = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteUrl}/owners/${id}`).then(resp => resp.json())
    }, 
    getAll() {
        return fetch(`${remoteUrl}/owners`).then(resp => resp.json())
    }
}