"use client"
import React, { useEffect, useState } from "react";

type Item = {
  user_id: string;
  password: string;
  phone_usage_count: number;
  username: string;
};

const Page: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.map((item: any) => ({
          phone_usage_count: parseInt(item.phone_usage_count.N, 10),
          username: item.username.S,
        }));
        transformedData.sort(
          (a:any , b: any) => b.phone_usage_count - a.phone_usage_count
        );
        setItems(transformedData);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

return (
  <div className="bg-black text-white min-h-screen space-y-4 p-10">
    {items.map((item, index) => (
      <div
        key={index}
        className="flex justify-between border-2 border-gray-200 p-4 rounded-md max-w-screen-sm mx-auto"
      >
        <p className="font-bold">{item.username}</p>
        <p>{item.phone_usage_count}</p>
      </div>
    ))}
  </div>
);
};

export default Page;
