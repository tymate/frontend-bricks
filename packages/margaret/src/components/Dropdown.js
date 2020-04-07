import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import styled from 'styled-components';
import { ButtonReset } from '../ui';
import { motion } from 'framer-motion';

const PopoverInner = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 2;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const InputButton = styled(ButtonReset)`
  text-align: left;
  width: 100%;
  display: block;
`;

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
    // eslint-disable-next-line
  }, []);
};

const Dropdown = (
  {
    trigger,
    triggerIcon,
    children,
    top,
    right,
    onToggle,
    wrapperStyle,
    containerStyle,
    disabled,
    shouldCloseDropdownOnTriggerClick,
    verticalPosition,
    ...props
  },
  ref,
) => {
  const containerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    close: () => {
      close();
    },
    open: () => {
      open();
    },
    isOpen,
  }));

  const close = () => setIsOpen(false);
  const open = () => {
    setMenuIsVisible(true);
    setIsOpen(true);
  };

  useOnClickOutside(containerRef, close);

  useEffect(
    () => {
      if (!onToggle) {
        return;
      }
      onToggle(isOpen);
    },
    // eslint-disable-next-line
    [isOpen],
  );

  const handleAnimationComplete = () => {
    if (!isOpen) {
      setMenuIsVisible(false);
    }
  };

  return (
    <Wrapper ref={containerRef} style={{ ...(wrapperStyle || {}) }}>
      <InputButton
        type="button"
        onClick={() => {
          if (disabled) {
            return;
          }
          setIsOpen(shouldCloseDropdownOnTriggerClick ? !isOpen : true);
        }}
      >
        {typeof trigger === 'function' ? trigger(isOpen) : trigger}
      </InputButton>

      <PopoverInner
        initial={{
          opacity: 0,
          transform:
            verticalPosition === 'top'
              ? 'translateY(10px)'
              : 'translateY(-10px)',
        }}
        transition={{ ease: 'easeOut', duration: 0.2 }}
        onAnimationStart={() => setMenuIsVisible(true)}
        onAnimationComplete={handleAnimationComplete}
        animate={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen
            ? 'translateY(0px)'
            : verticalPosition === 'top'
            ? 'translateY(10px)'
            : 'translateY(-10px)',
        }}
      >
        {menuIsVisible && children}
      </PopoverInner>
    </Wrapper>
  );
};

export default forwardRef(Dropdown);
