# PATCH API DOCS
**1. Update Profile for the admin and the users**
* **URL**
    `/api/admin/update/`
        or
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
     * **Auth Need : True**
    * **Admin Auth Need : True**

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
     * **Auth Need : True**
    * **Admin Auth Need : False**

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
     * **Auth Need : True**
    * **Admin Auth Need : False**

**4. Update comments**
* **URL**
    `/api/updateComment/:id`

* **METHOD**
    `PATCH`

* **URL params**
    `comment id`

* **request body** <br />
     `text` 

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `comment updated` <br />
      **data:** `{'updatedComment': comment.text}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `Invalid edit!` <br />
    
    * **Code:** `400` <br />
      **Message:** `invalid comment id` <br />

    * **Code:** `400` <br />
      **Message:** `you have not written this comment originally, so no edit rights!` <br />

    * **Code:** `400` <br />
      **Message:** `something went wrong!` <br />
         

* **Required Filed**
     * **Auth Need : True**
    * **Admin Auth Need : False**
