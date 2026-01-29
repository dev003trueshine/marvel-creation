import React from "react";
import Icon from "components/ui/AppIcon";

const Timeline = () => {
const milestones = [
  {
    year: '1985',
    title: 'The Beginning',
    description: 'Started with 5 acres of mango orchard in rural Maharashtra'
  },
  {
    year: '2005',
    title: 'Organic Transition',
    description: 'Fully converted to organic farming practices and obtained certifications'
  },
  {
    year: '2018',
    title: 'Direct-to-Customer',
    description: 'Launched farm-direct delivery service connecting with urban families'
  },
  {
    year: '2025',
    title: 'Today',
    description: 'Serving 500+ families with premium naturally ripened fruits'
  },
    {
    year: '2026',
    title: 'Today',
    description: 'Serving 500+ families with premium naturally ripened fruits'
  }
];
  return (
    <div className="position-relative">

        <div className="d-flex flex-column gap-48">
            {milestones.map((milestone, index) => (
            <div
                key={milestone.year}
                className={`d-flex flex-column flex-lg-row align-items-center gap-4 ${
                index % 2 === 0 ? "flex-lg-row" : "flex-lg-row-reverse"
                }`}
            >
                <div
                className={`flex-fill about-w-50 ${
                    index % 2 === 0 ? "text-lg-end" : "text-lg-start"
                }`}
                >
                    <div className="bg-card p-6 rounded-lg shadow-organic">
                        <h3 className="fw-bold text-2xl text-primary mb-2">
                        {milestone.year}
                        </h3>
                        <h4 className="fw-semibold text-xl mb-75">
                        {milestone.title}
                        </h4>
                        <span> {milestone.description}</span>
                    </div>
                </div>

                <div className="position-relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-circle d-flex align-items-center justify-content-center shadow-md">
                        <Icon
                        name="CheckBadgeIcon"
                        size={24}
                        className="text-white"
                        variant="solid"
                        />
                    </div>
                </div>

                <div className="flex-fill about-w-50 d-none d-lg-block"></div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Timeline;