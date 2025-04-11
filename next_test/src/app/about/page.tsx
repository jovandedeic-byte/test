import React from "react";
import Socket from "@/components/Socket"; // We'll create this next

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <Socket />
    </div>
  );
};

export default page;
