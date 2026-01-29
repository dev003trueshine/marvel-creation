import Icon from '../ui/AppIcon';
import { Container, Row, Col } from "react-bootstrap";
const TrustBadges = () => {
  const badges = [
    {
      id: 1,
      icon: 'CheckBadgeIcon',
      title: '500+ Happy Families',
      description: 'Trusted by customers across India',
      color: 'text-success'
    },
    {
      id: 2,
      icon: 'TruckIcon',
      title: '24-Hour Delivery',
      description: 'Fresh fruits delivered fast',
      color: 'text-warning'
    },
    {
      id: 3,
      icon: 'ShieldCheckIcon',
      title: '100% Quality Guarantee',
      description: 'Farm-direct freshness assured',
      color: 'text-primary'
    },
    {
      id: 4,
      icon: 'SparklesIcon',
      title: 'Naturally Ripened',
      description: 'No artificial chemicals used',
      color: 'text-secondary'
    }
  ];

  return (
    <section className="py-12 bg-muted">
      <Container>
        <Row className="gy-4">
            {badges.map((badge) => (
              <Col lg="3" sm="6" col="12">
                  <div
                    key={badge.id}
                    className="p-4 d-flex flex-column align-items-center bg-gray-900 rounded-xl shadow-lg shadow-card-lg-hover"
                  >
                    <div className={`mb-3 ${badge.color}`}>
                      <Icon name={badge.icon} size={48} variant="solid" />
                    </div>
                    <h3 className="fw-bold text-lg mb-2">
                      {badge.title}
                    </h3>
                    <p className="text-sm m-0">
                      {badge.description}
                    </p>
                  </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrustBadges;