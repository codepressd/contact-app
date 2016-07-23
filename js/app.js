var Contacts = {

	listOfContacts:[
		{
			firstName : 'fake',
			lastName : 'faker',
			phoneNumber: 'still fake'
		},

	],

	addContact: function (firstname, lastname, phonenumber){
		var newContact = {};

		newContact.firstName = firstname;
		newContact.lastName = lastname;
		newContact.phoneNumber = phonenumber;
		Contacts.listOfContacts.push(newContact);
		
	}

};

/*On page*/

$(document).ready(function(){
	$('form').on('submit', function(event){
		event.preventDefault();
		var firstname = $('.firstname').val();
		var lastname  = $('.lastname').val();
		var phonenumber = $('.phone').val();
		Contacts.addContact(firstname, lastname, phonenumber);



	});
});