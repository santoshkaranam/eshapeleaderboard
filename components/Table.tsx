/* This example requires Tailwind CSS v2.0+ */

import React, {useEffect, useState} from "react";

interface Score {
    userName: string;
    userId: string;
    surveyCount: number;
    totalImagesUploadedCount: number;
    rank: number;
}

export default function LeaderBoard() {
    const [data, setData] = useState(undefined as unknown as Score[]);
    useEffect
    (() => {
        fetch('https://eshapeapi.geo-wiki.org/leaderboard').then(r => r.json()).then(data => {
            console.log(data);
            setData(data);
        })
    }, [])

    function downloadCsv() {
        fetch('https://eshapeapi.geo-wiki.org/leaderboard?csvDownload=true').then(data => data.blob()).then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = "leaderboard.csv";
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();
            a.remove();
        })
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 ">
            <div className="sm:flex sm:items-center ">
                <div className="sm:flex-auto pt-12 " >
                    <h1 className="text-2xl text-center font-semibold text-gray-900"><a
                        href='https://cropobserve.org/'>CropObserve</a> Leader Board</h1>
                </div>
                <div className="mt-12 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        onClick={downloadCsv}
                        type="button"
                        className="inline-flex rounded-lg items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Download csv
                    </button>
                </div>
            </div>
            <div className="py-8 flex flex-col  ">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg ">
                            <table className="min-w-full divide-y divide-gray-300  bg-white opacity-75">
                                <thead className="px-3 py-4">
                                <tr>
                                    <th scope="col"
                                        className="px-3 py-4 text-left text-lg font-bold text-gray-1200 sm:pl-6">
                                        Rank
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-lg font-bold text-gray-900">
                                        UserName
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-lg font-bold text-gray-900">
                                        Total Surveys Uploaded
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-lg font-bold text-gray-900">
                                        Total Images Uploaded
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-900">
                                {data !== undefined && data.map((item) => (
                                    <tr key={item.rank} className="border-2">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md font-medium text-gray-900 sm:pl-6">
                                            {item.rank}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-md text-gray-900">{item.userName}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-md text-gray-900">{item.surveyCount}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-md text-gray-900">{item.totalImagesUploadedCount}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}