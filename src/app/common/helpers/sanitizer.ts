var sanitizeHTML = function (str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

var pattern = RegExp("[" + "{}[]-/\\()*+?.%$|".replace(RegExp(".", "g"), "\\$&") + "]", "g");

function sanitize_for_regex(val) {
    return val.replace(pattern, "\\$&");
}

// var sanitized = JSON.stringify(userString);

// var code = 'var foo = '+sanitized+'; console.log(foo);';
// eval(code);
