/*
 * This file defines the functions we need to handle our Resume data.
 * Please include this file immediately after Resume.js .
 */
"use strict";

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
	var displayShowMoreJobsButton = false;
	for ( var index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
		id = ProfessionalExperience.jobs[index].id;
		if ( initialDisplayLevel < ProfessionalExperience.jobs[index].displayLevel ) {
			jobSelector = '#' + id;
			$(jobSelector).hide();
			displayShowMoreJobsButton = true;
		}
	}
	if ( displayShowMoreJobsButton ) {
		$(".showMoreJobsButton").show();
	}
};
function showMoreJobs() {
	var id;
	var jobSelector;
	var displayLevel;
	var displayShowMoreJobsButton = false;
	currentDisplayLevel++;

	for ( var index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
		displayLevel = ProfessionalExperience.jobs[index].displayLevel;
		if ( displayLevel === currentDisplayLevel ) {
			id = ProfessionalExperience.jobs[index].id;
			jobSelector = '#' + id;
			$(jobSelector).show();
		}
		else if ( displayLevel > currentDisplayLevel ) {  // at least one is still hidden
			displayShowMoreJobsButton = true;
		}
	}
	if ( displayShowMoreJobsButton ) {
		$(".showMoreJobsButton").show();
	} else {
		$(".showMoreJobsButton").hide();
	}
}

$(document).ready(function() {
	Resume.populateSections();
	Resume.hideAllOlderJobs();
});
/**
 * Jobs are now shown with no items (accomplishments and tasks)
 * This function shows the list items for the selected job
 * 
 * @param {type} id of job
 */
function showListItemsForJob( id ) {
	var listItemsSelector;
	var showButtonSelector;
	listItemsSelector = '#' + id + ' div.list-items';
	showButtonSelector = '#' + id + ' a.show-button';
	$(showButtonSelector).remove();
	$(listItemsSelector).slideDown("slow");
}
/**
 * Toggle display of more or less list items for job identified by id
 */
function toggleMoreOrFewerListItems( id ) {
	var index;
	var listItemsSelector;
	var moreItemsSelector;
	for ( index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
		if ( id === ProfessionalExperience.jobs[index].id ) {
			listItemsSelector = '#' + id + ' div.list-items';
			moreItemsSelector = '#' + id + ' div.more-items';
		//	alert( 'toggleMoreOrFewerListItems: moreItemsSelector = ' + moreItemsSelector +
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
