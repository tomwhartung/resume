
Date: 2014-09-17
Author: Tom W. Hartung

 This Is a WiP
---------------
Note that this is still a Work in Progress (WiP), so contact me
if you have any questions.

 Introduction:
---------------
Follow these steps to implement your own mobile friendly resume
on a LAMP (Linux Apache MySql PHP) server.

This process requires you first install idMyGadget.  It was
developed on a server running Ubuntu 14.04, running Apache with
the DocumentRoot set to /var/www .

If you are using a different operating system or installing
into a different directory, you may need to adjust these
instructions accordingly.

 Requirements:
---------------
Installing and using this code requires a computer running a
LAMP (Linux, Apache, MySql, and PHP) server.  It will probably work
on a MAMP, WAMP, or XAMP server, but I have not tried it.

If you are using Windows, you will need a terminal application,
such as Cygwin, to run these commands.

 Installation and Setup:
-------------------------
Install idMyGadget source and initialize WURFL (the Wireless
Uniform Resource FiLe):
	cd /var/www
	git clone git@github.com:tomwhartung/idMyGadget.git
	cd idMyGadget

Follow the instructions in the idMyGadget/README.txt file to
initialize WURFL get all of that going.

Install (git clone) the resume source:
	cd /var/www
	git clone git@github.com:tomwhartung/resume.git

Link the idMyGadget directory into the resume directory:
	cd /var/www/resume
	ln -s /var/www/idMyGadget .

Change the value of the $myName variable near the top of
index.php , so that your name (and not mine) appears in the
title of the page.

Copy the example js/ProfessionalExperience-example.js and
js/Resume-example.js files as follows:
	cd /var/www/resume/js
	cp ProfessionalExperience-example.js ProfessionalExperience.js
	cp Resume-example.js Resume.js

Update the JavaScript object literals in these files so that
they contain the content of your resume.

To verify that you have everything set up properly, access the
following file in your web browser:
	http://example.com/resume
For example, if you are setting this up on your localhost, go to
	http://localhost/resume


 Conclusion:
-------------
This is still a Work In Progress, so no conclusions are available
right now.


 References:
-------------

