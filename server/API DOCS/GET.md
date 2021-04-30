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


**2. Get answers**
* **URL**
    `/api/getAnswers/:id`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ answers: [ displaying all answers to a particular question] }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**
