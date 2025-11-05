import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.feedback) {
      setSubmittedData({ ...formData });
      setFormData({ name: '', email: '', feedback: '' });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium mb-2">
                Feedback
              </label>
              <Textarea
                id="feedback"
                name="feedback"
                placeholder="Share your feedback..."
                value={formData.feedback}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            
            <Button type="submit" className="w-full">
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>

      {submittedData && (
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Submitted Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <strong>Name:</strong> {submittedData.name}
            </div>
            <div>
              <strong>Email:</strong> {submittedData.email}
            </div>
            <div>
              <strong>Feedback:</strong> {submittedData.feedback}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FeedbackForm;
