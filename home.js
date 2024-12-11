(function() {
  
  function timeline() {
    var timeline = document.querySelector('#timeline-1');
    var items = timeline.querySelectorAll('.timeline-item');
    var activeClass = 'timeline-item--active';
    var imgSelector = '.timeline__img';

   
    items[0].classList.add(activeClass);
    timeline.style.backgroundImage = "url(" + items[0].querySelector(imgSelector).src + ")";

    var itemLength = items.length;


    window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;

      items.forEach(function(item, index) {
        var itemTop = item.offsetTop;
        var itemHeight = item.offsetHeight;
        var itemBottom = itemTop + itemHeight;

       
        if (index === itemLength - 2 && scrollPosition > itemTop + itemHeight / 2) {
          
          setBackgroundImage(items[itemLength - 1], imgSelector);
          setActiveClass(items[itemLength - 1], activeClass);
        } else if (scrollPosition <= itemBottom - 40 && scrollPosition >= itemTop) {
        
          setBackgroundImage(item, imgSelector);
          setActiveClass(item, activeClass);
        }
      });
    });


    function setBackgroundImage(item, imgSelector) {
      var img = item.querySelector(imgSelector);
      if (img) {
        timeline.style.backgroundImage = "url(" + img.src + ")";
      }
    }

    
    function setActiveClass(item, activeClass) {
      items.forEach(function(i) {
        i.classList.remove(activeClass);
      });
      item.classList.add(activeClass);
    }
  }

 
  document.addEventListener('DOMContentLoaded', function() {
    timeline();
  });
})();



