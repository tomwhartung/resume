/**
 * This file defines all of the jobs that appear under Professional Experience
 * Each job is just an Object Literal containing the values unique to that position
 *
 * Note that we cannot use MinimalSection as our prototype, because it is not in our scope.
 * This is not a big deal, because most sections override all values in MinimalSection anyway.
 */
var ProfessionalExperience = Object.create( Object.prototype, {
	id: {
		value: "content_experience"
	},
	isProfessionalExperience: {
		value: true
	},
	templateIdSelector: {
		value: "#experience-section-template"
	},
	initialDisplayLevel: {
		value: 1
	},
	currentDisplayLevel: {
		value: 1,
		configurable: true,
		writable: true
	},
	content: {
		value: "",
		configurable: true,
		writable: true
	}
});
/*
 * Bare-bones job object containing default values, that we can use to create other job objects
 */
ProfessionalExperience.MinimalJob = Object.create( Object.prototype, {
	id: { value: '' },
	companyName: { value: '' },
	companyHref: { value: '' },
	location: { value: 'Denver, CO' },
	title: { value: '' },
	dateRange: { value: '' },
	displayLevel: { value: 1 },  // display one level of jobs at a time (make them dig for the old ones)
	listItems: { value: '' },
	moreItems: { value: '' }
});

//
// JoomooWebsites - current projects
// ---------------------------------
//
ProfessionalExperience.JoomooWebsites_2 = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'joomoo_websites_2' },
	companyName: { value: 'Joomoowebsites LLC' },
	companyHref: { value: 'http://www.JoomooWebsites.com' },
	location: { value: 'Denver, CO' },
	title: { value: 'CEO (Sole Proprietor)' },
	dateRange: { value: 'May, 2015 through present' },
	displayLevel: { value: 1 },
	listItems: { value:
		'<li>Wrote idMyGadget, a PHP Adapter API providing a consistent interface to ' +
			'multiple device detection packages.</li>' +
		'<li>Updated resume to use the new idMyGadget code, using jQuery Mobile and ' +
			'device-specific CSS files to present different views of the resume, ' +
			'depending on the device used to access the site.</li>' +
		'<li>Integrated idMyGadget with the default Jomomla templates ' +
			'<a href="https://github.com/tomwhartung/jmws_protostar_tomh_idMyGadget" ' +
				'title="link to jmws_protostar_tomh_idMyGadget repo on github.com">protostar</a> ' +
			'and ' +
			'<a href="https://github.com/tomwhartung/jmws_beez3_idMyGadget" ' +
				'title="link to jmws_beez3_idMyGadget repo on github.com">Beez3</a>, ' +
			'adding many additional options to the two new templates\' configuration pages in ' +
			'the Joomla administration back end.</li>' +
		'<li>Integrated idMyGadget with the Joomla menu module, using jQuery Mobile to ' +
			'implement a pop-up navigation menu, accessible by clicking on a hamburger icon, ' +
			'that optionally appears only when using a mobile device to access the site.</li>' +
		'<li>Deployed the Joomla templates and idMyGadget module to ' +
			'<a href="http://joomoowebsites.com/" title="Link to JooMooWebSites.com Home Page">' +
				'JooMooWebSites.com</a>.</li>' +
		'<li>Created the ' +
			'<a href="https://github.com/tomwhartung/jmws_idMyGadget_for_wordpress" ' +
				'title="Link to the jmws_idMyGadget_for_wordpress github repository">' +
				'jmws_idMyGadget_for_wordpress github repository</a> ' +
			'and began integrating idMyGadget with two WordPress themes: the ' +
			'<a href="https://github.com/tomwhartung/jmws_wp_twentyfifteen_idMyGadget" ' +
				'title="Link to the jmws_wp_twentyfifteen_idMyGadget github repository">' +
				'twentyfifteen default WordPress theme</a> ' +
			'and a ' +
			'<a href="https://github.com/tomwhartung/jmws_wp_vqsg_ot_idMyGadget" ' +
				'title="Link to the jmws_wp_vqsg_ot_idMyGadget github repository">' +
				'minimal theme</a> ' +
			'from the book WordPress: A Visual Quickstart Guide.  ' +
			'This work is on-going and hence not yet online.</li>' +
		'<li>Created the ' +
			'<a href="https://github.com/tomwhartung/jmws_idMyGadget_for_drupal" ' +
				'title="Link to the jmws_idMyGadget_for_drupal github repository">' +
				'jmws_idMyGadget_for_drupal github repository</a> ' +
			'and began integrating idMyGadget with two of the Drupal 7 default themes: ' +
			'<a href="https://github.com/tomwhartung/jmws_drupal_stark_idMyGadget" ' +
				'title="Link to the jmws_drupal_stark_idMyGadget github repository">' +
				'stark</a> ' +
			'and ' +
			'<a href="https://github.com/tomwhartung/jmws_drupal_bartik_idMyGadget" ' +
				'title="Link to the jmws_drupal_bartik_idMyGadget github repository">' +
				'bartik</a> .  ' +
			'This work is on-going and hence not yet online.</li>'
	},
	moreItems: { value: 
		'<li>Wrote idMyGadget, an adapter API providing a consistent interface to ' +
			'multiple device detection packages, allowing users to choose the proper balance between ' +
			'functionality and licensing requirements.</li>' +
		'<li>Updated resume to use the new idMyGadget code.  ' +
			'When accessed on a mobile device, the code uses jQuery Mobile to present the resume ' +
			'in sections, each of which is accessible via a menu option in either the ' +
			'header or footer of the page.</li>' +
		'<li>Integrated idMyGadget with the default Jomomla templates protostar and Beez3, ' +
			'adding many additional options to the two new templates\' configuration pages in ' +
			'the Joomla administration back end.</li>' +
		'<li>Integrated idMyGadget with the default Joomla menu, using jQuery Mobile to ' +
			'implement a pop-up menu that is accessible by clicking on a hamburger icon.</li>' +
		'<li>Took an ' +
			'<a href="https://www.edx.org/course/learn-html5-w3c-w3cx-html5-1x-0" target="_blank">' +
				'online class in HTML5</a>, ' +
			'offered by ' +
			'<a href="http://w3c.org" target="_blank">w3c.org</a> through ' +
			'<a href="http://edx.org" target="_blank">edx.org</a>, ' +
			'earning a Verified Certificate with a final grade of 96%.' +
		'<li>All code implementing idMyGadget and related projects, including ' +
				'<a href="https://github.com/tomwhartung/resume" target="_blank">this resume</a>' +
				'is open source, and freely available for inspection and download from ' +
				'<a href="https://github.com/tomwhartung" target="_blank">github.com</a></li>' +
		'<li>Documented this work by writing a detailed readme for each github repository.</li>' +
		'<li>Wrote and posted several articles, complete with screenshots of the ' +
			'Joomla administration panel, to ' +
			'<a href="http://joomoowebsites.com/" title="JooMooWebSites.com Home Page">' +
				'JooMooWebSites.com</a>, ' +
			'demonstrating and explaining all functionality in detail.' +
		'<li>Prepared and gave a presentation about IdMyGadget Device Detection at the Front Range PHP Users Group </li>' +
		'<li>Prepared and gave a presentation about the Joomla templates and modules that use IdMyGadget Device Detection at the Denver Joomla Users Group </li>'
	}
});
//
// Kforce: on contract to Major Healthcare Provider
// ------------------------------------------------
// Mon. 11/10/2014 - Thu. 4/3/2015
//
ProfessionalExperience.Kforce = Object.create( Object.prototype, {
	id: { value: 'kforce' },
	companyName: { value: 'Kforce' },
	companyHref: { value: 'https://www.kforce.com/' },
	location: { value: 'Denver, CO' },
	title: { value: 'Web Developer' },
	dateRange: { value: 'November, 2014 through April 2015' },
	displayLevel: { value: 1 },
	listItems: { value:
		'<li>Worked on a confidential contract for a large healthcare provider.</li>' +
		'<li>Used PHP, JavaScript, HTML5, and CSS to customize Wordpress themes and plugins.</li>' +
		'<li>Created new and ported existing websites to cloud services.</li>'
	},
	moreItems: { value:
		'<li>Worked on a series of small confidential projects for a ' +
			'large healthcare provider.</li>' +
		'<li>Used PHP, Linux, JavaScript, HTML5, Netbeans, CSS, and vim to ' +
			'customize Wordpress themes and plugins.</li>' +
		'<li>Used Wordpress to create a new internal website for sharing status information.</li>' +
		'<li>Ported existing websites to cloud services, applying finishing touches ' +
			'as appropriate.</li>'
	}
});

//
// JoomooWebsites - misc. projects in 2014
// ---------------------------------------
//
ProfessionalExperience.JoomooWebsites_1 = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'joomoo_websites_1' },
	companyName: { value: 'Joomoowebsites LLC' },
	companyHref: { value: 'http://www.JoomooWebsites.com' },
	location: { value: 'Denver, CO' },
	title: { value: 'CEO (Sole Proprietor)' },
	dateRange: { value: 'January, 2008 through present' },
	displayLevel: { value: 1 },
	listItems: { value:
		'<li>Assisted in conversion of Joomla site containing VirtueMart shopping cart data to ' +
			'Wordpress site containing Woocommerce data.</li>' +
		'<li>Used Wordpress to create tomwhartung.com.</li>' +
		'<li>Used Drupal to create tomhartung.com.</li>' +
		'<li>Used the Wireless Uniform Resource Library (WURFL) to create a ' +
			'mobile-friendly resume.</li>'
	},
	moreItems: { value:
		'<li>Assisted in conversion of Joomla site containing VirtueMart shopping cart data to ' +
			'Wordpress site containing Woocommerce data.</li>' +
		'<li>Used Wordpress to create tomwhartung.com.</li>' +
		'<li>Used Drupal to create tomhartung.com.</li>' +
		'<li>Used the Wireless Uniform Resource Library (WURFL) to create a ' +
			'mobile-friendly resume.</li>' +
		'<li>Attended meetups, workshops and webinars, and took ' +
			'several online classes at coursera.org and edx.org.</li>' +
		'<li>Always reading technical books, to keep up to date.</li>'
	}
});
//
//  LodoSoftwareD3: D3 Banking (Lodo Software)
//  -------------------------------------------
//     Mon. 1/30/2012 - 2/28/2014, $35/hr. -> $72,500/yr.
//
ProfessionalExperience.LodoSoftwareD3 = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'lodosoftware_d3' },
	companyName: { value: 'D3 Banking (formerly Lodo Software)' },
	companyHref: { value: 'http://www.d3banking.com/' },
	location: { value: 'Denver, CO' },
	title: { value: 'Software Engineer' },
	dateRange: { value: 'January, 2012 through February 2014' },
	displayLevel: { value: 1 },
	listItems: { value:
		'<li>Used Java, Javascript, Spring, Hibernate, REST, Postman, Liquibase, MySql, ' +
			'Sql Server, Junit, Git, Maven, Jira, CofeeScript, jQuery, Backbone, ' +
			'Underscore, Node, Perl, Cygwin, Eclipse, Netbeans, IntelliJ, and Windows 7 to ' +
			'build the D3 Banking online REST API and User Interface, a product used for ' +
			'online banking and personal financial management.</li>' +
		'<li>Worked extensively on all aspects of the Financial Goals feature, from designing ' +
			'and creating the tables, to writing and debugging the services, and creating ' +
			'and enhancing the User Interface.</li>' +
			'<li>Worked on the Administration User Interface of the D3 Banking product, using ' +
			'CoffeeScript, Backbone, jQuery, Underscore, and Node.</li>' +
		'<li>Used Java to write automated JUnit tests for an online banking user interface. ' +
			'Wrote programs using the Selenium WebDriver Java API to manipulate elements in ' +
			'web pages built using responsive design techniques.  ' +
			'Used Eclipse to run the tests in Firefox, Chrome, and Internet Explorer.</li>' +
		'<li>Maintained and enhanced OCF, an online application allowing users to aggregate ' +
			'accounts, categorize financial transactions, and create budgets, using Java, ' +
			'Eclipse, Adobe Flex3, Hibernate, Microsoft SQL Server, Liquibase, Struts, Tomcat, ' +
			'Cygwin, Jira, CVS, Flash Builder, Ant, and Freemarker Template.</li>'
	},
	moreItems: { value:
		'<li>Used Java, Javascript, Spring, Hibernate, REST, Postman, Liquibase, MySql, Sql Server, Junit, ' +
			'Git, Maven, Jira, CofeeScript, jQuery, Backbone, Underscore, Node, Perl, Cygwin, Eclipse, Netbeans, ' +
			'IntelliJ, and Windows 7 to build the D3 Banking online REST API and User Interface, a ' +
			'product used for online banking and personal financial management.' +
		'</li>' +
		'<li>Worked extensively on all aspects of the Financial Goals feature, from designing and creating the tables, to ' +
			'writing and debugging the services, and creating and enhancing the User Interface.' +
		'</li>' +
		'<li>Worked on the Administration User Interface of the D3 Banking product, using CoffeeScript, Backbone, ' +
			'jQuery, Underscore, and Node.' +
		'</li>' +
		'<li>Helped port, integrate, maintain, and enhance, legacy Java code that uses the Cash '+
			'Edge Aggregation API to update the database with user account and transaction data.' +
		'</li>' +
		'<li>' +
			'Used Java to write automated JUnit tests for an online banking user interface. ' +
			'Wrote programs using the Selenium WebDriver Java API to find and manipulate HTML elements in ' +
			'web pages built using responsive design techniques.  ' +
			'Used Eclipse to run the tests in Firefox, Chrome, and versions 8, 9 and 10 of Internet Explorer, on Windows 7 and Windows XP.' +
		'</li>' +
		'<li>Used Java and Flex to develop the External Institution Request feature, which allows users to request that a financial ' +
			'institution be added to the list of institutions that can be aggregated.' +
		'</li>' +
		'<li>Maintained and enhanced OCF, an online application allowing users to aggregate accounts, ' +
			'categorize financial transactions, and create budgets, using Java, Eclipse, Adobe Flex3, ' +
			'Hibernate, Microsoft SQL Server, Liquibase, Struts, Tomcat, Cygwin, Jira, CVS, Flash Builder, ' +
			'Ant, and Freemarker Template.' +
		'</li>' +
		'<li>Worked independently to learn OCF and Flex, and fixed Jira tickets affecting all areas of the application.' +
		'</li>'
	}
});
//
//  ConsultnetTlc: consultnet->tlc
//  -------------------------------
//  2011/01/31-2010/12/08, $35/hr.
//
ProfessionalExperience.ConsultnetTlc = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'consultnet_tlc' },
	companyName: { value: 'ConsultNet' },
	companyHref: { value: 'http://www.consultnet.com' },
	location: { value: 'Denver, CO' },
	title: { value: 'Software Developer' },
	dateRange: { value: 'January, 2011 through December, 2011' },
	displayLevel: { value: 1 },
	listItems: { value:
		'<li>For ' +
			'<a href="http://www.tlcdelivers.com" title="Opens link in separate window" target="_blank">' +
			 'The Library Corporation</a>, ' +
			'maintained and enhanced Go Cart, an online ordering system for use by libraries.  ' +
			'Used Java, PHP,  Eclipse, Hibernate, Spring, Tomcat, Axis2, SOAP, Oracle, MySql, ' +
			'Cygwin, Subversion, and Jira.</li>' +
		'<li>Identified Java web services and refactored methods that access the database, ' +
			'changing them to use Spring annotations for transactions and a custom ' +
			'API that used Spring and Hibernate to map associations. ' +
			'This refactoring enhanced data integrity along with the efficiency ' +
			'and maintainability of the code.</li>' +
		'<li>Wrote and ran performance and unit tests using SOAP-UI and JUnit, profiled ' +
			'application with YourKit, and participated in demos.</li>' +
		'<li>Wrote the Go Cart Administrators\' and Operations Guides, and how-to articles ' +
			'for other developers.</li>'
	},
	moreItems: { value:
		'<li>For ' +
			'<a href="http://www.tlcdelivers.com" title="Opens link in separate window" target="_blank">' +
			 'The Library Corporation</a>:' +
			'<ul>' +
				'<li>Maintained and enhanced Go Cart, an online ordering system for use by libraries.  ' +
					'Used Java, PHP,  Eclipse, Hibernate, Spring, Tomcat, Axis2, SOAP, Oracle, ' +
					'MySql, Cygwin, Subversion, and Jira.</li>' +
				'<li>Identified Java web services and refactored methods that access the database, ' +
					'changing them to use Spring annotations for transactions and ' +
					'a custom API that used Spring and Hibernate to map associations. ' +
					'This refactoring enhanced data integrity along with the efficiency and ' +
					'maintainability of the code.</li>' +
				'<li>Wrote and ran performance and unit tests using SOAP-UI and JUnit, ' +
					'profiled appkucatuib with YourKit, and participated in demos.</li>' +
				'<li>Wrote the Go Cart Administrators\' and Operations Guides, and wrote and ' +
					'posted articles to TLC\'s Knowledge Base for other developers. ' +
					'One article describes how to set up a Windows 7 workstation to run Go-Cart and ' +
					'another describes how to switch between using ' +
					'MySql and Oracle on a developer\'s workstation.</li>' +
				'<li>Identified bugs, design flaws, and unused code and method parameters in the ' +
					'existing code base.</li>' +
				'<li>Assisted in conducting stress testing of Go-Cart.</li>' +
				'<li>Used JMeter to write performance tests, and ran these tests to obtain ' +
					'baseline performance data for the application.</li>' +
				'<li>Participated in interviews of potential new hires.</li>' +
			'</ul>' +
		'</li>'
	}
});
//  ClkClk
//  ------
//  2010/04/26-2010/11/07, $35/hr.
//
ProfessionalExperience.ClkClk = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'clkclk' },
	companyName: { value: 'Clkclk.com' },
	companyHref: { value: 'http://www.ClkClk.com' },
	location: { value: 'Denver, CO' },
	title: { value: 'Independent Contractor' },
	dateRange: { value: 'April, 2010 through November, 2010' },
	displayLevel: { value: 1 },
	listItems: { value:
		'<li>Used PHP5, MySql, Joomla, Javascript, Ajax, XHTML, and CSS to help build ' +
			'a social networking site targeted to businesses.</li>' +
		'<li>Updated Joomla\'s com_content extension to allow storage of content in custom ' +
			'tables.</li>' +
		'<li>Designed and wrote a web service front end to Joomla\'s com_content extension ' +
			'that allows rendering of content response to an Ajax request.</li>' +
		'<li>Designed and wrote the user interface to a commissions component that displays ' +
			'data obtained via web services.</li>' +
		'<li>Enhanced and maintained code to allow business owners and their administrators to ' +
			'customize their page on the site and the text messages it sends to members of ' +
			'their group.</li>'
	},
	moreItems: { value:
		'<li>Used PHP5, MySql, Javascript, Ajax, XHTML, and CSS to help build a social ' +
			'networking site targeted to businesses, ' +
			'based largely on Joomla and extensions such as Jom Social.</li>' +
		'<li>Updated Joomla\'s com_content extension to allow storage of large volumes ' +
			'(more than 13,000,000 rows) of group content in custom tables that are ' +
			'modeled after the Joomla content tables.</li>' +
		'<li>Wrote a web service front end to Joomla\'s com_content extension that allows ' +
			'rendering of content outside of the Joomla ' +
			'framework in response to an Ajax request.</li>' +
		'<li>Designed and wrote the user interface to a commissions component that displays data ' +
			'obtained via web services.</li>' +
		'<li>Enhanced and maintained existing dashboard code to allow business owners and ' +
			'their administrators to customize their page on the site and ' +
			'the text messages it sends to members of their group.</li>' +
		'<li>Designed and wrote a custom Joomla component to store and display data for ' +
			'subscriptions and services.</li>'
	}
});
//
//  SeeOurMinds: SeeOurMinds.com, JoomooWebsites.com
//  --------------------------------------------------
//      seeourminds.com = groja.com + Joomla! + web 2.0 ($0/hr.)
//
ProfessionalExperience.SeeOurMinds = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'see_our_minds' },
	companyName: { value: 'SeeOurMinds.com' },
	companyHref: { value: 'http://www.seeourminds.com' },
	location: { value: 'Denver, CO' },
	title: { value: 'Webmaster' },
	dateRange: { value: 'August, 2009 through April, 2010' },
	displayLevel: { value: 2 },
	listItems: { value:
		'<li>Rebranded groja.com to seeourminds.com and used PHP5, Mootools, Ajax, MySql, ' +
			'XHTML and CSS to write custom Joomla extensions that ' +
			'give the site interactive "web 2.0" capabilities.</li>' +
		'<li>Designed and wrote very flexible Joomla extensions that allow users to rate and ' +
			'leave comments on content articles.</li>' +
		'<li>Designed and wrote a Joomla extension that allows site administrators to require ' +
			'new users to solve a Captcha puzzle before creating a new account for them.</li>' +
		'<li>Created ' +
			'<a href="http://www.JoomooWebsites.com" title="Opens link in separate window" target="_blank">' +
			 'JoomooWebsites.com</a> ' +
			'to demo these extensions and explain them in detail.</li>'
	},
	moreItems: { value:
		'<li>Rebranded groja.com to seeourminds.com and used PHP5, Mootools, Ajax, MySql, ' +
			'XHTML and CSS to write custom Joomla extensions that give the ' +
			'site interactive "web 2.0" capabilities.</li>' +
		'<li>Designed and wrote a very flexible Joomla extension that allows users to leave ' +
			'comments on content articles.</li>' +
		'<li>Designed and wrote a Joomla extension that allows users to ' +
			'rate content articles.</li>' +
		'<li>Designed and wrote a Joomla extension that allows site administrators to require ' +
			'new users to solve a Captcha puzzle before creating a new account for them.</li>' +
		'<li>Rebranded existing gallery and template extensions as joomoo gallery and ' +
			'joomoo site style for consistency with the other joomoo extensions.</li>' +
		'<li>Created JoomooWebsites.com to demo these extensions and explain them in detail.</li>'
	}
});
//
//  HudsonIt: Hudson IT
//  --------------------
//  2009/07/27-2009/08/07, $40/hr.
//     On contract to The Magellan Networks
//
ProfessionalExperience.HudsonIt = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'hudson_it' },
	companyName: { value: 'Hudson IT' },
	companyHref: { value: 'http://us.hudson.com' },
	location: { value: 'Denver, CO' },
	title: { value: 'Consultant' },
	dateRange: { value: 'from July, 2009 through August, 2009' },
	displayLevel: { value: 2 },
	listItems: { value:
		'<li>Helped Guest Trails (formerly The Magellan Network)  get started with Joomla ' +
			'by installing it and LAMP on Red Hat, SuSE and Ubuntu, ' +
			'giving them a guided tour of the CMS, and answering their questions.</li>' +
		'<li>Wrote a module in PHP5 allowing users to change content ' +
			'in the front end.</li>'
	},
	moreItems: { value:
		'<li>Introduced Guest Trails (formerly The Magellan Network) to Joomla, helping them ' +
			'get started with the Content Management System (CMS).</li>' +
		'<li>Installed LAMP and Joomla on Red Hat, SuSE and Ubuntu, answered questions about ' +
			'Linux and the CMS, and wrote documents describing how to install and use it.</li>' +
		'<li>Researched available extensions and wrote a module in PHP ' +
			'allowing logged-in users to edit articles in the front end.</li>'
	}
});
//
//  MsagDataConsultants: Independent Contractor to MSAG Data Consultants
//  ----------------------------------------------------------------------
//     MSAG, 2009/05/27-2009/06/25, $32.50/hr.
//
ProfessionalExperience.MsagDataConsultants = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'msag_data_consultants' },
	companyName: { value: 'MSAG Data Consultants' },
	companyHref: { value: 'http://www.msag.com' },
	location: { value: 'Denver, CO' },
	title: { value: 'Independent Contractor' },
	dateRange: { value: 'May, 2009 through June, 2009' },
	displayLevel: { value: 2 },
	listItems: { value:
		'<li>Used Javascript, ASP, Java, CSS, HTML, Visual Basic, and Visual Studio to ' +
			'fix browser compatibility issues in Autodesk MapGuide maps.  ' +
			'Changed maps to use a Java-based viewer.</li>'
	},
	moreItems: { value:
		'<li>Used Javascript, ASP, Java, CSS, HTML, Visual Basic, and Visual Studio to fix ' +
			'browser compatibility issues in Autodesk MapGuide maps.</li>' +
		'<li>Changed maps to use a Java-based viewer rather than one based on Active X.</li>' +
		'<li>Successfully tracked down and fixed 500 error appearing only in Internet Explorer 8.' +
		'</li>'
	}
});
//
//  GrojaJoomla, groja.com + Joomla!
//  ---------------------------------
//
ProfessionalExperience.GrojaJoomla = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'groja_Joomla' },
	companyName: { value: 'Groja.com' },
	companyHref: { value: 'http://www.groja.com' },
	location: { value: 'Denver, CO' },
	title: { value: 'Webmaster' },
	dateRange: { value: 'January, 2008 through May, 2009' },
	displayLevel: { value: 2 },
	listItems: { value:
		'<li>Designed and wrote a Joomla component using Joomla\'s MVC ' +
			'(Model,View, Controller) API, ' +
			'integrating and converting existing code from PHP4 to PHP5.  ' +
			'Component includes four forms for inputting personality data, ' +
			'draws images of personalities, ' +
			'and stores personality and image data in a MySql database when ' +
			'the user is logged in to the site, or in cookies when user is not logged in.  ' +
			'Used LAMP, (Linux, Apache, MySql, PHP5), Javascript, Mootools, XHTML, ' +
			'XML, and CSS on Gentoo.</li>' +
		'<li>Designed and wrote a Joomla component using PHP5, Javascript, and ' +
			'Mootools that displays ' +
			'an image gallery that allows resizing of images with the mouse.</li>' +
		'<li>Designed and wrote a Joomla extension using PHP5, Javascript, Mootools, and ' +
			'Ajax that allows users to customize the site\'s appearance, with ' +
			'changes appearing immediately in response to user actions.</li>' +
		'<li>Wrote several articles detailing the inner workings of groja.com, including one ' +
			'<a href="http://groja.com/index.php/blog/technical/101-how-grojacom-uses-the-joomla-mvc-api" ' +
			 'title="Opens link in separate window" ' +
			 'target="_blank">describing how the site uses Joomla\'s MVC API</a>, ' +
			'one ' +
			'<a href="http://groja.com/index.php/blog/technical/103-how-grojacom-uses-javascript-and-mootools" ' +
			 'title="Opens link in separate window" ' +
			 'target="_blank">' +
			'describing how the site uses Javascript and the Mootools Javascript library</a>, ' +
			'and one ' +
			'<a href="http://groja.com/index.php/blog/technical/104-core-grojacom-classes" ' +
			 'title="Opens link in separate window" ' +
			 'target="_blank">describing the site\'s core classes</a>.</li>' +
		'<li>Ensured that all original extensions work properly on all popular browsers.</li>'
	},
	moreItems: { value:
		'<li>Designed and wrote a Joomla component using Joomla\'s MVC (Model,View, Controller) ' +
			'API, integrating and converting existing code from PHP4 to PHP5.  ' +
			'Component includes four forms for inputting personality data, draws images of ' +
			'personalities, and stores personality and image data in a MySql database when ' +
			'the user is logged in to the site, or in cookies when user is not logged in.  ' +
			'Component also includes forms for processing options to change, save, and post the ' +
			'image to the site\'s front page.  ' +
			'Used LAMP, (Linux, Apache, MySql, PHP5), Javascript, Mootools, XHTML, XML, ' +
			'and CSS on Gentoo.</li>' +
		'<li>Designed and wrote a Joomla component using PHP5, Javascript, and Mootools that ' +
			'displays a gallery of images, ' +
			'optionally allowing users to resize images with their mouse wheel.</li>' +
		'<li>Designed and wrote a Joomla extension using PHP5, Javascript, Mootools, and ' +
			'Ajax that allows users to customize the site\'s appearance.  ' +
			'Changes appear immediately in response to user actions, and Javascript classes save ' +
			'values in a cookie or the database, depending on configuration parameters.</li>' +
		'<li>Wrote several articles documenting the site\'s design and evolution.</li>' +
		'<li>Wrote a formal ' +
			'<a href="http://groja.com/index.php/blog/technical/101-how-grojacom-uses-the-joomla-mvc-api" ' +
			'onMouseOver="linkStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">article describing how the site uses Joomla\'s MVC API</a>.  ' +
			'This is a long and very technical article that contains UML class diagrams showing ' +
			'how custom groja classes inherit from Joomla\'s MVC API classes.</li>' +
		'<li>Wrote an ' +
			'<a href="http://groja.com/index.php/blog/technical/103-how-grojacom-uses-javascript-and-mootools" ' +
			'onMouseOver="linkStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">article describing how the site uses Javascript and Mootools</a>. ' +
			'This article describes how the com_template_parameters component uses ' +
			'the Mootools Javascript library to allow the user to customize the site\'s ' +
			'appearance and how the com_groja component uses the library to display multiple ' +
			'forms on a single, uncluttered page.</li>' +
		'<li>Wrote a formal ' +
			'<a href="http://groja.com/index.php/blog/technical/104-core-grojacom-classes" ' +
			'onMouseOver="linkStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">article describing groja.com\'s core classes</a>. ' +
			'This article lists the classes ported from earlier versions of the site and, ' +
			'where applicable, contains UML class diagrams showing ' +
			'the inheritance structure used by these classes.</li>' +
		'<li>Wrote a rather informal ' +
			'<a href="http://groja.com/index.php/blog/updates/105-the-evolution-of-grojacom" ' +
			'onMouseOver="linkStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">article describing the different versions of groja.com</a>. ' +
			'This article includes a screenshot along with a description of the ' +
			'functionality of each version.</li>' +
		'<li>Wrote an ' +
			'<a href="http://groja.com/index.php/blog/about-the-groja-quiz/102-the-source-of-groja-quiz-questions" ' +
			'onMouseOver="linkStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">article describing how the groja quiz was written</a>. ' +
			'The 88 questions in the groja quiz come from a variety of sources. ' +
			'This article describes those sources and includes a table listing ' +
			'how many of each type of question came from each source.</li>' +
		'<li>Ensured that all original extensions work properly on all popular browsers.</li>' +
		'<li>Wrote a paper identifying legal issues and questions and began looking for ' +
			'help with these.' +
		'</li>'
	}
});
//
// MortgageCadence: Mortgage Cadence
// ----------------------------------
// Tues. 8/4/2007 - Fri. 12/14/2007, $35/hr.
//
ProfessionalExperience.MortgageCadence = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'mortgage_cadence' },
	companyName: { value: 'Mortgage Cadence' },
	companyHref: { value: 'http://www.mortgagecadence.com/' },
	location: { value: 'Denver, CO' },
	title: { value: 'Software Development Kit Developer' },
	dateRange: { value: 'August, 2007 through December, 2007' },
	displayLevel: { value: 2 },
	listItems: { value:
		'<li>Documented the Application Programming Interface (API) ' +
			'of a Software Development Kit (SDK) written in C# ' +
			'for a mortage loan origination software package, using ' +
			'Visual Studio, SQL Server, and Visio on Windows XP. ' +
			'Documentation included UML class diagrams and sample programs written in C#.</li>' +
		'<li>Reviewed all SDK documents for consistency, ensuring all contained ' +
			'valid HTML and CSS.</li>'
	},
	moreItems: { value:
		'<li>Wrote all documentation for the Best Fit feature of ' +
			'the Application Programming Interface (API) ' +
			'of a Software Development Kit (SDK) written in C# ' +
			'for a mortage loan origination software package. ' +
			'Used Visual Studio, SQL Server, and Visio on Windows XP. ' +
			'Documentation included UML class diagrams and sample programs written in C#.</li>' +
		'<li>Proofread all SDK documents, correcting spelling and grammatical errors as ' +
			'necessary.</li>' +
		'<li>Reviewed all SDK documents for consistency, checking all links and ' +
			'ensuring all files had the correct Doctype declaration. ' +
			'Validated all pages at w3.org, ' +
			'correcting malformed HTML and tags with missing required attributes ' +
			'where necessary.</li>' +
		'<li>Checked documents on relevant versions of Windows, ensuring they looked consistent ' +
			'on all relevant browsers.</li>' +
		'<li>Assisted in writing release notes.</li>'
	}
});
//
// SaiPeopleSolutions: Sai People Solutions -> Verizon Business
// --------------------------------------------------------------
// Tues. 10/31/2006 - Wed. 3/28/2007, $29.50/hr.
//
ProfessionalExperience.SaiPeopleSolutions = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'sai_people_solutions' },
	companyName: { value: 'Sai People Solutions' },
	companyHref: { value: 'http://saipeople.com/' },
	location: { value: 'Denver, CO' },
	title: { value: 'Applications Developer' },
	dateRange: { value: 'October, 2006 through March, 2007' },
	displayLevel: { value: 2 },
	listItems: { value:
		'<li>On contract at ' +
			'<a href="http://www.verizonbusiness.com/us/" ' +
			 'title="Opens link in separate window" target="_blank">' +
			'Verizon Business</a>: ' +
			'Used Model-View-Controller design pattern to design, write, ' +
			'test, implement, and maintain programs in ' +
			'Java, JavaScript, JSP, JSTL, XML, HTML, and CSS on Unix (SunOS) that ' +
			'query an Oracle database and create and ' +
			'display web-based reports for call traffic analysis.</li>'
	},
	moreItems: { value:
		'<li>On contract at ' +
			'<a href="http://www.verizonbusiness.com/us/" ' +
			 'onMouseOver="companyStatus();return true;" ' +
			 'onMouseOut="setStatusToDefault();return true;" ' +
			 'title="Opens link in separate window" ' +
			 'target="_blank">' +
			'Verizon Business</a>: ' +
			'<ul>' +
				'<li>Designed a prototype screen and wrote a low level design document ' +
					'describing the Drill-down feature for the ' +
					'Jurisdictional Analysis Reporting System (JARS).</li>' +
				'<li>Used Java, JavaScript, JSP, JSTL, XML, CSS, and HTML on Unix (SunOS) ' +
					'to write, test, and implement ' +
					'a web page containing a form with over thirty input parameters.</li>' +
				'<li>Wrote Java classes based on the Model View Controller (MVC) design pattern ' +
					'to use the form parameters to generate SQL queries, query an Oracle ' +
					'database, and display reports allowing users to investigate the cause of ' +
					'variations over time in Percentage of Interstate Usage (PIU) Factors.</li>' +
			'</ul>' +
		'</li>'
	}
});
//
// AdeaSolutions: Adea Solutions -> Ericsson
// ------------------------------------------
// Mon. 7/10/2006 - Mon. 10/2/2006, $35/hr
//
ProfessionalExperience.AdeaSolutions = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'adea_solutions' },
	companyName: { value: 'Adea Solutions' },
	companyHref: { value: 'http://www.adeasolutions.com/' },
	location: { value: 'Boulder, CO' },
	title: { value: 'Software Developer' },
	dateRange: { value: 'July, 2006 through October, 2006' },
	displayLevel: { value: 2 },
	listItems: { value:
		'<li>On contract at ' +
			'<a href="http://www.ericsson.com/" ' +
			 'title="Opens link in separate window" target="_blank">' +
			 'Ericsson</a>: ' +
			'Wrote scripts in Tcl/Expect, Perl, Xml, and Bash to run and test TTS ' +
			'(an application to automatically test wireless phones) ' +
			'on Linux (Red Hat Enterprise Linux).  ' +
			'Wrote how-to documents and test plans describing how to ' +
			'run and test TTS.</li>'
	},
	moreItems: { value:
		'<li>On contract at ' +
			'<a href="http://www.ericsson.com/" ' +
			 'onMouseOver="companyStatus();return true;" ' +
			 'onMouseOut="setStatusToDefault();return true;" ' +
			 'title="Opens link in separate window" ' +
			 'target="_blank"> ' +
			'Ericsson</a>:' +
			'<ul>' +
				'<li>Wrote documentation describing how to build, install, run, and ' +
					'trouble-shoot TTS, an application to automatically test ' +
					'wireless phones.</li>' +
				'<li>Created documentation templates, wrote test plans, and ' +
					'created matrices of test cases to test TTS.</li>' +
				'<li>Wrote and maintained scripts in Tcl/Expect, Perl, Xml, and Bash ' +
					'to automatically run and test TTS on Linux (Red Hat Enterprise Linux), ' +
					'using Rational Clearcase for source control and ' +
					'Enea Element middleware.</li>' +
			'</ul>' +
		'</li>'
	}
});
//
// GrojaPhpNuke: groja.com -> PHP Nuke
// -------------------------------------
// February, 2005 through June, 2006 - $0/hr.
//
ProfessionalExperience.GrojaPhpNuke = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'groja_php_nuke' },
	companyName: { value: 'groja.com' },
	companyHref: { value: 'http://www.groja.com/' },
	location: { value: 'Denver, CO' },
	title: { value: 'Webmaster' },
	dateRange: { value: 'February, 2005 through June, 2006' },
	displayLevel: { value: 3 },
	listItems: { value:
		'<li>Integrated version 1 of groja.com into ' +
			'<a href="http://phpnuke.org" ' +
			 'title="Opens link in separate window" target="_blank">PHP-Nuke</a>' +
			' (a ' +
			'<a href="http://en.wikipedia.org/wiki/Content_Management_System" ' +
			 'title="Opens link in separate window" target="_blank">CMS</a>), ' +
			'using PHP, MySql, HTML, and CSS on Linux ' +
			'(Fedora Core 3 and SuSE 9.1 and 10.0).</li>' +
		'<li>Designed and created MySql tables, PHP classes, and PHP Nuke modules to ' +
			'enable users to store and maintain their ' +
			'preferences, quizzes, personality profiles, and images in a database.  ' +
			'Wrote PHP Nuke modules ' +
			'to describe how the site is organized and how to use it, ' +
			'and to display a gallery of example images and version 1 of site.</li>' +
		'<li>Obtained a static IP address and launched groja.com on a ' +
			'dedicated server running apache on Linux (Gentoo).  ' +
			'Created a LAN consisting of the server, a nearly-identical backup server, and ' +
			'a wireless supporting host running Linux (SuSE 10.0).</li>' +
		'<li>Researched web security and changed server configuration accordingly.  ' +
			'Wrote scripts and contingency plans to aid in monitoring, maintaining, ' +
			'making backups, and recovering the server and supporting hosts.</li>'
	},
	moreItems: { value:
		'<li>Customized existing ' +
			'<a href="http://phpnuke.org" ' +
			 'onMouseOver="linkStatus();return true;" ' +
			 'onMouseOut="setStatusToDefault();return true;" ' +
			 'title="Opens link in separate window" ' +
			 'target="_blank">PHP-Nuke</a> ' +
			'themes, style sheets, and modules for use ' +
			'on version 2 of groja.com site.</li>' +
		'<li>Designed and created tables in MySql and supporting classes in PHP to store user ' +
			'preferences, quizzes, personality profiles, and images.</li>' +
		'<li>Designed and implemented PHP Nuke modules ' +
			'to allow users to specify, create, change, and delete their ' +
			'preferences, quizzes, personality profiles and images ' +
			'in a MySQL database.</li>' +
		'<li>Obtained a static IP address and launched groja.com on a dedicated server ' +
			'running apache on a minimal installation of Linux ' +
			'(<a href="http://gentoo.org" ' +
			  'onMouseOver="linkStatus();return true;" ' +
			  'onMouseOut="setStatusToDefault();return true;" ' +
			  'title="Opens link in separate window" ' +
			  'target="_blank">Gentoo</a>).  ' +
			'Created a three-host LAN consisting of the server, a nearly identical ' +
			'backup server, and a wireless dual-boot supporting host running Linux, ' +
			'(<a href="http://www.novell.com/linux/" ' +
			'onMouseOver="linkStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">SuSE 10.0</a>) ' +
			'and Windows XP.</li>' +
		'<li>Wrote PHP Nuke modules to describe how the site is organized and how to use it, ' +
			'to search the site\'s FAQs, ' +
			'to display a gallery of 48 example spiritual portraits in various sequences, ' +
			'to display the site\'s privacy policy, ' +
			'to show users what version 1 of the site looked like, and ' +
			'to display a single random image.</li>' +
		'<li>Researched web site security and made a variety of changes ' +
			'to ensure groja.com is secure.</li>' +
		'<li>Created and documented contingency plans, procedures, and ' +
			'supporting scripts to aid in monitoring, maintaining, making backups, and ' +
			'quickly recovering the server and supporting hosts.</li>' +
		'<li>Began learning Spanish (mostly for fun).</li>'
	}
});
//
// IdeaIntegration2004: Idea Integration -> Affinity Group Inc.
// --------------------------------------------------------------
// October, 2004 through January, 2005 - $50/hr.
//
ProfessionalExperience.IdeaIntegration2004 = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'idea_integration_2004' },
	companyName: { value: 'Idea Integration' },
	companyHref: { value: 'http://www.idea.com/' },
	location: { value: 'Englewood, CO' },
	title: { value: 'Independent Contractor' },
	dateRange: { value: 'October, 2004 through January, 2005' },
	displayLevel: { value: 3 },
	listItems: { value:
		'<li>On contract at ' +
			'<a href="http://www.affinitygroup.com/" ' +
			 'title="Opens link in separate window" target="_blank">' +
			 'Affinity Group Inc. (AGI)</a>: ' +
			'Analyzed, documented, and converted order fulfillment and campaign population ' +
			'C programs and Korn shell scripts to Perl, on Unix (HP-UX) and Windows XP.</li>'
	},
	moreItems: { value:
		'<li>On contract at ' +
			'<a href="http://www.affinitygroup.com/" ' +
			 'onMouseOver="companyStatus();return true;" ' +
			 'onMouseOut="setStatusToDefault();return true;" ' +
			 'title="Opens link in separate window" ' +
			 'target="_blank">' +
			'Affinity Group Inc. (AGI)</a>:' +
			'<ul>' +
				'<li>Analyzed order fulfillment process by examining approximately ' +
					'50,000 lines of C code and 11,000 lines of Korn shell (ksh) code ' +
					'in close to 200 files.</li>' +
				'<li>Traced and documented logic in C and ksh code, especially that ' +
					'which creates output files.</li>' +
				'<li>Converted several C programs to perl, ' +
					'using AGI perl library routines for calling ' +
					'Sybase stored procedures and performing Code 1 address verification ' +
					'and automated file transfer via FTP.</li>' +
			'</ul>' +
		'</li>'
	}
});
//
// TomhInfo: tomh.info with CSS
// ----------------------------
// July, 2004 through September, 2004
//
ProfessionalExperience.TomhInfo = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'tomh_info' },
	companyName: { value: 'tomh.info' },
	companyHref: { value: 'http://www.tomh.info/' },
	location: { value: 'Denver, CO' },
	title: { value: 'Webmaster' },
	dateRange: { value: 'July, 2004 through September, 2004' },
	displayLevel: { value: 3 },
	listItems: { value:
		'<li>Updated tomh.info to use CSS.</li>'
	},
	moreItems: { value:
		'<li>Learned about Cascading Style Sheets (CSS) by updating ' +
			'the tomh.info site.</li>' +
		'<li>Used the ' +
			'<a href="http://www.gimp.org" ' +
				'onMouseOver="linkStatus();return true;" ' +
				'onMouseOut="setStatusToDefault();return true;" ' +
				'title="Opens link in separate window" ' +
				'target="_blank">GIMP</a> ' +
			'to customize photographs for the website.</li>'
	}
});
//
// BroadbandServices: Broadband Services, Inc.
// -----------------------------------
// Mon. 9/16/2002 - Fri. 5/7/2004, $60K/yr. (start) - $63K/yr. (end)
//
ProfessionalExperience.BroadbandServices = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'broadband_services' },
	companyName: { value: 'Broadband Services Incorporated' },
	companyHref: { value: '' },
	location: { value: 'Highlands Ranch, CO' },
	title: { value: 'Software Engineer, MapVantage Group' },
	dateRange: { value: 'September, 2002 through June, 2004' },
	displayLevel: { value: 3 },
	listItems: { value:
		'<li>Analyzed Autocad drawing files containing maps of cable television optical fiber ' +
			'network equipment using Perl and the Feature Manipulation Engine ' +
			'(FME) on Windows 2000.</li>' +
		'<li>Modeled the equipment in Rational Rose and compiled the model ' +
			'into a data dictionary (DD) using SpatialNet on Windows 2000.</li>' +
		'<li>Loaded Windows-based Autocad drawing files into an Oracle Database ' +
			'on Linux, using the SpatialNet DD, Autocad, Perl, and FME.</li>' +
		'<li>Spearheaded the customization of the fiber network mapping application ' +
			'for use by multiple customers, making BSI the first company able to sell a ' +
			'fiber network GIS hosting service.</li>' +
		'<li>Wrote, tested, and ran Oracle SQL scripts to correct ' +
			'inconsistencies in the database.</li>'
	},
	moreItems: { value:
		'<li>Loaded Windows-based Autocad drawing files into ' +
			'an Oracle Database running on Linux:' +
			'<ul>' +
				'<li>Wrote programs in Perl and used the Feature Manipulation ' +
					'Engine (FME) to analyze Autocad files containing maps of ' +
					'cable television optical fiber networks and equipment on Windows 2000.</li>' +
				'<li>Built customized model of the network and equipment in Rational Rose, ' +
					'inheriting functionality from classes defined in ' +
					'SpatialNet on Windows 2000.</li> ' +
				'<li>Compiled model into a data dictionary (DD) using SpatialNet, ' +
					'enhancing and debugging the often cryptic DD code as necessary.</li>' +
				'<li>Loaded Autocad drawing files into an Oracle Database on Linux ' +
					'using SpatialNet, Autocad, and the Feature Manipulation Engine (FME).</li>' +
			'</ul>' +
		'</li>' +
		'<li>While implementing and customizing SpatialNet:' +
			'<ul>' +
				'<li>Led the team in number of bugs fixed.</li>' +
				'<li>Managed, coordinated, and created all releases.</li>' +
				'<li>With no assistance from SpatialNet consultants, ' +
					'defined, performed, and documented processes required to ' +
					'modify and extend the model for use by other customers.  ' +
					'This put BSI in the unique position of being able to sell ' +
					'a customized fiber network GIS hosting service.</li>' +
				'<li>Wrote, debugged, and ran Oracle SQL scripts to identify and ' +
					'correct issues arising from the loading of inconsistent and dynamic data.</li>' +
				'<li>Defined and documented processes for less-experienced team members.</li>' +
			'</ul>' +
		'</li>'
	}
});
//
// GrojaPreCms : groja.com - version 1 and tomh.info too
// ---------------------------------------------------------------
// June, 2001 through August, 2002 - $0/hr.
//
ProfessionalExperience.GrojaPreCms = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'groja_non_cms_version' },
	companyName: { value: 'groja.com' },
	companyHref: { value: 'http://www.groja.com/' },
	location: { value: 'Denver, CO' },
	title: { value: 'Webmaster' },
	dateRange: { value: 'June, 2001 through August, 2002' },
	displayLevel: { value: 3 },
	listItems: { value:
		'<li>Conceived, designed, wrote, tested, documented, implemented, and maintained the ' +
			'groja.com and tomh.info websites using PHP, HTML, and JavaScript on Linux ' +
			'(RedHat 7.X).</li>' +
		'<li>Passed the Sun Certified Java2 Programmer Exam.</li>'
	},
	moreItems: { value:
		'<li>Conceived, designed, wrote, tested, documented, ' +
			'implemented, and maintained GROJA(tm) program on the ' +
			'groja.com website using PHP and HTML on Linux (RedHat 7.X).   ' +
			'The GROJA(tm) program draws an image of a visitor\'s personality, ' +
			'based on their four-letter personality type.</li>' +
		'<li>Used the ' +
			'<a href="http://www.gimp.org" ' +
			'onMouseOver="linkStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">GIMP</a> ' +
			'to manually create navigation bar and custom buttons ' +
			'for tomh.info website.</li>' +
		'<li>Wrote JavaScript functions for tomh.info website ' +
			'to provide More, Contact, and Top buttons for each job on resume.</li>' +
		'<li>Passed the Sun Certified Java2 Programmer Exam.</li>' +
		'<li>Source code for both websites is available for review.</li>'
	}
	//	'<li>Personal note: ' +
	//		'Took some time off and did some non-technical things ' +
	//		'such as: quit smoking, learned performance dancing, ' +
	//		'learned yoga, and watched many many films and movies.</li>',
});
//
// IdeaIntegration1998: Idea Integration - first time around
// -----------------------------------------------------------
// August, 1998 through June, 2001 $? per hr? yr?
//
ProfessionalExperience.IdeaIntegration1998 = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'idea_integration_1998' },
	companyName: { value: 'Idea Integration' },
	companyHref: { value: 'http://www.idea.com/' },
	location: { value: 'Denver, CO' },
	title: { value: 'Consultant, promoted to Senior Consultant' },
	dateRange: { value: 'August, 1998 through June, 2001' },
	displayLevel: { value: 3 },
	listItems: { value:
		'<li>On contract at ' +
			'<a href="http://www.MapQuest.com" ' +
			 'title="Opens link in separate window" target="_blank">MapQuest.com</a>: ' +
			'Designed, wrote, tested, documented, implemented, and maintained both interactive ' +
			'and automatic business-to-business programs (B2B) in Java, C++, and Perl5, ' +
			'using Java Beans (EJB), Java Server Pages (JSP), Oracle (SQL, OCI), XML, HTML, ' +
			'CGI, and proprietary C++ APIs on Unix (Solaris).  ' +
			'Demonstrated flexibility by switching between Java, C++, and Perl5, writing new ' +
			'code as well as maintaining existing code, on a number of projects to ' +
			'meet changing requirements.</li>' +
		'<li>On contract at ' +
			'<a href="http://www.skld.com/" ' +
			 'title="Opens link in separate window" target="_blank">SKLD</a>: ' +
			'Analyzed and documented TiNO system programs, written in Java, ' +
			'Unix/C, MSDOS/C, JavaScript, Perl, Awk, csh, ksh, and sh.  ' +
			'Helped estimate work required to make the system Y2K compliant.  ' +
			'Wrote programs in Informix 4GL to assist ' +
			'in porting data from TiNO to the TIMS system.</li>' +
		'<li>On contract at ' +
			'<a href="http://www.emersonprocess.com/micromotion/" ' +
			 'title="Opens link in separate window" target="_blank">Micro Motion</a>: ' +
			'Enhanced real-time flow meter calibration programs in C on Unix (HP-UX).</li>' +
		'<li>On contract at ' +
			'<a href="http://www.abacus-direct.com/" ' +
			 'title="Opens link in separate window" target="_blank">Abacus</a>: ' +
			'Designed, wrote, tested, documented, and implemented programs in C/C++, Rogue Wave, ' +
			'and Perl4 on Unix (SunOS).</li>'
	},
	moreItems: { value:
		'<li>On contract at ' +
			'<a href="http://www.MapQuest.com" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">MapQuest.com</a>, ' +
			'from June, 1999 through February, 2001:' +
		'</li>' +
			'<ul>' +
				'<li>Wrote, tested, and maintained the Fast Update batch geocoder ' +
				 'in Perl5 and Oracle, implementing it to run automatically on ' +
				 'Unix (Solaris).</li>' +
				'<li>Wrote, tested, implemented, and maintained an ' +
				 'automatic system to use ssh to distribute files to multiple ' +
				 'Unix (Solaris) first in Java, then (when that did not work as ' +
				 'hoped) in Perl5.</li>' +
				'<li>Maintained and enhanced Hosted Edit, the Fast Update ' +
				 'CGI interface, using C/C++, Oracle (SQL, OCI), HTML, and ' +
				 'proprietary C++ APIs on Unix (Solaris).</li>' +
				'<li>Maintained and enhanced Java2 programs in the Small ' +
				 'Business Initiative System using Enterprise Java Beans (EJB), ' +
				 'Java Server Pages (JSP), Oracle (SQL, OCI), Apache/Tomcat, and ' +
				 'XML on Unix (Solaris).  ' +
				 'These programs obtained parameters (such as background and ' +
				 'link colors) used at a URL and stored the values in an ' +
				 'Oracle database.</li>' +
			'</ul>' +
			'<li>On contract at ' +
			'<a href="http://www.skld.com/" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">SKLD</a>, ' +
			'from December, 1998 through June, 1999:' +
			'</li>' +
			'<ul>' +
			'<li>Analyzed and documented ' +
			'<a href="http://www.skld.com/" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">SKLD\'s</a> ' +
			'TiNO system programs, written in Java, ' +
			'Unix/C, MSDOS/C, JavaScript, Perl, Awk, csh, ksh, and sh.  ' +
			'(Local land title guarantee companies own SKLD, ' +
			'and SKLD used to use Tino to track real estate.)</li>' +
			'<li>Helped estimate work required to make Tino Y2K compliant.  ' +
			'When management realized that fixing the system was impractical, ' +
			'wrote documents to help management ' +
			'identify and purchase a replacement system.</li>' +
			'<li>Wrote programs in Informix 4GL to assist ' +
			'in porting data from TiNO to the TIMS system.</li>' +
			'</ul>' +
			'<li>On contract at ' +
			'<a href="http://www.emersonprocess.com/micromotion/" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">Micro Motion</a>, ' +
			'from October, 1998 through December, 1998:' +
			'</li>' +
			'<ul>' +
			'<li>Enhanced real-time flow meter calibration programs in C ' +
			'on Unix (HP-UX) to take multiple temperature readings, ' +
			'resulting in more accurate calibrations.</li>' +
			'</ul>' +
			'<li>On contract at ' +
			'<a href="http://www.abacus-direct.com/" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">Abacus</a>, ' +
			'from August, 1998 through October, 1998:' +
			'</li>' +
			'<ul>' +
			'<li>Designed, wrote, tested, documented, and implemented ' +
			'programs for catalog response analysis in C/C++ and Rogue Wave ' +
			'on Unix (SunOS).</li>' +
			'<li>Wrote and enhanced programs in Perl4 for data conversion and input.</li>' +
			'<li>Streamlined process for input files with fixed-length records, ' +
			'reducing the amount of coding required by over 50%.</li>' +
			'</ul>'
	}
});
//
// AnalystsInternational: Analysts International Corporation
// --------------------------------------------
// March, 1998 through August, 1998 - $? per hr? yr?
//
ProfessionalExperience.AnalystsInternational = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'analysts_international' },
	companyName: { value: 'Analysts International Corporation' },
	companyHref: { value: 'http://www.analysts.com/' },
	location: { value: 'Boulder, CO' },
	title: { value: 'Technical Staff' },
	dateRange: { value: 'March, 1998 through August, 1998' },
	displayLevel: { value: 4 },
	listItems: { value:
		'<li>On contract at ' +
			'<a href="http://www.qwest.com" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">US West Advanced Technologies (now Qwest</a>): ' +
			'Designed, wrote, tested, and enhanced programs in Java ' +
			'to parse mainframe output and load it into an Oracle ' +
			'database running on Unix (SunOS).  ' +
			'Used ksh and crontab to ' +
			'schedule these programs to run automatically.  ' +
			'</li>'
	},
	moreItems: { value:
			'<li>On contract at ' +
			'<a href="http://www.qwest.com" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">US West Advanced Technologies (now Qwest</a>)</li>' +
			'<li>Designed, wrote, tested, and enhanced Java classes ' +
			'to parse mainframe error output and ' +
			'load relevant data into an Oracle database.  ' +
			'These classes were part of a system that would automatically ' +
			'correct some of these errors.</li>' +
			'<li>Wrote ksh scripts and used the Unix crontab command to ' +
			'schedule these programs to automatically download, parse,' +
			'and load this data.</li>'
	}
});
//
// MapQuest: MapQuest.com
// ----------------------
// August, 1996 through November, 1997 - $50K/yr.
//
ProfessionalExperience.MapQuest = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'MapQuest' },
	companyName: { value: 'Mapquest.com' },
	companyHref: { value: 'http://www.mapquest.com/' },
	location: { value: 'Denver, CO' },
	title: { value: 'Internet Engineer' },
	dateRange: { value: 'August, 1996 through November, 1997' },
	displayLevel: { value: 4 },
	listItems: { value:
		'<li>Designed, wrote, enhanced, and maintained the geocentric advertising feature along ' +
			'with related data handling programs, using C/C++, Perl4, CGI/HTML, and proprietary ' +
			'and commercial APIs on Unix (SunOS, SGI) web servers.' +
			'This feature increased web advertising revenues by 100 to 200%.</li>' +
		'<li>Integrated the geocentric advertising feature into ' +
			'the Connect system using C/C++ on Unix (Solaris).</li>' +
		'<li>Used Rational Rose to design classes to handle Point of Interest (POI) data ' +
			'consistently, and wrote those classes in C/C++ on Unix (Solaris).</li>'
	},
	moreItems: { value:
			'<li>Rewrote the batch geocoder in C, increasing its efficiency.</li>' +
			'<li>Wrote, tested, implemented, and enhanced ' +
			'the geocentric advertising system in C/C++.  ' +
			'Conceived, designed, wrote, and implemented programs ' +
			'in C and Perl4 to enable users to load data for this system ' +
			'directly into the ' +
			'<a href="http://www.netgravity.com/" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">Net Gravity</a> ' +
			'ad management database.  ' +
			'The system allowed advertisers to target their ads ' +
			'based on the visitor\'s browser and platform, and on ' +
			'parameters of the current map, ' +
			'such as the zoom level, latitude and longitude, and ' +
			'which Points of Interest (POIs) are checked.  ' +
			'It increased web advertising revenues by 100 to 200%.  ' +
			'Mentored other developers in how to maintain the system.</li>' +
			'<li>Created geo-tags for the Connect system using C/C++,  ' +
			'allowing customers to use the geocentric advertising feature ' +
			'on their sites.  ' +
			'Also maintained and enhanced the system, fixing bugs and ' +
			'changing it to allow the user to turn off the origin icon.</li>' +
			'<li>Used Rational Rose to design a set of library classes for ' +
			'managing multiple (recursive) levels of ' +
			'Points of Interest (POIs) more consistently, alleviating the ' +
			'need for redundant and inconsistent code.</li>' +
			'<li>All of these applications run on Unix (SunOS, SGI) web ' +
			'servers, and most of them used proprietary and commercial ' +
			'(Net Gravity, Rogue Wave) Application Programming Interfaces ' +
			'(APIs).</li>'
	}
});
//
// EvolvingSystems: Evolving Systems Incorporated
// -----------------------------------------------
//  November, 1991 through July, 1996
//
ProfessionalExperience.EvolvingSystems = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'evolving_systems' },
	companyName: { value: 'Evolving Systems Incorporated' },
	companyHref: { value: 'http://www.evolving.com/' },
	location: { value: 'Greenwood Village, CO' },
	title: { value: 'Configuration Management Analyst II, promoted to Configuration Management Analyst III' },
	dateRange: { value: 'November, 1991 through July, 1996' },
	displayLevel: { value: 4 },
	listItems: { value:
		'<li>Conceived, designed, developed, documented, and maintained ' +
			'configuration management programs and scripts written  in Perl4, Awk, and ' +
			'Korn shell (Ksh), running on Unix (AIX, SunOS, HP-UX).  ' +
			'These programs and scripts enabled new employees to use version control ' +
			'(RCS, PVCS, CMVC) and build (make) tools with very little training, and ' +
			'gave them greater control over what code was delivered to the customer.</li>' +
		'<li>Fixed bugs in C/C++ and Oracle ESQL PRO*C call center report programs ' +
			'on Unix (AIX).</li>' +
		'<li>Helped write requirement specifications for automated ' +
			'telephone provisioning systems.</li>'
	},
	moreItems: { value:
// 'Performed a variety of technical tasks in multiple roles ' +
// 'for this consulting firm that specializes in delivering ' +
// 'telecommunications software projects.' +
			'<li><u>As a Programmer, from September 1995 through July, 1996:</u>' +
			'<ul>' +
			'<li>Fixed bugs in C/C++ and Oracle ESQL PRO*C communications ' +
		'and report programs on Unix (AIX).</li>' +
			'</ul>' +
			'</li>' +
			'<li><u>As a Configuration Management Analyst, ' +
			'from February 1992 through September, 1995:</u>' +
	   '<ul>' +
		   '<li>Conceived, designed, wrote, tested, and documented ' +
		        'AIX Korn shell scripts to allow developers ' +
		        'to simultaneously work on multiple code branches in PVCS.</li>' +
		   '<li>Rewrote these scripts to use CMVC instead of PVCS, ' +
		        'and to allow developers to easily associate specific code ' +
		        'changes with specific bugs.</li>' +
		   '<li>Rewrote these scripts in Perl4 to support both CMVC and RCS, and ' +
		        'to support development on both Unix and Windows.</li>' +
		   '<li>Developed generic nightly build (make) scripts in Korn ' +
		        'shell to support multiple projects and to email the ' +
		        'appropriate developer when the nightly build failed in a ' +
		        'directory for which the developer was responsible.</li>' +
		   '<li>All of these scripts and programs provided a simple interface ' +
		        'to the complex development environment, supporting the rapid growth ' +
		        'of the company during this time.</li>' +
		   '<li>Consulted with managers, architects, and developers on ' +
		        'the use and possible purchase of new tools for software ' +
		        'building and version control.</li>' +
		   '<li>Mentored new Configuration Management Analysts.</li>' +
		   '<li>Answered developers\' questions about all ' +
		        'facets of version control, source code management, and ' +
		        'the building of executables via make and makefiles.</li>' +
		   '<li>Performed source code merges and built delivery packages.</li>' +
	   '</ul>' +
			'</li>' +
			'<li><u>As a Technical Writer, ' +
			'from November 1991 through February, 1992:</u>' +
			'<ul>' +
			'<li>Assisted writing requirement specifications for automated ' +
			'telephone provisioning systems.</li>' +
			'</ul>' +
			'</li>'
	}
});
//
// Unisys: Unisys
// --------------
//  February, 1990 through July, 1991
//
ProfessionalExperience.Unisys = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'unisys' },
	companyName: { value: 'Unisys' },
	companyHref: { value: 'http://www.unisys.com/' },
	location: { value: 'Camarillo, CA' },
	title: { value: 'Senior Product Information Analyst (Technical Writer)' },
	dateRange: { value: 'February, 1990 through July, 1991' },
	displayLevel: { value: 4 },
	listItems: { value:
		'<li>Documented message-based and event-driven ' +
			'Application Programming Interface (API) for developers ' +
			'to use in building graphical user interfaces (GUIs).</li>  ' +
		'<li>Wrote example programs using this API in C on ' +
			'Unisys (BTOS) microcomputers.</li>'
	},
	moreItems: { value:
			'<li>Wrote the <i>ADT Programming Guide</i>, a training ' +
			'manual for C Programmers who use the Application ' +
			'Development Toolkit (ADT) on ' +
			'Unisys (BTOS) microcomputers.  ' +
			'ADT was a message-based and ' +
			'event-driven Application Programming Interface (API) for ' +
			'developers to use in building text-based Graphical ' +
			'User Interfaces (GUIs).  ' +
			'The API was based on IBM\'s Presentation Manager.</li>' +
			'<li>Wrote example programs, and programming exercises and ' +
			'their solutions for the <i>ADT Programming Guide</i>.  ' +
			'This code demonstrated basic features of the GUI, such as ' +
			'how to create windows and send messages, as well as more advanced ' +
			'features, such as handling errors, creating scroll bars, and ' +
			'using the timer.</li>' +
			'<li>Edited, corrected, and refined the <i>ADT Reference Manual</i>.</li>'
	}
});
//
// PandeIncorporated: Pande, Inc.
// ------------------------------
//
ProfessionalExperience.PandeIncorporated = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'pande_incorporated' },
	companyName: { value: 'Pande, Incorporated' },
	companyHref: { value: '' },
	location: { value: 'Gardena, CA' },
	title: { value: 'Systems Engineer' },
	dateRange: { value: 'June, 1989 through February, 1990' },
	displayLevel: { value: 4 },
	listItems: { value:
		'<li>On contract at ' +
			'<a href="http://www.toshibatecusa.com/" ' +
				'title="Opens link in separate window" ' +
				'target="_blank">Toshiba TEC America Inc.</a>: ' +
			'wrote product requirements and functional specifications for a network of ' +
			'retail point-of-sale (POS) terminals connected to IBM-compatible PC (AT) ' +
			'in-store processor.</li>' +
		'<li>Created a database of POS vendors, products, and ' +
			'customers.</li>'
	},
	moreItems: { value:
			'On contract at ' +
			'<a href="http://www.toshibatecusa.com/" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">the Marketing Department of Toshiba TEC America Inc.</a>:</u><br />' +
			'<ul>' +
			'<li>Wrote product requirements and ' +
			'functional specifications for a ' +
			'network of retail Point of Sale ' +
			'(POS) terminals connected to IBM-compatible PC (AT) ' +
			'in-store processor.  ' +
			'The audience for these documents was marketing, ' +
			'management, and development.</li>  ' +
			'<li>Described POS features such as Terminal Off-line ' +
			'Functionality, Lay-Away, Returning Merchandise, ' +
			'Terminal Reporting, Tax Tables, Special Orders, ' +
			'Item Markdown Reporting, and Bar Code Recognition.' +
			'<li>Created a database of POS vendors, products, and ' +
			'customers using dBase IV on an IBM AT.</li>'
	}
});
//
// GraduateSchool: I love school!
// --------------------------
//
ProfessionalExperience.GraduateSchool = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'GraduateSchool' },
	companyName: { value: 'Part-time Jobs Held While in Graduate School' },
	companyHref: { value: '' },
	location: { value: 'Richmond, VA' },
	title: { value: 'Graduate Student' },
	dateRange: { value: 'May, 1986 through May, 1989' },
	displayLevel: { value: 5 },
	listItems: { value:
		'<li>Programmed in IBM 8100 (minicomputer) Assembler for' +
			'<a href="http://www.owens-minor.com/" ' +
				'title="Opens link in separate window" ' +
				'target="_blank"> ' +
			'Owens and Minor Hospital Supply</a>.</li>' +
		'<li>Taught IBM-PC Basic for ' +
			'<a href="http://www.jsr.cc.va.us/" ' +
				'title="Opens link in separate window" ' +
				'target="_blank">' +
			'J. Sargeant Reynolds Community College</a>.</li>' +
		'<li>Programmed in Microsoft Lisp for the ' +
			'<a href="http://www.smv.org/" ' +
				'title="Opens link in separate window" ' +
				'target="_blank">' +
				'Virginia Science Museum</a>.</li>' +
		'<li>Developed and documented IBM-PC applications for ' +
			'<u>Success Software</u>.' +
		'<li>Tutored Physics for the ' +
			'<a href="http://vcurams.vcu.edu/" ' +
				'title="Opens link in separate window" ' +
				'target="_blank">' +
			'VCU Athletic Department</a>.</li>'
	},
	moreItems: { value:
			'<li>For the ' +
			'<a href="http://vcurams.vcu.edu/" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">' +
			'VCU Athletic Department</a>, ' +
			'from January, 1989 through May, 1989: (part-time)<br />' +
			'Helped student atheletes learn Physics.</li>' +
			'<li>For ' +
			'<a href="http://www.jsr.cc.va.us/" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">' +
			'J. Sargeant Reynolds Community College</a>, ' +
			'from June, 1988 through December, 1988: (part-time)<br />' +
			'Prepared and presented lessons, assigned and graded work, ' +
			'including programming tasks using GWBasic on IBM PCs, ' +
			'wrote and gave tests, and ' +
			'computed and reported student grades.</li>' +
			'<li>For the ' +
			'<a href="http://www.smv.org/" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">' +
			'Virginia Science Museum</a>, ' +
			'from December, 1987 through April, 1988: (part-time)<br />' +
			'Designed, wrote, tested, and debugged a program ' +
			'in Microsoft Lisp to teach visitors about light and shadow.</li>' +
			'<li>For ' +
			'<a href="http://www.owens-minor.com/" ' +
		 'onMouseOver="companyStatus();return true;" ' +
		 'onMouseOut="setStatusToDefault();return true;" ' +
		 'title="Opens link in separate window" ' +
		 'target="_blank">' +
			'Owens and Minor Hospital Supply</a>, ' +
			'from May, 1987 through April, 1988: (full-time)<br />' +
			'Wrote, tested, and debugged program to track and report ' +
			'inventory of lot-controlled (dated) supplies using ' +
			'IBM 8100 (minicomputer) Assembler.  ' +
			'Documented and maintained Order Entry and other systems.</li>' +
			'<li>For <u>Success Software</u>, ' +
			'from January, 1987 through May, 1987: (part-time)<br />' +
			'Wrote User\'s Manual for the Client Keeper System and ' +
			'helped with data conversion.</li>' +
			'<li>From May, 1986 through December, 1986:<br />' +
			'Enjoyed being a full-time student at ' +
			'<a href="http://www.vcu.edu/" ' +
			'onMouseOver="companyStatus();return true;" ' +
			'onMouseOut="setStatusToDefault();return true;" ' +
			'title="Opens link in separate window" ' +
			'target="_blank">' +
			'VCU</a>.</li>'
	}
});
//
// BankOfVirginia: Wells Fargo (formerly Wachovia and Bank of Virginia before that)
// ----------------------------------------------------------------------
// BOVA became part of -> Wachovia was bought out by -> Wells Fargo
//
ProfessionalExperience.BankOfVirginia = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'bank_of_virginia' },
	companyName: { value: 'Bank of Virginia (now Wells Fargo)' },
	companyHref: { value: 'http://www.wellsfargo.com/' },
	location: { value: 'Richmond, VA' },
	title: { value: 'Programmer Analyst, promoted to Senior Programmer Analyst' },
	dateRange: { value: 'December, 1979 through April, 1986' },
	displayLevel: { value: 5 },
	listItems: { value:
		'<li>Designed, developed, documented, and maintained programs ' +
			'in Cobol for management information (financial reporting) ' +
			'systems running on Unisys mainframes and IBM-compatible PCs.</li>' +
		'<li>As the only technical person in the department, ' +
			'worked closely with all levels of management and staff.</li>'
	},
	moreItems: { value:
			'<li>As the only technical person in the department, ' +
			'worked closely with all levels of management and staff ' +
			'to conceive, design, write, test, implement, document, and ' +
			'maintain programs to produce a wide variety of reports ' +
			'for management and board members.</li>' +
			'<li>Wrote program for the Money Center in IBM PC Cobol ' +
			'to track large variable-rate deposits on a day-to-day basis.</li>' +
			'<li>Maintained, enhanced, and documented ' +
			'system in Unisys Cobol to provide senior management and board members with monthly reports ' +
			'on budgeted and actual financial numbers (assets and liabilities, income and expenses).  ' +
			'Eventually rewrote (structured) entire system and helped streamline procedures.</li>' +
			'<li>Created presentation graphics for Board Meetings using Videoshow and Picture It on IBM PCs.</li>' +
			'<li>Additional applications include Rate/Level/Mix Reporting, ' +
			'Fixed Assets, Rolling (Fiscal) Forecast, Five Year Plan, Regional and Company Board Reports, ' +
			'Branch Profitability, Branch Deposits, Bank Comparison Spreadsheet, and various utility programs.</li>' +
			'<li>Used Cobol, Lotus, Smart, Edlin, and MS-DOS on IBM-compatible PCs.  ' +
			'Used Cobol, Cande, and Wfl on Unisys 7900 mainframes.  ' +
			'Used Multiplan (spreadsheet) on Unisys microcomputers.</li>'
	}
});
//
// CityOfRichmond: City of Richmond, Virginia
// --------------------------------------------
// $12K/yr. (start) approx. - $?K/yr. (end)
//
ProfessionalExperience.CityOfRichmond = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'city_of_richmond' },
	companyName: { value: 'City of Richmond, Virginia' },
	companyHref: { value: 'http://www.richmondgov.com/' },
	location: { value: 'Richmond, VA' },
	title: { value: 'Programmer, promoted to Senior Programmer' },
	dateRange: { value: 'January, 1978 through December, 1979' },
	displayLevel: { value: 5 },
	listItems: { value:
		'<li>Wrote and maintained programs for the Utilities, Welfare, and other systems ' +
			'using Cobol, Assembler, JCL, CICS, VSAM, ISAM, Roscoe, and Dyl260, ' +
			'running on IBM 370 mainframes.</li>'
	},
	moreItems: { value:
		'<li>Wrote program in Cobol to convert the Utilities system to area meter reading, ' +
			'greatly increasing the efficiency of the meter readers.</li>' +
		'<li>Wrote program in Cobol to send notices to citizens who are delinquent in paying ' +
			'their parking tickets, increasing the city\'s revenue.</li>' +
		'<li>Completed the Work Request system.</li>' +
		'<li>Made minor modifications to programs ' +
			'for the Welfare and other systems using Cobol, Assembler, ' +
			'JCL, CICS, VSAM, ISAM, Roscoe, and Dyl260, running on IBM 370 mainframes.</li>'
	}
});
//
// OverniteTransportation: UPS (formerly Overnite Transportation)
// ---------------------------------------------------------------
// $6K/yr. (start) - $8K/yr. (end)
//
ProfessionalExperience.OverniteTransportation = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'overnite_transportation' },
	companyName: { value: 'Overnite Transportation Company (now UPS)' },
	companyHref: { value: 'http://www.overnite.com/' },
	location: { value: 'Richmond, VA' },
	title: { value: 'Programmer Trainee, promoted to Programmer' },
	dateRange: { value: 'March, 1976 through December, 1977' },
	displayLevel: { value: 5 },
	listItems: { value:
		'<li>Maintained and documented programs for the Vehicle Accident, Claims, and ' +
			'other systems in NCR Cobol and NCR Assembler (Neat/3) running on NCR minicomputers.</li>'
	},
	moreItems: { value:
		'<li>Wrote the Vehicle Accident system in NCR Assembler (Neat/3).</li>' +
		'<li>Working with just one other person, translated the ' +
			'Claims System from NCR Assembler to NCR Cobol, ' +
			'programming it to use the Total database package.</li>' +
		'<li>Maintained and documented programs in ' +
			'Neat/3 for other systems running on NCR minicomputers.  ' +
			'For example, helped increase the number of digits used for ' +
			'terminal numbers in all programs from two to three.</li>' +
		'<li>Historical note: used punched cards in this position.</li>'
	}
});

ProfessionalExperience.jobs = [
//	ProfessionalExperience.,
	ProfessionalExperience.JoomooWebsites_2,
	ProfessionalExperience.Kforce,
	ProfessionalExperience.JoomooWebsites_1,
	ProfessionalExperience.LodoSoftwareD3,
	ProfessionalExperience.ConsultnetTlc,
	ProfessionalExperience.ClkClk,
	ProfessionalExperience.SeeOurMinds,
	ProfessionalExperience.HudsonIt,
	ProfessionalExperience.MsagDataConsultants,
	ProfessionalExperience.GrojaJoomla,
	ProfessionalExperience.MortgageCadence,
	ProfessionalExperience.SaiPeopleSolutions,
	ProfessionalExperience.AdeaSolutions,
	ProfessionalExperience.GrojaPhpNuke,
	ProfessionalExperience.IdeaIntegration2004,
	ProfessionalExperience.TomhInfo,
	ProfessionalExperience.BroadbandServices,
	ProfessionalExperience.GrojaPreCms,
	ProfessionalExperience.IdeaIntegration1998,
	ProfessionalExperience.AnalystsInternational,
	ProfessionalExperience.MapQuest,
	ProfessionalExperience.EvolvingSystems,
	ProfessionalExperience.Unisys,
	ProfessionalExperience.PandeIncorporated,
	ProfessionalExperience.GraduateSchool,
	ProfessionalExperience.BankOfVirginia,
	ProfessionalExperience.CityOfRichmond,
	ProfessionalExperience.OverniteTransportation
];
