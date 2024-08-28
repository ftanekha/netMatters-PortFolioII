<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <link rel="icon" type="image/x-icon" href="assets/images/favicons/favicon-rb-period.ico">
    <link rel="stylesheet" href="assets/icons/style.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/application.css">
    <title>Farai Tanekha's Portfolio</title>
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
            <b id="my-name">Farai Tanekha</b>
            <strong id="my-title">Software Developer</strong>
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
                    <a class="clickable-tech-link" href="pages/scs.html" target="_blank" style="margin-left: -.2rem;">Scion Coalition Scheme tech</a>
                </dd>
                <dd>These will include C#, PHP, and SQL.</dd>
                <dd style="margin-top: 1rem; margin-left: -.2rem;">
                    <a class="clickable-tech-link" href="https://nodejs.org/api/modules.html#core-modules" target="_blank">Node.js</a>
                </dd>
                <dd> Node.js is a server-side JS runtime.</dd>
                <dd>
                    Some of my favourite modules are the Node.js core modules and
                    <a class="clickable-tech-link" href="https://expressjs.com/" target="_blank">Express.js</a>.
                </dd>
                <!-- fullstack -->
                <dt>Full-stack</dt>
                <dd>
                    <a class="clickable-tech-link" href="https://nextjs.org/docs" target="_blank">Next.js</a>, 
                    <a class="clickable-tech-link" href="https://www.prisma.io/" target="_blank">Prisma</a>,
                    <a class="clickable-tech-link" href="https://railway.app/" target="_blank">Railway</a>
                </dd>
                <dd>Next.js is a React framework for building full-stack web applications.</dd>
                <dd>With the aid of page & API routing, Next.js can be used to build interactive, dynamic, and fast React applications.</dd>
                <dd>
                    Prisma is a great tool for interacting with a 
                    <span title="Database Management System">DBM</span> such as 
                    <a class="clickable-tech-link" href="https://docs.railway.app/guides/postgresql" target="_blank">the Railway PostgreSQL database service</a>.
                </dd>
            </dl>
            <div id="portfolio-list-of-projects">
                <a href="https://ftanekha.github.io/netMatters-HomePageII/" target="_blank">
                    <figure>
                        <img src="assets/images/netmatters-homepage-replica.jpeg" alt="Netmatters homepage replica" title="Netmatters homepage replica">
                        <figcaption>
                            My first <em title="Scion coalition Scheme">SCS</em> project, a work in progress
                            <span class="construction-cone">🚧</span>.
                            Showcases intuitive use of Syntactically Awesomess Style Sheets!, the Grid system, Flexbox and HTML.
                        </figcaption>
                    </figure>
                </a>
                <a href="https://all4uhealthcare.co.uk/" target="_blank">
                    <figure>
                        <img src="assets/images/all4u-homepage.jpeg" alt="All4U Healthcare Solutions website" title="All4U Healthcare Solutions website">
                        <figcaption>
                            This application was made using <code>jQuery, Handlebars.js, Bootstrap & HTML</code> 
                            to produce a simple app with a streamlined look and easy navigation.
                        </figcaption>
                    </figure>
                </a>
                <a href="https://ftanekha.github.io/netMatters-JS-Array-Assessment/?#" target="_blank">
                    <figure>
                        <img src="assets/images/js-array-assessment-resized.jpeg" 
                            alt="JavaScript array assessement" title="JavaScript array assessement"
                        >
                        <figcaption>
                            A lightweight application that uses the fetch API to fetch images and display random images.
                            Users can create, store, retrieve and view one or more collections of images.
                        </figcaption>
                    </figure>
                </a>
            </div>
        </div>
        <!-- section#contact-me -->
        <div id="contact-me" class="container">
            <h2>Contact Me</h2>
            <div id="enquiry-form">
                <form id="contact-me-form" action="#" method="post">
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
    <script type="module" src="main.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/animate-my-name.js"></script>
    <script src="js/animate-nav-menu-icon.js"></script>
</body>
</html>