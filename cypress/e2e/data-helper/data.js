class Data {

    headerPayload() {
        const headerBody = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
        return headerBody;
    }

    bodyPayload(name,ID) {
        const postData = {
            "id": ID,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": name,
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }
        return postData;
    }

    updatePayload(firstName,ID) {
        const postData = {
            "id": ID,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": firstName,
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "no-available"
          }
        return postData;
    }

}

export default Data;