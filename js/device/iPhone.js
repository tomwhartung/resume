/*
 * From Chapter 2 of Building Android Apps With HTML, CSS, and Javascript, Second Edition
 * Adds the menu button and a function to toggle the display of the menu
 * This file is very similar to androidPhone.js; consider merging them at some point.
 */
"use strict";
// // if (window.innerWidth && window.innerWidth <= 480) {
//     $(document).ready(function() {
//         $('#header ul').addClass('hide');
//         $('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>');
//     });
//     function toggleMenu() {
//         $('#header ul').toggleClass('hide');
//         $('#header .leftButton').toggleClass('pressed');
//     }
// // }

/*
 * Create a menu that is visible on phones only.
 * Note that this is another function duplicated in androidPhone.js .
 * Note that we should support having two different files at least until we can
 * --->>> test on an android phone.<<<---
 */
$(document).ready(function() {
//	$('#header ul').addClass('hide');
//	$('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>');

	var templateForPhoneMenu = $("#phone-menu-template").html();
	var phoneMenuTemplate = Handlebars.compile( templateForPhoneMenu );
	var phoneMenuHtml = "";
	$('#header').append('<div class="leftButton" onclick="togglePhoneMenu()">Menu</div>');
	phoneMenuHtml = phoneMenuTemplate( Resume );
	$('#header').append( phoneMenuHtml );
	$('#phone-menu ul').addClass('hide');
});
function togglePhoneMenu() {
	$('#header ul').toggleClass('hide');
	$('#header .leftButton').toggleClass('pressed');
}
/*
 * Given an id (string), hides all other resume sections
 * Note this is another function that will probably be identical for Android...
 */
function showOnlySection( idToShow ) {
	var index;
	var thisSection;
	var selector;
	togglePhoneMenu();
//	alert( 'Hi from showOnlySection, idToShow = ' + idToShow );
	for ( index = 0; index < Resume.sections.length; index++ ) {
		thisSection = Resume.sections[index];
		selector = "#" + thisSection.id;
		if ( thisSection.id === idToShow ) {
			$(selector).removeClass( 'hide' );
		} else {
			$(selector).addClass( 'hide' );
		}
	}
}
/*
 * works OK but we want to toggle them.
 */
function showJobListItems( id ) {
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
function toggleJobListItems( id ) {
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
