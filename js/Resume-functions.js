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

	for ( var index = 0; index < Resume.sections.length; index++ ) {
		thisSection = Resume.sections[index];
	//	console.log( 'populateSections: thisSection.id = ' + thisSection.id );
	//	console.log( 'populateSections: thisSection.templateIdSelector = ' + thisSection.templateIdSelector );
		if ( thisSection.hasOwnProperty('templateIdSelector') ) {
			templateForSection = $(thisSection.templateIdSelector).html();
			sectionTemplate = Handlebars.compile( templateForSection );     // TODO: inefficient...
			if ( thisSection.hasOwnProperty('isProfessionalExperience') &&
			     thisSection.isProfessionalExperience === true ) {
				sectionHtml = sectionTemplate( thisSection );
				if ( typeof generateSingleJobPages == 'function' ) {
				//	alert( 'confirmed that generateSingleJobPages is a function' );
					$("#container").append( generateSingleJobPages() );
				}
			} else {
				sectionHtml = sectionTemplate( thisSection );
			}
		} else {
			sectionHtml = paragraphSectionTemplate( thisSection );
		}
	//	console.log( "populateSections: sectionHtml = " + sectionHtml );
		$('#' + thisSection.id).append( sectionHtml );
	}
};

$(document).ready(function() {
	var index;
	var id;
	var listItemsSelector;
	var moreItemsSelector;
	Resume.populateSections();

	for ( index = 0; index < ProfessionalExperience.jobs.length; index++ ) {
		id = ProfessionalExperience.jobs[index].id;
		listItemsSelector = '#' + id + ' div.list-items';
		moreItemsSelector = '#' + id + ' div.more-items';
		$(listItemsSelector).hide();
		$(moreItemsSelector).hide();
		}
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
