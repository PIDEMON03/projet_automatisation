import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';

const Accueil = () => {
    const [data, setData] = useState([]);
    const columns = useState({ Nom: 5, Prénom: 6, MoyennesCalculées: 9 });

    const handleCSVUpload = async (csvData, fileInfo) => {
        const formData = new FormData();
        formData.append('csvFile', new Blob([fileInfo.file], { type: 'text/csv' }));

        try {
            const response = await fetch('http://localhost:3000/api/data', {
                method: 'POST',
                mode: 'cors',
                body: formData,
            });

            if (response.ok) {
                setData(response.data);
                console.log('CSV file uploaded successfully');
            } else {
                console.error('Failed to upload CSV file');
            }
        } catch (error) {
            console.error('Error uploading CSV file:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Appli</h1>

            <CSVReader
                onFileLoaded={handleCSVUpload}
                parserOptions={{ header: false, dynamicTyping: true, skipEmptyLines: true }}
                cssClass="csv-reader-input"
            />

            {data.length > 0 && (
                <table className="border-collapse border border-gray-800 mt-4">
                    <thead>
                        <tr>
                            <th className="border border-gray-800 p-2">Nom</th>
                            <th className="border border-gray-800 p-2">Prénom</th>
                            <th className="border border-gray-800 p-2">Moyennes Calculées</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-gray-800 p-2">{row[columns.Nom]}</td>
                                <td className="border border-gray-800 p-2">{row[columns.Prénom]}</td>
                                <td className="border border-gray-800 p-2">{row[columns.MoyennesCalculées]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Accueil;
