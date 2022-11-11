export default function useUserData() {
    const url = new URL(document.location.href);
    const userData = {};
    const getCookie = (cookieName) => {
        const results = document.cookie.match(`(^|;) ?${cookieName}=([^;]*)(;|$)`);

        if (results) return (unescape(results[2]));

        return null;
    };

    // UTM DATA
    if (url.searchParams.get('utm_source')) {
        const name = 'utm_source';
        const data = url.searchParams.get('utm_source');

        userData.utm_source = { name, data };
    }

    if (url.searchParams.get('utm_medium')) {
        const name = 'utm_medium';
        const data = url.searchParams.get('utm_medium');

        userData.utm_medium = { name, data };
    }

    if (url.searchParams.get('utm_campaign')) {
        const name = 'utm_campaign';
        const data = url.searchParams.get('utm_campaign');

        userData.utm_campaign = { name, data };
    }

    if (url.searchParams.get('utm_term')) {
        const name = 'utm_term';
        const data = url.searchParams.get('utm_term');

        userData.utm_term = { name, data };
    }

    if (url.searchParams.get('utm_content')) {
        const name = 'utm_content';
        const data = url.searchParams.get('utm_content');

        userData.utm_content = { name, data };
    }

    // UserAgent
    if (window.navigator.userAgent) {
        const name = 'userAgent';
        const data = window.navigator.userAgent;

        userData.userAgent = { name, data };
    }

    // Cookie
    if (getCookie('_ga')) {
        const name = '_ga';
        let data = getCookie('_ga').split('.');

        data = `${data[data.length - 2]}.${data[data.length - 1]}`;
        // eslint-disable-next-line no-underscore-dangle
        userData._ga = { name, data };
    }

    return userData;
}
