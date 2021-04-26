# PATCH API DOCS
**1. Update Profile**
* **URL**
    `/api/update`

* **METHOD**
    `PATCH`

* **PASSED OBJETCS** <br />

    required atleast one field to update

    `firstName,` <br />
    `lastName,` <br />
    ` password,` <br />
    `email,`

* **Success Response**<br />
    * **Code:** `201` <br />
      **Message:** `Profile updated` <br />
      **data:** `{ id: "user_id", firstName, lastName, email }`

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `Authorization Required` <br />

* **Required Filed**
    * **Auth/ Admin Auth: true/true**

**2. Update Questions**
* **URL**
    `/api/question/:id`

* **METHOD**
    `PATCH`

* **URL params**
    `question_id[integer]`

* **PASSED OBJETCS** <br />

    required atleast one field to update

    `questionText,` <br />
    `tags`

* **Success Response**<br />
    * **Code:** `201` <br />
      **Message:** `question updated` <br />
      **data:** `{ id: "user_id", questionText, tags, createdBy }`

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `Authorization Required` <br />

* **Required Filed**
    * **Auth/ Admin Auth: true/true**

**3. Update Answers**
* **URL**
    `/api/editAnswer/:id`

* **METHOD**
    `PATCH`

* **URL params**
    `answer_id[integer]`

* **PASSED OBJETCS** <br />

    required atleast one field to update

    `answerText,` <br />
    `tags`

* **Success Response**<br />
    * **Code:** `201` <br />
      **Message:** `question updated` <br />
      **data:** `{ id: "user_id", answerText, tags, createdBy }`

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `Authorization Required` <br />

* **Required Filed**
    * **Auth/ Admin Auth: true/true**