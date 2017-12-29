//LITERAL MATCHES
var str = 'catdogcat';
var regex = /cat/g;
//regex = /cat/ runs infinite loop in display; reason: end is not found due to missing g 

//CHARACTER CLASSES
str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-';
regex = /[aeiou]/g;
regex = /[aeiou]/gi;
regex = /[a-cV-Y0-5]/g;
regex = /[^a-z]/g;
//regex = /^[a-z]/g;
regex = /[\-a-c]/g;	//\ is an escape character
regex = /[a-c-]/g;	//donot need escape char. when - is in end

str = '!@#$%^&*)(ABCDefgh789';
regex = /[@^&*]/g;
regex = /[\ -~]/g;	//selects everything in between space and tilde in ASCII table

//ALTERNATIONS
str ='cat dog fish';
regex = /cat|dog/g;
regex = /cat|dog|fish|bird/g;

//METACHARACTERS
str = '.on our way home\nthis is where';
regex = /./g;	// . represents everything except new line character
regex = /\./g;	// matches '.'

str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.?,/!@$%^&*()+~`		\n   =[]';
regex = /\w/g;	// same as /[a-zA-Z0-9_]/g;
regex = /\W/g;	// same as /[^a-zA-Z0-9_]/g;
regex = /\d/g;	// same as /[0-9]/g;
regex = /\D/g;	// same as /[^0-9]/g;
regex = /\t/g;	// for tab
regex = /\n/g;	// for new line
regex = /\s/g;	// for space - all kinds of spaces - tab, new line, space
regex = /\S/g;	// everything apart from space
regex = /\ /g;  // space (using escape character for safety, escape char. isn't necessary); not for tabs, new lines
regex = /\[\]/g;// matches []

//QUANTIFIERS
//* -> 0 or more times ; + -> 1 or more times
str = 'hello how are you? 2018';
regex = /[a-z]+/g;	// anything from a to z one or more times
//regex = /[a-z]*/g; // anything from a to z zero or more times; runs infinite loop in display
regex = /\w+/g;		// same as /[a-z]+/g
regex = /\d+/g;		// matches '2018'

str = '<p>Paragraph 1</p><p>Paragraph 2</p><p>Paragraph 3</p>';
regex = /<p>.*<\/p>/g; // matches the entire string '<p>Paragraph 1</p><p>Paragraph 2</p><p>Paragraph 3</p>'
					   // quantifiers are greedy by nature; they try to capture as much as possible
					   // in this case, .* captures everything in between first and last p tags, while we
					   // expected to capture individual p tags. The solution to this is using '?'. It
					   // makes quantifiers non greedy and minimizes the capture.
regex = /<p>.*?<\/p>/g;// matches individual p tags

str = 'http://website.com \n https://website2.com';
regex = /http:\/\/.*/g;	// matches 'http://website.com'; the scope of * breaks due to \n
regex = /http:\/\/.*|https:\/\/.*/g; // matches both 'http://website.com' and 'https://website2.com'
regex = /https?:\/\/.*/g; // matches matches both 'http://website.com' and 'https://website2.com'.
						  // '?' makes individual character before it optional. So, 's' becomes optional.	
						  
str = 'http://website.com , https://website2.com'; // matches both 'http://website.com' and 'https://website2.com'
regex = /http:\/\/.*/g;	

display(str, regex);

/*
	Displays all matches in a string
*/
function display(str, regex){
	var op;
	do{
		op = regex.exec(str);
		if(op) console.log(op);
	}while(op);
};


