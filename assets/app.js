$(document).ready(function(){

  $('.scrollspy').scrollSpy();

});
      
var templateParams = {
  name: 'Susan',
  notes: 'Check this out!'
};

emailjs.send('gmail', 'Website Email', this)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });