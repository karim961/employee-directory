This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts



#### Project Directory Structure
```
->components
------->employees (employee components files)
-------------->CreateEmployee.js (employee creation form)
-------------->UpdateEmployee.js (employee update form)
-------------->EmployeeForm.js (form with employee fields that can take an employee object)
-------------->Employees.js (display all employees)
-------------->Pagination.js (pagination for the employees component)
-------------->EmployeeItem.js (clickable employee item)
-------------->Employee.js (main Employee component showing all the data)
-------------->Search.js (search employees)
-------------->Filter.js (filter employees by location)

------->layout (layout specific files)
-------------->Navbar.js (navbar for the web app)
-------------->Spinner.js (loading spinner)

------->pages (different pages of the app)
-------------->Home.js (the app home page)
-------------->NotFound.js (404 page)

->context
------->herokudb (context for the heroku json server)
-------------->herokudbContext.js (the context object)
-------------->herokydbState.js (the state manager)
-------------->herokydbReducer.js (the json request api reducer)
------->types.js (types used in the state manager)
```

#### Employees json example
```json
[
  {
    "id": 1,
    "first_name": "Sherrie",
    "last_name": "Mattei",
    "department": "Human Resources",
    "email": "smattei0@usda.gov",
    "gender": "Female",
    "avatar_url": "https://robohash.org/abaccusamusdolorum.png?size=500x500&set=set1",
    "job_title": "Librarian",
    "location": "United States",
    "website": "https://photobucket.com",
    "bio": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "dob": "1979-06-17"
  },
  {
    "id": 2,
    "first_name": "Abbie",
    "last_name": "Bonner",
    "department": "Human Resources",
    "email": "abonner1@europa.eu",
    "gender": "Female",
    "avatar_url": "https://robohash.org/quiaquidemamet.png?size=500x500&set=set1",
    "job_title": "VP Marketing",
    "location": "United States",
    "website": "http://narod.ru",
    "bio": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "dob": "1961-09-16"
  }
  ]
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.



### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

