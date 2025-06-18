// Email Templates
const EMAIL_TEMPLATES = {
    CONSULTATION_REQUEST: {
        subject: 'New Consultation Request - Sri Sai Interiors',
        successMessage: 'Thank you for your interest! We will contact you shortly.',
        errorMessage: 'Sorry, there was an error submitting your request. Please try again.'
    }
};

// Form Configuration
const FORM_CONFIG = {
    homeTypes: ['1BHK', '2BHK', '3BHK', '4BHK', 'Villa', 'Commercial'],
    defaultHomeType: '2BHK'
};

// Validation Messages
const VALIDATION_MESSAGES = {
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    invalidPhone: 'Please enter a valid 10-digit Indian phone number',
    minLength: (field, length) => `${field} must be at least ${length} characters long`
};

module.exports = {
    EMAIL_TEMPLATES,
    FORM_CONFIG,
    VALIDATION_MESSAGES
}; 