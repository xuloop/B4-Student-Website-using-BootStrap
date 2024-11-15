# B4-Student-Website-using-BootStrap
This project is an academic homepage for Professor Ming-Hwa Wang, showcasing his professional background, research interests, and courses offered in the Department of Applied Data Science at San Jose State University. The website aims to provide students and visitors with access to relevant information about his academic work and contributions to the field. This version of the website includes bootstrap for viewability on smaller devices, and the inclusion of additional features such as drop down menus, pagination, list groups and navigation. 

Information:
Course List: A comprehensive list of courses taught by Professor Wang, with links for more detailed information on each subject.
Biography: An overview of Professor Wang's academic background and research interests.
Research Publications: A curated selection of Professor Wang's key publications, linking to external resources for further reading.

Directory Hierarchy
```plaintext
project-root/
│
├── b4.html
├── b3_style.css
├── rightpanel.html
├── script.js
├── sjsu_background.jpg
│
└── web/
    ├── index.html
    └── webprogramstyle.css
```

The main directory consists of the main webpage in b4.html and the CSS styling associated with the main webpage is in b3_style.css. The b4.html also included bootstrap integration to include compatibility on different smaller devices and containers such as drop down menus. Script.js manages the dynamic functionalities of the website including the left and right paneling for subpaging within the main page, navigating from current pages to previous pages, focusing and blurring effects, website visiting counter, and page pagination between the different navigation tabs. The javascript also manages rightpanel.html to revert back to the default main page when necessary. Sjsu_background.jpg is kept within the same directory to display on the main webpage. The web directory contains the subpage html file, index.html, and the CSS styling associated with it in webprogramstyle.css.

Technologies
HTML
CSS
JavaScript
LocalStorage
Bootstrap

Getting Started
Prerequisites
Before you begin, ensure you have the following installed on your system:
A modern web browser (e.g., Chrome, Firefox, Safari).
A text editor (e.g., Visual Studio Code) to modify the code if needed.
Installation of Apache HTTP Web Server
Integration with CSS, JavaScript, Bootstrap, and HTML
Running the Project
Instantiate the Apache HTTP Web Server by running sudo apachectl start in the terminal
Make sure that all the downloaded files from the directory hierarchy are in the root directory of the Web Server. This director is usually in the file path: /Library/WebServer/Documents
Open up the b3.html main webpage on the local host Apache HTTP Web Server by entering localhost/b4.html into the URL of the web browser
