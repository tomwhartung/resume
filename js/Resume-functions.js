/*
 * This file defines the functions we need to handle our Resume data.
 * Please include this file immediately after Resume.js .
 */
"use strict";
/**
 * Use the json data to populate the sections.
 * The handlebars templates in index.php provide the
 * markup for each section.
 * This is where we associate the data with those templates
 * to generate the content of the document.
 */
$(document).ready(function() {
	Resume.populateSections();
	Resume.hideAllOlderJobs();
});
/**
 * Loop through the sections, populating the skeleton created in index.php
 * with the content defined in the JavaScript objects in Resume.js .
 */
Resume.populateSections = function() {
	var thisSection;
	var templateForSection;
	var sectionTemplate;
	var templateForParagraphSection = $("#paragraph-section-template").html();
	var paragraphSectionTemplate = Handlebars.compile( templateForParagraphSection );
	var sectionHtml = "";
	var hideListItems = true;

	for ( var index = 0; index < Resume.sections.length; index++ ) {
		thisSection = Resume.sections[index];
		if ( thisSection.hasOwnProperty('templateIdSelector') ) {
			templateForSection = $(thisSection.templateIdSelector).html();
			sectionTemplate = Handlebars.compile( templateForSection );     // TODO: inefficient...
			sectionHtml = sectionTemplate( thisSection );
			if ( thisSection.hasOwnProperty('isProfessionalExperience') &&
			     thisSection.isProfessionalExperience === true ) {
				if ( typeof generateSingleJobPages === 'function' ) {
					$("#container").append( generateSingleJobPages() );
					hideListItems = false;  // each job has its page, do not hide the items
				}
			}
		} else {
			sectionHtml = paragraphSectionTemplate( thisSection );
		}
		$('#' + thisSection.id).append( sectionHtml );
	}
	//
	// Unless each job has its own page, hide the list items
	// Always hide the more items
	//
	var id;
	var listItemsSelector;
	var moreItemsSelector;
	for ( var index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
		id = ProfessionalExperience.jobs[index].id;
		if ( hideListItems ) {
			listItemsSelector = '#' + id + ' div.list-items';
			$(listItemsSelector).hide();
		}
		moreItemsSelector = '#' + id + ' div.more-items';
		$(moreItemsSelector).hide();
	}
};

var initialDisplayLevel = 1;
var currentDisplayLevel = initialDisplayLevel;

Resume.hideAllOlderJobs = function () {
	//
	// Show only jobs with displayLevel < initial
	//
	var id;
	var jobSelector;
	var moreJobsToShow = false;
	for ( var index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
		id = ProfessionalExperience.jobs[index].id;
		if ( initialDisplayLevel < ProfessionalExperience.jobs[index].displayLevel ) {
			jobSelector = '#' + id;
			$(jobSelector).hide();
			moreJobsToShow = true;
		}
	}
	if ( moreJobsToShow ) {
		$(".showMoreJobsButton").show();
	}
};
/**
 * When the user clicks the button, show more jobs
 * @returns nada
 */
$(document).ready(function() {
	$(document.body).on( "click", "a.showMoreJobsButton", function( event ) {
		alert( 'Alert me if they want to see more jobs!' );
		var id;
		var jobSelector;
		var displayLevel;
		var moreJobsToShow = false;
		currentDisplayLevel++;

		for ( var index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
			displayLevel = ProfessionalExperience.jobs[index].displayLevel;
			if ( displayLevel === currentDisplayLevel ) {
				id = ProfessionalExperience.jobs[index].id;
				jobSelector = '#' + id;
				$(jobSelector).slideDown();
			}
			else if ( displayLevel > currentDisplayLevel ) {  // at least one is still hidden
				moreJobsToShow = true;
			}
		}
		if ( moreJobsToShow ) {
			$(".showMoreJobsButton").show();
		} else {
			$(".showMoreJobsButton").hide();
		}
	});
});
/**
 * Jobs are shown with no items (accomplishments and tasks)
 * This function shows the list items for the selected job
 *
 */
$(document).ready(function() {
	$(document.body).on( "click", "a.show-button", function( event ) {
		var showButtonSelector;
		var listItemsSelector;
		showButtonSelector = '#' + this.id;
		listItemsSelector = showButtonSelector.replace( 'show-button', 'list-items' );
		$(showButtonSelector).remove();
		$(listItemsSelector).slideDown("slow");
	});
});
/**
 * When they click on the more items button, show more items
 * When they click on the fewer items button, show fewer items
 */
$(document).ready(function() {
	$(document.body).on( "click", "a.more-items-button", function( event ) {
		Resume.moreItemsButtonClicked( this );
	});
	$(document.body).on( "click", "a.fewer-items-button", function( event ) {
		Resume.fewerItemsButtonClicked( this );
	});
});
/**
 * Testing with actual iPhones showed that removing the onclick attributes of the
 * More and Less buttons caused that functionality to break.
 * So I added those attributes back in, and refactored the functionality of
 * the event handlers above into these new functions.
 * Sorry for any confusion....
 */
Resume.moreItemsButtonClicked = function( that ) {
	var moreItemsButtonSelector;
	var listItemsSelector;
	var moreItemsSelector;
	moreItemsButtonSelector = '#' + that.id;
	listItemsSelector = moreItemsButtonSelector.replace( 'more-items-button', 'list-items' );
	moreItemsSelector = moreItemsButtonSelector.replace( 'more-items-button', 'more-items' );
	$(listItemsSelector).slideUp("slow");
	$(moreItemsSelector).slideDown("slow");
}
Resume.fewerItemsButtonClicked = function( that ) {
	var fewerItemsButtonSelector;
	var listItemsSelector;
	var moreItemsSelector;
	fewerItemsButtonSelector = '#' + that.id;
	listItemsSelector = fewerItemsButtonSelector.replace( 'fewer-items-button', 'list-items' );
	moreItemsSelector = fewerItemsButtonSelector.replace( 'fewer-items-button', 'more-items' );
	$(moreItemsSelector).slideUp("slow");
	$(listItemsSelector).slideDown("slow");
}
