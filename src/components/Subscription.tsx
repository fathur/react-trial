import Card from '@/components/base/Card';
import Button from '@/components/base/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface PropsType {
  title: string;
}

const choosePlan = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log('pan');
};
const Subscription: React.FC<PropsType> = ({ title }) => (
  <Card className="prose prose-pink max-w-none text-center">
    <Card.Body>
      <h3>{title}</h3>

      <Button onClick={choosePlan}>
        Choose Plan <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </Card.Body>
  </Card>
);

export default Subscription;
