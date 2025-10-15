import { Disclosure } from '@headlessui/react';
import { classNames } from './utils';

export default function MobileMenu({ navigation }) {
    return (
        <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                    <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                            item.current
                                ? 'bg-gray-950/50 text-white'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                    >
                        {item.name}
                    </Disclosure.Button>
                ))}
            </div>
        </Disclosure.Panel>
    );
}
