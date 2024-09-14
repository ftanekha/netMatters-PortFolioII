<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <link rel="icon" type="image/x-icon" href="../assets/images/favicons/favicon-red.ico">
    <link rel="stylesheet" href="../css/fonts.css">
    <link rel="stylesheet" href="../css/application.css">
    <title>Code Examples</title>
</head>
<body>
    <!-- hamburger menu button-->
    <?php include '../includes/hamburger-button.php' ?>
    <!-- side menu/ main navigation-->
    <?php include '../includes/side-menu-top.php' ?>
        <li>
            <a href="about-me.php#about-me-heading">About me</a>
        </li>
        <li>
            <a href="../index.php#my-portfolio">My Portfolio</a>
        </li>
        <li>
            <a href="#">Code Examples</a>
        </li>
        <li>
            <a href="scs.php">SCS Scheme</a>
        </li>
        <li>
            <a href="../index.php#contact-me">Contact me</a>
        </li>
    <?php include '../includes/side-menu-bottom.php' ?>
    <!-- main page content -->
    <div id="main-content">
        <h2 id="code-examples-heading">Code Examples</h2>
        <div id="code-examples" class="container">
            <!-- <h2 id="code-examples-heading">Code Examples</h2> -->
            <div id="code-examples-main-container">
                <div id="problem-solution-selector">
                    <p>
                        This section will offer solutions to problems based on the subject
                        selected by the user by clicking on a tag from the list below.
                    </p>
                    <div id="solutions-tags-container">
                        <span class="tag" title="GitHub">gitHub</span><span class="tag" title="HTML">html</span>
                        <span class="tag" title="CSS">css</span><span class="tag" title="SCSS">sass</span>
                        <span class="tag" title="JavaScript">js</span><span class="tag" title="jQUERY">jQuery</span>
                        <span class="tag" title="REACT.js">react</span><span class="tag" title="NEXT.js">next.js</span>
                        <span class="tag" title="PRISMA">prisma</span><span class="tag" title="C-sharp">handlebars</span>
                        <span class="tag" title="SQL">sql</span><span class="tag" title="PHP">php</span>
                    </div>
                </div>
                <div id="projects-container">
                    <div class="parent">
                        <div id="top-first-child" class="child top top-first project-all4u-website" title="Double-Click to expand.">
                            <span class="back">&lt;||</span>
                            <span class="close">x</span>
                            <p class="project-name">All4U website</p>
                            <!-- // -->
                            <div class="examples-list-container css-examples">
                                <div id="coming-soon-playlist-container">
                                    <img src="../assets/images/comingsoon_01.gif" alt="Coming soon clipart" title="This section is currently under construction. Coming very soon!">
                                    <audio controls preload="auto">
                                        <source src="https://res.cloudinary.com/mindlibre3001/video/upload/v1711034534/Nujabes_Cisse_Star_-_Feathers.mp3" type="audio/mp3">
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </div>
                            <!-- // -->
                        </div>
                        <div id="top-second-child" class="child top top-second project-image-collector" title="Double-Click to expand.">
                            <span class="back">&lt;||</span>
                            <span class="close">x</span>
                            <p class="project-name">Image Collector</p>
                            <div class="examples-list-container css-examples">
                                <p class="h3">CSS</p>
                                <ul class="css">
                                    <li class="examples-link choosing-random-color">Choosing a random color theme</li>
                                    <li class="nested">custom error messages</li>
                                    <li class="examples-link flexbox" style="margin-top: 15px">Flexbox & Media queries</li>
                                    <li class="examples-link styling-images-in-collection">Styling images in collection</li>
                                    <li class="nested">border-radius</li>
                                    <li class="nested">hover effects</li>
                                    <li class="nested">smooth transitions</li>
                                </ul>
                            </div>
                            <div class="examples-list-container js-examples">
                                <p class="h3">JS</p>
                                <ul class="js">
                                    <li class="examples-link import-export">Import/Export</li>
                                    <li class="examples-link fetch-api">Fetch API</li>
                                    <li class="examples-link local-storage">localStorage vs sessionStorage</li>
                                </ul>
                            </div>
                            <?php include '../includes/examples/image-collector/index.php' ?>
                        </div>
                        <div id="bottom-child" class="project-netmatters" title="Double-Click to expand.">
                            <span class="back">&lt;||</span>
                            <span class="close">x</span>
                            <p class="project-name">
                                Netmatters Home <span class="ampersand">&amp;<span> Contact pages
                            </p>
                            <div class="examples-list-container css-examples">
                                <p class="h3">SCSS</p>
                                <ul class="css">
                                    <li class="examples-link">Ico-moon icons</li>
                                    <li class="examples-link">Stick header</li>
                                    <li class="examples-link">Variables</li>
                                    <li class="examples-link">@if/@elseif@/@else block</li>
                                    <li class="examples-link">Functions</li>
                                </ul>
                            </div>
                            <div class="examples-list-container js-examples">
                                <p class="h3">JS/jQuery</p>
                                <ul class="js">
                                    <li class="examples-link">Using jquery plugins e.g homepage carousels</li>
                                    <li class="examples-link">Sticky header (uses scroll event heavily) with a smooth transition</li>
                                    <li class="examples-link"><i>Sliding</i> side menu</li>
                                    <li class="nested">hamburger menu icon, background filter</li>
                                    <li class="examples-link" style="margin-top: 15px">Creating and controlling an accordion </li>
                                </ul>
                            </div>
                            <div class="examples-list-container php-examples">
                                <p class="h3">PHP</p>
                                <ul class="php">
                                    <li class="examples-link">Using include</li>
                                    <li class="examples-link">Loop over a database response to display images</li>
                                    <li class="examples-link">Recieving and decoding form data</li>
                                    <li class="examples-link">Validatig & Sanitising form data</li>
                                    <li class="examples-link">Sending data to a database</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../js/jquery.min.js"></script>
    <script src="../js/toggle-side-menu.js"></script>
    <script type="module" src="../main.js"></script>
    <script src="../js/code-examples.js"></script>
</body>
</html>