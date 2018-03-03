package be.schelp.urls;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class VerifierTest {

    @Test
    void verifyUrl_WithHTTP_ShouldSucceed() {
        assertThat(Verifier.verifyUrl("http://www.thundercats.com")).isTrue();
    }

    @Test
    void verifyUrl_URLEndingInDot_ShouldFail() {
        assertThat(Verifier.verifyUrl("http://.")).isFalse();
    }

    @Test
    void verifyUrl_URLWithoutHttpOrHttps_ShouldFail() {
        assertThat(Verifier.verifyUrl("google.com")).isFalse();
    }

    @Test
    void verifyUrl_WithAnIPAddress_ShouldFail() {
        assertThat(Verifier.verifyUrl("127.0.0.1")).isFalse();
    }

    @Test
    void verifyUrl_URLWithoutDomain_ShouldFail() {
        assertThat(Verifier.verifyUrl("http://")).isFalse();
    }

}