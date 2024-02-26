import { styled } from '@stitches/react';

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

<Flex gap="3" align="center">
  <Button size="3" variant="soft">
    Edit profile
  </Button>
  <Button size="2" variant="soft">
    Edit profile
  </Button>
  <Button size="1" variant="soft">
    Edit profile
  </Button>
</Flex>

export default Button;
