function convert_char(ch) {
    var cc = ch.charCodeAt(0);
    if (((cc >= 65) && (cc <= 90)) || ((cc >= 97) && (cc <= 122))) {
	return ":regional_indicator_" + ch.toLowerCase() + ": ";
    } else if (cc == 32) {
	return "  ";
    } else if (cc == 48) {
	return ":zero: ";
    } else if (cc == 49) {
	return ":one: ";
    } else if (cc == 50) {
	return ":two: ";
    } else if (cc == 51) {
	return ":three: ";
    } else if (cc == 52) {
	return ":four: ";
    } else if (cc == 53) {
	return ":five: ";
    } else if (cc == 54) {
	return ":six: ";
    } else if (cc == 55) {
	return ":seven: ";
    } else if (cc == 56) {
	return ":eight: ";
    } else if (cc == 57) {
	return ":nine: ";
    } else {
	return "";
    }
}

function convert_string(msg) {
    var converted_msg = "";
    for (var i = 0; i < msg.length; i++) {
	var ch = msg.charAt(i);

	converted_msg += convert_char(ch);
    }

    return converted_msg;
}

function go() {
    var msg_elem = document.getElementById("msg");
    var result_elem = document.getElementById("result");

    var msg = msg_elem.value;
    var result = convert_string(msg);
    result_elem.value = result;
}
	
