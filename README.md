# ezPopup guide
Welcome to the ezPopup guide, I hope you enjoy and find my plugin useful.

### Getting started

 **[download](https://github.com/senwmn/ezPopup/archive/main.zip) a clone** of this project and manually link them in your project.

Be sure to add them to all the pages you want to use the plugin on, add the CSS in the head and the script below the closing body tag. Its also a good idea to load the script for this plugin before your own local script file.


***

#### 1. Link your own local .js file and create a new object of the ezPopup class:

    var variableName = new ezPopup({
     // Leaving blank will automatically override with the default options
    });

#### 2. Add content you want to appear in your popup either manually inside the 'content' value **or** referring from a HTML block:
### Manually insert:
     
    var variableName = new ezPopup({     
        content: 'content to appear in my popup'
     });

### Or grab from HTML structure:
    <div class="ez" id="test">
      <p>content to appear in my popup</p> 
      <img src="path/to/image/image.jpg" alt="">
    </div>

Simply add the class of 'ez' to any div or element that will wrap the content you want to appear in your popup. Its also important to add a unique ID to each block you wish to be used as a template for ezPopup, you can then refer back to it later on.

Naturally, you will be able to achieve much more advanced content in your popup if you insert using the HTMl way, including images, videos and any HTML tag you can think of. 

Then assign the HTML block to the content value inside the ezPopup object:
 
    var a = document.getElementById('test'); 
    var variableName = new ezPopup({ content: a })

#### 3.  Attach a trigger so your popup knows when to pop-up:

    <div class="trigger" id="click-me">  
      <span>Open popup</span>  
    </div>
    (This can be any HTML tag that follows your projects styling so its super flexible).

Then attach any event listener you like:

    document.querySelector('.trigger').addEventListener('click',function(){ 
        variableName.open();  
    })

    NOTE: It doesn't matter how you target the trigger element, you could use getElementById(), QuerySelector(), add a onclick() handler in 
    the HTML or you could even use JQuery if that's more your cup of tea.

### That's it, you have a popup in 3 simple steps!


***

### Available options 

Here's the current full list of options you can play around with:

    var variableName = new ezPopup({  
  
        // core / basic 

        content: 'example content', -> The content for the popup, accepts string or stored JS variable
        ignoreTrigger: false, -> If set to true, will trigger popup as soon as the page loads, good for site notices etc
        closeButton: true, -> If set to false, the popup close button will not be shown, user can still close though
        overlay: true, -> If set to false, the popup will not have a background overlay
        minWidth: 200, -> Sets the min width the popup is allowed to be, takes a number value
        maxWidth: 800, -> Sets the max width the popup is allowed to be, takes a number value
        
        // asthetics

        color: '#fff', -> Sets the primary text colour inside the popup area
        secondaryColor: 'green', -> Sets the secondary / accent colour
        background: '#000', -> Sets the background colour of the content area
        overlayColor: '#000', -> Sets the overlay colour
        overlayOpacity: 0.6, -> Sets the overlay opacity
        spacing: 35, -> Sets the active padding between the content and content box, can use % based value if given as a string,
        flow: 'left', -> Sets the direction the content will flow
       
        // conditionals & misc
     
        name: 'winter-promo', -> passes this value to the active popup as an ID, incase you want to do any of your own extra styling/ editing
        value1: 'Yes', -> Will only be accepted by the plugin if you have 'yesno' type set, sets the label for boolean option 1 and ID
        value2: 'No', -> -> Will only be accepted by the plugin if you have 'yesno' type set, sets the label for boolean option 2 and ID        
     });

#### You may also find a few of these methods could be useful:

    variableName.open() -> Open the popup, usually attached to an event listener
    variableName.close() -> close the popup, automatically bound to the close button, but you can also add to other elements
    variableName.empty() -> Removes the current content inside the popup
    variableName.change('text has changed') -> Changes the current content inside the popup, can take a string or JS variabe
    
    
    
This was built for fun, and I may add more features in the future.
