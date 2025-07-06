'use client'
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    message: '',
    preferredTime: '',
    preferredMethod: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isRobotChecked, setIsRobotChecked] = useState(false);

  const countryCodes = [
    { code: '+1', country: 'US/CA', format: '(XXX) XXX-XXXX', length: 10 },
    { code: '+44', country: 'UK', format: 'XXXX XXX XXXX', length: 10 },
    { code: '+91', country: 'IND', format: 'XXXXX XXXXX', length: 10 },
    { code: '+49', country: 'GER', format: 'XXX XXXXXXX', length: 10 },
    { code: '+33', country: 'FRA', format: 'XX XX XX XX XX', length: 10 },
    { code: '+81', country: 'JPN', format: 'XX-XXXX-XXXX', length: 10 },
    { code: '+86', country: 'CHN', format: 'XXX XXXX XXXX', length: 11 },
    { code: '+61', country: 'AUS', format: 'XXX XXX XXX', length: 9 },
    { code: '+55', country: 'BRA', format: 'XX XXXXX-XXXX', length: 11 },
    { code: '+7', country: 'RUS', format: 'XXX XXX-XX-XX', length: 10 },
    { code: '+971', country: 'UAE', format: 'XX XXX XXXX', length: 9 },
    { code: '+966', country: 'SAU', format: 'XX XXX XXXX', length: 9 },
    { code: '+62', country: 'IDN', format: 'XXX-XXX-XXXX', length: 10 },
    { code: '+82', country: 'KOR', format: 'XX-XXXX-XXXX', length: 10 },
    { code: '+52', country: 'MEX', format: 'XXX XXX XXXX', length: 10 },
    { code: '+39', country: 'ITA', format: 'XXX XXX XXXX', length: 10 },
    { code: '+34', country: 'ESP', format: 'XXX XXX XXX', length: 9 },
    { code: '+31', country: 'NLD', format: 'XX XXX XXXX', length: 9 },
    { code: '+90', country: 'TUR', format: 'XXX XXX XX XX', length: 10 },
    { code: '+20', country: 'EGY', format: 'XXX XXX XXXX', length: 10 }
  ];

  const formatPhoneNumber = (value, countryCode) => {
    const country = countryCodes.find(c => c.code === countryCode);
    if (!country) return value;

    const numbers = value.replace(/\D/g, '');
    const format = country.format;
    let formatted = '';
    let numIndex = 0;

    for (let i = 0; i < format.length && numIndex < numbers.length; i++) {
      if (format[i] === 'X') {
        formatted += numbers[numIndex];
        numIndex++;
      } else {
        formatted += format[i];
      }
    }

    return formatted;
  };

  const validatePhoneNumber = (phone, countryCode) => {
    const country = countryCodes.find(c => c.code === countryCode);
    if (!country) return false;
    
    const numbers = phone.replace(/\D/g, '');
    return numbers.length === country.length;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhoneNumber(formData.phone, formData.countryCode)) {
      const country = countryCodes.find(c => c.code === formData.countryCode);
      newErrors.phone = `Please enter a valid ${country?.country} phone number (${country?.format})`;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required';
    }
    
    if (!formData.preferredMethod) {
      newErrors.preferredMethod = 'Please select a preferred contact method';
    }
    
    if (!isRobotChecked) {
      newErrors.recaptcha = 'Please verify you are not a robot';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formatted = formatPhoneNumber(value, formData.countryCode);
      setFormData(prev => ({
        ...prev,
        [name]: formatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6">
        <div className="bg-white p-6 sm:p-8 rounded-lg border-2 border-green-600 max-w-md w-full text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            Your message has been sent successfully. Dr. Norman will be in touch with you soon.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setIsRobotChecked(false);
              setErrors({});
              setFormData({
                name: '',
                email: '',
                countryCode: '+1',
                phone: '',
                message: '',
                preferredTime: '',
                preferredMethod: ''
              });
            }}
            className="bg-green-700 text-white px-6 py-3 rounded text-sm sm:text-base hover:bg-green-800 transition-colors w-full sm:w-auto"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6">
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg border-2 border-gray-300 max-w-2xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-4 sm:mb-6">
          Get In Touch
        </h1>
        
        <p className="text-center text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
          Simply fill out the brief fields below and Dr. Norman will be in touch with you soon, 
          usually within one business day. This form is safe, private, and completely free.
        </p>

        <div className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors placeholder-gray-400 text-sm sm:text-base ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors placeholder-gray-400 text-sm sm:text-base ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <div className="flex gap-2">
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={(e) => {
                  setFormData(prev => ({
                    ...prev,
                    countryCode: e.target.value,
                    phone: '' // Clear phone when country changes
                  }));
                  if (errors.phone) {
                    setErrors(prev => ({
                      ...prev,
                      phone: ''
                    }));
                  }
                }}
                className="px-2 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white w-20 sm:w-24 text-xs sm:text-sm"
              >
                {countryCodes.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.code} {country.country}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={countryCodes.find(c => c.code === formData.countryCode)?.format || "(555) 234-5678"}
                required
                className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors placeholder-gray-400 text-sm sm:text-base ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="How can I help you?"
              rows={4}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors placeholder-gray-400 resize-none text-sm sm:text-base ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Time
            </label>
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors placeholder-gray-400 text-sm sm:text-base ${
                errors.preferredTime ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.preferredTime && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.preferredTime}</p>}
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Let us know when you're typically available for a call or consultation
            </p>
          </div>

          <div>
            <label htmlFor="preferredMethod" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <select
              id="preferredMethod"
              name="preferredMethod"
              value={formData.preferredMethod}
              onChange={handleInputChange}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white text-sm sm:text-base ${
                errors.preferredMethod ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select preferred method</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="text">Text Message</option>
              <option value="either">Either Phone or Email</option>
            </select>
            {errors.preferredMethod && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.preferredMethod}</p>}
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="recaptcha"
              checked={isRobotChecked}
              onChange={(e) => {
                setIsRobotChecked(e.target.checked);
                if (errors.recaptcha) {
                  setErrors(prev => ({
                    ...prev,
                    recaptcha: ''
                  }));
                }
              }}
              required
              className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500 mt-0.5"
            />
            <label htmlFor="recaptcha" className="text-xs sm:text-sm text-gray-700">
              I'm not a robot
            </label>
          </div>
          {errors.recaptcha && <p className="text-red-500 text-xs sm:text-sm -mt-2">{errors.recaptcha}</p>}

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-green-700 text-white py-3 sm:py-4 px-6 rounded-lg text-base sm:text-lg font-medium hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          <div className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border border-gray-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
            </div>
            <p>
              By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}