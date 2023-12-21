import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { cx } from '../../clsx';

interface ModalProps {
  children: React.ReactNode;
  onClose: Function;
  isOpen: boolean;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children } = props
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClose={() => onClose()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black opacity-60" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel
            style={{ transform: 'matrix(1, 0.02, -0.02, 1, 0, 0)' }}
            className="py-4 bg-secondary-50 px-10 shadow-md w-full h-full md:w-[42%] md:h-auto relative"
          >
            {/* <button
              onClick={() => onClose()}
              className={cx(
                'flex justify-center items-center cursor-pointer',
                'absolute w-10 h-10 -top-3 -right-2.5 bg-primary-300 p-3'
              )}
            >
              <Icon name="X" alt="close-icon" />
            </button> */}

            <div
              style={{ transform: 'matrix(1, -0.02, 0.02, 1, 0, 0)' }}
              className="my-10"
            >
              {children}
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
