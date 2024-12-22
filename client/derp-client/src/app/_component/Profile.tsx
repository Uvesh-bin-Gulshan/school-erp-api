import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BiSolidDetail } from "react-icons/bi";

interface ProfileSectionProps {
  id: string;
  basic_info:any;
  other_info:any;
  endpoint: string;
  title: string;
}

const Profile: React.FC<ProfileSectionProps> = ({ id, endpoint, basic_info,other_info,title }) => {
  console.log(basic_info,"basic")
  console.log(other_info,"other")
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleRetrieve = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${endpoint}/${id}`);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        setError('Failed to load profile data.');
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError('Error loading profile data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger onClick={handleRetrieve} className="cursor-pointer text-lg text-cyan-700" asChild>
        <BiSolidDetail />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] min-w-[70%] max-h-[90vh]   ">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          basic_info && (
            <div className="text-gray-600 body-font max-h-[70vh]  overflow-auto side-scroll-bar">
              <div className="container mx-auto flex flex-col items-center ">
              
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{basic_info || 'Name not available'}</h2>
                      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                      <p className="text-base">{basic_info || 'Description not available'}</p>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    {Object.entries(data).map(([key, value]) => (
                      <p key={key} className="leading-relaxed text-lg mb-4">
                        <strong>{key}: </strong>{String(value)}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg h-64 overflow-hidden mb-6">
                  {data.imageUrl ? (
                    <img alt="Profile" className="object-cover object-center h-full w-full" src={data.imageUrl} />
                  ) : (
                    <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                      <span>No Image Available</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Profile;
