
verifyUrl = (u) => {
	let c = /http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
	let re = new RegExp(c);
	if (!re.test(u)) {
		return false;
	}
	else {
		return true;
	}
}
