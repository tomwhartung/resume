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
// FixMe - fill in your details!
// ---------------------------------
//
ProfessionalExperience.FixMe = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'fix_me' },
	companyName: { value: 'Fix Me' },
	companyHref: { value: 'http://www.example.com' },
	location: { value: 'Springfield, USA' },
	title: { value: 'Web Person' },
	dateRange: { value: 'May, 2015 through present' },
	displayLevel: { value: 1 },
	listItems: { value:
		'<li>Using ProfessionalExperience-example.js as an example, add details about ' +
			'your work experience to ProfessionalExperience.js .</li>'
	},
	moreItems: { value: 
		'<li>Using ProfessionalExperience-example.js as an example, add details about ' +
			'your work experience to ProfessionalExperience.js .</li>'
	}
});

ProfessionalExperience.jobs = [
	ProfessionalExperience.FixMe
];
