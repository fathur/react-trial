import Button from '@/components/base/Button';
import Card from '@/components/base/Card';
import { useCallback, useState } from 'react';
import Subscription from '@/components/Subscription';

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleStore = useCallback(() => {
    setLoading(true);
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Button
          size="xs"
          className="mx-1"
          loading={loading}
          loadingText={loading ? 'Sedang menyimpan' : ''}
          onClick={handleStore}
        >
          Button
        </Button>
        <Button size="sm" className="mx-1">
          Button
        </Button>
        <Button className="mx-1">Button</Button>
        <Button size="lg" className="mx-1">
          Button
        </Button>
        <Button size="xl" className="mx-1" loading>
          Button
        </Button>

        <Button size="xl" className="mx-1" disable>
          Button
        </Button>
      </div>

      <div className="container mx-auto">
        <Card>
          <Card.Body>konen</Card.Body>
        </Card>
      </div>

      <div className="container mx-auto ">
        <div className="grid grid-cols-3 gap-4 ">
          <Subscription title="Beginner" />
          <Subscription title="Enterprise" />
          <Subscription title="Team" />
        </div>
      </div>
    </>
  );
};

export default Home;
