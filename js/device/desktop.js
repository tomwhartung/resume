//
// ====================================================
// Functions to set status field (at bottom of browser)
// ====================================================
// The status and defaultstatus fields are a bit flakey on the
// various browsers.  Actually, in general, handling the onMouseOut
// event seems to work best.
//
var iAmGreatStatus='This guy is good, hire him immediately!!!';
window.defaultStatus=iAmGreatStatus;

function setStatusToDefault() {
   window.status = iAmGreatStatus;
}

function linkStatus() {
   window.status = "Opens link in separate window";
}

function emailStatus() {
   window.status = "Send me an email!";
}

function companyStatus() {
   window.status = "Opens link in separate window";
}

