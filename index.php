<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <link rel="icon" type="image/x-icon" href="assets/images/favicons/favicon-red.ico">
    <link rel="apple-touch-icon" href="assets/images/favicons/favicon-red.ico"/>
    <link rel="stylesheet" href="assets/icons/style.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/application.css">
    <style>
        @media (min-width: 1200px) {
            img.nextjs-data-delivery-log{
                margin-bottom: .75rem;
            }
        }
    </style>
    <title>FT: Portfolio</title>
</head>
<body>
    <!-- form data validation message -->
    <div id="form-validation-messages-container">
        <div id="success-message" class="warning-message">
            <p>
                <span class="lead-sentence"></span>
            </p>
        </div>
        <div id="invalid-form-data-warning" class="warning-message">
            <ul id="invalid-form-data-warning-list"></ul>
        </div>
    </div>
    <!-- hamburger menu button-->
    <?php include 'includes/hamburger-button.php' ?>
    <!-- side menu/ main navigation-->
    <?php include 'includes/side-menu-top.php' ?>
        <li>
            <a href="pages/about-me.php">About me</a>
        </li>
        <li>
            <a href="#my-portfolio">My Portfolio</a>
        </li>
        <li>
            <a href="pages/code-examples.php">Code Examples</a>
        </li>
        <li>
            <a href="pages/scs.php">SCS Scheme</a>
        </li>
        <li>
            <a href="#contact-me">Contact me</a>
                </li>
    <?php include 'includes/side-menu-bottom.php' ?>       
    <!-- main page content -->
    <div id="main-content">
        <!-- section#banner -->
        <div id="banner">
            <b id="my-name">
                <span class="blink-light">Farai</span>&nbsp;
                <span class="blink-light">Tanekha</span>
            </b>
            <strong id="my-title">
                <span class="blink-dark">Software</span>&nbsp; 
                <span class="blink-dark">Developer</span>
            </strong>
            <div id="scroll-down">
                <a href="#my-portfolio">
                    <span class="glyphicon glyphicon-circle-arrow-down"></span>
                </a> 
            </div>
        </div>
        <!-- section#my-portfolio -->
        <div id="my-portfolio" class="container">
            <h2>My Portfolio</h2>
            <p class="lead">The projects listed below utilise a mix of technologies categorised as following:</p>
            <!-- teck stack -->
            <dl>
                <!-- front-end -->
                <dt>Front-end</dt>
                <dd style="margin-bottom: 1rem;">HTML, SCSS, Tailwind, JavaScript, TypeScript</dd>
                <dd>JS libraries include jQuery, Handlebars, React and D3.</dd>
                <dd>These are used for DOM manipulation, creating custom UIs and interactive data visualization.</dd>
                <!-- back-end -->
                <dt>Back-end</dt>
                <dd>
                    <a class="clickable-tech-link" href="pages/scs.php" target="_blank" style="margin-left: -.2rem;">Scion Coalition Scheme</a>
                </dd>
                <dd>During my time on the Scion Coalition Scheme, I worked on projects using PHP and SQL on the server-side.</dd>
                <dd style="margin-top: 1rem; margin-left: -.2rem;">
                    <a class="clickable-tech-link" href="https://nodejs.org/api/modules.html#core-modules" target="_blank">Node.js</a>
                </dd>
                <dd> Node.js is a server-side JS runtime.</dd>
                <dd>
                    Some of my favourite modules are the Node.js core modules and
                    <a class="clickable-tech-link" href="https://expressjs.com/" target="_blank">Express.js</a>. However, I've been exposed to several useful modules including Cloudinary, Multer and Streamifier.
                </dd>
                <!-- fullstack -->
                <dt>Full-stack</dt>
                <dd>
                    <a class="clickable-tech-link" href="https://nextjs.org/docs" target="_blank">Next.js</a>, 
                    <a class="clickable-tech-link" href="https://www.prisma.io/" target="_blank">Prisma</a>,
                    <a class="clickable-tech-link" href="https://railway.app/" target="_blank">Railway</a>
                </dd>
                <dd>Next.js is a React framework for building full-stack web applications.</dd>
                <dd>With the aid of API & page routing (using the APP Router), Next.js can be used to build interactive, dynamic, and fast React applications.</dd>
                <dd>
                    Prisma is a great tool for interacting with a 
                    <span title="Database Management System">DBM</span> such as 
                    <a class="clickable-tech-link" href="https://docs.railway.app/guides/postgresql" target="_blank">the Railway PostgreSQL database service</a>.
                </dd>
            </dl>
            <div id="portfolio-list-of-projects">
                <a href="https://netmatters-homepage.onrender.com/" target="_blank">
                    <figure>
                        <img src="assets/images/netmatters-homepage-replica.jpeg" alt="Netmatters homepage replica" title="Netmatters homepage replica">
                        <figcaption>
                            <b style="font-weight: 900">FULL-STACK:</b> My first complete <em title="Scion coalition Scheme">SCS</em> project, a work in progress
                            <span class="construction-cone">🚧</span>.
                            A full stack project that showcases intuitive use of SCSS, the Grid system, Flexbox, HTML, JavaScript & PHP.
                        </figcaption>
                    </figure>
                </a>
                <a href="https://render-all4uwebsite.onrender.com/" target="_blank">
                    <figure>
                        <img src="assets/images/all4u-homepage.jpeg" alt="All4U Healthcare Solutions website" title="All4U Healthcare Solutions website">
                        <figcaption>
                            <b style="font-weight: 900">FULL-STACK:</b> This application was made using <code>jQuery, Handlebars.js, Bootstrap & HTML</code> 
                            to produce a simple app with a streamlined look and easy navigation.The app leverages a PHP server & MySQL database on the back-end.
                        </figcaption>
                    </figure>
                </a>
                <a href="https://ftanekha.github.io/netMatters-JS-Array-Assessment/?#" target="_blank">
                    <figure>
                        <img src="assets/images/js-array-assessment-resized.jpeg" 
                            alt="Random image collector" title="Random image collector"
                        >
                        <figcaption>
                            <b style="font-weight: 900">FRONT-END:</b> A lightweight application that uses the JavaScript fetch API to display random images, and Flebox for layout.
                            Users can create, store, retrieve and view one or more collections of images.
                        </figcaption>
                    </figure>
                </a>
                <a href="https://nextjs-data-delivery-log-app.vercel.app/" target="_blank">
                    <figure>
                        <img src="assets/images/nextjs-data-delivery-log.jpeg" class="stretch nextjs-data-delivery-log"
                            alt="Next.js Delivery log app" title="Next.js Delivery log app"
                        >
                        <figcaption>
                            <b style="font-weight: 900">FULL-STACK:</b> This app was built with Next.js on the front-end, and uses Express.js, PRISMA(ORM) & PostgreSQL on the back-end.
                            Other features include data validation, file uploads via Cloudinary, and Google Maps integration.
                        </figcaption>
                    </figure>
                </a>
                <a href="https://react-explorer-two.vercel.app/" target="_blank">
                    <figure>
                        <img src="assets/images/react-explorer.jpeg" class="stretch react-explorer"
                            alt="React.js Explorer app" title="React.js Explorer app"
                        >
                        <figcaption>
                            <b style="font-weight: 900">FULL-STACK:</b> This app simulates the behaviour of the Windows file explorer. 
                            It's simple, light-weight, uses <em>React.js</em> front-end UI, styled with <em>TailwindCss</em>. 
                            The back-end leverages system-level <em>Node.js</em> modules like <code>node:os</code>, <code>node:fs</code> & <code>node:path</code>, with an <em>Express.js</em> server running on the <em>Railway</em> platform.
                    </figure>
                </a>
                <a href="https://reactjs-emailer-app.vercel.app/" target="_blank">
                    <figure>
                        <img src="assets/images/react-emailer.jpeg" class="stretch react-explorer"
                            alt="React.js Emailer" title="React.js Emailer"
                        >
                        <figcaption>
                            <b style="font-weight: 900">FULL-STACK:</b> The React.js Emailer is a simulation of an email client, built with <em>React.js</em> on the front-end and <em>Express.js</em> on the back-end. 
                            It features a login system, multiple mailboxes, and form validation to simulate an email experience.
                    </figure>
                </a>
            </div>
        </div>
        <!-- section#contact-me -->
        <div id="contact-me" class="container">
            <h2>Contact Me</h2>
            <div id="enquiry-form">
                <form id="contact-me-form">
                    <div class="full-name">
                        <div class="contact-info-detail">
                            <label for="first-name">First name</label>
                            <input class="form-control" type="text" id="first-name" name="fname" required>
                        </div>
                        <div class="contact-info-detail">
                            <label for="last-name">Last name&nbsp;</label>
                            <input class="form-control" type="text" id="last-name" name="lname" required>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="contact-info-detail">
                            <label for="telephone">Telephone&nbsp;</label>
                            <input class="form-control" type="tel" id="telephone" name="telephone" required>
                        </div>
                        <div class="contact-info-detail">
                            <label for="email">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input class="form-control" type="email" id="email" name="email">
                        </div>
                    </div>                       
                    <div class="enquiry-message">
                        <textarea class="form-control" name="message" id="message" cols="36" rows="10" placeholder="Your message..." required></textarea>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
            <div id="scroll-up">
                <a href="#">
                    <span class="glyphicon glyphicon-circle-arrow-up"></span>
                </a>
            </div>
        </div>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/animate-my-name.js"></script>
    <script src="js/toggle-side-menu.js"></script>
    <script type="module" src="main.js"></script>
</body>
</html>