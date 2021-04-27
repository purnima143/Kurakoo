# GET API DOCS
**1. Get All Questions**
* **URL**
    `/api/allQuestions`

* **METHOD**
    `GET`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `


* **Success Response**<br />
    * **Code:** `201` <br />
      **data:** `{ questions: [ displaying all question data] }`

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `authorization required` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**
