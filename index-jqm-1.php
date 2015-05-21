<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>My first jQuery Mobile code</title>
  <link rel="stylesheet" href="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css" />
  <script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
  <script type="text/javascript" src="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
 </head>

 <body>
    <div data-role="page" id="home">

    <div data-role="header">
            <h1>Home</h1>

    </div>

    <div data-role="content">
            <p>This is content for the home</p>
    </div>

    <div data-role="footer" data-id="main" position="fixed">
      <div data-role="navbar">
       <ul>
         <li><a data-icon="home" class="ui-btn-active ui-state-persist">Home</a></li>
         <li><a href="#help" data-icon="alert">Help</a></li>
       </ul>
      </div>
     </div>

 </div>


 <div data-role="page" id="help">

    <div data-role="header">
            <h1>Help</h1>
     </div>

    <div data-role="content">
            <p>This is content for Help</p>
     </div>

    <div data-role="footer" data-id="main"  position="fixed">
      <div data-role="navbar">
       <ul>
         <li><a href="#home" data-icon="home">Home</a></li>
         <li><a data-icon="alert" class="ui-btn-active ui-state-persist">Help</a></li>
       </ul>
      </div>
     </div>

    </div>

 </body>
 </html>
