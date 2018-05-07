
## Introduction:

This is a mobile friendly resume, that uses device detection rather than media queries.

This resume uses the idMyGadget adapter API to detect the type of device that is accessing the site and adjusts the content that it delivers accordingly.

If you installed this code and are being redirected here, it is because you have not installed idMyGadget!  (It is a subtle hint to RTFM ;-) .)

* For information about idMyGadget, see [the idMyGadget project on github](https://github.com/tomwhartung/idMyGadget) .

* You can see an example of the finished product here:
[Tom W. Hartung's Mobile Friendly Resume](http://tomhartung.com/resume) .

Note that to fully appreciate the result, you must access it on both your phone and a desktop or tablet!

## Overview:
Note that all resume data is in json.

### My Resume's Data
The files
[js/Resume-tomwhartung.js](https://github.com/tomwhartung/resume/blob/master/js/Resume-tomwhartung.js)
and
[js/ProfessionalExperience-tomwhartung.js](https://github.com/tomwhartung/resume/blob/master/js/ProfessionalExperience-tomwhartung.js)
contain the data used in [my resume](http://tomhartung.com/resume) .

On my web server I link these to js/Resume.js and js/ProfessionalExperience.js .

### Example Resume Data
The files
[js/Resume-example.js](https://github.com/tomwhartung/resume/blob/master/js/Resume-example.js)
and
[js/ProfessionalExperience-example.js](https://github.com/tomwhartung/resume/blob/master/js/ProfessionalExperience-example.js)
contain some minimal example data that you can use to construct your very own mobile-friendly resume.

Detailed instructions follow!

## How To:
Follow these steps to implement your own mobile friendly resume
on a LAMP (Linux Apache MySql PHP) server.

This process requires you first install idMyGadget.  It was
developed on a server running Ubuntu 14.04, running Apache with
the DocumentRoot set to /var/www .

If you are using a different operating system or installing
into a different directory, you may need to adjust these
instructions accordingly.

## This Is a WiP
Note that this is still a Work in Progress (WiP), so contact me
if you have any questions.

## Requirements:
Installing and using this code requires a computer running a
LAMP (Linux, Apache, MySql, and PHP) server.  It will probably work
on a MAMP, WAMP, or XAMP server, but I have not tried it.

If you are using Windows, you will need a terminal application,
such as Cygwin, to run these commands.

## Installation and Setup:
Install idMyGadget source and initialize one or more of the gadget detectors.
```
cd /var/www
git clone git@github.com:tomwhartung/idMyGadget.git
cd idMyGadget
```

For more information, see the idMyGadget README.md files.

Install (git clone) the resume source:
```
cd /var/www
git clone git@github.com:tomwhartung/resume.git
```

Link the idMyGadget directory into the resume directory:
```
cd /var/www/resume
ln -s /var/www/idMyGadget .
```

Change the value of the $myName variable near the top of
index.php , so that your name (and not mine) appears in the
title of the page.

Copy the example js/ProfessionalExperience-example.js and
js/Resume-example.js files as follows:
```
cd /var/www/resume/js
cp ProfessionalExperience-example.js ProfessionalExperience.js
cp Resume-example.js Resume.js
```

Update the JavaScript object literals in these files so that
they contain the content of your resume.

To verify that you have everything set up properly, access the
following file in your web browser:
[http://example.com/resume](http://example.com/resume)
For example, if you are setting this up on your localhost, go to
[http://localhost/resume](http://localhost/resume)

## Conclusion:
This project in general, and documentation in particular,
is still a Work In Progress, so no conclusions are available right now.

## References:
TBD
