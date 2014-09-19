/**
 * This file defines all of the jobs that appear under Professional Experience
 * Each job is just a JavaScript Object Literal containing the values unique to that position
 *
 * Note that we cannot use MinimalSection as our prototype for this *Section*,
 * as we did for the other Sections, because it is not in this scope.
 * This is not a big deal, because most sections override all values in MinimalSection anyway.
 */
var ProfessionalExperience = Object.create( Object.prototype, {
	id: {
		value: "professional_experience"
	},
	option: {
		value: "Experience"
	},
	title: {
		value: "Professional Experience"
	},
	isProfessionalExperience: {
		value: true
	},
	templateIdSelector: {
		value: "#experience-section-template"
	},
	content: {
		value: "",
		configurable: true,
		writable: true
	}
});
/**
 * Create an "Enum" defining different types of transitions so we can change it easily
 * @type type
 */
var ToggleEffectEnum = {
	bothFast: 'bf',   // both = fade and slide
	bothSlow: 'bs',   // both = fade and slide
	fadeFast: 'ff',
	fadeSlow: 'fs',
	instant: 'i',
	slideFast: 'sf',
	slideSlow: 'ss',
	default: 'bs'
};
/**
 * Bare-bones job object containing default values, that we can use to create other job objects
 */
ProfessionalExperience.MinimalJob = Object.create( Object.prototype, {
	id: { value: '' },
	companyName: { value: '' },
	companyHref: { value: '' },
	location: { value: 'Denver, CO' },
	title: { value: '' },
	dateRange: { value: '' },
	moreOrLessToggleEffect: { value: ToggleEffectEnum.default },
	listItems: { value: '' },
	moreItems: { value: '' }
});


//
// Example job - copy this and fill in the values appropriate for each job you want on your resume
// -----------------------------------------------------------------------------------------------
//
ProfessionalExperience.ExampleJob2 = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'example_job_2' },
	companyName: { value: 'Most Recent Example Job' },
	companyHref: { value: 'http://www.example.com' },
	location: { value: 'Springfield, USA' },
	title: { value: 'Sr. Worker Bee' },
	dateRange: { value: 'January, 2000 through present' },
	listItems: { value:
		'<li>Did some difficult stuff.</li>' +
		'<li>Did some interesting and challenging stuff.</li>'
	},
	moreItems: { value: 
		'<li>Did some difficult stuff.</li>' +
		'<li>Did some other difficult stuff.</li>' +
		'<li>Did some interesting and challenging stuff.</li>' +
		'<li>And even did some not-so-interesting but still challenging stuff.</li>'
	}
});
ProfessionalExperience.ExampleJob1 = Object.create( ProfessionalExperience.MinimalJob, {
	id: { value: 'example_job_1' },
	companyName: { value: 'First Example Job' },
	companyHref: { value: 'http://www.example.com' },
	location: { value: 'Springfield, USA' },
	title: { value: 'Worker Bee' },
	dateRange: { value: 'January, 1970 through December, 1999' },
	listItems: { value:
		'<li>Did some stuff.</li>' +
		'<li>Did some interesting stuff.</li>'
	},
	moreItems: { value: 
		'<li>Did some stuff.</li>' +
		'<li>Did some other stuff.</li>' +
		'<li>Did some interesting stuff.</li>' +
		'<li>And even did some not-so-interesting stuff.</li>'
	}
});

//
// Array listing each job in the sequence in which you want the jobs to appear
//
ProfessionalExperience.jobs = [
	ProfessionalExperience.ExampleJob2,
	ProfessionalExperience.ExampleJob1
];
