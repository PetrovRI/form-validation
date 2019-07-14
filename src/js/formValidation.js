import jQuery from 'jquery';
const $ = jQuery;

$(() => {
  const form = $('.data__form');
  const cardNumberFirst = $('.card-front__num-first');
  const cardNumberSecond = $('.card-front__num-second');
  const cardNumberThird = $('.card-front__num-third');
  const cardNumberFourth = $('.card-front__num-fourth');

  const cardCustomer = $('.card-front__customer');
  const cardCode = $('.card-back__code');

  const nameValidRegExp = /^[a-z\s]+$/i;

  let validNumberFirst = false;
  let validNumberSecond = false;
  let validNumberThird = false;
  let validNumberFourth = false;
  let validCustomer = false;
  let validCode = false;

  form.submit(e => {
    e.preventDefault();

    // input validation
    if (cardNumberFirst.val() === '') {
      cardNumberFirst.addClass('error');
    } else {
      validNumberFirst = true;
    }

    if (cardNumberSecond.val() === '') {
      cardNumberSecond.addClass('error');
    } else {
      validNumberSecond = true;
    }

    if (cardNumberThird.val() === '') {
      cardNumberThird.addClass('error');
    } else {
      validNumberThird = true;
    }

    if (cardNumberFourth.val() === '') {
      cardNumberFourth.addClass('error');
    } else {
      validNumberFourth = true;
    }

    if (cardCustomer.val() === '') {
      cardCustomer.addClass('error');
    } else if (!nameValidRegExp.test(cardCustomer.val())) {
      cardCustomer.addClass('error');
      alert('Вводите только латинские символы');
    } else {
      validCustomer = true;
    }

    if (cardCode.val() === '') {
      cardCode.addClass('error');
    } else {
      validCode = true;
    }

    if (
      validNumberFirst == true &&
      validNumberSecond == true &&
      validNumberThird == true &&
      validNumberFourth == true &&
      validCustomer == true &&
      validCode == true
    ) {
      form.unbind('submit').submit();
    }
  });
});
