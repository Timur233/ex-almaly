export default function usePhoneMask() {
    let isValid = false;
    let isWarning = true;
    let phone = '';

    const validatePhone = (value) => {
        const numberCodes = [
            '710', '711', '712', '713', '714',
            '715', '716', '717', '718', '721',
            '722', '723', '724', '725', '726',
            '727', '728', '729', '736', '700',
            '701', '702', '703', '704', '705',
            '706', '707', '708', '709', '747',
            '750', '751', '760', '761', '762',
            '763', '764', '771', '775', '776',
            '777', '778',
        ];
        const x = value.replace(/\D/g, '')
            .match(/(^\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

        phone = !x[3]
            ? `+${x[1]}${x[2]}`
            : `+${x[1]} (${x[2]}) ${x[3]}${x[4]
                ? `-${x[4]}`
                : ''}${x[5]
                    ? `-${x[5]}`
                    : ''}`;
        isWarning = !(x[3] && ((x[1] !== '7') || (numberCodes.indexOf(x[2]) === -1)));
        isValid = x[5].length === 2;

        return {
            value: phone,
            isWarning,
            isValid,
        };
    };

    return {
        validate: validatePhone,
    };
}
