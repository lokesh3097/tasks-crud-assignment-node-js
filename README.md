# tasks-crud-assignment-node-js

Backend Code for Performing CRUD & Other specific requests for tasks app

## How to run the App?

1. Clone the repo onto your machine
2. Run `npm install`
3. Rename the **.env.sample** file to **.env**
4. Bring up MySQL Server on your local machine (Using XAMPP or LAMPP)
5. Update the values in the new **.env** file accordingly for your Database (Generally they are the same)
6. Copy the content of the [**my_tasks_db_no_data.sql**](https://github.com/lokesh3097/tasks-crud-assignment-node-js/blob/main/my_tasks_db_no_data.sql) or [**my_tasks_db_with_data.sql**](https://github.com/lokesh3097/tasks-crud-assignment-node-js/blob/main/my_tasks_db_with_data.sql) File and run in on your PHP MyAdmin to create the database and the tables (And also the data depending on the file you choose)
7. Bring up the Server using `node app.js`
8. You can test the API Endpoints using the [Postman Collection Export](https://github.com/lokesh3097/tasks-crud-assignment-node-js/blob/main/tasks-crud.postman_collection.json) that I have created
