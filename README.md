# travela

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#Demo">Demo</a></li>
        <li><a href="#Future-implementations ">Installation</a></li>
        <li><a href="# Contribution"> Contribution</a></li>
        <li><a href="# contributors">Contributors</a></li>
      </ul>
    </li>
  <ul>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
 </ul>
</ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is a front-end implementation of a transport system. It is a complete front-end site with several pages: The landing page, the login page, a sign-up page,dashboard page,reviews page and a bookings page. <br>
Each page's UI and code was carried out by an individual group member.<br>
The significance of this project is:
<ol>
<li>It gives the transport industry a digital brand image, which is important in this digital age</li>
<li> Increase market reach by appealing to the user.
</li>
<li>The system also provides a platform to provide  services such as bookings,comfort,easy to use and other services that can attract users.</li>
</ol>

### Built With

Several technologies have been used in the design and implementation of this website.
The technologies are:
<ol>
<li>React Js</li>
<li>Tailwind CSS</li>
<li>Ruby on Rails</li>
<li>Figma</li>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

These are the steps required to use this project:

### Prerequisites

NodeJS
* npm
  ```sh
  npm install npm@latest -g
  ```
  On windows PowerShell
  ```
  nvm install latest
  ```
 CSS require no installations as they can run on the web browser

### Installation

1. Clone the repo
   git clone [git@github.com:nicco99/travela.git](https://github.com/nicco99/travela)

<p align="right">(<a href="#top">back to top</a>)</p>



<p align="right">(<a href="#top">back to top</a>)</p>




## Future-implementations 

- User to customer payment
- Implement geolocation APIs to obtain current location.
  
  ## Contribution
If you need to contribute to this project follow the steps below:<br>
- Clone the repo(`git clone <repo link>`)
- Create a branch where you will add changes (`git branch -b <branchname>`)
- Add the changes (`git add .`)
- Commit changes (`git commit -m"contributing changes"`)
- Push your changes (`git push origin <branchname>`)


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
  
## Code Samples
```React
    
    <!-- LOGIN SECTION -->
    import React, { useState } from 'react'
import { NavLink,useNavigate} from "react-router-dom"
import "../css/LoginSignup.css";


// {setUser} pass as prop to login function

function Login( ) {
const navigate = useNavigate()
    // add this to app together with login resource
    const [user, setUser] = useState("")
    const [error, setError] = useState({})
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function submitHandler(e){
        e.preventDefault();
        fetch("http://localhost:3000/sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setUser(user)
                navigate("/dashboard")
                });
            } else {
                console.log(res.json().then(error=>setError(error)))
            }
        })
    }

  ```
      <!-- CSS PART OF THE ABOVE SECTION -->
```css
    .form-inner 
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 400px;
    background-color: #fff;
    border-radius: 10px; 
}

.form-inner h1
{
    text-align: center;
    padding: 0 0 20px 0;
    font-size: 30px;
    border-bottom: 1px solid rgba(127, 188, 241, 0.984);
}

.form-inner form 
{
    padding: 0 40px;
    box-sizing: border-box;
}

form .form-group 
{
    position: relative;
    border-bottom: 2px solid none;
    margin: 30px 0;
}

.form-group input 
{
    width: 100%;
    height: 40px;
    padding: 0 5px;
    font-size: 16px;
    border: none;
    background: rgba(127, 188, 241, 0.854);
    border-radius: 50px;
    outline: none;
}

.form-group label 
{
    position: absolute;
    top: 50%;
    left: 10px;
    color: #000;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
}

```



<!-- ACKNOWLEDGMENTS -->
## Contributors & Contact Info
<ol>
<li>Nicolas Njeru (https://github.com/nicco99)</li>      
<li>Rhoda Gachimu (https://github.com/Rhoda-Gachimu)</li>
<li>Philip Waruingi (https://github.com/littlephillips)</li>     
<li>Tressie Muthuri (https://github.com/t-muthuri)</li>   
<li>Isaac Sindiga (https://github.com/sindiga-dev)</li> 
<li>Timothy Lenku (https://github.com/esipil)</li> 
</ol>

Project Link: [https://github.com/nicco99/travela]

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License
### MIT License

Distributed under the MIT License. See `LICENSE.txt` for more information.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

<p align="right">(<a href="#top">back to top</a>)</p>
