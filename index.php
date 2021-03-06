<?php
//
// Ensure that we have idGadget code available!
// If not, redirect user to RTFM!
//
if ( ! file_exists('idMyGadget') )
{
	header('Location:https://github.com/tomwhartung/resume/blob/master/README.md');
}
?>
<!DOCTYPE html>
<html lang='en'>
<?php
/**
 * index.php: static and dynamic markup, and handlebars templates for
 * my mobile friendly, interactive resume
 */
$myName = 'Tom W. Hartung';

define( "STYLE_SHEET_DIRECTORY",     "css/" );
define( "STYLE_SHEET_ALL_DEVICES",   "allDevices.css" );
define( "STYLE_SHEET_MEDIA_QUERIES", "mediaQueries.css" );
define( "STYLE_SHEET_DESKTOP",       "device/desktop.css" );
define( "STYLE_SHEET_TABLET",        "device/tablet.css" );
define( "STYLE_SHEET_ANDROID_PHONE", "device/androidPhone.css" );
define( "STYLE_SHEET_APPLE_PHONE",   "device/iPhone.css" );

define( "JS_DEVICE_DIRECTORY",     "js/device/" );
define( "JS_DEVICE_DESKTOP",       "desktop.js" );
define( "JS_DEVICE_TABLET",        "tablet.js" );
define( "JS_DEVICE_ANDROID_PHONE", "androidPhone.js" );
define( "JS_DEVICE_APPLE_PHONE",   "iPhone.js" );
//
// If it's installed, instantiate an IdMyGadget object and
// use it to determine key factors about
// the device the user is using to access the page.
//
$newIncludePath = get_include_path() . ":idMyGadget";
set_include_path( $newIncludePath );

//
// Update for 2017-04-27: Switching to Mobile-Detect
// -------------------------------------------------
//
// require_once 'gadget_detectors/tera_wurfl/Tera-Wurfl/wurfl-dbapi/TeraWurfl.php';
// require_once 'php/IdMyGadget.php';
// require_once 'php/IdMyGadgetTeraWurfl.php';
//
require_once 'gadget_detectors/mobile_detect/Mobile-Detect/Mobile_Detect.php';
require_once 'php/IdMyGadget.php';
require_once 'php/IdMyGadgetMobileDetect.php';

//
// debugging: displays verbose information; we don't need to use this very often
// allowOverridesInUrl: Allow testing with overrides as GET variables, TRUE is OK
//    for example, to test the iPhone layout in a browser:
//       <a href="http://localhost/resume/?gadgetType=phone&gadgetModel=iPhone&gadgetBrand=Apple">
//    and to test the androidPhone layout in a browser:
//       <a href="http://localhost/resume/?gadgetType=phone&gadgetModel=androidPhone&gadgetBrand=brand_name_not_set">
//
// $debugging = TRUE;  // Warning: debug output sends all <head> elts into <body>
$debugging = FALSE;
$allowOverridesInUrl = TRUE;
$idMyGadget = new IdMyGadgetMobileDetect( $debugging, $allowOverridesInUrl );
$deviceData = $idMyGadget->getDeviceData();
$gadgetType = $deviceData["gadgetType"];
$gadgetModel = $deviceData["gadgetModel"];
$gadgetBrand = $deviceData["gadgetBrand"];

//
// Update for 2017-04-27: Lessons Learned
// --------------------------------------
// 0. One of the big lessons learned from integrating idMyGadget with
//    the LAMP CMSes was that the middle option (Mobile Detect) is the best.
//    -> Looking back at this, I cannot believe I hard-coded it to use TeraWurfl!
//    -> It is time to address that issue!
// 1. gadgetModel - note that:
//    css/device/androidPhone.css matches iPhone.css and
//    js/device/androidPhone.js matches iPhone.js
//    So...
// 2. There's really no reason to distinguish between iphone and android -
//    even though it is cool that we can do so!
//    However, keeping the code simple takes precedence!
//    And I'm super-busy working on other stuff right now!
//    And...
// 3. gadgetBrand - is not even being used, outside of the comment above.
//    So...
// 4. We are hard-coding it to use Apple for the brand,
//    -> Because it's a quick fix and doesn't even matter!
//
$gadgetModel = IdMyGadget::GADGET_MODEL_APPLE_PHONE;    # SEE the "Update"s ABOVE!

if ( $gadgetType === IdMyGadget::GADGET_TYPE_DESKTOP )
{
	$styleSheetName = STYLE_SHEET_DESKTOP;
	$deviceJsFile = JS_DEVICE_DESKTOP;
}
else if ( $gadgetType === IdMyGadget::GADGET_TYPE_TABLET )
{
	$styleSheetName = STYLE_SHEET_TABLET;
	$deviceJsFile = JS_DEVICE_TABLET;
}
else if ( $gadgetType === IdMyGadget::GADGET_TYPE_PHONE )
{
	if ( $gadgetModel === IdMyGadget::GADGET_MODEL_APPLE_PHONE )
	{
		$styleSheetName = STYLE_SHEET_APPLE_PHONE;
		$deviceJsFile = JS_DEVICE_APPLE_PHONE;
	}
	else
	{
		$styleSheetName = STYLE_SHEET_ANDROID_PHONE;
		$deviceJsFile = JS_DEVICE_ANDROID_PHONE;
	}
}
else
{
	$styleSheetName = STYLE_SHEET_MEDIA_QUERIES;
	$deviceJsFile = JS_DEVICE_DESKTOP;
}
//
// If Resume.js or ProfessionalExperience.js or both are missing
//    Substitute Resume-fixMe.js and ProfessionalExperience-fixMe.js
// Explanation:
//    When we initially pull code, there is no Resume.js or ProfessionalExperience.js
//    This can cause just a blank screen to be displayed.
//    The *-fixMe.js files display breif instructions on how to set this resume up
//       so that it displays the correct information
//
$resumeFileName = 'js/Resume.js';
$professionalExperienceFileName = 'js/ProfessionalExperience.js';

if ( ! file_exists($resumeFileName) )
{
	$myName = '*** FIX ONE OR BOTH JAVASCRIPT FILES ***';
	$resumeFileName = 'js/Resume-fixMe.js';
}
if ( ! file_exists($professionalExperienceFileName) )
{
	$myName = '*** FIX ONE OR BOTH JAVASCRIPT FILES ***';
	$professionalExperienceFileName = 'js/ProfessionalExperience-fixMe.js';
}

print '<head>';
include_once( 'google_analytics.php' );
print '<title>' . $myName . '</title>';
print '<meta charset="utf-8" />';
print '<meta name="viewport" content="user-scalable=no, width=device-width" />';
//
// We want to use jQuery Mobile only when the user is on a phone
//
if ( $gadgetType === IdMyGadget::GADGET_TYPE_PHONE )
{
	print '<link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />';
	print '<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>';
	print '<script type="text/javascript" src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>';
}
else
{
	print '<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>';
}

print '<link rel="stylesheet" type="text/css" ' .
		'href="' . STYLE_SHEET_DIRECTORY . STYLE_SHEET_ALL_DEVICES . '" />';
print '<link rel="stylesheet" type="text/css" ' .
		'href="' . STYLE_SHEET_DIRECTORY . $styleSheetName . '" ' . '/>';
?>
<!--[if IE]>
	<link rel="stylesheet" type="text/css" href="explorer.css" media="all" />
<![endif]-->
<script type="text/javascript" src="js/lib/tomsUtilities.js"></script>
<script type="text/javascript" src="js/device/allDevices.js"></script>
<script type="text/javascript" src="<?php echo JS_DEVICE_DIRECTORY . $deviceJsFile ?>"></script>
<script type="text/javascript" src="<?php echo $professionalExperienceFileName ?>"></script>
<script type="text/javascript" src="<?php echo $resumeFileName ?>"></script>
<script type="text/javascript" src="js/Resume-functions.js"></script>

<!-- =============================================================================== -->
<!-- Most of the content in div #content is generated by JavaScript using handlebars -->
<!-- =============================================================================== -->
<script type="text/javascript" src="js/lib/handlebars.js"></script>
<script id="paragraph-section-template" type="text/x-handlebars-template">
	<p>{{{content}}}</p>
</script>
<?php  if ( $gadgetType === IdMyGadget::GADGET_TYPE_PHONE ): ?>
	<script id="bullet-section-template" type="text/x-handlebars-template">
		<ul>
			{{#each bulletPoints}}
				{{#if linkHref}}
					<div data-role="collapsible" data-collapsed="true">
						<h4><a class="bold" href="{{linkHref}}" target="_blank">{{bold}}</a></h4>
						<p>{{text}}</p>
					</div>
				{{else}}
					{{#if bold}}
						<div data-role="collapsible" data-collapsed="true">
							<h4>{{bold}}</h4>
							<p>{{text}}</p>
						</div>
					{{else}}
							<li>{{text}}</li>
					{{/if}}
				{{/if}}
			{{/each}}
		</ul>
	</script>
<?php  else: ?>
	<script id="bullet-section-template" type="text/x-handlebars-template">
		<ul>
			{{#each bulletPoints}}
				{{#if linkHref}}
					<li><a class="bold" href="{{linkHref}}" target="_blank">{{bold}}</a>
						{{text}}
					</li>
				{{else}}
					<li><span class="bold">{{bold}}</span>
						{{text}}
					</li>
				{{/if}}
			{{/each}}
		</ul>
	</script>
<?php  endif ?>
<?php  if ( $gadgetType === IdMyGadget::GADGET_TYPE_PHONE ): ?>
	<script id="experience-section-template" type="text/x-handlebars-template">
		<ul data-role="listview" data-inset="true">
			{{#each jobs}}
				<li id="{{id}}">
					{{#if title}}
						<h4><a href="#{{id}}_page" data-transition="slide" class="bold">{{title}}</a></h4>
						<p><span class="underline">{{companyName}}</span>,&nbsp;{{location}}</p>
					{{else}}
						<p><a href="#{{id}}-page" class="underline">{{companyName}}</a>,&nbsp;{{location}}</p>
					{{/if}}
					<p><span class="ul-li-aside date-range">{{dateRange}}</span></p>
				</li>
			{{/each}}
		</ul>
		<div class="show-more-jobs-button hide">
			<a class="show-more-jobs-button">Show More Jobs</a>
		</div>
	</script>
	<script id="single-job-section-template" type="text/x-handlebars-template">
		<section data-role="page" id="{{id}}_page">
			<div data-role="header" data-theme="b">
				{{#if title}}
					<h2>{{title}}</h2>
				{{else}}
					<h2>{{dateRange}}</h2>
				{{/if}}
			</div>
			<div data-role="content">
				<ul>
					<li id="{{id}}">
						<span class="bold">
							<a href="{{companyHref}}" target="_blank">{{companyName}}</a>,
						</span>
						{{location}}<br />
						{{#if title}}
							{{title}}<br />
						{{/if}}
						{{dateRange}}<br />
						<div id="{{id}}-list-items" class="list-items">
							<ul>{{{listItems}}}</ul>
							<a id="{{id}}-more-items-button" class="more-items-button" alt="More Details"
								title="Show more details for this position"
								onclick="Resume.moreItemsButtonClicked();">More...</a>
						</div><!-- .list-items -->
						<div id="{{id}}-more-items" class="more-items">
							<ul>{{{moreItems}}}</ul>
							<a id="{{id}}-fewer-items-button" class="fewer-items-button" alt="Fewer Details"
								title="Show fewer details for this position"
								onclick="Resume.fewerItemsButtonClicked();">Less...</a>
						</div><!-- .more-items -->
					</li>
				</ul>
			</div>
			<div data-role="footer" data-theme="b">
				<h4 class="back-button" style="text-align:left;"><a data-role="button" data-rel="back" class="back-button">Back</a></h4>
			</div>
		</section>
	</script>
<?php  else: ?>
	<script id="experience-section-template" type="text/x-handlebars-template">
		<ul class="job-experience">
		{{#each jobs}}
			<li id="{{id}}">
				{{#if title}}
					<div class="job-title"><span class="bold">{{title}}</span></div>
				{{/if}}
				{{#if companyHref}}
					<a href="{{companyHref}}" target="_blank">{{companyName}}</a>,&nbsp;{{location}}
				{{else}}
					<span class="underline">{{companyName}}</span>,&nbsp;{{location}}
				{{/if}}
				<div>{{dateRange}}</div>
				<div class="underline">
					<a id="{{id}}-show-button" class="show-button">Show Details</a>
				</div>
				<div id="{{id}}-list-items" class="list-items">
					<ul>{{{listItems}}}</ul>
					<a id="{{id}}-more-items-button" class="more-items-button" alt="More Details"
						title="Show more details for this position">More Details</a>
				</div><!-- .list-items -->
				<div id="{{id}}-more-items" class="more-items">
					<ul>{{{moreItems}}}</ul>
					<a id="{{id}}-fewer-items-button" class="fewer-items-button" alt="Fewer Details"
						title="Show fewer details for this position">Fewer Details</a>
				</div><!-- .more-items -->
			</li>
		{{/each}}
		</ul>
		<div class="show-more-jobs-button hide">
			<a class="show-more-jobs-button">Show More Jobs</a>
		</div>
	</script>
<?php  endif ?>
<?php  if ( $gadgetType === IdMyGadget::GADGET_TYPE_PHONE ): ?>
	<script id="education-section-template" type="text/x-handlebars-template">
		{{#each bulletPoints}}
			<div data-role="collapsible" data-collapsed="true">
				<h4><a href="{{linkHref}}" class="bold" target="_blank">{{linkText}}</a></h4>
				{{#if schoolText}}
					<p><a href="{{schoolHref}}" target="_blank">{{schoolText}}</a></p>
				{{/if}}
				<p>{{location}}</p>
				<p>Completed: {{completedDate}}</p>
				<ul>{{{listItems}}}</ul>
			</div>
		{{/each}}
	</script>
<?php  else: ?>
	<script id="education-section-template" type="text/x-handlebars-template">
		<ul class="education">
			{{#each bulletPoints}}
				<li>
					<div class="bold education-heading">
						{{#if linkHref}}
							<a href="{{linkHref}}" target="_blank">{{linkText}}</a>
						{{else}}
							<p>{{linkText}}</p>
						{{/if}}
					</div>
					{{#if schoolText}}
						<a href="{{schoolHref}}" target="_blank">{{schoolText}}</a>
					{{/if}}
					{{location}}<br />
					{{#if completedDate}}
						Completed: {{completedDate}}<br />
					{{/if}}
					<ul>{{{listItems}}}</ul>
				</li>
			{{/each}}
		</ul>
	</script>
<?php endif ?>
<?php  if ( $gadgetType === IdMyGadget::GADGET_TYPE_PHONE ): ?>
	<script id="volunteer-section-template" type="text/x-handlebars-template">
		<dl>
			{{#each bulletPoints}}
				{{#if linkHref}}
					<dt><h4><a class="bold" href="{{linkHref}}" target="_blank">{{bold}}</a></h4></dt>
					<dd>{{text}}</dd>
				{{else}}
					{{#if bold}}
						<dt><h4>{{bold}}</h4></dt>
						<dd>{{text}}</dd>
					{{else}}
							<dt>{{text}}</dt>
							<dd></dd>
					{{/if}}
				{{/if}}
			{{/each}}
		</dl>
	</script>
<?php  else: ?>
	<script id="volunteer-section-template" type="text/x-handlebars-template">
		<dl>
			{{#each bulletPoints}}
				{{#if linkHref}}
					<dt><a class="bold" href="{{linkHref}}" target="_blank">{{bold}}</a></dt>
					<dd>{{text}}</dd>
				{{else}}
					<dt><span class="bold">{{bold}}</span></dt>
					<dd>{{text}}</dd>
				{{/if}}
			{{/each}}
		</dl>
	</script>
<?php endif ?>

</head>

<body>
<div id="container">
<?php if ( $gadgetType === IdMyGadget::GADGET_TYPE_DESKTOP ||
			  $gadgetType === IdMyGadget::GADGET_TYPE_TABLET   ): ?>
	<header>
		<h1>The Resume of <?php echo $myName ?></h1>
	</header>
<?php endif; ?>
<!-- Set up a div element for each section. -->
<!-- All content in the div for each section is generated by JavaScript using handlebars -->
<!-- Note that on mobile devices each section is a page (screen/window/menu option) -->
<!-- while on desktop browsers we display all sections at once. -->
<?php if ( $gadgetType === IdMyGadget::GADGET_TYPE_DESKTOP ||
			  $gadgetType === IdMyGadget::GADGET_TYPE_TABLET   ): ?>
	<div id="content">
		<section id="content_introduction" class="section">
			<h2>Introduction</h2>
		</section>
		<section id="content_summary" class="section">
			<h2>Summary of Qualifications</h2>
		</section>
		<section id="content_technical_skills" class="section">
			<h2>Technical Experience</h2>
		</section>
		<section id="content_accomplishments" class="section">
			<h2>Representative Accomplishments</h2>
		</section>
		<section id="content_experience" class="section">
			<h2>Professional Experience</h2>
		</section>
		<section id="content_education" class="section">
			<h2>Classes, Certifications, and Education</h2>
		</section>
		<section id="content_volunteering" class="section">
			<h2>Volunteering</h2>
		</section>
	</div>  <!-- #content -->
	<footer>
		<hr />
		<ul>
			<li class="footer_links"><a href="http://tomwhartung.com">tomwhartung.com</a></li>
			<li class="footer_links"><a href="http://seeourminds.com">seeourminds.com</a></li>
			<li class="footer_links"><a href="http://joomoowebsites.com">joomoowebsites.com</a></li>
			<li class="footer_links"><a href="http://tomhartung.com">tomhartung.com</a></li>
		</ul>
		<hr />
		<p class="footer">&copy; 2001-2016 Tom W. Hartung, P. O. Box 18216, Denver, CO 80218, 303-863-1757</p>
		<hr />
	</footer>
<?php  else: ?>
	<?php require_once 'php/mobileHeaderFooter.php'; ?>
	<section data-role="page" id="resume"> <!-- Introduction -->
		<?php print mobileHeader( "resume" ); ?>
		<div data-role="content" id="content_introduction"></div>
		<?php print mobileFooter( "resume" ); ?>
	</section>
	<section data-role="page" id="summary"> <!-- SummaryOfQualifications -->
		<?php print mobileHeader( "summary" ); ?>
		<div data-role="content" id="content_summary"></div>
		<?php print mobileFooter( "summary" ); ?>
	</section>
	<section data-role="page" id="skills"> <!-- TechnicalExperience -->
		<?php print mobileHeader( "skills" ); ?>
		<div data-role="content" id="content_technical_skills"></div>
		<?php print mobileFooter( "skills" ); ?>
	</section>
	<section data-role="page" id="accomplishments"> <!-- RepresentativeAccomplishments -->
		<?php print mobileHeader( "accomplishments" ); ?>
		<div data-role="content" id="content_accomplishments"></div>
		<?php print mobileFooter( "accomplishments" ); ?>
	</section>
	<section data-role="page" id="experience"> <!-- ProfessionalExperience -->
		<?php print mobileHeader( "experience" ); ?>
		<div data-role="content" id="content_experience"></div>
		<?php print mobileFooter( "experience" ); ?>
	</section>
	<section data-role="page" id="education"> <!-- CertificationsAndEducation -->
		<?php print mobileHeader( "education" ); ?>
		<div data-role="content" id="content_education"></div>
		<?php print mobileFooter( "education" ); ?>
	</section>
	<section data-role="page" id="volunteering"> <!-- Volunteering -->
		<?php print mobileHeader( "volunteering" ); ?>
		<div data-role="content" id="content_volunteering"></div>
		<?php print mobileFooter( "volunteering" ); ?>
	</section>
<?php endif ?>

</div> <!-- container -->
</body>
</html>
