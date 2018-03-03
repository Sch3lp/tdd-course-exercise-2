describe("url matching", () => {

	it("should verify with http", () => {
		expect(verifyUrl('http://www.thundercats.com')).toBe(true);
	});

	it("should verify ending url with dot should fail", () => {
		expect(verifyUrl('http://.')).toBe(false);
	});

	it("should verify url without http or https should fail", () => {
		expect(verifyUrl('google.com')).toBe(false);
	});

	it("should verify that an IP address is not a valid url", () => {
		expect(verifyUrl('127.0.0.1')).toBe(false);
	});

	it("should verify url without domain should fail", () => {
		expect(verifyUrl('http://')).toBe(false);
	});

});
