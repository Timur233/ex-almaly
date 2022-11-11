import { ref, watchEffect } from 'vue';
import usePhoneMask from './phoneMask';

export default function useForm() {
    const name = ref('');
    const phone = ref('');
    const isPhoneValid = ref('');
    const isFormValid = ref(true);
    const phoneMask = usePhoneMask();

    watchEffect(() => {
        const validate = phoneMask.validate(phone.value);

        phone.value = validate.value !== '+' ? validate.value : '';
        isPhoneValid.value = validate.isWarning;
        isFormValid.value = validate.isValid;
    });

    return {
        phone,
        name,
        isPhoneValid,
        isValid: isFormValid,
    };
}
