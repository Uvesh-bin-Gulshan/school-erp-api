import React, { useEffect, useState } from 'react';
import { BiSolidDetail } from "react-icons/bi";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface RetrieveDetailProps {
  id: string;
  endpoint: string;
  onSuccess: (data: any) => void;
  item: string;
}

const RetrieveDetail: React.FC<RetrieveDetailProps> = ({ item, id, endpoint, onSuccess }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleRetrieve = async () => {
    try {
      const response = await fetch(`${endpoint}/${id}`, {
        method: 'GET',
      });

      if (response.ok) {
        const result = await response.json();
        setData(result);
        onSuccess(result);
        console.log("Item retrieved successfully");
      } else {
        console.log("Failed to retrieve item");
      }
    } catch (error) {
      console.error("Error retrieving", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger onClick={handleRetrieve} className="cursor-pointer text-lg text-cyan-700" asChild>
        <BiSolidDetail />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] min-w-[70%] max-h-[90vh] overflow-auto side-scroll-bar">
        <DialogHeader>
          <DialogTitle>{item} Details</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        {error && <p className="text-red-500">{error}</p>}
        {data && (
          <table className="table-auto w-full border-collapse">
            <tbody className="grid gap-4 text-left grid-cols-2">
              {Object.entries(data).map(([key, value]) => (
                <tr key={key} className="border-b flex justify-between">
                  <td className="font-semibold text-center w-full text-gray-700 py-2 px-4">{key}</td>
                  <td className="py-2 px-4 text-center w-full  text-gray-800">{value}</td>
                </tr>
              ))}
              <hr/>
            </tbody>
          </table>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RetrieveDetail;
