import { CarType } from "@/app/common/types/car.type";
import { create } from "zustand";

interface CarStore {
    cars: CarType[];
    selectedCar: CarType | null;
    selectCar: (car: CarType) => void;
    clearSelection: () => void;
    isCarSelected: (car: CarType) => boolean;
}

const initialCars: CarType[] = [
    {
        id: 3,
        model: "Corvette C7",
        manufacturingYear: 2019,
        mileage: 15000,
        price: 1.5,
        acceleration: 3.7,
        dealer: "Chevrolet Performance",
        modelUrl: "models/corvette_c7.glb",
        imageUrl: "/images/corvette_c7.png",
        photoUrls: [
            "/corvette_c7_1.jpg",
            "/corvette_c7_2.jpg",
            "/corvette_c7_3.jpg",
        ],
    },
    {
        id: 4,
        model: "Corvette C7",
        manufacturingYear: 2019,
        mileage: 15000,
        price: 1.5,
        acceleration: 3.7,
        dealer: "Chevrolet Performance",
        modelUrl: "models/corvette_c7.glb",
        imageUrl: "/images/corvette_c7.png",
        photoUrls: [
            "/corvette_c7_1.jpg",
            "/corvette_c7_2.jpg",
            "/corvette_c7_3.jpg",
        ],
    },
    {
        id: 5,
        model: "Corvette C7",
        manufacturingYear: 2019,
        mileage: 15000,
        price: 1.5,
        acceleration: 3.7,
        dealer: "Chevrolet Performance",
        modelUrl: "models/corvette_c7.glb",
        imageUrl: "/images/corvette_c7.png",
        photoUrls: [
            "/corvette_c7_1.jpg",
            "/corvette_c7_2.jpg",
            "/corvette_c7_3.jpg",
        ],
    },
    {
        id: 6,
        model: "Maserati Ghibli Hybrid",
        manufacturingYear: 2022,
        mileage: 10000,
        price: 2.1,
        acceleration: 5.7,
        dealer: "Maserati Luxury Motors",
        modelUrl: "models/maserati_ghibli_hybrid.glb",
        imageUrl: "/images/maserati_ghibli_hybrid.png",
        photoUrls: [
            "/maserati_ghibli_hybrid_1.jpg",
            "/maserati_ghibli_hybrid_2.jpg",
            "/maserati_ghibli_hybrid_3.jpg",
        ],
    },
    {
        id: 7,
        model: "Maserati Ghibli Hybrid",
        manufacturingYear: 2022,
        mileage: 10000,
        price: 2.1,
        acceleration: 5.7,
        dealer: "Maserati Luxury Motors",
        modelUrl: "models/maserati_ghibli_hybrid.glb",
        imageUrl: "/images/maserati_ghibli_hybrid.png",
        photoUrls: [
            "/maserati_ghibli_hybrid_1.jpg",
            "/maserati_ghibli_hybrid_2.jpg",
            "/maserati_ghibli_hybrid_3.jpg",
        ],
    },
    {
        id: 8,
        model: "Maserati Ghibli Hybrid",
        manufacturingYear: 2022,
        mileage: 10000,
        price: 2.1,
        acceleration: 5.7,
        dealer: "Maserati Luxury Motors",
        modelUrl: "models/maserati_ghibli_hybrid.glb",
        imageUrl: "/images/maserati_ghibli_hybrid.png",
        photoUrls: [
            "/maserati_ghibli_hybrid_1.jpg",
            "/maserati_ghibli_hybrid_2.jpg",
            "/maserati_ghibli_hybrid_3.jpg",
        ],
    },
];

const useCars = create<CarStore>((set, get) => ({
    cars: initialCars,
    selectedCar: null,

    selectCar: (car: CarType) => set({ selectedCar: car }),

    clearSelection: () => set({ selectedCar: null }),

    isCarSelected: (car: CarType) => {
        const state = get();
        return state.selectedCar?.id === car.id;
    },
}));

export default useCars;
