'use strict';

function Generator() {

  var generateDivWithElems = function () {
    var $parent = $(document.createElement('div'));
    $parent.addClass('parent');

    for (var i = 1; i < 101; i++) {
      var $elem = $(document.createElement('span'));

      if (i % 3 === 0) {
        $elem.text(i + ' Click Me!').addClass('clickable');

      } else {
        $elem.text(i);
      }

      $parent.append($elem);
    }


    return $parent;
  };

  var setEvents = function ($parentDiv) {
    $('.clickable', $parentDiv).on('click', function () {
      var $this = $(this);

      if ($this.hasClass('clicked')) {
        $this.removeClass('clicked');

      } else {
        $this.addClass('clicked');
      }
    });
  };

  var fillContainerWithElems = function (containerId) {
    var $divWithElems = generateDivWithElems();
    setEvents($divWithElems);

    $('#' + containerId).append($divWithElems);
  };

  return {
    fillContainerWithElems: fillContainerWithElems
  };
}
