// 

(function() {
 
    this.ezPopup = function() {

      this.closeButton = null;
      this.popup = null;
      this.overlay = null;
      this.transitionEnd = transitionSelect();

      var defaults = {
        name: 'ezPopup-default',
        type: 'simple',
        value1: 'Yes',
        value2: 'No',
        theme: 'none',
        content: '',
        autoOpen: false,
        animation: 'fade-and-drop',
        closeButton: true,
        align: 'left',
        maxWidth: 600,
        minWidth: 280,
        color: '#fff',
        secondaryColor: '#e74c3c',
        background: '#000',
        spacing: 35,
        overlay: true,
        overlayColor: '#000',
        overlayOpacity: 0.6
      }

      if (arguments[0] && typeof arguments[0] === "object") {
        this.options = extendDefaults(defaults, arguments[0]);
      }  
      if(this.options.autoOpen === true) this.open();
  
    }
  
    ezPopup.prototype.close = function() {
      var _ = this;
      this.popup.className = this.popup.className.replace(" ezpopup-open", "");
      this.overlay.className = this.overlay.className.replace(" ezpopup-open","");
      this.overlay.style.opacity = 0;
      this.popup.addEventListener(this.transitionEnd, function() {
        _.popup.parentNode.removeChild(_.popup);
      });
      this.overlay.addEventListener(this.transitionEnd, function() {
        if(_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
      });
    }
  
    ezPopup.prototype.open = function() {
      startPopup.call(this);
      initializeEvents.call(this);
      window.getComputedStyle(this.popup).height;
      this.popup.className = this.popup.className +
        (this.popup.offsetHeight > window.innerHeight ?
          " ezpopup-open ezpopup-anchored" : " ezpopup-open");
      this.overlay.className = this.overlay.className + " ezpopup-open";
    }

    function startPopup() {
      var content, contentHolder, docFrag;  
      if (typeof this.options.content === "string") {
        content = this.options.content;
      } else {
        content = this.options.content.innerHTML;
      }

      docFrag = document.createDocumentFragment();
  
      this.popup = document.createElement("div");
      this.popup.className = "ezpopup-popup " + this.options.animation;
      this.popup.id = this.options.name.toLowerCase();
      this.popup.style.minWidth = this.options.minWidth + "px";
      this.popup.style.maxWidth = this.options.maxWidth + "px";
      this.popup.style.background = this.options.background;
      this.popup.style.color = this.options.color;
      this.popup.style.textAlign = this.options.align;
      this.popup.style.padding = this.options.spacing + "px";

   
      if (this.options.closeButton === true) {
        this.closeButton = document.createElement("button");
        this.closeButton.className = "ezpopup-close ezpopup-button";
        this.closeButton.innerHTML = "&times;";
        this.closeButton.style.background = this.options.secondaryColor;
        this.closeButton.style.color = this.options.color;
        this.popup.appendChild(this.closeButton);
      } 
  
      if (this.options.overlay === true) {
        this.overlay = document.createElement("div");
        this.overlay.className = "ezpopup-overlay " + this.options.animation;
        this.overlay.style.background = this.options.overlayColor;
        this.overlay.style.opacity = this.options.overlayOpacity;
        docFrag.appendChild(this.overlay);
      }

      if (this.options.animation === true) {
        this.popup.className = 'ezpopup-popup fade-and-drop';
      }
  
      contentHolder = document.createElement("div");
      contentHolder.className = "ezpopup-content";
      contentHolder.innerHTML = content;
      this.popup.appendChild(contentHolder);
      docFrag.appendChild(this.popup);  
      document.body.appendChild(docFrag);


      if (this.options.type === 'yesno' || this.options.type === 'yn' ){
        this.closeButton.style.display = 'none';
        var y = document.createElement("button");
        var n = document.createElement("button");
        y.className= 'ez-option';
        n.className= 'ez-option';
        y.id ='ez-' + this.options.value1.toLowerCase();
        n.id = 'ez-' + this.options.value2.toLowerCase();
        y.innerHTML = this.options.value1;
        n.innerHTML = this.options.value2;
        this.popup.appendChild(y);
        this.popup.appendChild(n);
      }

    }

    ezPopup.prototype.empty = function() {
      this.options.content.innerHTML = "";
    }

    ezPopup.prototype.change = function(c) {
      this.options.content.innerHTML = c;
    }
  
    function extendDefaults(source, properties) {
      var property;
      for (property in properties) {
        if (properties.hasOwnProperty(property)) {
          source[property] = properties[property];
        }
      }
      return source;
    }
  
    function initializeEvents() {
      if (this.closeButton) {
        this.closeButton.addEventListener('click', this.close.bind(this));
      }
      if (this.overlay) {
        this.overlay.addEventListener('click', this.close.bind(this));
      }
    }
  
    function transitionSelect() {
      var el = document.createElement("div");
      if (el.style.WebkitTransition) return "webkitTransitionEnd";
      if (el.style.OTransition) return "oTransitionEnd";
      return 'transitionend';
    }
  
  }());