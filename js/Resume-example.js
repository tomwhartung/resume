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
	id: {
		value: "minimal_section"                // id used in DOM to identify section
	},
	option: {
		value: "Minimal"                        // option text used on phone menu
	},
	title: {
		value: "Minimal Section"                // Section title
	},
	templateIdSelector: {
		value: "#paragraph-section-template"    // Handlebars template (see index.php)
	},
	isProfessionalExperience: {
		value: false                            // for possible future reference...
	},
	content: {
		value: "Use this Minimal Section for testing and to make other sections."
	}
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
			"if you know of any openings appropriate for someone with my background."
	},
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
		value: "Elevator speech goes here."
	},
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
	},
});
TechnicalExperience.point_01 = {
	bold: "Programming Languages:",
	text: "Java, Lisp, Fortran",
};
TechnicalExperience.point_05 = {
	bold: "Web Technologies:",
	text: "HTML, CSS",
};
TechnicalExperience.point_10 = {
	bold: "Relational Databases:",
	text: "MySql",
};
TechnicalExperience.point_15 = {
	bold: "Development Tools:",
	text: "NetBeans, Vim, Cygwin",
};
TechnicalExperience.point_20 = {
	bold: "Operating Systems:",
	text: "Unix (Linux, Mac OS X), Windows7, DOS",
};
TechnicalExperience.point_25 = {
	bold: "Software Life Cycle Tools:",
	text: "Git, Jira",
};
TechnicalExperience.point_30 = {
	bold: "Other Software Packages:",
	text: "Libre Office, Gimp",
};
TechnicalExperience.bulletPoints = [
	TechnicalExperience.point_01,
	TechnicalExperience.point_05,
	TechnicalExperience.point_10,
	TechnicalExperience.point_15,
	TechnicalExperience.point_20,
	TechnicalExperience.point_25,
	TechnicalExperience.point_30,
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
	},
});
//
// One might say that this is inefficient use of variables, e.g.:
//   http://www.w3schools.com/js/js_performance.asp
// However, it is nice to make these objects (see TechnicalExperience section)
//
RepresentativeAccomplishments.point_01 = {
	text: "Was totally awesome at one job."
};
RepresentativeAccomplishments.point_05 = {
	text: "Saved the company massive amounts of money at another job.",
};
RepresentativeAccomplishments.point_10 = {
	text: "Another bullet point here.",
};
RepresentativeAccomplishments.point_15 = {
	text: "Satisfied customers repeatedly.",
};
RepresentativeAccomplishments.point_20 = {
	text: "Another bullet point there.",
};
RepresentativeAccomplishments.point_25 = {
	text: "Earned five promotions for going above and beyond.",
};
RepresentativeAccomplishments.point_30 = {
	text: "Always professional, exhibiting excellent written and oral communication skills even under stress.",
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
	},
});
CertificationsAndEducation.point_HighSchool = {
	linkText: "Rock n Roll High School,",
	linkHref: "https://www.youtube.com/watch?v=c5vh0QHUA1w",
	schoolText: "",
	schoolHref: "",
	location: "Springfield, USA",
	completedDate: "July, 2011",
	listItems: "<li>Passed with flying colors.</li>",
};
CertificationsAndEducation.bulletPoints = [
	CertificationsAndEducation.point_HighSchool,
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
	},
});
Volunteering.point_Blood_Donor = {
	bold: "Blood Donor:",
	linkHref: "",
	text: "Volunteer Blood Donor since 1999",
};
Volunteering.bulletPoints = [
	Volunteering.point_Blood_Donor,
];//
// =========================================================
//  Here is where we pull it all together and print it out:
// =========================================================
// List the sections to include, in the order in which you want them to appear.
//
Resume.sections = [
	Introduction,
//	MinimalSection,
	SummaryOfQualifications,
	TechnicalExperience,
	RepresentativeAccomplishments,
	ProfessionalExperience,
	CertificationsAndEducation,
	Volunteering
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
