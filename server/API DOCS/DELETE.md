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
    * **Auth/ Admin Auth: true/true**

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
    * **Auth/ Admin Auth: true/true**