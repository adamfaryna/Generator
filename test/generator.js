'use strict';

describe('Generator', function () {
  var generator;

  beforeAll(function () {
    generator = Generator();
    setFixtures('<div id="content"></div>');
  });

  describe("is able to fill content with elems", function () {

    beforeAll(function () {
      generator.fillContainerWithElems('content');
    });

    it('its generate exactly 100 elements', function () {
      var result = $('#content .parent').children().length;
      expect(result).toBe(100);
    });

    it('every third generated element changes its style when clicked', function () {
      var index = 1;

      console.log("aaaaaaaaaaa");

      $('#content .parent').children().each(function () {
        console.log("index: " + index);

        var $this = $(this);
        var hasClickableClass = $this.hasClass('clickable');


        if (index % 3 === 0) {
          expect(hasClickableClass).toBe(true);

        } else {
          expect(hasClickableClass).toBe(false);
        }

        index++;
      });
    });
  });
});
