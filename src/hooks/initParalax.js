import useParalax from './paralax';

export default function useInitParalax($refs) {
    return useParalax([
        {
            name:  'slider',
            start: 0,
            end:   50,
            el:    $refs.sliderSection,
        },
        {
            name:  'pay_methods',
            start: 20,
            end:   0,
            el:    $refs.payMethods,
        },
        {
            name:  'pay_methods_two',
            start: 10,
            end:   0,
            el:    $refs.payMethods,
        },
        {
            name:  'commerce',
            start: 20,
            end:   0,
            el:    $refs.commerceBlock,
        },
        {
            name:  'commerce_two',
            start: 10,
            end:   0,
            el:    $refs.commerceBlock,
        },
        {
            name:  'about_project',
            start: -10,
            end:   0,
            el:    $refs.aboutProject,
        },
        {
            name:  'main_callback',
            start: 20,
            end:   0,
            el:    $refs.mainCallback,
        },
        {
            name:  'main_callback_two',
            start: 10,
            end:   0,
            el:    $refs.mainCallback,
        },
        {
            name:  'main_callback_three',
            start: 0,
            end:   20,
            el:    $refs.mainCallback,
        },
        {
            name:  'appartaments',
            start: 0,
            end:   20,
            el:    $refs.appartaments,
        },
        {
            name:  'about_company',
            start: 0,
            end:   20,
            el:    $refs.aboutCompany,
        },
        {
            name:  'about_company_two',
            start: 0,
            end:   20,
            el:    $refs.aboutCompany,
        },
    ]);
}
