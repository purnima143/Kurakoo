# POST API DOCS
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
     * **Auth Need : False**
    * **Admin Auth Need : False**

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
      **Message:** ` User Logged in` <br />
      **data:** `{ token: "token generetaed", user: "user_info" }`

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `Invalid password or valid email is required` <br />

* **Required Filed**
     * **Auth Need : False**
    * **Admin Auth Need : False**

**3. Signout**
* **URL**
    `/api/signout`

* **METHOD**
    `POST`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `Signout Successful` <br />
      **data:** `null`

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `Authorization Required` <br />

* **Required Filed**
    * **Auth/ Admin Auth: true/true**

**4. Add questions**
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
      **Message:** `Question not created ! Something went wrong! or Authorization Required` <br />

* **Required Filed**
     * **Auth Need : True**
    * **Admin Auth Need : False**

**5. Add answers**
* **URL**
    `/api/question/answers`

* **METHOD**
    `POST`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `Answer added successfully` <br />
      **data:** `{  tags: [tags], _id: "answerID", answerText: "answer_text", questionId: "questionID", createdBy: "user_id" }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `Something went wrong or Authorization required` <br />

* **Required Filed**
     * **Auth Need : True**
    * **Admin Auth Need : False**

**5. Create Spaces**
* **URL**
    `/api/createSpace`

* **METHOD**
    `POST`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `Space created successfully` <br />
      **data:** `{  role: [role], _id: "spaceID", spaceName: "space_name", description: "description", createdBy: "user_id" }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `Authorization required` <br />

* **Required Filed**
     * **Auth Need : True**
    * **Admin Auth Need : True**


**6. Post Commment**
* **URL**
    `/api/postComment`

* **METHOD**
    `POST`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `comment saved!` <br />
      **data:** `{  comment:[answerId,text, updatedAt, created_by: user.firstName + user.lastName ] }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong!` <br />

* **Required Filed**
     * **Auth Need : True**
    * **Admin Auth Need : False**