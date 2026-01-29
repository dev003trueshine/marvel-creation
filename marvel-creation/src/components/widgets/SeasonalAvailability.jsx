import Icon from "components/ui/AppIcon";

const SeasonalAvailability = () => {
  const seasonalData = [
    {
      month: "January",
      varieties: [
        { name: "Alphonso", status: "unavailable" },
        { name: "Kesar", status: "unavailable" },
        { name: "Dasheri", status: "unavailable" },
        { name: "Langra", status: "unavailable" }
      ]
    },
    {
      month: "February",
      varieties: [
        { name: "Alphonso", status: "unavailable" },
        { name: "Kesar", status: "unavailable" },
        { name: "Dasheri", status: "unavailable" },
        { name: "Langra", status: "unavailable" }
      ]
    },
    {
      month: "March",
      varieties: [
        { name: "Alphonso", status: "unavailable" },
        { name: "Kesar", status: "unavailable" },
        { name: "Dasheri", status: "unavailable" },
        { name: "Langra", status: "unavailable" }
      ]
    },
    {
      month: "April",
      varieties: [
        { name: "Alphonso", status: "available" },
        { name: "Kesar", status: "unavailable" },
        { name: "Dasheri", status: "unavailable" },
        { name: "Langra", status: "unavailable" }
      ]
    },
    {
      month: "May",
      varieties: [
        { name: "Alphonso", status: "peak" },
        { name: "Kesar", status: "available" },
        { name: "Dasheri", status: "unavailable" },
        { name: "Langra", status: "unavailable" }
      ]
    },
    {
      month: "June",
      varieties: [
        { name: "Alphonso", status: "ending" },
        { name: "Kesar", status: "peak" },
        { name: "Dasheri", status: "available" },
        { name: "Langra", status: "unavailable" }
      ]
    },
    {
      month: "July",
      varieties: [
        { name: "Alphonso", status: "unavailable" },
        { name: "Kesar", status: "ending" },
        { name: "Dasheri", status: "peak" },
        { name: "Langra", status: "available" }
      ]
    },
    {
      month: "August",
      varieties: [
        { name: "Alphonso", status: "unavailable" },
        { name: "Kesar", status: "unavailable" },
        { name: "Dasheri", status: "ending" },
        { name: "Langra", status: "peak" }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "peak":
        return "bg-success text-white";
      case "available":
        return "bg-warning text-white";
      case "ending":
        return "bg-danger text-white";
      default:
        return "bg-body text-body";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "peak":
        return "CheckCircleIcon";
      case "available":
        return "ClockIcon";
      case "ending":
        return "ExclamationTriangleIcon";
      default:
        return "XCircleIcon";
    }
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-primary-10 rounded-full mb-3">
            <Icon name="CalendarDaysIcon" size={18} className="text-primary" variant="solid" />
            <span className="text-sm fw-semibold text-primary">Seasonal Guide</span>
          </div>
          <h2 className="fw-bold text-4xl text-primary mb-3">
            Mango Availability Calendar
          </h2>
          <p className="text-lg m-0">
            Plan your orders with our seasonal availability guide. Each variety has its peak season
            for optimal taste and quality.
          </p>
        </div>

        {/* Legend */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {[
            { status: "peak", label: "Peak Season" },
            { status: "available", label: "Available" },
            { status: "ending", label: "Season Ending" },
            { status: "unavailable", label: "Out of Season" }
          ].map((item) => (
            <div key={item.status} className="d-flex align-items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`} />
              <span className="text-sm fw-medium text-heading">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="bg-card rounded-2xl shadow-organic border overflow-hidden">
          <div className="table-responsive">
            <table className="table rounded-2xl overflow-hidden seasonal-guide-table">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left fw-bold">Month</th>
                  <th className="px-6 py-4 text-center fw-bold">Alphonso</th>
                  <th className="px-6 py-4 text-center fw-bold">Kesar</th>
                  <th className="px-6 py-4 text-center fw-bold">Dasheri</th>
                  <th className="px-6 py-4 text-center fw-bold">Langra</th>
                </tr>
              </thead>
              <tbody>
                {seasonalData.map((monthData, index) => (
                  <tr
                    key={monthData.month}
                  >
                    <td className="px-6 py-4 fw-semibold text-heading">
                      {monthData.month}
                    </td>
                    {monthData.varieties.map((variety) => (
                      <td key={variety.name} className="px-6 py-4 text-center">
                        <div className="d-flex justify-content-center">
                          <div
                            className={`d-inline-flex align-items-center gap-1 px-3 py-1.5 rounded-full ${getStatusColor(
                              variety.status
                            )}`}
                          >
                            <Icon
                              name={getStatusIcon(variety.status)}
                              size={16}
                              variant="solid"
                            />
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-5 d-grid md-grid-cols-3 gap-4">
          <div className="bg-card rounded-xl p-6 shadow-organic border">
            <div className="d-flex align-items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-10 rounded-lg d-flex align-items-center justify-content-center">
                <Icon name="BellAlertIcon" size={24} className="text-primary" variant="solid" />
              </div>
              <div>
                <h3 className="fw-bold text-lg text-primary mb-2">
                  Pre-Order Available
                </h3>
                <p className="text-sm m-0">
                  Reserve your favorite varieties before the season starts. Get notified when
                  they&apos;re ready.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-organic border border-border">
            <div className="d-flex align-items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-10 rounded-lg d-flex align-items-center justify-content-center">
                <Icon name="SparklesIcon" size={24} className="text-accent" variant="solid" />
              </div>
              <div>
                <h3 className="fw-bold text-lg text-primary mb-2">
                  Peak Season Quality
                </h3>
                <p className="text-sm text-muted-foreground">
                  Order during peak season for the best taste, aroma, and natural sweetness.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-organic border">
            <div className="d-flex align-items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-success-10 rounded-lg d-flex align-items-center justify-content-center">
                <Icon name="TruckIcon" size={24} className="text-success" variant="solid" />
              </div>
              <div>
                <h3 className="fw-bold text-lg text-primary mb-2">
                  Year-Round Pulp
                </h3>
                <p className="text-sm m-0">
                  Enjoy authentic mango taste anytime with our preservative-free pulp products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalAvailability;
