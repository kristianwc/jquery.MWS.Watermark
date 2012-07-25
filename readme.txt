jquery.MWS.Watermark
Created by Kristian Wolseley-Charles


* D e f a u l t s *
This plugin will overlay your textbox to give the appearance of a watermark with the text 'Required'.


* B a s i c   S e t u p *
1. Copy jquery.MWS.Watermark.js/.css to your chosen folder.
2. Make a a reference as you normally would to both the .js and .css files.
3. Create a textbox on your html page with a unique ID.
4. Add $('uniqueID').watermark() to your jquery script.


* M o r e   S e t t i n g s *
To extend the watermark plugin, you can specify the watermark text on either all your selected textboxes or override the text on specific ones.

To specify text on all selected textboxes add {text: 'Custom Text'} to the parameter section of the plugin as follows;
$('uniqueID').watermark({text: 'Custom Text'});

To ovveride the text, add the WatermarkText attribute to you textbox element as follows;
<input type="textbox" ID="txtFirstName" WatermarkText="First Name" />

Both of the above options can be used together, just bare in mind that the element attribute will override the default text and the custom text.


* C S S *
To style the watermark overlay, either change the 'MWSWatermark' class in the .css file or just add the class to your own code and make your changes. 
