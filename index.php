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
// Instantiate an IdMyGadget object and use it to determine key factors about 
// the device accessing the page.
//
$newIncludePath = get_include_path() . ":idMyGadget";
set_include_path( $newIncludePath );
require_once 'gadget_detectors/tera_wurfl/Tera-Wurfl/wurfl-dbapi/TeraWurfl.php';
require_once 'php/IdMyGadget.php';
require_once 'php/IdMyGadgetTeraWurfl.php';

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
$idMyGadget = new IdMyGadgetTeraWurfl( $debugging, $allowOverridesInUrl );
$deviceData = $idMyGadget->getDeviceData();
$gadgetType = $deviceData["gadgetType"];
$gadgetModel = $deviceData["gadgetModel"];
$gadgetBrand = $deviceData["gadgetBrand"];

if ( $gadgetType === IdMyGadget::GADGET_TYPE_DESKTOP )
{
	$gadgetString = "Desktop";
	$styleSheetName = STYLE_SHEET_DESKTOP;
	$deviceJsFile = JS_DEVICE_DESKTOP;
}
else if ( $gadgetType === IdMyGadget::GADGET_TYPE_TABLET )
{
	$gadgetString = "Tablet";
	$styleSheetName = STYLE_SHEET_TABLET;
	$deviceJsFile = JS_DEVICE_TABLET;
}
else if ( $gadgetType === IdMyGadget::GADGET_TYPE_PHONE )
{
	if ( $gadgetModel === IdMyGadget::GADGET_MODEL_APPLE_PHONE )
	{
		$gadgetString = "iPhone";
		$styleSheetName = STYLE_SHEET_APPLE_PHONE;
		$deviceJsFile = JS_DEVICE_APPLE_PHONE;
	}
	else
	{
		$gadgetString = "Android Phone";
		$styleSheetName = STYLE_SHEET_ANDROID_PHONE;
		$deviceJsFile = JS_DEVICE_ANDROID_PHONE;
	}
}
else
{
	$gadgetString = "Unrecognized";
	$styleSheetName = STYLE_SHEET_MEDIA_QUERIES;
	$deviceJsFile = JS_DEVICE_DESKTOP;
}
print '<head>';
print '<title>' . $myName . '</title>';
print '<meta charset="utf-8" />';
print '<meta name="viewport" content="user-scalable=no, width=device-width" />';
//
// We want to use jQuery Mobile only when the user is on a phone
//
if ( $gadgetType === IdMyGadget::GADGET_TYPE_PHONE )
{
//	print '<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css" />';
//	print '<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>';
//	print '<script type="text/javascript" src="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js"></script>';
	print '<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />';
	print '<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>';
	print '<script type="text/javascript" src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>';
}
else
{
	print '<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>';
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
<script type="text/javascript" src="js/ProfessionalExperience.js"></script>
<script type="text/javascript" src="js/Resume.js"></script>
<script type="text/javascript" src="js/Resume-functions.js"></script>

<!-- ====================================================================== -->
<!-- Everything in div #content is generated by JavaScript using handlebars -->
<!-- ====================================================================== -->
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
						<h4><a href="#{{id}}_page" class="bold">{{title}}</a></h4>
						<p><span class="underline">{{companyName}}</span>,&nbsp;{{location}}
					{{else}}
						<p><a href="#{{id}}-page" class="underline">{{companyName}}</a>,&nbsp;{{location}}
					{{/if}}
					<span class="ul-li-aside date-range">{{dateRange}}</span></p>
				</li>
			{{/each}}
		</ul>
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
						<div class="list-items">
							<ul>{{{listItems}}}</ul>
							<a class="more-button" alt="More Details"
								title="Show more details for this position"
								onclick="toggleMoreOrFewerListItems('{{id}}');">More</a>
						</div><!-- .list-items -->
						<div class="more-items">
							<ul>{{{moreItems}}}</ul>
							<a class="fewer-button" alt="Fewer Details"
								title="Show fewer details for this position"
								onclick="toggleMoreOrFewerListItems('{{id}}');">Less</a>
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
		<ul>
		{{#each jobs}}
			<li id="{{id}}">
				{{#if title}}
					<div><span class="bold">{{title}}</span></div>
				{{/if}}
				{{#if companyHref}}
					<a href="{{companyHref}}" target="_blank">{{companyName}}</a>,&nbsp;{{location}}
				{{else}}
					<span class="underline">{{companyName}}</span>,&nbsp;{{location}}
				{{/if}}
				<div>{{dateRange}}</div>
				<div class="underline" onclick="showListItemsForJob('{{id}}');">
					<a class="show-button">Show Details</a>
				</div>
				<div class="list-items">
					<ul>{{{listItems}}}</ul>
					<a class="more-button" alt="More Details"
						title="Show more details for this position"
						onclick="toggleMoreOrFewerListItems('{{id}}');">More Details</a>
				</div><!-- .list-items -->
				<div class="more-items">
					<ul>{{{moreItems}}}</ul>
					<a class="fewer-button" alt="Fewer Details"
						title="Show fewer details for this position"
						onclick="toggleMoreOrFewerListItems('{{id}}');">Fewer Details</a>
				</div><!-- .more-items -->
			</li>
		{{/each}}
		</ul>
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
		<ul>
			{{#each bulletPoints}}
				<li>
					<span class="bold">
						<a href="{{linkHref}}" target="_blank">{{linkText}}</a>
					</span><br />
					<a href="{{schoolHref}}" target="_blank">{{schoolText}}</a>
					{{location}}<br />
					Completed: {{completedDate}}<br />
					<ul>{{{listItems}}}</ul>
				</li>
			{{/each}}
		</ul>
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
				<h2>Certifications and Education</h2>
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
			<p class="footer">&copy; 2001-2014 Tom W. Hartung, P. O. Box 18216, Denver, CO 80218, 303-863-1757</p>
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
