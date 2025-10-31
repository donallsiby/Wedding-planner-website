import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', date: '', message: '' });
    setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { name, email, date, message } = formData;

      // ✅ Your WhatsApp number (without "+" or spaces)
      const phoneNumber = '919567955459';

      const fullMessage = `Hi Global Wedding Planners Team 👋,

I'm interested in planning my wedding with your team! Here are my details:

👤 Name: ${name}
📧 Email: ${email}
📅 Wedding Date: ${date || 'Not specified'}
💬 Message:
${message}

Looking forward to hearing from you!`;

      const encodedMessage = encodeURIComponent(fullMessage);
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp chat (mobile app or web.whatsapp.com)
      window.open(whatsappLink, '_blank');
      setStatus('success');
    } catch (err) {
      console.error('Error creating WhatsApp link:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-black mb-6">
            Let's Plan Your Perfect Day
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-10">
            We would be delighted to hear about your wedding plans. Fill out the form below,
            and we'll be in touch to schedule a complimentary consultation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow">
          {status === 'success' ? (
            <div className="text-center">
              <h3 className="text-2xl font-playfair text-brand-primary mb-2">
                Redirecting to WhatsApp...
              </h3>
              <p className="text-gray-600">
                If WhatsApp didn’t open automatically, click below to chat with us.
              </p>
              <a
                href={`https://wa.me/919567955459`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
              >
                Open WhatsApp Chat
              </a>
              <button
                onClick={handleReset}
                className="mt-4 px-4 py-2 rounded bg-gray-300 text-black hover:bg-gray-400 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-3 rounded border w-full focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="p-3 rounded border w-full focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                  required
                />
              </div>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Wedding Date"
                className="p-3 rounded border w-full focus:outline-none focus:ring-2 focus:ring-brand-secondary text-gray-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your dream wedding..."
                className="p-3 rounded border w-full min-h-[140px] focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                required
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-4 py-3 rounded bg-green-600 text-white disabled:opacity-60 hover:bg-green-700 transition"
              >
                {status === 'loading' ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
