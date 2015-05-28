/*
 * This file is very similar to androidPhone.js; consider merging them at some point.
 */
"use strict";

function generateSingleJobPages() {
	var templateForSingleJobPage;
	var singleJobPageTemplate;
	var thisJob = '';
	var thisJobPageHtml = '';
	var allJobPagesHtml = '';

	templateForSingleJobPage = $('#single-job-section-template').html();
	singleJobPageTemplate = Handlebars.compile( templateForSingleJobPage );

	for ( var index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
		thisJob = ProfessionalExperience.jobs[index];
		thisJobPageHtml = singleJobPageTemplate( thisJob );
		allJobPagesHtml += thisJobPageHtml;
	}

	return allJobPagesHtml;
}

