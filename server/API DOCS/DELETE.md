# DELETE API DOCS
**1. DELETE question**
* **URL**
    `/api/deleteQuestion/:id`

* **METHOD**
    `DELETE`

* **URL params**
    `question_id[integer]`

* **Success Response**<br />
    * **Code:** `201` <br />
      **Message:** `question deleted` <br />

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `Authorization Required` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**2. DELETE answer**
* **URL**
    `/api/deleteAnswer/:id`

* **METHOD**
    `DELETE`

* **URL params**
    `answer_id[integer]`

* **Success Response**<br />
    * **Code:** `201` <br />
      **Message:** `answer deleted` <br />

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `Authorization Required` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**3. DELETE profile**
* **URL**
    `/api/deleteProfile`

* **METHOD**
    `DELETE`

* **URL params**
    `none`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `profile deleted` <br />

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `Something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**3. DELETE spaces**
* **URL**
    `/api/deleteSpace/:id`

* **METHOD**
    `DELETE`

* **URL params**
    `none`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `space deleted` <br />

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `Something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**


**4. ADMIN: DELETE user**
* **URL**
    `/api/admin/user/:id`

* **METHOD**
    `DELETE`

* **URL params**
    `id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `User removed` <br />

* **Error Response**
    * **Code:** `404` <br />
      **Message:** `User not found` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**



**5. ADMIN: DELETE question**
* **URL**
    `/api/admin/question/:id`

* **METHOD**
    `DELETE`

* **URL params**
    `id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `Question removed` <br />

* **Error Response**
    * **Code:** `404` <br />
      **Message:** `Question not found` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**



**6. ADMIN: DELETE answer**
* **URL**
    `/api/admin/answer/:id`

* **METHOD**
    `DELETE`

* **URL params**
    `id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `Answer removed` <br />

* **Error Response**
    * **Code:** `404` <br />
      **Message:** `Answer not found` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**

**7. Delete comment**
* **URL**
    `/api/deleteComment/:id`

* **METHOD**
    `DELETE`

* **URL params**
    `id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `comment deleted!` <br />
      **Data:** `{'deletedComment': comment.text}`

* **Error Response**
    * **Code:** `400` <br /> 
      **Message:** `something went wrong` <br />

    * **Code:** `400` <br /> 
      **Message:** `you have not written this comment originally, so you cannot delete this!` <br /> 

    * **Code:** `400` <br /> 
      **Message:** `comment does not exist!` <br /> 
    
    * **Code:** `400` <br /> 
      **Message:** `invalid comment id!` <br /> 

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**