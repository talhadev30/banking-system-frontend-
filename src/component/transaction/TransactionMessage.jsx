import React from "react";
import { CheckCircle, Loader, XCircle } from "lucide-react";

const TransactionPopup = ({ open, data, onClose }) => {

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-xl text-center">

                <div className="flex justify-center mb-4">
                    {data?.transaction?.status === "SUCCESS" ||
                    data?.transaction?.status === "PENDING"  ? (
                        <CheckCircle className="text-green-500" size={60} />
                    ) : (
                        <XCircle className="text-red-500" size={60} />
                    )}
                </div>

                <h2 className="text-2xl font-bold">{data.message}</h2>


                <button onClick={onClose} className="mt-6 w-full bg-violet-600 text-white py-3 rounded-xl hover:bg-violet-700">
                    OK
                </button>
            </div>
        </div>
    );
};

export default TransactionPopup;