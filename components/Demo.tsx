import React, { useState } from 'react';
import cx from 'classnames';

function Demo() {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={cx('cursor-pointer', { 'animate-bounce': clicked })}
      onClick={() => setClicked(!clicked)}
    >
      Neat demo!
    </div>
  );
}

export default Demo;
