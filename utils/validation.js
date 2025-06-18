/**
 * Validates an email address
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates an Indian phone number
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - Whether the phone number is valid
 */
const isValidPhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
};

/**
 * Validates the consultation form data
 * @param {Object} formData - The form data to validate
 * @returns {Object} - Validation result with errors if any
 */
const validateConsultationForm = (formData) => {
    const errors = {};

    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.mobile || !isValidPhone(formData.mobile)) {
        errors.mobile = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!formData.email || !isValidEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!formData.location || formData.location.trim().length < 3) {
        errors.location = 'Please enter a valid location';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

module.exports = {
    isValidEmail,
    isValidPhone,
    validateConsultationForm
}; 