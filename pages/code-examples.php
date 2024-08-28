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
            <a href="../index.php#my-portfolio-heading">My Portfolio</a>
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
                        <span class="tag" title="HTML">html</span><span class="tag" title="CSS">css</span>
                        <span class="tag" title="JavaScript">js</span><span class="tag" title="jQUERY">jQuery</span>
                        <span class="tag" title="C-sharp">c#</span><span class="tag" title="PHP">php</span>
                        <span class="tag" title="SQL">sql</span><span class="tag" title="NEXT.js">next.js</span>
                        <span class="tag" title="REACT.js">react</span><span class="tag" title="SCSS">sass</span>
                        <span class="tag" title="GitHub">gitHub</span><span class="tag" title="PRISMA">prisma</span>
                    </div>
                </div>
                <div id="coming-soon-playlist-container">
                    <img src="../assets/images/comingsoon_01.gif" alt="Coming soon clipart" title="This section is currently under construction. Coming very soon!">
                    <audio controls preload="auto">
                        <source src="https://res.cloudinary.com/mindlibre3001/video/upload/v1711034534/Nujabes_Cisse_Star_-_Feathers.mp3" type="audio/mp3">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </div>
    </div>
    <script type="module" src="../main.js"></script>
    <script src="../js/jquery.min.js"></script>
    <script src="../js/animate-nav-menu-icon.js"></script>
</body>
</html>