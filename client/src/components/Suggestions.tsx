import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Suggestions() {
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim() || isLoading) return;

    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ suggestion: suggestion.trim() }),
      });

      if (!response.ok) throw new Error('Failed to submit suggestion');
      
      setStatus('success');
      setSuggestion('');
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full py-20 px-4 md:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Suggestions</h2>
        
        <div className="bg-black/50 border-2 border-red-500 rounded-lg p-6">
          <p className="text-gray-300 mb-6">
            Have ideas for improving our services? We'd love to hear them! Your suggestions help us make our platform better for everyone.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="Share your thoughts and ideas..."
              className="w-full h-32 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-red-500 resize-none"
              disabled={isLoading}
            />
            
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500"
              >
                Thank you for your suggestion!
              </motion.p>
            )}
            
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500"
              >
                Failed to submit suggestion. Please try again.
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <Send size={20} />
              {isLoading ? 'Submitting...' : 'Submit Suggestion'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
