import React from 'react';
import InfoBox from '@/components/infobox/InfoBox';
import BarChart from '@/components/graphic/BarChart';
import LatesIssues from '@/components/latestissues/LatesIssues';

const HomePage = () => {

  const data = [
    { label: 'Open', value: 11, color: 'bg-primary' },
    { label: 'In Progress', value: 5, color: 'bg-secondary' },
    { label: 'Closed', value: 4, color: 'bg-accent' },
  ];

  return (
    <div className="flex flex-col gap-10 xl:flex-row w-full min-w-xl mx-auto mt-10">
      <div className="w-full xl:w-1/2 flex flex-col gap-5">
        <div className="flex flex-wrap gap-5">
          <InfoBox title="Open Issues" value={11} />
          <InfoBox title="In-progress Issues" value={5} />
          <InfoBox title="Closed Issues" value={4} />
        </div>
        <BarChart data={data} />
      </div>
      <div className="w-full xl:w-1/2">
        <div className="p-4 w-full rounded-2xl bg-base-200">
          <h2 className="text-xl font-bold mb-10">Latest Issues</h2>
          <LatesIssues />
        </div>
      </div>
    </div>
  );

}

export default HomePage