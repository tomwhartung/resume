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

/*
 * works OK but we want to toggle them.
 */
function showJobListItems_obsolete_I_think( id ) {
	var index;
	var thisJob;
	var jobToShow;
	var listItems;
	var selector;
	for ( index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
		thisJob = ProfessionalExperience.jobs[index];
		if ( id === thisJob.id ) {
			jobToShow = thisJob;
		//	alert( 'Found a job! jobToShow.companyName = ' + jobToShow.companyName );
		}
	}
	listItems = jobToShow.listItems;
	selector = '#' + id;
//	alert( 'selector = ' + selector + '; listItems = ' + listItems );
	$(selector).append( '<ul>' + listItems + '</ul>' );
}
function toggleJobListItems_obsolete_I_think( id ) {
	var index;
	var thisJob;
	var listItems;
	var selector;
	for ( index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
		thisJob = ProfessionalExperience.jobs[index];
		if ( id === thisJob.id ) {
			selector = '#' + id;
			if ( ProfessionalExperience.jobs[index].hasOwnProperty('listItemsDisplayed') &&
				 ProfessionalExperience.jobs[index].listItemsDisplayed === true ) {
				ProfessionalExperience.jobs[index].listItemsDisplayed = false;
				$(selector + ' ul.list-items').remove();
			} else {
				listItems = thisJob.listItems;
				$(selector).append( '<ul class="list-items">' + listItems + '</ul>' );
				ProfessionalExperience.jobs[index].listItemsDisplayed = true;
			}
		}
	}
//	alert( 'selector = ' + selector + '; listItems = ' + listItems );
}
