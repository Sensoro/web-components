import { Button, ImageComparer } from '@sensoro-design/web-react';

export const App = () => {
  return (
    <>
      <Button type="primary">主要按钮</Button>
      <Button>默认按钮</Button>
      <Button type="dashed">虚框按钮</Button>

      <br />
      <br />

      <Button type="primary" disabled>
        主要按钮
      </Button>
      <Button disabled>默认按钮</Button>
      <Button type="dashed" disabled>
        虚框按钮
      </Button>

      <br />
      <br />

      <ImageComparer position={30}>
        <img
          slot="before"
          src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&sat=-100&bri=-5"
          alt="Grayscale version of kittens in a basket looking around."
        />
        <img
          slot="after"
          src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt="Color version of kittens in a basket looking around."
        />
      </ImageComparer>
    </>
  );
};
