import { useState, useEffect } from "react";

interface Pet {
  title: string;
  url: string;
  description: string; 
  date: string;     
}


const usePets = () => {

  const [pets, setPets] = useState<Pet[]>([]);
  const [sortedPets, setSortedPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [sortType, setSortType] = useState<"default" | "asc" | "desc">("default");

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch("https://eulerity-hackathon.appspot.com/pets");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Pet[] = await response.json();
      setPets(data);
      setSortedPets(data);
    } catch (err) {
      setError((err as Error).message || "Failed to fetch pets");
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (type: "default" | "asc" | "desc"): void => {
    setSortType(type);
    let sorted: Pet[];

    switch (type) {
      case "asc":
        sorted = [...sortedPets].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "desc":
        sorted = [...sortedPets].sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "default":
      default:
        sorted = [...pets];
        break;
    }

    setSortedPets(sorted);
  };

  const handleSelect = (url: string): void => {
    setSelectedImages((prev) =>
      prev.includes(url) ? prev.filter((item) => item !== url) : [...prev, url]
    );
  };

  const handleSelectAll = (): void => {
    setSelectedImages(pets.map((pet) => pet.url));
  };

  const handleClearSelection = (): void => {
    setSelectedImages([]);
  };

  const handleDownload = async (): Promise<void> => {
    try {
      for (const url of selectedImages) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to download ${url}`);
        const blob = await response.blob();
        const fileExtension = blob.type.split("/")[1]; 
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${url.split("/").pop()?.split(".")[0]}.${fileExtension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      setError((err as Error).message || "Failed to download images");
    }
  };

  return {
    pets,
    sortedPets,
    loading,
    error,
    selectedImages,
    sortType,
    handleSelect,
    handleSelectAll,
    handleClearSelection,
    handleDownload,
    handleSort,
    isSelected: (url: string): boolean => selectedImages.includes(url),
  };
};

export default usePets;
