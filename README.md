
# 1. PROJECT CONTROL SHEET
| 1. |	Team	| WD1425 |
|----|--------|--------|
| 2. |	Title Of Project |	Website for Tourist Attractions places of a Specific City |
|3.|	Type Of Project|	Technical|
|4.|	Members|	Md Ishtiyaque Ahmad <br/> Kirti Saraf <br/> Shivani Yadav <br/> Dipali Patil|
|5.|	Company|	TickTech IT Solutions <br/> #TIS <br/> #ticktechitsolutions|
|6.|	Domain of Project|	https://aim-tour-code.herokuapp.com/|
|7.|	Language Of Document|	English|

# 2.	Project Features
1)	Register and Login authentication
2)	detailed information about places 
3)	place map 
4)	speciality of that place
5)	search places filter
6)	Weather Forecasting

# 3.	Tech Stack
| Backend End	| Front End |
| ------------|-----------|
| 1. PostgreSQL |	1. React JS |
| 2. Python Flask Framework |	2. Redux |
| 3. SQLAlchemy 	| 3. CSS, HTML as JSX |

Deployed on Heroku (Backend and Frontend both)

# 4.	Approximate project completion duration.
Approximate project completion duration is 10 days.

# 5. Available Scripts

### `Command to Run App`
<h5>To run React App</h5> 
First of All Clone Entire project into local directory using below command and run app <br/>
git clone https://github.com/mAishtiyaque/Aim_Tour_Code.git <br/>
cd Aim_Tour_Code <br/>
npm install <br/>
npm start

<h5>To run Server App</h5>
You have to first install postgreSQL <br/>
and then create a database named Ahmad. <br/>

Traverse into server directory and open terminal

Install all dependencies <br/>
Flask==2.0.2 <br/>
flask_migrate==3.1.0 <br/>
flask_script==2.0.6  <br/>
Flask_SQLAlchemy==2.5.1 <br/>
SQLAlchemy==1.4.31 <br/>
psycopg2-binary==2.9.3 <br/>
sqlalchemy==1.4.31

And now, <br/>
You have to create tables using my models.py file. <br/>
In the same terminal open python shell using (python or python3) and run following scripts <br/>

from models import * <br/>
from sqlalchemy import create_engine <br/>
//change password with your password. and Also change password in config.py <br/>
engine = create_engine("postgresql://postgres:password@localhost/Ahmad", echo=True, future=True) <br/>
from sqlalchemy.ext.declarative import declarative_base <br/>
Base = declarative_base() <br/>
Base.metadata.create_all(engine)  <br/>
//Tables are created in postgreSQL <br/>
quit() <br/>
python app.py <br/>

// server started

Checkout browser [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<h2>Results </h2>

<img src = "/result/r5.png">
<img src = "/result/r6.png">
<img src = "/result/r3.png">
<img src = "/result/r4.png">
<img src = "/result/r1.png">
<img src = "/result/r2.png">

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
