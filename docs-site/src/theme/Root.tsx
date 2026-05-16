import React from 'react';
import AiTutor from '@site/src/components/AiTutor/AiTutor';
import SelectionTutor from '@site/src/components/AiTutor/SelectionTutor';

export default function Root({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <>
      {children}
      <AiTutor />
      <SelectionTutor />
    </>
  );
}
