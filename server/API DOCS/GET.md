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

**3. Get specific questions**
* **URL**
    `/api/searchQuestions`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ questions: [ displaying all questions related to the search] }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**4. Get All Spaces**
* **URL**
    `/api/getSpaces`

* **METHOD**
    `GET`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `


* **Success Response**<br />
    * **Code:** `201` <br />
      **data:** `{ Spaces: [ displaying all available spaces] }`

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `authorization required` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**5. Get All Spaces**
* **URL**
    `/api/getSpacebyId`

* **METHOD**
    `GET`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `


* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ Spaces: [ displaying all spaces created by the specific user] }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `authorization required` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**


**6.ADMIN: Get All users**
* **URL**
    `/api/admin/users`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ users:[array of all the users] }`

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**


**7.ADMIN: Get All questions**
* **URL**
    `/api/admin/questions`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ questions:[array of all the questions] }`

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**


**8.ADMIN: Get All answers**
* **URL**
    `/api/admin/answers`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ answers:[array of all the answers] }`

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**



**6. ADMIN: Get user by Id**
* **URL**
    `/api/admin/user/:id`

* **METHOD**
    `GET`

* **URL params**
    `id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{user}` <br />

* **Error Response**
    * **Code:** `404` <br />
      **Message:** `User not found` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**


**7. ADMIN: Get question by Id**
* **URL**
    `/api/admin/question/:id`

* **METHOD**
    `GET`

* **URL params**
    `id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{question}` <br />

* **Error Response**
    * **Code:** `404` <br />
      **Message:** `Question not found` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**


**8. ADMIN: Get answer by Id**
* **URL**
    `/api/admin/answer/:id`

* **METHOD**
    `GET`

* **URL params**
    `id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{answer}` <br />

* **Error Response**
    * **Code:** `404` <br />
      **Message:** `Answer not found` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**