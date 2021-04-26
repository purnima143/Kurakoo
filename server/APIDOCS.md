# API DOCS
**1. Signup**
* **URL**
    `/api/signup`

* **METHOD**
    `POST`

* **PASSED OBJETCS** <br />
    `firstName [required],` <br />
    `lastName [required],` <br />
    ` password [required],` <br />
    ` confirmPassword [required],` <br /> 
    ` email [required],` <br />
    ` userName,` <br />
    ` year,` <br />
    ` collegeName,` <br />
    ` contactNumber`

* **Success Response**<br />
    * **Code:** `201` <br />
      **Message:** `User Created Succesfully...!` <br />
      **data:** `{ token: "token generetaed" }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `User is already registered` <br />

* **Required Filed**
    * **Auth/ Admin Auth: false/false**

**2. Signin**
* **URL**
    `/api/signin`

* **METHOD**
    `POST`

* **PASSED OBJETCS** <br />
    ` email [required],` <br />
    ` password [required]` <br />

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `User User Logged in` <br />
      **data:** `{ token: "token generetaed", user: "user_info" }`

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `Invalid password or valid email is required` <br />

* **Required Filed**
    * **Auth/ Admin Auth: true/false**

**3. Add questions**
* **URL**
    `/api/question`

* **METHOD**
    `POST`

* **PASSED OBJETCS** <br />
    ` questionText [required],` <br />
    ` tags [required],` <br />
    ` questionLinks,` <br />       

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `Question added successfully` <br />
      **data:** `{ _id_: "questionID", questionText: "question_text", tags: "tags", createdBy: "user_id" }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `Question not created ! Something went wrong!` <br />

* **Required Filed**
    * **Auth/ Admin Auth: true/false**

**3. Add answers**
* **URL**
    `/api/question/answers`

* **METHOD**
    `POST`

* **PASSED OBJETCS** <br />
    ` questionId [required],` <br />
    ` answerText [required],` <br />
    ` tags,` <br />       

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `Answer added successfully` <br />
      **data:** `{  tags: [tags], _id: "answerID", answerText: "answer_text", questionId: "questionID", createdBy: "user_id" }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `Something went wrong` <br />

* **Required Filed**
    * **Auth/ Admin Auth: true/false**
