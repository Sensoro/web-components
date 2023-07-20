import { Button, Icon } from '@sensoro-design/web-react';
import AccountBookFilled from '@sensoro-design/web-react/icons/AccountBookFilled';

export const App = () => {
  return (
    <>
      <Button type="primary">标准按钮</Button>

      <Icon icon={AccountBookFilled} />
    </>
  );
};
