'use strict';

/**
 * Elements generator.
 */
function Generator() {

  /**
   * Fills container element with ID <strong>containerId</strong> with generated elements.
   * @param containerId {string} container ID.
   */
  var fillContainerWithElems = function (containerId) {
    var $divWithElems = generateDivWithElems();
    setEvents($divWithElems);
    $('#' + containerId).append($divWithElems);
  };

  var generateDivWithElems = function () {
    var $parent = $(document.createElement('div'));
    $parent.addClass('parent');

    for (var i = 1; i < 101; i++) {
      var $elem = generateElem(i);
      $parent.append($elem);
    }

    return $parent;
  };

  var generateElem = function (index) {
    var $elem = $(document.createElement('span'));

    if (index % 3 === 0) {
      $elem.text(index + ' Click Me!').addClass('clickable');

    } else {
      $elem.text(index);
    }

    return $elem;
  };

  var setEvents = function ($parentDiv) {
    $('.clickable', $parentDiv).on('click', function () {
      $(this).toggleClass('clicked');
    });
  };

  return {
    fillContainerWithElems: fillContainerWithElems
  };
}
