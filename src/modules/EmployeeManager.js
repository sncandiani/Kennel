const remoteUrl = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteUrl}/employees/${id}`).then(result => result.json())
    }, 
    getAll() {
        return fetch(`${remoteUrl}/employees`).then(result => result.json())
    }, 
    delete(id) {
        return fetch(`${remoteUrl}/employees/${id}`, {
          method: "DELETE"
        }).then(result => result.json())
      }, 
      post(newEmployee) {
        return fetch(`${remoteUrl}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(data => data.json())
    }
}