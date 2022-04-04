# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: The foreign key should be on the student model as the students (as data points) are grouped into the Cohorts (one cohort to many students).  The easiest way to fix the issue would be to add a column to the student model.  The name of the foreign key would be student_id as the key is being added to the student model.

  Researched answer: We can fix this mistake by adding the foreign key to the student model.  This is because the students/instances in the student model below to verious chorts/instances of the cohort model.  The name of the foreign key can be anything that you'd like but I'd recomend naming it student_id as gennerally its a good pracetise to name your foreign key after the model on which it is found.



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that must always be pasted are params are destroy, update, show, and create.

  Researched answer: The RESTful routes that must always be pasted are params are destroy, update, edit, show, and create. This is because these routes are all operating on a single instance which needs to be identified.  In the case of create the instance hasn't been created so its id dosent exsist but in order to create a new instance the datatable is going to requiere something to save thus a paramater must be passed.



3. Name three rails generator commands. What is created by each?

  Your answer: generate model (creates a datatable), generate migration (creates a migration file that allows you to change a model/datatable), generate controller (creates a controller view)

  Researched answer: 1. Generate model, is the rails command that creates a model within the rails application's database.  A model is essentually a data table.  The name of the data table will be the same as the name of the model only the data table will be plurtal and lowercase ie Mike->mikes
  2. Generate migrations, is the rails command that creates a migration file in the rails application.  The migration file allows a developer to make changes to the schema of models within the rails app such as adding a new column.
  3. Generate controller, is the rails command that creates a rails controller file.  the controller is the file in which a developer creates and stores the  methods for the appliocations RESTful routes.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students      
  Index, this would get all of the enteries in the datatable "students"

action: "POST"   location: /students       
  Create,  this would create a instance (row) in the datatable "students"

action: "GET"    location: /students/new
  New, because its get and not post this is returning a page/form that is to be used to create a new instance in the datable "students"

action: "GET"    location: /students/2  
  Show, this shows a spesified instance of the datable "students" in this case the instance with id 2

action: "GET"    location: /students/2/edit    
  Edit, this gets a form/page that is used to edit the data of a spesific instance in this case the instance with id 2

action: "PATCH"  location: /students/2      
  Update, this is updateing the data that makes uo a spesific instance, in this case the instance with id 2

action: "DELETE" location: /students/2      
  Destroy, this is deleteing a spesific instance, in this case the instance with id 2


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1 As a user: I can assign and rank items in my list by improtance.
2 As a user: I can assign and rank items in my list by due date.
3 As a user: I can assign and see a description of my list.
4 As a user: I can create if I choose a relationship between list items so that one item must be completed before a different item can be started.
5 As a user: I can assign an amount of time that each item is expected to take.
6 As a user: I can sort my list to minimze the amount of time needed to complete the list.
7 As a user: I can create more than one list and navegate between my lists.
8 As a user: I can crate a new task.
9 As a user: I can delete a task.
10 As a user: I can reasing a task to a new list.
