import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from '../WidgetForm';

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button
        className="
        flex 
        h-12 
        bg-brand-500 
        rounded-full 
        px-3 
        text-white 
        items-center 
        content-around 
        group
        "
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span
          className="
            max-w-0 
            overflow-hidden 
            group-hover:max-w-min transition-all duration-500 ease-linear
          "
        >
          Feedback
        </span>

      </Popover.Button>
    </Popover>
  );
}
