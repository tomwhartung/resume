<!DOCTYPE html>
<html lang='en'>
<?php
/**
 * index.php: static and dynamic markup, and handlebars templates for
 * my mobile friendly, interactive resume
 */
$myName = 'Tom W. Hartung';

$newIncludePath = get_include_path() . ":php";
set_include_path( $newIncludePath );
include_once 'filenames.php';
//
// Instantiate an IdMyGadget object and use it to determine key factors about 
// the device accessing the page.
//
$newIncludePath = get_include_path() . ":idMyGadget";
set_include_path( $newIncludePath );
include_once 'Tera-Wurfl/wurfl-dbapi/TeraWurfl.php';
require_once 'php/deviceData.php';
require_once 'php/DemoIdMyGadget.php';
require_once 'php/IdMyGadget.php';
//
// debugging: displays verbose information; we don't need to use this very often
// allowOverridesInUrl: Allow testing with overrides as GET variables, TRUE is OK
//    for example, to test the iPhone layout in a browser:
//       <a href="http://localhost/resume/?gadgetType=phone&gadgetModel=iPhone&gadgetBrand=Apple">
//    and to test the androidPhone layout in a browser:
//       <a href="http://localhost/resume/?gadgetType=phone&gadgetModel=androidPhone&gadgetBrand=brand_name_not_set">
//
$debugging = FALSE;
$allowOverridesInUrl = TRUE;
## $allowOverridesInUrl = FALSE;
$idMyGadget = new IdMyGadget( $debugging, $allowOverridesInUrl );
$deviceData = $idMyGadget->getDeviceData();
$gadgetType = $deviceData["gadgetType"];
$gadgetModel = $deviceData["gadgetModel"];
$gadgetBrand = $deviceData["gadgetBrand"];

if ( $gadgetType === GADGET_TYPE_DESKTOP_BROWSER )
{
	$gadgetString = "Desktop";
	$styleSheetName = STYLE_SHEET_DESKTOP;
	$deviceJsFile = JS_DEVICE_DESKTOP;
}
else if ( $gadgetType === GADGET_TYPE_TABLET )
{
	$gadgetString = "Tablet";
	$styleSheetName = STYLE_SHEET_TABLET;
	$deviceJsFile = JS_DEVICE_TABLET;
}
else if ( $gadgetType === GADGET_TYPE_PHONE )
{
	if ( $gadgetModel === GADGET_MODEL_APPLE_PHONE )
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

//
// CSS link tags to consider thinking about - specifically the media attributes:
// Android version:
//   <link rel="stylesheet" type="text/css" href="css/androidPhone.css" media="only screen and (max-width: 600px)" />
//   <link rel="stylesheet" type="text/css" href="css/desktop.css" media="screen and (min-width: 601px)" />
// iPhone version:
//   <link rel="stylesheet" type="text/css" href="css/iPhone.css" media="only screen and (max-width: 480px)" />
//   <link rel="stylesheet" type="text/css" href="css/desktop.css" media="screen and (min-width: 481px)" />
// --> The thing is, these look like crap when we exceed the max-widths!
// --> And that is why I did the WURFL thing!
?>

<head>
	<title><?php print $myName; ?></title>
<?php
print '<link rel="stylesheet" type="text/css" ' .
		'href="' . STYLE_SHEET_DIRECTORY . STYLE_SHEET_ALL_DEVICES . '" />';
if ( $styleSheetName === STYLE_SHEET_DESKTOP )
{
	print '<link rel="stylesheet" type="text/css" ' .
			'href="' . STYLE_SHEET_DEVICE_DIRECTORY . STYLE_SHEET_DESKTOP . '" ' .
			'media="screen and (min-width: 481px)" ' .
			'/>' . "\n";
}
elseif ( $styleSheetName === STYLE_SHEET_APPLE_PHONE )
{
	print '<meta name="viewport" content="user-scalable=no, width=device-width" />';
	print '<link rel="stylesheet" type="text/css" ' .
			'href="' . STYLE_SHEET_DEVICE_DIRECTORY . STYLE_SHEET_APPLE_PHONE . '" ' .
		//  'media="only screen and (max-width: 480px)" ' .
			'/>';
}
elseif ( $styleSheetName === STYLE_SHEET_ANDROID_PHONE )
{
	print '<meta name="viewport" content="user-scalable=no, width=device-width" />';
	print '<link rel="stylesheet" type="text/css" ' .
			'href="' . STYLE_SHEET_DEVICE_DIRECTORY . STYLE_SHEET_ANDROID_PHONE . '" ' .
		//  'media="only screen and (max-width: 600px)" ' .
			'/>';
}
else   // presumably a tablet
{
	print '  <link rel="stylesheet" type="text/css" ' .
			'href="' . STYLE_SHEET_DIRECTORY . STYLE_SHEET_REVERSE_COLORS . '" />';
	print '  <link rel="stylesheet" type="text/css" ' .
			'href="' . STYLE_SHEET_DEVICE_DIRECTORY . $styleSheetName . '" />';
}
?>
<!--[if IE]>
	<link rel="stylesheet" type="text/css" href="explorer.css" media="all" />
<![endif]-->
<script type="text/javascript" src="js/lib/jquery.js"></script>
<script type="text/javascript" src="js/lib/tomsUtilities.js"></script>
<script type="text/javascript" src="js/device/allDevices.js"></script>
<script type="text/javascript" src="<?php echo JS_DEVICE_DIRECTORY . $deviceJsFile ?>"></script>
<script type="text/javascript" src="js/ProfessionalExperience.js"></script>
<script type="text/javascript" src="js/Resume.js"></script>

<!-- ====================================================================== -->
<!-- Everything in div #content is generated by JavaScript using handlebars -->
<!-- ====================================================================== -->
<script type="text/javascript" src="js/lib/handlebars.js"></script>
<script id="paragraph-section-template" type="text/x-handlebars-template">
	<div id="{{id}}" class="section hide">
		<h2>{{title}}</h2>
		<p>{{{content}}}</p>
	</div>
</script>
<script id="bullet-section-template" type="text/x-handlebars-template">
	<div id="{{id}}" class="section hide">
	<h2>{{title}}</h2>
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
	</div>
</script>
<?php  if ( $gadgetType === GADGET_TYPE_PHONE ): ?>
	<script id="phone-menu-template" type="text/x-handlebars-template">
		<div id="phone-menu" class="section">
			<ul>
				{{#each sections}}
					<li><a onClick="showOnlySection('{{id}}')">{{option}}</a>
					</li>
				{{/each}}
			</ul>
		</div><!-- phone-menu -->
	</script>
<?php  endif ?>
<?php  if ( $gadgetType === GADGET_TYPE_PHONE ): ?>
	<script id="experience-section-template" type="text/x-handlebars-template">
		<div id="{{id}}" class="section hide">
			<h2>{{title}}</h2>
			<ul>
				{{#each jobs}}
					<li id="{{id}}" onclick="toggleJobListItems('{{id}}');">
						{{#if title}}
							<div><span class="bold">{{title}}</span></div>
						{{/if}}
						{{#if companyHref}}
							<a href="{{companyHref}}" target="_blank">
								{{companyName}}</a>,&nbsp;{{location}}
						{{else}}
							<span class="underline">{{companyName}}</span>,&nbsp;{{location}}
						{{/if}}
						<div class="date-range">{{dateRange}}</div>
					</li>
				{{/each}}
			</ul>
		</div>
	</script>
<?php  else: ?>
<script id="experience-section-template" type="text/x-handlebars-template">
	<div id="{{id}}" class="section hide">
		<h2>{{title}}</h2>
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
				<div class="items">
				</div><!-- items -->
				<div class="list-items">
					<ul>{{{listItems}}}</ul>
					<img src="images/more-plain.jpg" border="0"
						value="More" alt="More" name="more"
						title="Show more details for this position"
						onmouseover="this.src='images/more-hover.jpg'; return true;"
						onmouseout="this.src='images/more-plain.jpg'; return true;"
						onclick="toggleMoreOrLessListItems('{{id}}');" \>
				</div><!-- list-items -->
				<div class="more-items">
					<ul>{{{moreItems}}}</ul>
					<img src="images/less-plain.jpg" border="0"
						value="Less" alt="Less" name="less"
						title="Show fewer bullet items for this position"
						onmouseover="this.src='images/less-hover.jpg'; return true;"
						onmouseout="this.src='images/less-plain.jpg'; return true;"
						onclick="toggleMoreOrLessListItems('{{id}}');" \>
				</div><!-- more-items -->
			</li>
		{{/each}}
		</ul>
	</div>
</script>
<?php  endif ?>
<?php  if ( $gadgetType === GADGET_TYPE_PHONE ): ?>
	<script id="single-job-section-template" type="text/x-handlebars-template">
		<div id="{{id}}" class="section hide">
			<h2>{{title}}</h2>
			<ul>
				{{#each jobs}}
					<li id="{{id}}">
						<span class="bold">
							<a href="{{companyHref}}" target="_blank">{{companyName}}</a>,
						</span>
						{{location}}<br />
						{{#if title}}
							{{title}}<br />
						{{/if}}
						{{dateRange}}<br />
						<ul>{{{listItems}}}</ul>
					</li>
				{{/each}}
			</ul>
		</div>
	</script>
<?php endif ?>
<script id="education-section-template" type="text/x-handlebars-template">
	<div id="{{id}}" class="section hide">
		<h2>{{title}}</h2>
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
		</div>
</script>
</head>

<body>
	<div id="container">
		<div id='header'>
		<?php if ( $gadgetType === GADGET_TYPE_PHONE ): ?>
			<h1><a href='./'><?php echo $myName ?></a></h1>
		<?php elseif ( $gadgetType === GADGET_TYPE_DESKTOP_BROWSER ): ?>
			<h1>The Resume of <?php echo $myName ?></h1>
		<?php else: ?>
			<h1><?php echo $myName ?>'s Resume</h1>
		<?php endif; ?>
		</div>  <!-- header -->

		<div id="content">
			<!-- Everything in div #content is generated by JavaScript using handlebars -->
		</div>  <!-- content -->

		<div id="footer">
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
		</div> <!-- footer -->
	</div> <!-- container -->
</body>
</html>
