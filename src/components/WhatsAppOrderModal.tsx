import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Phone, Upload, Check, AlertCircle, FileText, Clock, MapPin, User, Mail, ShieldAlert } from 'lucide-react';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicineName = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(initialMedicineName);
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('Yes');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('Urgent / As soon as possible');

  useEffect(() => {
    if (initialMedicineName) {
      setMedicineName(initialMedicineName);
    }
  }, [initialMedicineName]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionFile(file);
      setHasPrescription('Yes');
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !mobileNumber.trim() || !medicineName.trim()) {
      alert('Please fill in your Name, Phone Number, and Medicine Required.');
      return;
    }

    const prescriptionText = hasPrescription === 'Yes' 
      ? (prescriptionFile ? `Attached (${prescriptionFile.name})` : 'Yes (Will send photo in WhatsApp chat)') 
      : 'No';

    const formattedText = 
`Hello New Ajay Medical Hall,
*NEW MEDICINE ORDER REQUEST*

👤 *Customer Name:* ${customerName.trim()}
📞 *Phone:* ${mobileNumber.trim()}
📧 *Email:* ${email.trim() || 'N/A'}
💊 *Medicine Required:* ${medicineName.trim()}
🏡 *Address:* ${address.trim() || 'Pickup from store / Address in chat'}
📋 *Prescription:* ${prescriptionText}
⏰ *Preferred Delivery Time:* ${deliveryTime}
📝 *Notes/Message:* ${message.trim() || 'N/A'}

---
Order sent via New Ajay Medical Hall Website (Jehanabad)`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/919939467567?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden transition-all transform animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <MessageSquare className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">WhatsApp Medicine Order Form</h3>
              <p className="text-xs text-emerald-100">Fast delivery across Jehanabad & Mallachak More</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Notice banner */}
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2.5 text-xs text-emerald-800 dark:text-emerald-300">
            <ShieldAlert className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span>
              Your order detail will open directly in WhatsApp with a formatted summary. You can attach doctor prescriptions directly in chat!
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number (WhatsApp) <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9939467567"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="e.g. email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Preferred Delivery Time */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none appearance-none"
                >
                  <option value="Urgent / As soon as possible">Urgent / Immediate</option>
                  <option value="Morning (8:00 AM - 12:00 PM)">Morning (8 AM - 12 PM)</option>
                  <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4:00 PM - 9:00 PM)">Evening (4 PM - 9 PM)</option>
                  <option value="Store Self Pickup">Store Self Pickup (Mallachak More)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Medicine Name Required */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine / Health Product Names <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <textarea
                required
                rows={2}
                placeholder="List medicine names, strips required, or general items (e.g. Crocin 650 x 2 strips, Dettol 500ml)..."
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address in Jehanabad
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="House No, Landmark, Locality in Jehanabad (e.g. Near Bus Stand, Mallachak)..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Prescription Radio & File Upload */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Do you have a Doctor's Prescription?
              </span>
              <div className="flex items-center gap-4 text-xs font-medium">
                <label className="inline-flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="Yes"
                    checked={hasPrescription === 'Yes'}
                    onChange={() => setHasPrescription('Yes')}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Yes</span>
                </label>
                <label className="inline-flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="No"
                    checked={hasPrescription === 'No'}
                    onChange={() => setHasPrescription('No')}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>No (OTC / Non-Rx)</span>
                </label>
              </div>
            </div>

            {hasPrescription === 'Yes' && (
              <div>
                <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Upload Prescription Photo / PDF (Optional - or send directly in WhatsApp)
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 cursor-pointer transition-colors">
                    <Upload className="w-4 h-4 text-emerald-600" />
                    <span>{prescriptionFile ? prescriptionFile.name : 'Choose File (Image or PDF)'}</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
                {previewUrl && (
                  <div className="mt-2 flex items-center gap-2">
                    <img src={previewUrl} alt="Prescription preview" className="w-12 h-12 object-cover rounded-lg border border-slate-200" />
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Prescription photo attached</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Notes / Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Special Instructions / Notes
            </label>
            <input
              type="text"
              placeholder="e.g. Call before coming, prefer specific brand..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Order via WhatsApp</span>
            </button>
            <a
              href="tel:9939467567"
              className="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Store Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
