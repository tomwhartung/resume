<!DOCTYPE html>
<html>
<?php
$title = gethostname();
?>
<head>
<meta charset="utf-8" />
	<title><?php echo $title; ?></title>
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css" />
	<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
	<script type="text/javascript" src="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<div data-role="page" id="resume"> <!-- Introduction -->
	<div data-role="header">
		<h1>Resume</h1>
	</div>
	<div data-role="content">
		<p>This is the mobile version of my mobile-friendly resume.</p>
		<p>Yadda yadda yadda yadda.</p>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<div data-role="navbar">
			<ul>
				<li><a data-direction="reverse" class="ui-btn-active ui-state-persist">
					Resume</a></li>
				<li><a href="#summary">
					Summary</a></li>
			</ul>
		</div>
	</div>
</div>

<div data-role="page" id="summary"> <!-- SummaryOfQualifications -->
	<div data-role="header">
		<h1>Summary</h1>
	</div>
	<div data-role="content">
		<p>This is content for the Summary Page.</p>
		<p>I am a ... yadda yadda yadda yadda.</p>
	</div>
	<div data-role="footer" data-id="main"  position="fixed">
		<div data-role="navbar">
			<ul>
				<li><a href="#resume" data-direction="reverse">Resume</a></li>
				<li><a class="ui-btn-active ui-state-persist">Summary</a></li>
				<li><a href="#technical">Technical</a></li>
				<li><a href="#accomplishments">Accomplishments</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#education">Education</a></li>
				<li><a href="#volunteering">Volunteering</a></li>
			</ul>
		</div>
	</div>
</div>

<div data-role="page" id="technical"> <!-- TechnicalExperience -->
	<div data-role="header">
		<h1>Skills</h1>
	</div>
	<div data-role="content">
		<ul>
			<li>Programming Languages: Yadda yadda yadda yadda</li>
			<li>Web Technologies: Yadda yadda yadda yadda</li>
		</ul>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<div data-role="navbar">
			<ul>
				<li><a data-icon="home" class="ui-btn-active ui-state-persist">Resume</a></li>
				<li><a href="#summary" data-icon="alert">Summary</a></li>
			</ul>
		</div>
	</div>
</div>

<div data-role="page" id="accomplishments"> <!-- RepresentativeAccomplishments -->
	<div data-role="header">
		<h1>Representative Accomplishments</h1>
	</div>
	<div data-role="content">
		<ul>
			<li>xxx xxx: Yadda yadda yadda yadda</li>
			<li>xxx xxx: Yadda yadda yadda yadda</li>
		</ul>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<div data-role="navbar">
			<ul>
				<li><a data-icon="home" class="ui-btn-active ui-state-persist">Resume</a></li>
				<li><a href="#summary" data-icon="alert">Summary</a></li>
			</ul>
		</div>
	</div>
</div>

<div data-role="page" id="experience"> <!-- TechnicalExperience -->
	<div data-role="header">
		<h1>Technical Experience</h1>
	</div>
	<div data-role="content">
		<ul>
			<li>xxx xxx: Yadda yadda yadda yadda</li>
			<li>xxx xxx: Yadda yadda yadda yadda</li>
		</ul>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<div data-role="navbar">
			<ul>
				<li><a data-icon="home" class="ui-btn-active ui-state-persist">Resume</a></li>
				<li><a href="#summary" data-icon="alert">Summary</a></li>
			</ul>
		</div>
	</div>
</div>

<div data-role="page" id="education"> <!-- CertificationsAndEducation -->
	<div data-role="header">
		<h1>Certifications and Education</h1>
	</div>
	<div data-role="content">
		<ul>
			<li>xxx xxx: Yadda yadda yadda yadda</li>
			<li>xxx xxx: Yadda yadda yadda yadda</li>
		</ul>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<div data-role="navbar">
			<ul>
				<li><a data-icon="home" class="ui-btn-active ui-state-persist">Resume</a></li>
				<li><a href="#summary" data-icon="alert">Summary</a></li>
			</ul>
		</div>
	</div>
</div>

<div data-role="page" id="volunteering"> <!-- Volunteering -->
	<div data-role="header">
		<h1>Volunteering</h1>
	</div>
	<div data-role="content">
		<ul>
			<li>xxx xxx: Yadda yadda yadda yadda</li>
			<li>xxx xxx: Yadda yadda yadda yadda</li>
		</ul>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<div data-role="navbar">
			<ul>
				<li><a data-icon="home" class="ui-btn-active ui-state-persist">Resume</a></li>
				<li><a href="#summary" data-icon="alert">Summary</a></li>
			</ul>
		</div>
	</div>
</div>

</body>
</html>
