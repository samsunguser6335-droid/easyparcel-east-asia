import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm('xkjozqod');

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F2F4F8] to-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-black text-black mb-4">
              {t('contact.successTitle')}
            </h1>
            <p className="text-lg text-[#666666] mb-8">
              {t('contact.success')}
            </p>
            <Link
              to="/"
              className="inline-block bg-[#F9278E] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#EC2687] transition-colors"
            >
              {t('contact.backHome')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2F4F8] to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Information */}
          <div>
            <h2 className="text-3xl font-black text-black mb-6">
              {t('contact.infoTitle')}
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F9278E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#F9278E]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {t('contact.info.email')}
                  </h3>
                  <a
                    href="mailto:easyparcel.eastasia@hotmail.com"
                    className="text-[#666666] hover:text-[#F9278E] transition-colors"
                  >
                    easyparcel.eastasia@hotmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F9278E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#F9278E]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {t('contact.info.address')}
                  </h3>
                  <p className="text-[#666666]">
                    East Asia Regional Hub, Singapore
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F9278E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#F9278E]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {t('contact.info.hours')}
                  </h3>
                  <p className="text-[#666666]">
                    Mon - Fri: 9:00 AM - 6:00 PM (SGT)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              {/* Full Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  {t('contact.name')} *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9278E] focus:border-transparent transition-all"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  {t('contact.email')} *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9278E] focus:border-transparent transition-all"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                  {t('contact.subject')} *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9278E] focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Shipping Issue">Shipping Issue</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9278E] focus:border-transparent transition-all resize-none"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#F9278E] text-white font-bold py-3 rounded-lg hover:bg-[#EC2687] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t('contact.send')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
