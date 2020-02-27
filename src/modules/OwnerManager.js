const remoteUrl = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteUrl}/owners/${id}`).then(resp => resp.json())
    }, 
    getAll() {
        return fetch(`${remoteUrl}/owners`).then(resp => resp.json())
    }, 
   delete(id) {
       return fetch(`${remoteUrl}/owners/${id}`, {
           method: "DELETE"
       }).then(result => result.json())
   }, 
   post(newOwner) {
     return fetch(`${remoteUrl}/owners`, {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(newOwner)
     }).then(data => data.json())
 }
}
