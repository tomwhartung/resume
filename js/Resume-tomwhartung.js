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
	id: { value: "minimal_section" },
	option: { value: "Minimal" },
	title: { value: "Minimal Section" },
	templateIdSelector: { value: "#paragraph-section-template" },
	isProfessionalExperience: { value: false },
	content: { value: "Use this Minimal Section for testing and to make other sections." }
});

/**
 * Introduction
 */
var Introduction = Object.create( MinimalSection, {
	id: {
		value: "introduction_section"
	},
	option: {
		value: "Introduction"
	},
	title: {
		value: "Introduction"
	},
	templateIdSelector: {
		value: "#paragraph-section-template"
	},
	content: {
		value: "Please " +
			"<a href='mailto:resume@tomwhartung.com?Subject=Your%20Online%20Resume%20at%20tomwhartung.com' " +
			  "title='Contact me'>contact me</a> " +
			"if you would like a version of this resume in Word format, or if you know of " +
			"any opportunities in the Denver, Colorado Metropolitan area (including Boulder) " +
			"appropriate for someone with my background."
	}
});

/**
 * Summary of Qualifications
 */
var SummaryOfQualifications = Object.create( MinimalSection, {
	id: {
		value: "summary_of_qualifications"
	},
	option: {
		value: "Summary"
	},
	title: {
		value: "Summary of Qualifications"
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
		value: "technical_experience"
	},
	option: {
		value: "Technologies"
	},
	title: {
		value: "Technical Experience"
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
TechnicalExperience.point_01 = {
	bold: "Programming Languages:",
	text: "Java, PHP, JavaScript, CoffeeScript, Bash, Ksh, Perl, Awk, C/C++, C#, Tcl/Expect, Cobol, Assemblers"
};
TechnicalExperience.point_05 = {
	bold: "Web Technologies:",
	text: "Apache, Tomcat, Selenium WebDriver API, jQuery, Backbone, Underscore, Node, Mootools, REST, SOAP, LAMP, WAMP, HTML, CSS, XHTML, XML, Struts, Adobe Flex3, Freemarker Templates, Joomla, PHP Nuke, Ajax, JSP"
};
TechnicalExperience.point_10 = {
	bold: "Relational Databases:",
	text: "MySql, Microsoft SQL Server, Oracle, LiquiBase, Sybase, Informix"
};
TechnicalExperience.point_15 = {
	bold: "Development Tools:",
	text: "Eclipse, JUnit, Spring, Hibernate, NetBeans, IntelliJ, MySql Work Bench, Sql Server Management Studio, phpMyAdmin, Vim, Cygwin"
};
TechnicalExperience.point_20 = {
	bold: "Operating Systems:",
	text: "Unix (Linux, Mac OS X, Solaris, Sun-OS, AIX, HP-UX), Windows7, Windows Vista, Windows XP, Windows XP Mode, DOS, MCP, MVS"
};
TechnicalExperience.point_25 = {
	bold: "Software Life Cycle Tools:",
	text: "Maven, Git, Jira, Ant, Subversion (SVN), Tortoise SVN, Maven, Version One, Redmine, Make, Visio, Rational Rose, Clearcase, Bugzilla, CVS, RCS, PVCS"
};
TechnicalExperience.point_30 = {
	bold: "Other Software Packages:",
	text: "Microsoft Office, Open Office, PHP Nuke, Autocad"
};
TechnicalExperience.bulletPoints = [
	TechnicalExperience.point_01,
	TechnicalExperience.point_05,
	TechnicalExperience.point_10,
	TechnicalExperience.point_15,
	TechnicalExperience.point_20,
	TechnicalExperience.point_25,
	TechnicalExperience.point_30
];

/**
 * Representative Accomplishments
 */
var RepresentativeAccomplishments = Object.create( MinimalSection, {
	id: {
		value: "representative_accomplishments"
	},
	option: {
		value: "Accomplishments"
	},
	title: {
		value: "Representative Accomplishments"
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
		value: "certifications_and_education"
	},
	option: {
		value: "Education"
	},
	title: {
		value: "Certifications and Education"
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
	CertificationsAndEducation.point_JavaCertification,
	CertificationsAndEducation.point_Masters,
	CertificationsAndEducation.point_Bachelors
];


/**
 * Volunteering
 */
var Volunteering = Object.create( MinimalSection, {
	id: {
		value: "volunteering"
	},
	option: {
		value: "Volunteering"
	},
	title: {
		value: "Volunteering"
	},
	templateIdSelector: {
		value: "#bullet-section-template"
	},
	content: {
		value: "TBD (Volunteering content comprises bullet points)",
		configurable: true,
		writable: true
	}
});
Volunteering.point_DenverFilmSociety = {
	bold: "Denver Film Society:",
	linkHref: "http://denverfilm.org/index.aspx",
	text: "Volunteer Usher since 2011",
};
Volunteering.bulletPoints = [
	Volunteering.point_DenverFilmSociety
];
//
// =========================================================
//  Here is where we pull it all together and print it out:
// =========================================================
//
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
Resume.toHtml = function() {
	var thisSection;
	var templateForSection;
	var sectionTemplate;
	var templateForParagraphSection = $("#paragraph-section-template").html();
	var paragraphSectionTemplate = Handlebars.compile( templateForParagraphSection );
	var resumeHtml = "";
	var sectionHtml = "";

	for ( var index = 0; index < Resume.sections.length; index++ ) {
		thisSection = Resume.sections[index];
	//	console.log( 'thisSection.id = ' + thisSection.id );
	//	console.log( 'thisSection.templateIdSelector = ' + thisSection.templateIdSelector );
		if ( thisSection.hasOwnProperty('templateIdSelector') ) {
			templateForSection = $(thisSection.templateIdSelector).html();
			sectionTemplate = Handlebars.compile( templateForSection );     // TODO: inefficient...
			if ( thisSection.hasOwnProperty('isProfessionalExperience') &&
				 thisSection.isProfessionalExperience === true ) {
				sectionHtml = sectionTemplate( thisSection );
			} else {
				sectionHtml = sectionTemplate( thisSection );
			}
		} else {
			sectionHtml = paragraphSectionTemplate( thisSection );
		}
	//	console.log( "sectionHtml = " + sectionHtml );
		resumeHtml += sectionHtml;
	}
	$('#content').append( resumeHtml );
};

$(document).ready(function() {
	var index;
	var id;
	var moreItemsSelector;
	Resume.toHtml();
	//
	// If we have a showOnlySection function (i.e., if we are on a phone)
	//   all sections are hidden, so call showOnlySection to show the Introduction
	// else
	//   initially we want to hide the more-items div that contains details about each job.
	// Note that we can hide these elements only after renering the resume
	//
	if ( typeof(showOnlySection) == 'function' ) {
		showOnlySection( Resume.sections[0].id );
		togglePhoneMenu();
	} else {
		for ( index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
			id = ProfessionalExperience.jobs[index].id;
			moreItemsSelector = '#' + id + ' div.more-items';
//			alert( 'toggling initial display of more-items; ' +
//					'ProfessionalExperience.jobs[index].moreOrLessToggleEffect = ' +
//					  ProfessionalExperience.jobs[index].moreOrLessToggleEffect );
			switch( ProfessionalExperience.jobs[index].moreOrLessToggleEffect ) {
				case ( ToggleEffectEnum.bothFast ):
				case ( ToggleEffectEnum.bothSlow ): {
					$(moreItemsSelector).animate({
						height: 'toggle',
						opacity: 'toggle'
					}, 'fast' );
					break;
				}
				case ( ToggleEffectEnum.fadeFast ):
				case ( ToggleEffectEnum.fadeSlow ): {
					$(moreItemsSelector).animate({ opacity: 'toggle' }, 'fast' );
					break;
				}
				case ( ToggleEffectEnum.slideFast ):
				case ( ToggleEffectEnum.slideSlow ): {
					$(moreItemsSelector).slideToggle( 'fast' );
					break;
				}
				case ( ToggleEffectEnum.instant ):
				default: {
					$(moreItemsSelector).toggle();
					break;
				}
			}
		}
	}
});
/**
 * Toggle display of more or less list items for job identified by id
 */
function toggleMoreOrLessListItems( id ) {
	var index;
	var listItemsSelector;
	var moreItemsSelector;
	for ( index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
		if ( id === ProfessionalExperience.jobs[index].id ) {
			listItemsSelector = '#' + id + ' div.list-items';
			moreItemsSelector = '#' + id + ' div.more-items';
		//	alert( 'toggleMoreOrLessListItems: moreItemsSelector = ' + moreItemsSelector +
		//			'; listItemsSelector ' + listItemsSelector );
			switch( ProfessionalExperience.jobs[index].moreOrLessToggleEffect ) {
				case ( ToggleEffectEnum.bothFast ): {
					$(listItemsSelector).animate({
						height: 'toggle',
						opacity: 'toggle'
					}, 'fast' );
					$(moreItemsSelector).animate({
						height: 'toggle',
						opacity: 'toggle'
					}, 'fast' );
					break;
				}
				case ( ToggleEffectEnum.bothSlow ): {
					$(listItemsSelector).animate({
						height: 'toggle',
						opacity: 'toggle'
					}, 'slow' );
					$(moreItemsSelector).animate({
						height: 'toggle',
						opacity: 'toggle'
					}, 'slow' );
					break;
				}
				case ( ToggleEffectEnum.fadeFast ): {
					$(listItemsSelector).animate({ opacity: 'toggle' }, 'fast' );
					$(moreItemsSelector).animate({ opacity: 'toggle' }, 'fast' );
					break;
				}
				case ( ToggleEffectEnum.fadeSlow ): {
					$(listItemsSelector).animate({ opacity: 'toggle' }, 'slow' );
					$(moreItemsSelector).animate({ opacity: 'toggle' }, 'slow' );
					break;
				}
				case ( ToggleEffectEnum.slideFast ): {
					$(listItemsSelector).slideToggle( 'fast' );
					$(moreItemsSelector).slideToggle( 'fast' );
					break;
				}
				case ( ToggleEffectEnum.slideSlow ): {
					$(listItemsSelector).slideToggle( 'slow' );
					$(moreItemsSelector).slideToggle( 'slow' );
					break;
				}
				case ( ToggleEffectEnum.instant ):
				default: {
					$(listItemsSelector).toggle();
					$(moreItemsSelector).toggle();
					break;
				}
			}
			if ( ProfessionalExperience.jobs[index].hasOwnProperty('moreItemsDisplayed') &&
				 ProfessionalExperience.jobs[index].moreItemsDisplayed === true ) {
				ProfessionalExperience.jobs[index].moreItemsDisplayed = false;
			} else {
				ProfessionalExperience.jobs[index].moreItemsDisplayed = true;
			}
		}
	}
}
