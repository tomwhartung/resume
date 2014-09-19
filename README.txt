
Date: 2014-09-17
Author: Tom W. Hartung

 Introduction:
---------------
Follow these steps to implement your own mobile friendly resume.

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
Install (git clone) idMyGadget source:
	cd /var/www
	git clone git://github.com:tomwhartung/idMyGadget.git
	cd idMyGadget

Follow the instructions in the idMyGadget/README.txt file to
get that going.

Install (git clone) the resume source:
	cd /var/www
	git clone git://github.com:tomwhartung/resume.git

Link the idMyGadget directory into the resume directory:
	cd /var/www/resume
	ln -s /var/www/idMyGadget .

Copy the example js/ProfessionalExperience.js.example and
js/Resume.js.example files:
	cd /var/www/resume/js
	cp ProfessionalExperience.js.example ProfessionalExperience.js
	cp Resume.js.example Resume.js

Update the JSON in these files so that they contain the content of your
own resume.

To verify that you have everything set up properly, access the
following file in your web browser:
	http://example.com/resume
For example, if you are setting this up on your localhost, go to
	http://localhost/resume


 Conclusion:
-------------



 References:
-------------

