import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import styled from 'styled-components';
import { StyledButtonReset } from '../ui';
import { motion, AnimatePresence } from 'framer-motion';

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

const InputButton = styled(StyledButtonReset)`
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

  useImperativeHandle(ref, () => ({
    close: () => {
      close();
    },
    open: () => {
      open();
    },
    isOpen,
  }));

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
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
        onClick={e => {
          e.preventDefault();

          if (disabled) {
            return;
          }
          setIsOpen(shouldCloseDropdownOnTriggerClick ? !isOpen : true);
        }}
      >
        {typeof trigger === 'function' ? trigger(isOpen) : trigger}
      </InputButton>

      <AnimatePresence>
        {isOpen && (
          <PopoverInner
            transition={{ ease: 'easeOut', duration: 0.2 }}
            initial={{
              opacity: 0,
              transform:
                verticalPosition === 'top'
                  ? 'translateY(10px)'
                  : 'translateY(-10px)',
            }}
            animate={{
              opacity: 1,
              transform: 'translateY(0px)',
            }}
            exit={{
              opacity: 0,
              transform:
                verticalPosition === 'top'
                  ? 'translateY(10px)'
                  : 'translateY(-10px)',
            }}
          >
            {children}
          </PopoverInner>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default forwardRef(Dropdown);
