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
	print '  <li><a ' . $resumeHref . $resumeClass . ' data-transition="fade">Resume</a></li>';
	print '  <li><a ' . $skillsHref . $skillsClass . ' data-transition="fade">Skills</a></li>';
	print '  <li><a ' . $experienceHref . $experienceClass . ' data-transition="fade">Experience</a></li>';
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
	print '  <li><a ' . $summaryHref . $summaryClass . ' data-transition="fade">Summary</a></li>';
	print '  <li><a ' . $accomplishmentsHref . $accomplishmentsClass . ' data-transition="fade">Accomplishments</a></li>';
	print '  <li><a ' . $educationHref . $educationClass . ' data-transition="fade">Education</a></li>';
	print '  <li><a ' . $volunteeringHref . $volunteeringClass . ' data-transition="fade">Volunteering</a></li>';
	print ' </ul>';
	print '</div>';

}

