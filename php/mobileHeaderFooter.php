<?php
/**
 * Returns html for the header we want to use on mobile devices
 * @param type $section
 * @return string
 */
function mobileHeader( $section )
{
	$headerHtml = '';
	$headerHtml .= '<div data-role="header">';
	$headerHtml .= navForHeader( $section );
	$headerHtml .= ' <h1>' . ucfirst( $section ) . '</h1>';
	$headerHtml .= '</div>';
	return $headerHtml;
}
/**
 * Returns html for navigation elements used in the header
 * @param type $section
 */
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

	$headerNavHtml = '';
	$headerNavHtml .= '<div data-role="navbar">';
	$headerNavHtml .= ' <ul>';
	$headerNavHtml .= '  <li><a ' . $resumeHref . $resumeClass . ' data-transition="fade">Resume</a></li>';
	$headerNavHtml .= '  <li><a ' . $skillsHref . $skillsClass . ' data-transition="fade">Skills</a></li>';
	$headerNavHtml .= '  <li><a ' . $experienceHref . $experienceClass . ' data-transition="fade">Experience</a></li>';
	$headerNavHtml .= ' </ul>';
	$headerNavHtml .= '</div>';

	return $headerNavHtml;
}
/**
 * Returns html for the footer we want to use on mobile devices
 * @param type $section
 * @return string
 */
function mobileFooter( $section )
{
	$footerHtml = '';
	$footerHtml .= '<div data-role="footer" data-id="main" position="fixed">';
	$footerHtml .= navForFooter( $section );
	$footerHtml .= '</div>';
	return $footerHtml;
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

	$footerNavHtml = '';
	$footerNavHtml .= '<div data-role="navbar">';
	$footerNavHtml .= ' <ul>';
	$footerNavHtml .='  <li><a ' . $summaryHref . $summaryClass . ' data-transition="fade">Summary</a></li>';
	$footerNavHtml .='  <li><a ' . $accomplishmentsHref . $accomplishmentsClass . ' data-transition="fade">Accomplishments</a></li>';
	$footerNavHtml .='  <li><a ' . $educationHref . $educationClass . ' data-transition="fade">Education</a></li>';
	$footerNavHtml .='  <li><a ' . $volunteeringHref . $volunteeringClass . ' data-transition="fade">Volunteering</a></li>';
	$footerNavHtml .=' </ul>';
	$footerNavHtml .='</div>';

	return $footerNavHtml;
}

