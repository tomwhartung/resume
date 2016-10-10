/*
 * This file defines a Resume, which is the main object of this application.
 * Resume contains an array of Section objects, which we must print in a specific sequence.
 * Most Section objects are small, so we define them in this file.
 * The list of jobs in the ProfessionalExperienceSection object is huge,
 * so those are in a separate file.
 */
"use strict";

var Resume = { };

/**
 * Use this Minimal Section as the prototype to Object.create() new Section objects
 */
var MinimalSection = Object.create( Object.prototype, {
	id: { value: "content_minimal" },
	templateIdSelector: { value: "#paragraph-section-template" },
	isProfessionalExperience: { value: false },
	content: { value: "Use this Minimal Section for testing and to make other sections." }
});

/**
 * Introduction
 */
var Introduction = Object.create( MinimalSection, {
	id: {
		value: "content_introduction"
	},
	templateIdSelector: {
		value: "#paragraph-section-template"
	},
	content: {
		value: // opening p tag is in the template
			"Welcome to my " +
				'<a href="http://www.tomwhartung.com/awd-using-device-detection/" ' +
					'title="Article about adaptive web design on my site, TomWHartung.Com" target="_blank">' +
				"adaptive,</a> comprehensive, interactive online resume.</p>" +
			"<p>Please " +
				"<a href='mailto:resume@tomwhartung.com?Subject=Your%20Online%20Resume%20at%20tomwhartung.com' " +
					"title='Contact me'>contact me</a> " +
				"if you would like a version of this resume in Word format, or if you know of " +
				"any opportunities in the Denver, Colorado Metropolitan area (including Boulder) " +
				"appropriate for someone with my background."   // closing p tag is in the template
	}
});

/**
 * Summary of Qualifications
 */
var SummaryOfQualifications = Object.create( MinimalSection, {
	id: {
		value: "content_summary"
	},
	templateIdSelector: {
		value: "#paragraph-section-template"
	},
	bulletPoints: {
		value: null
	},
	content: {
		value: "I am a highly skilled, well-rounded, flexible and reliable " +
			"information technologies professional with a solid work ethic. " +
			"I have extensive experience working with constantly changing and " +
			"increasingly complicated technology, and particularly strong expertise " +
			"in the entire software development life cycle, including analysis, " +
			"design, development, documentation and user interaction. " +
			"I am very personable, enjoy problem solving and learning new tools and " +
			"technologies, have a passion for writing easily-maintainable code, and " +
			"am willing and able to do whatever it takes to get the job done."
	}
});

/**
 * Technical Experience
 */
var TechnicalExperience = Object.create( MinimalSection, {
	id: {
		value: "content_technical_skills"
	},
	templateIdSelector: {
		value: "#bullet-section-template"
	},
	content: {
		value: "",    // content is bullet points
		configurable: true,
		writable: true
	}
});
TechnicalExperience.point_10 = {
	bold: "Programming Languages:",
	text: "PHP, JavaScript, Python, Bash, Java, CoffeeScript, Ksh, Perl, Awk, C/C++, C#, Tcl/Expect, Cobol, Assemblers"
};
TechnicalExperience.point_20 = {
	bold: "Content Management Systems:",
	text: "Joomla, WordPress, Drupal 8, Drupal 7, Django, PHP Nuke"
};
TechnicalExperience.point_30 = {
	bold: "Web Technologies:",
	text: "HTML5, HTML5BoilerPlate, CSS, LAMP, WAMP, Apache, Tomcat, REST, SOAP, Ajax, XHTML, XML, JSP, Struts, Selenium WebDriver, Adobe Flex3, Freemarker Templates"
};
TechnicalExperience.point_40 = {
	bold: "JavaScript Libraries:",
	text: "Handlebars, jQuery, Node, jQuery Mobile, Backbone, Underscore, Mootools"
};
TechnicalExperience.point_50 = {
	bold: "Relational Databases:",
	text: "MySql, Oracle, Microsoft SQL Server, LiquiBase, Sybase, Informix"
};
TechnicalExperience.point_60 = {
	bold: "Development Tools:",
	text: "NetBeans, Eclipse, Vim, Cygwin, JUnit, Spring, Hibernate, IntelliJ, phpMyAdmin, MySql Work Bench, Sql Server Management Studio"
};
TechnicalExperience.point_70 = {
	bold: "Software Life Cycle Tools:",
	text: "Git, Jira, Ant, Subversion (SVN), Tortoise SVN, Maven, Jenkins, Hudson, Version One, Redmine, Make, Visio, Rational Rose, Clearcase, Bugzilla, CVS, RCS, PVCS"
};
TechnicalExperience.point_80 = {
	bold: "Operating Systems:",
	text: "Unix/Linux (Ubuntu, Yocto, SuSE, Gentoo, Red Hat, Mac OS X, Solaris, Sun-OS, AIX, HP-UX), Windows7, Windows Vista, Windows XP, Windows XP Mode, DOS, MCP, MVS"
};
TechnicalExperience.point_90 = {
	bold: "Other Software Packages:",
	text: "Open Office, Microsoft Office, Autocad"
};
TechnicalExperience.bulletPoints = [
	TechnicalExperience.point_10,
	TechnicalExperience.point_20,
	TechnicalExperience.point_30,
	TechnicalExperience.point_40,
	TechnicalExperience.point_50,
	TechnicalExperience.point_60,
	TechnicalExperience.point_70,
	TechnicalExperience.point_80,
	TechnicalExperience.point_90
];

/**
 * Representative Accomplishments
 */
var RepresentativeAccomplishments = Object.create( MinimalSection, {
	id: {
		value: "content_accomplishments"
	},
	templateIdSelector: {
		value: "#bullet-section-template"
	},
	content: {
		value: "TBD (RepresentativeAccomplishments content comprises bullet points)",
		configurable: true,
		writable: true
	}
});
//
// One might say that this is inefficient use of variables, e.g.:
//   http://www.w3schools.com/js/js_performance.asp
// However, it is nice to make these objects (see TechnicalExperience section)
//
RepresentativeAccomplishments.point_01 = {
	text: "Successfully assisted companies in meeting deadlines, quickly and independently learning how to use and apply new tools and techniques."
};
RepresentativeAccomplishments.point_05 = {
	text: "Demonstrated ability to reduce complicated programs and processes intowell-organized sets of simpler components that others can maintain with minimal effort.",
};
RepresentativeAccomplishments.point_10 = {
	text: "Worked independently to gather requirements, design, code, test, document, and implement programs effectively, using new technologies to meet a variety of customer needs."
};
RepresentativeAccomplishments.point_15 = {
	text: "Defined, performed, and documented processes required to customize and implement an extremely complicated software package, giving the company a unique product to offer its customers."
};
RepresentativeAccomplishments.point_20 = {
	text: "Willing to perform tasks that others shun, and able to succeed where others fail."
};
RepresentativeAccomplishments.point_25 = {
	text: "Earned five promotions, demonstrating the desire and ability to master new technologies."
};
RepresentativeAccomplishments.point_30 = {
	text: ""
};
RepresentativeAccomplishments.bulletPoints = [
	RepresentativeAccomplishments.point_01,
	RepresentativeAccomplishments.point_05,
	RepresentativeAccomplishments.point_10,
	RepresentativeAccomplishments.point_15,
	RepresentativeAccomplishments.point_20,
	RepresentativeAccomplishments.point_25
//	RepresentativeAccomplishments.point_30
];

/**
 * Professional Experience: see ProfessionalExperience.js
 */

/**
 * Certifications and Education
 */
var CertificationsAndEducation = Object.create( MinimalSection, {
	id: {
		value: "content_education"
	},
	templateIdSelector: {
		value: "#education-section-template"
	},
	content: {
		value: "TBD (CertificationsAndEducation content comprises bullet points)",
		configurable: true,
		writable: true
	}
});
CertificationsAndEducation.point_HTML5Mooc = {
	linkText: "HTML5 Part 1: HTML5 Coding Essentials and Best Practices,",
	linkHref: "https://www.edx.org/course/html5-part-1-html5-coding-essentials-w3cx-html5-1x-1",
	schoolText: "Edx.org",
	schoolHref: "https://edx.org",
	location: "",
	completedDate: "June, 2015",
	listItems: ""
};
CertificationsAndEducation.point_JavaCertification = {
	linkText: "Sun Certified Java2 Programmer,",
	linkHref: "http://www.oracle.com/technetwork/topics/newtojava/certification-140469.html",
	schoolText: "",
	schoolHref: "",
	location: "Denver, CO",
	completedDate: "July, 2001",
	listItems: "<li>Scored 83% (60% is passing).</li>"
};
CertificationsAndEducation.point_Masters = {
	linkText: "Master of Interdisciplinary Studies,",
	linkHref: "http://www.graduate.vcu.edu/",
	schoolText: "Virginia Commonwealth University,",
	schoolHref: "http://www.vcu.edu/",
	location: "Richmond, VA",
	completedDate: "May, 1989",
	listItems: "<li>Emphasis: Computer Science and Art</li><li>GPA: 3.77 (of 4.0)</li>"
};
CertificationsAndEducation.point_Bachelors = {
	linkText: "Bachelor of Science in Mathematics,",
	linkHref: "http://www.math.vcu.edu/",
	schoolText: "Virginia Commonwealth University,",
	schoolHref: "http://www.vcu.edu/",
	location: "Richmond, VA",
	completedDate: "August, 1986",
	listItems: "<li>Emphasis:Computer Science</li>" +
		"<li>GPAs: 3.43 in Major, 3.15 Overall</li>" +
		"<li>Minor: Chemistry</li>",
	more: "Computer Languages Learned: Pascal, PL/I, Mainframe Assembler, Hewlett Packard Basic, Cobol, Fortran, Snobol4<br />" +
		"Paid for 90% of undergraduate-level education myself."
};
CertificationsAndEducation.bulletPoints = [
	CertificationsAndEducation.point_HTML5Mooc,
	CertificationsAndEducation.point_JavaCertification,
	CertificationsAndEducation.point_Masters,
	CertificationsAndEducation.point_Bachelors
];


/**
 * Volunteering
 */
var Volunteering = Object.create( MinimalSection, {
	id: {
		value: "content_volunteering"
	},
	templateIdSelector: {
		value: "#volunteer-section-template"
	},
	content: {
		value: "TBD (Volunteering content comprises bullet points)",
		configurable: true,
		writable: true
	}
});
Volunteering.point_JoomlaDayDenver = {
	bold: "Joomla Day Denver:",
	linkHref: "http://http://joomladaydenver.com//",
	text: "Helped with both setup and teardown in 2016",
};
Volunteering.point_DenverStartupWeek = {
	bold: "Denver Startup Week:",
	linkHref: "http://denverstartupweek.org/",
	text: "Worked two volunteer shifts in 2015 and three in 2016",
};
Volunteering.point_DrupalCamp = {
	bold: "DrupalCamp Colorado:",
	linkHref: "http://2016.drupalcampcolorado.org/",
	text: "Worked several volunteer shifts in 2016",
};
Volunteering.point_DenverDevs = {
	bold: "Develop Denver Conference:",
	linkHref: "http://developdenver.org/",
	text: "Helped out a bit each day at the conference in 2016",
};
Volunteering.point_GoogleIOExtended = {
	bold: "Google I/O Extended:",
	linkHref: "https://events.google.com/io2016/",
	text: "Volunteered for the all day event in Denver in 2016",
};
Volunteering.point_CLevelAtMileHigh = {
	bold: "C-Level at Mile Hi:",
	linkHref: "http://clevelmilehigh.org/",
	text: "Worked two shifts at the Colorado Technology Association (CTA) Fund Raiser in 2016",
};
Volunteering.point_DenverFilmSociety = {
	bold: "Denver Film Society:",
	linkHref: "http://denverfilm.org/index.aspx",
	text: "Year-Round and Film Festival Volunteer since 2011",
};
Volunteering.point_Bonfils = {
	bold: "Bonfils:",
	linkHref: "http://www.bonfils.org/",
	text: "Blood Donor Since 2012",
};
Volunteering.bulletPoints = [
	Volunteering.point_JoomlaDayDenver,
	Volunteering.point_DenverStartupWeek,
	Volunteering.point_DrupalCamp,
	Volunteering.point_DenverDevs,
	Volunteering.point_GoogleIOExtended,
	Volunteering.point_CLevelAtMileHigh,
	Volunteering.point_DenverFilmSociety,
	Volunteering.point_Bonfils
];
/**
 * List of sections (mobile pages) in this resume.
 * @type Array
 */
Resume.sections = [
	Introduction,
//	MinimalSection,
	SummaryOfQualifications,
	TechnicalExperience,
	RepresentativeAccomplishments,
	ProfessionalExperience,
	CertificationsAndEducation,
	Volunteering,
];
