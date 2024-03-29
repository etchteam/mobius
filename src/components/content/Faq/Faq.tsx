import cx from 'classnames';
import React, { useState } from 'react';

import styles from './Faq.module.scss';

import Card from 'components/canvas/Card/Card';
import Title from 'components/content/Title/Title';
import Collapse from 'components/controls/Collapse/Collapse';

interface FaqProps {
  question: React.ReactNode;
  children?: React.ReactNode;
}

const Faq = ({ question, children }: FaqProps) => {
  const [open, setOpen] = useState<boolean>();

  return (
    <div
      className={cx(styles.faq, { [styles['faq--open']]: open })}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <Card muted={!open} border={open} shadow={open}>
        <Card.Body>
          <Collapse
            onToggle={setOpen}
            headerLabel={
              <Title as="h3" size="h4">
                <span itemProp="name">{question}</span>
              </Title>
            }
            align="right"
          >
            <div
              className={styles.faq__content}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              {children}
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Faq;
