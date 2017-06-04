import LIVR from 'livr';

const defaultRules = {
    'object_id'() {
        return value => {
            if (value === undefined || value === null || value === '') return;
            if (typeof value !== 'string') return 'FORMAT_ERROR';
            if (value.length < 24) return 'WRONG_ID';
            if (value.length > 24) return 'WRONG_ID';
            if (value.match(/[^a-f0-9]/)) return 'WRONG_ID';
        };
    }
};

LIVR.Validator.registerDefaultRules(defaultRules);
