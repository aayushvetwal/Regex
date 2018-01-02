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

//ITERATION
str = '4444';
regex = /4{4}/g;	// looks for '4' repeated four times
regex = /4{2,4}/g;  // matches '4' repeated two to four times. Here, you can notice that {2,4} is greedy. It's 
					// matching four repetitions by default.
regex = /4{2,4}?/g;	// appending ? makes {2,4} non greedy; now it looks for two repetitions first.

str = '444444';
regex = /4{2,4}/g;	// matches '4444' and '44'

str = 'hello john';
regex = /\w{5}/g;	// matches 'hello'

//CAPTURE GROUPS
// A capture group grabs a segment and saves it to memory and also has the added effect of assigning a variable
// to it. That variable starts at 1 and increments to 9.


str = 'catcatcat';
regex = /(cat)\1/g;	// (cat) captures all the 'cat's in str and assigns them to variables 1, 2 and 3 respectively.
					// Here, \1 refers to the first 'cat' captured. Therefore, /(cat)\1/g is equivalent to /catcat/g
					// javascript 'exec' function also returns the captured phrase in the array along with output.

str = 'http://foo.com/blah_blah http://anotherwebsite.com/blah_blah/ http://website2.com/blah_blah_(wikipedia) ' +
	  'http://website3.com/blah_blah_(wikipedia)_(again) http://www.example.com/wpstyle/?p=364 ' +
	  'http://www.example2.com/foo/?bar=baz';
regex = /https?:\/\/([^/]+)/g; 		  

//NON-CAPTURE GROUPS
// A non-capture group is same as the capture group but it doesn't capture matches to the memory.

str = 'hellohello';
regex = /(?:hello)/g;	// '?:' makes the group non-capturing.
regex = /(?:hello)\1/g; // '\1' has no effect here because there is no variable being saved with the contents of
						// capture 'hello'
regex = /(?:hello){2}/g;// matches 'hello' repeated two times without capturing anything in memory 				

//LOOKAROUNDS - POSITIVE LOOK AHEAD
str = 'silly cat\nhappy cat\ncool cat\ncool dog\ncool bird\ncool fish\nfun cat';
regex = /cool(?=\ cat)/g;	// matches 'cool' only if it has ' cat' ahead of it. only matches 'ccol' of 'cool cat'.

//LOOKAROUNDS - NEGATIVE LOOK AHEAD
regex = /cool(?!\ cat)/g;	// matches all the 'cool's without ' cat' ahead of it.

//LOOKAROUNDS - POSITIVE LOOK BEHIND
//Missing in javascript. example: /(?<=cool\ )cat

//LOOKAROUNDS - NEGATIVE LOOK BEHIND
//Missing in javascript. example: /(?<!cool\ )cat

//WORD BOUNDARIES
str = 'woohoo woo hoo';
regex = /woo\b/g;	// '\b' looks for word boundaries. it matches the instances where word character transitions to  
					// non-word. So, it doesn't match 'woo' in 'woohoo' but matches 'woo' in 'woo hoo' as 'o' transitions
					// to space character.
					
//ANCHORS
// Anchors match start or end of a string. The two special characters that do that are carat(^ - start of string) and
// dollar($ - end of string).
str = 'This is a string. This is nice.';
regex = /^This/g;	// matches 'This' at start of string.
regex = /^\w+/g; 	// matches any \w group or word character at start of string. ('This' in this case)
regex = /\w+.$/g;	// matches any word character at the end of string. ('nice.' in this case)
regex = /nice.$/g;	// matches 'nice.' at the end of the string.

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


