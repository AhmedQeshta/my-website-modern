'use client';
import { Modal } from '@/utils';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    wb: {
      messageSkipWaiting(): void;
      register(): void;
      addEventListener(name: string, callback: () => unknown): void;
    };
  }
}

export const PwaUpdater = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const onConfirmActivate = () => wb.messageSkipWaiting();

  // useEffect(() => {
  //   wb.addEventListener('controlling', () => {
  //     window.location.reload();
  //   });

  //   wb.addEventListener('waiting', () => setIsOpen(true));
  //   wb.register();
  // }, []);

  return (
    <Modal title="New version available!">
      <div className="p-6 space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Hey, a new version is available! Please click below to update.
        </p>
      </div>

      <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          // onClick={onConfirmActivate}
          data-modal-hide="defaultModal"
          type="button"
          className="text-white bg-#F7AB0A hover:bg-#F7AB0A/40 focus:ring-4 focus:outline-none focus:ring-#F7AB0A/60 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Reload and update
        </button>
        <button
          // onClick={() => setIsOpen(false)}
          data-modal-hide="defaultModal"
          type="button"
          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
          Decline
        </button>
      </div>
    </Modal>
  );
};

export default PwaUpdater;
