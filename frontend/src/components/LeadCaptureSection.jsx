import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { submitLeadForm } from '../utils/mock';

const LeadCaptureSection = ({ language, translations }) => {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    village: '',
    concern: '',
    volunteer: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate concern is selected
    if (!formData.concern) {
      alert(language === 'en' ? 'Please select your primary concern' : 'தயவுசெய்து உங்கள் முக்கிய கவலையைத் தேர்ந்தெடுக்கவும்');
      return;
    }
    
    setIsSubmitting(true);

    try {
      await submitLeadForm(formData);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        village: '',
        concern: '',
        volunteer: false
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join" className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.leadCapture.headline}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t.leadCapture.description}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-orange-100">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={48} className="text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t.leadCapture.successMessage}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'We look forward to building Radhapuram together!' 
                  : 'ராதாபுரத்தை ஒன்றாக கட்டமைக்க ஆவலுடன் காத்திருக்கிறோம்!'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-gray-900 font-semibold mb-2 block">
                  {t.leadCapture.formFields.name} *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 text-base border-2 border-gray-200 focus:border-orange-500 rounded-xl"
                  placeholder={language === 'en' ? 'Enter your name' : 'உங்கள் பெயரை உள்ளிடுக'}
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-gray-900 font-semibold mb-2 block">
                  {t.leadCapture.formFields.phone} *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 text-base border-2 border-gray-200 focus:border-orange-500 rounded-xl"
                  placeholder={language === 'en' ? '10-digit mobile number' : '10 இலக்க மொபைல் எண்'}
                />
              </div>

              {/* Village */}
              <div>
                <Label htmlFor="village" className="text-gray-900 font-semibold mb-2 block">
                  {t.leadCapture.formFields.village} *
                </Label>
                <Input
                  id="village"
                  type="text"
                  required
                  value={formData.village}
                  onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                  className="h-12 text-base border-2 border-gray-200 focus:border-orange-500 rounded-xl"
                  placeholder={language === 'en' ? 'Your village or area' : 'உங்கள் கிராமம் அல்லது பகுதி'}
                />
              </div>

              {/* Primary Concern */}
              <div>
                <Label htmlFor="concern" className="text-gray-900 font-semibold mb-2 block">
                  {t.leadCapture.formFields.concern} *
                </Label>
                <Select
                  value={formData.concern}
                  onValueChange={(value) => setFormData({ ...formData, concern: value })}
                  required
                >
                  <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-orange-500 rounded-xl">
                    <SelectValue placeholder={language === 'en' ? 'Select your primary concern' : 'உங்கள் முதன்மை கவலையைத் தேர்ந்தெடுக்கவும்'} />
                  </SelectTrigger>
                  <SelectContent>
                    {t.leadCapture.concerns.map((concern, index) => (
                      <SelectItem key={index} value={concern}>
                        {concern}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Volunteer Checkbox */}
              <div className="flex items-center space-x-3 bg-orange-50 p-4 rounded-xl">
                <Checkbox
                  id="volunteer"
                  checked={formData.volunteer}
                  onCheckedChange={(checked) => setFormData({ ...formData, volunteer: checked })}
                  className="border-2 border-orange-500 data-[state=checked]:bg-orange-600"
                />
                <Label htmlFor="volunteer" className="text-gray-900 font-semibold cursor-pointer">
                  {t.leadCapture.formFields.volunteer}
                </Label>
              </div>

              {/* Privacy Note */}
              <p className="text-sm text-gray-600 text-center">
                {t.leadCapture.privacy}
              </p>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    {language === 'en' ? 'Submitting...' : 'சமர்ப்பிக்கிறது...'}
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    {t.leadCapture.submitButton}
                    <Send className="ml-2" size={20} />
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
