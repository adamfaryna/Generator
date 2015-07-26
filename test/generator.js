'use strict';

describe('Generator', function () {
  var generator;

  beforeAll(function () {
    generator = Generator();
  });

  describe("is able to fill content with elements", function () {
    var childElements;

    beforeEach(function () {
      setFixtures('<div id="content"></div>');
      generator.fillContainerWithElems('content');
      childElements = $('#content .parent').children();
    });

    it('its generate exactly 100 elements', function () {
      var result = childElements.length;
      expect(result).toBe(100);
    });

    it('every third generated element is marked as clickable', function () {
      throwIfChildElementsCountNotOk();

      var index = 1;
      childElements.each(function () {
        var isNThirdElement = (index % 3 === 0);
        var hasClickableClass = $(this).hasClass('clickable');
        var assertResult = (isNThirdElement === hasClickableClass);
        expect(assertResult).toBeTruthy();

        index++;
        // exit loop on first assert error
        return assertResult;
      });
    });

    it('every third generated element changes its style when clicked', function () {
      throwIfChildElementsCountNotOk();

      var index = 1;
      childElements.each(function () {
        var isNThirdElement = (index % 3 === 0);
        var isChangedAfterClicked = $(this).click().hasClass('clickable clicked');
        var assertResult = (isNThirdElement === isChangedAfterClicked);
        expect(assertResult).toBeTruthy();

        index++;
        // exit loop on first assert error
        return assertResult;
      });
    });

    function throwIfChildElementsCountNotOk() {
      if (childElements.length !== 100) {
        throw 'Test bootstrap error, expected 100 elements actual ' + childElements.length + '!';
      }
    }
  });
});
