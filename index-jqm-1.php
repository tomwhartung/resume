<!DOCTYPE html>
<html>
<?php
$title = gethostname();
?>

<?php
function navForHeader( $section )
{
	$resumeHref = 'href="#resume" ';
	$resumeClass = '';
	$skillsHref = 'href="#skills" ';
	$skillsClass = '';
	$experienceHref = 'href="#experience" ';
	$experienceClass = '';

	if ( $section === 'resume' )
	{
		$resumeClass = 'class="ui-btn-active ui-state-persist"';
		$resumeHref = '';
	}
	else if ( $section === 'skills' )
	{
		$skillsClass = 'class="ui-btn-active ui-state-persist"';
		$skillsHref = '';
	}
	else if ( $section === 'experience' )
	{
		$experienceClass = 'class="ui-btn-active ui-state-persist"';
		$experienceHref = '';
	}

	print '<div data-role="navbar">';
	print ' <ul>';
	print '  <li><a ' . $resumeHref . $resumeClass . '>Resume</a></li>';
	print '  <li><a ' . $skillsHref . $skillsClass . '>Skills</a></li>';
	print '  <li><a ' . $experienceHref . $experienceClass . '>Experience</a></li>';
	print ' </ul>';
	print '</div>';

}
function navForFooter( $section )
{
	$summaryHref = 'href="#summary" ';
	$summaryClass = '';
	$accomplishmentsHref = 'href="#accomplishments" ';
	$accomplishmentsClass = '';
	$educationHref = 'href="#education" ';
	$educationClass = '';
	$volunteeringHref = 'href="#volunteering" ';
	$volunteeringClass = '';
	
	if ( $section === 'summary' )
	{
		$summaryClass = 'class="ui-btn-active ui-state-persist"';
		$summaryHref = '';
	}
	else if ( $section === 'accomplishments' )
	{
		$accomplishmentsClass = 'class="ui-btn-active ui-state-persist"';
		$accomplishmentsHref = '';
	}
	else if ( $section === 'education' )
	{
		$educationClass = 'class="ui-btn-active ui-state-persist"';
		$educationHref = '';
	}
	else if ( $section === 'volunteering' )
	{
		$volunteeringClass = 'class="ui-btn-active ui-state-persist"';
		$volunteeringHref = '';
	}

	print '<div data-role="navbar">';
	print ' <ul>';
	print '  <li><a ' . $summaryHref . $summaryClass . '>Summary</a></li>';
	print '  <li><a ' . $accomplishmentsHref . $accomplishmentsClass . '>Accomplishments</a></li>';
	print '  <li><a ' . $educationHref . $educationClass . '>Education</a></li>';
	print '  <li><a ' . $volunteeringHref . $volunteeringClass . '>Volunteering</a></li>';
	print ' </ul>';
	print '</div>';

}
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
		<?php navForHeader( "resume" ); ?>
		<h1>Resume</h1>
	</div>
	<div data-role="content">
		<p>This is the mobile version of my mobile-friendly resume.</p>
		<p>Yadda yadda yadda yadda.</p>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<?php navForFooter( "resume" ); ?>
	</div>
</div>

<div data-role="page" id="summary"> <!-- SummaryOfQualifications -->
	<div data-role="header">
		<?php navForHeader( "summary" ); ?>
		<h1>Summary</h1>
	</div>
	<div data-role="content">
		<p>This is content for the Summary Page.</p>
		<p>I am a ... yadda yadda yadda yadda.</p>
	</div>
	<div data-role="footer" data-id="main"  position="fixed">
		<?php navForFooter( "summary" ); ?>
	</div>
</div>

<div data-role="page" id="skills"> <!-- TechnicalExperience -->
	<div data-role="header">
		<?php navForHeader( "skills" ); ?>
		<h1>Skills</h1>
	</div>
	<div data-role="content">
		<ul>
			<li>Programming Languages: Yadda yadda yadda yadda</li>
			<li>Web Technologies: Yadda yadda yadda yadda</li>
		</ul>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<?php navForFooter( "skills" ); ?>
	</div>
</div>

<div data-role="page" id="accomplishments"> <!-- RepresentativeAccomplishments -->
	<div data-role="header">
		<?php navForHeader( "accomplishments" ); ?>
		<h1>Representative Accomplishments</h1>
	</div>
	<div data-role="content">
		<ul>
			<li>I did this and that and yadda yadda yadda</li>
			<li>I also did that and this and yadda yadda yadda</li>
		</ul>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<?php navForFooter( "accomplishments" ); ?>
	</div>
</div>

<div data-role="page" id="experience"> <!-- ProfessionalExperience -->
	<div data-role="header">
		<?php navForHeader( "experience" ); ?>
		<h1>Professional Experience</h1>
	</div>
	<div data-role="content">
		<ul>
			<li>Job at Abc Inc. Yadda yadda yadda yadda</li>
			<li>Job at Xyx Company Yadda yadda yadda yadda</li>
		</ul>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<?php navForFooter( "experience" ); ?>
	</div>
</div>

<div data-role="page" id="education"> <!-- CertificationsAndEducation -->
	<div data-role="header">
		<?php navForHeader( "education" ); ?>
		<h1>Certifications and Education</h1>
	</div>
	<div data-role="content">
		<ul>
			<li>Java Certification - More yadda yadda yadda yadda</li>
			<li>Masters Degree: Blah blah blah and yadda yadda yadda yadda</li>
		</ul>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<?php navForFooter( "education" ); ?>
	</div>
</div>

<div data-role="page" id="volunteering"> <!-- Volunteering -->
	<div data-role="header">
		<?php navForHeader( "volunteering" ); ?>
		<h1>Volunteering</h1>
	</div>
	<div data-role="content">
		<ul>
			<li>Denver Film Society: Yadda yadda yadda yadda</li>
		</ul>
	</div>
	<div data-role="footer" data-id="main" position="fixed">
		<?php navForFooter( "volunteering" ); ?>
	</div>
</div>

</body>
</html>
