PHONEGAP + AJAX + JSON + PHP
-------------------------------------------------------------------------

A basic example of how to use Ajax-Jason to communicate Phonegap-Build App with PHP remote file.
I'm using this repository with build.phonegap.com and at least works perfect for Android. In IOS it should also work.
Do not forget to include js files

config.xml


	<?xml version="1.0" encoding="UTF-8" ?>
	<widget xmlns   = "http://www.w3.org/ns/widgets"
		xmlns:gap   = "http://phonegap.com/ns/1.0"
		id          = "com.phonegap.ajax"
		versionCode = "10"
		version     = "1.0.0" >
	
		<!-- versionCode is optional and Android only -->
	
		<name>Ajax</name>
	
		<description>Test Phonegaph App Using build.phonegap.com - Ajax</description>
	
		<author href="http://173.201.0.130" email="javier_lamarca@hotmail.com">Javier Lamarca</author>
	  
		<platform name="ios"><icon src="icon.png" width="180" height="180" /></platform>
		<platform name="android"><icon src="icon.png" width="180" height="180" /></platform>
		<platform name="winphone"><icon src="icon.png" width="180" height="180" /></platform>
		
		<plugin name="cordova-plugin-whitelist" spec="1.2.1" source="npm" />
		<access origin="*" />
		<allow-navigation href="*" />
		<allow-intent href="*" />
	</widget>


index.html


    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'"/>
        <title>Ajax</title>
        <script src="cordova.js"></script>
        <script src="js/jquery-1.11.3.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/jquery.form.js"></script>
        <script>
            document.addEventListener("deviceready", onDeviceReady, false);
            //$( document ).ready(function() {onDeviceReady();});
    
            function onDeviceReady() {
    
                $.ajax({
                    type: "POST",
                    url: "http://173.201.0.130/app/test.php",
                    crossDomain: true,
                    cache: false,
                    data: { 
                        name: "John", 
                        location: "Boston" 
                    },
                    success: function(result){
                        var result = $.parseJSON(result);
                        $.each(result, function(i,field){
                            $("#results").append(field);
                        });
                    }
                })
                .fail(function(jqXHR, textStatus) {
                    $("#results").html( "Request failed: " + textStatus );
                });
      
            }
        </script>
        <style>.w100{width:100%;padding:10px 0px 10px 0px;}</style>
    </head>
    <body>
        <div id="results"></div>
    </body>
    </html>


My remote php file (test.php)


	<?php 
	header("Access-Control-Allow-Origin: *"); 
	header("Access-Control-Allow-Methods: *"); 
	header("Access-Control-Allow-Headers: *");
	$name = $_POST["name"];
	$location = $_POST["location"];
	echo "[\"<p>Your name is: ".$name."</p>\",\"<p>...and you came from: ".$location."</p>\"]";
	?>
