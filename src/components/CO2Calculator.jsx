import React, { useState } from "react";

const CO2Calculator = () => {
  const [transportType, setTransportType] = useState("car");
  const [distance, setDistance] = useState(0);
  const [result, setResult] = useState(null);

  const emissionFactors = {
    car: 0.21,        // кг CO₂ на км
    bus: 0.1,
    train: 0.05,
    airplane: 0.285,
  };

  const calculate = () => {
    const factor = emissionFactors[transportType] || 0;
    const totalCO2 = distance * factor;
    setResult(totalCO2.toFixed(2));
  };

  return (
    <div className="p-4 rounded-xl shadow-md bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Калькулятор CO₂</h2>

      <label className="block mb-2">Тип транспорта:</label>
      <select
        className="w-full p-2 mb-4 border rounded"
        value={transportType}
        onChange={(e) => setTransportType(e.target.value)}
      >
        <option value="car">Автомобиль</option>
        <option value="bus">Автобус</option>
        <option value="train">Поезд</option>
        <option value="airplane">Самолет</option>
      </select>

      <label className="block mb-2">Расстояние (км):</label>
      <input
        className="w-full p-2 mb-4 border rounded"
        type="number"
        value={distance}
        onChange={(e) => setDistance(Number(e.target.value))}
      />

      <button
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        onClick={calculate}
      >
        Рассчитать
      </button>

      {result !== null && (
        <div className="mt-4 text-lg">
          Оценка CO₂: <strong>{result} кг</strong>
        </div>
      )}
    </div>
  );
};

export default CO2Calculator;
