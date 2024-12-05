import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const PufferUrls = () => {
  const urls = [
    {
      id: 1,
      name: 'Puffer Finance',
      url: 'https://chatgpt.com/g/g-8Oh5JO9Kb-puffer-finance'
    },
    {
      id: 2,
      name: 'Puffer Finance(DEV)',
      url: 'https://chatgpt.com/g/g-f9WEy0SIU-puffer-finance-dev'
    },
    {
      id: 3,
      name: 'Puffer UniFi',
      url: 'https://chatgpt.com/g/g-MffOPqey9-puffer-unifi'
    },
    {
      id: 4,
      name: 'Puffer UniFi AVS',
      url: 'https://chatgpt.com/g/g-VYgu6R6Ir-puffer-unifi-avs'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">Puffer Finance GPT URLs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {urls.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="font-medium text-gray-700">{item.name}</div>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <span className="mr-2">Visit</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PufferUrls;