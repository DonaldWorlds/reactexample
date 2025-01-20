// Import necessary components from react-bootstrap and styles from the CSS Module
import { Button, Stack } from 'react-bootstrap';
import styles from './ButtonComponent.module.css'; // Import the CSS Module

const ButtonComponent = () => {
  return (
    <Stack direction="horizontal" gap={2}>
      {/* Button as a link with custom primary style */}
      <Button as="a" href="#link1" className={styles.primaryButton}>
        Button as link
      </Button>

      {/* Button as a link with custom success style */}
      <Button as="a" href="#link2" className={styles.successButton}>
        Button as link
      </Button>
    </Stack>
  );
};

export default ButtonComponent;
