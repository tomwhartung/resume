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
		value: "content_minimal"                // id used in DOM to identify section
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
		value: "content_introduction"
	},
	templateIdSelector: {
		value: "#paragraph-section-template"
	},
	content: {
		value: '<span class="bold">*** Fix js/Resume.js ***</span><br />' +
			"Using js/Resume-example.js as an example, create js/Resume.js and add your own information to it."
	},
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
		value: "Elevator speech goes here."
	},
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
	},
});
TechnicalExperience.point_01 = {
	bold: "Programming Languages:",
	text: "Java, Lisp, Fortran",
};
TechnicalExperience.point_10 = {
	bold: "Web Technologies:",
	text: "HTML5, Javascript, CSS",
};
TechnicalExperience.point_20 = {
	bold: "Etc:",
	text: "And so on.",
};
TechnicalExperience.bulletPoints = [
	TechnicalExperience.point_01,
	TechnicalExperience.point_10,
	TechnicalExperience.point_20
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
RepresentativeAccomplishments.point_10 = {
	text: "Another bullet point here.",
};
RepresentativeAccomplishments.point_20 = {
	text: "We all love bullet points.",
};
RepresentativeAccomplishments.bulletPoints = [
	RepresentativeAccomplishments.point_01,
	RepresentativeAccomplishments.point_10,
	RepresentativeAccomplishments.point_20
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
		value: "content_volunteering"
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
];
/**
 * List the sections to include in your resume, in the order in which you want them to appear.
 */
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
